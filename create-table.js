import { sql } from "./db.js";

/*sql`DROP TABLE if exists videos;`.then(() => {
  console.log("Tabela removida com sucesso!");
});
*/
sql`
  CREATE TABLE videos (
    id          TEXT PRIMARY KEY,
    title       TEXT,
    description TEXT,
    duration    INTEGER
  );
`.then(() => {
  console.log("Tabela criada com sucesso!");
});
