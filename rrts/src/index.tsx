import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// interface AppProps {
//     color?: string;
// }

// interface AppState {
//     counter: number;
// }

// const App = (props: AppProps): JSX.Element => {
//     return <div>{props.color}</div>;
// };

// class App extends React.Component<AppProps> {
//     //it can do type inference to find type of state object
//     state = {
//         counter: 0,
//     };

//     //its not same because this.state={}  initializing in constructor
//     //so TS understands this is assigning new value to state object
//     //then it will throw error with out AppState
//     //AFTER ADD AppState to second argument of React.Component IT WILL GIVE YOU SAME RESULT
//     // constructor(props: AppProps) {
//     //     super(props);

//     //     this.state = { counter: 0 };
//     // }

//     onIncrement = (): void => {
//         this.setState({ counter: this.state.counter + 1 });
//     };

//     onDecrement = (): void => {
//         this.setState({ counter: this.state.counter - 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onIncrement}>increment</button>
//                 <button onClick={this.onDecrement}>decrement</button>
//                 {this.state.counter}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));
