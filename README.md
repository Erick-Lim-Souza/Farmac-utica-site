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

# 📦 Estrutura do projeto: questionarios-funcionais

questionarios-funcionais/
├── index.html             # Página principal com apresentação e links
├── feminino.html          # Formulário Mulher Maravilha 🩷
├── masculino.html         # Formulário Maridão Monstro 💙
├── css/
│   └── style.css          # Estilos personalizados por tema
├── js/
│   └── script.js          # Lógica de interação, PDF, condicional e envio
├── img/
│   ├── foto1.png          # Slides de apresentação
│   ├── foto2.png
│   ├── ...                # Outras imagens
└── curriculo.pdf          # Currículo para download
## 🚀 Como Usar

# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git

# 2. Acesse o diretório
cd seu-repo

# 3. Abra o arquivo index.html no navegador (exemplo com VS Code ou direto no navegador)
code index.html
# ou
xdg-open index.html       # (Linux)
start index.html          # (Windows)
open index.html           # (macOS)

# 4. No navegador:
# - Escolha o formulário desejado (feminino ou masculino).
# - Preencha todas as informações solicitadas.
# - Clique em 🧾PDF para gerar um arquivo com as respostas.
# - Clique em ✔︎Enviar para registrar os dados em uma planilha online.



## 👨‍💻 Autor

Feito com 💚 + ☕ + 🥄 whey por  
**Erick Souza – Gree Monster Project**

- [Meu GitHub](https://github.com/Erick-Lim-Souza)
- [Meu LinkedIn](https://www.linkedin.com/in/erick-souza-70404686/ "Meu LinkedIn")
- [Meu perfil DIO.me](https://www.dio.me/users/erickdelimasouza "Meu perfil DIO.me")
- [Meu perfil Alura](https://cursos.alura.com.br/user/erickdelimasouza)
- [Meu perfil Rocketseat](https://app.rocketseat.com.br/me/ericksouza)

📬 **E-mail**: erick.devzone@gmail.com

Se curtir, dá uma estrela ⭐ no repositório!

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

