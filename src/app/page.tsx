import { ChartOverview } from "@/components/chart";
import { Sales } from "@/components/sales";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, Percent, User } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total de vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de vendas em 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Novos Clientes
              </CardTitle>
              <User className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Novos clientes em 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">240</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Total de pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Total de pedidos em 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">20</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none">
                Faturamento
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4" />
            </div>
            <CardDescription>Ticket em 90 dias</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">500</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
