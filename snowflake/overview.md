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

Certifications must be renewed with a recertification exam every two years. If you pass one of the advanced certification exams, that automatically resets the two-year clock for the SnowPro Core certification. 

## Events
Snowflake hosts events, like Data for Breakfast (in-person, early in the year), Snowday (virtual in November), and Snowflake Summit (in person in June). Information on upcoming events can be found [here](https://www.snowflake.com/en/events/). 

## Where to Get Help
- [Snowflake docs](https://oreil.ly/NFW9e)
- [Snowflake Knowledge Base](https://oreil.ly/H3dlg)
- [Snowflake Community](https://oreil.ly/9VdWq)
- [Snowflake Stack Overflow](https://oreil.ly/etOvg) 

# Basics 

## Best Practices for Naming Objects 
- Use abbreviations when possible
  - DEV - Development environment
  - EXT - External
  - FB - Feature Branch environment
  - FF - File format
  - POC - Proof of Concept environment
  - PROD - Production environment
  - QA - Test / Quality Assurance environment
  - SP - Stored Procedure
  - TSK - Task
  - DB - Database
  - INT - Integration
  - MVW - Materialized View
  - RM - Resource Monitor
  - STG - Stage
  - SVC - Service Accounts
  - TBL - Table
  - VW - View
  - WH - Warehouse
- Keep names short (<= 8 characters is ideal, <= 24 for almost everything else) and meaningful
- Either use all upper-case or all lower-case
- Use an underscore _ instead of whitespace, but avoid needing this when possible 
- Use singular terms for tables and fields
- Don't use special characters
- Use the specific Snowflake-defined role for specific objects
  - ACCOUNTADMIN - Create accounts, credentials, data exchange listings, integrations, and shares
  - SYSADMIN - Create databases and warehouses
  - USERADMIN - Create roles and users
- Use `IF NOT EXISTS` whenever you create new objects
- Standardize all spelling / terms for a single language and region (like American English)
- Don't use prepositions
  - for, of, in, on, at, by, from, to, with, without, into, through, between, under, over, before, after, during, against, per, etc.
- Adjectives should go before noun, not after
- Don't use generic phrases like "other" or "misc"
- Don't use prefixes for tables and columns
- Don't use a name for one object that's already being used by another object (ex. don't give a temporary table the same name as a permanent table even though it's technically possible to)
- Don't use reserved words
  - account, all, alter, and, any, as, between, by, case, cast, check, column, connect, connection, constraint, create, cross, current, database, delete, distinct, drop, else, exists, false, following, for, from, full, grant, group, gscluster, having, ilike, in, increment, inner, insert, intersect, into, is, issue, join, lateral, left, like, localtime, localtimestamp, minus, natural, not, null, of, on, or, order, organization, qualify, regexp, revoke, right, rlike, row, rows, sample, schema, select, set, some, start, table, tablesample, then, to, trigger, true, try_cast, union, unique, update, using, values, view, when, whenever, where, window, with

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
You can set the context for a worksheet by using `USE` for roles, warehouses, and databases. 

```sql
USE DATABASE <database_name> 
```

