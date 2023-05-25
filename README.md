![Logo](./assets/images/PokeLogo.jpg)

# Pokemon Battle Academy!

Pokemon Battle Academy is a turn by turn game based on the universe of Pokemon.
You play as a Pokemon trainer and your goal is to make your Pokemon reach the Lvl 10 without dying. During your journey, you'll encounter many differents Pokemon, each with their own abilities. Win levels by defeating Pokemons but be careful about your health !

# Table of contents

- [User Experience](#user-experience-ux)

  - [User Stories](#user-stories)

- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
- [Features](#features)
  - [General Features](#general-features)
  - [Home Page](#home-page)
  - [Gallery Page](#gallery-page)
  - [About Page](#about-page)
  - [Contact Page](#contact-page)
  - [Thank You Page](#thank-you-page)
  - [404 Page](#404-page)
- [Future Implementations](#future-implementations)

- [Testing](#testing)

  - [Accessibility](#accessibility)
  - [Validator Testing](#validator-testing)
  - [Contrast Checking](#contrast-checking)
  - [Lighthouse](#lighthouse)

- [Technologies Used](#technologies-used)

  - [Languages Used](#languages-used)
  - [Frameworks & Programs Used](#frameworks-&-programs-used)

- [Deployment](#deployment)

- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)

# User Experience (UX)

## Initial Discussion

Pokemon Battle Academy is a turn by turn game , based on the universe of Pokemon.
You can play against all your favorite Pokemon and pick amongst three starters of the first generation.

### Key information on the site

- Actual game
- A how to play section
- A Pick your Pokemon Section

## User Stories

### Clients Goals

- Being able to view the site on wide range of devices.
- Being able to choose one Pokemon among the three options at the start.
- Being able to encounter random Pokemon of the same level as mine.
- Have a health bar that represents my Pokemon's health
- Have a level indicator that shows my Pokemon's current level.
- Have the ability to attack the encountered Pokemon using abilities.
- See the damage inflicted to the encountered Pokemon.
- Want the encountered Pokemon to attack me .
- Want the game to end , and display a victory message when my Pokemon reaches the level 10.
- Want the game to end, and display a game over message when my Pokemon dies.
- Want the option to restart the game after winning or losing.

### First Time Visitor Goals

- I want to discover the universe of Raphael Silva.
- I want to be able to navigate the site easily.
- I want to be able to find his work.
- I want to find his social medias.

### Returning Visitor Goals

- I want to contact the artist for a project.
- I want to see if the artist released any new project.
- I want to be able to contact the artist about his technics.

# Design

## Colour Scheme

I wanted the colours to reflect the colourful universe of the artist, something brightful, contrasted as his work.

## Typography

Google Fonts was used for the following fonts :

- Roboto Mono is used for the navigation, the About page, and the Contact Form.
- Space Mono is used for the rest of the website, such as the hero-container, or the Gallery Title.

## Imagery

The images and the logo were used the permission of the artist. All the pics from the gallery where taken from the Instagram of the artist.

## Features

### General Features

#### Navigation Bar

- The full responsive navigation bar includes links to the Logo(which brings you to the Home Page), Gallery, About and Sign Up page and is identical in each page to allow for easy navigation.
- This navigation bar font size and the layout of the navigation changes to stack under the Logo for devices under 800px.
- This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.
- The design of the buttons is made using box-shadow, to remind of the digital and graphic design as a theme for the website.

#### Footer

- The footer section includes links to the relevant social media sites for Raphael Silva. The links will open to a new tab to allow easy navigation for the user.
- The footer is valuable to the user as it encourages them to keep connected via social media to find out more about the artist.

### Home Page

- The Home Page includes a photo of Raphael Silva, the artist, on the left. On the right, you can find useful informations about him, such as his job title and the tools he uses.
- This page is fully responsive. The font-size of the text changes depending on the size of the viewport, as well as the positioning of the elements, from a grid on desktop to a display block on mobile devices.

#### Mobile

-On the mobile version, I changed the display of the hero-container to block, so it's easier to read, as well as the grid that was used for the description of the artist, who was changed to a display block.

### Gallery Page

- The Gallery Page allows the user to discover the work of the artist, displayed in a grid made of 3 columns , and it includes a short description for each pictures.
- The description is made from the tags that the artist put on his work on Instagram.

#### Mobile

-On mobile version, the grid goes from 3 columns to only one , to allow the user to have better size pictures.
-The description on each picture has been removed to avoid to saturate the site.

### About Page

- The About Page allows the user to learn more about the artist, in three differents sections.
  - The About Me section allows the user to get to know the artist better, about where is from, which companies he worked for, where did he study.
  - The Awards section shows the differents awards that the artist got through the years.
  - The Features section shows where the artist was referred as on differents websites. This allows the user to check the public opinion about the artist.

#### Mobile

-On mobile version, the display of each section is changed from flex to block, to allow the user to have a better layout for this screensize.

### Contact Page

- This page allows the user to contact the artist for any request, for a project or to give an opinion about previous work. This page is useful for both business or private customers.
- Every field in the form is required to avoid empty messages, names or email. Each input also has the autocomplete feature which allows the user to complete the form faster.

-On mobile version, the display is changed from flex to block, to allow the user to have a better layout for this screensize.

### Thank You Page

-This page is here to thank the user for sharing his opinion with the artist, and to invite him as well to go check the differents social medias of the artist.

-On mobile version.

### 404 Page

-This page is made if the user types a wrong address in the search bar, it allows him to come back to the site via the back to home button.

-Here's the mobile version.

## Future Implementations

- Use Javascript to put animations on the 3D shadows on the Home page.
- Use Javascript to change the layout of the gallery, with names of the creations written, that would display the creation on hover.

## Testing

I tested my website on Mozilla Firefox, Opera and Chrome, and there's no noticeable problem.

### Fixed Bugs

During the development of the Gallery page, I ran into an issue with the positioning of the pictures, when i was using float.
This was due to not putting the size of the pictures in my CSS file.
I decided to change the layout to a grid, to make it more responsive.

## Accessibility

I have been mindful during coding this website to ensure that it was as accessible friendly as possible.I've made that possible by:

- Using semantic HTML
- Giving an alt attribute to every pictures on the websites
- Giving a aria-label to videos, and icons in the footer.
- Giving an aria-hidden attribute to the icons in the About page.
- Ensuring the colour contrast in the site is strong enough to meet the accessibilty norm.

## Testing

| Test                                                   |                                                                  Validate                                                                  |
| ------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------: |
| Is it clear and easy how to navigate in the website?   |                                 You can use the navigation bar to access all the sections of the website.                                  |
| Where can you find a presentation of the artist?       |                You can find a short presentation of the artist on the Home Page, and learn more about him on the About Page                |
| Can you easily contact the artist?                     | You can by going on the Contact Page on the website and fill the form. You can also send him an email through the Mail link in the footer. |
| Can you play through the videos present on the Gallery |                                      You can by using the controls incorporated in the video player.                                       |
| Can you access the site on any device?                 |                     The wevsite is fully responsive, from desktop to devices with a screen resolution of 280px width.                      |

The website was tested on desktop, and mobile (Pixel 6a).
Each device tested the site using the following browsers:

- Google Chrome
- Mozilla Firefox
- Opera

Additional testing was taken by friends on large variety of devices.

## Validator Testing

- HTML
  - No errors were returned when passing through the official
- CSS

  - No errors were found when passing through the official

  ### Contrast Checking:

  ### LightHouse

## Technologies Used

### Languages Used

HTML and CSS were used to create this website.
There's also a script at the end of the HTML to allow the use of icons from FontAwesome.

### Frameworks & Programs Used

- Git- For version control
- GitHub - To save and store the files for the website.
- Google Fonts - To import the fonts used for the website.
- Font Awesome - For the icons on the website.
- Google Dev Tools - To troubleshoot and test the features, fix issues with styling.
- FastDL- To download Instagram pictures.
- IamSilva - Actual website of Raphael Silva, for all the text content, and the Logo.
- Am I Responsive? - To show the website image on a range of devices.
- Shields.io -To add badges to the README
- Contrast Checker - To check the contrast was good for accessibility purpose.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here -

## Credits

### Content

- The text content was taken from the previous website of Raphael Silva, who kindly allowed me to use it.
- The icons in the footer were taken from

### Media

- The logo was also designed by Raphael Silva, who allowed me to use it.
- The images are all taken from Raphael Silva's Instagram, who kindly allowed me to use them.
- The picture for the Home page was taken from the Raphael Silva website.

## Acknowledgements

- The animation on the navigation buttons was suggested by my classmates Darrach Barneveld and Dario.
- The 404 page and the thank you page were suggested by Matthew Sheperd, a student in the #peer-code-review.
