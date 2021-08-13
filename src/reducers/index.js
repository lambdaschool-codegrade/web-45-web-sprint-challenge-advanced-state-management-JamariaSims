import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_START,
  ADD_SMURF_FAIL,
  ADD_ERROR,
} from "../actions";
export const initialState = {
  smurfs: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case FETCH_SMURF_SUCCESS: {
      return { ...state, smurfs: action.payload, isLoading: false };
    }
    case FETCH_SMURF_FAIL: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case ADD_SMURF_START: {
      state.smurfs.push(action.payload);
      return { ...state, smurfs: state.smurfs };
    }
    case ADD_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accommodate the start of a smurf fetch.
//4. Add in a reducer case to accommodate the successful smurf api fetch.
//5. Add in a reducer cases to accommodate the failed smurf api fetch.
//6. Add in a reducer case to accommodate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
