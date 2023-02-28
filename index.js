const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const axios = require("axios");

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(3003, () => {
  console.log("Server listening on port 3003");
});



// app.post("/api/postphoto", (req, res) => {
//   console.log(req.body);
//   const options = {
//     path: "https://stablediffusionapi.com/api/v3/img2img",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const apiReq = http.request(options, (apiRes) => {
//     let data = req.body;
//     apiRes.on("data", (chunk) => {
//       data += chunk;
//     });
//     apiRes.on("end", () => {
//       res.send(JSON.stringify(data));
//     });
//   });

//   apiReq.on("error", (error) => {
//     console.error(error);
//   });

//   apiReq.end();
// });

app.post("/api/postphoto1", (req, res) => {
  axios
    .post("https://stablediffusionapi.com/api/v3/img2img", req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        // console.log(response)
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/api/baseurl", (req, res) => {
  axios
    .post("https://stablediffusionapi.com/api/v3/base64_crop", req.body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
        // console.log(response)
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
