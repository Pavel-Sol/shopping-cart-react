import { loadingAllGoods } from '../store/goodsReducer';

export const getAllGoods = () => {
  return (dispatch) => {
    fetch('./db.json')
      .then((response) => response.json())
      .then((json) => {
        dispatch(loadingAllGoods(json.goods));
      });
  };
};
