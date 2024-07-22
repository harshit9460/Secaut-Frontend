import Header from "../components/header";
import "./documentation.css";

const Documentation = () => {
  return (
    <div className="documentation">
      <section className="content">
        <div className="content-child" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-item" />
          <div className="frame-inner" />
          <div className="rectangle-div" />
          <div className="frame-child1" />
          <div className="frame-child2" />
          <div className="frame-child3" />
          <div className="frame-child4" />
          <div className="frame-child5" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="frame-child9" />
          <div className="frame-child10" />
          <div className="frame-child11" />
          <div className="frame-child12" />
          <div className="frame-child13" />
          <div className="frame-child14" />
          <div className="frame-child15" />
          <div className="frame-child16" />
          <div className="frame-child17" />
          <div className="frame-child18" />
          <div className="frame-child19" />
          <div className="frame-child20" />
        </div>
      </section>
      <Header />
      <div className="endpoints-parent">
        <div className="endpoints">
          <div className="endpoint-list">
            <a className="api-endpoints">API ENDPOINTS</a>
            <img className="sort-down-icon" alt="" src="/sort-down@2x.png" />
          </div>
          <div className="endpoint-list1">
            <div className="retrieve-all-users">Retrieve all users</div>
          </div>
        </div>
        <div className="endpoint-details">
          <div className="endpoint-request">
            <div className="endpoint-method">
              <a className="get">GET</a>
            </div>
            <div className="endpoint-url">
              <a className="product-idapiusers">{`<product-id>/api/users`}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="retrieve-a-user-by-its-id-wrapper">
        <div className="retrieve-a-user">Retrieve a user by its ID</div>
      </div>
      <div className="add-new-user-wrapper">
        <div className="add-new-user">Add new User</div>
      </div>
      <div className="edit-a-particular-user-wrapper">
        <div className="edit-a-particular">Edit a particular user</div>
      </div>
      <div className="delete-a-user-wrapper">
        <div className="delete-a-user">Delete a User</div>
      </div>
      <div className="guides-parent">
        <a className="guides">GUIDES</a>
        <img className="sort-down-icon1" alt="" src="/sort-down@2x.png" />
      </div>
      <div className="how-to-request-only-specific-f-wrapper">
        <div className="how-to-request">
          How to request only specific fields.
        </div>
      </div>
      <div className="authentication-of-client-reque-wrapper">
        <div className="authentication-of-client">
          Authentication of client requests.
        </div>
      </div>
      <div className="how-to-get-risk-score-of-the-u-wrapper">
        <div className="how-to-get">How to get risk score of the user.</div>
      </div>
    </div>
  );
};

export default Documentation;
