import React, { useRef } from "react";
import "./App.css";

const BackToTop = function ({ elementRef }) {
    function ScrollToTop() {
        elementRef.current.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <button onClick={ScrollToTop}>Go to Top</button>;
};

function App() {
    const refApp = useRef(null);
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(appRef, sectionRef) {
        appRef.current.scrollTo({ behavior: "smooth", top: sectionRef.current.offsetTop });
    }

    return (
        <div className="App" ref={refApp}>
            <button onClick={() => scrollToSection(refApp, refB)}>Go to section B</button>
            <button onClick={() => scrollToSection(refApp, refC)}>Go to section C</button>

            <section>Section A</section>

            <section ref={refB}>
                Section B
                <BackToTop elementRef={refApp} />
            </section>
            <section ref={refC}>
                Section C
                <BackToTop elementRef={refApp} />
            </section>
        </div>
    );
}

export default App;
