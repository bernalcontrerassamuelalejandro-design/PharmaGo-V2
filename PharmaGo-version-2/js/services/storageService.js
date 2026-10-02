const StorageService = {
  leer(clave) {
    try {
      return JSON.parse(localStorage.getItem(clave)) || [];
    } catch (error) {
      return [];
    }
  },

  guardar(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
  }
};
