import {create} from 'zustand';
import {persist} from 'zustand/middleware';

const UseStore = create(persist((set,get)=>({
    product:{},
    cart:[],
    openModal: false,
    setOpenModal: ()=>{set((state)=>({...state,openModal:!state.openModal}))},
    setProduct: ({newProduct})=>{set((state)=>({...state,product:newProduct}))},
    
    addItemToCart: ({ item }) => {
        console.log('New product came for addition to cart', item);

        // Get the current cart
        const currentCart = get().cart;

        // Add the new item to the cart
        const newCart = [...currentCart, item];
        console.log('New cart is ', newCart);

        // Simplify the cart by combining items with the same price_id
        const simplifiedCart = Object.values(
          newCart.reduce((acc, currentItem) => {
            if (acc[currentItem.price_id]) {
              acc[currentItem.price_id].quantity += currentItem.quantity;
            } else {
              acc[currentItem.price_id] = { ...currentItem };
            }
            return acc;
          }, {})
        );

        // Update the state with the simplified cart
        set((state) => ({ ...state, cart: simplifiedCart }));
        console.log('New simplified cart is ', simplifiedCart);
    },
    removeItemFromCart: ({priceId})=>{
        const newCart = get().cart.filter((item,itemIndex) => item.price_id !== priceId );
        set((state)=>({...state,cart:newCart}));
        const currentCart= get().cart;
        console.log('item removed',currentCart,newCart);
    },
   clearCart:()=>{set((state)=>({...state,cart:[]}))}
}),{name:'furniture-store'}));

export default UseStore;