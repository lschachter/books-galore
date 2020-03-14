
// fetches book data from google books api based on topic 
// and startIndex to allow for fetching more books on scroll
export const search = async (topic, startIndex) => {
	let baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  const apiUrl = baseUrl + topic + "&startIndex=" + startIndex;
  try {
    const response = await fetch(apiUrl);
    const booksJson = await response.json();
    if (response.status !== 200) throw Error(booksJson.message);
    // api still returns json object on no data
    return booksJson;
  } catch(err) {
    console.log(err);
    return JSON.stringify({});
  }
}