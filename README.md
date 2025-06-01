# MERN Task Manager Application

This project is a simple MERN Task Manager API built with  **React.js**, **Node.js**, **Express**, and **MongoDB**. It demonstrates the fundamental principles of REST API development, including CRUD (Create, Read, Update, Delete) operations.

## Features

- **Create Tasks**: Add new tasks to the database.
- **Read Tasks**: Retrieve a list of all tasks or a specific task by its ID.
- **Update Tasks**: Modify task details such as title, description, or status.
- **Delete Tasks**: Remove tasks from the database.

## API Endpoints

### Base URL:
```
http://localhost:<PORT>/api/v1/tasks
```

### Endpoints:

#### 1. **Get All Tasks**
**Method:** `GET`
```
/api/v1/tasks
```
**Description:** Retrieve all tasks from the database.

#### 2. **Get a Single Task**
**Method:** `GET`
```
/api/v1/tasks/:id
```
**Description:** Retrieve a specific task by its unique ID.

#### 3. **Create a Task**
**Method:** `POST`
```
/api/v1/tasks
```
**Description:** Add a new task to the database. Requires a JSON body with task details.

#### 4. **Update a Task**
**Method:** `PATCH`
```
/api/v1/tasks/:id
```
**Description:** Update details of an existing task. Requires a JSON body with the fields to be updated.

#### 5. **Delete a Task**
**Method:** `DELETE`
```
/api/v1/tasks/:id
```
**Description:** Remove a task from the database by its unique ID.

## Technologies Used
- **React.js**
- **Tailwind CSS**
- **Node.js**
- **Express**
- **MongoDB**

