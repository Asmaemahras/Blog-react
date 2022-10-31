import React , {useRef} from 'react';
import { addDoc , collection} from "firebase/firestore";
import { db } from '../utils/firebase.config';

const CreatePost = ({ uid , displayName }) => {
    //console.log(uid,displayName);
    const message = useRef();
    // async psq on veut envoyer les données à la bdd !
    const handlePost = async (e) => {
        e.preventDefault();
        const data = {
            author: displayName,
            authorId: uid,
            message: message.current.value,
            comments: null,
            date: Date.now(),
        }
        // test console.log(data);
        await addDoc(collection(db,"posts"), data);
        message.current.value = "";
    };
    return (
        <div className="new-post-modal">
            <form onSubmit={(e) => handlePost(e)}> {/* pourquoi le e ? on veut pas charger la page quand le form est validé !  */}
                <textarea placeholder="Message ..." ref={message}></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default CreatePost;