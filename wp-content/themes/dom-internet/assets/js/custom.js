$(window).load(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    };
    setTimeout(function () {
        $('body').removeClass('loaded');
    }, 400);

    setTimeout(function () {
        $('.js-img-lazy').each(function () {
            var imgSrc = $(this).attr('data-src');
            $(this).attr('src', imgSrc);
        });
    }, 300);
});


/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */

$(function () {





    /* placeholder*/
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
        });
    });
    /* placeholder*/

    var a;
    if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
        a = 'ie'
    };
    $('body').addClass(a);

    $('.button-nav').click(function () {
        $(this).toggleClass('active'),
            $('.main-nav-list').slideToggle();
        return false;
    });

    $(document).on('click', '[data-fancybox="modal"]', function () {
        $('body').toggleClass('fancybox-lock');
    });

    if ($('[data-fancybox=modal]').length) {
        $('[data-fancybox=modal]').fancybox({
            margin: 0,
            padding: 0,
            wrapCSS: 'fancybox-modal'
        });
    };
    var userAgent = navigator.userAgent.toLowerCase();
    var Browser = {
        Mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent),
        Check: function () {
            alert(userAgent);
        }
    };
    if (Browser.Mozilla) {
        $('body').addClass('mozilla');
    }
    $('.tarif-table-wrap').mCustomScrollbar({
        axis: "x",
        theme: "dark-thin",
        autoExpandScrollbar: true,
        advanced: {
            autoExpandHorizontalScroll: true
        }
    });

    if ($('.rate-all').length) {
        $(".rate-all").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    };
    if ($('.net-rate-all-js').length) {
        $(".net-rate-all-js").mCustomScrollbar({
            axis: "x",
            theme: "dark-thin",
            autoExpandScrollbar: true,
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });
    };

    if ($('.main-slider-js').length) {
        $('.main-slider-js').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.slider-control__prev-1-js',
            nextArrow: '.slider-control__next-1-js',

        });
    };
    if ($('.protfolio-slider-js').length) {
        $('.protfolio-slider-js').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.portfolio-arrow__prev-1-js',
            nextArrow: '.portfolio-arrow__next-1-js',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
				},
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
				},
			]
        });
    };
    if ($('.news-slider-js').length) {
        $('.news-slider-js').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.portfolio-arrow__prev-3-js',
            nextArrow: '.portfolio-arrow__next-3-js',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
				},
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
				},
			]
        });
    };
    if ($('.reviews-box__list-js').length) {
        $('.reviews-box__list-js').slick({
            dots: true,
            infinite: false,
            speed: 300,
            variableWidth: true,
            slidesToScroll: 1,
            prevArrow: '.portfolio-arrow__prev-4-js',
            nextArrow: '.portfolio-arrow__next-4-js',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
				},
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
				},
			]
        });
    };
    if ($('.service-description__list-js').length) {
        $('.service-description__list-js').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<a href="#" class="portfolio-arrow__prev portfolio-arrow__prev-2-js portfolio-arrow"><i class="icon-arr-left"></i></a>',
            nextArrow: '<a href="#" class="portfolio-arrow__next portfolio-arrow__next-2-js portfolio-arrow"><i class="icon-arr-right"></i></a>',

        });
    };
    $('.header-mobile__gamburger-js').click(function () {
        $(this).toggleClass('active')
        $('.header-mobile__wrapper').toggleClass('active')
        $('body').toggleClass('active')
        return false
    })
    $('.header-mobile__overlay').click(function () {
        $('.header-mobile__gamburger-js').removeClass('active')
        $('.header-mobile__wrapper').removeClass('active')
        $('body').removeClass('active')
    })
    if ($('.order-form__select-js').length) {
        $('.order-form__select-js').styler();
    };
    $('.service-nav__box-js').click(function () {
        $('.service-nav__item').removeClass('active')
        var indexLink = $(this).parents('.service-nav__item').index()
        $(this).parents('.service-nav__item').addClass('active')
        $('.service-d__item').eq(indexLink).siblings().removeClass('active')
        $('.service-d__item').eq(indexLink).addClass('active')
    })
    $('.slider-arrow , .portfolio-arrow').click(function () {
        return false
    })
    $('.header-list__box-js').click(function () {
        $(this).parents('.header-list__item').siblings().find('.header-list__box-js').removeClass('active')
        $(this).parents('.header-list__item').siblings().find('.header-list__box-js').find('.header-list__drop').removeClass('active')
        $(this).find('.header-list__drop').toggleClass('active')
        $(this).toggleClass('active')

    })
    $('.question-list__item').click(function () {
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active')
        $(this).siblings().find('.question-list__answer').slideUp()
        $(this).find('.question-list__answer').slideToggle()
    })



    var height_block = $('.region-list').outerHeight();
    var test_height = 390;
    if ( height_block > test_height) {
        $(".region-list__more-js").toggle(function () {
            $(this).addClass('active');
            $('.region-block').animate({
                height: height_block + 30
            }, 200);
            $('.region-block').addClass('active');
        }, function () {
            $('.region-block').animate({
                height: '149'
            }, 200);
            $('.region-block').removeClass('active');
            $(this).removeClass('active');
        });
        $('.region-block').removeClass('active-height');
    }else{
        $('.region-block').addClass('active-height');
    }




    //$('.region-list__more-js').click(function(){
    //    $(this).toggleClass('active');
    //    $(this).find('span');
    //    $('.region-list').toggleClass('active')
    //    return false
    //});

    var height_block_show = $('.show-more').outerHeight();
    $(".show-more-js").toggle(function () {
        $(this).addClass('active');
        $(this).parent().find('.show-more').animate({
            height: height_block_show + 30
        }, 200);
        $(this).parent().find('.show-more').addClass('active');
    }, function () {
        $(this).parent().find('.show-more').animate({
            height: '220'
        }, 200);
        $(this).parent().find('.show-more').removeClass('active');
        $(this).removeClass('active');
    });




    //$('.show-more-js').click(function(){
    //		$(this).toggleClass('active');
    //		$(this).closest('.show-more').toggleClass('active');
    //		return false
    //});


    $(document).click(function (e) {
        var div = $('.header-list__box-js')
        if (div.has(e.target).length === 0) {
            div.find('.header-list__drop').removeClass('active')
            div.removeClass('active')
        }
    })

    $('.rate-list__link-js').click(function () {
        var indexLink = $(this).parents('.rate-list__item').index()

        $(this).toggleClass('active')
        $(this).parents('.rate-list__item').siblings('.rate-list__item').find('.rate-list__link-js').removeClass('active')

        $('.rate-table__item').eq(indexLink).siblings('.rate-table__item').removeClass('active')
        $('.rate-table__item').eq(indexLink).toggleClass('active')
        $('.rate-all').removeClass('active')
        $('.rate-top__btn-js').removeClass('active')
        return false
    })
    $('.rate-top__btn-js').click(function () {
        $(this).toggleClass('active')
        $('.rate-all').toggleClass('active')
        $('.rate-table__item').removeClass('active')
        $('.rate-list__link-js').removeClass('active')
        return false
    })
    $('.tel-js').mask("+7 (999) 999 - 99 - 99").on('click', function () {
        if ($(this).val() === "+7 (___) ___ - __ - __") {
            $(this).get(0).setSelectionRange(4, 4);

        }
    });;

    $(document).ready(function () {

        $(".equipment-list__btn.js-popap").on("click", function (event) {
            var modal = $(this).closest('.modal');
            if ($(this).hasClass('js-popap')) {
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
                $.fancybox.close()

                //забираем идентификатор бока с атрибута href
                var id = $(this).attr('href'),

                    //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;

                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({
                    scrollTop: top - 150
                }, 1000);
            }
        });
    });

});

