import { Provider } from "react-redux";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import store from "./redux/store";

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div>
        <UserList />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
