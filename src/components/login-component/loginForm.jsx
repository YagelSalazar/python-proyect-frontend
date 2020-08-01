import React from 'react';

export const LoginForm = () => {
    return (
        <div className="container col-4 shadow" style={{ paddingBottom: "30px", marginTop: "40px",paddingTop: "15px" }}>
            <div className="row d-flex justify-content-center" style={{ padding: "25px 0" }}>
                <h5 className="text-muted" style={{ fontWeight: "bold" }}>Iniciar sesión en Trello</h5>
            </div>
            <div className="row d-flex justify-content-center">
                <form style={{ width: "80%" }}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Introduzca el correo electónico" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Introduzca la contraseña" />
                    </div>
                    <button type="submit" className="btn btn-success" style={{ width: "100%" }}>Iniciar sesión</button>
                </form>
            </div>
            <div className="row d-flex justify-content-center" style={{ paddingTop: "25px" }}>
                <p>o</p>
            </div>
            <div className="row d-flex justify-content-center" style={{ borderBottom: "solid 1px #7C7E83" }}>
                <button type="button" className="btn btn-light shadow-sm" style={{ fontWeight: "bold", width: "80%", marginBottom: "20px" }}>Continuar con Google</button>
                <button type="button" className="btn btn-light shadow-sm" style={{ fontWeight: "bold", width: "80%", marginBottom: "20px" }}>Continuar con Microsoft</button>
                <button type="button" className="btn btn-light shadow-sm" style={{ fontWeight: "bold", width: "80%", marginBottom: "20px" }}>Continuar con Apple</button>
                <p style={{ color: "#0952F9" }}>Iniciar sesión con SSO</p>
            </div>
            <div className="row d-flex justify-content-center" style={{ marginTop: "20px" }}>
                <p style={{ color: "#0952F9" }}>¿No puede iniciar sesión?</p>
                <p style={{ color: "#0952F9" }}>Regístrese para crear una cuenta</p>
            </div>
        </div>
    )
}