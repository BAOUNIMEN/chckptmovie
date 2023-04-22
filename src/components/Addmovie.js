import React, { useState } from 'react'
import Modal from 'react-modal';
import Starrating from './Starrating';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}
Modal.setAppElement('#root');
const Addmovie = ({ addMovie }) => {
    const [newObj, setNewObj] = useState("")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("1")
    const [posterURL, setPosterURL] = useState("")

}
const handleChange = (e) => setNewObj(e.target.value);
const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
        id: Math.random(),
        title,
        posterURL,
        rating
    }
    add(newObj)
    closeModal()
}
const [modalIsOpen, setIsOpen] = React.useState(false);//state 
//ompen modal
function openModal() {
    setIsOpen(true);
}
//close modal
function closeModal() {
    setIsOpen(false);
}
const handleRating = (x) => setRating(x)
return (
    <div>
        <button onClick={openModal}>add movie</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal">
            <form onSubmit={handleSubmit}>
                <label>title</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Rating</label>
                <Starrating handleRating={handleRating} rating={rating} />
                <label>Poster</label>
                <input type='url' value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
                <div>
                    <button type=' submit'>confirm</button>
                    <button type='reset'>cancel</button>
                </div>
            </form>
        </Modal>
    </div>
)


export default Addmovie
