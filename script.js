$(() => {
    //effect "zoom"
    $('.slider__pic').mouseenter((e) =>
        $('.item__view-pic').attr('src', $(e.target).attr('src')));

    //item__counter
    let count = $('.counter__num');
    let btnInc = $('.counter__btn-increment');
    let btnDec = $('.counter__btn-decrement');

    btnInc.click(() => {
        count.val(+count.val() + 1);
        count.trigger('change');
    })
    btnDec.click(() => {
        count.val(+count.val() - 1);
        count.trigger('change');
    })
    count.change(() => {
        //btn script
        if (count.val() > 1)
            btnDec.prop('disabled', false)
        else
            btnDec.prop('disabled', true);
        //keypad script
        if (+count.val() < 1)
            count.val("")
    })
});