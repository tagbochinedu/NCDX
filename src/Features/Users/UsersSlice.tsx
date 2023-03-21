import {
  createSlice,
  createEntityAdapter,
  EntityState,
  nanoid,
  createSelector,
} from "@reduxjs/toolkit";
import { UserData, UserInterface } from "../../Data/Data";

export interface RootState {
  users: EntityState<UserInterface>;
}

interface Selector {
  role: string;
  stat: string;
  plan: string;
  query: string;
}

const usersAdapter = createEntityAdapter<UserInterface>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.fullName.localeCompare(b.fullName),
});

const initialState = usersAdapter.setAll(
  usersAdapter.getInitialState({}),
  UserData
);

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        usersAdapter.addOne(state, action.payload);
        console.log(action.payload);
      },
      prepare(action): any {
        const status = (array: string[]) => {
          const index = Math.floor(Math.random() * array.length);
          return array[index];
        };

        return {
          payload: {
            id: nanoid(),
            fullName: `${action.firstName} ${action.lastName}`,
            username: action.firstName,
            company: action.company,
            role: action.ROLE,
            country: action.country,
            contact: action.contact,
            email: action.EMAIL,
            currentPlan: action.PLAN,
            status: status(["Active", "Inactive", "Pending"]),
            avatar: `${action.firstName
              .charAt(0)
              .toUpperCase()}${action.lastName.charAt(0).toUpperCase()}`,
            avatarColor: status(["primary", "secondary", "warning"]),
            action: action.action,
          },
        };
      },
    },
    updateUser: usersAdapter.updateOne,
    deleteUser: usersAdapter.removeOne,
  },
});

export const { addUser, updateUser, deleteUser } = UsersSlice.actions;
export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state: RootState) => state.users);

export const filterUserData = createSelector(
  [selectAllUsers, (state: UserInterface[], filter: Selector) => filter],
  (state: UserInterface[], filter: Selector): UserInterface[] =>
    state
      .filter((user: UserInterface) =>
        user.status.includes(filter.stat.toLowerCase())
      )
      .filter((user: UserInterface) =>
        user.role.includes(filter.role.toLowerCase())
      )
      .filter((user: UserInterface) =>
        user.currentPlan.includes(filter.plan.toLowerCase())
      )
      .filter(
        (user: UserInterface) =>
          user.fullName.toLowerCase().includes(filter.query.toLowerCase()) ||
          user.email.toLowerCase().includes(filter.query.toLowerCase()) ||
          user.username.toLowerCase().includes(filter.query.toLowerCase())
      )
);

export default UsersSlice.reducer;
