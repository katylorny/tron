import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import SimpleBar from "simplebar/dist/simplebar"

// $(function () {
//     $(`[data-toggle="popover"]`).popover()
// })

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})

$(`#modalNotifications`).modal({
    show: false
})


$(`#modalUser`).modal({
    show: false
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

// eslint-disable-next-line no-new
new SimpleBar($(`.listing__wrapper`)[0])

// eslint-disable-next-line no-new
new SimpleBar($(`.listing__alphabet-wrapper`)[0])

// eslint-disable-next-line no-new
new SimpleBar($(`.chat__wrapper`)[0])
