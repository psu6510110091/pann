import UserResult from "../models/UserResult";
import { IRepository } from "./IRepository";

export class UserResultRepository implements IRepository<UserResult> {

  async getAll(): Promise<UserResult[] | null> {

    return [
      {
        "id": 1,
        "announcement": {
            "id": 1,
            "topic": "240-124 Midterm 1/2566",
            "description": "คะแนนกลางภาควิชา Web Dev",
            "pubDateTime": new Date("2022-09-08T03:00:00.000Z")
        },
        "result": "24.5",
        "resultType": 1,
        "remark": "โดนหักคะแนนจากการเข้าสอบสาย",
        "isPinned": false,
        "viewDateTime": null,
        "ackDateTime": null,
        "updateDateTime": new Date("2022-09-07T02:12:31.000Z"),
        "expireDateTime": null,
        "userCode": "6210110010"
      },
      {
        "id": 2,
        "announcement": {
            "id": 1,
            "topic": "240-124 Midterm 1/2566",
            "description": "คะแนนกลางภาควิชา Web Dev",
            "pubDateTime": new Date("2022-09-08T03:00:00.000Z")
        },
        "result": "30.1",
        "resultType": 1,
        "remark": "",
        "isPinned": false,
        "viewDateTime": null,
        "ackDateTime": null,
        "updateDateTime": new Date("2022-09-07T04:12:00.000Z"),
        "expireDateTime": null,
        "userCode": "6210110227"
      },
      {
        id: 3,
        announcement: {
            id: 2,
            topic: "ทุนเรียนดีประจำปี 2566",
            description: "test",
            remarkIfPositive: "ขอแสดงความยินดีกับผุ้ได้รับทุนเรียนดีทุกคนด้วย",
            pubDateTime: new Date("2022-09-09T08:00:00.000Z")
        },
        result: "ได้รับทุน",
        resultType: 1,
        remark: "",
        isPinned: false,
        viewDateTime: null,
        ackDateTime: null,
        updateDateTime: new Date("2022-09-08T03:12:30.000Z"),
        expireDateTime: null,
        userCode: "6210110227"
      }
  ]
}
}