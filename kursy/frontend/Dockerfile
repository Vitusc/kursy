# Używamy Node.js obrazu
FROM node:18

# Tworzymy katalog roboczy
WORKDIR /app

# Kopiujemy pliki package.json i package-lock.json
COPY package*.json ./

# Instalujemy zależności
RUN npm install

# Kopiujemy resztę plików
COPY . .

# Uruchamiamy aplikację w trybie deweloperskim
CMD ["npm", "run", "serve"]
