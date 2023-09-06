import { randomUUID } from "crypto";
import { sql } from './db.js'


export class DatabasePostgres  {
  

  async create(video) {
    const videoId = randomUUID();

    const { title, description, duration } = video; 

    await sql `insert into videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})` 
  }

  async update(id, video) {
    const { title, description, duration } = video;

    await sql `update videos set title = ${title}, description = ${description}, duration = ${duration} where id = ${id}`
  }

  async delete(id) {
    await sql `delete from videos where id = ${id}`
  }

  async list(search) {

    let videos

    if (search) {
      videos = await sql`
        SELECT * FROM videos WHERE title ILIKE ${'%' + {search} + '%'}
      `
    } else {
      videos = await sql`
        SELECT * FROM videos
      `

      return videos
    }
  }
}