//! Clase 99 curso de Next

import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

//  export const localStorageMiddleware= (state:MiddlewareAPI)=>{
//    return (next:Dispatch)=>(action:Action)=>{

//    }
//  }
export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => {
		return (action: Action) => {
			next(action);
			if (action.type.includes("toggleFavorite")) {
				const { pokemons } = state.getState() as RootState; //! El RootState es solo para tener el tipado
				localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
				return;
			}
		};
	};
};
