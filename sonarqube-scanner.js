const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://15.206.80.151:9000/",
        options: {
            "sonar.login": "admin",
            "sonar.password": "babu",
            "sonar.projectName": "react_app",
            "sonar.projectDescription": "Just for demo...",
            "sonar.sourceEncoding":"UTF-8",
            "sonar.sources": "./src",
            "sonar.test.inclusions": "**/*.test.tsx,**/*.test.ts",
            "sonar.exclusions": "**/*.test.tsx",
            "sonar.tests":"./src",
            "sonar.testExecutionReportPaths": "test-report.xml",
            "sonar.javascript.lcov.reportPaths":"coverage/lcov.info"
        },
    },
    () => process.exit()
);
