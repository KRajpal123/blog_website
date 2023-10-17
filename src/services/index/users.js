import axios from "axios";

export const Signup = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      "https://first-blog-website.cyclic.app/api/user/register",
      {
        name,
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      "https://first-blog-website.cyclic.app/api/user/login",
      {
        email,
        password,
      }
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const getUserProfile = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      "https://first-blog-website.cyclic.app/api/user/profile",
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updateProfile = async ({ token, userData }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "https://first-blog-website.cyclic.app/api/user/updateProfile",
      userData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const updateProfilePicture = async ({ token, formData }) => {
  try {
    const config = {
      headers: {
        "Content-type":"multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "https://first-blog-website.cyclic.app/api/user/updateProfilePicture",
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
