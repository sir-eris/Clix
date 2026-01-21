# Clix Frontend (_PRIVATE PROJECT_)

> _NOTE 1: This repo is not meant for public use and is only made available publicly for job acquisition purposes only._

> _NOTE 2: This project was developed entirely __without AI-assisted__ tools._

**What's Clix**
---
Clix serves as the middleman between the backend API developer and the IDE. It helps to eliminate hands on development (code writing) which is above 70% _repetitive_. Not to mention the uprise of AI in WebDev industry. On the front it uses graphical editing using nodes and wires to translate user's mind onto the canvas, and on the back it translates that into OpenAPI (Swagger) structure and saves it. Once the developer decides to review or make further modifications to the code, Clix provides a __CLI__ that seamlessly generates a complete project. (Currently Clix is limited to generating Django projects, but turning OpenAPI data structures into other frameworks won't be as challenging compared to the first one.)


**Repo Details**
---
Clix frontend ("the app", "app", "this app", "the project") demonstrates the deepest understanding of REST*ful* APIs, best practices, testing and deployment. The app divides each API project into 4 main pillars.
1. Endpoints: Define and modify API endpoints and their respective request and response structures along with the necessary headers configurations. 
2. Models: Create, and modify Database Schemas, table structures and relational boundaries. 
3. __**Logic**__: Visually layout and modify the underlying logic of each endpoint. 
4. Settings: Set, reset, and adjust project-wide configurations. 

The __**Logic**__ is the most exciting of the 4. The app deeply customizes the ReactFlow library and makes it possible to custom create **Nodes** and assign them to a fixed task. A task can be defined as a static pre-defined set of programming rules. This includes but is not limited to defining a variable, creating an __if__ clause, calling already-existing programming processes such as number operations, array operations, etc, performing _**CRUD**_ operations with Database tables, and much more. 

> _Fun Fact: towards the end of the project the idea of opening custom **Node** creation to the community and traces of its development could be found in the later commits in the project._


**How to run the project**
---
In order to run the Clix project you must have the Frontend __AND__ the Backend portions of the whole project running. (For running the backend please refer to its repository [here](https://github.com/sir-eris/backend).)
Follow these steps carefully and use your brain if you encounter any errors:
1. Refer this repo [Clix Frontend](https://github.com/sir-eris/frontend)
2. Clone the project
3. Create a virtual environment
4. Make sure your system has ```Node 18.x``` installed
5. Install ```npm packages```
6. ~~Run Backend~~
7. Run the project on ```PORT=3000```

After successfully running the app, navigate to the _Create Account_ page and create an account (make sure you choose a strong password with lower, upper, 6+, special char).

**How to navigate project branches**
---
Feel free to explore all the 9 branches and run each to get familiar with the progression of the project from inception to unreleased featured. ```site-5, dash-redesign-2, the-architecture, modular-redesign, logic, subscription``` branches should be sufficient to provide a solid understanding of the extent of the app both on the _JavaScript_ side and _design_ side ```showcasing my calibre, agility, and creativity```. 

```
NOTE: Branches are not synced with each other, so before running each one, make sure inside the src > app > actions folder, each file uses the localhost when calling the backend API.
Set all const BASE_URL = false. You can also refer to the console, and the browser inspector. 
