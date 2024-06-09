export declare namespace SaveTypes {
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

  export interface SaveFiles {
    message?: string;
    folder?: string;
    data: Data[];
  }

  interface Data {
    folder?: string | undefined;
    files: File[];
  }

  interface File {
    ext?: string;
    name: string;
    data: any;
  }
}
