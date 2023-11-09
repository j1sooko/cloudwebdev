import { useState } from "react";

function TextareaComp() {
    const [comment, setComment] = useState('');

    const textareaStyle = {
        width:'50%',
        height: '150px',
        padding: '12px, 20px',
        boxSizing: 'border-box',
        border: '2px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#f8f8f8',
        fontSize: '16px',
        resize: 'none'
    }

    const handleSetValue = (e) => {
        setComment(e.target.value);
    }

    return (
        <div>
            <textarea style={textareaStyle}
                placeholder="감상평을 입력해주세요."
                value={comment}
                onChange={(e) => handleSetValue(e)}></textarea>
                <hr />
                <div>
                    <p>입력된 감상평: {comment}</p>
                </div>
        </div>
    )
}

export default TextareaComp;