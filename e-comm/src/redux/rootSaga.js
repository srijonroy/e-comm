import { all, call, fork } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.saga";
import { fetchCollectionsStart } from "./shopData/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([fork(fetchCollectionsStart), fork(userSagas), fork(cartSagas)]);
}
