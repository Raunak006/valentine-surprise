const askButton = document.getElementById('askButton');
   const response = document.getElementById('response');

   askButton.addEventListener('click', () => {
     askButton.style.display = 'none';
     response.classList.remove('hidden');
   });