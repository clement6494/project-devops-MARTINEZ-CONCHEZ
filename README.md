# Project - Devops - MARTINEZ - CONCHEZ


## Description

This project aim to implement a web API app using Redis and an environment in order to auomate the building, testing and deployement of the project.

# Summary

- [Project-Devops-MARTINEZ-CONCHEZ](#project---devops---martinez---conchez)
  - [Description](#description)
- [Summary](#summary)
- [Instructions](#instructions)
- [1. Creation of the NodeJS web application](#1-creation-of-the-nodejs-web-application)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
- [2. Application of CI/CD pipeline uning Heroku and GitHub Actions](#2-application-of-cicd-pipeline-uning-heroku-and-github-actions)
  - [Installation](#installation-1)
  - [Configuration of the workflow](#configuration-of-the-workflow)
  - [Test with Heroku](#test-with-heroku)
- [3. Application of the IaC approach](#3-application-of-the-iac-approach)
  - [Installation](#installation-2)
  - [Creating, Configuring and Provisionning our VM](#creating-configuring-and-provisionning-our-vm)
  - [Test](#test-1)
- [4. Build Docker image of the application](#4-build-docker-image-of-the-application)
  - [Installation](#installation-3)
  - [Usage](#usage-1)
- [5. Organization of Container with Docker Compose](#5-organization-of-container-with-docker-compose)
  - [Configuration](#configuration)
  - [Test](#test-2)
- [6. Organization of Docker with Kubernetes](#6-organization-of-docker-with-kubernetes)
  - [Installation of Minikube](#installation-of-minikube)
  - [Deploy our app using Manifest YAML files](#deploy-our-app-using-manifest-yaml-files)
- [Authors](#authors)


## Instructions

# 1. Creation of the NodeJS web application

## HInstallation

  This app is written with Nodejs and uses Redis database.
  
  1 - [install NodeJs](https://nodejs.org/en/download/)
  
  2 - [install REDIS](https://redis.io/download)
  
  3 - Install application

Go to the [user-api](./user-api/) directory of the application (where `package.json` file located) and run:

  ```bash
  npm install 
  ```

## Use the application
  1 - start a sever
  
  From the [user-api](./user-api/) directory of the repository, run:

```bash
npm run start
```
    
<http://localhost:3000> should be accessible and our web application will run (make sure to have the Redis server open):

* To create a user, send the curl POST request to the application with the user data:

```bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"username":"cconchez", "firstname":"clement", "lastname":"conchez"}' \
  http://localhost:3000/user
```
It should output:

```bash
{"status":"success","msg":"OK"}
```  

After, if you go to <http://localhost:3000/user/cconchez>, with "cconchez" being the username that you had in your POST data, it will display in the browser the following, with correspondance to the data that you posted:  

```bash
{"status":"success","msg":{"firstname":"clement","lastname":"conchez"}}
```

You can also use POST, GET , UPDDATE and DELETE.

## Test the application 

Go to the [user-api](./user-api/) directory of the application (where `package.json` file located) and run:

```bash
npm run test
``` 
All 12 tests should be passed :  

# 2. Application of CI

## Installation

## Configuration of the workflow

##  Usefull links

- MongoDB
- Docker Hub


## Authors



- Adrien Martinez: <adrien.martinez@ece.edu.fr> - ING4 gp5

- Clément CONCHEZ-BOUEYTOU: <clement.conchezboueytou@ece.edu.fr> - ING4 gp5
