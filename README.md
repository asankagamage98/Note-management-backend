# Assessment Unwir Pvt Ltd


## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment variables](#environment-variables)


## project-overview
This is a simple web application that allows users to manage their notes. Users can create, view, update, and delete notes through an intuitive user interface. The application consists of frontend and backend components.

## Demo
Check out the live demo
[here](https://note-management-backend.vercel.app/).

Domains
[here](https://note-management-backend-git-main-asankagamage98s-projects.vercel.app/).
[here](https://note-management-backend-p8kbz0knf-asankagamage98s-projects.vercel.app/).


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asankagamage98/Note-management-backend.git

2. Navigate to the project directory:
    cd Note-management-backend

3. Install dependencies:
    npm install


## Usage
To run the project, use the following command:
    npm start || npm run dev

The application will be accessible at http://localhost:3000


## endpoints
Create Note:
Endpoint: POST - http://localhost:3000/
Description: Create a new note.
Authentication: Non-authenticated

Get all notes and search note:
Endpoint: GET - http://localhost:3000/api/notes/
          GET - http://localhost:3000/api/notes?search=${searchText}&sortBy=title:asc       
Description: Retrieve note information and search notes.
Authentication: Non-authenticated

Update note:
Endpoint: PUT - http://localhost:3000/:id
Description: Update the note.
Authentication: Non-authenticated

Get note by id:
Endpoint:GET - http://localhost:3000/:id
Description: Retrieve note information for given id.
Authentication: Non-authenticated

Delete note by id:
Endpoint:DELETE - http://localhost:3000/:id
Description: Retrieve weather information for a specific date.
Authentication: Non-authenticate

## environment-variables

```
PORT=3000
# mongodb atlas connection string
MONGODB_URL=
```
