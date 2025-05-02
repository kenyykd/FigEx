# FigEx-project

1.  **克隆專案 (Clone Repository)**

    將遠端專案完整複製到你的本地電腦。

    ```bash
    git clone [你的專案網址]
    ```

    - 請將 `[你的專案網址]` 替換為實際的 Git 專案 URL (例如：`https://github.com/username/repository.git` 或 `git@github.com:username/repository.git`)。

2.  **建立並切換到新分支 (Checkout/Create Branch)**

    切換到一個新的分支進行你的開發工作。這樣可以避免直接在主分支（通常是 `main` 或 `master`）上修改，方便管理變更並進行協作。

    ```bash
    git checkout -b [你的分支名稱]
    ```

    - 請將 `[你的分支名稱]` 替換為一個能描述你工作內容的名稱 (例如：`feature/add-user-profile`, `fix/login-bug`)。
    - `-b` 參數表示如果該分支不存在，則新建該分支並立即切換過去。

3.  **新增變更到暫存區 (Add Changes)**

    將你修改或新增的檔案加入到 Git 的暫存區 (Staging Area)，這些變更將會被包含在下一次的提交 (commit) 中。

    ```bash
    git add .
    ```

    - `.` 表示將所有追蹤中的、有變更的檔案加入暫存區。
    - 你也可以指定特定的檔案或資料夾，例如 `git add src/index.js` 或 `git add docs/`。

4.  **查看檔案狀態 (Check Status) - _可選步驟_**

    隨時檢查目前工作區和暫存區的檔案狀態，了解哪些檔案被修改、新增或刪除，以及哪些已在暫存區等待提交。這個步驟可以在 `git add` 之前或之後執行。

    ```bash
    git status
    ```

5.  **提交變更 (Commit Changes)**

    將暫存區中的變更正式記錄到你的本地分支歷史中，並附上一條簡潔的提交訊息，說明這次變更的內容。

    ```bash
    git commit -m "你的提交訊息"
    ```

    - 請將 `"你的提交訊息"` 替換為具體描述本次提交內容的文字，例如："feat: 新增使用者註冊功能" 或 "fix: 修正首頁排版問題"。好的提交訊息有助於追蹤專案歷史。

6.  **推送到遠端分支 (Push to Remote)**

    將你的本地分支上的提交推送到遠端倉庫的對應分支。

    ```bash
    git push -u origin [你的分支名稱]
    ```

    - 請將 `[你的分支名稱]` 替換為你在步驟 2 中建立的分支名稱。
    - `-u origin [你的分支名稱]` 通常只需要在**第一次**推送該分支時使用。它會設定你的本地分支追蹤 `origin` 這個遠端倉庫上的同名分支。
    - 之後，如果你在同一個分支上繼續工作並提交變更，可以直接使用 `git push` 將變更推送到遠端。

---

完成以上步驟後，你的變更就會被推送到遠端倉庫的個人分支上。接下來，通常會建立一個 Pull Request (或 Merge Request) 來請求將你的分支合併到主分支或開發分支。
