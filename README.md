# EAOS

## Starting Python environment locally

1. Open terminal
2. `pipenv shell`
3. `pipenv install` - To install all necessary packages from pipfile

   - If you have trouble installing psycopg2 when running the install command
     `sudo apt install libpq-dev python3-dev`

4. `python manage.py runserver`

## To install new packages

- `pipenv install packagename`
- ex pipenv install django

### Before pushing to staging or production we need to add new packages to requirements.txt so it will run properly when deployed

`pipenv run pip freeze > requirements.txt`

# Railway and EAOS Deployment

Currently the EAOS application is deployed on [railway.app](https://railway.app/project/53c98ac9-0491-4199-9410-e8ce59e5e5ce)
It is set up to automatically redeploy when changes are pushed to the correct branch.

## [Production Environment](https://ldrs-eaos-production.up.railway.app/)

Production watches the [main branch](https://github.com/ldrsInvestmentsAdmin/EAOS)
Make a pull request to main from staging. If everything has been tested on staging and it has been reviewed it can be merged into main. Production is considered in use so unfinished features should not be on production.

### Before Pushing to Production

1. `python manage.py check --deploy` - To check that production is secure for deployment

## [Staging Environment](https://ldrs-eaos-staging.up.railway.app/)

Production watches the [staging branch](https://github.com/ldrsInvestmentsAdmin/EAOS/tree/staging).
<br>
Make a pull request to staging from your feature branch and upon testing (on PR environment) and review you can merge your changes. This branch is mostly used for demoing.

## Pull Request Environments

On Railway when you make a pull request it will make an environment for you to see if your changes break the application before it is pushed to staging. This is viewable by opening [railway](https://railway.app/project/53c98ac9-0491-4199-9410-e8ce59e5e5ce) and clicking the dropdown next to "production" at the top left of the page. You can find the url for your pull request environment there.
