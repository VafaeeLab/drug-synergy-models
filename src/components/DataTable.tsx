import { useState, useMemo } from "react";
import { DrugSynergyEntry } from "@/data/drugSynergyData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableProps {
  data: DrugSynergyEntry[];
}

type SortField = keyof DrugSynergyEntry;
type SortDirection = "asc" | "desc";

export const DataTable = ({ data }: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("paper");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [filterPaper, setFilterPaper] = useState<string>("all");
  const [filterMetric, setFilterMetric] = useState<string>("all");

  const uniquePapers = useMemo(() => {
    const papers = new Set(data.map((entry) => entry.paper));
    return Array.from(papers).sort();
  }, [data]);

  const uniqueMetrics = useMemo(() => {
    const metrics = new Set(data.map((entry) => entry.synergyMetric));
    return Array.from(metrics).sort();
  }, [data]);

  const filteredAndSortedData = useMemo(() => {
    let filtered = data.filter((entry) => {
      const matchesSearch =
        entry.paper.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.dataset.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPaper = filterPaper === "all" || entry.paper === filterPaper;
      const matchesMetric = filterMetric === "all" || entry.synergyMetric === filterMetric;

      return matchesSearch && matchesPaper && matchesMetric;
    });

    return filtered.sort((a, b) => {
      const aValue = String(a[sortField]);
      const bValue = String(b[sortField]);
      
      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }, [data, searchTerm, sortField, sortDirection, filterPaper, filterMetric]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search papers, models, or datasets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={filterPaper} onValueChange={setFilterPaper}>
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Filter by Paper" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Papers</SelectItem>
            {uniquePapers.map((paper) => (
              <SelectItem key={paper} value={paper}>
                {paper}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={filterMetric} onValueChange={setFilterMetric}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filter by Metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Metrics</SelectItem>
            {uniqueMetrics.map((metric) => (
              <SelectItem key={metric} value={metric}>
                {metric}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-table-header text-table-header-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("paper")}
                    className="hover:bg-white/10 text-table-header-foreground"
                  >
                    Paper
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("dataset")}
                    className="hover:bg-white/10 text-table-header-foreground"
                  >
                    Dataset
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("synergyMetric")}
                    className="hover:bg-white/10 text-table-header-foreground"
                  >
                    Synergy Metric
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  <Button
                    variant="ghost"
                    onClick={() => handleSort("model")}
                    className="hover:bg-white/10 text-table-header-foreground"
                  >
                    Model
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </th>
                <th className="px-4 py-3 text-left font-semibold">Evaluation Strategy</th>
                <th className="px-4 py-3 text-left font-semibold">Regression Results</th>
                <th className="px-4 py-3 text-left font-semibold">Additional Info</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((entry, index) => (
                <tr
                  key={entry.id}
                  className={`border-t border-border hover:bg-table-row-hover transition-colors ${
                    index % 2 === 0 ? "bg-card" : "bg-table-row-alt"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-sm">{entry.paper}</td>
                  <td className="px-4 py-3 text-sm max-w-xs">{entry.dataset}</td>
                  <td className="px-4 py-3 text-sm">{entry.synergyMetric}</td>
                  <td className="px-4 py-3 text-sm font-medium">{entry.model}</td>
                  <td className="px-4 py-3 text-sm max-w-xs">{entry.evaluationStrategy}</td>
                  <td className="px-4 py-3 text-sm font-mono text-xs max-w-md">
                    {entry.regressionResults}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {entry.additionalInfo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Showing {filteredAndSortedData.length} of {data.length} entries
      </div>
    </div>
  );
};
