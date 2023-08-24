# Installation

## Prerequisites

---

## Assumptions
You already have gitlab access to clone, pull and push code.

## Node must be installed
To verify it's already installed from the command line and type `node -v`. You should see something like this if it's installed `v14.17.3`
If it's not installed you can download it here: https://nodejs.org/dist/v14.17.3/node-v14.17.3-x64.msi
You can just accept all the defaults.
--- 
## Install, Clone, Configure, and Run

### Clone your repo and install dependencies
From VS Code home page
Navigate _Start_ > _Clone Git Repository_ > Paste `https://github.com/yplcy/Automation_Quiz.git` and Enter

or run `git clone https://github.com/yplcy/Automation_Quiz.git` in the terminal

Then run:
- run `npm i`
- run `npm install cypress`
- run `npm install prettier`

### Setting your CYPRESS_BASE_URL

- From the start menu search for `edit your environment variables` and click it
- click the `Environment Variables` button
- add `CYPRESS_BASE_URL` variable and point it to your local machines url.
  For example: `http://<your-machine-name-here>.infor.com:8083/`

### Run the following:
- run `npm run cy:open`
- select `automationExercise.feature`
https://github.com/yplcy/QA_Exercise/blob/0c553c5afcd1ad4949a5d3835a916be031bb9890/run%20cy%20open%20-%20082423.png
