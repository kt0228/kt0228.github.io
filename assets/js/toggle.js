$(function() {
    // メニューを開くボタンの動作
    $('#open').click(function() {
        $('#sub').toggleClass('open');
        $('#side-bg').fadeToggle();
        $('#open').toggleClass('buttonclose');
        $('#open-icon').toggleClass('close');
        return false;
    });
    // 小画面時に範囲外を押した場合、一度閉じる
    $('#side-bg').click(function() {
        $(this).fadeOut();
        $('#sub').removeClass('open');
        $('#open').removeClass('buttonclose');
        $('#open-icon').removeClass('close');
    });
    // 小画面時にメニュー内リンクを押した場合、一度閉じる
    // ページ内リンク用
    $('#sub a[href^=#]').on('click', function() {
        (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $('#open').click()
    });
    // 画像リンクには装飾しない
    $('img').parent('a').addClass('bg-none');
});