import {ActionType} from './action';
import {CIIES, SortingTypes, AuthorizationStatus} from "../common/const";

const initialState = {
  places: [],
  activeCity: CIIES[0],
  activeSorting: SortingTypes.POPULAR,
  activePlace: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  authorizationInfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PLACES:
      return {
        ...state,
        places: action.payload,
        isDataLoaded: true
      };

    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };

    case ActionType.GET_ACTIVE_PLACE:
      return {
        ...state,
        activePlaceId: action.payload
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload
      };
  }

  return state;
};


export {reducer};
