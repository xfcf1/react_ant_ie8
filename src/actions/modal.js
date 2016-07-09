export const IS_LOADING = 'IS_LOADING';
export const IS_ERROR = 'IS_ERROR';

export function isLoading(data, msg) {
    return {
        type: IS_LOADING,
        data,
        msg
    }
}
export function isError(data, msg) {
    return {
        type: IS_ERROR,
        data,
        msg
    }
}
