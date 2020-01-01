import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: ''
}

export const searchCats = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({},state, { searchField: action.payload });
    default:
      return state;
  }
}

// Object.assign() メソッドは、すべての列挙可能なプロパティの値を、
// 1つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために
// 使用されます。戻り値としてコピー先オブジェクトを返します。