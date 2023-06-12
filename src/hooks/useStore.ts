import { AppState, TypedDispatch } from "@/redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;