var handler = function () {

    var height_footer = $('footer').height();
    var height_header = $('header').height();
    //$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});


    var viewport_wid = viewport().width;
    var viewport_height = viewport().height;

    if (viewport_wid <= 991) {

    }

}
$(window).bind('load', handler);
$(window).bind('resize', handler);


/*
 * FOR WORDPRESS
 */

function showElement(element, activeClass){
	element.show();
}

function hideElement(element, activeClass){
	element.hide();
}

// Trahadrom with menu
let count = 0;
$('#menu-main, #menu-main-mob, #menu-main-footer').children('li').each(function () {
    count++;

    $(this).addClass('header-list__item');
    if (!$(this).hasClass('menu-item-has-children')) {
        $(this).addClass('item2');
    } else {
        $(this).wrapInner('<div class="header-list__box header-list__box-js"></div>');
        $(this).find('ul').addClass('header-list__drop');
        $(this).find('ul > li').addClass('header-drop__item');
        $(this).find('ul > li > a').addClass('header-drop__link');
    }

    let link = $(this).find('.header-list__box > a');
    let title = link.text();
    let menuClass = '';
    let menuIcon = '';

    link.remove();

    switch (count) {
        case 1:
            menuClass = "icon-2";
            break;
        case 2:
            menuClass = "icon-1";
            break;
        case 3:
            menuClass = "icon-3";
            menuIcon = ' img3';
            break;
        case 4:
            menuClass = "icon-4";
            menuIcon = ' img4';
            break;
        case 5:
            menuClass = "icon-2";
            break;
        case 6:
            menuClass = "icon-1";
            break;
        case 7:
            menuClass = "icon-3";
            menuIcon = ' img3';
            break;
        case 8:
            menuClass = "icon-4";
            menuIcon = ' img4';
            break;
        case 9:
            menuClass = "icon-2";
            break;
        case 10:
            menuClass = "icon-1";
            break;
        case 11:
            menuClass = "icon-3";
            menuIcon = ' img3';
            break;
        case 12:
            menuClass = "icon-4";
            menuIcon = ' img4';
            break;
        default:
            menuClass = "icon-none";
    }

    if (!$(this).children().hasClass('header-list__box')) {
        let content = $(this).find('a');
        content.addClass('header-list__box');
        content.wrapInner('<span class="header-list__text"></span>');
        content.prepend('<span class="header-list__img' + menuIcon + '"><i class="' + menuClass + '"></i></span>');
    } else {
        let content = '<span class="header-list__img img1"><i class="' + menuClass + '"></i></span>';
        content += '<span class="header-list__text">' + title + '&nbsp;<i class="icon-arr-down"></i></span>';
        $(this).find('.header-list__box').prepend(content);
    }
});

