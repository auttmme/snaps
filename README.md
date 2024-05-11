# Snaps

To run this application, please follow the instructions below:

## Prerequisites

Ensure that you have Node.js version 18.17 or later installed on your system.

## Clone Repository

Begin by cloning this repository to your local machine. You can do this by executing the following command in your terminal:

```
git clone <repository-url>
```

## Get GoREST Access Token

Login to [GoREST](https://gorest.co.in/) to get your **access token**.

## Setting Up Environment Variables

Before starting the project, it's necessary to set up environment variables. Follow these steps:

1. Create `.env.local` file on root directory of the project.
2. Inside the `.env.local` file, assign your **GoREST Access Token** to the `NEXT_PUBLIC_API_KEY` variable in the following format:

```
 NEXT_PUBLIC_API_KEY= [your access token]
```

Access token is needed for request methods such as `PUT`, `POST`, and `DELETE`. Access Token will be passed with **Authorizatio** header as Bearer token.

## Installing Dependencies

Next, install the project dependencies by running the following command in your terminal:

```
npm install
```

## Launching the Snaps Project

Finally, start the **Snaps** project by executing the following command:

```
npm run dev
```

This will initiate the development serrver for the **Snaps** application.
