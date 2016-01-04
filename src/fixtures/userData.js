/**
 * Created by devin on 1/4/16.
 */
import moment from 'moment';
export default {
  phmx601: {
    assignments:[
      {
        name: 'A1',
        dueDate: moment().add(1, 'days')
      },
      {
        name: 'A2',
        dueDate: moment().add(5, 'days')
      },
      {
        name: 'P3',
        dueDate: moment().add(20, 'days')
      }
    ]
  },
  phmx602: {
    assignments:[
      {
        name: 'PP1',
        dueDate: moment().subtract(20, 'days')
      },
      {
        name: 'PP2',
        dueDate: moment().subtract(10, 'days')
      },
      {
        name: 'P1',
        dueDate: moment().add(30, 'days')
      }
    ]
  }
}