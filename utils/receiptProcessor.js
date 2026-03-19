import { File, EncodingType } from "expo-file-system";

const MAX_FILE_SIZE = 300 * 1024; // 300KB

export const processReceipt = async (file) => {
  if (!file) return null;

  const { uri, mimeType, size } = file;

  if (size && size > MAX_FILE_SIZE) {
    throw new Error("O arquivo deve ter no máximo 300KB");
  }

  if (!size) {
    const fileInfo = await new File.info(uri);

    if (fileInfo.size > MAX_FILE_SIZE) {
      throw new Error("O arquivo deve ter no máximo 300KB");
    }
  }

  const base64 = await new File.text(uri, {
    encoding: EncodingType.Base64,
  });

  return {
    base64,
    mimeType: mimeType || "application/octet-stream",
  };
};
