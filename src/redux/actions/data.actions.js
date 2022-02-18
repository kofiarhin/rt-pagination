import {
  GET_DATA_SUCCESS,
  GET_DATA_PENDING,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SET_CURRENT_TEMPLATES,
  SET_FILTERED_DATA,
  SET_TEMPLATES,
} from "../constants/constants";
export const getData = () => (dispatch) => {
  dispatch({
    type: GET_DATA_PENDING,
  });
  return fetch("data.json")
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_DATA_SUCCESS,
        payload: result,
      });
    });
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE,
  };
};

export const setCurrentTemplates = (data) => {
  return {
    type: SET_CURRENT_TEMPLATES,
    payload: data,
  };
};

export const setFilteredData = (data) => {
  return {
    type: SET_FILTERED_DATA,
    payload: data,
  };
};

export const setTemplates = (data) => {
  return {
    type: SET_TEMPLATES,
    payload: data,
  };
};
