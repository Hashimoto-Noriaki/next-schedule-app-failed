import React from 'react'

const TopPage = () => {
  return (
    <header>
        <div className="flex justify-between">
            <p>スケジュール管理</p>
            <nav>
              <ul className="flex gap-7">
              <p>利用方法</p>
              <p>ログイン</p>
              </ul>
            </nav>
        </div>
    </header>
  )
}

export default TopPage;