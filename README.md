# dta_dsc
Early market research portal

1) Install dependacies
npm install --save @gov.au/core @gov.au/buttons @gov.au/accordion @gov.au/animate @gov.au/body @gov.au/breadcrumbs @gov.au/cta-link @gov.au/callout @gov.au/card @gov.au/control-input @gov.au/direction-links @gov.au/footer @gov.au/form @gov.au/grid-12 @gov.au/header @gov.au/headings @gov.au/inpage-nav @gov.au/keyword-list @gov.au/link-list @gov.au/main-nav @gov.au/page-alerts @gov.au/progress-indicator @gov.au/responsive-media @gov.au/searchbox @gov.au/select @gov.au/side-nav @gov.au/skip-link @gov.au/table @gov.au/tags @gov.au/text-inputs
 
2) npm install browser-sync node-sass on-change postcss-cli autoprefixer
 
3)  Add scripts in package.json
 "scripts": {
    "build:autoprefix": "postcss docs/css/main.css -u autoprefixer -r",    
    "build:css": "node-sass --output-style compressed \"./src/sass/main.scss\" \"./docs/css/main.css\"",   
    "build:css:dev": "node-sass --output-style compact --source-map true src/sass/main.scss docs/css/main.css",
    "build": "npm run build:css && npm run build:autoprefix",    
    "watch:sass": "onchange \"./src/sass/main.scss\" -- npm run build:css:dev && npm run build:autoprefix",    
    "serve": "browser-sync start --server ./docs -w --files \"./docs/**/*.html\" \"./docs/css/main.css\" \"./docs/js/script.js\"",  
    "watch": "npm run build && npm run serve & npm run watch:sass"
  },

4) Copy "pancake.scss" from "pancake\sass" folder to "src\sass"
 
5) Make following changes in "package.json"
"sass": {
      "modules": false,
      "location": "src/sass/",
      "name": "pancake.scss"
    },
    "js": {
      "minified": true,
      "modules": false,
      "location": "docs/js/",
      "name": "script.min.js"
    },
