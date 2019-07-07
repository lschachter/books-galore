
export const search = async (topic, startIndex) => {
	let baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const apiUrl = baseUrl + topic + "&startIndex=" + startIndex;
  const response = await fetch(apiUrl);
  const booksJson = await response.json();
  if (response.status !== 200) throw Error(booksJson.message);
  return booksJson;
}