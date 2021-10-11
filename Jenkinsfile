pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        node {
          label 'stage'
        }

      }
      steps {
        sh 'npm install'
        sh 'npm install -g appium'
      }
    }
    stage('Test') {
      steps {
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}