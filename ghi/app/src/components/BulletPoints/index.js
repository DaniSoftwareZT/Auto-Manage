import "./bullets.css";

function BulletPoints() {
  return (
    <div className="container-fluid text-bg-color border-top">
      <div className="row">
        <div className="col text-left offset-2">
          <div className="p-3 mt-5">
            <h1>MANAGE IN REAL TIME</h1>
            <p className="h5">
              Control your dealership and inventory <b>without</b> any delays or
              added paperwork.
            </p>
          </div>
          <div className="p-3 mt-5 mb-5">
            <h1>BOOST EFFICIENCY</h1>
            <p className="h5">
              Streamline operations and <b>save time</b> with our easy-to-use
              software.
            </p>
          </div>
        </div>
        <div className="col text-left">
          <div className="p-3 mt-5">
            <h1>MAKE SMARTER DECISIONS</h1>
            <p className="h5">
              With <b>just a few clicks</b> you can have all the information to
              manage your business.
            </p>
          </div>
          <div className="p-3 mt-5 mb-5">
            <h1>FLEXIBLE MANAGEMENT</h1>
            <p className="h5">
              Easily manage employees and customers from{" "}
              <b>anywhere in the world.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulletPoints;
