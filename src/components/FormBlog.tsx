import React, { useState } from 'react'
import FormModal from './FormModal';
import { Blog } from '../models/Blog';

const blogMock = {
  id: undefined,
  title: undefined,
  description: undefined,
  body: undefined,
  img: undefined,
  author: undefined,
  date: new Date().toUTCString(),
  tags: [],
  likes: 0,
  comments: []
}

const FormBlog = () => {

    const [formData, setFormData] = useState<Blog>({} as Blog)

    const [showModal, setShowModal] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent ) => {
        e.preventDefault();
        const submitData = Object.fromEntries(new FormData(e.target as HTMLFormElement))
        setFormData((prevFormData=>{
          if (!prevFormData.img) prevFormData.img = 'bg-x.png'
          return {...prevFormData, ...submitData, img: prevFormData.img}
        })) 
        setShowModal(true)
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.name === 'img') {
          const file = event.target.files![0];
          const MAX_SIZE_KB = 256
          if (file && file.size <= MAX_SIZE_KB * 1024) {
            // Leemos la imagen con FileReader y la guardamos en el estado formData
            const reader = new FileReader();
            reader.onloadend = () => {
              setFormData(formData=>({...formData, img: reader.result as string}))
            };
            reader.readAsDataURL(file);
          } else {
            alert('Sobrepasa los 256KB')
            event.target.value = ""
          }
        }
        
      };

    
      return (
        <>
          <FormModal showModal={showModal} setShowModal={setShowModal} formData={formData} />
          <form onSubmit={handleSubmit} className='d-flex flex-column gap-3 z-1'>
            <legend className='text-center mt-4'>Crear nuevo articulo</legend>

            <div>
                <input type="text" className="form-control" name="title" id='title' placeholder="Titulo" />
                
            </div>

            <div>
                <input type="text" className="form-control" name="description" placeholder="Descripción" />
            </div>

            <div className="form-area">
                <textarea rows={5} cols={10} className="form-control" name="body" placeholder="Contenido" ></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="img" className='fs-6 p-1 text-black-50'>MAX: 256kb; Se guarda en LocalStorage</label>
                <input type="file" className="form-control" name="img" 
                accept="image/jpeg, image/png, image/gif"
                onChange={handleInputChange}/>
            </div>

            <div>
                <input type="text" className="form-control" name="author" placeholder="Autor" />
            </div>

            <div>
                <input type="text" className="form-control" name="tags" placeholder="#tag1, #tag2" />
            </div>
            
            <button className='btn btn-dark' type="submit">Create Blog Entry</button>
        </form>
        </>
        
      );
}

export default FormBlog 