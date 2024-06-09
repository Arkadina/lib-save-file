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
    let directory = path.join(this._dir, this._src, folder || "");
    let fileFullName = `${directory}/${name}.${ext}`;

    await this.createDirectory(directory);
    await fs
      .access(fileFullName)
      .then(async () => {
        if (replaceExistingFile) {
          return await fs.writeFile(fileFullName, data);
        }
        let fileNewFullName = `${directory}/${name}-${new Date().valueOf()}.${ext}`;
        await fs.writeFile(fileNewFullName, data);
      })
      .catch(async () => {
        await fs.writeFile(fileFullName, data);
      });

    if (message) console.log(message);
  }

  async saveFiles({ message, folder, data }: SaveTypes.SaveFiles) {
    let directory = path.join(this._dir, this._src, folder || "");

    await this.createDirectory(directory);

    data.map(async (files) => {
      let fileFolder = path.join(directory, files.folder || "");

      // `${this._dir}/${this._src}/${folder}/${files.folder}`;
      files.folder && (await this.createDirectory(fileFolder));

      files.files.map(async (file) => {
        let ext = file.ext || "json";
        let fileFullName = `${fileFolder}/${file.name}.${ext}`;

        await fs.writeFile(fileFullName, file.data);
      });
    });
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
