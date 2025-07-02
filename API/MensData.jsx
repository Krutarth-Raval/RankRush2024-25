import axios from "axios";

export const MensData = async () => {
  const URL = "https://olympic.up.railway.app";

  try {
    const response = await axios.get(`${URL}/mens`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
