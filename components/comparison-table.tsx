import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const features = [
  { name: "QR Menus", starter: "1", pro: "5", enterprise: "Unlimited" },
  { name: "Customization", starter: "Basic", pro: "Advanced", enterprise: "Full" },
  { name: "Analytics", starter: false, pro: true, enterprise: true },
  { name: "Customer Support", starter: "24/7", pro: "Priority", enterprise: "Dedicated Manager" },
  { name: "API Access", starter: false, pro: false, enterprise: true },
  { name: "White Labeling", starter: false, pro: false, enterprise: true },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Feature</TableHead>
            <TableHead>Starter</TableHead>
            <TableHead>Pro</TableHead>
            <TableHead>Enterprise</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature) => (
            <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell>{renderValue(feature.starter)}</TableCell>
              <TableCell>{renderValue(feature.pro)}</TableCell>
              <TableCell>{renderValue(feature.enterprise)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function renderValue(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? <Check className="text-green-500" /> : <X className="text-red-500" />
  }
  return value
}

