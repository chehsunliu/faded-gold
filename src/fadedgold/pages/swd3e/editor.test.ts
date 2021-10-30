import { readFileSync } from "fs";
import * as editor from "fadedgold/pages/swd3e/editor";

let fileBuffer: Buffer = readFileSync(
  `${__dirname}/__tests__/at-the-beginning.sav`
);
let expectedData = JSON.parse(
  readFileSync(`${__dirname}/__tests__/at-the-beginning.expected.json`, "utf8")
);

test("file loading should work", () => {
  const data = editor.loadGameInfo(fileBuffer.buffer);
  expect(data).toEqual(expectedData);
});
