import { integer, pgTable,serial,text } from 'drizzle-orm/pg-core';

import * as schema from './schema';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { relations } from 'drizzle-orm';
export const courses=pgTable("courses",{
    id:serial("id").primaryKey(),
    title:text("title").notNull(),
    imageSrc:text("image_src").notNull()

})
export const courseRelations =relations(courses, ({many})=>({
    userProgress: many(userProgress)
}));

export const userProgress=pgTable("user_progress",{
    userId:text("user_id").primaryKey(),
    userName:text("user_name").notNull().default("User"),
    userImageSrc:text("image_src").notNull().default("/Planes/planeBlue1.png"),
    activeCourseId: integer("active_course_id").references(()=>courses.id,{onDelete:"cascade"}),
    hearts: integer("hearts").notNull().default(5),
    points:integer("points").notNull().default(0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

})
export const userProgressRelations =relations(userProgress, ({one})=>({

    activeCourse : one(courses,{
        fields: [userProgress.activeCourseId],
        references:[courses.id]
    })
}));

// const sql = neon(process.env.DATABASE_URL!);
// const db :any= drizzle(sql,{schema});
// export default db;
