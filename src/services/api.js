import axios from "axios";
const BASE_URL = "http://localhost:3001/api/comments";

export default function commentsApi(user) {
  let success = false;
  axios
    .post(BASE_URL, user)
    .then(function (response) {
      if (response) {
        success = true;
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  return success;
}
