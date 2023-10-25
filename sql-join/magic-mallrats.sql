select "c"."firstName",
       "c"."lastName"
       from "customers" as "c"
       JOIN "rentals" using ("customerId")
       JOIN "inventory" using ("inventoryId")
       JOIN "films" using ("filmId")
       where "title" = 'Magic Mallrats'
