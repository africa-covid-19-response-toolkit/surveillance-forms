import axios from 'axios';
import config from '../config';

const POST = 'post';
// const PUT = 'put';
const DELETE = 'delete';

const initApi = (baseURL) => {
  const api = axios.create();
  api.defaults.baseURL = baseURL;

  return api;
};

const axiosApi = initApi(config.apiUrl);

const getBody = (verb, body) => {
  // https://github.com/axios/axios/issues/897#issuecomment-343715381
  if (body !== undefined && verb === DELETE) {
    return { data: body };
  }

  return body;
};

const execute = async (verb, url, body) => {
  try {
    const config = {
      url,
      method: verb,
      data: getBody(verb, body),
      // withCredentials: true // include existing cookies as part of request header
    };

    const response = await axiosApi.request(config);
    const { status, data } = response;

    return {
      status,
      data
    };
  } catch (error) {
    // const { status, data } = error.response;
    const { status } = error.response;

    // handle 401s in the store, payload may contain relevant redirect info
    // if (status === 401) {
    // }

    // CSC - for now re-throwing the error as all of the app code was written to catch exceptions...
    // throw error;
    return { status, data: null };
  }
};

class Api {
  async submitCommunity(formValues) {

    //clean up formValues
    if (formValues.occupation === "other") {
      formValues.occupation = formValues.occupationOther
      delete formValues.occupationOther
    }

    return execute(POST, '/public/communities', formValues);
  }

  async submitMedical(formValues) {

    //clean up formValues
    if (formValues.occupation === "other") {
      formValues.occupation = formValues.occupationOther
      delete formValues.occupationOther
    }

    return execute(POST, '/public/medical-facilities', formValues);
  }

  async submitPortOfEntry(formValues) {

    //clean up formValues
    if (formValues.occupation === "other") {
      formValues.occupation = formValues.occupationOther
      delete formValues.occupationOther
    }

    return execute(POST, '/public/passengers', formValues);
  }
}

export default new Api();
