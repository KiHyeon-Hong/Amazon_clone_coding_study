# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

============================================================

- npx create-react-app amazon-clone
- npm start : react 시작하기
- sudo npm install -g firebase-tools : 파이어 베이스 연동을 위한 모듈?

============================================================

- prettier : 코드를 이쁘게 보기 위한 모듈
- ES7 React/Redux/GraphQL/React-Native snippets :

============================================================

- material-ui.com
- npm install @material-ui/core : 아이콘을 얻기 위한 npm
- npm install @material-ui/icons : 아이콘 얻기 위한 npm

============================================================

- npm install react-router-dom : 라우터를 위한 npm
- npm install react-currency-format : 입력 포맷을 도와줌

============================================================

- Add to basket button을 클릭하면 the data layer -> react context API / redux에 들어가고, 위 장바구니 개수가 1개 증가하게 만들어야 함

- npm install firebase

============================================================

- firebase init (firebase 명령어를 사용하려면? -g로 설치를 해야 한다?)
- npm run build : 배포, build directory
- firebase deploy

hosting url이 생긴다.

============================================================

- react flip move? : 움직이는 애니메이션?

============================================================

- npm install @stripe/stripe-js
- npm install @stripe/react-stripe-js
- https://stripe.com/ : 결제 API 사용법
- 이번 프로젝트에서는 실제로 코딩하지는 않겠다

============================================================

<Stripe 사용법>

- publishable key : 중요함
- developers를 들어가보면?

============================================================

- npm install axios : REST API 지원? fetch와 axios 차이 나중에 알아 볼 것
- axios, fetch, request? 차이점

============================================================

- firebase init
- functions: Configure and deploy cloud function 선택
- javascript 선택
- y 선택
- Y 선택
- 올라간다

============================================================

- src : app(front-end)
- functions : full back-end (cloud function)

============================================================

- npm install express
- npm install stripe

============================================================

- secret key : reveal test key token
- firebase emulators:start

============================================================

- npm install moment

============================================================

- firebase deploy --only functions
- npm run build
- firebase deploy --only hosting

============================================================

- npm install --save-dev gh-pages
- "deploy": "npm run build &&gh-pages -d build"
- npm run deploy
- 이전에 GitHub Pages 열어야 함
- "homepage": "https://kihyeon-hong.github.io/amazon_clone_coding_study/"
