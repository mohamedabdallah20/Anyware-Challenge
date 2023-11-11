# API Documentation

## Announcements

### Get All Announcements

- **Endpoint:** `/api/announcements`
- **Method:** `GET`
- **Description:** Get a list of all announcements.
- **Response:**

  - Status: 200 OK
  - Body:

    ```json
    [
      {
        "id": "announcement_id",
        "title": "Announcement Title",
        "userName": "User Name",
        "content": "Announcement Content",
        "course": "Related Course",
        "createdAt": "Timestamp"
      }
      // ... other announcements
    ]
    ```

### Get Announcement by ID

- **Endpoint:** `/api/announcements/:id`
- **Method:** `GET`
- **Description:** Get a specific announcement by ID.
- **Response:**

  - Status: 200 OK
  - Body:

    ```json
    {
      "id": "announcement_id",
      "title": "Announcement Title",
      "userName": "User Name",
      "content": "Announcement Content",
      "course": "Related Course",
      "createdAt": "Timestamp"
    }
    ```

### Create Announcement

- **Endpoint:** `/api/announcements`
- **Method:** `POST`
- **Description:** Create a new announcement.
- **Request Body:**

  ```json
  {
    "title": "Announcement Title",
    "userName": "User Name",
    "content": "Announcement Content",
    "course": "Related Course"
  }
  ```

- **Response:**

  - Status: 201 Created
  - Body:

    ```json
    {
      "id": "new_announcement_id",
      "title": "Announcement Title",
      "userName": "User Name",
      "content": "Announcement Content",
      "course": "Related Course",
      "createdAt": "Timestamp"
    }
    ```

### Update Announcement by ID

- **Endpoint:** `/api/announcements/:id`
- **Method:** `PUT`
- **Description:** Update an announcement by ID.
- **Request Body:**

  ```json
  {
    "title": "New Announcement Title",
    "userName": "New User Name",
    "content": "New Announcement Content",
    "course": "New Related Course"
  }
  ```

- **Response:**

  - Status: 200 OK
  - Body:

    ```json
    {
      "id": "announcement_id",
      "title": "New Announcement Title",
      "userName": "New User Name",
      "content": "New Announcement Content",
      "course": "New Related Course",
      "createdAt": "Timestamp"
    }
    ```

### Delete Announcement by ID

- **Endpoint:** `/api/announcements/:id`
- **Method:** `DELETE`
- **Description:** Delete an announcement by ID.
- **Response:**
  - Status: 204 No Content

## Quizzes

### Create Quiz

- **Endpoint:** `/api/quizzes`
- **Method:** `POST`
- **Description:** Create a new quiz.
- **Request Body:**

  ```json
  {
    "title": "Quiz Title",
    "course": "Related Course",
    "type": "Quiz Type",
    "topic": "Quiz Topic",
    "dueTo": "Due Date",
    "questions": [
      {
        "question": "Question",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correctAnswer": "Correct Answer"
      }
      // ... other questions
    ]
  }
  ```

- **Response:**

  - Status: 201 Created
  - Body:

    ```json
    {
      "id": "new_quiz_id",
      "title": "Quiz Title",
      "course": "Related Course",
      "type": "Quiz Type",
      "topic": "Quiz Topic",
      "dueTo": "Due Date",
      "questions": [
        {
          "question": "Question",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": "Correct Answer"
        }
        // ... other questions
      ],
      "createdAt": "Timestamp"
    }
    ```

### Get All Quizzes

- **Endpoint:** `/api/quizzes`
- **Method:** `GET`
- **Description:** Get a list of all quizzes.
- **Response:**

  - Status: 200 OK
  - Body:

    ```json

      {
        "id": "quiz_id",
        "title": "Quiz Title",
        "course": "Related Course",
        "type": "Quiz Type",
        "topic": "Quiz Topic",
        "dueTo": "Due Date",
        "createdAt": "Timestamp",
      },
      // ... other quizzes

    ```

### Get Quiz by ID

- **Endpoint:** `/api/quizzes/:id`

- **Method:** `GET`

- **Description:** Get a specific quiz by ID.

- **Response :**

  - Status: 200 OK

  - Body:

    ```json
    {
      "id": "quiz_id",
      "question": "Quiz Question",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correctOption": 1,
      "createdAt": "Timestamp",
      "updatedAt": "Timestamp"
    }
    ```

### Update Quiz by ID

- **Endpoint:** `/quizzes/:id`
- **Method:** `PUT`
- **Description:** Update a quiz by ID.
- Request Body:

  ```json
  {
    "question": "New Quiz Question",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctOption": 2
  }
  ```

**Response:**

- Status: 200 OK
- Body:

  ```json
  {
    "id": "quiz_id",
    "question": "New Quiz Question",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correctOption": 2,
    "createdAt": "Timestamp",
    "updatedAt": "New_Timestamp"
  }
  ```
