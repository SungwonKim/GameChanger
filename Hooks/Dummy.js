import React, { useEffect, useState } from "react";

export default function Dummy({ title }) {
    const [docCount, setDocCount] = useState(0);
    useEffect(() => {
        document.title = `${ title } - Doc changed ${docCount} times`;
        setDocCount(docCount + 1);
    }, [title]);
    return <span>Title is gonna be changed if you can see this</span>;
}
