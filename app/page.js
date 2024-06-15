import Image from 'next/image';
import Stripe from 'stripe';
import ProductCard from './productCard';
import ManualSlider from './(components)/component/manualSlider/manualSlider.jsx';
// import Footer from './(components)/component/footer/footer.jsx';
// import ResponsiveMenu from '../'

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? '',{
    apiVersion:'2020-08-27'
  });

  try {
    const res = await stripe.prices.list({
        expand:['data.product']
      })
      const prices = res.data;
      return prices;
  } catch(error){
    console.error('error',error);
    return [];
  }

}


// const gridStyles = { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(200px,100%),1fr))',gap:'0.5rem' };
// const snapStyles = 

export default async function Home() {
  const products = await getStripeProducts();
//   console.log(products);
  const horizontal = products.filter(product=> product.product.name.includes('-h-'));
  const verticals = products.filter(product=> product.product.name.includes('-v-'));

//   console.log('horizontal',horizontal);
  console.log('vertical items are', verticals.length);
  console.log('total items are', products.length);

  const hideStyles = {
    hideScrollbar: {
      '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
      'scrollbar-width': 'none',  /* Firefox */
    },
    hideScrollbarWebkit: {
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
 };

  return (
    <>
        <main style={{ ...hideStyles.hideScrollbar, ...hideStyles.hideScrollbarWebkit }} className="h-screen w-screen max-w-screen p-4 overflow-x-auto overflow-hidden snap-x snap-mandatory scroll-smooth">
            <div className='flex space-x-1'>
            {
                horizontal.length > 0 ? (horizontal.map((product,productIndex)=>{
                return(
                <ProductCard key={productIndex} product={product} text={true}/>
                )
            })
            ) : (
                <p>No products available</p>
            )}
            </div>
        </main> 

        <main style={{ ...hideStyles.hideScrollbar, ...hideStyles.hideScrollbarWebkit }} className="h-screen w-screen max-w-screen p-4 overflow-x-auto snap-x overflow-hidden snap-mandatory scroll-smooth"> 
            <div className='flex space-x-1'>
            {
                verticals.length > 0 ? (verticals.map((product,productIndex)=>{
                return(
                <ProductCard key={productIndex} product={product} text={false}/>
                )
            })
            ) : (
                <p>No products available</p>
            )}
            </div>
        </main>

    </>
    
  )
}