-- Populando a tabela usuario com 10 registros
INSERT INTO usuario (nome_usuario, email_usuario, password, nivel, status, last_login)
VALUES 
('João da Silva', 'joao.silva@email.com', '123456', 'admin', 'ativo',NOW()),
('Maria Souza', 'maria.souza@email.com', '789012', 'user', 'ativo',NOW()),
('Pedro Ferreira', 'pedro.ferreira@email.com', '345678', 'user', 'inativo',NOW()),
('Lucas', 'lucas@gmail.com', '123456', 'administrador', 'ativo',NOW()),
('Maria', 'maria@gmail.com', 'abcdef', 'usuário', 'ativo',NOW()),
('Pedro', 'pedro@gmail.com', 'qwerty', 'usuário', 'inativo',NOW()),
('Julia', 'julia@gmail.com', 'abc123', 'administrador', 'ativo',NOW()),
('Rafael', 'rafael@gmail.com', 'senha123', 'usuário', 'ativo',NOW()),
('Carla', 'carla@gmail.com', '123abc', 'administrador', 'inativo',NOW()),
('Mariana', 'mariana@gmail.com', 'senhaabc', 'usuário', 'ativo',NOW());


-- Populando a tabela endereço

INSERT INTO endereco
(cep,`logradouro`, `numero`, `complemento`, `bairro`, `cidade`, `estado`, `pais`, `usuario_id`) 
VALUES 
('5005500','Rua A', 123, 'apt 101', 'Centro', 'São Paulo', 'SP', 'Brasil', 1),
('5005500','Avenida B', 456, '', 'Jardim Paulista', 'São Paulo', 'SP', 'Brasil', 1),
('5005500','Rua C', 789, 'casa 2', 'Vila Mariana', 'São Paulo', 'SP', 'Brasil', 2),
('5005500','Rua D', 321, 'apt 202', 'Pinheiros', 'São Paulo', 'SP', 'Brasil', 2),
('5005500','Avenida E', 654, '', 'Vila Madalena', 'São Paulo', 'SP', 'Brasil', 3),
('5005500','Rua F', 987, '', 'Moema', 'São Paulo', 'SP', 'Brasil', 3),
('5005500','Rua G', 147, '', 'Itaim Bibi', 'São Paulo', 'SP', 'Brasil', 4),
('5005500','Avenida H', 258, 'apt 303', 'Vila Olímpia', 'São Paulo', 'SP', 'Brasil', 4),
('5005500','Rua I', 369, '', 'Vila Nova Conceição', 'São Paulo', 'SP', 'Brasil', 5),
('5005500','Rua J', 753, 'casa 1', 'Brooklin', 'São Paulo', 'SP', 'Brasil', 5);

-- Populando a tabela reserva 

INSERT INTO reserva (qtd_pessoas, check_in, check_out, cupom, total, total_desconto, confirmacao, data_confirmacao, usuario_id)
VALUES
(2, '2023-03-01 12:00:00', '2023-03-03 12:00:00', NULL, 1500.00, 0.00, 1, NOW(), 1),
(3, '2023-03-05 15:00:00', '2023-03-07 12:00:00', 'DESCONTO10', 2250.00, 225.00, 1, NOW(), 2),
(2, '2023-03-08 14:00:00', '2023-03-10 12:00:00', NULL, 1200.00, 0.00, 0,  NOW(), 3),
(1, '2023-03-12 12:00:00', '2023-03-14 12:00:00', NULL, 800.00, 0.00, 1, NOW(), 4),
(4, '2023-03-15 13:00:00', '2023-03-18 12:00:00', NULL, 3200.00, 0.00, 0,NOW(), 5),
(2, '2023-03-20 10:00:00', '2023-03-22 12:00:00', 'DESCONTO20', 1600.00, 320.00, 1, NOW(), 6),
(3, '2023-03-23 11:00:00', '2023-03-26 12:00:00', NULL, 2400.00, 0.00, 0,  NOW(), 7),
(1, '2023-03-27 12:00:00', '2023-03-28 12:00:00', NULL, 400.00, 0.00, 1, NOW(), 8),
(2, '2023-03-30 10:00:00', '2023-04-01 12:00:00', 'DESCONTO15', 1700.00, 255.00, 1, NOW(), 9),
(4, '2023-04-03 13:00:00', '2023-04-07 12:00:00', NULL, 3400.00, 0.00, 1, NOW(), 10);


-- Populando a tabela acomodacoes

