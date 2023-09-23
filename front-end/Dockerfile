# Use an official Node runtime as base image
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR .

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в текущую директорию
COPY . .

# Опционально: сборка приложения
# RUN npm run build

# Опционально: устанавливаем веб-сервер, если приложение не использует history mode
# RUN npm install -g serve

# Опционально: запускаем приложение
# CMD [ "serve", "-s", "dist" ]
