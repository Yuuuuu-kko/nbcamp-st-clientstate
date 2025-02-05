import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    // [중요] immer 라이브러리를 사용하여 불변성을 유지하면서 state를 직접 변경할 수 있습니다.
    // 원래의 경우 state는 불변성을 유지하기 위해 복사본을 만들어서 사용해야 했지만,
    // immer 라이브러리를 사용하면 직접 변경할 수 있습니다.
    setMessage: (state, action) => {
      state.text = action.payload;
    },
    clearMessage: (state) => {
      state.text = "";
    },
  },
});

// 아래 로직을 통해서 createSlice의 반환값인 객체가 actions와 reducer를 가지고 있음을 확인할 수 있습니다.
// 이렇게 내보낸 reducer는 store를 구성하는 데에(configureStore) 사용됩니다.
// 이렇게 내보낸 actions는 컴포넌트에서 useDispatch를 통해 사용됩니다. 이 때, action의 종류를 알 수 있습니다.
export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
