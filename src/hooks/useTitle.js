import { useEffect } from "react";

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - WriteMyThoughts`;
    }, [title]);

    return null;

};

export default useTitle;