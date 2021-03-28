import { loadingAllGoods } from './../store/reducer';

export const getAllGoods = () => {
  return (dispatch) => {
    //  debugger;
    fetch('./db.json')
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) => {
        dispatch(loadingAllGoods(json.goods));
      });
  };
};
