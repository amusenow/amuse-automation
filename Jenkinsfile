pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
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