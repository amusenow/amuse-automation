pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('Build') {
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