import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  customizable: boolean;
}

const ProductCatalog = ({
  onAddToCart,
}: {
  onAddToCart: (id: number) => void;
}) => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Мишка Тедди классический",
      price: 2500,
      image: "/placeholder.svg",
      description:
        "Классический плюшевый мишка с мягким мехом и добрыми глазами. Идеальный спутник для сна и игр.",
      customizable: true,
    },
    {
      id: 2,
      name: "Единорог мечты",
      price: 3200,
      image: "/placeholder.svg",
      description:
        "Волшебный единорог с радужной гривой и блестящим рогом. Исполняет детские мечты о сказке.",
      customizable: true,
    },
    {
      id: 3,
      name: "Зайчик-обнимашка",
      price: 1800,
      image: "/placeholder.svg",
      description:
        "Нежный зайчик с длинными ушками и мягким животиком. Создан для крепких объятий.",
      customizable: true,
    },
    {
      id: 4,
      name: "Котёнок Мурзик",
      price: 2200,
      image: "/placeholder.svg",
      description:
        "Пушистый котёнок с полосатой шерстью и озорными глазками. Мурлычет от объятий.",
      customizable: false,
    },
    {
      id: 5,
      name: "Собачка Дружок",
      price: 2800,
      image: "/placeholder.svg",
      description:
        "Верный щенок с мягкой шерстью и виляющим хвостиком. Лучший друг для каждого ребёнка.",
      customizable: true,
    },
    {
      id: 6,
      name: "Слонёнок Дамбо",
      price: 3500,
      image: "/placeholder.svg",
      description:
        "Добрый слонёнок с большими ушами и мудрыми глазами. Символ удачи и счастья.",
      customizable: true,
    },
  ]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Каталог игрушек
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Выберите идеальную игрушку для себя или в подарок. Каждая игрушка
            может быть персонализирована под ваши пожелания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
