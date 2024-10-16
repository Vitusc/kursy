# Etap 1: Budowanie zależności
FROM node:18 AS build-stage

# Ustaw katalog roboczy
WORKDIR /backend

# Skopiuj package.json i package-lock.json i zainstaluj zależności, w tym devDependencies
COPY package*.json ./
RUN npm install

# Skopiuj resztę kodu aplikacji
COPY . .

# Etap 2: Stworzenie obrazu produkcyjnego
FROM node:18-alpine AS production-stage

# Ustaw katalog roboczy
WORKDIR /backend

# Skopiuj tylko pliki z zależnościami produkcyjnymi z etapu build-stage
COPY --from=build-stage /backend/node_modules ./node_modules
COPY --from=build-stage /backend/package*.json ./
COPY --from=build-stage /backend .

# Ustaw port
EXPOSE 5000

# Uruchom serwer aplikacji
CMD ["npm", "start"]
