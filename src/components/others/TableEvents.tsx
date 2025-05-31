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
    paymentStatus: "Carnaval",
    totalAmount: "",
  },
    {
    invoice: "+4",
    paymentStatus: "Dia dos namorados",
    totalAmount: "14/02",
  },
  {
    invoice: "+2",
    paymentStatus: "Pascoa",
    totalAmount: "05/04",
  },
  {
    invoice: "+3",
    paymentStatus: "São joao",
    totalAmount: "24/06",
  },

  {
    invoice: "+5",
    paymentStatus: "Dia do amigo",
    totalAmount: "",
  },
  {
    invoice: "+6",
    paymentStatus: "Halloween",
    totalAmount: "31/10",
  },
  {
    invoice: "+7",
    paymentStatus: "Natal",
    totalAmount: "24/11",
  },
];

export function TableEvents() {
  return (
    <div>
      <Table className="text-desc bg-blue-100 rounded shadow border border-zinc-300">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Eventos</TableHead>
            <TableHead>Data</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice?.invoice}>
              <TableCell>{invoice?.paymentStatus}</TableCell>
              <TableCell>
                {invoice?.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
