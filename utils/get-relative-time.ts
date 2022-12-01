import { DateTime } from 'luxon';

export const getRelativeTime = (date: string) =>
  DateTime.now()
    .plus(DateTime.fromISO(date).diffNow(['seconds']))
    .toRelative({ locale: 'pl' });
