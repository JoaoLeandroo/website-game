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
    totalAmount: "",
  },
  {
    invoice: "+2",
    paymentStatus: "Pascoa",
    totalAmount: "",
  },
  {
    invoice: "+3",
    paymentStatus: "São joao",
    totalAmount: "",
  },

  {
    invoice: "+5",
    paymentStatus: "Dia do amigo",
    totalAmount: "",
  },
  {
    invoice: "+6",
    paymentStatus: "Halloween",
    totalAmount: "",
  },
  {
    invoice: "+7",
    paymentStatus: "Natal",
    totalAmount: "",
  },
];

export function TableEvents() {
  return (
    <div>
      <Table className="text-black bg-blue-100 rounded shadow border border-zinc-300">
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
