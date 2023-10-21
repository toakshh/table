import { useState } from 'react'
import './App.css'
const articleData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function App() {
  const [tableData, setTableData] = useState(articleData);
  const [sort, setSort] = useState(null);

  const handleSortByViews = () => {
    const sortData = tableData?.slice().sort((a, b) => {
      if (a.views === b.views) {
        return a.date.localeCompare(b.date);
      }
      return a.views - b.views;
    });
    setTableData(sort === "views" ? sortData.reverse() : sortData);
    setSort("views");
  };

  const handleSortByDate = () => {
    const sortData = tableData.slice().sort((a, b) => {
      if (a.date === b.date) {
        return a.views - b.views;
      }
      return a.date.localeCompare(b.date);
    });
    setTableData(sort === "date" ? sortData.reverse() : sortData);
    setSort("date");
  };

  return (
    <div className="table__container">
      <h1>Date and Views Table</h1>

      <div className="table__btn">
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>

      <table className="table__table">
        <thead>
          <tr>
            <th>Article</th>
            <th>Views</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {tableData?.map((item, i) => (
            <tr key={i}>
              <th>{item.article}</th>
              <th>{item.views}</th>
              <th>{item.date}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App
