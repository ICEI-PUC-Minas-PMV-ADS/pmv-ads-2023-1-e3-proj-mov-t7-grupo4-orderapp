# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem. 

![image](https://user-images.githubusercontent.com/86004024/222997472-0ec79bab-559d-4657-af3c-ae41cfc7630f.png)
![image](https://user-images.githubusercontent.com/86004024/222997513-187b6390-3a8f-424a-b00c-d8c1ee0d0915.png)
![image](https://user-images.githubusercontent.com/86004024/222997589-f7658ca0-ae29-486c-9395-7479f758b53b.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                        |PARA ... `MOTIVO/VALOR`                                     |
|--------------------|-----------------------------------------------------------|------------------------------------------------------------|
|Marcelo da Silva    | Comunicação mais rápida entre garçom e cozinha            | Agilizar o preparo dos pedidos                             |
|Melissa Gomes       | Controle de caixa                                         | Ter uma média de ganhos por dia                            |
|Bruno Henrique      | Comanda digital                                           | Minimizar os esquecimentos de pedidos feitos pelo cliente  |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deverá permitir o cadastro de funcionários  | ALTA | 
|RF-002| A aplicação deverá permitir que o garçom realize a abertura do pedido de um cliente |ALTA |
|RF-003|A aplicação deverá permitir que o garçom consiga atrelar o pedido do cliente a sua respectiva mesa| ALTA | 
|RF-004| A aplicação deverá permitir o cadastro das opções de refeições que serão disponibilizadas no cardápio com fotos e preços | ALTA |
|RF-005|A aplicação deverá permitir que o pedido seja finalizado | ALTA | 
|RF-006|A aplicação deverá realizar o cálculo do valor do pedido do cliente | ALTA |
|RF-007|A aplicação deverá informar o tempo de permanência do cliente no estabelecimento | MÉDIA | 
|RF-008|A aplicação deverá permitir cadastramento das mesas | ALTA |
|RF-009|A aplicação deverá permitir que o pedido seja visualizado pelo setor de Cozinha| ALTA | 
|RF-010|A aplicação deverá permitir gerar QRCode para que o cliente possa acessar o cardápio| MÉDIA |
|RF-011|A aplicação deverá informar o status do pedido na comanda   | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|A aplicação deverá permitir o acesso de várias pessoas simultaneamente | ALTA | 
|RNF-002|A aplicação deverá ser responsiva se adequando a smartphones e tablets|   ALTA | 
|RNF-003|A aplicação deverá ser protegida contra acesso não autorizado |  ALTA | 
|RNF-004|A aplicação deverá ser prática quanto ao uso e entendimento |   ALTA | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


## Diagrama de Casos de Uso

O objetivo do diagrama de caso de uso em UML é demonstrar as diferentes maneiras que o usuário pode interagir com um sistema. 

![image](https://user-images.githubusercontent.com/86004024/222997818-34fd77e3-1f8a-46cc-8131-a4be9f4adec7.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade de requisitos estabelece uma relação entre os requisitos de um projeto e os seus artefatos relacionados como casos de uso, testes e até mesmo outros requisitos do projeto. 

A matriz contempla todos os elementos relevantes que fazem parte do sistema, conforme a figura apresentada a seguir. 

![b6f96d85f6eeccf7510df459d26942ee](https://user-images.githubusercontent.com/86004024/222996523-2f5eddcf-0af0-4eaf-bc12-b9dcd17f71ef.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![IMG1](https://user-images.githubusercontent.com/103225367/223001125-59381d6a-6b97-406f-b99e-08c43731f3b9.png)


O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![IMG2](https://user-images.githubusercontent.com/103225367/223001137-9938a7db-0e4b-46a0-9acb-95840bfca6e8.png)

## Pessoal do Projeto 

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. 
A equipe está organizada da seguinte maneira:  

Scrum Master: 
Karinne Agnes Massensini Pereira 

Product Owner: 
Rafael de Assis Oliveira 
 
Equipe de Desenvolvimento: 
Douglas Delareti Simões 
Pedro Henrique Ertal de Oliveira 
Thaís Gurgel Bezerra 
Vinícius de Souza Ponciano 

Equipe de Design: 
César Luis Costa Moreira 

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

O orçamento do projeto foi avaliado através da estimativa de 330 horas de trabalho totais para a finalização do projeto. 

|Recurso Necessário| Valor em Dinheiro |
|--|-------------------------------------------------------|
|Recursos Humanos| R$ 23.700,00 |
|Hardware| R$ 12.000,00        |
|Rede| R$ 1.050,00 |
|Custos Totais| R$ 36.750,00|



