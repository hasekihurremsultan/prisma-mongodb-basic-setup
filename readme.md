### Introduction to Prisma with MongoDB: A Guide to Getting Started
The purpose of this repository is to provide a basic setup for using Prisma, MongoDB, and TypeScript together.
It aims to demonstrate how to connect to a MongoDB database using Prisma as the ORM (Object-Relational Mapping) tool, and how to write TypeScript code to interact with the database.

![Terminal Output](images/output.png)

The image above is a screenshot from the project's terminal.

## Setup
1. Prerequisites:
   - Node.js and npm (Node Package Manager) should be installed on your system.
   - Make sure you have a MongoDB database set up or access to an existing MongoDB instance.

2. Clone the Repository:
   - Start by cloning this repository to your local machine using Git.

3. Install Dependencies: 
   - Open a terminal or command prompt and navigate to the cloned repository's directory.
   - Run the command `npm install` to install the required dependencies. This will fetch and install the necessary packages, including Prisma, MongoDB drivers, and TypeScript-related packages.

4. Configure Prisma:
   - In the repository, you'll find a prisma directory. Inside that directory, you'll see a schema.prisma file.
   - Open *schema.prisma* and modify the connection details according to your MongoDB setup. Update the url field with your MongoDB connection string.

5. Generate Prisma Client:
   - After configuring schema.prisma, run the command `npm run prismagen` in the terminal. This will generate the Prisma client based on the schema and create the necessary files for interacting with the database.

6. Start test environment:
   - Finally, run the command `npm start` in the terminal to start the test environment. That's it!

##### Sources
- [Prisma Documentation](https://www.prisma.io/docs)
- [Mongodb Cloud](https://cloud.mongodb.com)

##### Extras
I used [mongodb compass](https://www.mongodb.com/products/compass) to compare and retrieve my data.

![Mongodb Compass](images/mongo-compass.png)