// Trahadrom with ajax search posts type city
jQuery(function ($) {
    var searchTerm = catId = '';

    $('.search-input').keydown(function () {
        searchTerm = $.trim($(this).val());
    });

    $('.search-input').keyup(function () {
        if ($.trim($(this).val()) != searchTerm) { // Если новое значение не равно старому, идем дальше

            searchTerm = $.trim($(this).val());
            catId = $('.search-catId').val();

            if (searchTerm.length > 1) { // Если введено больше 2-х символов, идем дальше
                $.ajax({
                    url: '/wp-admin/admin-ajax.php', // Ссылка на AJAX обработчик WP
                    type: 'POST', // Отправляем данные методом POST
                    data: {
                        'action': 'ba_ajax_search', // Вызываемое действие, которое мы описали в functions.php
                        'term': searchTerm, // Отправляемые данные поля ввода
                        'catId': catId
                    },
                    beforeSend: function () { // Перед отправкой данных
                        $('.result-search .result-search-list').fadeOut(); // Скроем блок результатов
                        $('.result-search .result-search-list').empty(); // Очистим блок результатов
                        $('.result-search .preloader').show(); // Покажем загрузчик
                    },
                    success: function (result) { // После выполнения поиска
                        $('.result-search .preloader').hide(); // Скроем загрузчик
                        $('.result-search .result-search-list').fadeIn().html(result); // Покажем блок результатов и добавим в него полученные данные
                        let rem = $('.result-search .result-search-list').html();
						rem = rem.replace('</ul>0','</ul>');
						$('.result-search .result-search-list').html(rem);
                        // console.log( rem );
                    }
                });
            }
        }
    });

    $('.search-input').focusin(function () {
        $('.result-search').fadeIn();
    })

    $(document).mouseup(function (e) {
        if ((!$('.result-search').is(e.target) && $('.result-search').has(e.target).length === 0) && (!$('.search-input').is(e.target) && $('.search-input').has(e.target).length === 0)) {
            $('.result-search').fadeOut();
        }
    });
});

