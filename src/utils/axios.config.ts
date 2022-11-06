import axios from "axios";
export async function getData() {
  const data = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10&_page=1"
  );
  return data.data;
}
