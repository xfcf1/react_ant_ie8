import { IS_LOADING, IS_ERROR } from '../actions/modal';

export function loading(state = {show: false, msg: '正在加载...'}, action) {
    switch (action.type){
        case IS_LOADING:
            state.show = action.data;
            state.msg = action.msg ? action.msg : state.msg;
            return {...state};
        default:
            return state;
    }
}
export function error(state = {show: false, msg: '出错了'}, action) {
    switch (action.type){
        case IS_ERROR:
            state.show = action.data;
            state.msg = action.msg ? action.msg : state.msg;
            return {...state};
        default:
            return state;
    }
}
