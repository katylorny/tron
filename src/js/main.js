import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import SimpleBar from 'simplebar'
import Swiper from 'swiper'


$(document).ready(() => {
    let tabsSwiper

    function disableSwiperOnDesktop() {
        if (window.matchMedia(`(min-width: 1024px)`).matches && tabsSwiper) {
            console.log(`десктоп, свайпер есть, удаляем`)
            tabsSwiper.destroy()
            tabsSwiper = undefined
        } else if (!window.matchMedia(`(min-width: 1024px)`).matches && !tabsSwiper) {
            console.log(`не десктоп, свайпера нет, создаем`)
            tabsSwiper = new Swiper(`.swiper-container`, {
                freeMode: true,
                slidesPerView: `auto`
            })
        } else {
            console.log(`состояние свайпера не нужно менять`)
        }
    }

    if (!window.matchMedia(`(min-width: 1024px)`).matches) {
        console.log(`маленькая ширина, инициализируем`)
        tabsSwiper = new Swiper(`.swiper-container`, {
            freeMode: true,
            slidesPerView: `auto`
        })
    } else {
        console.log(`Большая ширина, не инициализируем`)
        tabsSwiper = undefined
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
