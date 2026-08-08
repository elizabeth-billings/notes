# Sources 
- *Snowflake: The Definitive Guide* (v1) by Joyce Kay Avila
- [Snowflake Academy / Learn](https://learn.snowflake.com/en/)

# Non-Technical Stuff 

## User Groups
There are user groups in different cities / regions [that can be found here](https://usergroups.snowflake.com/). 

## Certifications 
Info on certifications can be found [here](https://www.snowflake.com/en/resources/learn/certifications/). All possible "paths" begin with the **SnowPro Core certification**. After that you can specialize in areas like: 
- Administrator
- Architect
- Data Analyst
- Data Engineer
- Data Scientist
- Security Engineer 

# Basics 

## Auto Format SQL 
CTRL + ALT + O or hit ... in top right of editor and select "Format SQL". 

## Version History
Editor auto-saves file every time you run a query. Click ... in the top right corner of editor and select "version history" to see / restore previous version of file. 

## Get system info
```SQL
SELECT CURRENT_ROLE();
SELECT CURRENT_WAREHOUSE();
SELECT CURRENT_DATABASE(); 
```

## Use
```sql
USE DATABASE <database_name> 
```
