import React, { useRef } from "react";
import "./App.css";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <button onClick={ScrollToTop}>Go to Top</button>;
};

function App() {
    const refB = useRef(null);
    const refC = useRef(null);

    function scrollToSection(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <div className="App">
            <button onClick={() => scrollToSection(refB)}>Go to section B</button>
            <button onClick={() => scrollToSection(refC)}>Go to section C</button>

            <section>Section A</section>

            <section ref={refB}>
                Section B
                <BackToTop />
            </section>
            <section ref={refC}>
                Section C
                <BackToTop />
            </section>
        </div>
    );
}

export default App;
