import UserResult from "../models/UserResult";

export interface IRepository<T> { 
  getAll(filter: any|undefined): Promise<T[] | null>; 
}

export class UserResultRepository implements IRepository<UserResult> {

  async getAll(): Promise<UserResult[] | null> {

    return [
        { id: 1,
            announcement: {
                id: 1,
                topic: '240-124 Midterm 1/2566',
                description: 'คะแนนกลางภาควิชา Web Dev',
                remarkIfPositive: '',
                pubDateTime:new Date('2022-09-08 10:00:00')
            },
            result: '24.5',
            resultType: 1,
            remark: 'โดนหักคะแนนจากการเข้าสอบสาย',
            isPinned: false,
            viewDateTime: new Date(''),
            ackDateTime: new Date(''),
            updateDateTime: new Date('2022-09-07 09:12:31'),
            expireDateTime: new Date(''),
            userCode: '6210110010' },
        { id: 2,
            announcement: {
                id: 1,
                topic: '240-124 Midterm 1/2566',
                description: 'คะแนนกลางภาควิชา Web Dev',
                remarkIfPositive: '',
                pubDateTime:new Date('2022-09-08 10:00:00')
            },
            result: '30.1',
            resultType: 1,
            remark: '',
            isPinned: false,
            viewDateTime: new Date(''),
            ackDateTime: new Date(''),
            updateDateTime: new Date('2022-09-07 11:12:00'),
            expireDateTime: new Date(''),
            userCode: '6210110227' },
        { id: 3,
            announcement: {
                id: 2,
                topic: 'ทุนเรียนดีประจำปี 2566',
                description: 'test',
                remarkIfPositive: 'ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดีทุกคนด้วย',
                pubDateTime:new Date('2022-09-09 08:00:00')
            },
            result: 'ได้รับทุน',
            resultType: 1,
            remark: '',
            isPinned: false,
            viewDateTime: new Date(''),
            ackDateTime: new Date(''),
            updateDateTime: new Date('2022-09-07 09:12:31'),
            expireDateTime: new Date(''),
            userCode: '6210110227' }

    ]

  }
}