// Section rate (class). Hide special text, show only for btn "Back to tariffs"
jQuery(function ($) {
	var sectionRate = $('.rate > .wrapper');
	var specialText = sectionRate.find('.special-text');
	var btnTariffs = sectionRate.find('.rate-top > .rate-top__btn-js');
	var btnRateList = sectionRate.find('.rate-list');

	var countLink = btnRateList.find('li > a');
	countLink.click(function(event) {
		hideElement(specialText);
	});

	hideElement(specialText);

	btnTariffs.click(function() {
		
		if( btnTariffs.hasClass('active') )
		{
			showElement(specialText);
		} 
		else
		{
			hideElement(specialText);
		}
	});
});


// На форме блокируем кнопку, если галочка не поставлена
jQuery(function ($) {

	var allForm = $('form');

	allForm.each(function(){
		
		var btn = $(this).find('button');
		var checkbox = $(this).find('input[type=checkbox]');

		btn.on('click', function(){

			if( checkbox.length ){

				var div = checkbox.closest('div');
				var msg = div.find('.wpcf7-not-valid-checkbox');

				if( !checkbox.prop('checked') ) {
					
					msg.css({"display" : "block", "display" : "block", "position" : "absolute", "left" : "25%", "z-index" : "100", "border" : "1px solid #ff0000", "color" : "#ff0000", "background" : "#fff", "padding" : ".2em .8em"});
			        // alert('Не принято условие политики конфидициальности');
			        return false;

				} else {

					msg.css('display', 'none');
					return true;

				}
			}

		});
	});
});

function blockButtonIfOffCheckbox(){
        
    	var form = $('#modal31 form');
    	var btn = form.find('button');
		var checkbox = form.find('input[type=checkbox]');

		btn.on('click', function(){

			if( checkbox.length ){

				var div = checkbox.closest('div');
				var msg = div.find('.wpcf7-not-valid-checkbox');

				if( !checkbox.prop('checked') ) {
					
					msg.css({"display" : "block", "display" : "block", "position" : "absolute", "left" : "25%", "z-index" : "100", "border" : "1px solid #ff0000", "color" : "#ff0000", "background" : "#fff", "padding" : ".2em .8em"});
			        // alert('Не принято условие политики конфидициальности');
			        return false;

				} else {

					msg.css('display', 'none');
					return true;

				}
			}

		});
		
}

// меняем заголовок попапа если открывается на странице "На дачу" в секции "special-additional"
function changeTitlePopup(text){
    $('#modal31 form > h5').find('#title').text(text);
}



// если вдруг понадобятся функции по отправке форм. По вопросам писать "Виталию Брилю"
document.addEventListener( 'wpcf7invalid', function( event ) {
      console.log('Форма не отправленна!');
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
      console.log('Форма отправленна!');
}, false );

/* Spoiler */
window.onload = function () {
        let config = {
            container: 'spoiler',
            separator: 'break',
            link: {
                title: 'Читать далее',
                className: 'spoiler-break',
            }
        };
        let elements = $(config.container);
        for(let i=0; i <= elements.length; i++) {
            el = $(elements[i]);
            let separator = el.find(config.separator);
            if(el.attr('title')) {
                config.link.title = el.attr('title');
            }
            separator.before('<div><a href="javascript:;" class="' + config.link.className + '">' + config.link.title + '</a></div>')
            el.find('a.' + config.link.className).click(function () {
                separator.slideToggle();
            })
        }
    }
