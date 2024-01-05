import { addBookmark, deleteBookmark, getBookmarks } from "./api"
import styles from "./index.module.css"

function IndexPopup() {
  //   return <div className={styles.container}><h1>現在のページを保存しますか</h1></div>
  // <div>
  //   <div classname=styles.container>
  //   <form action='送信先' method='送信メソッド'></form>
  //   <input type="submit" value="フォーム"></input>
  //   <div></div>
  // </div>

  // <div>
  //   <div classname=styles.container></div>
  //   <button></button>
  //   <div>保存</div>
  // </div>
  return (
    <div className={styles.container}>
      <div>
        <h1>現在のページを保存しますか</h1>
        <form action="送信先" method="送信メソッド">
          <label htmlFor="name">現在のurl </label>
          <input type="text" id="test" name="url"></input>
        </form>
        <button></button>
      </div>
    </div>
  )
}

export default IndexPopup
