import StateControl from "./components/StateManager";
import Level1 from "./components/DeepNestedStructure";
import { MessageProvider } from "./contexts/MessageContext";
import {
  AppContainer,
  Content,
  DeepStructure,
} from "./styles/StyledComponents";

function App() {
  return (
    <MessageProvider>
      <AppContainer>
        <h2>[내배캠] 스탠다드반 프로젝트 - Context API 예제</h2>
        <Content>
          <StateControl />
          <DeepStructure>
            <Level1 />
          </DeepStructure>
        </Content>
      </AppContainer>
    </MessageProvider>
  );
}

export default App;
