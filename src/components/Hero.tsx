import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Мягкие игрушки
            <br />
            <span className="text-primary">ручной работы</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Создаём уникальные мягкие игрушки с персонализацией для детей и
            взрослых. Каждая игрушка сделана с любовью и вниманием к деталям.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="ShoppingBag" className="mr-2" />
            Смотреть каталог
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            <Icon name="Heart" className="mr-2" />
            Персонализация
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon
              name="Sparkles"
              className="w-12 h-12 text-primary mx-auto mb-4"
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ручная работа
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Каждая игрушка создаётся вручную с использованием качественных
              материалов
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon
              name="Palette"
              className="w-12 h-12 text-primary mx-auto mb-4"
            />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Персонализация
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Выбирайте цвет, размер и добавляйте имя для создания уникальной
              игрушки
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Icon name="Gift" className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3
              className="text-xl font-semibold mb-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Идеальный подарок
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Подходит для любого возраста и станет особенным подарком для
              близких
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
