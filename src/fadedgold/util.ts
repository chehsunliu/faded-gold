export const base64EncodeBuffer = (buffer: ArrayBuffer): string =>
  btoa(
    new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

export const base64DecodeBuffer = (b64: string): ArrayBuffer => {
  const byteArray = Uint8Array.from(
    atob(b64)
      .split("")
      .map((c) => c.charCodeAt(0))
  );

  return byteArray.buffer;
};
