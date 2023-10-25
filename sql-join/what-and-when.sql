select "f"."releaseYear",
       "g"."name"
       from "genres" as "g"
       JOIN "filmGenre" as "fg" using ("genreId")
       JOIN "films" as "f" using ("filmId")
       where "f"."title" = 'Boogie Amelie'
