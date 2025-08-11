# 📁 Sistema de Gerenciamento de Projetos

Este sistema permite adicionar novos projetos de forma autônoma, sem precisar modificar o código diretamente.

## 🗂️ Estrutura de Pastas

```
public/
└── projects-images/          # Pasta para imagens dos projetos
    ├── aluguel.png          # Imagem do Sistema de Aluguéis
    ├── ponto1.png           # Imagens do Sistema de Ponto
    ├── ponto2.png
    ├── ponto3.png
    ├── ponto4.png
    ├── facial.png           # Imagem da Palestra de Reconhecimento Facial
    ├── posse1.png           # Imagens do Posse Digital
    ├── posse2.png
    └── posse3.png

data/
└── projects.ts              # Configuração dos projetos
```

## ✨ Como Adicionar Novos Projetos

### 1. **Adicionar Imagens**
- Coloque as fotos do projeto na pasta `public/projects-images/`
- Use nomes descritivos: `nome-projeto-1.jpg`, `nome-projeto-2.jpg`, etc.
- Formatos suportados: JPG, PNG, WebP
- Tamanho recomendado: 1200x800px ou proporção 16:9

### 2. **Editar `data/projects.ts`**

```typescript
{
  id: "novo-projeto",                    // ID único (sem espaços)
  title: "Nome do Projeto",              // Título completo
  category: "Categoria",                 // Ex: "Backend", "IA", "Web"
  description: "Descrição detalhada...", // Descrição completa
  year: "2024",                         // Ano do projeto
  team: "Individual",                    // "Individual" ou "Equipe"
  technologies: ["Python", "Django"],    // Array de tecnologias
  linkedinUrl: "https://...",           // Link do LinkedIn (opcional)
  githubUrl: "https://...",             // Link do GitHub (opcional)
  demoUrl: "https://...",               // Link do demo (opcional)
  images: [                             // Array de caminhos das imagens
    "/projects-images/novo-projeto-1.jpg",
    "/projects-images/novo-projeto-2.jpg"
  ],
  featured: true                        // true = em destaque, false = não
}
```

### 3. **Exemplo Completo**

```typescript
{
  id: "sistema-vendas",
  title: "Sistema de Vendas Online",
  category: "E-commerce",
  description: "Sistema completo de vendas com gestão de produtos, carrinho de compras e pagamentos integrados.",
  year: "2024",
  team: "Equipe",
  technologies: ["Python", "Django", "PostgreSQL", "Stripe"],
  linkedinUrl: "https://www.linkedin.com/feed/update/...",
  images: [
    "/projects-images/sistema-vendas-1.jpg",
    "/projects-images/sistema-vendas-2.jpg"
  ],
  featured: true
}
```

## 🎯 Projetos Atualmente em Destaque

1. **Sistema de Controle de Aluguéis** - Gestão Imobiliária (com imagem aluguel.png)
2. **Sistema de Ponto** - Controle de Acesso (com 4 imagens: ponto1.png, ponto2.png, ponto3.png, ponto4.png)
3. **Palestra: Reconhecimento Facial** - Educação & IA (com imagem facial.png)
4. **Posse Digital - Efetivos** - Gestão de RH (com imagens posse1.png, posse2.png, posse3.png)

## 🔧 Funcionalidades

- **Galeria de Imagens**: Navegação entre fotos com setas e indicadores
- **Responsivo**: Funciona em desktop e mobile
- **Fallback**: Se não houver imagens, mostra link do LinkedIn
- **Fácil Manutenção**: Basta editar o arquivo `data/projects.ts`
- **Links Unificados**: Sistema de Ponto e Posse Digital linkam para todos os projetos

## 📝 Dicas

- **Imagens**: Use fotos de alta qualidade que mostrem o projeto em ação
- **Descrições**: Seja específico sobre funcionalidades e resultados
- **Tecnologias**: Liste as principais tecnologias utilizadas
- **Links**: Sempre inclua o link do LinkedIn quando possível
- **Categorias**: Use categorias consistentes para organização

## 🚀 Próximos Passos

1. ✅ **Sistema de Aluguéis** - Imagem adicionada: `aluguel.png`
2. ✅ **Sistema de Ponto** - Imagens atualizadas: `ponto1.png`, `ponto2.png`, `ponto3.png`, `ponto4.png`
3. ✅ **Palestra Reconhecimento Facial** - Imagem adicionada: `facial.png`
4. ✅ **Posse Digital** - Imagens atualizadas: `posse1.png`, `posse2.png`, `posse3.png`
5. Para novos projetos, siga o padrão acima

## 🔗 Links Importantes

- **Todos os Projetos**: https://www.linkedin.com/in/jeefisantos/details/projects/
- **Sistema de Aluguéis**: Mantido com link específico + imagem
- **Palestra Reconhecimento Facial**: Agora com imagem + link específico

O sistema automaticamente detectará as imagens e criará a galeria para cada projeto! 🎉
