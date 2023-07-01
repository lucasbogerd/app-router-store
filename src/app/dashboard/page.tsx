import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Box, LucideIcon } from "lucide-react"
import { cloneElement } from "react"

export default function AdminPage() {
  return (
    <div className="px-8 py-2 max-w-4xl mx-auto">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-black">Dashboard</h1>
        <span>range: last week</span>
      </div>

      <div className="grid grid-cols-2">
        <StatCard
          title="Total Products"
          icon={<Box />}
          value="42"
          compare="+3 products vs last week"
        />
      </div>
    </div>
  )
}

export function StatCard({
  title,
  icon,
  value,
  compare,
}: {
  title: string
  icon: JSX.Element
  value: string
  compare: string
}) {
  // cloneElement so we can add classes to the icon as props are readonly
  const iconWithClasses = cloneElement(icon, {
    className: "text-slate-600 h-4 w-4 mb-1.5",
  })

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        {iconWithClasses}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm text-slate-600">{compare}</div>
      </CardContent>
    </Card>
  )
}
