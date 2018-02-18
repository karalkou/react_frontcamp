import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import articlesReducer, {moduleName as articlesModule} from '../ducks/articles'

export default combineReducers({
    router,
    [articlesModule]: articlesReducer,
})