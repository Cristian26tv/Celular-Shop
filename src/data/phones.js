const phones = {
  "iphone16pro": {
    id: "iphone16pro",
    name: "iPhone 16 Pro Max",
    price: "6.499.000",
    image: "",
    color: "Titanio Natural",
    dimension: "6.9 pulgadas",
    camaraPrincipal: "48 MP Fusion",
    MPX: "48 MP",
    memoriaInterna: "256 GB",
    marcaProcesador: "Apple A18 Pro",
    velocidad: "3.78",
    nucleos: "6",
  },
  "galaxyS25u": {
    id: "galaxyS25u",
    name: "Samsung Galaxy S25 Ultra",
    price: "5.999.000",
    image: "",
    color: "Titanio Negro",
    dimension: "6.9 pulgadas",
    camaraPrincipal: "200 MP",
    MPX: "200 MP",
    memoriaInterna: "512 GB",
    marcaProcesador: "Snapdragon 8 Gen 4",
    velocidad: "4.47",
    nucleos: "8",
  },
  "xiaomi14pro": {
    id: "xiaomi14pro",
    name: "Xiaomi 14 Pro",
    price: "3.499.000",
    image: "",
    color: "Negro",
    dimension: "6.73 pulgadas",
    camaraPrincipal: "50 MP Leica",
    MPX: "50 MP",
    memoriaInterna: "256 GB",
    marcaProcesador: "Snapdragon 8 Gen 3",
    velocidad: "3.3",
    nucleos: "8",
  },
};

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
