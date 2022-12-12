# Code challenge for Ophelos

This is a code challenge for ophelos built with sveltekit


### How did you approach the project?
I wanted to try out the new sveltekit release candidate and this looked like a good project to try it so I used [sveltekit](https://kit.svelte.dev/) as my base application. This meant I could make a nice front end that would show users I&E scores as they filled out their application forms.

I wanted to create a plesant easy to use interface for the user so split into two halves to make it easier for the user to fill out. I also added bulma.css so that I could add some nice interface elements.

For the database I opted for prisma as an ORM and SQLlite for development so that it's easy to devlop on and quick to share.

For validation I used Zod on the front and the back end however I think I will use a diffrent validator in the future as it turned out to have limitations around testing diffrent string types. I have used YUP in the past which I would use again.

For server responses on form submission I took quite a spartan aproach in the intrest of time.

For the database schema I only chose to save the expected form data although this could be easily changed to spit out user data from I&E data.


### How did you verify your solution?
I Wrote some unit tests to confirm my logic around I&E grades.

I also tested the solution in chrome and firefox, in firefox I did see some validation issues which I would fix at a later stage.

To peek inside the database you can uncomment the last function in `src\routes\api\applications\+server.ts` and go to `http://localhost:5173/api/applications`

### What would you do if you had more time and how?
There are lots of things I would like to do to improve on this proof of concept:
 - Create a task backlog.
 - Add a form back button to each page.
 - hook into the browser back button functionality
 - Write tests for the back end
 - Add nicer styling for invalid feilds
 - Add Aria tags everywhere and do an accesibility audit
 - Centralise some CSS variables
 - Add the ability to add custom other income and expenditure.
 - Add proper currency formatting in the inputs
 - Stricter validation for the date of birth fields
 - Stop letting 'e' and negative numbers being a valid numerics in the form.
 - persist the front end data if there is an issue on submission.
 - change the validation from Zod to something else.
 - add analytics
 - add better error handling.

I would start with user focused issues such as usability and validation issues then add error handling and logging before deploying to production.

## Checking the soloution

Git clone this repository then install the dependancies

```bash
npm install
```
Create a .env file and insert the following
```
DATABASE_URL="file:./dev.db"
```

Build the database using:
```bash
npm run build:prisma
```

Start the dev enviroment:
```bash
npm run dev
```

The server should start at: http://localhost:5173/

If you run into any issues email me.

## Running tests:
There are some unit tests:
To run the tests run:
```bash
npm run test:unit
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
