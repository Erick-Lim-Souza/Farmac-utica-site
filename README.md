# 🧬 Projeto: Questionários Funcionais - Gilcy Kelly | Farmacêutica Funcional

Este é um projeto web criado para auxiliar a coleta de dados personalizados para atendimento funcional da Dra. Gilcy Kelly dos Santos Rodrigues. Com formulários específicos para homens e mulheres, a ferramenta permite gerar PDFs e enviar respostas para uma planilha Google automaticamente.


🔗 **Projeto no ar:**  
👉 [Acesse aqui](https://dragilcykellyfarmaceutica.netlify.app/)

## 💡 Funcionalidades

- 📋 **Formulários personalizados**: Questionários específicos para público masculino ("Maridão Monstro 💙") e feminino ("Mulher Maravilha 🩷").
- 🧾 **Geração automática de PDF** com as respostas do formulário, formatado e assinado.
- ☁️ **Envio para planilha online** via Google Apps Script (`fetch` com `no-cors`).
- ✨ **Interface moderna e responsiva**, com temas escuros diferenciados por gênero.
- 🌱 **Campos condicionais dinâmicos** que aparecem apenas quando necessário.
- 📷 **Slider de imagens** na página inicial para identidade visual.
- 📄 **Download do currículo** diretamente pela interface.

# ==========================================
# MELHORIAS ADICIONADAS AO SITE
# ==========================================

# ✅ 1. Integração com WhatsApp
# - Adicionado link direto com redirecionamento para WhatsApp
# - Permite envio rápido das informações para a farmacêutica ou para o próprio paciente

# ✅ 2. Geração de PDF
# - Implementado botão 🧾 que gera um PDF com todas as respostas do formulário
# - Utiliza a biblioteca jsPDF via CDN

# ✅ 3. Envio automático para Planilha do Google
# - Integração via Google Apps Script
# - Armazena todas as respostas de forma organizada na nuvem
# - Ideal para acompanhamento de evolução clínica

# ✅ 4. Campos dinâmicos (Exibição condicional)
# - Exibe automaticamente campos extras quando o usuário marca "Sim"
#   Ex: Se "Sim" para medicamentos → aparece campo "Quais medicamentos?"

# ✅ 5. Botões personalizados
# - Botão de PDF, botão de limpar formulário e botão de envio com ícones
# - Tornam a experiência mais intuitiva e visualmente agradável

# ✅ 6. Layout moderno com tema Dark Azul
# - Aplicado visual personalizado masculino (dark com tons azulados)
# - Melhor leitura e visual clean

# ✅ 7. Footer com identidade profissional
# - Assinatura: “Desenvolvido com carinho pela Farmacêutica CRF-GO: 23545”
# - Branding do projeto: "Gree Monster Project"

# ✅ 8. Preparado para gerar relatório clínico
# - Com todas as seções necessárias: treino, sono, alimentação, saúde, barba/cabelo, estresse etc.
# - Ideal para criar planos de cuidado farmacêutico

# ✅ 9. Organização por Fieldsets com ícones e emojis
# - Divisão temática deixa o questionário mais leve, divertido e fácil de responder

# ✅ 10. Acessibilidade e responsividade
# - Compatível com celular, tablet e desktop
# - Labels e placeholders claros para guiar o preenchimento

# ==========================================
# Essas funcionalidades elevaram o site a nível profissional 👨🏽‍⚕️💻
# Pronto para ser usado em atendimentos reais e acompanhamento de pacientes
# ==========================================

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

Feito com 💚 + ☕
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


![image](https://github.com/user-attachments/assets/86e8d6e3-1a31-449b-abc5-c94b53330540)

