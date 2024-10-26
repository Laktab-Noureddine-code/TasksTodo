import "./header.css";
export default function TodoHeader() {
  return (
    <div className="header-container">
      <div className="leftSide">
        {/*                          line */}
        <i className="ri-checkbox-circle-fill"></i>
        <h2>Lakfocus</h2>
      </div>
      <div className="rightSide">
        <button>
          <i className="ri-folder-chart-line"></i>
          <p>Report</p>
        </button>
        <button>
          <i className="ri-settings-4-fill"></i>
          <p>Settings</p>
        </button>
        <button>
          <p>Account</p>
        </button>
      </div>
    </div>
  );
}
