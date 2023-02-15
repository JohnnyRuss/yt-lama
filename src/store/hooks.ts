import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateT, DispatchT } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
export const useAppDispatch: () => DispatchT = useDispatch;