INSERT INTO acomodacoes (`nome`, `tipo`, `status`, `descricao`, `preco`, `imagem`) VALUES
('Quarto Standard', 'Quarto', 'Disponível', 'Quarto com cama de casal, TV e banheiro privativo', 120.00, 'https://example.com/quarto_standard.jpg'),
('Quarto Luxo', 'Quarto', 'Disponível', 'Quarto com cama king size, TV, banheira de hidromassagem e vista para o mar', 250.00, 'https://example.com/quarto_luxo.jpg'),
('Suíte Presidencial', 'Suíte', 'Ocupada', 'Suíte com sala de estar, varanda, cama king size, banheira de hidromassagem e vista para o mar', 500.00, 'https://example.com/suite_presidencial.jpg'),
('Chalé Família', 'Chalé', 'Disponível', 'Chalé com dois quartos, sala de estar, cozinha, TV e banheiro privativo', 300.00, 'https://example.com/chale_familia.jpg'),
('Cabana Rústica', 'Cabana', 'Disponível', 'Cabana com cama de casal, cozinha, banheiro privativo e varanda com rede', 100.00, 'https://example.com/cabana_rustica.jpg'),
('Apartamento Standard', 'Apartamento', 'Ocupado', 'Apartamento com sala de estar, cozinha, dois quartos e banheiro', 200.00, 'https://example.com/apartamento_standard.jpg'),
('Apartamento Luxo', 'Apartamento', 'Disponível', 'Apartamento com sala de estar, cozinha, três quartos, banheiro e vista para a praia', 350.00, 'https://example.com/apartamento_luxo.jpg'),
('Bangalô Praia', 'Bangalô', 'Disponível', 'Bangalô com cama king size, varanda com vista para o mar, banheira de hidromassagem e chuveiro ao ar livre', 400.00, 'https://example.com/bangalo_praia.jpg'),
('Tenda Ecológica', 'Tenda', 'Disponível', 'Tenda com cama de casal, cozinha ao ar livre e banheiro compartilhado', 50.00, 'https://example.com/tenda_ecologica.jpg'),
('Loft Duplex', 'Loft', 'Disponível', 'Loft com sala de estar, cozinha, cama king size, banheiro com banheira de hidromassagem e vista para o mar', 300.00, 'https://example.com/loft_duplex.jpg');

-- Populando a tabela avaliacoes

INSERT INTO avaliacoes (pontuacao, descricao, status, usuario_id)
VALUES
(4, 'Ótimo atendimento, recomendo!', 'ativo', 1),
(2, 'Não gostei do produto, achei de baixa qualidade.', 'inativo', 2),
(5, 'Produto excelente, superou minhas expectativas.', 'ativo', 3),
(3, 'A entrega atrasou um pouco, mas o produto é bom.', 'ativo', 4),
(5, 'Atendimento incrível, com certeza voltarei a comprar.', 'ativo', 5),
(4, 'Gostei bastante do produto, mas o preço poderia ser melhor.', 'ativo', 6),
(1, 'Produto chegou com defeito e ainda não recebi resposta da loja.', 'inativo', 7),
(4, 'Bom produto, recomendo a loja.', 'ativo', 8),
(5, 'Atendimento rápido e eficiente, superou minhas expectativas.', 'ativo', 9),
(2, 'Produto não chegou até o momento, estou muito insatisfeito.', 'inativo', 10);

-- Populando a tabela serviços

INSERT INTO servicos (nome_servico, preco, descricao, local, imagem) VALUES
('Cofre', 50.00, 'Guardamos seus objetos de valor com total segurança.', 'Recepção', 'cofre.jpg'),
('Lavandeira', 25.00, 'Lavamos suas roupas com agilidade e qualidade.', 'Lavanderia', 'lavandeira.jpg'),
('Café', 5.00, 'Oferecemos café da manhã completo para você começar bem o dia.', 'Restaurante', 'cafe.jpg'),
('Massagem', 80.00, 'Relaxe com uma massagem terapêutica personalizada.', 'Spa', 'massagem.jpg'),
('Sala', 100.00, 'Locação de salas para eventos empresariais ou reuniões.', 'Sala de Reuniões', 'sala.jpg'),
('Passeio', 150.00, 'Conheça as belezas da cidade com nossos passeios turísticos.', 'Recepção', 'passeio.jpg'),
('Cofre', 50.00, 'Guardamos seus objetos de valor com total segurança.', 'Recepção', 'cofre.jpg'),
('Lavandeira', 25.00, 'Lavamos suas roupas com agilidade e qualidade.', 'Lavanderia', 'lavandeira.jpg'),
('Café', 5.00, 'Oferecemos café da manhã completo para você começar bem o dia.', 'Restaurante', 'cafe.jpg'),
('Massagem', 80.00, 'Relaxe com uma massagem terapêutica personalizada.', 'Spa', 'massagem.jpg');


-- Populando a tabela consumo

INSERT INTO consumo (nome_item, preco, local, qtd_item, created_at, updated_at, usuario_id) VALUES
('Coca-cola lata', 5.50, 'Bar', 2, NOW(), NOW(), 1),
('Água sem gás', 3.00, 'Bar', 3, NOW(), NOW(), 1),
('Cerveja long neck', 7.50, 'Bar', 1, NOW(), NOW(), 1),
('Batata frita', 15.00, 'Restaurante', 1, NOW(), NOW(), 2),
('Filé mignon', 50.00, 'Restaurante', 1, NOW(), NOW(), 2),
('Coca-cola 2 litros', 15.00, 'Restaurante', 1, NOW(), NOW(), 2),
('Suco de laranja', 8.00, 'Café da manhã', 1, NOW(), NOW(), 3),
('Café expresso', 4.50, 'Café da manhã', 2, NOW(), NOW(), 3),
('Torrada de pão integral', 6.00, 'Café da manhã', 1, NOW(), NOW(), 3),
('Pão de queijo', 3.50, 'Café da manhã', 5, NOW(), NOW(), 3);
