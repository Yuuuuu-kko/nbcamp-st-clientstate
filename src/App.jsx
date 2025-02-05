import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - Redux Toolkit 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </Provider>
  );
}

export default App;
