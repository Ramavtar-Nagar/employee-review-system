# Polling System API

This is a simple employee review system project built with Node.js and [Database of Your Choice]. This project allows to create reviews, assign reviews to employees, registering new employees and manage them.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Registering a new employee](#registering-a-new-employee)
  - [managing the employee](#managing-the-employee)
  - [making and removing an employee ADMIN](#making-and-removing-an-employee-admin)
  - [Assigning a review to an employee](#assigning-a-review-to-an-employee)
  - [giving reviews to assigned employee](#giving-reviews-to-assigned-employees)
  - [Viewing own reviews](#viewing-own-reviews)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Database of Your Choice] set up and configured

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ramavtar-Nagar/employee-review-system/tree/main

2. Navigate to the project directory:
   
   ```bash
   Navigate to the project directory:

3. Configure your environment variables (if needed).

4. Install dependencies:

    ```bash
    npm install

  5. Run the server:

    ```bash
    npm start



  # Usage

  1. Registering a new employee
     
    
  2. Managing the employee


  3. Making and removing an employee ADMIN

  4. Assigning a review to an employees

  5. giving reviews to assigned employees

  6. Viewing own reviews



# Folder Structure

- src/
  - assets/
    - css
    - images
    - scss
    - js
  - config/
    - mongoose.js
    - notymiddleware.js
    - passport-local-strategy.js
  - controllers/
    - employeeSection.js
    - home.js
    - review.js
    - user.js
  - models/
    - qassignedReview.js
    - myReviews.js
    - user.js
  - routes/
    - employeeSection.js
    - index.js
    - review.js
    - users.js
  - views/
    - assignwork.ejs
    - employeeSection.ejs
    - header.ejs
    - home.ejs
    - layout.ejs
    - signinPage.ejs
    - signupPage.ejs
- .gitignore
- index.js
- package.json
- README.md


# Deployment
This project can be easily deployed to render.

# Contributing
Contributions are welcome! Feel free to open issues and pull requests.

# License
This project is licensed under the [Ramavtar Nagar] License - see the LICENSE file for details.
