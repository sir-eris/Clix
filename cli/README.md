# Clix CLI (_PUBLIC PROJECT_)

> _NOTE 1: This repo is a public library made for projects created by the Clix web app._

> _NOTE 2: This project was developed entirely __without AI-assisted__ tools._

> You can download it using ```pip install clixdev``` or visit the [pip page](https://pypi.org/project/clixdev/)

**Project Overview**
---
- LOC: 650<sup>*</sup>
- Team: 1
- Timeline: 2mo
- Language: Python

<sup>*</sup>Count excludes contents of .gitignore and other irrelevant files and directories.

**What's Clix**
---
Clix serves as the middleman between the backend API developer and the IDE. It helps to eliminate hands on development (code writing) which is above 70% _repetitive_. Not to mention the uprise of AI in WebDev industry. On the front it uses graphical editing using nodes and wires to translate user's mind onto the canvas, and on the back it translates that into OpenAPI (Swagger) structure and saves it. Once the developer decides to review or make further modifications to the code, Clix provides a __CLI__ that seamlessly generates a complete project. (Currently Clix is limited to generating Django projects, but turning OpenAPI data structures into other frameworks won't be as challenging compared to the first one.)


**Repo Details**
---
Clix Command Line Tool ("the CLI") demonstrates the deepest understanding of project safety, code quality and open-source publishing. The CLI is made to perform 2 main tasks.
1. Generate a project: generates a fresh new Django project with all user defined configurations using user _terminal token_ and a _project token_.
2. Sync changes: Sync changes made after generating a project.

**How to run the project**
---
Simply [download](https://pypi.org/project/clixdev/) the ```pip package``` and run it using the command ```clixdev --help``` or to review the code in more detail please refer this repo [Clix CLI](https://github.com/sir-eris/cli)
