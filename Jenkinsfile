pipeline {
  agent {
    node {
      label 'stage'
    }

  }
  stages {
    stage('Stage') {
      steps {
        sh 'npm install'
        sh 'npm install -g appium'
        sh 'BASEURL=https://storefront.dev.amuse.com npm run iosBrowser '
      }
    }
  }
}