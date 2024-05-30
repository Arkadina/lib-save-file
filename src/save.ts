import fs from "fs/promises";
import path from "path";

import { SaveTypes } from "./types";

export class Save {
  private _src: string;
  private _dir: string;

  constructor({ src }: SaveTypes.Configuration) {
    this._src = src;
    this._dir = path.resolve();
  }

  get src(): string {
    return this._src;
  }

  async saveFile({
    message,
    folder,
    name,
    ext,
    data,
    replaceExistingFile = true,
  }: SaveTypes.SaveFile): Promise<void> {
    let fileFullName = `${this._dir}/${this._src}/${folder}/${name}.${ext}`;
    let directory = `${this._dir}/${this._src}/${folder}`;

    await this.createDirectory(directory);
    await fs
      .access(fileFullName)
      .then(async () => {
        if (replaceExistingFile) {
          return await fs.writeFile(fileFullName, data);
        }
        let fileNewFullName = `${this._dir}/${
          this._src
        }/${folder}/${name}-${new Date().valueOf()}.${ext}`;
        await fs.writeFile(fileNewFullName, data);
      })
      .catch(async () => {
        await fs.writeFile(fileFullName, data);
      });

    if (message) console.log(message);
  }

  private async createDirectory(directory: string) {
    await fs
      .access(directory)
      .then(() => {})
      .catch(async (err) => {
        await fs.mkdir(directory, { recursive: true });
        await fs.chmod(directory, 0o777);
      });
  }
}
