# Convite · Vicenzo e Valentim

Convite digital estático para o chá de bebê. A arte foi extraída das duas páginas do PDF original fornecido pela família, sem alterar textos ou personagens. A abertura do envelope é feita em CSS; os controles usam JavaScript sem bibliotecas. O envelope verde pastel exibe apenas o monograma V & V; após a capa, a arte interna aparece sem uma página adicional de texto.

## Executar localmente

Abra `index.html` em um navegador moderno ou sirva esta pasta com um servidor HTTP, por exemplo `python -m http.server 8000`.

## Atualizar

O monograma está em `index.html`. O texto de compartilhamento está em `main.js`. As artes em `images/` contêm texto incorporado; para alterar nomes, data ou local nelas, atualize o PDF original e exporte novamente as duas páginas em WebP com 1772 × 2657 px.

## Publicar no GitHub Pages

Crie um repositório público independente chamado `convite-cha-vicenzo-valentim` e envie somente o conteúdo desta pasta. Em **Settings → Pages**, selecione **GitHub Actions**. O workflow `.github/workflows/deploy.yml` publica os arquivos da raiz. A URL esperada será `https://<usuario>.github.io/convite-cha-vicenzo-valentim/`.

## Fidelidade editorial

- Capa: “Chá do Vicenzo e Valentim”.
- Interior: “Vicenzo e Valentim, estão chegando, e a gente quer dividir com você essa alegria e esse momento tão especial. Venha nos abraçar no nosso chá de bebê! Quem recebe dois milagres de uma vez só, precisa de muito carinho em volta.”
- Sábado, 31 de outubro; 17:00 horas; Condomínio Solaris - Quiosque 3.

O ano de 2026 não foi inserido na arte. O endereço não foi transformado em link de mapas porque não há endereço completo confirmado.
