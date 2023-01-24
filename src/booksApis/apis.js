const userKey = 'z8IxFG3XkX33pkQhuGYP';
const bookURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${userKey}/books`;

const apis = {
  addBooks: async ({
    id, title, author, category,
  }) => {
    await fetch(bookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    });
  },

  removeBook: async (id) => {
    await fetch(`${bookURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  fetchBooks: async () => {
    const resp = await fetch(bookURL);
    const data = await resp.json();

    const books = Object.entries(data).map(([id, book]) => {
      const { title, author, category } = book[0];
      return {
        id, title, author, category,
      };
    })
      .sort((a, b) => a.title.localeCompare(b.title));

    return books;
  },
};

export default apis;
