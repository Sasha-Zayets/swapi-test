export const SET_PEOPLE_LIST = 'SET_PEOPLE_LIST';
export const SET_SEARCH_PEOPLE_LIST = 'SET_SEARCH_PEOPLE_LIST';
export const SET_SELECT_PEOPLE = 'SET_SELECT_PEOPLE';
export const SET_DATA_LOADING = 'SET_DATA_LOADING';

const initialState = {
  peopleList: [],
  searchListPeople: [],
  selectPeople: {},
  loading: false,
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        peopleList: action.payload,
      };
    case SET_SEARCH_PEOPLE_LIST:
      return {
        ...state,
        searchListPeople: action.payload,
      };
    case SET_SELECT_PEOPLE:
      return {
        ...state,
        selectPeople: action.payload,
      };
    case SET_DATA_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default peopleReducer;
