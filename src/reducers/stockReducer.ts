import React, { useReducer } from "react";

interface StockItem {
  id: string;
  name: string;
  expiryDate: string;
  consumed: boolean;
}

type StockState = StockItem[];

enum ActionType {
  ADD = "ADD",
  DELETE = "DELETE",
  COMPLETE = "COMPLETE",
  EDIT = "EDIT",
}

interface AddAction {
  type: ActionType.ADD;
  item: StockItem;
}

interface DeleteAction {
  type: ActionType.DELETE;
  id: string;
}

interface CompleteAction {
  type: ActionType.COMPLETE;
  id: string;
}

interface EditAction {
  type: ActionType.EDIT;
  id: string;
  newName: string;
}

type Action = AddAction | DeleteAction | CompleteAction | EditAction;

const reducer = (state: StockState, action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];
    case "DELETE":
      return state.filter((el) => el.id !== action.id);
    case "COMPLETE":
      return state.map((el) =>
        el.id === action.id ? { ...el, consumed: !el.consumed } : el
      );
    case "EDIT":
      return state.map((el) =>
        el.id === action.id ? { ...el, name: action.newName } : el
      );
  }
};

// { type: ADD, item: { name: "sesame", id: 123}}
// { type: DELETE, id: 123}
