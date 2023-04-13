import {
  createSlice,
  createEntityAdapter,
  EntityState,
  createSelector,
} from "@reduxjs/toolkit";

export interface State {
  id: number;
  skin: "default" | "bordered" | "semi dark";
  primaryColor: "#F8C04B" | "#72E028";
  appBar: "fixed" | "static" | "hidden";
  footerType: "fixed" | "static" | "hidden";
  collapsed: boolean;
  hidden: boolean;
}

export interface RootState {
  themes: EntityState<State>;
}

const ThemesAdapter = createEntityAdapter<State>({
  selectId: (theme) => theme.id,
});

const initialState = ThemesAdapter.setAll(ThemesAdapter.getInitialState(), [
  { id: 1,
    skin: "default",
    primaryColor: "#72E028",
    appBar: "fixed",
    footerType: "fixed",
    collapsed: true,
    hidden: false,
  },
]);

const ThemesSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      console.log(action.payload);
      ThemesAdapter.upsertOne(state, action.payload);
    },
  },
});
export const selectState = (state: any) => state.themes;
export const { updateTheme } = ThemesSlice.actions;
export const { selectAll: selectAllThemes } = ThemesAdapter.getSelectors(
  (state: RootState) => state.themes
);
export default ThemesSlice.reducer;
