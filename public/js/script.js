$(document).ready(() => {
    //When the form is submitted
    $('#createForm').on('submit', (event) => {
        event.preventDefault();
        //Grab the name and make a holder object for ease of use
        let holder = {
            name: $('#formInput').val().trim()
        }

        //Then post to /api/burger with the holder
        $.ajax({
            url: '/api/burger',
            method: 'POST',
            data: holder
        }).then(() => {
            //Reload the page
            location.reload();
        })
    })

    //When a devour button is clicked
    $('.devour').on('click', (event) => {
        event.preventDefault();
        //Grab the associated id
        let btnId = {
            id: event.target.getAttribute('data-id')
        }

        //Put request at /api/burger with the id
        $.ajax({
            url: '/api/burger',
            method: 'PUT',
            data: btnId
        }).then(() => {
            //Reload the page
            location.reload();
        })
    })
})