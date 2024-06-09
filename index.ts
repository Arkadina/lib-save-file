import { Save } from "./src/save";

const save = new Save({ src: "/" });

// example of use

const data = [
  {
    id: 1,
    name: "00000",
  },
  {
    id: 2,
    name: "00000",
  },
];

save.saveFile({
  message: "File saved.",
  folder: "/tests/books",
  name: "books",
  ext: "json",
  data: JSON.stringify(data),
  replaceExistingFile: false,
});

const categories = [
  {
    folder: "food",
    files: [
      {
        data: JSON.stringify({
          message: "i wanna eat a donnut!",
        }),
        name: "usp-1",
      },
    ],
  },
  {
    folder: "drink",
    files: [
      {
        data: JSON.stringify({
          message: "drink water everyday",
        }),
        name: "water",
      },
    ],
  },
];

save.saveFiles({
  folder: "/tests/category",
  data: categories,
});
