# Great Scott, it's React Server Components!

This is a demo repo for the front end CoP talk of the same name.

## Running the demo locally

This demo can be run locally so you can play with it yourself.

### Start the API

I've set up a little API that serves some data so we can play with fetching data in various places.

To start it, run the following command in the root directory:

`npm run start:api`

### Start the Next.js app

To run the app that makes up the front end (such as it is), run:

`npm run dev`

## Server vs Client Components

In Next.js app router, components are server components by default.

To declare a client component use, this declaration at the top of the component file:

`use client;`

This declares a network boundary - once a client component has been declared, you can't import and user a server component. However, you can pass a server component as a prop and display it that way.

### What to do in server components

- Data fetching

### What to do in client components

- Managing user state
