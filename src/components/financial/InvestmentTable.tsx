
import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";

const rows = [
  {
    name: "Nairobi Green Transit",
    sector: "Transport",
    region: "Africa",
    size: "$1.2B",
    irr: "8.9%",
    risk: "B+",
    status: "In Progress"
  },
  {
    name: "Sao Paulo Digital Fiber",
    sector: "Digital",
    region: "Americas",
    size: "$560M",
    irr: "9.2%",
    risk: "A-",
    status: "Launched"
  },
  {
    name: "EU Water Resilience",
    sector: "Water",
    region: "Europe",
    size: "$340M",
    irr: "7.4%",
    risk: "A",
    status: "Planned"
  },
  {
    name: "Shanghai Renewable Grid",
    sector: "Energy",
    region: "Asia-Pacific",
    size: "$2.0B",
    irr: "8.1%",
    risk: "A+",
    status: "Complete"
  }
];

// Skeleton loading state, could be replaced or enhanced later
const isLoading = false;

const InvestmentTable: React.FC = () => (
  <Card className="bg-slate-900/80 border-slate-700/50 rounded-xl shadow h-full">
    <CardHeader>
      <CardTitle className="text-base text-cyan-300">Featured Investment Projects</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead>Region</TableHead>
              <TableHead>Investment</TableHead>
              <TableHead>IRR</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7}>
                  <div className="h-8 w-full animate-pulse bg-slate-800 rounded" />
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row, idx) => (
                <TableRow className="transition hover:bg-slate-800/60" key={idx}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.sector}</TableCell>
                  <TableCell>{row.region}</TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.irr}</TableCell>
                  <TableCell>
                    <span className={`font-semibold text-xs ${row.risk.startsWith("A") ? "text-green-400" : "text-yellow-300"}`}>
                      {row.risk}
                    </span>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={row.status} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
);
export default InvestmentTable;
