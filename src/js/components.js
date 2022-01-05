import('../css/components.css');
import webpackLogo from '../assets/images/webpack-logo.png';

export const sayHello = (name) => {
    console.log('Creating h1 Label');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}!!!`;

    document.body.append(h1);

    // Img
    console.log(webpackLogo);
    const img = document.createElement('img');
    img.src = webpackLogo;
    document.body.append(img);
}