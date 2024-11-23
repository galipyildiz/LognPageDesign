import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import HelmetModel from "./HelmetModel";

function App() {
  return (
    <div className="row m-0 vh-100 vw-100 bg-dark">
      <div className="col-md-3 d-flex align-items-center">
        <div className="card bg-white" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className=" mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>

              <p className="small mb-5 pb-lg-2">
                <a className="text-dark" href="#!">Forgot password?</a>
              </p>

              <button
                className="btn btn-outline-dark btn-lg px-5"
                type="submit"
              >
                Login
              </button>
            </div>

            <div>
              <p className="mb-0">
                Don't have an account?{" "}
                <a href="#!" className="text-dark fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9 d-none d-md-block">
        <Canvas>
          {/* Ortam ışığı */}
          <ambientLight intensity={1} />

          {/* Yönlendirilmiş ışık */}
          <directionalLight position={[5, 10, 5]} intensity={1} />

          {/* HDR Ortam Haritası */}
          <Environment preset="sunset" />

          {/* Model */}
          <HelmetModel />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
