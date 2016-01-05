/**
 * Created by devin on 1/4/16.
 */
import moment from 'moment';
export default {
  phmx601: {
    assignments:[
      {
        courseName: 'A1',
        dueDate: moment().add(1, 'days')
      },
      {
        courseName: 'A2',
        dueDate: moment().add(5, 'days')
      },
      {
        courseName: 'P3',
        dueDate: moment().add(20, 'days')
      }
    ]
  },
  phmx602: {
    assignments:[
      {
        courseName: 'PP1',
        dueDate: moment().subtract(20, 'days')
      },
      {
        courseName: 'PP2',
        dueDate: moment().subtract(10, 'days')
      },
      {
        courseName: 'P1',
        dueDate: moment().add(30, 'days')
      }
    ]
  }
}