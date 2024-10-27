import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io./api",
  params: {
    key: "4a89e2227afa48de9efb77b9bf217808",
  },
});
