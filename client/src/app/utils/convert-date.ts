import { ICourseDate } from './../state/event/event.model';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function convertDate(date: ICourseDate) {
  const month = months[date.month - 1];
  return `${date.day} ${month} ${date.year}`;
};
