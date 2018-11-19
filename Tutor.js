var startTime;

$('#hold-me').mousedown(function(){
    startTime = new Date();
})

$('#hold-me').mouseup(function(){
    if (startTime) {
        const elapsedMillseconds = (new Date - startTime);
        startTime = null;
        $('#hold-time').text(elapsedMillseconds);
        // $('hold-time').text(123);
        // $('#hold-time').html(elapsedMillseconds);
        $.ajax('https://timing-sense-score-board.herokuapp.com/score/'+elapsedMillseconds).done(res => {
            $('#rank').text('你超过了' + res.rank + '% 的用户')
        })
    }
})

$('hold-time').text(123);