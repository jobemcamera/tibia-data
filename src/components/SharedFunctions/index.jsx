import 'moment-timezone';
import moment from 'moment-timezone';

export function openNewTab(link) {
	return () => {
		window.open(link, '_blank')
	}
}

export function formatDate(date, style) {
  const inputDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

  // Check if the input is in "YYYY-MM-DDTHH:mm:ssZ" format
  if (inputDateFormat.test(date)) {
    return moment.utc(date).tz('Europe/Paris').format(style);
  } else {
    // If the input is not in the above format, assume it's in "YYYY-MM-DD" format
    return moment(date).format(style);
  }
}