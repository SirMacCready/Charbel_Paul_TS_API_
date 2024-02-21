# Charbel_Paul_TS_API_


## Installation :
    Node Version : 20.11
    "
    docker pull maccready/anno_1800_app-backend:v1
    docker pull maccready/anno_1800_app-frontend:v1
    docker pull mysql:latest
    docker pull phpmyadmin/phpmyadmin:latest
    docker compose up
    "

    **IF docker doesn't want to do it's job :**

    "cd .\backend\ ; npm install ; cd .. ; cd .\frontend\ ; npm install ; npm run dev"

    ***PS : The Backend Image need to be restarted AFTER the DB image has fully been ran, for some obscure reason it just doesn't want to connect in the first place, even with retries waiting for everything to be done***

    **You can also run a first time the compose, shut down and then run again and it will miraculously work**

    ~I love computer science~
## Side Note

    Anno 1800 Expedition Helper is a project heavily inspired by the Website **Anno 1800 App (https://www.anno-expeditions.app)**

    The project sets to recreate the website but in **TSX** ( the original one have been made in **Vue.js**)
    
    No usage of AI, **pure Brain Power and it hurts.**

    Some features haven't been discussed in class, such as Interfaces, but I have learned them at my work and some others by my previous experiences ( even before my arrival at HETIC)

    I really hope that the project will meet your expectations.

    My work on this site isn't finished yet. 
    I would like to continue it into the year

    Notable future feature being : 

    -Better looking Styles
    -Better Error Handling
    -More Items and goods
    -More Dynamic and ergonomic expedition creation
    -And overall, a better Design.
    -better Dockerizing the whole application**

        
## Geek references
    to say one of them : ports were "1337" and "4042" 
