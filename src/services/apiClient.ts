import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "85ebb5fe85694e8daeae5ee3f701d086",
  },
});

export { CanceledError };
