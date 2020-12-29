# allure-upload-base-image

## O Allure
Allure é um report feito e mantido pela qatools.ru que visa centralizar e trazer a melhor visualização sobre os seus testes não importa qual seja o framework de teste que você  esteja utilizando.

Para mais informações você pode acessar o site oficial do [allure](http://allure.qatools.ru/).

## Projeto responsável por subir seus resultados do allure no allure docker 

Observação: o [Allure Docker](https://github.com/fescobar/allure-docker-service) não está incluído nesse projeto, você precisa fazer a instalação separadamente.

Este projeto tem o objetivo de centralizar a manutenção do sistema de upload de resultados para o allure docker, trazendo a garantia que sempre estará utilizando a ultima versão validada. 

O projeto por padrão pega a pasta allure-results e faz a disponibilização via api-rest para o seu servidor do allure docker. Para utilizar ele via docker basta utilizar o comando:

```shell
docker run --env URL_REPORT=$URL_REPORT  \
-v $ALLURE_RESULTS:/allure-results  \
pagarme/allure-upload node upload.js --projectID=$ID
```

Onde:
- $URL_REPORT: a url onde está o seu servidor do [Allure Docker](https://github.com/fescobar/allure-docker-service)
- $ALLURE_RESULTS: path onde estão os resultados de teste gerados pelo allure
- $ID: id que será utilizado para a criação do seu projeto (nós indicamos utilizar `-` ou `_` caso o nome do seu projeto tenha espaço)

Assim será feito o download da nossa imagem `pagarme/allure-upload` diretamente do [docker hub](https://hub.docker.com/) e os resultados serão enviados para o seu Dashboard do Allure.


O arquivo [upload.js](./upload.js) ainda pode receber os seguintes argumentos:

`--path=caminho-dentro-do-docker` (caso queira utilizar esse argumento, lembre de alterar a pasta interna do docker. Ou utilizar o upload.js fora do docker)

`--url=url-do-server` (caso não queira usar como variável de ambiente)


## :heart: Como contribuir

Para contribuir com o projeto basta:
- Fazer o fork do projeto
- Fazer suas modificações
- Fazer um PR pro nosso repositório
- Aguardar a aprovação :)

## :books: Referências

- [Allure adicionando conteúdo no report](https://github.com/pagarme/cafe-com-testes/blob/main/artigos/allure-conteudo-no-report.md)
