
 import { createStore, applyMiddleware, compose } from 'redux'
 import createSagaMiddleware from 'redux-saga'

 import rootSaga from './sagas'

 import createReducer from './rootReducer'

 
 export default function configureStore (initialState = {}) {
   let composeEnhancers = compose
   const reduxSagaMonitorOptions = {}
 

   if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
     
     if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) { composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) }

   }
 
   const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
 
   const middlewares = [sagaMiddleware]
 
   const enhancers = [applyMiddleware(...middlewares)]
 
   const store = createStore(
     createReducer(),
     initialState,
     composeEnhancers(...enhancers)
   )
 
 
   if (module.hot) {
     module.hot.accept('./rootReducer', () => {
       store.replaceReducer(createReducer(store.injectedReducers))
     })
   }
 
   sagaMiddleware.run(rootSaga)
 
   return store
 }
 