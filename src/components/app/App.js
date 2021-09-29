import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {useEffect, useState} from "react";
import AppReducer from "../../reducers";
import Main from "../main/Main";

const store = createStore(AppReducer, applyMiddleware(thunk));

function App(props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      return;
    }
    setReady(true);
  }, [ready]);

  if (!ready) {
    return <div>Loading ...</div>
  }

  return (<>
    <Provider store={store}>
      <Main />
    </Provider></>
  );
}

export default App;
