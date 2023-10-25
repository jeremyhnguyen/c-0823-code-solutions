select "addresses"."line1",
       "cities"."name" as "cityName",
       "addresses"."district",
       "countries"."name" as "countryName"
       from "addresses"
       JOIN "cities" using ("cityId")
       JOIN "countries" using ("countryId");
