/**
 * Created By Nikita Mittal
 * 25th Nov 2019
 */

import initialState from "./initialState";

import { USER, PREFERENCES, FILTER, STYLES, CATEGORIES } from "./model";

// import UserReducer from "./User/reducer";
// import PreferenceReducer from "./Preferences/reducer";
// import FilterReducer from "./Filters/reducer";
// import StyleReducer from "./Styles/reducer";
// import CategoriesReducer from "./Categories/reducers";

const MainReducer = (state = initialState, action: any) => {
  // switch(action.model){
  //     case USER:{
  //         state = UserReducer(state, action)
  //         break;
  //     }
  //     case PREFERENCES:{
  //         state = PreferenceReducer(state, action)
  //         break
  //     }
  //     case FILTER:{
  //         state = FilterReducer(state, action)
  //         break
  //     }
  //     case STYLES:{
  //         state = StyleReducer(state, action)
  //         break
  //     }
  //     case CATEGORIES:{
  //         state = CategoriesReducer(state, action)
  //         break
  //     }
  // }
  return state;
};

export default MainReducer;
