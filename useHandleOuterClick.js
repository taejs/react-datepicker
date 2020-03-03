import React, { useEffect } from "react";

/**
 * Hook that callback when user clicks outside of the passed ref
 */
function useDetectOuterClick(ref, callback) {
    const handleClickOutside = e => {
        debugger;
        if(ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
}

export default useDetectOuterClick;