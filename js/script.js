// Abrir e fechar formulário
function abrirFormulario() {
  const popup = document.getElementById('formPopup');
  popup.style.display = 'flex'; // Altere de block para flex
}

function fecharFormulario() {
  document.getElementById('formPopup').style.display = 'none';
}


function gerarPDF() {
  const formulario = document.getElementById('formulario');
  const formData = new FormData(formulario);
  const doc = new jspdf.jsPDF();

  // Detecta título da página e define o título do PDF
  const tituloPagina = document.title.includes("Maridão") ? 
    "Questionário do Maridão Monstro - Respostas" : 
    "Questionário Mulher Maravilha - Respostas";

  doc.setFontSize(18);
  doc.text(tituloPagina, 20, 20);

  let yPosition = 30;

  // Geração do PDF com perguntas e respostas formatadas
  for (let [key, value] of formData.entries()) {
    if (value.trim() !== "") {
      doc.setFontSize(12);
      doc.text(`${key}: ${value}`, 20, yPosition);
      yPosition += 10;
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
    }
  }

  // Espaço antes da assinatura
  yPosition += 20;
  doc.setFontSize(12);
  doc.text("Dra. Gilcy Kelly dos Santos Rodrigues", 20, yPosition);
  yPosition += 7;
  doc.setFontSize(11);
  doc.text("Farmacêutica Responsável", 20, yPosition);
  yPosition += 6;
  doc.text("CRF-GO: 23545", 20, yPosition);

  const nomeArquivo = tituloPagina.includes("Maridão") 
    ? "questionario_maridao_monstro.pdf" 
    : "questionario_mulher_maravilha.pdf";

  doc.save(nomeArquivo);
}

// Ativa o botão
document.querySelector('button').addEventListener('click', gerarPDF);


// 🌟 Campos condicionais: mostra inputs extras quando marcar "Sim"
document.addEventListener("DOMContentLoaded", function () {
  const camposCondicionais = [
    { nomeRadio: "dieta", idCampo: "detalheDieta" },
    { nomeRadio: "doencas", idCampo: "detalheDoencas" },
    { nomeRadio: "exames", idCampo: "detalheExames" },
    { nomeRadio: "interesseSexo", idCampo: "interesseSexoObs" },
    { nomeRadio: "medicacao", idCampo: "detalheMedicacao" },
    { nomeRadio: "outro", idCampo: "detalheOutro" },
    { nomeRadio: "outroSexo", idCampo: "detalheOutroSexo" },
    { nomeRadio: "outroInteresse", idCampo: "detalheOutroInteresse" },
    { nomeRadio: "outroMedicacao", idCampo: "detalheOutroMedicacao" },
    { nomeRadio: "outroDoencas", idCampo: "detalheOutroDoencas" },
    { nomeRadio: "outroExames", idCampo: "detalheOutroExames" },
    { nomeRadio: "outroDieta", idCampo: "detalheOutroDieta" },
    { nomeRadio: "outroAlimentacao", idCampo: "detalheOutroAlimentacao" },
    { nomeRadio: "outroAlimentacao2", idCampo: "detalheOutroAlimentacao2" },
    { nomeRadio: "outroAlimentacao3", idCampo: "detalheOutroAlimentacao3" },
    { nomeRadio: "outroAlimentacao4", idCampo: "detalheOutroAlimentacao4" },
    // Adicione mais campos condicionais aqui, se necessário
    // { nomeRadio: "outroCampo", idCampo: "detalheOutroCampo" }  

  ];

  camposCondicionais.forEach(({ nomeRadio, idCampo }) => {
    const radios = document.getElementsByName(nomeRadio);
    const campoTexto = document.getElementById(idCampo);

    if (!radios.length || !campoTexto) return;

    radios.forEach(radio => {
      radio.addEventListener("change", function () {
        if (radio.value === "Sim") {
          campoTexto.style.display = "block";
        } else {
          campoTexto.style.display = "none";
          campoTexto.value = "";
        }
      });
    });
  });
});

const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

// ENVIO DE FORMULARIO PARA O GOOGLE PLANILHA.
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => (data[key] = value));

  fetch("AKfycbxlUqO77VglapDjXDvgtxifat5Ei04l1rMIIXOjhs2J", {
    method: "POST",
    mode: "no-cors", // pra não bloquear a requisição
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(() => {
    alert("Formulário enviado com sucesso!");
    this.reset();
  });
});
