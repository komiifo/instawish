import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNewsFeed, likeOrUnlike } from '../services/PostsService';


const Posts = () => {

    const [newsposts, setNewsPosts] = useState([]);

    const handleLike = async (postId) => {
        try {
            await likeOrUnlike(postId);
            // Mise à jour des posts après le like/unlike
            const updatedPosts = await getNewsFeed();
            console.log(updatedPosts);
            setNewsPosts(updatedPosts);
        } catch (error) {
            console.error('Erreur lors du like/unlike :', error);
        }
    };

    useEffect(() => {
        async function getNewsPosts() {
            try {
                const newsFeed = await getNewsFeed();
                setNewsPosts(newsFeed);
            } catch (error) {
                console.log(error);
            }
        }

        getNewsPosts();
    }, [newsposts]);

    return (
        <>
            <div className="row mt-3">

                {newsposts.map((post, index) => (
                    <div className="post" key={index} id={`${post.id}`}>
                        <Link className="d-flex mb-2  align-items-center link-body-emphasis" to={`/user/${post.createdBy.id}`}>
                            <img width="50px" height="50px" src={`https://symfony-instawish.formaterz.fr${post.createdBy.imageUrl}`} className="rounded-circle me-2" alt="..." />
                            <p className="mb-2 justify-content-center mb-md-0">{post.createdBy.username}</p>
                        </Link>

                        <img className="img-fluid" src={`https://symfony-instawish.formaterz.fr${post.imageUrl}`} alt="..." />

                        <div className="">
                            <i className={`bi ${post.isLiked ? 'bi-heart-fill' : 'bi-heart'}`} onClick={() => handleLike(post.id)}> </i>
                            <i className="bi bi-chat"> </i>
                            <i className="bi bi-send"></i>
                        </div>

                        <p className=" fw-medium">{post.likeds.length} likes</p>

                        <p> <a className="link-body-emphasis fw-medium" href={`https://symfony-instawish.formaterz.fr${post.createdBy.id}`}>{post.createdBy.username}</a> <span className="description">{post.description}</span></p>

                        <form action="">
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Ajouter un commentaire..."/>
                            </div>
                        </form>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts;