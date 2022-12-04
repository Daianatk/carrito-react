
let products = [
    {id: '1', name: 'Laptop Dell', categoria: 'laptop', stock: '100', price: '$ 980.00', foto: 'https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/H/6H9F2LA-1_T1657829543.png'},
    {id: '2', name: 'Impresora HP', categoria: 'impresora', stock: '100', price: '$ 150.00', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_113806549_774620_1?wid=800&hei=800&qlt=70'},
    {id: '3', name: 'Iphone 14', categoria: 'celular', stock: '100', price: '$ 2080.00', foto: 'https://claroperupoc.vtexassets.com/arquivos/ids/408042/iphone_14_purple_2.png?v=638018133368930000'},
    {id: '4', name: 'Computadora Lenovo I5', categoria: 'desktop', stock: '100', price: '$ 500.00', foto: 'https://m.media-amazon.com/images/I/61fc6CvS8FL.jpg'},
    {id: '5', name: 'TV Samsung 65"', categoria: 'tv', stock: '100', price: '$ 2500.00', foto: 'https://plazavea.vteximg.com.br/arquivos/ids/14415269-1000-1000/20258415.jpg'},
    {id: '6', name: 'Samsung S22', categoria: 'celular', stock: '100', price: '$ 1500.00', foto: 'https://images.samsung.com/es/smartphones/galaxy-s22/buy/02_carousel/02_group_exclusive/s22_s22plus_exclusive_carousel_groupkv_mo_nocopy.jpg'},
    {id: '7', name: 'Laptop Lenovo', categoria: 'laptop', stock: '100', price: '$ 550.00', foto: 'https://promart.vteximg.com.br/arquivos/ids/6424674-1000-1000/image-fddb1af68cbe40d7b829c8f6511f9b2b.jpg?v=637965507935600000'},
    {id: '8', name: 'Impresora Epson', categoria: 'impresora', stock: '100', price: '$ 160.00', foto: 'https://promart.vteximg.com.br/arquivos/ids/4716358-1000-1000/image-48b0c37805e74ae198a77f29b0000d86.jpg?v=637819471318670000'},
    {id: '9', name: 'Iphone 12', categoria: 'celular', stock: '100', price: '$ 1080.00', foto: 'https://tiendasishop.com/media/catalog/product/m/g/mgj83lz_a_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700'},
    {id: '10', name: 'Computadora Dell I5', categoria: 'desktop', stock: '100', price: '$ 555.00', foto: 'https://microtechperu.com.pe/wp-content/uploads/2020/08/321029img01.jpg'},
    {id: '11', name: 'TV LG 65"', categoria: 'tv', stock: '100', price: '$ 2300.00', foto: 'https://www.lg.com/pe/images/televisores/md07525909/gallery/medium01.jpg'},
    {id: '12', name: 'Xiaomi 12 Pro', categoria: 'celular', stock: '100', price: '$ 800.00', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_114095096_882457_1?wid=800&hei=800&qlt=70'},
    {id: '13', name: 'Laptop Asus', categoria: 'laptop', stock: '100', price: '$ 670.00', foto: 'https://home.ripley.com.pe/Attachment/WOP_5/2004286043094/2004286043094_2.jpg'},
    {id: '14', name: 'Impresora Brother', categoria: 'impresora', stock: '100', price: '$ 120.00', foto: 'https://falabella.scene7.com/is/image/FalabellaPE/gsc_114827175_1040140_1?wid=800&hei=800&qlt=70'},
    {id: '15', name: 'TV Xiaomi 65"', categoria: 'tv', stock: '100', price: '$ 1840.00', foto: 'https://home.ripley.com.pe/Attachment/WOP_5/2018264948141/2018264948141_2.jpg'}
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