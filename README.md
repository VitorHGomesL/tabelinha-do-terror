# 📊 Tabelinha do Terror - Calculadora de Médias Acadêmicas

Uma aplicação web interativa desenvolvida para auxiliar estudantes no gerenciamento e cálculo de médias acadêmicas em múltiplos componentes curriculares. O projeto foca em dinamismo e prevenção de falhas de entrada de dados, permitindo a manipulação da estrutura da tabela em tempo real.

---

## 🚀 Sobre o Projeto

A ideia da **Tabelinha do Terror** nasceu de uma tabela em excel usada e conhecida por muitos estudantes da faculdade de direito que cursei antes dessa de ADS, o intuito da tabela era verificar quanto o aluno precisará tirar nos próximos bimestres para fugir da reprovação, razão pela qual ganhou o arquivo dessa tabela foi nomeado como "tabelinha do terror", a ideia deste projeto é aprimnorar a tabelinha do terror para o dia-a-dia na nova faculdade.

A aplicação foi estruturada utilizando o modelo clássico de desenvolvimento web (HTML5, CSS3 e JavaScript Vanilla), priorizando a manipulação limpa do DOM (Document Object Model) sem a dependência de frameworks externos, dado que a aplicação foi idealizada para uma atividade da matéria de "Algoritmos e Linguagem de Programação", da graduação em ADS que estou cursando.

### ✨ Principais Funcionalidades Implementadas

* **Manipulação Dinâmica do DOM:** Funções para adicionar e remover colunas de avaliações (`adicionarColuna` e `removerColuna`) dinamicamente, atualizando a estrutura da tabela HTML via JavaScript.
* **Tratamento de Exceções (Data Sanitization):** Captura de entradas do usuário com conversão de tipos (`parseFloat`) e tratamento ativo de valores nulos ou inválidos (`NaN`) para evitar falhas de execução no motor do navegador.
* **Renderização Dinâmica de Resultados:** Geração e inserção de uma nova tabela de médias em tempo real na interface através de *Template Literals*.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica dos dados e tabelas.
* **CSS3:** Estilização básica e organização visual dos elementos.
* **JavaScript (ES6+):** Lógica de negócios, funções agregadoras, manipulação do DOM e escopo de eventos.

---

## 📂 Estrutura do Repositório

* `index.html`: Estrutura principal da interface e ponto de entrada da aplicação.
* `script.js`: Arquivo centralizador da lógica, contendo as funções de identificação, cálculo e renderização.
* `style.css`: Regras de estilo para apresentação da tabela e inputs.
* [cite_start]`.gitignore`: Configuração para exclusão de arquivos de mídia locais do controle de versão[cite: 1].

---

## 🗺️ Roadmap de Evolução

O projeto está em constante desenvolvimento. As próximas etapas de implementação técnica incluem:

- [ ] **UI/UX Refinement:** Aperfeiçoamento da estilização CSS utilizando conceitos de design responsivo, variáveis CSS e melhorias na identidade visual.
- [ ] **Validador de Status Acadêmico:** Implementação de função lógica para verificar automaticamente se o estudante está "Aprovado" ou "Reprovado" com base na média mínima.
- [ ] **Preditor de Nota Mínima (N3):** Desenvolvimento de um algoritmo que, em caso de reprovação prévia, calcule de forma exata a nota mínima necessária na avaliação subsequente (N3) para atingir a aprovação.
- [x] **Módulo Avançado de AFs:** Refatoração da lógica de cálculo para computar a média aritmética ou ponderada exclusivamente das novas colunas de AF adicionadas dinamicamente, consolidando o fluxo atualmente em *Work In Progress* (WIP).
- [x] **Correção de Bug (DOM Rendering):** Ajustar a ordem de renderização na função de criação de colunas dinâmicas, corrigindo o comportamento atual onde as novas colunas de AF são inseridas em ordem invertida na tabela.

---

## 📜 Changelog

### [0.7.0] - 2026-05-27
#### ✨ Adicionado
* Adicionado mensagem de erro quando são inseridos valores fora do intervalo 0-10

#### ⚙️ Modificado / Otimizado

* Ao invés de pegar os itens da tabela e os inserir em variáveis de maneira individual, de modo a se adaptar a função de adicionar as AFs, o sistema de armazenamento das variáveis foi alterado, agora funcionando através de uma matriz que simula automaticamente para o JS os dados inseridos na tabela da página web
* Ajustes no Readme

#### 🐛 Corrigido
* corrigido bug que não permitia criação de novas tabelas
* Corrigido a ordem criação e remoção de tabelas

---

## 🧑‍💻 Como Executar o Projeto

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/vitorhgomesl/tabelinha-do-terror.git](https://github.com/seu-usuario/tabelinha-do-terror.git)

    ou  

    acesse: https://vitorhgomesl.github.io/TABELINHA-DO-TERROR-V2.0/
