
export const filterBooks = books => {
	return [
		...new Map(
			books.map( book =>
				[book.id, book])
			).values()
	]
}