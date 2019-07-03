
export const search = async (topic, start_index) => {
	let base_url = "https://www.googleapis.com/books/v1/volumes?q=" ;
  const api_url = base_url + topic + "&start-index=" + start_index;
  const response = await fetch(api_url);
  const books_json = await response.json();

  if (response.status !== 200) throw Error(books_json.message);
  return books_json;
}