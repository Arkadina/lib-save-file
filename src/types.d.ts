export declare namespace SaveTypes  {
  export interface Configuration {
    src: string;
  }

  export interface SaveFile {
    message?: string;
    folder?: string;
    name: string;
    ext: string;
    data: any;
    replaceExistingFile?: boolean;
  }
}