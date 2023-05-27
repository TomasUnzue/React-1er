const products = [
    {
        id: '1',
        name: 'remera',
        price : 6000 , 
        category : 'remera basica',
        img :'https://e7.pngegg.com/pngimages/779/30/png-clipart-white-t-shirt-white-t-shirt.png',
        stock: 25,
        description: 'Remera'
    },
    {
        id:'2',
        name: 'pantalon',
        price : 10000 ,
        category : 'pantalon',
        img : 'https://w7.pngwing.com/pngs/63/280/png-transparent-jeans-denim-slim-fit-pants-bell-bottoms-jeans-blue-fashion-boy-thumbnail.png' ,
        stock: 12,
        description: 'Pantalon estilo mom'
    },
    {
        id: '3',
        name : 'buzo',
        price : 14500,
        category: 'buzo' ,
        img : 'https://estampadosmendoza.com.ar/wp-content/uploads/2017/04/buzo-liso-png.png' ,
        stock : 23 ,
        description : 'Buzo oversize' 
    },
    {
        id: '4',
        name : 'short',
        price : 4499,
        category: 'short' ,
        img : 'https://www.nicepng.com/png/full/919-9195958_shorts-png-png-shorts.png' ,
        stock : 45 ,
        description : 'Short de baño' 
    },
    {
        id: '5',
        name : 'medias',
        price : 3499,
        category: 'medias' ,
        img : 'https://e7.pngegg.com/pngimages/417/298/png-clipart-sock-hosiery-black-socks-image-file-formats-socks.png' ,
        stock : 78 ,
        description : 'Medias 3/4' 
    },
    {
        id: '6',
        name : 'campera',
        price : 18999,
        category: 'campera' ,
        img : 'https://www.montagne.com.ar/tecnologias/soft-down/img/campera.png',
        stock : 35 ,
        description : 'Campera Inflable' 
    }

]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve(products)
        }, 500 )
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
