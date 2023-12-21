function calculerSurface(largeur, hauteur) {
  return largeur * hauteur;
}


let rectangle = {
  largeur: 5,
  hauteur: 10
};


let surface = calculerSurface(rectangle.largeur, rectangle.hauteur);
console.log("La surface du rectangle est:", surface);