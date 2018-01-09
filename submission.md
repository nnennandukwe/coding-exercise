# Submission Notes

These notes will be read by HubSpot developers. Drop us a line!

## Given more time, what would you have done differently?

# Logic => EJS
If I had had more time, I would have focused more on the necessity of the logic behind the filterable content portions of the project. I was interested in seeing how I would display the navigation menus for the user to be able to check a genre or year filter in order to display the information of the given/filtered content. Also, I would have liked to implement the sorted data algorithm so the JSON data would be alphabetized according to titles of the media content.

# Build => Webpack
I would like to have utilized Webpack for the build process of the site. I believe it would have brought the project together in a more seamless, cohesive manner.

# React
I built a `client` folder in order to prepare for React component implementation. Because of limited time, I didn't complete this process. However, the app can run on two localhosts, in which localhost:3000 would hypothetically render the React version of the app and localhost:3001 would be the Node-Express back-end of the project.`concurrently` was a package I installed that would allow for the Webpack Dev Server to be in communication with the API's and React with a sort of proxy, relaying information between both localhosts, separating the front-end and the back-end neatly.

# Sass
I would like to have built the CSS with Sass preprocessor in order to create variables for the hex colors that I utilized frequently. I installed the Sass CLI. Utilizing the variable names in order to reference common selector property values would have optimized the development process to be more simplified and readable.

# Responsiveness
Playing around more with the design decision of how the search bar should look on smaller viewports like phones and tablets would be interesting when considering user experience. I would like to have tested different systems/grids to see what would most likely make sense for those particular, conventional device-width parameters.

# ESLint
I set up ESLint to assist me in the build process towards the end of this project's development.

## Is there anything else you'd like to let us know?

# Acknowledgements
I greatly enjoyed the process! Thank you so much for providing me with the opportunity to partake in this web development project! I found some exciting tools to implement into the development process and I utilized a few of them here. `nodemon` was pretty useful for me, as I utilized it to refresh the project without having to kill the server repetitively. It regenerates as soon as a change is saved in any of the files. I found this helpful and it made the build process less arduous. Also, I actually learned more about the versatility and robust nature of Express that directly impacts the front-end "templating", which was such a valuable experience to me, as I utilize Express everyday for Web App Engineering and Data Visualizations.

# On the Instructions
I found the instructions for the web project to be interesting. Having to maneuver through the design structure of the files while adhering to the rules of not manipulating the DOM (which would be the easiest alternative to hard-coding additional HTML tags into the EJS partials files) led me to expand and modify my approach to the development process overall.

# Tools
This project encouraged me to research and explore different set up combinations with the tools I interacted with thus far to build what was made. The practicality of combining React, Node, Express, and while utilizing template systems like EJS and preprocessors like Sass helped me to develop better system intuition for future development projects. This is what inspired me to install `concurrently`, the dependency that allowed Webpack dev server to talk to the API server on different ports.

# Moving Forward
I've been in the process of building my own productivity optimization web app in my personal time (called `epitome`) and this web development project has inspired me to challenge myself to explore other technological combinations that I haven't merged together in the past. (hint: React-Firebase!)

In conclusion, I hope this project provides a degree of insight as it pertains to my knowledge of front-end web development stacks and my eagerness to learn, research, and code, from a larger standpoint beyond the time constraints of the application.
