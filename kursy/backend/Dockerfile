# Wybierz obraz Node.js
FROM node:18

# Ustaw katalog roboczy w kontenerze
WORKDIR /backend

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj cały projekt do katalogu roboczego
COPY . .

# Ustaw zmienną środowiskową
ENV PORT=5000

# Otwórz port aplikacji
EXPOSE 5000

# Uruchom aplikację
CMD ["node", "server.js"]