import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "+1",
    paymentStatus: "3-5x",
    totalAmount: "",
    paymentMethod: "5-7x Low essence",
  },
  {
    invoice: "+2",
    paymentStatus: "4-7x",
    totalAmount: "",
    paymentMethod: "7-9x Essence",
  },
  {
    invoice: "+3",
    paymentStatus: "5-8x",
    totalAmount: "1x Black heart",
    paymentMethod: "9-12x Low ether",
  },
  {
    invoice: "+4",
    paymentStatus: "6-9x",
    totalAmount: "1x Green heart",
    paymentMethod: "11-15x Ether",
  },
  {
    invoice: "+5",
    paymentStatus: "7-10x",
    totalAmount: "1-2x Blue heart",
    paymentMethod: "13-18x High ether",
  },
  {
    invoice: "+6",
    paymentStatus: "8-12x",
    totalAmount: "2x Pink heart",
    paymentMethod: "15-22x Elixir",
  },
  {
    invoice: "+7",
    paymentStatus: "9-14x",
    totalAmount: "2x Red heart",
    paymentMethod: "18-25x hime",
  },
  ,
  {
    invoice: "+8",
    paymentStatus: "10-16x",
    totalAmount: "2-3x Golden heart",
    paymentMethod: "22-28x Low enthiric",
  },
  ,
  {
    invoice: "+9",
    paymentStatus: "12-18x",
    totalAmount: "3x White heart",
    paymentMethod: "25-30x Enthiric",
  },
    {
    invoice: "+10",
    paymentStatus: "15-20x",
    totalAmount: "5x purple Hearts",
    paymentMethod: "25-30x Homes",
  },
];

export function TableRefines() {
  return (
    <Table className="text-desc">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] text-desc">Level</TableHead>
          <TableHead className="text-desc">Quimicos</TableHead>
          <TableHead className="text-desc">Materiais de refinamento</TableHead>
          <TableHead className="text-left text-desc">Hearts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice?.invoice}>
            <TableCell className="font-medium">{invoice?.invoice}</TableCell>
            <TableCell>{invoice?.paymentStatus}</TableCell>
            <TableCell>{invoice?.paymentMethod}</TableCell>
            <TableCell className="text-left">{invoice?.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
