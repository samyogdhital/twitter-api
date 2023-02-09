// import { useQuery } from "react-query";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";

// type ResponseType = {
//   /** @todo: valid response type */
//   data: object;
// };

const Home = () => {
  // const { data } = useQuery(
  //   "key",
  //   () => axios.get<ResponseType>("/api").then((res) => res.data),
  //   {
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  const intialValues = {
    query: "",
  };

  const [apiData, setApiData] = React.useState<object>({});

  const onSubmit = async (values: typeof intialValues) => {
    const data = await axios
      .post<{ data: object }>("/api", values)
      .then((res) => res.data);
    setApiData(data);
  };
  const { handleSubmit, handleChange, values } = useFormik<{ query: string }>({
    initialValues: intialValues,
    onSubmit,
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item">Another action</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item">Something else here</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="text"
                name="query"
                placeholder="Search"
                aria-label="Search"
                value={values.query}
                onChange={handleChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main>{apiData?.name}</main>
    </>
  );
};

export default Home;
