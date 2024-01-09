import AboutProjectContainer from "./components/AboutProjectContainer";
import Completed from "./components/Completed";
import Header from "./components/Header";
import ModalContainer from "./components/ModalContainer";
import ProjectContainer from "./components/ProjectContainer";

import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [completed, setCompleted] = useState(false);

  function handleComplete() {
    setTimeout(() => {
      setCompleted(true);
      setModal(false);
    }, 2000);
  }

  return (
    <>
      <Header />
      <ProjectContainer setModal={setModal} />
      <AboutProjectContainer />

      {modal && (
        <>
          <ModalContainer
            setModal={setModal}
            completed={completed}
            handleComplete={handleComplete}
          />
          {/* overlay when modal is open */}
          <div
            onClick={() => setModal(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-10"
          ></div>
        </>
      )}
      {completed && (
        <>
          <Completed setCompleted={setCompleted} />
          {/* overlay when modal is open */}
          <div
            onClick={() => setCompleted(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-black/50 z-10"
          ></div>
        </>
      )}
    </>
  );
}

export default App;
