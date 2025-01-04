import { GetProp, UploadProps } from "antd";

export type AuthFieldType = {
  email: string
  password: string
}

export type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];