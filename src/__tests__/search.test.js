import { search } from ".././utilities/search";


it('fetches data from google books api when api returns a successful response', done => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({ 
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); 

  search("hello", 0);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=hello&startIndex=0');

  global.fetch.mockClear();
  done();
});

