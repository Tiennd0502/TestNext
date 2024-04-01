import dayjs, { Dayjs } from "dayjs";

/**
 * Format by date time
 * Ex: 2024-02-04T02:50:02.319095+00:00 --> Feb 04, 2024
 * @param value string
 * @returns string
 */
export const formatDateTime = (value: Date | Dayjs) =>
  dayjs(value).format("MMM D, YYYY");
