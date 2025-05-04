const fotos = [
    "imagens/grupodasaudade.jpg",
    "imagens/grupodasaudade1.jpg",
    "imagens/grupodasaudade2.jpg",
    "imagens/apresentacao_sao_joao.jpg",
    "imagens/carnaval.jpg",
    "imagens/folia_reis.jpg",
    "imagens/participantes.jpg",
    "imagens/sertao.jpg"
  ];
  
  let indice = 0;
  
  function mostrarFoto() {
    document.getElementById("foto").src = fotos[indice];
  }
  
  function anterior() {
    indice = (indice - 1 + fotos.length) % fotos.length;
    mostrarFoto();
  }
  
  function proximo() {
    indice = (indice + 1) % fotos.length;
    mostrarFoto();
  }
  