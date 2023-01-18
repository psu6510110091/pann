import Announcement from "../models/Announcement";

export interface IRepository<T> { 
  getAll(filter: any|undefined): Promise<T[] | null>; 
}

export class AnnouncementRepository implements IRepository<Announcement> {
  
  async getAll(): Promise<Announcement[] | null> {

    return [
      { id: 1, topic: '240-124 Midterm 1/2566',description: 'คะแนนกลางภาควิชา Web Dev',remarkIfPositive:'',remarkIfNegative:'',pubDateTime:new Date('2022-09-08 10:00:00'), userCode: 'suthon.s'},
      { id: 2, topic: 'ทุนเรียนดีประจำปี 2566',description: 'test',remarkIfPositive:'ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดีทุกคนด้วย',remarkIfNegative:'',pubDateTime:new Date('2022-09-09 15:00:00'), userCode: 'suthon.s'}
    ]

  }
}