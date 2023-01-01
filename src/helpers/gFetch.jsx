
let products = [
    {id: '1', name: 'Laptop Dell', categoria: 'laptop', stock: '100', price: '980', foto: 'https://www.magitech.pe/media/catalog/product/cache/1/image/600x/040ec09b1e35df139433887a97daa66f/1/1/11_5_19_1_1.jpg'},
    {id: '2', name: 'Impresora HP', categoria: 'impresora', stock: '100', price: '150', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_113806549_774620_1?wid=800&hei=800&qlt=70'},
    {id: '3', name: 'Iphone 14', categoria: 'celular', stock: '100', price: '2080', foto: 'https://claroperupoc.vtexassets.com/arquivos/ids/408042/iphone_14_purple_2.png?v=638018133368930000'},
    {id: '4', name: 'Computadora Lenovo I5', categoria: 'desktop', stock: '100', price: '500', foto: 'https://m.media-amazon.com/images/I/41uVshZ4YkL._AC_.jpg'},
    {id: '5', name: 'TV Samsung 65"', categoria: 'tv', stock: '100', price: '2500', foto: 'https://promart.vteximg.com.br/arquivos/ids/6605534-1000-1000/image-7682d723a2de4e89889689cd2387648d.jpg?v=638040393168300000'},
    {id: '6', name: 'Samsung S22', categoria: 'celular', stock: '100', price: '1500', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_115217884_1042104_1?wid=1500&hei=1500&qlt=70'},
    {id: '7', name: 'Laptop Lenovo', categoria: 'laptop', stock: '100', price: '550', foto: 'https://compuusa.com.pe/8764-large_default/laptop-lenovo-v14-r5-4500u8gb1tb14freedos.jpg'},
    {id: '8', name: 'Impresora Epson', categoria: 'impresora', stock: '100', price: '160', foto: 'https://promart.vteximg.com.br/arquivos/ids/4716358-1000-1000/image-48b0c37805e74ae198a77f29b0000d86.jpg?v=637819471318670000'},
    {id: '9', name: 'Iphone 12', categoria: 'celular', stock: '100', price: '1080', foto: 'https://tiendasishop.com/media/catalog/product/m/g/mgj83lz_a_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'},
    {id: '10', name: 'Computadora Dell I5', categoria: 'desktop', stock: '100', price: '555', foto: 'https://microtechperu.com.pe/wp-content/uploads/2020/08/321029img01.jpg'},
    {id: '11', name: 'TV LG 65"', categoria: 'tv', stock: '100', price: '2300', foto: 'https://wongfood.vtexassets.com/arquivos/ids/542851/NanoCell-LG-TV-65-4K-ThinQ-AI-65NANO80-2022-1-299745226.jpg?v=637879094207970000'},
    {id: '12', name: 'Xiaomi 12 Pro', categoria: 'celular', stock: '100', price: '800', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_114095096_882457_1?wid=800&hei=800&qlt=70'},
    {id: '13', name: 'Laptop Asus', categoria: 'laptop', stock: '100', price: '670', foto: 'https://promart.vteximg.com.br/arquivos/ids/6649776-1000-1000/image-41ed7d6c39e141539668ae15495cf9ee.jpg?v=638053600668770000'},
    {id: '14', name: 'Impresora Brother', categoria: 'impresora', stock: '100', price: '120', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_114827175_1040140_1?wid=800&hei=800&qlt=70'},
    {id: '15', name: 'TV Xiaomi 65"', categoria: 'tv', stock: '100', price: '1840', foto: 'nb'}
]

export const gFetch = (nro) => {
    return new Promise( (resolve, reject)=>{
        const condition = true
        if (condition) {
            setTimeout(()=>{
                resolve(products)
            }, 3000)
        } else {
            reject('No existe ningun producto')
        }
    })
}