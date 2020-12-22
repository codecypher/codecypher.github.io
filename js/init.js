/*
  Init JS
  Working with Vanilla JS instead of jQuery (Bootstrap 5)
  https://themesberg.com/blog/tutorial/bootstrap-5-tutorial
*/
(function () {
    // This code takes all of the elements on the page that have the attribute
    // data-toggle=”tooltip” and then initializes each and every one of them.
    // You will also have the full list of elements available in the tooltipList variable.
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-toggle="tooltip"]')
    )

    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    // This code selects the button and the modal, creates a Bootstrap 5 modal object
    // and then when the button is pressed the modal will be toggled.
    // var registerAccountButton = document.getElementById('registerAccountButton')
    // var registerAccountModal = new bootstrap.Modal(
    //     document.getElementById('registerAccountModal'),
    //     {
    //         keyboard: false
    //     }
    // )
    // registerAccountButton.addEventListener('click', function () {
    //     registerAccountModal.toggle()
    // })
})()
