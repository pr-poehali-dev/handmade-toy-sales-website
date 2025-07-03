import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}: {
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Cart Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg relative"
          size="icon"
        >
          <Icon name="ShoppingBag" className="w-6 h-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2
                className="text-2xl font-bold text-gray-800"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Корзина
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <Icon name="X" className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <Icon
                  name="ShoppingBag"
                  className="w-16 h-16 text-gray-300 mx-auto mb-4"
                />
                <p
                  className="text-gray-500"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  Корзина пуста
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3
                        className="font-semibold text-gray-800"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-primary font-bold">
                        {item.price.toLocaleString()} ₽
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(0, item.quantity - 1),
                            )
                          }
                        >
                          <Icon name="Minus" className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-8 h-8"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Icon name="Plus" className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Icon name="Trash2" className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between items-center mb-4">
                <span
                  className="text-lg font-semibold text-gray-800"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Итого:
                </span>
                <span
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {totalPrice.toLocaleString()} ₽
                </span>
              </div>
              <Button className="w-full text-lg py-6">
                <Icon name="CreditCard" className="w-5 h-5 mr-2" />
                Оформить заказ
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Cart;
