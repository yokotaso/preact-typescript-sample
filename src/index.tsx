/** @jsx h */
import {render, h, JSX} from 'preact';
import {Alert, Dialog} from "@kintone/kintone-ui-component/lib/js/components-react";
import {Store, default as createStore, Action, ActionCreator, StateMapper} from 'unistore';
import { Provider, connect } from 'unistore/preact';
import { JSXInternal } from 'preact/src/jsx';

interface State {
  count: number;
}

interface Handlers {
  handleClick: JSXInternal.UniStoreStateHandler<State, MouseEvent>;
}

const mapStateProps : StateMapper<{}, State, Handlers & State> = (state) => ({
  ...state,
  handleClick(state: State) : State {
    return state;
  }
});

const store = createStore({count: 0});
const App = connect(mapStateProps)(
  ({handleClick, count}) => (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
);

require('preact/debug');

function main(): void {
  // eslint-disable-next-line no-console
  const handleClick = (evnet: Event) => console.log(event);
  const app = document.getElementById('app') as HTMLElement;
  let state = true;
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    app
  );
}

interface Props {
  title: string;
  className: string;
}

function MyComponent(props : Props) : JSX.Element {
  return (<div className={props.className}> hello {props.title}! </div>)
}


main();
