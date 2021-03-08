import { API } from '../helpers/api';
import {
  SET_PEOPLE_LIST,
  SET_SEARCH_PEOPLE_LIST,
  SET_DATA_LOADING,
  SET_SELECT_PEOPLE,
} from '../reducer/people';

export const setListPeople = (payload) => ({
  type: SET_PEOPLE_LIST,
  payload,
});

export const setSearchListPeople = (payload) => ({
  type: SET_SEARCH_PEOPLE_LIST,
  payload,
});

export const setSelectPeople = (payload) => ({
  type: SET_SELECT_PEOPLE,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_DATA_LOADING,
  payload,
});

export const getListPeople = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await API.get('/people');
    dispatch(setListPeople(data.results));
    dispatch(setSearchListPeople(data.results));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};

export const searchPeople = (search) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { data } = await API.get(`/people?search=${search}`);
    dispatch(setSearchListPeople(data.results));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getFullInfoPeople = (id) => async (dispatch) => {
  try {
    const { data } = await API.get(`/people/${id}`);

    let homeWorld = {};
    if (data.homeworld) {
      homeWorld = await API.get(data.homeworld);
    }

    const filmsTitles = [];
    for await (const item of data.films) {
      const { data: response } = await API.get(item);
      filmsTitles.push(response.title);
    }

    const vehiclesData = [];
    for await (const item of data.vehicles) {
      const { data: response } = await API.get(item);
      vehiclesData.push(response);
    }

    dispatch(setSelectPeople({
      ...data,
      filmsTitles,
      homeWorld,
      vehiclesData,
    }));
  } catch (e) {
    console.log(e);
  }
};
