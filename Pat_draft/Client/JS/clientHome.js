//console.log('Hello');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const recipient = formData.get('recipient');
    const favorSelect = formData.get('favorSelect');

    const favorForm = {
        name,
        recipient,
        favorSelect
    };
    console.log(favorForm);
    console.log('form was submitted');

});