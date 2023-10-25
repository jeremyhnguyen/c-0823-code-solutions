# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  C: insert
  R: select
  U: update
  D: delete
- How do you add a row to a SQL table?
  using an 'insert' statement

insert into "table"
values ("value", "value2",,,)

- note: tuple format
  add returning clause to make it return the inserted row
- How do you add multiple rows to a SQL table at once?
  insert into ...
  values (val1, val2 ,val3, etc)
- How do you update rows in a database table?
  use 'update' statement

update "table"
set "value" = (...)
where "id" = (...)

- How do you delete rows from a database table?
  use 'delete' statement

delete
from "table"
where "value" = (...)
and "value" = (...)
returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  so that you only update or delete the specified entry and not all data at that value
- How do you accidentally delete or update all rows in a table?
  not specifying the where clause to just the id to be modified
- How do you get back the modified row without a separate `select` statement?
  use returning \*;

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
