$(document).ready(() => {
    $('#createForm').on('submit', (event) => {
        event.preventDefault();
        let holder = {
            name: $('#formInput').val().trim()
        }
        $.ajax({
            url: '/api/burger',
            method: 'POST',
            data: holder
        })
    })

    $(document).on('click', '.devour', (event) => {
        event.preventDefault();
        let btnId = $(this).data("id");
        console.log(btnId);
    })
})