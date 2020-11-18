import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import SimpleBar from 'simplebar'
import Swiper from 'swiper'


$(document).ready(() => {
    let tabsSwiper

    function disableSwiperOnDesktop() {
        if (window.matchMedia(`(min-width: 1024px)`).matches && tabsSwiper) {
            tabsSwiper.destroy(true, true)
            // eslint-disable-next-line no-console
            console.log(`свайпер уничтожен`)
        } else if (!tabsSwiper) {
            // eslint-disable-next-line no-console
            console.log(`свайпер создан`)
            initializeSwiper()
            // slider.changeDirection(`horizontal`)
            // tabsSwiper = new Swiper(`.swiper-container`, {
            //     freeMode: true,
            //     slidesPerView: `auto`
            // })
        }
    }

    function initializeSwiper() {
        tabsSwiper = new Swiper(`.swiper-container`, {
            freeMode: true,
            slidesPerView: `auto`
        })
    }

    if ($(window).innerWidth() < 1024) {
        // eslint-disable-next-line no-console
        console.log(`Ширина страницы меньше 1024, инициализируем свайпер`)
        initializeSwiper()
    //     tabsSwiper.changeDirection(`horizontal`)
    } else {
        // eslint-disable-next-line no-console
        console.log(`десктоп, не инициализируем свайпер`)
    //     tabsSwiper.changeDirection(`vertical`)
    }

    $(window).resize(() => {
        disableSwiperOnDesktop()
    })
})

$(`#modalNotifications`).modal({
    show: false
})


$(`#modalUser`).modal({
    // show: false
})
// $(`#modalNotifications`).on(`shown.bs.modal`, function () {
//     $(`.modal-backdrop`).addClass(`modal-backdrop--transparent`)
// })

$(`#modalUserMenu`).modal({
    show: false
})

$(`#modalUserEdit`).modal({
    show: false
})

$(`#modalNotPaid`).modal({})

$(`#modalCheckData`).modal({})

$(`.listing__wrapper`)[0] && new SimpleBar($(`.listing__wrapper`)[0])

$(`.listing__alphabet-wrapper`)[0] && new SimpleBar($(`.listing__alphabet-wrapper`)[0])

$(`.chat__wrapper`)[0] && new SimpleBar($(`.chat__wrapper`)[0])

$(`.chats__wrapper`)[0] && new SimpleBar($(`.chats__wrapper`)[0])
