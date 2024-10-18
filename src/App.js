import './App.css';
import React, {useCallback, useEffect, useState} from "react";

import Spinner from "./components/Spinner"

function App() {

    const [inputValue, setInputValue] = useState("");
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const addPosts = useCallback(() => {
            if (inputValue.trim() === "") return;
            setPosts([...posts, inputValue]);
            setPosts([...posts, {content: inputValue}]);
            setInputValue("");
        }, [inputValue, posts]
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            try {
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }, 2000)

        return () => {
            clearTimeout(timer)
        }
        console.log("useEffect is Here!!!")
    }, [])

    return (
        <div className="App">
            {
                loading ? <div><Spinner/></div> :
                    error ? <div className="error-text"><h1>an error occurred, please try again</h1></div> :
                        <div className="main-container">
                            <div className="add-post">
                                <button className="add-button" onClick={addPosts}>
                                    <h1>Add-Post</h1>
                                </button>
                                <input
                                    className="post-input"
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>

                            <div className="posts-container">
                                {posts.length === 0 ? <h2>there are no posts</h2> :
                                    posts.map((post, index) => (
                                        <Post key={index} content={post.content}/>
                                    ))}
                            </div>
                        </div>
            }
        </div>
    );
}

const Post = React.memo(({content}) => {
    return (
        <div>
            <h2>{content}</h2>
            <hr/>
        </div>
    )
})

export default App;
