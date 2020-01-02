import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILD
} from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchCats = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({},state, { searchField: action.payload });
    default:
      return state;
  }
}

const initialStateCats = {
  isPending: false,
  cats: [],
  error: ''
}

// Object.assign() メソッドは、すべての列挙可能なプロパティの値を、
// 1つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために
// 使用されます。戻り値としてコピー先オブジェクトを返します。

export const requestCats = (state=initialStateCats, action={}) => {
  switch(action.type) {
    case REQUEST_CATS_PENDING:
      return Object.assign({}, state, { isPending: true })
    case REQUEST_CATS_SUCCESS:
      return Object.assign({}, state, { cats: action.payload, isPending: false})
    case REQUEST_CATS_FAILD:
      return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
      return state;
  }
}