import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Task from "./components/Task";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faKey, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faKey, faListAlt);

function App() {
  const [task, setTask] = useState([]);
  const [desc, setDesc] = useState("");
  const [style, setStyle] = useState([]);

  const newTask = [...task];
  const newStyle = [...style];
  return (
    <>
      <Header />
      <section className="container">
        <List task={task} setTask={setTask} style={style} setStyle={setStyle} />
        <div>
          <Task
            task={newTask}
            setTask={setTask}
            desc={desc}
            setDesc={setDesc}
            style={newStyle}
            setStyle={setStyle}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
