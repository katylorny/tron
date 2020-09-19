import $ from 'jquery'
import "popper.js"
import "bootstrap"
//
// $(function () {
//     $(`[data-toggle="popover"]`).popover()
// })

$(document).ready(() => {
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})

$(`#modalNotifications`).modal({
    backdrop: false,
    show: false
})


$(`#modalUser`).modal({
    show: false
})
// $(`#modalNotifications`).on(`shown.bs.modal`, function () {
//     $(`.modal-backdrop`).addClass(`modal-backdrop--transparent`)
// })

$(`#modalUserMenu`).modal({
    backdrop: false,
    show: false
})

$(`#modalUserEdit`).modal({
    backdrop: false,
    show: false
})

$(`#modalNotPaid`).modal({

})
