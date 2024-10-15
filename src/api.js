import axios from "axios";

export const subscribeCitizen = async (email) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_DEV_URL}/subscribe`,
      {
        email,
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
