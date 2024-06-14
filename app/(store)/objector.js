const cart = [
    {
        "name": "f-v-possum-tableChair-1",
        "quantity": 1,
        "cost": 100000,
        "price_id": "price_1PMMoCAffyl9LVuoFnbnlIsW"
    },
    {
        "name": "f-v-possum-tableChair-1",
        "quantity": 1,
        "cost": 100000,
        "price_id": "price_1PMMoCAffyl9LVuoFnbnlIsW"
    }
]

const cart = [
    {
        "name": "f-v-possum-tableChair-1",
        "quantity": 1,
        "cost": 100000,
        "price_id": "price_1PMMoCAffyl9LVuoFnbnlIsW"
    },
    {
        "name": "f-v-possum-tableChair-1",
        "quantity": 1,
        "cost": 100000,
        "price_id": "price_1PMMoCAffyl9LVuoFnbnlIsW"
    }
];

const simplifyCart = (cart) => {
    return Object.values(cart.reduce((acc, item) => {
        if (acc[item.price_id]) {
            acc[item.price_id].quantity += item.quantity;
        } else {
            acc[item.price_id] = { ...item };
        }
        return acc;
    }, {}));
};

const simplifiedCart = simplifyCart(cart);
console.log(simplifiedCart);


const cart = [
    {
        "name": "f-v-possum-tableChair-1",
        "quantity": 1,
        "cost": 100000,
        "price_id": "price_1PMMoCAffyl9LVuoFnbnlIsW"
    },
    {
        "name": "f-v-bizdar-sideTable&chair-2",
        "quantity": 2,
        "cost": 120000,
        "price_id": "price_1PMMpkAffyl9LVuoLRiDLeZp"
    },
    {
        "name": "f-v-secar-chair-3",
        "quantity": 2,
        "cost": 100000,
        "price_id": "price_1PMMtqAffyl9LVuo6TXgokgs"
    }
]