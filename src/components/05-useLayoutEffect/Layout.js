import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];//si tenemos data entonces extraemos data en la posicion cero

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <div>
                <h1>LayoutEffect</h1>
                <hr />
                <blockquote className="blockquote text-right">
                    <p
                        className="mb-2"
                        ref={pTag}
                    >
                        {quote}
                    </p>
                    <footer className="blockquote-footer"> {author} </footer>
                </blockquote>
                <pre>
                    {
                        JSON.stringify(boxSize, null, 3)
                    }
                </pre>

                <button
                    className="btn btn-primary"
                    onClick={increment}
                >

                    Next quote
                </button>
            </div>
        </div>
    );
};
