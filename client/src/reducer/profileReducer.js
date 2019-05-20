import {
  GET_PROFILE,
  PROFILE_ERROR,
  PROFILE_LOADING,
  CLEAR_PROFILE,
  UPDATE_PROFILE
} from "../actions/types.js";

const initialState = {
  profile: null,
  loading: false,
  error:{}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

      case UPDATE_PROFILE:
      return{
        ...state,
        profile:action.payload,
        loading:false
      }

   

      case PROFILE_ERROR:
      return{
        ...state,
        error:action.payload,
        loading:false
      }

    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading:false
      };

    default:
      return state;
  }
}