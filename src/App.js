import React, {useState} from 'react'
import {isEmpty, size} from 'lodash'
import shortid from 'shortid'
import './style.css'
import  Header from "./components/Header"
import btn_add from "./img/btn-add.png"
import btn_open from "./img/btn-open.png"
import btn_edit from "./img/btn-edit.png"
import btn_remove from "./img/btn-remove.png"
import image_Pet from "./img/img_pet.png"


function App() {
  const [patient, setPatient] = useState({namePet:"",specie:"",breed:"",birth:"",nameUser:"",phone:"",address:"",email:""})
  const [patients, setPatients] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")


  

  const addPatient = (e) =>{
      e.preventDefault()
      if(isEmpty(patient.namePet)||isEmpty(patient.specie)||isEmpty(patient.breed)||isEmpty(patient.birth)||isEmpty(patient.nameUser)||isEmpty(patient.phone)||isEmpty(patient.address)||isEmpty(patient.email)){
        console.log("Patient empty")
        return
      }

      const newPatient = {
        id: shortid.generate(),
        namePet:patient.namePet,        
        specie:patient.specie,
        breed:patient.breed,
        birth:patient.birth,
        nameUser:patient.nameUser,
        phone:patient.phone,
        address:patient.address,
        email:patient.email
      }


      setPatients([...patients, newPatient])
      setPatient({namePet:"",specie:"",breed:"",birth:"",nameUser:"",phone:"",address:"",email:""})
      return
  }

  const savePatient = (e) =>{
    e.preventDefault()
    console.log("entro al save patient")
    if(isEmpty(patient.namePet)||isEmpty(patient.specie)||isEmpty(patient.breed)||isEmpty(patient.birth)||isEmpty(patient.nameUser)||isEmpty(patient.phone)||isEmpty(patient.address)||isEmpty(patient.email)){
      console.log("Patient empty")
      return
    }
    console.log(patient)
    setPatient({
      id:id,
      namePet:patient.namePet,
      specie:patient.specie,
      breed:patient.breed,
      birth:patient.birth,
      nameUser:patient.nameUser,
      phone:patient.phone,
      address:patient.address,
      email:patient.email
    })
    
    const editedPatients = patients.map(item => item.id == id ? 
      {
        id:id,
        namePet:patient.namePet,
        specie:patient.specie,
        breed:patient.breed,
        birth:patient.birth,
        nameUser:patient.nameUser,
        phone:patient.phone,
        address:patient.address,
        email:patient.email} : item)
    
     
    setPatients(editedPatients)
    

    setEditMode(false)
    setPatient({namePet:"",specie:"",breed:"",birth:"",nameUser:"",phone:"",address:"",email:""})    
    setId("")
    return
}

  
  const editPatient = (thePatient) =>{
    
    setPatient({
      namePet:thePatient.namePet,
      specie:thePatient.specie,
      breed:thePatient.breed,
      birth:thePatient.birth,
      nameUser:thePatient.nameUser,
      phone:thePatient.phone,
      address:thePatient.address,
      email:thePatient.email
    })
    setEditMode(true)
    setId(thePatient.id)
  }
  
  const deletePatient = (data) =>{
    setId(data)
    console.log(id)
    const filteredPatients = patients.filter(patient => patient.id !== id)
    setPatients(filteredPatients)
  }

  

  return (
    <div>
      {/*component header */}
      <Header/>
      {/*logo and name*/}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12">
            <div className="float-right btn_add mt-5" data-toggle="modal" data-target="#modalUser">
                <figure>
                  <img src={btn_add} alt="btn_add" title="btn_add" className="icon_add"/>
                </figure>
                <span className="text_add">Agregar Paciente</span>
            </div>
          </div>
        </div>
      </div>
      {/*end logo and name*/}
      <div>
        {/*container patient */}
        <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 text-center mt-5">
            <h2>PACIENTES</h2>
            {/*accordion pacient */}
                  {
                    size(patients) == 0 ? (
                      <h4
                      >Aún no hay pacientes escritos.</h4>
                    ) : (
                      patients.map((patient) => (
                        <div class="accordion" id="accordionPet" key={patient.id}>
                        <div class="card">
                          {/* End container header accordion */}
                          <div class="card-header" id="headingOne">
                            <div className="row position-relative">
                              <div className="col-md-1 col-xs-12 col-sm-6 mr-5 col-md-offset-2">
                                <figure className="float-left p-2">
                                  <img src={image_Pet} alt="img_mascota" title="img_mascota"/>
                                </figure>                          
                              </div>
                              <div className="col-md-3 col-xs-12 col-sm-6 mt-3">
                                <p className="text_user">{patient.namePet}</p>
                              </div>
                              <div className="col-md-3 col-xs-12 col-sm-6 mt-3">
                                <p className="text_user">{patient.specie}</p>
                              </div>
                              <div className="col-md-3 col-xs-12 col-sm-6 mt-3">
                                <p className="text_user">{patient.birth}</p>
                              </div>
                              <div className="col-md-2 col-xs-12 col-sm-6 position-absolute btn_open">
                                <div data-toggle="collapse" data-target={'#'+patient.id} aria-expanded="true" aria-controls="collapse_Pet">
                                    <figure>
                                      <img src={btn_open} alt="btn_open" title="btn_open" className="icon_open"/>
                                    </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* End container header accordion */}
                          {/*container boddy accordion */}
                          <div id={patient.id} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionPet">
                            <div class="card-body">
                              <div class="container">
                                <div class="row">
                                  <div class="col-xs-12 col-sm-6 col-md-6">
                                    <h3><span>Mascotas</span></h3>
                                    <p><span>Nombre:</span>{patient.namePet}</p>
                                    <p><span>Especie:</span>{patient.specie}</p>
                                    <p><span>Raza:</span>{patient.breed}</p>
                                    <p><span>Nacimiento:</span>{patient.birth}</p>
                                  </div>
                                  <div class="col-xs-12 col-sm-6 col-md-6">
                                    <h3><span>Propietario</span></h3>
                                    <p><span>Nombre:</span>{patient.nameUser}</p>
                                    <p><span>Teléfono:</span>{patient.phone}</p>
                                    <p><span>Dirección:</span>{patient.address}</p>
                                    <p><span>E-mail:</span>{patient.email}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="row"> 
                                  <div className="col-md-12 col-xs-12 col-sm-12 d-flex pt-4 justify-content-center">
                                    <div className="btn_edit" data-toggle="modal" data-target="#modalUser" onClick={ () => editPatient(patient)} >
                                        <figure>
                                          <img src={btn_edit} alt="btn_edit" title="btn_edit" className="icon"/>
                                        </figure>
                                    </div>
                                    <div className="btn_remove" data-toggle="modal" data-target="#modalDelete" onClick={() => setId(patient.id)} >
                                        <figure>
                                          <img src={btn_remove} alt="btn_remove" title="btn_remove" className="icon"/>
                                        </figure>
                                    </div>
                                  </div> 
                              </div>
                            </div>
                          </div>
                          {/* End container body accordion */}
                        </div>
                      </div>
  
                      ))
                    )
                    
                  }

            {/* End accordion */}
          </div>
        </div>
        </div>
       {/*end container patient */} 
      </div>
      <div>
        {/*modal add o edit*/}
        <div class="modal fade" id="modalUser" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="modalLabel">{ editMode ? "Modificar Paciente" : "Agregar Paciente" }</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form-horizontal" onSubmit={ editMode ? savePatient : addPatient} key={patient.id}> 
                  <div className="row">
                    <div class="col-md-6">
                      <h3>Mascota</h3>
                      <div class="form-group">
                        <label for="name_pet"><span>Nombre:</span></label>
                        <input type="text" class="form-control" placeholder="Ingrese nombre" name="namePet" onChange={(text) => setPatient({...patient, namePet:text.target.value})} value={patient.namePet}/>
                      </div>
                      <div class="form-group">
                        <label for="name_species"><span>Especie:</span></label>
                        <input type="text" class="form-control" id="name_species" placeholder="Ingrese Especie (loro, perro, gato)" name="species" onChange={(text) => setPatient({...patient, specie:text.target.value})} value={patient.specie} />
                      </div>
                      <div class="form-group">
                        <label for="name_breed"><span>Raza:</span></label>
                        <input type="text" class="form-control" id="name_breed" placeholder="Ingrese raza" name="breed" onChange={(text) => setPatient({...patient, breed:text.target.value})} value={patient.breed}/>
                      </div>
                      <div class="form-group">
                        <label for="name_birth"><span>Nacimiento:</span></label>
                        <input type="date" class="form-control" id="name_birth" onChange={(text) => setPatient({...patient, birth:text.target.value})} value={patient.birth}/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3>Propietario</h3>
                        <div class="form-group">
                          <label for="name_user"><span>Nombre:</span></label>
                          <input type="text" class="form-control" id="name_user" placeholder="Ingrese nombre" onChange={(text) => setPatient({...patient, nameUser:text.target.value})} value={patient.nameUser}/>
                        </div>
                        <div class="form-group">
                          <label for="phone"><span>Teléfono:</span></label>
                          <input type="text" class="form-control" id="phone" placeholder="Ingrese Teléfono" onChange={(text) => setPatient({...patient, phone:text.target.value})} value={patient.phone}/>
                        </div>
                        <div class="form-group">
                          <label for="name_addres"><span>Dirección:</span></label>
                          <input type="text" class="form-control" id="name_addres" placeholder="Ingrese dirección" onChange={(text) => setPatient({...patient, address:text.target.value})} value={patient.address}/>
                        </div>
                        <div class="form-group">
                          <label for="name_email"><span>E-mail:</span></label>
                          <input type="email" class="form-control" id="name_email" placeholder="Ingrese email" onChange={(text) => setPatient({...patient, email:text.target.value})} value={patient.email}/>
                        </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">cancelar</button>
                    <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#modalUser">{ editMode ? "Actualizar" : "Agregar" }</button>
                  </div>
                </form> 
              </div>
              
            </div>
          </div>
        </div>
        {/*end modal add o edit*/}
      </div>
      <div>
        {/*modal delete*/}
            <div class="modal fade" id="modalDelete" tabindex="-1" aria-labelledby="modalLabelDelete" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="modalLabelDelete">Eliminar Paciente</h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  
                    <div class="form-group">
                      <label><span>Esta seguro que desea borrar el paciente.</span></label>           
                    </div>   
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Cancelar</button>
                      <button  type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" onClick={() => deletePatient(patient.id)}>Eliminar definitivamente</button>
                    </div>
                </div>              
              </div>
            </div>
          </div> 
        {/* end modal delete*/}      

      </div>
     
        
    </div>
  )
}

export default App;
