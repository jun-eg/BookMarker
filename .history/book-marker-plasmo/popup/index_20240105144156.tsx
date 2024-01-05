import { useEffect, useState } from "react"

import { addBookmark, deleteBookmark, getBookmarks } from "./api"
import styles from "./index.module.css"

const toggleCheckbox = () => {
  setIsChecked(!isChecked)
}

function IndexPopup() {
  const [url, setUrl] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const queryInfo = { active: true, currentWindow: true }
    chrome.tabs.query(queryInfo, (tabs) => {
      const currentTab = tabs[0]
      setUrl(currentTab.url)
    })
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <h1>現在のページを保存しますか</h1>
        <form action="送信先" method="送信メソッド">
          <label htmlFor="name">現在のurl </label>
          <input type="text" id="test" name="url" value={url}></input>
        </form>
        <button onClick={() => addBookmark(url)}>保存</button>
      </div>
    </div>
  )
}

export default IndexPopup
