import React, {useState} from 'react'
import './style.css'
import  Header from "./components/Header"
import btn_add from "./img/btn-add.png"
import btn_open from "./img/btn-open.png"
import btn_edit from "./img/btn-edit.png"
import btn_remove from "./img/btn-remove.png"
import image_Pet from "./img/img_pet.png"


function App() {
  // const [open, setOpen] = useState(false);

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
            {/*accordion */}
              <div class="accordion" id="accordionPet">
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
                        <p className="text_user">Saimon Andrés</p>
                      </div>
                      <div className="col-md-3 col-xs-12 col-sm-6 mt-3">
                        <p className="text_user">Perro</p>
                      </div>
                      <div className="col-md-3 col-xs-12 col-sm-6 mt-3">
                        <p className="text_user">15 Junio 2017</p>
                      </div>
                      <div className="col-md-2 col-xs-12 col-sm-6 position-absolute btn_open">
                        <div data-toggle="collapse" data-target="#collapse_Pet" aria-expanded="true" aria-controls="collapse_Pet">
                            <figure>
                              <img src={btn_open} alt="btn_open" title="btn_open" className="icon_open"/>
                            </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End container header accordion */}
                  {/*container boddy accordion */}
                  <div id="collapse_Pet" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionPet">
                    <div class="card-body">
                      <div class="container">
                        <div class="row">
                          <div class="col-xs-12 col-sm-6 col-md-6">
                            <h3><span>Mascotas</span></h3>
                            <p><span>Nombre:</span>Saimon</p>
                            <p><span>Especie:</span>Perro</p>
                            <p><span>Raza:</span>Rottweiler</p>
                            <p><span>Nacimiento:</span>15 - 05 - 18</p>
                          </div>
                          <div class="col-xs-12 col-sm-6 col-md-6">
                            <h3><span>Propietario</span></h3>
                            <p><span>Nombre:</span>Kate Castaño</p>
                            <p><span>Teléfono:</span>3569872</p>
                            <p><span>Dirección:</span>Calle 56B # 72-58</p>
                            <p><span>E-mail:</span>propietario@localhost.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="row"> 
                          <div className="col-md-12 col-xs-12 col-sm-12 d-flex pt-4 justify-content-center">
                            <div className="btn_edit">
                                <figure>
                                  <img src={btn_edit} alt="btn_edit" title="btn_edit" className="icon"/>
                                </figure>
                            </div>
                            <div className="btn_remove">
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
            {/* End accordion */}
          </div>
        </div>
        </div>
       {/*end container patient */} 
      </div>
      <div>
        {/*modal add o edit*/}
        <div class="modal fade" id="modalUser" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="modalLabel">Agregar Paciente</h1>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  <div className="row">
                    <div class="col-md-6">
                      <h3>Mascota</h3>
                      <div class="form-group">
                        <label for="name_pet"><span>Nombre:</span></label>
                        <input type="text" class="form-control" id="name_pet" placeholder="Ingrese nombre" name="name_pet"/>
                      </div>
                      <div class="form-group">
                        <label for="name_species"><span>Especie:</span></label>
                        <input type="text" class="form-control" id="name_species" placeholder="Ingrese Especie" name="name_species"/>
                      </div>
                      <div class="form-group">
                        <label for="name_race"><span>Raza:</span></label>
                        <input type="text" class="form-control" id="name_race" placeholder="Ingrese raza (loro, perro, gato)" name="name_race"/>
                      </div>
                      <div class="form-group">
                        <label for="name_birth"><span>Nacimiento:</span></label>
                        <input type="date" class="form-control" id="name_birth" name="name_birth"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h3>Propietario</h3>
                        <div class="form-group">
                          <label for="name_user"><span>Nombre:</span></label>
                          <input type="text" class="form-control" id="name_user" placeholder="Ingrese nombre" name="name_user"/>
                        </div>
                        <div class="form-group">
                          <label for="phone"><span>Teléfono:</span></label>
                          <input type="text" class="form-control" id="phone" placeholder="Ingrese Teléfono" name="phone"/>
                        </div>
                        <div class="form-group">
                          <label for="name_addres"><span>Dirección:</span></label>
                          <input type="text" class="form-control" id="name_addres" placeholder="Ingrese dirección" name="name_addres"/>
                        </div>
                        <div class="form-group">
                          <label for="name_email"><span>E-mail:</span></label>
                          <input type="email" class="form-control" id="name_email" placeholder="Ingrese email" name="name_email"/>
                        </div>
                    </div>
                  </div>
                </form> 
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">cancelar</button>
                <button type="button" class="btn btn-primary">Agregar</button>
              </div>
            </div>
          </div>
        </div>
        {/*end modal add o edit*/}
      </div>
    </div>
  )
}

export default App;
