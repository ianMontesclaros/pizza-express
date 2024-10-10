import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-4 py-3">
      <LinkButton to="/menu">&larr; back to menu</LinkButton>

      <p className="font-semibold mt-7">Your cart is empty. Add some pizzas.</p>
    </div>
  );
}

export default EmptyCart;
