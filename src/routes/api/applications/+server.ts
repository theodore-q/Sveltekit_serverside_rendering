import { json, type RequestEvent } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { DateTime } from 'luxon';

export type Application = {
	uid: string;
	created_at: Date;
	name: string;
	email: string;
	phone_number: string;
	date_of_birth: Date;
	address_line_1: string;
	postcode: string;
	income_salary: number;
	income_other: number;
	expenditure_mortgage: number;
	expenditure_rent: number;
	expenditure_utilities: number;
	expenditure_travel: number;
	expenditure_food: number;
	expenditure_loans: number;
	expenditure_credit_cards: number;
};

const isDate = (date: string) => DateTime.fromISO(date).isValid; // I don't know why zod doesn't have this built in

export const applicationSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone_number: z.string(),
	date_of_birth: z.string().refine(isDate, { message: 'Invalid date' }),
	address_line_1: z.string(),
	postcode: z.string(),
	income_salary: z.number().positive().optional(),
	income_other: z.number().positive().optional(),
	expenditure_mortgage: z.number().positive().optional(),
	expenditure_rent: z.number().positive().optional(),
	expenditure_utilities: z.number().positive().optional(),
	expenditure_travel: z.number().positive().optional(),
	expenditure_food: z.number().positive().optional(),
	expenditure_loans: z.number().positive().optional(),
	expenditure_credit_cards: z.number().positive().optional()
});

const prisma = new PrismaClient();

export async function POST({ request }: RequestEvent) {
	const data = await request.json();

	try {
		await applicationSchema.parseAsync(data);
	} catch (error) {
		return json(error, { status: 400 });
	}

	const body = await prisma.application.create({
		data
	});

	const status = 201;
	return json(body, { status });
}

// To peek at the data in the database, uncomment this: and head to http://localhost:5173/api/applications
// export async function GET({request}: RequestEvent) {
//   let body = {}
//   body = await prisma.application.findMany();
//   return json(body, { status: 200 });
// }
