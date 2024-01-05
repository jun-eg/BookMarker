import type { Bookmark } from "./types"

// addBookmark function
export async function addBookmark(url: string): Promise<Bookmark> {
  try {
    const response = await fetch("http://127.0.0.1:8001/add_bookmark/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    })
    const data = await response.json()
    return data as Bookmark
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}

// deleteBookmark function
export async function deleteBookmark(url: string): Promise<Bookmark> {
  try {
    const response = await fetch("http://127.0.0.1:8001/delete_bookmark/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url })
    })
    const data = await response.json()
    return data as Bookmark
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}

// getBookmarks function
export async function getBookmarks(): Promise<Bookmark[]> {
  try {
    const response = await fetch("http://127.0.0.1:8001/get_bookmarks/", {
      method: "GET"
    })
    const data = await response.json()
    return data as Bookmark[]
  } catch (error) {
    console.error("Error:", error)
    throw error
  }
}
