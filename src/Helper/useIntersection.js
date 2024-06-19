import { useState, useEffect } from "react";

function useIntersection(element, rootMargin) {
    const [isVisible, setIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, { rootMargin,threshold:[0.5] })

        const target = element.current ? element.current : null;
        if (target === null) throw new Error('given element is not a react ref');
        element.current && observer.observe(target);

        return () => observer.unobserve(target);
        //eslint-disable-next-line
    }, [])

    return isVisible;
}

export default useIntersection;