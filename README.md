[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/akashnimare/foco.svg?branch=master)](https://travis-ci.org/akashnimare/foco)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/akashnimare/foco?branch=master&svg=true)](https://ci.appveyor.com/project/akashnimare/foco/branch/master)


## FeedbackManager
A little web-app that allows users to send simple email feedback forms to multiple recipients and collecting results.

**[Demo](https://frozen-river-37156.herokuapp.com/)**

(Demo is using stripe test mode: use test mode credentials)

## Screenshots
![alt text](https://github.com/acrylix/Feedback/blob/master/client/screenshots/screenshot.png?raw=true)

## Tech/framework used
<b>Front-end</b>
- React (Redux/Router/Form) via [CRA](https://github.com/facebook/create-react-app)
- materializeCSS
- axios
- react-minimal-pie-chart

<b>Back-end</b>
- node 8.1.1
- express
- cookies
- mongoDB (mLab) + mongoose
- PassportJs + Google OAuth strategy
- StripeAPI
- SendGridAPI + Webhooks via <del>localtunnel</del> ngrok
- lodash

## Features
- Email Payment for Credits
- Batch email sending
- Custom templates
- Google OAuth (WeChat auth coming soon)

## Installation
First run
``npm install``

**Create dev.js under config**

To launch API and client
``npm run dev``

For sendGrid webhook: setup ``ngrok``

(client@localhost:3000 API@localhost:5000)

## License

MIT © [ACRYLIX]()
