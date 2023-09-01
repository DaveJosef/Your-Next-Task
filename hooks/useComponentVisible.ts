'use client';
import { useEffect, useRef, useState } from "react";

export default function useComponentVisible(initialIsVisible: boolean, onRequestClose: () => void | undefined) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            setIsComponentVisible(false);
            onRequestClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}