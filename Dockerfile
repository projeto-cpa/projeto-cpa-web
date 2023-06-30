# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de origem
COPY . /app

# Instalar as dependências
RUN npm install

# Definir variáveis de ambiente
ENV HOST 0.0.0.0
ENV PORT 3005

# Expor a porta 3005
EXPOSE 3005

# Comando de inicialização da aplicação
CMD [ "npm", "run", "dev" ]