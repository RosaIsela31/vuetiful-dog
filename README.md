# Worky Coding Challenge 🚀

> Involves Vue components, API integration and data display.

## Libraries used 📚

- Vue CLI
- Axios
- FontAwesome
- vue-router
- Vuex
- vue-persistedstate
- cypress

## Development process 👷🏽‍♀️

The are the steps I followed to complete the challenge:

_Check the Giphy API_

- Check Api endpoint to know how to apply the requisites of the challenge
- Add filters to URL endpoint. (Bring 5 items about the word "dog")

_Display the gifts in a list using the data available from the API_

- Perform a GET request to the API and axios the data array
- Pass the array of offers as props to the PxCard component
- Map the props to generate an automatic list. Show name and image
- Apply Styles and Design UI
- Add media queries to do a responsive app

_Add Test_

- Deploy of the Vuetiful Dog App with Github pages
- install cypress library
- Create the tests of the project and run them into the browser with cypress

## Setting it up 🔧

### Prerequisite

Have a code editor, a terminal and that's all.

### Installation

- Fork and clone this repository: `https://github.com/RosaIsela31/vuetiful-dog.git`
  Now, in your terminal:
- `cd vuetiful-dog`
- `npm install`
- Finally, you can run the project with `npm run serve`
- You can run the tests with `npm run cypress:open` you can find all tests into the follow path `cypress > integration > vuetiful > testing.js`

## Developer 💻

_Rosa Isela L. Palma_

Happy Coding! ❤️
