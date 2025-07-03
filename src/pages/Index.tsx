import { useState } from "react";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import Cart from "@/components/Cart";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products = [
    {
      id: 1,
      name: "Мишка Тедди классический",
      price: 2500,
      image: "/placeholder.svg",
    },
    { id: 2, name: "Единорог мечты", price: 3200, image: "/placeholder.svg" },
    { id: 3, name: "Зайчик-обнимашка", price: 1800, image: "/placeholder.svg" },
    { id: 4, name: "Котёнок Мурзик", price: 2200, image: "/placeholder.svg" },
    { id: 5, name: "Собачка Дружок", price: 2800, image: "/placeholder.svg" },
    { id: 6, name: "Слонёнок Дамбо", price: 3500, image: "/placeholder.svg" },
  ];

  const handleAddToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <ProductCatalog onAddToCart={handleAddToCart} />
      <Cart
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
