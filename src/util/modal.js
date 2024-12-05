import { useSelector } from "react-redux";
import {store} from '../app/store';
import { append, destroy, destroyAll, inactive } from "../features/modal/modalSlice";

export const useModals = () => useSelector(state => state.modalReducer.modals);
export const isActive = () => useSelector(state => state.modalReducer.isActive);
export const createModal = (name, data = false) => store.dispatch(append({name, data}));
export const destroyModal = () => store.dispatch(destroy());
export const setInactive = () => store.dispatch(inactive());
export const destroyAllModal = (isActive) => setTimeout(() => store.dispatch(destroyAll()), isActive ? 400 : 0);