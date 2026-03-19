import { BodyContainer } from "@/components/BodyContainer";
import { CardContainer } from "@/components/CardContainer";
import { Header } from "@/components/Header";
import { Table } from "@/components/Table";
import { ITransaction } from "@/types/transaction";

const transactions:ITransaction[] = [
  {
    id: "1",
    title: "Salário",
    price: 5000,
    category: "Trabalho",
    type: "INCOME",
    data: new Date("2024-06-01"),
  },
  {
    id: "2",
    title: "Aluguel",
    price: 1500,
    category: "Moradia",
    type: "OUTCOME",
    data: new Date("2024-06-05"),
  },
  {
    id: "3",
    title: "Supermercado",
    price: 300,
    category: "Alimentação",
    type: "OUTCOME",
    data: new Date("2024-06-10"),
  },
  {
    id: "4",
    title: "Freelance",
    price: 1200,
    category: "Trabalho",
    type: "INCOME",
    data: new Date("2024-06-15"),
  }
];

export default function Home() {
  return (
    <div className="h-full min-h-screen">
      <Header />
      <BodyContainer>
         <CardContainer />
         <Table data={transactions} />
      </BodyContainer>
    </div>
  );
}
