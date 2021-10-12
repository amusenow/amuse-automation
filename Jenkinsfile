pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      agent any
      steps {
        sh '''npm install
npm i -g appium'''
      }
    }
    stage('Test') {
      agent any
      steps {
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}