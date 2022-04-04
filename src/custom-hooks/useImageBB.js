import { useState } from "react";
const axios = require("axios");

const useImageBB = (event) => {
  const [imageUrl, setImageUrl] = useState(null);
  const imageData = new FormData();
  imageData.set("key", "ae0576e43bf23a5c7569f4095351d11e");
  imageData.append("image", event.target.files[0]);
  axios
    .post("https://api.imgbb.com/1/upload", imageData)
    .then((response) => {
      console.log(response);
      setImageUrl(response.data.data.url);
    })
    .catch((error) => {
      console.log(error);
    });
  return imageUrl;
};

export default useImageBB;
