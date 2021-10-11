pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 8080:8080'
    }

  }
  stages {
    stage('Build') {
      agent {
        node {
          label 'codebuild'
        }

      }
      steps {
        sh '''npm install
npm i -g appium'''
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