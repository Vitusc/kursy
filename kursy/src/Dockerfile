# Wybierz obraz Node.js
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj cały projekt do katalogu roboczego
COPY . .

# Otwórz port aplikacji
EXPOSE 8080

# Uruchom aplikację
CMD ["npm", "run", "serve"]
