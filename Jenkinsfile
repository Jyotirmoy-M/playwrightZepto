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
                sh 'npx playwright install chromium'
            }
        }
        stage('Load Authentication'){
            steps {
                withCredentials([file(credentialsId: 'zepto-auth-state', variable: 'AUTH_FILE')]){
                sh '''
                    mkdir -p playwright/.auth
                    cp "$AUTH_FILE" playwright/.auth/user.json
                   '''
                }
            }
        }
        stage('Run tests'){
            steps {
                sh 'CI=true npx playwright test tests/addToCart.spec.ts --project=chromium'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
            sh 'rm -f playwright/.auth/user.json'
        }
    }
}