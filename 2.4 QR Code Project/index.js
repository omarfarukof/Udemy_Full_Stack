/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from "@inquirer/prompts";

const url = await input({ message: "Enter URL: " });
const url_path = "URL.txt";
import QRCode from "qrcode";
import { writeFile } from "fs/promises";
import { write } from "fs";

const qr_path = "qr_img.png";
const qr_option = {
  margin: 1,
  scale: 6,
  color: {
    dark: "#FFF",
    light: "#000",
  },
};

QRCode.toFile(qr_path, url, qr_option, function (err) {
  if (err) throw err;
  console.log("QR Code Generated.");
});

writeFile(url_path, url, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
