import {format, parseISO} from 'date-fns';
import React from 'react';

const Date = ({ dateString }: any) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
};

export default Date;