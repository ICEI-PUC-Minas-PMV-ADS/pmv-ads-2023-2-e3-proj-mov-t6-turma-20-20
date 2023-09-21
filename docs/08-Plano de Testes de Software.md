# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
|Caso de Teste         |       CT-01 - Cadastrar um Usuário                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |   RF-01 - O aplicativo deve permitir o cadastro de usuários, portadores de cadastro de pessoa física, onde serão cadastrados, nome completo, CPF, Email, telefone, endereço e um Id. O cadastro também poderá ser efetuado com a conta do Facebook, Apple e Google.                 |
|Objetivo do Teste     |   Verificar se o usuário consegue se cadastrar no aplicativo.                                            |
|Passos                |   1-Acessar o aplicativo  <br>                         2-Clicar em "Criar Conta       <br>                   3-Preencher os campos obrigatórios(Nome completo,CPF,Email,telefone) que também pode ser feito pelo Facebook, Apple ou Google.|
|Critério de Êxito     |   -O cadastro foi realizado com sucesso. |

|Caso de Teste         |       CT-02 - Cadastrar um livro no acervo                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |   RF-02 - O aplicativo deve permitir que o usuário cadastrado faça cadastro dos livros com os campos de título, autor, número de páginas, edição, estado de conservação e gênero. O livro cadastrado passa a fazer parte do acervo do usuário.                  |
|Objetivo do Teste     |   Verificar se o usuário consegue cadastrar um livro em seu acervo.                                           |
|Passos                |   1- Acessar o aplicativo          <br>           2-Efetuar login    <br>     3-Clicar em "Cadastrar livros"       <br>        4-Preencher os campos obrigatórios com o título,autor,número de páginas,edição,estado de conservação e gênero.                                   |
|Critério de Êxito     |   -O livro foi cadastrado com sucesso. |

|Caso de Teste         |       CT-03 - Excluir um livro de seu acervo                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |     RF-03 - O aplicativo deve permitir que o usuário faça a exclusão do cadastro de livros do seu acervo                 |
|Objetivo do Teste     |     Verificar se o usuário consegue excluir um livro de seu acervo.                                          |
|Passos                |     1- Abrir o aplicativo  <br>   2-Efetuar o login      <br>    3-Clicar em "Meu acervo"      <br>     4-Selecionar algum livro    <br>   5-Clicar em "Excluir"                                 |
|Critério de Êxito     |    -O livro foi excluído com sucesso.|

|Caso de Teste         |       CT-04 - Editar um livro de seu acervo.                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |     RF-04 - O aplicativo deve permitir que o usuário faça a edição do cadastro de livros do seu acervo.                |
|Objetivo do Teste     |     Verificar se o usuário consegue editar um livro de seu acervo.                                          |
|Passos                |     1- Abrir o aplicativo  <br>  2-Efetuar o login     <br>     3-Clicar em "Meu acervo"     <br>     4-Selecionar algum livro   <br>     5- Clicar em "Editar"                                 |
|Critério de Êxito     |    - O livro foi editado com sucesso.|

|Caso de Teste         |       CT-05 - Ocultar/hibernar o cadastro dos livros                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |   RF-05 -  O aplicativo deve permitir que o usuário oculte/hiberne o cadastro dos livros do seu acervo.                 |
|Objetivo do Teste     |   Verificar se usuário consegue ocultar um livro que já foi cadastrado do seu acervo.                                            |
|Passos                |    1-Abrir o aplicativo <br> 2-Efetuar o login <br> 3-Clicar em "Meu acervo" <br> 4-Selecionar algum livro <br> 5-Clicar em "Ocultar"                                  |
|Critério de Êxito     |   O livro foi ocultado com sucesso. |

|Caso de Teste         |       CT-06 - Configurar a negociação de livros.                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |   RF-06 -  O aplicativo deve permitir que o usuário cadastrado defina quais os tipos de negociação ele aceita sobre os livros que estão no seu acervo: troca ou venda.                 |
|Objetivo do Teste     |   Verificar se o usuário consegue configurar as propostas que vão ser recebidas pelo seu livro.                                            |
|Passos                |    1-Abrir o aplicativo <br>       2-Efetuar o login    <br>     3-Clicar em "Meu acervo"   <br>     4-Selecionar algum livro     <br>     5-Escolher as opções na qual o livro possa ser negociado.                                 |
|Critério de Êxito     |    O livro deve ser negociado somente pela forma escolhida pelo dono.|

|Caso de Teste         |       CT-07 - Filtro de busca                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |   RF-07 - O aplicativo deve oferecer uma funcionalidade de filtro/pesquisa. para permitir ao usuário localizar um livro específico no acervo dos outros usuários cadastrados que será informado na caixa de pesquisa. Os filtros podem ser por título, autor e gênero.                  |
|Objetivo do Teste     |   Verificar se a caixa de pesquisa está funcionando corretamente                                            |
|Passos                |   1-Abrir o aplicativo <br> 2-Clicar na barra de pesquisa <br> 3-Digitar o nome do livro desejado                                   |
|Critério de Êxito     |   O aplicativo deve apresentar para o usuário livros correspondentes ao que foi procurado. |

|Caso de Teste         |       CT-08 - Livros recém cadastrados                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |    RF-08 -  O aplicativo deve oferecer a visualização dos últimos dez livros cadastrados, por ordem de cadastro.                |
|Objetivo do Teste     |    Verificar os livros que foram cadastrados recentemente.                                           |
|Passos                |    1- Abrir o aplicativo <br> 2-Clicar em "Adicionados recentemente"                                  |
|Critério de Êxito     |    O usuário deve conseguir ver livros que foram adicionados recentemente|

|Caso de Teste         |       CT-09 - Negociação de livros                                      |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |    RF-09 -  O aplicativo deve permitir que o usuário cadastrado possa fazer ofertas de negociação (negociar valor e oferecer outro título para troca) nos livros que possuir interesse e aceite ou recuse ofertas de interessados no seu acervo.                |
|Objetivo do Teste     |    Verificar se é possível realizar uma oferta em um livro                                           |
|Passos                |    1- Abrir o aplicativo <br> 2-Escolher um livro que está anunciado <br> 3-Clicar em "Realizar uma oferta"                                 |
|Critério de Êxito     |    O usuário deve conseguir realizar uma oferta por um livro específico|

|Caso de Teste         |       CT-10 - Lista de favoritos |
|--------------------  |---------------------------------------------------------------------|
|Requisito Associado   |    RF-10 - O aplicativo deve permitir que usuário favorite os livros de interesse, com a criação de uma lista de favoritos.                 |
|Objetivo do Teste     |    Verificar se é possível colocar um livro como favorito                                           |
|Passos                |    1-Abrir o aplicativo <br> 2-Escolher um livro que você gosta <br> 3-Clicar em "gostei" <br> 4- Para consultar, clicar em "Favoritos"                                 |
|Critério de Êxito     |    O usuário deve conseguir consultar seus livros favoritos|
