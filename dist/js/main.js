$(function () {
    $('.catalog__product').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.catalog__product-link-bestand').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.catalog__product-price').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
});

$(window).resize(function(){
    $('.catalog__product').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.catalog__product-link-bestand').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.catalog__product-price').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
});