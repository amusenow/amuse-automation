pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        node {
          label 'codebuild'
        }

      }
      steps {
        nodejs('automation-testing') {
          sh '''npm install
npm i -g appium'''
        }

      }
    }
    stage('Test') {
      agent {
        node {
          label 'codebuild'
        }

      }
      steps {
        nodejs('run-tests') {
          sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
        }

      }
    }
  }
}