import $ from 'jquery';

class Ajax {
    static require(url, datas, done, error){
        console.log('ajax start');
        $.ajax({
            dataType: 'JSON',
            type: 'POST',
            url: url,
            data: datas
        }).done(function(data){
            console.log('ajax success');
            console.log(data);
            if(typeof done == 'function'){
                done(data)
            }
        }).fail(function(e){
            console.log(e);
            if(typeof error == 'function'){
                error();
            }
        })
    }
}
export default Ajax;