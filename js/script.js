// script.js atualizado com envio para Google Sheets, PDF formatado e acessibilidade

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(formulario);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    // ENVIO PARA GOOGLE SHEETS
    fetch("https://script.google.com/macros/s/AKfycbxlUqO77VglapDjXDvgtxifat5Ei04l1rMIIXOjhs2J/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      alert("Formulário enviado com sucesso! 🩷");
      formulario.reset();
    });
  });

  // CAMPOS CONDICIONAIS
  const camposCondicionais = [
    { nomeRadio: "dieta", idCampo: "detalheDieta" },
    { nomeRadio: "doencas", idCampo: "detalheDoencas" },
    { nomeRadio: "exames", idCampo: "detalheExames" },
    { nomeRadio: "interesseSexo", idCampo: "detalheInteresseSexo" },
    { nomeRadio: "medicacao", idCampo: "detalheMedicacao" },
    { nomeRadio: "cirurgia", idCampo: "detalheCirurgia" },
    { nomeRadio: "doencaCronica", idCampo: "detalheDoencaCronica" },
    { nomeRadio: "doencaAutoimune", idCampo: "detalheDoencaAutoimune" },
    { nomeRadio: "doencaInfecciosa", idCampo: "detalheDoencaInfecciosa" },
    { nomeRadio: "alergias", idCampo: "detalheAlergias" }
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

  // BLOQUEAR SEÇÃO 6 PARA MENORES DE 18 ANOS
  const idadeInput = document.getElementById("idade");
  const secaoLibido = document.querySelector("fieldset:nth-of-type(6)");

  if (idadeInput && secaoLibido) {
    idadeInput.addEventListener("change", () => {
      const idade = parseInt(idadeInput.value);
      if (idade < 18 || isNaN(idade)) {
        secaoLibido.style.display = "none";
        secaoLibido.querySelectorAll("input").forEach(input => input.disabled = true);
      } else {
        secaoLibido.style.display = "block";
        secaoLibido.querySelectorAll("input").forEach(input => input.disabled = false);
      }
    });
  }
});

// PDF FORMATADO
function gerarPDF() {
  const formulario = document.getElementById("formulario");
  const formData = new FormData(formulario);
  const doc = new jspdf.jsPDF();

  const tituloPagina = document.title.includes("Maridão") ?
    "Questionário do Maridão Monstro - Respostas" :
    "Questionário Mulher Maravilha - Respostas";

  doc.setFontSize(18);
  doc.text(tituloPagina, 20, 20);

  let yPosition = 30;
  let ultimaSecao = "";

  for (let [key, value] of formData.entries()) {
    if (value.trim() === "") continue;

    const secaoAtual = getSecaoDoCampo(key);
    if (secaoAtual !== ultimaSecao) {
      yPosition += 10;
      doc.setFontSize(14);
      doc.text(secaoAtual, 20, yPosition);
      yPosition += 5;
      ultimaSecao = secaoAtual;
    }

    doc.setFontSize(12);
    doc.text(`${key}: ${value}`, 20, yPosition);
    yPosition += 8;

    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }
  }

  yPosition += 20;
  doc.text("Dra. Gilcy Kelly dos Santos Rodrigues", 20, yPosition);
  doc.text("Farmacêutica Responsável | CRF-GO: 23545", 20, yPosition + 7);

  const nomeArquivo = tituloPagina.includes("Maridão")
    ? "questionario_maridao_monstro.pdf"
    : "questionario_mulher_maravilha.pdf";

  doc.save(nomeArquivo);
}

function getSecaoDoCampo(nome) {
  if (["idade", "peso", "altura"].includes(nome)) return "1. Informações Pessoais";
  if (["frequenciaTreino", "tipoTreino", "duracaoTreino", "horarioTreino", "cansacoTreino", "disposicao"].includes(nome)) return "2. Rotina de Treino";
  if (["dieta", "detalheDieta", "agua", "proteina", "compulsao", "pularRefeicoes"].includes(nome)) return "3. Alimentação";
  if (["sono", "descanso", "sonoAgitado", "estresse"].includes(nome)) return "4. Sono e Estresse";
  if (["ciclo", "anticoncepcional"].includes(nome)) return "5. Ciclo e Hormônios";
  if (["interesseSexo", "detalheInteresseSexo", "desconforto"].includes(nome)) return "6. Libido e Vida Sexual";
  if (["medicacao", "detalheMedicacao", "cirurgia", "detalheCirurgia", "doencaCronica", "detalheDoencaCronica", "doencaAutoimune", "detalheDoencaAutoimune", "doencaInfecciosa", "detalheDoencaInfecciosa", "cansaco", "alergias", "detalheAlergias"].includes(nome)) return "7. Saúde Geral";
  if (["queda", "barba", "calvicie", "couro", "bone"].includes(nome)) return "8. Cabelo e Barba";
  return "Outros";
}
