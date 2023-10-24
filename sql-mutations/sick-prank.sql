update "films"
set "rating" = 'G'
where "rating" = 'NC-17';

select *
       from "films"
       where "rating" = 'NC-17';

select *
       from "films"
       where "rating" = 'G';
