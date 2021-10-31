import React from "react";
import * as editor from "fadedgold/pages/swd3e/editor";
import { useAppDispatch } from "fadedgold/redux/hook";
import { actions as gameActions } from "fadedgold/pages/swd3e/gameSlice";
import { actions as metaActions } from "fadedgold/pages/swd3e/metaSlice";
import { actions as partyActions } from "fadedgold/pages/swd3e/partySlice";
import { BasicCommandBar } from "fadedgold/component/BasicCommandBar";

export const SWD3E = () => {
  const dispatch = useAppDispatch();

  const handleUpload = (filename: string, buffer: ArrayBuffer) => {
    const info = editor.loadGameInfo(buffer);
    dispatch(metaActions.filenameUpdated(filename));
    dispatch(gameActions.replaced(info.game));
    dispatch(partyActions.replaced(info.party));
  };

  return (
    <>
      <BasicCommandBar onUpload={handleUpload} downloadDisabled />
    </>
  );
};
