import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { posts } from "./data";
import { io } from "socket.io-client";

const App = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000")
  }, [])
  
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            {user ? (
              <>
                <Navbar />
                {posts.map((post) => (
                  <Card key={post.id} post={post} />
                ))}
                <b>User: {user}</b>
              </>
            ) : (
              <div className="col-lg-4 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      className="form-control mb-4"
                    />
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => setUser(username)}
                      className="btn d-block w-100 btn-outline-dark"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="vh-100"></div>
    </>
  );
};

export default App;
