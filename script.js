const scriptURL = 'https://script.google.com/macros/s/AKfycbwMEKN-K_PDn1lUmMWYkZPIIh0C40XWMvZDXCXWPPmwB6DD8KUboyuZCL9Llgbcvv_R/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Obrigada! Formulário enviado com sucesso."))
    .then(() => {window.location.reload(); })
    .catch(error => {
        console.error('Fetch Error:', error)
        alert('Tente novamente, por favor.')})
})