import { put, takeLatest, all, fork } from "redux-saga/effects";
import UserActionTypes from "../user";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([fork(onSignOutSuccess)]);
}
