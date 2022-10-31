import React, {useState , useEffect} from "react";
import ConnectModal from './components/ConnectModal';
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { auth, db } from "./utils/firebase.config";
import { onAuthStateChanged , signOut} from "firebase/auth";
import { getDocs , collection} from "firebase/firestore";

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // pour savoir si on est connectéé !! 
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  }); 
  // had onAuth et user setuser homa li ghaykhliwna njbdo l'id
  // dial user dialna o smyto aussi
  // si notre user est connecté on l'aura dans une variable ! 

  // dès que ya un changement golih lina 
  // déclencher une fct de maniere async lorque l état change ! 
  useEffect(() => {
    getDocs(collection(db, "posts")).then((res) => setPosts(res.docs.map(
      (doc) => ({ ...doc.data(),id: doc.id }))
    ));
      
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };
   
  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => handleLogout()}
            ><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
          </div>
        )}

        {/* si le user est connecté on passe à créer un post sinon on se connecte ! */}

        {user ? <CreatePost uid={user.uid} displayName={user.displayName} /> : <ConnectModal />} 
      </div>
      <div className="posts-container">
        {posts.length > 0 && (
          posts.map((post) => 
            <Post post={post} key={post.id} user={user} />
          )
        )}
      </div>
    </div>
  );
};

export default App;