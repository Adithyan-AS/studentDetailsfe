import axios from "axios";

const axiosConfig = async (method, url, reqBody ) => {
  try {
    const response = await axios({
      method,
      url,
      data: reqBody,
    });
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export default axiosConfig;

