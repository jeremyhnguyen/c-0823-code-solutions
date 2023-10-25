select "a"."firstName",
       "a"."lastName"
       from "castMembers"
       JOIN "actors" as "a" using ("actorId")
       JOIN "films" as "f" using ("filmId")
       where "f"."title" = 'Jersey Sassy'
