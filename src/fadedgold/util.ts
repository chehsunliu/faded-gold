export const base64EncodeBuffer = (buffer: ArrayBuffer): string =>
  btoa(
    new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
