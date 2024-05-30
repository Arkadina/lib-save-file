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

```md

Message: This is the message you'll see when the file is saved.
Folder: If it exists, it will be located at src/folder/file_name.ext.
Name: The name of the file.
Ext: The file extension.
Data: The content of the file.
ReplaceExistingFile: By default, this is true. If true and a file with the same name exists, it will be replaced by this new file. If false, a new file will be created with the current date appended to the name.
```