import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      { name: "Bruschetta", description: "Toasted bread topped with tomatoes, garlic, and basil", price: "$8" },
      { name: "Calamari", description: "Lightly fried squid served with marinara sauce", price: "$12" },
      {
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
        price: "$10",
      },
    ],
  },
  {
    name: "Main Courses",
    items: [
      { name: "Grilled Salmon", description: "Served with roasted vegetables and lemon butter sauce", price: "$22" },
      {
        name: "Chicken Parmesan",
        description: "Breaded chicken breast topped with marinara and mozzarella",
        price: "$18",
      },
      { name: "Vegetable Risotto", description: "Creamy Arborio rice with seasonal vegetables", price: "$16" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", description: "Classic Italian dessert with coffee-soaked ladyfingers", price: "$8" },
      { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a gooey center", price: "$9" },
      { name: "Fruit Tart", description: "Buttery crust filled with pastry cream and fresh fruits", price: "$7" },
    ],
  },
]

export function RestaurantMenu() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Our Menu</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={menuCategories[0].name}>
          <TabsList className="w-full justify-start mb-4 overflow-x-auto">
            {menuCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {menuCategories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

