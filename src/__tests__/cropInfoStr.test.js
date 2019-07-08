import { cropInfoStr } from ".././utilities/cropInfoStr";

it('crops inputStr at given maxLength', () => {
	let inputStr = "This author's name is very very long";
	let maxLength = 15;

	expect(cropInfoStr(inputStr, maxLength)).toBe("This author's n...");
});

it('does not crop or ... an inputStr shorter than maxLength', () => {
	let inputStr = "This author";
	let maxLength = 15;

	expect(cropInfoStr(inputStr, maxLength)).toBe("This author");
});

it('returns an empty str on an undefined input', () => {
	let inputStr = undefined;
	let maxLength = 15;

	expect(cropInfoStr(inputStr, maxLength)).toBe("");
});