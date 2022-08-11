// Movies		
// {
//     "_id": {
//         "$oid": string
//     },
//     "movie_id": int,
//     "director": string,
//     "release_year": int,
//     "ratings": int,
//     "movie_name": string,
//     "country": string,
//     "genre": string,
//     "actors": [int],
//     "company": {
//         "name": string,
//         "start_year": int,
//         "country": string
//     }
// }

// Actors
// {
//     "_id": {
//         "$oid": string
//         },
//     "actor_id": int,
//     "actor_name": string,
//     "birth_country": string
// }

// Viewers
// {
//     "_id": {
//         "$oid": string
//     },
//     "viewer_id": int,
//     "viewer_name": string,
//     "birth_year": int,
//     "join_year": int,
//     "fav_movie": int,
//     "fav_actors": [int],
//     "fav_directors": [string]
// }

// We group the viewer using the age they joined this movie club. Viewer's will be clustered into 5-year buckets. This means that a user born in 1982 and joined in 1993 would mean they joined the club at age 11 which belongs to joined_age = 15. This is equivalent to the following formula:
// joined_age = CEIL((joined_year - birth_year) / 5) * 5
// Write one MongoDB query that returns the number of favorite UK actors (actors.birth_country) for each joined_age group without eliminating duplicates. In addition, the query should also calculate, among the viewers who liked UK actors, the average ratings of their favorite movies (viewers.fav_movie) that were produced in the UK (Movies.country) per joined_age group. Note that you should eliminate duplicate movies when calculating the average rating.
// Return for each joined_age group (as joined_age), the number of favorite UK actors (as num_actors), and the average ratings of the group's favorite UK movies(as avg_fav_mov_rating) if the viewer liked some UK actors. Sort the results by the joined_age in ascending order.