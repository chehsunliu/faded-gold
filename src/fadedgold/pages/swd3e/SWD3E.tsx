import { ImportButton } from "fadedgold/component/button";
import React from "react";
import * as editor from "fadedgold/pages/swd3e/editor";
import { useAppDispatch } from "fadedgold/redux/hook";
import { actions as gameActions } from "fadedgold/pages/swd3e/gameSlice";
import { actions as partyActions } from "fadedgold/pages/swd3e/partySlice";

export const SWD3E = () => {
  const dispatch = useAppDispatch();

  const handleImport = (filename: string, buffer: ArrayBuffer) => {
    const info = editor.loadGameInfo(buffer);
    dispatch(gameActions.replaced(info.game));
    dispatch(partyActions.replaced(info.party));
  };

  return (
    <>
      <ImportButton text={"Import"} onImport={handleImport} />
    </>
  );
};
