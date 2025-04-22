# 🧬 Projeto: Questionários Funcionais - Gilcy Kelly | Farmacêutica Funcional

Este é um projeto web criado para auxiliar a coleta de dados personalizados para atendimento funcional da Dra. Gilcy Kelly dos Santos Rodrigues. Com formulários específicos para homens e mulheres, a ferramenta permite gerar PDFs e enviar respostas para uma planilha Google automaticamente.

## 💡 Funcionalidades

- 📋 **Formulários personalizados**: Questionários específicos para público masculino ("Maridão Monstro 💙") e feminino ("Mulher Maravilha 🩷").
- 🧾 **Geração automática de PDF** com as respostas do formulário, formatado e assinado.
- ☁️ **Envio para planilha online** via Google Apps Script (`fetch` com `no-cors`).
- ✨ **Interface moderna e responsiva**, com temas escuros diferenciados por gênero.
- 🌱 **Campos condicionais dinâmicos** que aparecem apenas quando necessário.
- 📷 **Slider de imagens** na página inicial para identidade visual.
- 📄 **Download do currículo** diretamente pela interface.

## 🔧 Tecnologias Utilizadas

- HTML5
- CSS3 (temas escuros com identidade de gênero)
- JavaScript (vanilla)
- jsPDF para geração de PDFs
- Swiper.js para o carrossel de imagens
- Integração com Google Sheets via POST

## 📁 Estrutura do Projeto

📦 questionarios-funcionais ├── index.html # Página principal com apresentação e links ├── feminino.html # Formulário Mulher Maravilha 🩷 ├── masculino.html # Formulário Maridão Monstro 💙 ├── css/ │ └── style.css # Estilos personalizados por tema ├── js/ │ └── script.js # Lógica de interação, PDF, condicional e envio ├── img/ │ ├── foto1.png # Slides de apresentação │ ├── foto2.png │ ├── ... └── curriculo.pdf # Currículo para download




## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repo.git

Abra o arquivo index.html em seu navegador ou hospede os arquivos em um servidor web.

Escolha o questionário desejado:

Preencha as informações.

Clique em 🧾PDF para gerar um arquivo com as respostas.

Clique em ✔︎Enviar para registrar os dados na planilha.

Sobre o Autor
