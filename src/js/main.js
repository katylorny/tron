import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
//
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
