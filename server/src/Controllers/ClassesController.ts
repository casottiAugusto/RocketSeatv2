import { Request, Response } from 'express';
import db from '../database/connection';
import convertHoursToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request:Request,response:Response){
        const filters=request.query;
        const subject =filters.subject as string;
        const week_day = filters.week_day as string;
        const time =filters.time as string;
        if (!filters.week_day||!filters.subject|| !filters.time){
            return response.status(400).json({
                erro:'Missing filters to shearch classes'
            })
        }
        const timesInMinutes=convertHoursToMinutes(time);
        const classes =await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id`=`classes`.`id`')
            .whereRaw('`class_schedule`.`week_day`=??',[Number(week_day)])
            .whereRaw('`class_schedule`.`from`<=??',[timesInMinutes])
            .whereRaw('`class_schedule`.`to`>??',[timesInMinutes])
        })
        .where('classes.subject','=',subject)
        .join('users','classes.user_id','=','users.id')
        .select('classes.*','users.*')
        return response.json(classes);
    }
    async create(request:Request,response:Response) {
        const{name,avatar,whatsapp,bio,subject,cost,schedule}=request.body;
        const trx =await db.transaction()
        try {
            const insertdUserIds = await trx('users').insert({
                name, avatar, whatsapp,bio
            });
            const user_id = insertdUserIds[0]
            const insertedClassIds = await trx("classes").insert({
                subject, cost, user_id
            });
            const class_id =insertedClassIds[0];
            const classSchedule=schedule.map((scheduleItems:ScheduleItem)=>{
                return{
                    class_id,
                    week_day:scheduleItems.week_day,
                    from:convertHoursToMinutes(scheduleItems.from),
                    to:convertHoursToMinutes(scheduleItems.to)
                };
            })
            await trx('class_schedule').insert(classSchedule);
            await trx.commit();
            return response.status(201).send()
        } catch (erro) {
            await trx.rollback();
            console.log(erro);
            return response.status(400).json({
                error:'Unexpected erro white creating new class'
            })
        }
        
    }
};
