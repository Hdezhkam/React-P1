
//////////////////////////// without action generator

// const { createStore } = require('redux');

// const store = createStore((state = {count:0}, action) => {
    
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             }
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }

//     return state;
// });

// store.subscribe(() => {
//     console.log(store.getState());
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

// store.dispatch({
//     type: 'RESET'
// });

////////////////////////////// with action generator

// const { createStore } = require('redux');

// const store = createStore((state = {count:0}, action) => {
    
//     switch (action.type) {
//         case 'INCREMENT':
            
//             return {
//                 count: state.count + action.incrementBy
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             }
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }

//     return state;
// });

// store.subscribe(() => {
//     console.log(store.getState());
// });

// const incrementBy = (uns = {incrementBy:1}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof uns.incrementBy === 'number' ? uns.incrementBy : 1
// });

// store.dispatch(incrementBy({incrementBy: 5}));

// store.dispatch(incrementBy());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

// store.dispatch({
//     type: 'RESET'
// });
////////////////////////////// with action generator & REDUCER
// const { createStore } = require('redux');

// const reducer = (state = {count:0}, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + action.incrementBy
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             }
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             }
//         default:
//             return state;
//     }
// };

// const store = createStore(reducer);

// store.subscribe(() => {
//     console.log(store.getState());
// });

// const incrementBy = (uns = {incrementBy:1}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof uns.incrementBy === 'number' ? uns.incrementBy : 1
// });

// store.dispatch(incrementBy({incrementBy: 5}));

// store.dispatch(incrementBy());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

// store.dispatch({
//     type: 'RESET'
// });

////////////////////////////// Combine REDUCER

const { createStore, combineReducers } = require('redux');

const secondReducer = (state = {note : ''}, action) => {
    switch (action.type) {
        case 'TOPLEARN': 
            return {
                note : 'Toplearn'
            }
        default:
            return state;
    };
};

const countReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        countReducer,
        secondReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const incrementBy = (uns = {incrementBy:1}) => ({
    type: 'INCREMENT',
    incrementBy: typeof uns.incrementBy === 'number' ? uns.incrementBy : 1
});

store.dispatch(incrementBy({incrementBy: 5}));

store.dispatch(incrementBy());

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 101
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'TOPLEARN'
});



