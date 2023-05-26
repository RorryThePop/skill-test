import React, { Suspense, useState } from "react";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";

function App() {
  const { theme } = useTheme();
  const [isOpen, setIsOpened] = useState(false);
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <button onClick={() => setIsOpened(true)}>toggle</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpened(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          asperiores commodi consequatur consequuntur dicta ducimus in magni
          minus nam quos ratione sint tenetur, ullam. Magnam placeat temporibus
          voluptatum! Aperiam debitis dignissimos excepturi facilis hic magnam
          officia, optio quia quis rem, similique tempora velit. Adipisci
          blanditiis cupiditate iste magnam sint suscipit!
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
