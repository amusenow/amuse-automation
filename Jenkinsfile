pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('Build') {
      agent any
      steps {
        sh 'npm install'
        sh 'npm install -g appium'
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