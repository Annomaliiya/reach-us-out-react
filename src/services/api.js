import axios from "axios";
const BASE_URL = "https://annomaliiya-comments-api.herokuapp.com/api/comments";

export default async function commentsApi(user) {
  try {
    const { data } = await axios.post(BASE_URL, user);
    return data;
  } catch (error) {
    return error;
  }
}
