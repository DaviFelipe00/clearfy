import { BudgetOptions } from "@/components/BudgetForm";

export default function OrcamentoPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 gradient-bg">
      {/* O 'pt-32' garante que o conteúdo não fique escondido atrás do Header fixo */}
      <div className="max-w-7xl mx-auto">
        <BudgetOptions />
      </div>
    </main>
  );
}