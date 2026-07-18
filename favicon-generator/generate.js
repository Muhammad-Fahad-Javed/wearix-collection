const { favicons } = require("favicons");const fs = require("fs");

(async () => {
  const response = await favicons("logo.png", {
    appName: "WEARIX COLLECTION",
    appShortName: "WEARIX",
    background: "#000000",
    theme_color: "#000000",
    path: "/"
  });

  response.images.forEach(img =>
    fs.writeFileSync(img.name, img.contents)
  );

  response.files.forEach(file =>
    fs.writeFileSync(file.name, file.contents)
  );

  console.log("? Favicons generated successfully!");
})();
