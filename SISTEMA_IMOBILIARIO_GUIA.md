# 🏢 Guia Completo do Sistema Imobiliário (ImobPRO) & Roteiro para Entrevista

Este documento foi estruturado para você dominar o ecossistema imobiliário de ponta a ponta, entender a linguagem de negócios do setor e ter argumentos sólidos para apresentar ao seu entrevistador.

---

## 🎯 1. Visão Geral: O que é o ImobPRO?

O **ImobPRO** é uma plataforma integrada de gestão imobiliária (SaaS / Enterprise) focada em **otimizar a jornada completa do imóvel**: da captação e divulgação até o fechamento de contratos de venda e locação, controle financeiro e gestão de pós-venda.

O objetivo central de qualquer software imobiliário é:
1. **Reduzir o tempo de resposta** ao cliente (atendimento rápido vende mais).
2. **Organizar a carteira de imóveis e clientes** (evitar perda de dados em planilhas/WhatsApp).
3. **Automatizar a esteira financeira e jurídica** (contratos, repasses, comissões e inadimplência).

---

## 📚 2. Dicionário do Mercado Imobiliário (Conceitos Essenciais)

### 🔹 Leads
- **O que é:** Um contato qualificado ou potencial cliente que demonstrou interesse em comprar, alugar ou anunciar um imóvel.
- **De onde vem:** Portais imobiliários (Zap Imóveis, VivaReal, OLX), campanhas no Google/Meta Ads, site da imobiliária ou WhatsApp.
- **Importância:** Lead frio ou demorado esfria e compra com o concorrente. O sistema precisa capturar o lead em tempo real e distribuir instantaneamente para um corretor (roleta de leads).

### 🔹 SLA (Service Level Agreement - Acordo de Nível de Serviço)
- **O que é:** O tempo limite aceitável para realizar uma ação ou atendimento.
- **Exemplo Prático:** 
  - *SLA de primeiro contato:* O corretor tem no máximo **15 minutos** para responder um novo lead que chegou pelo site. Se estourar o SLA, o sistema transfere o lead para outro corretor da fila.
  - *SLA de análise de crédito:* Prazo de **24h** para aprovar a documentação do locatário.

### 🔹 Funil de Vendas / Pipeline
- Estágios que o cliente percorre até o fechamento:
  1. **Novo Lead:** Contato recebido.
  2. **Qualificação:** Entender orçamento, bairro desejado e urgência.
  3. **Visita Agendada/Realizada:** Apresentação presencial ou virtual do imóvel.
  4. **Proposta:** Negociação de valores e condições de pagamento.
  5. **Contrato & Fechamento:** Assinatura digital, emissão de certidões e entrega de chaves.

### 🔹 CRM (Customer Relationship Management)
- Sistema central onde ficam guardadas todas as interações com o cliente: mensagens, históricos de ligações, imóveis favoritados, visitas feitas e preferências de compra.

### 🔹 VGV (Valor Geral de Vendas)
- Soma do valor de todas as unidades disponíveis ou vendidas em um empreendimento ou na carteira da imobiliária. Métrica crucial para diretoria e investidores.

### 🔹 Gestão de Locação & Repasse
- **Aluguel:** O inquilino paga o boleto/PIX do aluguel.
- **Repasse:** O sistema desconta a taxa de administração da imobiliária (ex: 8% a 10%) e transfere automaticamente o restante para a conta bancária do proprietário do imóvel, gerando o informe de rendimentos (DIMOB/IR).

### 🔹 Comissionamento (Split de Pagamentos)
- Divisão transparente e automatizada das comissões entre:
  - Corretor captador (quem trouxe o imóvel).
  - Corretor vendedor (quem fechou o negócio).
  - Imobiliária e gerente de equipe.

---

## 💻 3. Módulos Principais do Sistema (Como o ImobPRO Funciona)

| Módulo | Função Principal | Benefício de Negócio |
| :--- | :--- | :--- |
| **Gestão de Imóveis** | Cadastro detalhado com fotos, tour 360°, geolocalização, IPTU, condomínio e status (disponível, reservado, vendido). | Centralização e integração via API com portais (Zap/VivaReal). |
| **Roleta de Leads & CRM** | Distribuição justa e automática dos leads entre os corretores de plantão. | Atendimento rápido, respeito ao SLA e aumento nas conversões. |
| **Agenda & Visitas** | Agendamento integrado com notificações via WhatsApp/SMS para cliente e corretor. | Redução drástica de no-show (clientes que faltam à visita). |
| **Esteira de Contratos** | Gerador de minutas de contrato com assinatura digital (DocuSign/Clicksign). | Fechamento de contrato em minutos, sem necessidade de cartório. |
| **Módulo Financeiro** | Emissão automática de boletos, PIX com conciliação bancária, repasses e DRE. | Fim de erros manuais em planilhas de repasse a proprietários. |

---

## 🎙️ 4. Roteiro para a Entrevista (O que você entende e como se posicionar)

### Pergunta: *"O que você entende sobre o funcionamento de uma imobiliária?"*
> **Sua resposta sugerida:**  
> *"Eu entendo que uma imobiliária opera em duas frentes fundamentais: **Vendas** (foco em velocidade de atendimento, captação e conversão de propostas) e **Locação** (foco em receita recorrente, controle de inadimplência e repasses aos proprietários).*  
>  
> *O maior gargalo hoje está na perda de leads por demora no primeiro contato (quebra de SLA) e no controle descentralizado em WhatsApp ou planilhas. Por isso desenvolvi o protótipo do ImobPRO com foco em automação de roleta de leads, alertas de SLA em tempo real, integração de catálogo de imóveis e visão financeira transparente."*

### Pergunta: *"Qual o diferencial técnico que você traria para o nosso software?"*
> **Sua resposta sugerida:**  
> *"Foco em arquitetura escalável, integrações via webhook (com portais e WhatsApp API), segurança de dados (LGPD para proteção dos documentos dos clientes) e interfaces intuitivas que os corretores realmente usem no dia a dia sem fricção, tanto no desktop quanto no mobile."*

---

## 📁 5. Onde encontrar o Protótipo no Projeto
- O protótipo visual interativo está disponível em:
  - `public/prototipo-imobiliaria.html`
  - Rota da aplicação: `/prototipo-imobiliaria`
