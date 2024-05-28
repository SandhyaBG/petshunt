import * as actions from '../actions/petAction';
export function reducer(state, action) {
    switch (action.type) {
      case actions.UPDATE_PETS_LIST: {
        return {
          ...state,
          pets: action.newPets,
        };
      }
      default:
        return state;
    }
  };
  
  export const initialState = { pets: [] };