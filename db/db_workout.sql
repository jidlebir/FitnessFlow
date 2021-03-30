-- Create a new database called 'Workouts'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'Workouts'
)
CREATE DATABASE Workouts
GO

-- Create a new table called 'WorkoutID' in schema 'SchemaName'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.WorkoutID', 'U') IS NOT NULL
DROP TABLE SchemaName.WorkoutID
GO
-- Create the table in the specified schema
CREATE TABLE SchemaName.WorkoutID
(
    WorkoutIDId INT NOT NULL PRIMARY KEY, -- primary key column
    Column1 [NVARCHAR](50) NOT NULL,
    Column2 [NVARCHAR](50) NOT NULL
    -- specify more columns here
);
GO

-- Select rows from a Table or View 'WorkoutType' in schema 'SchemaName'
SELECT * FROM SchemaName.WorkoutType
WHERE 	/* add search conditions here */
GO