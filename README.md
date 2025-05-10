# api_final
api final

# Установка проекта Ubuntu, Windows

Клонировать репозиторий:
```
git clone git@github.com:Dumskii-Artem/api_final_yatube.git
```
Перейти в папку с проектом:
```
cd api_final_yatube/
```
Cоздать виртуальное окружение:
```
Ubuntu: python3 -m venv env
Windows: py -3.9 -m venv env
```
Активировать виртуальное окружение:
```
Ubuntu: source env/bin/activate
Windows: spurce ./env/Scripts/activate  
```
Вот так написать:
```
Ubuntu: python3 -m pip install --upgrade pip
Windows: python -m pip install --upgrade pip
```
Установить зависимости из файла requirements.txt:
```
pip install -r requirements.txt
```
Зайти в папку:
```
cd yatube_api/
```
Выполнить миграции:
```
Ubuntu: python3 manage.py migrate
Windows: python manage.py migrate
```
Запустить скрипт для создания пользователей,
нужно для прохождения тестов  
```
bash ../postman_collection/set_up_data.sh 
```
Запустить проект:
```
python3 manage.py runserver
```
