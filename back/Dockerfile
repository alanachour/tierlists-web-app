# Image de base officielle Node.js
FROM node:18-alpine

# Créer le dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet
COPY . .

# Exposer le port de ton backend
EXPOSE 3001

# Commande de démarrage
CMD ["npm", "start"]
