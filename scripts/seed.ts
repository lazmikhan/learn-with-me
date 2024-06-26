import "dotenv/config"

import * as schema from "../db/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!!);
const db = drizzle(sql, {schema});
const main = async()=>{
    try{
        console.log("seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress)
        await db.insert(schema.courses).values([
          {
            id: 1,
            title: "Hindi",
            imageSrc:"/flags/india.png"
          },
          {
            id: 2,
            title: "Portuguese",
            imageSrc:"/flags/brazilpng.png"
          },
          {
            id: 3,
            title: "Bangla",
            imageSrc:"/flags/bangladesh.png"
          },
          {
            id: 4,
            title: "Spanish",
            imageSrc:"/flags/Spain.png"
          },
          {
            id: 5,
            title: "Malay",
            imageSrc:"/flags/malaysiapng.png"
          }

        ])
        console.log("seeding completed");
    }catch(error){
        throw new Error("Failed to seed data");
    }
}
main();