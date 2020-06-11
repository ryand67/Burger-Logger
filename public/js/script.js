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
        }).then(() => {
            location.reload();
        })
    })

    $('.devour').on('click', (event) => {
        event.preventDefault();
        let btnId = {
            id: event.target.getAttribute('data-id')
        }

        $.ajax({
            url: '/api/burger/update',
            method: 'PUT',
            data: btnId
        }).then(() => {
            location.reload();
        })
    })
})