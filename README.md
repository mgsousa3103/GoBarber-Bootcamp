<h2 align="center">
<br>
  <img src="src/public/images/logo.svg" alt="Ecoleta" width="120">
<br>
<br>
GoBarber
</h2>

<p align="center">This application works as a time management system for barbers</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/mgsousa3103/GoBarber-Bootcamp" alt="License MIT">
  </a>
</p>

![GoBarber](https://user-images.githubusercontent.com/22710485/84206708-20bfc600-aa86-11ea-9c57-90b2d7961646.PNG)

## Features

These are some resources that were used in this project.

- 💹 NodeJS
- 💹 Express
- 💹 Nunjucks
- 📄 Sequelize
- 📄 PostgreSQL

## Getting started

1. Clone this repo using `git clone https://github.com/mgsousa3103/GoBarber-Bootcamp.git`
2. Move yourself to the appropriate directory: `cd GoBarber-Bootcamp`

#### Getting started with backend

For this project, you will need a [PostgreSQL](https://www.postgresql.org/) database on your machine. I used [Docker](https://www.docker.com/) to install it.

1. Run `yarn` to install dependencies
2. Run your PostgreSQL database
3. Run `npx sequelize-cli db:migrate` to run the migrations
4. Run `yarn start` to start the application

#### Routes

| Route                             | Type | Result                                     |
| --------------------------------- | ---- | ------------------------------------------ |
| `/files/:id`                      | GET  | Uploads a file in a temporary folder       |
| `/`                               | GET  | Renders home page                          |
| `/signin`                         | POST | Makes login in the application             |
| `/app/logout`                     | GET  | Makes logout in the application            |
| `/signup`                         | GET  | Renders sign in page                       |
| `/signup`                         | POST | Creates an user in the application         |
| `/app/dashboard`                  | GET  | Renders dashboard                          |
| `/app/appointments/new/:provider` | GET  | Returns appointments created by a provider |
| `/app/appointments/new/:provider` | POST | Creates appointments by a provider         |
| `/app/available/:provider`        | GET  | Returns the available times of a provider  |
| `/app/schedule`                   | GET  | Returns the schedule of a provider         |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) page for details
