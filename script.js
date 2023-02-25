const form = document.querySelector('form');
const barcodeInput = document.getElementById('barcode');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(event) {
	event.preventDefault(); // Previne o envio padrão do formulário
	const barcode = barcodeInput.value.trim();

	if (!barcode) {
		alert('Por favor, insira um código de barras válido!');
		return;
	}

	const url = `https://n8n.larean.com.br/webhook/f8583b0c-b19f-4c1c-956e-bf1722134f56?codigo=${barcode}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			responseDiv.innerHTML = `<p>Valor do produto: R$ ${data.preco}</p>`;
		})
		.catch(error => {
			responseDiv.innerHTML = `<p>Ocorreu um erro ao obter o valor da mercadoria: ${error}</p>`;
		});
		function resetPage() {
			window.location.href = './index.html'; // Insira a URL da página que deseja redirecionar
		  }
		  
		  setTimeout(resetPage, 10000); // Redireciona para a página após 5 segundos (5000 milissegundos)
});