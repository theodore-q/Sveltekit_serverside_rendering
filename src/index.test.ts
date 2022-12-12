import { describe, it, expect } from 'vitest';
import { parseFloatToInt, ratioToGrade, convertYYYYMMDDToDate } from './helpers/helpers';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

describe('parseFloatToInt', () => {
	it('should convert a float to an int', () => {
		expect(parseFloatToInt('1.23')).toBe(123);
	});
});

describe('parseFloatToInt', () => {
	it('should convert a float to an int rounding it', () => {
		expect(parseFloatToInt('1.2335')).toBe(123);
	});
});

describe('ratioToGrade', () => {
	it('should return A for ratio > 0.1', () => {
		expect(ratioToGrade(0.1)).toBe('A');
	});
});

describe('ratioToGrade', () => {
	it('should return B for ratio > 0.11', () => {
		expect(ratioToGrade(0.11)).toBe('B');
	});
});

describe('ratioToGrade', () => {
	it('should return B for ratio > 0.30', () => {
		expect(ratioToGrade(0.11)).toBe('B');
	});
});

describe('ratioToGrade', () => {
	it('should return C for ratio > 0.31', () => {
		expect(ratioToGrade(0.31)).toBe('C');
	});
});

describe('ratioToGrade', () => {
	it('should return D for ratio > 0.51', () => {
		expect(ratioToGrade(0.51)).toBe('D');
	});
});

describe('convertYYYYMMDDToDate', () => {
	it('should return a date', () => {
		expect(convertYYYYMMDDToDate('2021', '01', '01')).toBeInstanceOf(Date);
	});
});
