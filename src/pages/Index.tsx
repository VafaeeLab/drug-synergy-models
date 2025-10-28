import { DataTable } from "@/components/DataTable";
import { drugSynergyData } from "@/data/drugSynergyData";
import { Database } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Database className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Drug Synergy Regression Summary
              </h1>
              <p className="text-muted-foreground mt-1">
                Comprehensive comparison of machine learning models for drug synergy prediction
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <DataTable data={drugSynergyData} />
      </main>

      <footer className="border-t border-border bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Data compiled from various drug synergy prediction research papers</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
