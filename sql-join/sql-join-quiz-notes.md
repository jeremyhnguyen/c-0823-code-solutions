# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  a foreign key establishes a relationship between tables by referencing the primary key of another table

a key used to link two tables together

- How do you join two SQL tables? (Provide at least two syntaxes.)

1. SQL join clause (using foreign key that matches primary key)
   select \*
   from "table name"
   join "table name 2" using (foreign key (usually id))
2. SQL join (alternate)
   select \*
   from "table name"
   join "table 2" on "table 1"."foreign key" = "table 2"."primary key"

- How do you temporarily rename columns or tables in a SQL statement?
  aliasing the column names (as keyword)

select "table 1"."name column" as "value",
"table 2"."name column" as "value"
from "table 1"
join "table 2" using "foreign key"

can also alias in the from/join clauses to make writing the statement faster
can also filter a joined result set with a where clause

- How do you create a one-to-many relationship between two tables?
  making the foreign key in one table point to the primary key in another table
- How do you create a many-to-many relationship between two tables?
  making a 3rd table which contains a foreign key to the other 2 tables (uses 2 different ids to manage multiple relationships)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
