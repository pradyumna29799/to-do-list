# To-Do List API

A simple RESTful API for managing a to-do list. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks, helping them to manage their tasks efficiently.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database program that uses JSON-like documents with optional schemas.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js.

## Features

- Create, read, update, and delete tasks.
- Tasks have statuses to indicate their current state: "pending", "in-progress", "completed".
- Error handling and validation for task operations.

## Installation

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: Install MongoDB and ensure it's running. You can download it from [mongodb.com](https://www.mongodb.com/try/download/community).
- **Postman**: (Optional) Use Postman or a similar tool to test the API.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-list-api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd todo-list-api
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root of your project and add the following:

   ```plaintext
   MONGODB_URI=mongodb://localhost:27017/todolist
   PORT=3000
   ```

   - `MONGODB_URI`: MongoDB connection string.
   - `PORT`: Port on which the server will run.

5. **Start the MongoDB server:**

   ```bash
   mongod
   ```

6. **Run the application:**

   ```bash
   npm run dev
   ```

   The server should be running at `http://localhost:3000`.

## API Endpoints

### Task Endpoints

#### 1. Get All Tasks

- **URL:** `/api/tasks`
- **Method:** `GET`
- **Description:** Retrieve a list of all tasks.
- **Response:**
  - **Success (200):** Returns an array of task objects.
  - **Example Response:**

    ```json
    [
      {
        "_id": "64b0c8d97cba1e001c8b4567",
        "title": "Learn Node.js",
        "description": "Start with basic concepts and move to advanced topics.",
        "status": "pending",
        "created_at": "2024-08-01T10:22:17.529Z",
        "updated_at": "2024-08-01T10:22:17.529Z"
      }
    ]
    ```

#### 2. Get Task by ID

- **URL:** `/api/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a single task by its ID.
- **Parameters:**
  - `id`: The ID of the task to retrieve.
- **Response:**
  - **Success (200):** Returns the task object.
  - **Error (404):** Task not found.
  - **Example Response:**

    ```json
    {
      "_id": "64b0c8d97cba1e001c8b4567",
      "title": "Learn Node.js",
      "description": "Start with basic concepts and move to advanced topics.",
      "status": "pending",
      "created_at": "2024-08-01T10:22:17.529Z",
      "updated_at": "2024-08-01T10:22:17.529Z"
    }
    ```

#### 3. Create a New Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**

  ```json
  {
    "title": "New Task",
    "description": "Description of the new task",
    "status": "pending"
  }
  ```

- **Response:**
  - **Success (201):** Task created successfully.
  - **Error (400):** Invalid input data.
  - **Example Response:**

    ```json
    {
      "_id": "64b0c8d97cba1e001c8b4568",
      "title": "New Task",
      "description": "Description of the new task",
      "status": "pending",
      "created_at": "2024-08-01T11:22:17.529Z",
      "updated_at": "2024-08-01T11:22:17.529Z"
    }
    ```

#### 4. Update an Existing Task

- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Description:** Update an existing task.
- **Parameters:**
  - `id`: The ID of the task to update.
- **Request Body:**

  ```json
  {
    "title": "Updated Task",
    "description": "Updated description",
    "status": "in-progress"
  }
  ```

- **Response:**
  - **Success (200):** Task updated successfully.
  - **Error (400):** Invalid input data.
  - **Error (404):** Task not found.
  - **Example Response:**

    ```json
    {
      "_id": "64b0c8d97cba1e001c8b4567",
      "title": "Updated Task",
      "description": "Updated description",
      "status": "in-progress",
      "created_at": "2024-08-01T10:22:17.529Z",
      "updated_at": "2024-08-01T12:30:00.000Z"
    }
    ```

#### 5. Delete a Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Parameters:**
  - `id`: The ID of the task to delete.
- **Response:**
  - **Success (200):** Task deleted successfully.
  - **Error (404):** Task not found.
  - **Example Response:**

    ```json
    {
      "message": "Task deleted successfully"
    }
    ```

## Error Handling

- **400 Bad Request:** The server could not understand the request due to invalid syntax.
- **404 Not Found:** The server could not find the requested resource.
- **500 Internal Server Error:** The server has encountered a situation it doesn't know how to handle.

## Development Scripts

- **Start the server:**

  ```bash
  npm start
  ```

- **Start the server with Nodemon (for development):**

  ```bash
  npm run dev
  ```

## Troubleshooting

- Ensure MongoDB is running before starting the application.
- Check the `.env` file for correct database URI and port settings.
- Review server logs for detailed error messages if something goes wrong.

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

1. **Fork the repository**
2. **Create your feature branch:** `git checkout -b feature/my-feature`
3. **Commit your changes:** `git commit -m 'Add some feature'`
4. **Push to the branch:** `git push origin feature/my-feature`
5. **Open a pull request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please reach out:

- **Author:** Pradyumna Badave
- **Email:** [pbadave9@gmail.com](mailto:pradyumnabadave@example.com)
