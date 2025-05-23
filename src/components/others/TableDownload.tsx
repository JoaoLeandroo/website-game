import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

  const invoices = [
    {
      invoice: "RAM",
      paymentStatus: "4GB",
      paymentMethod: "8GB",
    },
    {
      invoice: "Graphics Card",
      paymentStatus: "Intel HD3000, or equivalent",
      paymentMethod: "Intel HD4000, or equivalent",
    },
    {
      invoice: "Hard Drive",
      paymentStatus: "10GB NTFS",
      paymentMethod: "10GB NTFS",
    },
    {
      invoice: "Operating System",
      paymentStatus: "Windows 7",
      paymentMethod: "Windows 10",
    },
    {
      invoice: "DirectX",
      paymentStatus: "PDirectX 9.0",
      paymentMethod: "DirectX 11.0",
    },
    {
      invoice: "Other",
      paymentStatus: "Microsoft Visual C++ Redistributable 2022 x86/x64",
      paymentMethod: "Microsoft Visual C++ Redistributable 2022 x86/x64",
    }
  ]
  
  export function TableDownload() {

    return (
      <Table className="bg-blue-200 border border-zinc-200 rounded text-[#1A1A1A] shadow">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead>Minimum</TableHead>
            <TableHead>Recommended</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice?.invoice}>
              <TableCell className="font-medium">{invoice?.invoice}</TableCell>
              <TableCell>{invoice?.paymentStatus}</TableCell>
              <TableCell>{invoice?.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    )
  }
  