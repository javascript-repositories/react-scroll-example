import React, { useRef } from "react";
import "./App.css";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <button onClick={ScrollToTop}>Go to Top</button>;
};

function App() {
    const refA = useRef(null);
    const refB = useRef(null);

    function scrollToSection(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <div className="App">
            <button onClick={() => scrollToSection(refA)}>Go to section A</button>
            <button onClick={() => scrollToSection(refB)}>Go to section B</button>

            <section ref={refA} className="a">
                Section A
                <BackToTop />
            </section>

            <section ref={refB}>
                Section B
                <BackToTop />
            </section>
        </div>
    );
}

export default App;
