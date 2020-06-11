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

    $('.devour').on('click', (event) => {
        event.preventDefault();
        let btnId = event.target.getAttribute('data-id');
        console.log(btnId);
    })
})