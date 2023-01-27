import "./features.css"

function Features() {
  return (
    <>
      <div className="container-fluid feature-bg border-top">
        <div className="row">
          <div className="col-4 text-left offset-2">
            <div className="p-3 mt-5">
              <h1 className="fw-bold mb-3">CAR CAR FEATURES</h1>
              <p className="fw-light fst-italic fw-bold">
                To do the job right, auto dealers need the right software to
                monitor and control profits. CarCar is dedicated to offering a
                seamless application to do just that. Our software is designed
                to help you manage your dealership and inventory without any
                delays. CarCar is the perfect solution for any auto dealer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid feature-bg">
        <div className="row">
          <div className="col-2 text-left offset-2">
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">SINGLE PORTAL</h3>
              <p className="mb-5">
                Everything you need to outperform, all in one place. Spend less
                time jumping from page to page and more time focused on the
                bottom line.
              </p>
            </div>
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">VENDOR MANAGEMENT</h3>
              <p className="">
                The updated interface helps maintain and manage vendor records.
                Get greater control, increase accuracy for your vendor records
                and improve efficiency
              </p>
            </div>
          </div>
          <div className="col-2 text-left offset-1">
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">IN-DEPTH TRACKING</h3>
              <p className="">
                Tracking tools optimize workflow, provide important information,
                and keep businesses on-track. Now you can stay on top of
                inventory, repairs, order statuses and more, with one click.
              </p>
            </div>
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">UNMATCHED SECURITY</h3>
              <p className="">
                The only company in the automotive industry to hold Tier IV data
                centers, we maintain strict digital security standards, so you
                can feel confident your data is secure.
              </p>
            </div>
          </div>
          <div className="col-2 text-left offset-1">
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">ALWAYS UPDATING</h3>
              <p className="">
              With effortless automatic updates and exciting new applications being developed every day, <b>CarCar</b> helps keep your dealership on the cutting-edge of management technology.
              </p>
            </div>
            <div className="p-1 mt-5 mb-5">
              <h3 className="fw-bold">OPEN PLATFORM</h3>
              <p className="">
              Our platform is open source! Your application, your software, your way. <b>CarCar</b> is designed to be flexible and adaptable to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
