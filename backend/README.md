# Clix Backend (_PRIVATE PROJECT_)

> _NOTE 1: This repo is not meant for public use and is only made available publicly for job acquisition purposes only._

> _NOTE 2: This project was developed entirely __without AI-assisted__ tools._

**Project Overview**
---
- LOC: 13,557
- Team: 1
- Timeline: 7mo
- Framework: Django
- Main Dependencies: djangorestframework, argon2, matplotlib, numpy, pyjwt, sqlparse

**What's Clix**
---
Clix serves as the middleman between the backend API developer and the IDE. It helps to eliminate hands on development (code writing) which is above 70% _repetitive_. Not to mention the uprise of AI in WebDev industry. On the front it uses graphical editing using nodes and wires to translate user's mind onto the canvas, and on the back it translates that into OpenAPI (Swagger) structure and saves it. Once the developer decides to review or make further modifications to the code, Clix provides a __CLI__ that seamlessly generates a complete project. (Currently Clix is limited to generating Django projects, but turning OpenAPI data structures into other frameworks won't be as challenging compared to the first one.)


**Repo Details**
---
Clix backend ("the app", "the API", "the project") demonstrates the deepest understanding of REST*ful* APIs, best practices, testing and deployment. The API is divided into 2 portions, one for the frontend and one for the CLI. Each section handles separate endpoints and live inside the same backend project. 
1. The frontend endpoints: handle all standard web app functionalities such as authentication along with all database communications regarding user's activities.
2. The CLI endpoints: handle token-base authentication over command line tool and are responsible to gather data from the database and craft the API JSON object format.

**How to run the project**
---
In order to run the Clix project you must have the Frontend __AND__ the Backend portions of the whole project running. (For running the frontend please refer to its repository [here](https://github.com/sir-eris/frontend).)
Follow these steps carefully and use your brain if you encounter any errors:
1. Refer this repo [Clix Backend](https://github.com/sir-eris/backend)
2. Clone the project
3. Create a virtual environment
4. Make sure your system has ```python3``` installed
5. Install ```pip requirements.txt```
6. ~~Run Frontend~~
7. Run database migrations
8. Run the project on ```PORT=8000```

After successfully running the project, you can use tools such as Postman to test the API endpoints.

**How to navigate project branches**
---
Feel free to explore all the 9 branches and run each to get familiar with the progression of the project from inception to unreleased featured. ```main, logic, pricing``` branches should be sufficient to provide a solid understanding of the extent of the app both on the _Python_ side and _Backend API_ side ```showcasing my multi-disciplinary nature,  focus on end-user, and the courage to tackle any problem```. 

```
NOTE: Branches are not synced with each other, so before running each one, make sure inside the src > app > actions folder, each file uses the localhost when calling the backend API. 
Review all backend > settings.py configurations to avoid unwanted hurdles. 
