// Add event listener to button to handle form submission
const button = document.querySelector('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.querySelector('input').value;
  const message = document.querySelector('textarea').value;
  console.log(`Email: ${email}, Message: ${message}`);
});