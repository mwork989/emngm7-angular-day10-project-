what is deployment

Deployment in software development refers to the process of making an application or a software update available for use. This process involves transferring data and components from a development or staging environment to a production environment, where end-users can access and use the software. PLacing your code in a Service for acesss

what is pipline

A pipeline is a series of steps that the software code passes through on its way to deployment Each step in the pipeline automates specific processes, and the code is typically moved automatically to the next step once the current step is successfully completed.

stages can be defined for pipline as below

Source Stage: The process starts from a source control management system like Git. When new code is committed and pushed to a repository, it triggers the pipeline.

Build Stage: In this stage, the source code is compiled or transformed into executable programs, libraries, or other types of artifacts.

Test Stage: Automated tests (unit tests, integration tests, functional tests, etc.) are run on the built artifacts to ensure code quality and functionality.

Release Stage: Here, the code is prepared for deployment. This may involve tagging the version, setting up configuration files, and other necessary preparations for deploying to production.

Deploy Stage: The code is deployed to production or staging environments. In continuous deployment, this happens automatically.

Post-Deployment: This might include steps like performance monitoring, gathering feedback, and alerting in case of issues.


Deployment can be manual and automated 

Automated: Ideally, each step in the pipeline is automated, requiring minimal human intervention.

Manual - full intervention 

CI- : Continuous Integration is a development practice where developers integrate code into a shared repository frequently, preferably several times a day.

CD- : Continuous Deployment is a step beyond Continuous Integration. Every change that passes the automated tests is deployed to the production environment automatically. or in a lower env


git steps  -https://education.github.com/git-cheat-sheet-education.pdf

1.	Create new repository
2.	git clone <repo_url>   into a particular directory where we want to keep
3.	git branch -a  : to display all the local and remove branches available right now
4.	git checkout -b  <name of the branch> 
5.	work on feature or development activity and will create files and folder
6.	git status – to check the changes in git repo
a.	if working tree is clean then perform step9
7.	git add <filnamewithextension>  git add * /git add .to add all files and folders
8.	git commit -m “commit message”
9.	git pull origin <branchname>  e.g. git pull origin develop
a.	if already uptodate perform step 10
10.	gill push –set-upstream origin feature1 
a.	will be created in repo to be compared with other branches and to be merged
git stash – temporary storage of work
git pull branch name – to get latest update – it merges without permission
git fetch branch name – to get latest update – it showcases the difference 
