import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "090ad83fd9534bc8b91560be0c2c3932" },
});
