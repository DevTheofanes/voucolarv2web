import { NewHeader } from '../../components/NewHeader';
import { useCart } from '../../hooks/useCart';
import { CartEmpty } from './Main/CartEmpty';
import Main from './Main/index.jsx';

export function Cart() {
  const { cart } = useCart()

  return (
    <>
      {
        cart.length === 0 ? (
          <>
            <NewHeader />
            <CartEmpty/>
          </>
        ) : (
          <>
            <NewHeader title="Carrinho" />
            <Main />
          </>
        )
      }
    </>
  );
}
