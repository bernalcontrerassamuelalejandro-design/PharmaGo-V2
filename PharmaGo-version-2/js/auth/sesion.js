const Sesion = {
  iniciar(rol, nombre) {
    sessionStorage.setItem("pharmago_rol", rol);
    sessionStorage.setItem("pharmago_nombre", nombre);
  },

  rol() {
    return sessionStorage.getItem("pharmago_rol");
  },

  nombre() {
    return sessionStorage.getItem("pharmago_nombre") || "";
  },

  activa() {
    return !!this.rol();
  },

  puedeEditar() {
    return this.activa() && this.rol() !== "Paciente";
  },

  proteger() {
    if (!this.activa()) window.location.replace("login.html");
  },

  cerrar() {
    sessionStorage.clear();
    window.location.href = "login.html";
  }
};
