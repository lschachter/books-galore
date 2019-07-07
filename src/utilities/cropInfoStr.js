
export const cropInfoStr = (infoStr, maxLen) => {
	if (infoStr === undefined) {
		return "";
	} else if (infoStr.length > maxLen) {
		return infoStr.slice(0, maxLen).trim()  + "...";
	} else {
		return infoStr;
	}
}