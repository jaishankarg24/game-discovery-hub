import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7261e3a1a205442ab626f1c704979ef9",
  },
});
