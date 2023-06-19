import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalDetails } from "./homeSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { localData } = useSelector((state) => state.homeReducer);
  console.log("fg", localData);

  useEffect(() => {
    dispatch(getLocalDetails());
  }, []);

  return (
    <section className="body-content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="side-nav">
              <div className="side-nav-block">
                <h4>Application</h4>
                <ul>
                  <li>
                    <a href="#" className="active">
                      Local Body Details
                    </a>
                  </li>
                  <li>
                    <a href="#">Local Body Details</a>
                  </li>
                  <li>
                    <a href="#">Local Body Details</a>
                  </li>
                  <li>
                    <a href="#">Local Body Details</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="right-block">
              <div className="sec-title">
                <h2>Form-2</h2>
              </div>
              <div className="acc-sec">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Local Body Details
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                District
                              </label>
                              <select className="form-control">

                                <option value="">Select a permit number</option>
                                {localData?.District?.map((item=>
                                <option value={item}>{item}</option>
                                ))}
                              </select>
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Loacl Body Type
                              </label>
                              <select className="form-control">
                                <option value="">Select a permit number</option>
                                {localData?.LocalBodytype?.map((item=>
                                <option value={item}>{item}</option>
                                ))}
                            
                              </select>
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <select className="form-control">
                                <option value="">Select a permit number</option>
                                {localData?.LocalBodyName?.map((item=>
                                <option value={item}>{item}</option>
                                ))}
                               
                                
                              </select>
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <select className="form-control">
                                <option value="">Select a permit number</option>
                                {localData?.ZonalOffice?.map((item=>
                                <option value={item}>{item}</option>
                                ))}
                                
                              </select>
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Ward No
                                </label>
                              <select className="form-control">
                                <option value="">Select a permit number</option>
                                {localData?.WardNo?.map((item=>
                                <option value={item}>{item}</option>
                                ))}
                              </select>
                             
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Default checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Default checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <label className="form-label">
                                Permit Number
                              </label>
                              <input type="text" className="form-control" />
                              <div className="form-val">Error</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-cntl">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                                <label
                                  className="form-check-label"
                                  for="flexCheckDefault"
                                >
                                  Default checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
