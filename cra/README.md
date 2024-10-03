<a id="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
# Table of Contents
<ol>
    <li>
        <a href="#about">About</a>
        <ul>
            <li><a href="#built-with">Built With</a></li>
            <li><a href="#features">Features</a></li>
        </ul>
        </li>
        <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
            <li><a href="#prerequisites">Prerequisites</a></li>
            <li><a href="#installation">Installation</a></li>
        </ul>
        </li>
        <li><a href="#folder-structure">Folder Structure</a></li>
        <li><a href="#dependencies">Dependencies</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#roadmap">Roadmap</a></li>
        <li>
        <a href="#contributing">Contributing</a>
        <ul>
            <li><a href="#top-contributors">Top Contributors</a></li>
        </ul>
        </li>
        <li><a href="#license">License</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>

<!-- ABOUT -->
# About
Nortal is a web application built using [Create React App (CRA)](https://create-react-app.dev/), featuring internationalization through [i18next][i18next-url], and styled using [Material UI (MUI)][MUI-url]. It includes a complete authentication form and a redirect feature for handling secure routes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- BUILT WITH -->
## Built With

- [![React][React.js]][React-url]
- [![React Router][React Router]][ReactRouter-url]
- [![MUI][MUI]][MUI-url]
- [![i18next][i18next]][i18next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features

- **Authentication Form**: A login form that integrates with authentication APIs to handle user login securely.
- **Redirect After Authentication**: Automatically redirects users to the appropriate route after successful login based on user roles or conditions.
- **Internationalization (i18next)**: Support for multiple languages with dynamic switching.
- **Material UI (MUI)**: Provides a modern and responsive design, ensuring the app looks great across all devices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Getting Started
<!-- PREREQUISITES -->
## Prerequisites
- npm:
    ```bash
    npm install npm@latest -g

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tAnAs7/react_dashboard
   cd cra

2. Install dependencies:

    ```bash
   npm install

3. Start the development server:

    ```bash
    npm start

4. Open your browser and go to:

    ```bash
   http://localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FOLDER STRUCTURE -->
# Folder Structure
    .
    ├── public
    ├── src
    │   ├── components
    |   |   ├── nav                         # Navigate components folder
    |   |   |   └── ...                         # Components file configuration
    |   |   ├── switch                      # Custom switch components folder
    |   |   |   └── ...                         # Components file configuration
    │   │   ├── AuthForm.js                 # Authentication form component
    │   │   └── RedirectHandler.js          # Redirect logic after authentication
    │   ├── i18n
    │   │   ├── index.js                    # i18next configuration
    │   │   ├── lang_vi.js                  # Vietnamese variables library file
    │   │   ├── lang_en.js                  # English variables library file
    │   │   └── lang_XX.js                  # Another language variables library file
    │   ├── pages
    │   │   ├── version                     
    │   │   │   ├── vX.Y.Z                  # Version folder
    │   │   │   │   ├── (stage)                 # Stage folder
    │   │   │   │   │   ├── Dashboard_n             # Dashboard file in that version
    │   │   │   │   │   └── ...                     # Another page in that version
    │   │   │   │   └── ...                     # Another stage folder
    │   │   │   └── ...                     # Another version folder
    │   │   ├── Err404.jsx                  # Error page
    │   │   ├── Home.jsx                    # Home page
    │   │   ├── Login.jsx                   # Login page
    │   │   └── Release.jsx                 # Release page
    │   ├── styles
    │   │   └── theme.js                    # MUI theme customization
    │   ├── App.js                          # Main app entry point
    │   ├── Theme.jsx                       # Theme config
    │   ├── index.js                        # React app root
    │   └── ...
    ├── package.json
    └── README.md

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPENDENCIES -->
# Dependencies
- React: JavaScript library for building user interfaces.
- Create React App (CRA): Zero-configuration setup for a React app.
- i18next: Internationalization library for language translation.
- Material UI (MUI): React components for faster and easier web development.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
# Usage

_For more examples, please refer to the [Documentation]()_ (not available)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
# Roadmap

- [x] Multi-language Support
    - [x] Vietnamese (default)
    - [x] English
    - [ ] French
    - [ ] Spanish
    - [ ] Japanese

See the [open issues](https://github.com/tAnAs7/react_dashboard/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- TOP CONTRIBUTORS -->
## Top contributors:

<a href="https://github.com/tAnAs7/react_dashboard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tAnAs7/react_dashboard" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHENTICATION FLOW -->
# Authentication Flow
1. Login Form: Users input their credentials on the login form. The form validates the input and sends a request to the authentication API.
2. Redirect: After successful login, the app checks the user's role and redirects them to the appropriate route (e.g., dashboard, admin panel).
3. Role-based Routes: Secured routes are only accessible to authenticated users with the correct permissions.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
# Contact

[Quang-Tan, Nguyen](https://www.linkedin.com/in/qtan-dev) - qtan.ng@gmail.com

Project Link: [https://github.com/tAnAs7/react_dashboard](https://github.com/tAnAs7/react_dashboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
# Acknowledgments

<p align="right">(<a href="#readme-top">back to top</a>)</p>


***

Authored by [tAnAs](https://github.com/tAnAs7/).

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/tAnAs7/react_dashboard.svg?style=for-the-badge
[contributors-url]: https://github.com/tAnAs7/react_dashboard/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tAnAs7/react_dashboard.svg?style=for-the-badge
[forks-url]: https://github.com/tAnAs7/react_dashboard/network/members
[stars-shield]: https://img.shields.io/github/stars/tAnAs7/react_dashboard.svg?style=for-the-badge
[stars-url]: https://github.com/tAnAs7/react_dashboard/stargazers
[issues-shield]: https://img.shields.io/github/issues/tAnAs7/react_dashboard.svg?style=for-the-badge
[issues-url]: https://github.com/tAnAs7/react_dashboard/issues
[license-shield]: https://img.shields.io/github/license/tAnAs7/react_dashboard.svg?style=for-the-badge
[license-url]: https://github.com/tAnAs7/react_dashboard/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/qtan-dev

[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://reactjs.org/

[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://MUI.com

[React Router]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/

[i18next]: https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=fff&style=for-the-badge
[i18next-url]: https://www.i18next.com/
