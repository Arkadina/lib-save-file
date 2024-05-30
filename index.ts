import { Save } from "./src/save";

const save = new Save({ src: "" });

// example of use

const data = [
  {
    id: 1,
    name: "00000",
  },
  {
    id: 2,
    name: "11111",
  },
];

save.saveFile({
  message: "File saved.",
  folder: "/data/",
  name: "books",
  ext: "json",
  data: JSON.stringify(data),
  replaceExistingFile: false,
});
