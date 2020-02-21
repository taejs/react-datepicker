import React, { useEffect } from "react";

/**
 * Hook that callback when user clicks outside of the passed ref
 */
function useDetectOuterClick(ref, callback) {
    const handleClickOutside = e => {
        if(ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);
}

export default useDetectOuterClick;