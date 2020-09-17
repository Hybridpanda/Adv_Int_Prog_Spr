//console.log('Hello');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const recipient = formData.get('recipient');
    const recipient = formData.get('recipient');

    const serv = {
        name,
        content
    };
    console.log(serv);
    console.log('form was submitted');

});