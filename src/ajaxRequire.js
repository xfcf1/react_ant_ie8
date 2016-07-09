import 'zepto/zepto.min';
const domain = '';
import { isLoading, isError } from './actions/modal';
import cookie from 'js-cookie';

export default function requireData(url, data={}, success, method='POST'){
    return dispatch => {
        dispatch(isLoading(true));
        const token = cookie.get('token');
        data.token = token;
        data = data ? JSON.stringify(data) : '';
        Zepto.ajax({
            url: `${domain}${url}`,
            type: method,
            dataType: 'json',
            data: data,
            success: ((data) => {
                dispatch(isLoading(false));
                if(data.code == 0){
                    if(typeof success == 'function'){
                        success(data);
                    }
                }
                else {
                    dispatch(isError(true, data.msg));
                }
            }),
            error: ((data) => {
                dispatch(isLoading(false));
                dispatch(isError(true, data.msg));
            })
        })
    }
}
