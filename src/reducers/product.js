const initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/11/28/636159432323817451_ip7p-gold-1.jpg',
        description: 'Sản phẩm Iphone 7 Plus của Apple',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/2/23/635918156584359185_s7-g1.jpg',
        description: 'Sản phẩm Samsung galaxy S7 của Samsung',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F9',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/9/7/636719290285040764_636707945145075227_oppoF9-xanh-0.jpg',
        description: 'Sản phẩm Oppo F9 của Oppo',
        price: 430,
        inventory: 20,
        rating: 5
    }
];

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return [...state];
    }
}

export default productsReducer;