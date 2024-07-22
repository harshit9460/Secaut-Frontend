import PropTypes from "prop-types";
import "./greetings.css";

const Greetings = ({ className = "" }) => {
  return (
    <div className={`greetings ${className}`}>
      <div className="hello-james-parent">
        <h1 className="hello-james">Hello James,</h1>
        <div className="manage-all-users1">
          Manage all users of your application at one place
        </div>
      </div>
      <div className="user-stats">
        <div className="people-stat">
          <img
            className="people-icon"
            loading="lazy"
            alt=""
            src="/people@2x.png"
          />
          <div className="people-count">
            <div className="total-user-count">Total User Count</div>
          </div>
        </div>
        <div className="add-users">
          <div className="plus-icon">
            <div className="m">
              <span>2.6</span>
              <span className="m1">M</span>
            </div>
            <div className="plus">plus</div>
          </div>
        </div>
      </div>
      <div className="chart-container-parent">
        <div className="chart-container">
          <div className="chart">
            <div className="chart-header">
              <img className="project-icon9" alt="" src="/project1@2x.png" />
            </div>
            <div className="chart-content">
              <div className="grid-data">
                <div className="graphgrid">
                  <div className="bars" />
                  <div className="bars1" />
                  <div className="bars2" />
                  <div className="bars3" />
                  <div className="bars4" />
                  <div className="bars5" />
                  <div className="bars6" />
                  <div className="bars7" />
                  <div className="bars8" />
                  <div className="bars9" />
                  <div className="bars10" />
                  <div className="bars11" />
                  <div className="bars12" />
                  <div className="bars13" />
                  <div className="bars14" />
                  <div className="bars15" />
                  <div className="bars16" />
                  <div className="bars17" />
                  <div className="bars18" />
                  <div className="bars19" />
                  <div className="bars20" />
                  <div className="bars21" />
                  <div className="bars22" />
                  <div className="bars23" />
                  <div className="bars24" />
                  <div className="bars25" />
                  <div className="bars26" />
                  <div className="frame-parent10">
                    <div className="rectangle-container">
                      <div className="frame-child64" />
                      <div className="frame-child65" />
                    </div>
                    <div className="rectangle-parent1">
                      <div className="frame-child66" />
                      <div className="frame-child67" />
                    </div>
                    <div className="rectangle-parent2">
                      <div className="frame-child68" />
                      <div className="frame-child69" />
                    </div>
                  </div>
                  <div className="bars27" />
                  <div className="bars28" />
                  <div className="bars29" />
                  <div className="background" />
                  <button className="chart-legend">
                    <div className="legend-icon">
                      <img
                        className="people-icon1"
                        alt=""
                        src="/people-1@2x.png"
                      />
                    </div>
                    <div className="legend-title">2,686,357</div>
                  </button>
                </div>
                <div className="chart-settings">
                  <div className="settings-icon8">
                    <img
                      className="settings-icon-child"
                      alt=""
                      src="/rectangle-80.svg"
                    />
                    <div className="settings-icon-item" />
                  </div>
                  <div className="settings-label">
                    <div className="label">2023</div>
                  </div>
                </div>
                <div className="insights">Insights</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-child70" />
        <div className="placeholder">
          <div className="empty">2022</div>
          <div className="empty1">2024</div>
        </div>
      </div>
    </div>
  );
};

Greetings.propTypes = {
  className: PropTypes.string,
};

export default Greetings;
