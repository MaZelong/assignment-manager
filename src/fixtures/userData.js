/**
 * Created by devin on 1/4/16.
 */
import moment from 'moment';
export default {
  phmx601: {
    instructor: "Vijay",
    assignments:[
      {
        assignmentName: 'A1',
        dueDate: moment().add(1, 'days')
      },
      {
        assignmentName: 'A2',
        dueDate: moment().add(5, 'days')
      },
      {
        assignmentName: 'P3',
        dueDate: moment().add(20, 'days')
      }
    ]
  },
  phmx602: {
    instructor: "Joga",
    assignments:[
      {
        assignmentName: 'PP1',
        dueDate: moment().subtract(20, 'days')
      },
      {
        assignmentName: 'PP2',
        dueDate: moment().subtract(10, 'days')
      },
      {
        assignmentName: 'P1',
        dueDate: moment().add(30, 'days')
      }
    ]
  }
}