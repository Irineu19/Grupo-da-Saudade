const imagens = [
  'imagens/grupodasaudade.jpg',
  'imagens/grupodasaudade1.jpg',
  'imagens/grupodasaudade2.jpg',
  'imagens/gruposdasaudade3.jpg',
  'imagens/participantes.jpg',
  'imagens/sertao.jpg',
  'imagens/apresentacao_sao_joao.jpg',
  'imagens/carnaval.jpg',
  'imagens/folia_reis.jpg',
];

let atual = 0;
const galeria = document.getElementById('galeria');

setInterval(() => {
  atual = (atual + 1) % imagens.length;
  galeria.src = imagens[atual];
}, 2000); // Troca a imagem a cada 4 segundos
