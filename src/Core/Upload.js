import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const Upload = () => {

    const [values, setvalues] = useState({
        thumbnail: '',
        video: '',
        title: '',
        description: '',
        ImageURL: '',
        formData: ''
    })

    const { formData, title, description, ImageURL } = values

    useEffect(() => {
        setvalues({ ...values, formData: new FormData() })
    }, [])

    const handleChange = name => e => {
        switch (name) {
            case 'thumbnail':
                const phooto = e.target.files;
                formData.append('image', phooto)
                setvalues({ ...values, ImageURL: URL.createObjectURL(e.target.files[0]) })
                break;
            case 'video':
                const videoo = e.target.files;
                formData.append('video', videoo)
                break;
            default:
                setvalues({ ...values, [name]: e.target.value })
                formData.set(name, e.target.value);
                break;
        }
        console.log(formData)
    }

    const handleSubmit = e => {
        if (title, description, ImageURL) {
            fetch(`${process.env.REACT_APP_API_URL}/upload/video`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData
            }).then(res => {
                res.json().then(ress => {
                    if (ress.error) {
                        console.log(ress.error.message)
                    } else {
                        console.log('Uploaded done')
                    }
                })
            })
        } else {
            console.log('Please fill all field')
        }
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Upload Video</h2>
            <div style={{ position: "relative", transform: 'translateY(10%)' }}>
                <div style={{ width: '85%', border: '1px solid grey', margin: 'auto', padding: '30px 20px' }}>


                    <Form.Group className="name-input">
                        <Form.Label className="form-label">Video thumbnail</Form.Label>
                        <Form.File
                            id="custom-file"
                            label="Upload Thumbnail Picture"
                            data-browse="Browse"
                            accept='image/*'
                            custom
                            onChange={handleChange('thumbnail')}
                        />
                        {
                            ImageURL &&
                            <div style={{ width: '100px', margin: '1em' }}>
                                <img src={ImageURL} width='100%' alt="hello" />
                            </div>
                        }
                    </Form.Group>
                    <Form.Group className="name-input">
                        <Form.Label className="form-label">Video</Form.Label>
                        <Form.File
                            id="custom-file"
                            label="Upload Video"
                            data-browse="Browse"
                            accept='video/*'
                            custom
                            onChange={handleChange('video')}
                        />
                    </Form.Group>
                    <Form.Group className="name-input">
                        <Form.Label className="form-label">Title</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" value={title} className="input-field" onChange={handleChange('title')} />
                    </Form.Group>
                    <Form.Group className="name-input">
                        <Form.Label className="form-label">Video Description</Form.Label>
                        <Form.Control type="text" placeholder="Video Description" value={description} className="input-field" onChange={handleChange('description')} />
                    </Form.Group>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Upload;