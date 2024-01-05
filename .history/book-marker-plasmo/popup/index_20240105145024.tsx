import { useEffect, useState } from "react"

import { addBookmark, deleteBookmark, getBookmarks } from "./api"
import styles from "./index.module.css"

function IndexPopup() {
  const [url, setUrl] = useState("")
  const [isChecked, setIsChecked] = useState(false)
  const [message, setMessage] = useState("")
  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  const handleButtonClick = () => {
    setIsChecked(true)
    addBookmark(url)
    setMessage("保存されました！")
  }

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
          <label htmlFor="bookmarkCheck">保存する</label>
          <input
            type="checkbox"
            id="bookmarkCheck"
            checked={isChecked}
            onChange={toggleCheckbox}></input>
        </form>
        {message && <div className={styles.message}>{message}</div>}
        <button onClick={handleButtonClick}>保存</button>
      </div>
    </div>
  )
}

export default IndexPopup
