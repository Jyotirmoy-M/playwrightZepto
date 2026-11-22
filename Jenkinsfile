pipeline {
    agent any
    tools {
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm ci'
            }
        }
        stage('Install Playwright Browsers'){
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run tests'){
            steps {
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}