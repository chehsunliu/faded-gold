import React from "react";
import * as editor from "fadedgold/pages/swd3e/editor";
import { useAppDispatch, useAppSelector } from "fadedgold/redux/hook";
import { actions as gameActions } from "fadedgold/pages/swd3e/gameSlice";
import { actions as metaActions } from "fadedgold/pages/swd3e/metaSlice";
import { actions as partyActions } from "fadedgold/pages/swd3e/partySlice";
import { BasicCommandBar } from "fadedgold/component/BasicCommandBar";
import { base64EncodeBuffer } from "fadedgold/util";
import { GameProgress } from "fadedgold/pages/swd3e/GameProgress";

export const SWD3E = () => {
  const dispatch = useAppDispatch();
  const { filename } = useAppSelector((state) => state.swd3e.meta);

  const handleUpload = (filename: string, buffer: ArrayBuffer) => {
    const info = editor.loadGameInfo(buffer);

    const b64Buffer = base64EncodeBuffer(buffer);
    localStorage.setItem("swd3e/save", b64Buffer);

    dispatch(metaActions.filenameUpdated(filename));
    dispatch(gameActions.replaced(info.game));
    dispatch(partyActions.replaced(info.party));
  };

  return (
    <>
      <BasicCommandBar
        onUpload={handleUpload}
        downloadDisabled={filename === null}
      />
      <GameProgress />
    </>
  );
};
