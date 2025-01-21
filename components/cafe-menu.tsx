import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const menuSections = [
  {
    title: "Coffee",
    items: [
      { name: "Espresso", price: "$2.50" },
      { name: "Cappuccino", price: "$3.50" },
      { name: "Latte", price: "$3.75" },
      { name: "Americano", price: "$3.00" },
    ],
  },
  {
    title: "Tea",
    items: [
      { name: "Earl Grey", price: "$2.75" },
      { name: "Green Tea", price: "$2.75" },
      { name: "Chamomile", price: "$2.75" },
      { name: "Chai Latte", price: "$3.50" },
    ],
  },
  {
    title: "Pastries",
    items: [
      { name: "Croissant", price: "$2.50" },
      { name: "Blueberry Muffin", price: "$3.00" },
      { name: "Chocolate Chip Cookie", price: "$2.00" },
      { name: "Cinnamon Roll", price: "$3.50" },
    ],
  },
]

export function CafeMenu() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {menuSections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item.name} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="font-semibold">{item.price}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

