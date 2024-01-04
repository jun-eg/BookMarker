export function addBookmark(url: string): Promise<any> {
    return fetch('http://localhost:8000/add_bookmark/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  }

export function deleteBookmark(url: string): Promise<any> {
  return fetch('http://localhost:8000/delete_bookmark/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error));
}

export function getBookmarks(): Promise<any> {
    return fetch('http://localhost:8000/get_bookmarks/', {
      method: 'GET',
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
  }

