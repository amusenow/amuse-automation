pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        node {
          label 'codebuild'
        }

      }
      steps {
        sh 'npm install'
        sh 'npm install -g appium'
      }
    }
    stage('Test') {
      agent {
        node {
          label 'codebuild'
        }

      }
      steps {
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}