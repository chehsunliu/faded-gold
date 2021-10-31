import React from "react";
import * as editor from "fadedgold/pages/swd3e/editor";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { actions as gameActions } from "fadedgold/pages/swd3e/gameSlice";
import { actions as metaActions } from "fadedgold/pages/swd3e/metaSlice";
import { actions as partyActions } from "fadedgold/pages/swd3e/partySlice";
import { BasicCommandBar } from "fadedgold/component/BasicCommandBar";
import { base64DecodeBuffer, base64EncodeBuffer } from "fadedgold/util";
import { GameProgress } from "fadedgold/pages/swd3e/GameProgress";
import { Party } from "fadedgold/pages/swd3e/Party";

const LOCAL_STORAGE_KEY = "swd3e/save";

export const SWD3E = () => {
  const dispatch = useAppDispatch();
  const { filename } = useAppSelector((state) => state.swd3e.meta);
  const { game, party } = useAppSelector((state) => state.swd3e);

  const handleUpload = (filename: string, buffer: ArrayBuffer) => {
    const info = editor.loadGameInfo(buffer);

    const b64Buffer = base64EncodeBuffer(buffer);
    localStorage.setItem(LOCAL_STORAGE_KEY, b64Buffer);

    dispatch(metaActions.filenameUpdated(filename));
    dispatch(gameActions.replaced(info.game));
    dispatch(partyActions.replaced(info.party));
  };

  const handleDownload = () => {
    if (filename === null) {
      return;
    }

    const b64 = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (b64 === null) {
      console.error("b64 blob is null");
      return;
    }

    const buffer = base64DecodeBuffer(b64);
    if (buffer === null) {
      console.error("buffer is null");
    }

    editor.overwriteGameInfo(buffer, { game, party });

    const blob = new Blob([new Uint8Array(buffer)]);
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    link.click();
  };

  return (
    <>
      <BasicCommandBar
        onUpload={handleUpload}
        onDownload={handleDownload}
        downloadDisabled={filename === null}
      />
      <GameProgress />
      <Party />
    </>
  );
};
