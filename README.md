## Project Name: SS Backend

#### Fully Functional and Flexible Production Ready Backend With JWT Cookie Based Authentication

### Prerequisites

- Node.js (v18.16.0 LTS) should be installed on your system. You can download it from [here](https://nodejs.org).

#### MongoDB

- The project uses MongoDB Cloud as a database. No need to integrate any DB Credentials.

### Getting Started

- To get you started you can simply clone the repository:

`git clone https://github.com/itzrizvi/SS-BACKEND-TASK-Shahriar-Rizvi.git`

- Open terminal on the root of the repo folder and run the following commands

- Install the dependencies

`npm install`

### Start the server

- Start the server with `npm run dev` command

<hr>

## API Docs

<hr>

### Main Three API's

### GET List and Single Item API of Movie and TV Show

### How the GET API Works

This API provides two main functionalities: retrieving a list of items and retrieving a single item.

- The `getItemList` query retrieves a paginated list of items, such as movies and TV shows.
- The `getSingleItem` query retrieves a single item based on its ID.

### Query Parameters and Types

#### `getItemList` Query:

- `query` (Object): An input object containing the following optional fields:
- `perPage` (Integer): The number of items to be displayed per page.
- `page` (Integer): The page number of the items to retrieve.

#### `getSingleItem` Query:

- `query` (Object): An input object containing the following field:
- `id` (String): The ID of the item to retrieve.

### Output

#### `getItemList` Output:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.
- `movies` (Array of Movie objects): The retrieved movies.
- `tvShows` (Array of TVShow objects): The retrieved TV shows.
- `pagination` (Object): An object containing pagination metadata:
- `page` (Integer): The current page number.
- `perPage` (Integer): The number of items per page.
- `totalItems` (Integer): The total number of items.
- `totalPages` (Integer): The total number of pages.

#### `getSingleItem` Output:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.
- `movie` (Movie object): The retrieved movie, if found.
- `tvShow` (TVShow object): The retrieved TV show, if found.

### Examples of GET Queries

#### GET LIST

#### Params

```
{
    "query":{
       "perPage":2,
       "page":1
    }
}
```

#### Query

```
query getItemList($query:GetItemListInput){
  getItemList(query:$query){
    message
    status
    movies {
        id
        title
        slug
        releaseDate
        runtime
        actors
        actresses
        producers
        genres
        directors
        productionTeam
        cameraAndItTeam
        visualEffectsTeam
        artTeam
        writers
        musicTeam
        locationDepartment
        costumeDepartment
        imdbRating
        origin
    }
    tvShows {
        id
        title
        slug
        seasons {
            season
            releaseDate
            totalRuntime
            episodes {
                episode
                title
                slug
                runtime
            }
        }
        actors
        actresses
        producers
        genres
        directors
        productionTeam
        cameraAndItTeam
        visualEffectsTeam
        artTeam
        writers
        musicTeam
        costumeDepartment
        imdbRating
        origin
    }
    pagination {
        page
        perPage
        totalItems
        totalPages
    }
  }
}
```

#### GET Single

#### Params

```
{
    "query":{
       "id":"6492a96a9facc9995281d9a7"
    }
}
```

#### Query

```
query getSingleItem($query:GetSingleItemInput){
  getSingleItem(query:$query){
    message
    status
    movie {
        id
        title
        slug
        releaseDate
        runtime
        actors
        actresses
        producers
        genres
        directors
        productionTeam
        cameraAndItTeam
        visualEffectsTeam
        artTeam
        writers
        musicTeam
        locationDepartment
        costumeDepartment
        imdbRating
        origin
    }
    tvShow {
        id
        title
        slug
        seasons {
            season
            releaseDate
            totalRuntime
            episodes {
                episode
                title
                slug
                runtime
            }
        }
        actors
        actresses
        producers
        genres
        directors
        productionTeam
        cameraAndItTeam
        visualEffectsTeam
        artTeam
        writers
        musicTeam
        costumeDepartment
        imdbRating
        origin
    }
  }
}
```

### How the Create Movie POST API Works:

- The API provides a mutation called `createMovie`.
- This mutation is used to create a new movie.
- The mutation expects a `CreateMovieInput` object as input, containing various details of the movie.
- Upon receiving the input, the API creates a new movie using the provided data.
- If the movie is created successfully, the API returns a success message.
- If there is an error during the creation process, the API returns an error message.

### Mutation Parameters and Types:

#### The mutation `createMovie` has a single parameter:

- data (Object of type CreateMovieInput): Contains the details of the movie to be created.

#### The `CreateMovieInput` type has the following required fields:

- `title` (String)
- `releaseDate` (String)
- `runtime` (String)
- `actors` (Array of Strings)
- `actresses` (Array of Strings)
- `producers` (Array of Strings)
- `genres` (Array of Strings)
- `directors` (Array of Strings)
- `productionTeam` (Array of Strings)
- `sponsors` (Array of Strings)
- `cameraAndItTeam` (Array of Strings)
- `visualEffectsTeam` (Array of Strings)
- `artTeam` (Array of Strings)
- `writers` (Array of Strings)
- `musicTeam` (Array of Strings)
- `locationDepartment` (Array of Strings)
- `costumeDepartment` (Array of Strings)
- `imdbRating` (String)
- `origin` (String)

### Output:

#### The output of the createMovie mutation is of type `CommonOutput`.

#### The CommonOutput type has the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): A value indicating the success or failure of the operation.

### Example

#### Payload

```
{
    "data":{
        "title": "The Conundrum",
        "releaseDate": "2024-05-30",
        "runtime": "112 minutes",
        "actors": ["Oliver Johnson", "Sophia Davis"],
        "actresses": ["Emily Thompson"],
        "producers": ["John Smith", "Emma Wilson"],
        "genres": ["Mystery", "Drama"],
        "directors": ["David Brown"],
        "productionTeam": ["Rachel Adams", "Thomas Lee"],
        "cameraAndItTeam": ["Daniel Miller", "Jessica Anderson"],
        "visualEffectsTeam": ["Robert Carter"],
        "artTeam": ["Olivia Wilson", "Daniel Thompson"],
        "writers": ["Sarah Johnson"],
        "musicTeam": ["Andrew Carter", "Grace Wilson"],
        "locationDepartment": ["Michael Smith"],
        "costumeDepartment": ["Ava Davis"],
        "imdbRating": "8.0",
        "origin": "United States"
    }
}
```

#### Mutation

```
mutation createMovie($data:CreateMovieInput){
  createMovie(data:$data){
    message
    status
  }
}
```

### How the Create TV Show POST API Works:

#### Description:

- The createTVShow mutation allows an authorized user to create a new TV show by providing the necessary information.
- This mutation requires authentication to ensure only authorized users can create TV shows.

### Mutation Parameters and Types:

- `data` (Object of type CreateTVShowInput): Contains the information required to create a new TV show.
- `title` (String!): The title of the TV show.
- `seasons` ([SeasonInput!]!): An array of season objects containing information about each season.
- `actors` ([String!]): An array of actor names involved in the TV show.
- `actresses` ([String!]): An array of actress names involved in the TV show.
- `producers` ([String!]): An array of producer names involved in the TV show.
- `genres` ([String!]): An array of genres associated with the TV show.
- `directors` ([String!]): An array of director names involved in the TV show.
- `productionTeam` ([String!]): An array of names of the production team members.
- `cameraAndItTeam` ([String!]): An array of names of the camera and IT team members.
- `visualEffectsTeam` ([String]): An array of names of the visual effects team members.
- `artTeam` ([String]): An array of names of the art team members.
- `sponsors` ([String]): An array of names of the sponsors associated with the TV show.
- `writers` ([String!]): An array of writer names involved in the TV show.
- `musicTeam` ([String!]): An array of names of the music team members.
- `costumeDepartment` ([String!]): An array of names of the costume department members.
- `imdbRating` (String!): The IMDb rating of the TV show.
- `origin` (String): The origin or country of the TV show.

### Output:

#### The output is of type CommonOutput.

#### CommonOutput contains the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): Indicates whether the operation was successful (true) or not (false).

### Authorization:

- The user must be authenticated to access this mutation.
- If the user is not authenticated, the mutation will return an error message indicating "Not Authorized".

### Example

#### Payload

```
{
    "data":{
        "title": "Breaking Bad",
        "seasons": [
            {
            "season": "1",
            "releaseDate": "2008-01-20",
            "totalRuntime": "8 hours",
            "episodes": [
                {
                "episode": "1",
                "title": "Pilot",
                "runtime": "58 minutes"
                },
                {
                "episode": "2",
                "title": "Cat's in the Bag...",
                "runtime": "48 minutes"
                },
                {
                "episode": "3",
                "title": "And the Bag's in the River",
                "runtime": "48 minutes"
                }
            ]
            },
            {
            "season": "2",
            "releaseDate": "2009-03-08",
            "totalRuntime": "10 hours",
            "episodes": [
                {
                "episode": "1",
                "title": "Seven Thirty-Seven",
                "runtime": "48 minutes"
                },
                {
                "episode": "2",
                "title": "Grilled",
                "runtime": "48 minutes"
                },
                {
                "episode": "3",
                "title": "Bit by a Dead Bee",
                "runtime": "47 minutes"
                }
            ]
            }
        ],
        "actors": ["Bryan Cranston", "Aaron Paul"],
        "actresses": ["Skyler", "Marrie"],
        "producers": ["Vince Gilligan", "Mark Johnson"],
        "genres": ["Crime", "Drama", "Thriller"],
        "directors": ["Vince Gilligan", "Michelle MacLaren"],
        "productionTeam": ["Peter Gould", "Melissa Bernstein"],
        "cameraAndItTeam": ["Michael Slovis", "Arthur Albert"],
        "visualEffectsTeam": ["William Powloski", "Gregory Nicotero"],
        "artTeam": ["Mark Freeborn", "Robb Wilson King"],
        "sponsors": [],
        "writers": ["Vince Gilligan", "Sam Catlin"],
        "musicTeam": ["Dave Porter"],
        "costumeDepartment": ["Kathleen Detoro"],
        "imdbRating": "9.5",
        "origin": "United States"
    }
}
```

#### Mutation

```
mutation createTVShow($data:CreateTVShowInput){
  createTVShow(data:$data){
    message
    status
  }
}
```

<hr>

## Authentications

An admin has all privileges including create, delete and update movie or tvshow and a user or guest visitor can only retrieve list of movies or tvshows or any specific one.

<hr>

### ADMIN Authentication

### How the API works briefly:

- The Admin API provides two operations: `adminSignUp` and `adminSignIn`.
- The `adminSignUp` mutation allows an admin user to sign up by providing their first name, last name, email, and password.
- The `adminSignIn` mutation allows an admin user to sign in by providing their email and password.
- Upon successful sign-up or sign-in, an authentication token (JWT) is generated, and it is returned in the response for further authorization and also set token to Cookie as it follows cookie based auth.

### Mutation Parameters and Types:

#### For adminSignUp:

- `data` (Object of type `AdminInput`): Contains the admin user's `first name, last name, email, and password`.

#### For adminSignIn:

- `email` (String): The email of the admin user.
- `password` (String): The password of the admin user.

### Output:

#### For adminSignUp and adminSignIn, the output is of type AdminAuthOutput.

### AdminAuthOutput contains the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): Indicates whether the operation was successful (true) or not (false).
- `data` (Object of type AuthPayload): Contains the authentication payload.

### AuthPayload contains the following fields:

- `authToken` (String): The authentication token (JWT) generated upon successful sign-up or sign-in.
- `id` (String): The ID of the admin user.
- `first_name` (String): The first name of the admin user.
- `last_name` (String): The last name of the admin user.
- `role` (String): The role of the admin user (Auto generated by routes).
- `email` (String): The email of the admin user.
- `User` API:

### USER Authentication

### How the API works briefly:

- The User API provides two operations: `userSignUp` and `userSignIn`.
- The `userSignUp` mutation allows a user to sign up by providing their `first name, last name, email, and password`.
- The `userSignIn` mutation allows a user to sign in by providing their email and password.
- Upon successful sign-up or sign-in, an authentication token (JWT) is generated, and it is returned in the response for further authorization.

### Mutation Parameters and Types:

#### For userSignUp:

- `data` (Object of type UserInput): Contains the user's first name, last name, email, and password.

#### For userSignIn:

- `email` (String): The email of the user.
- `password` (String): The password of the user.

### Output:

#### For userSignUp and userSignIn, the output is of type UserAuthOutput.

### UserAuthOutput contains the following fields:

- `message` (String): A message indicating the status of the operation.
- `status` (Boolean): Indicates whether the operation was successful (true) or not (false).
- `data` (Object of type AuthPayload): Contains the authentication payload.

### AuthPayload contains the following fields:

- `authToken` (String): The authentication token (JWT) generated upon successful sign-up or sign-in.
- `id` (String): The ID of the user.
- `first_name` (String): The first name of the user.
- `last_name` (String): The last name of the user.
- `role` (String): The role of the user (Auto generated by routes).
- `email` (String): The email of the user.
