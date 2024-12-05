import { useContext, useEffect } from "react";
import { destroyAllModal, setInactive } from "../util/modal";
import { Context } from "../context/RefContext";

const useClosePopup = (popup) => {
    const { ref, setRef } = useContext(Context);
    useEffect(() => {
        const closePopup = (e) => {
            if (!popup.current.contains(e.target) && !ref.current.contains(e.target)) {
                setRef(null)
                setInactive();
                destroyAllModal(true);
            }
        }
        document.body.addEventListener('click', closePopup);
        return () => document.body.removeEventListener('click', closePopup)
    }, [])
}
export default useClosePopup;