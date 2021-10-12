pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node:14-alpine'
          args '-p 3000:3000'
        }

      }
      steps {
        sh '''npm install
npm i -g appium'''
      }
    }
    stage('Test') {
      agent {
        docker {
          image 'node:14-alpine'
          args '-p 3000:3000'
        }

      }
      steps {
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}