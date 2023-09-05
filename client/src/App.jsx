import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { posts } from "./data";
import { io } from "socket.io-client";

const App = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3000"));
    console.log(socket);
  }, []);

  useEffect(() => {
    socket.emit("newUser", user)
  }, [socket, user])
// 48
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            {user ? (
              <>
                <Navbar socket={socket} />
                {posts.map((post) => (
                  <Card socket={socket} user={user} key={post.id} post={post} />
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
