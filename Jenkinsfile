pipeline {
  agent any
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