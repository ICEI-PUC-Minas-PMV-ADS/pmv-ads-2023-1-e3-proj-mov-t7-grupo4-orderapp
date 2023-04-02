CREATE TABLE funcionario (
   id int NOT NULL PRIMARY KEY, 
   nome varchar(50) NOT NULL,
   telefone int(10) NOT NULL,
   cpf int(13) NOT NULL,
   email varchar(50)
   );
   
CREATE TABLE mesa (
	id int NOT NULL PRIMARY KEY,
    assento int(2) NOT NULL
    );

CREATE TABLE pedido (
	id int NOT NULL PRIMARY KEY,
    mesa_id int,
    FOREIGN KEY (mesa_id) REFERENCES mesa(mesa_id),
    nome_cliente varchar (10) NOT NULL
    );
    

    