# Save file

Just a lib to save your file in NodeJS.

```js
import { Save } from "./lib/save";

const save = new Save({ src: "/" });

save.saveFile({
  message: "File saved.",
  folder: "/data/",
  name: "books",
  ext: "json",
  data: "...",
  replaceExistingFile: true,
});
```

```
message: This is the message you'll see when the file is saved.
folder: If it exists, it will be located at src/folder/file_name.ext.
name: The name of the file.
ext: The file extension.
data: The content of the file.
replaceExistingFile: By default, this is true. If true and a file with the same name exists, it will be replaced by this new file. If false, a new file will be created with the current date appended to the name.
```
