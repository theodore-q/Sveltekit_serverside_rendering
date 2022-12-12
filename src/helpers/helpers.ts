// Submit response type
export type SubmitResponse = {
	success?: object | undefined;
	error?: object | undefined;
} | null;

export const parseFloatToInt = (value: string) => {
	return Math.floor(parseFloat(value) * 100);
};

export const ratioToGrade = (ratio: number) => {
	if (ratio > 0.5) {
		return 'D';
	} else if (ratio > 0.3) {
		return 'C';
	} else if (ratio > 0.1) {
		return 'B';
	} else {
		return 'A';
	}
};

export const convertYYYYMMDDToDate = (
	date_of_birth_yyyy: string,
	date_of_birth_mm: string,
	date_of_birth_dd: string
) => {
	const date = new Date(
		parseInt(date_of_birth_yyyy),
		parseInt(date_of_birth_mm) - 1,
		parseInt(date_of_birth_dd)
	);
	return date;
};
