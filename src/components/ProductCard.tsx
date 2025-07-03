import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  customizable: boolean;
  onAddToCart: (id: number) => void;
}

const ProductCard = ({
  id,
  name,
  price,
  image,
  description,
  customizable,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {customizable && (
          <Badge className="absolute top-4 left-4 bg-primary text-white">
            <Icon name="Palette" className="w-3 h-3 mr-1" />
            Персонализация
          </Badge>
        )}
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-semibold mb-2 text-gray-800"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {name}
        </h3>
        <p
          className="text-gray-600 mb-4 line-clamp-2"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div
            className="text-2xl font-bold text-primary"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {price.toLocaleString()} ₽
          </div>
          <Button
            onClick={() => onAddToCart(id)}
            className="hover:bg-primary/90 transition-colors"
          >
            <Icon name="Plus" className="w-4 h-4 mr-2" />В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
