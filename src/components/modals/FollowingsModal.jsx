import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

import Modal from 'bootstrap/js/dist/modal';

const FollowingsModal = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const modalRef = useRef(null);
    const [bsModal, setBsModal] = useState(null);

    const loadUserData = useLoaderData();
    const userFollowingsData = loadUserData.userFollowingsData;

    useEffect(() => {
        const modalElement = modalRef.current;
        const newBsModal = new Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
        });

        setBsModal(newBsModal);
        newBsModal.show();
    }, []);

    const closeModal = () => {
        document.querySelector('.modal-backdrop')?.remove();
        bsModal.hide();

        navigate(`/user/${id}`);
    };

    const handleCloseModal = () => {
        document.querySelector('.modal-backdrop')?.remove();
        bsModal.hide();
    };


    return (
        <div className="modal fade" tabIndex="-1" ref={modalRef} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Followers</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        {userFollowingsData.map((userProfileFollower, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-between mb-2">

                                <Link className="d-flex align-items-center fw-medium link-body-emphasis" to={`/user/${userProfileFollower.id}`} onClick={handleCloseModal}>
                                    <img width="50px" height="50px" src={`https://symfony-instawish.formaterz.fr${userProfileFollower.imageUrl}`} className="rounded-circle" alt="Profile" />
                                    <p className="mb-0 ms-2">{userProfileFollower.username}</p>
                                </Link>

                                <button className="btn btn-light btn-sm">Supprimer</button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FollowingsModal;
