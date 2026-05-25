const phones = {};

export function savePhone({
  id,
  name,
  price,
  image,
  color,
  dimension,
  camaraPrincipal,
  MPX,
  memoriaInterna,
  marcaProcesador,
  velocidad,
  nucleos,
}) {
  if (
    !id ||
    !name ||
    !price ||
    !image ||
    !color ||
    !dimension ||
    !camaraPrincipal ||
    !MPX ||
    !memoriaInterna ||
    !marcaProcesador ||
    !velocidad ||
    !nucleos
  ) {
    return false;
  }
  if (phones[id]) {
    return false;
  }
  phones[id] = {
    id,
    name,
    price,
    image,
    color,
    dimension,
    camaraPrincipal,
    MPX,
    memoriaInterna,
    marcaProcesador,
    velocidad,
    nucleos,
  };
  return true;
}

export function editPhone(id, name, price, image, color, dimension, camaraPrincipal, MPX, memoriaInterna, marcaProcesador, velocidad, nucleos) {
  phones[id] = { ...phones[id], name, price, image, color, dimension, camaraPrincipal, MPX, memoriaInterna, marcaProcesador, velocidad, nucleos };
}
export function deletePhone(id) {
  delete phones[id];
}

export function getPhoneById(id) {
  return phones[id];
}


export default phones;
