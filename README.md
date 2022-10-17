# EAOS

## Starting Python environment locally

1. Open terminal
2. `pipenv shell`
3. `pipenv install` - To install all necessary packages from pipfile
4. `python manage.py runserver`

## To install new packages

- `pipenv install packagename`
- ex pipenv install django

### Before pushing to staging or production we need to add new packages to requirements.txt so it will run properly when deployed

`pipenv run pip freeze > requirements.txt`
