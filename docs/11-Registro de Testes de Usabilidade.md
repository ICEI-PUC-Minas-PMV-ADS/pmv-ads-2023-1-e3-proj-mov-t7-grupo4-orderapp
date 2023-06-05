# Registro de Testes de Usabilidade

Conforme previsto no plano de Testes de Usabilidade, a aplicação foi devidamente testada conforme plano definido. 

Objetivos: 
Detectar problemas no fluxo das tarefas da aplicação; 
Observar o tempo gasto dos participantes para realização de cada tarefa; 
Verificar a compreensão dos participantes na execução das solicitações da aplicação em cada tarefa; 
Avaliar a satisfação dos participantes sobre a aplicação; 

Participantes: 
Para a realização dos testes de usabilidade, 10 participantes de diferentes faixas etárias e profissões serão selecionados 

|Atividade|Ação|Profissão
| Usuário A  | 14 | Estudante |
| Usuário B  | 16 | Estudante |
| Usuário C  | 19 | Desempregado |
| Usuário D  | 25 | Analista de Sistemas |
| Usuário E  | 30 | Engenheiro |
| Usuário F  | 31 | Administrador |
| Usuário G  | 33 | Dona de Casa |
| Usuário H  | 40 | Dona de Casa |
| Usuário I  | 45 | Auxiliar de Serviçoes Gerais |
| Usuário J  | 56 | Porteiro |
| Usuário L  | 63 | Aposentado |

Roteiro de Testes 

Cada usuário do aplicativo recebeu seu próprio roteiro de atividades a ser realizada.  

As atividades refletem os requisitos funcionais e principais fluxos de uso do aplicativo para cada persona. Algumas atividades dependem e estão ligadas à uma atividade realizada por outro usuário, seguem dados obtidos: 

Atividades do Garçom 
| ---- | ----------------------------------------------------------------------------- |
|Atividade|Ação|Erros|Acertos
| 1 | Faça o login no aplicativo | 2% | 98% |
| 2 | Inicie um Pedido | 2% | 98% |
| 3 | Selecione uma mesa para o pedido | 0% | 100% |
| 4 | Selecione os itens do cardápio para o pedido  | 5% | 95% |
| 5 | Repita as atividades 2,3 e 4 simulando um dia normal de trabalho  | 5% | 95% |
| 6 | Verifique a mudança de status numa comanda  | 5% | 95% |
| 7 | Verifique os valores calculados para cada mesa  | 8% | 92% |
| 8 | Finalize os pedidos  | 2% | 98% |

Dentro dos nossos testes, observamos uma maior dificuldade de manuseio do aplicativo na faixa etária acima de 56 anos, é uma dificuldade dentro da normalidade devido a idade dos usuários “J” e “L”. Entendemos que a profissão não é relevante para o uso do aplicativo. A maior faixa de erros, está basicamente na dificuldade em somar os valores os valores finais do pedido, o sistema apresentou uma porcentagem de 8% de erros, mas é uma porcentagem dentro do padrão aceitável do projeto. Os usuários não apresentaram dificuldade em realizar essa tarefa dentro do app. 

Atividades do Gerente 
|Atividade|Ação|Erros|Acertos
| 1 | Cadastre um funcionário  | 0% | 100% |
| 2 | Cadastre uma mesa  | 0% | 100% |
| 3 | Cadastre um item no menu | 5% | 95% |
| 4 | Edite as credenciais de um funcionário   | 0% | 100% |
| 5 | Edite as informações de um item do menu   | 8% | 92% |
| 6 | Exclua um funcionário   | 2% | 98% |
| 7 | Exclua uma mesa   | 0% | 100% |
| 8 | Exclua um item do menu   | 0% | 100% |

Mais uma vez, dentro dos testes, observamos uma maior dificuldade de manuseio do aplicativo na faixa etária acima de 56 anos, é uma dificuldade dentro da normalidade devido a idade dos usuários “J” e “L”. E também, entendemos que a profissão ainda não é relevante para o uso do aplicativo nas atividades inerentes ao Gerente do estabelecimento. A maior faixa de erros, ainda está basicamente em editar as informações do menu que irá ser lido pelo cliente via Qr Code, os usuários apresentaram uma porcentagem de 8% de erros, no entanto mais uma vez é uma porcentagem dentro do padrão aceitável do projeto. Os usuários não apresentaram dificuldade em realizar essa tarefa dentro do app. 

As atividades inerentes ao gerente de um modo geral tiveram um aproveitamento muito satisfatório, com 100% de acerto na maioria das atividades. 

Atividades do Cliente 
|Atividade|Ação|Erros|Acertos
| 1 | Acesse o cardápio via Qr Code  | 0% | 100% |
| 2 | Visualize o MENU disponibilizado pelo estabelecimento   | 0% | 100% |

Erros Apresentados  

O sistema de um modo geral, apresentou poucos erros de usabilidade, abaixo seguem telas reportadas ao usuário de erros de uso:  

Erro 1 - “Preenchimento Incompleto” - Quando o usuário tentar adicionar um item, e na tela de prrenchimento estiver algum dado incompleto, o aplicativo retorna um erro informando ao usuário quais campos estão em branco, oferecendo opção de continuar, ou cancelar o cadastro de um novo item. (Ver imagem abaixo)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t7-grupo4-orderapp/assets/59944150/a7f0d55c-907d-4fd3-b5e6-90c204fc0e73)

Erro 2 - “Preencha todos os campos na tela de Novo Garçom” - Ao tentar inserir um novo garçom no app, se o usuário não preencher todos os campos obrigatórios para um novo cadastro, o sistema retorna um erro informando para inserir todos os campos para continuar com o cadastro, conforme imagem abaixo: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t7-grupo4-orderapp/assets/59944150/4e9a5a9d-bc2c-4e9c-b44d-11a247b2d7c3)

Erro 3 - “Nome de usuário ou senha inválidos” - Na tela de login do aplicativo OHCHEFIA, ao tentar fazer o login com um usuário e/ou senha incorretos, o sistema retorna com uma mensagem de erro para o usuário, informando que os dados estão inválidos, seja na digitação incorreta ou na falta do cadastro do garçom, conforme mostra imagem abaixo: 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t7-grupo4-orderapp/assets/59944150/b9d9d55a-5bdb-4e1e-a7d1-fd6ad7ddd437)

