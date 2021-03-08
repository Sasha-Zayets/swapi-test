import { API } from '../helpers/api';
import {
  SET_PEOPLE_LIST,
  SET_SEARCH_PEOPLE_LIST,
  SET_DATA_LOADING,
  SET_SELECT_PEOPLE,
  SET_SELECT_LIST_PEOPLE,
} from '../reducer/people';
import { getFromStorage, addToStorage } from '../helpers/storage';

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

export const setLikedList = (payload) => ({
  type: SET_SELECT_LIST_PEOPLE,
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

    let isLiked = false;
    const likedList = getFromStorage('liked');
    if (likedList) {
      const find = likedList.findIndex((el) => el.name === data.name);

      isLiked = find > -1;
    }

    dispatch(setSelectPeople({
      ...data,
      filmsTitles,
      homeWorld,
      vehiclesData,
      isLiked,
    }));
  } catch (e) {
    console.log(e);
  }
};

export const getLikedList = () => (dispatch) => {
  try {
    const likedList = getFromStorage('liked');

    if (likedList) {
      dispatch(setLikedList(likedList));
      return;
    }

    dispatch(setLikedList([]));
  } catch (e) {
    console.log(e);
  }
};

export const addLikePeople = (data) => (dispatch) => {
  try {
     const likedList = getFromStorage('liked');
     if (likedList) {
        const findElement = likedList.findIndex((el) => el.name === data.name);

        if (findElement > -1) {
          const filterList = likedList.filter((el) => el.name !== data.name);

          addToStorage('liked', filterList);
          dispatch(setSelectPeople({
            ...data,
            isLiked: false,
          }));
          return;
        }

        const newLikedList = [...likedList, data];
        addToStorage('liked', newLikedList);
        dispatch(setSelectPeople({
          ...data,
          isLiked: true,
        }));
        return;
     }

     addToStorage('liked', [data]);
     dispatch(setSelectPeople({
       ...data,
       isLiked: true,
     }));
  } catch (e) {
    console.log(e);
  }
};
