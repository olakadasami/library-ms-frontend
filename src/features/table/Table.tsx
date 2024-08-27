import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

interface TableProps<T> {
  caption?: string;
  data: T[];
}
const TableComponent = <T extends object>({ caption, data }: TableProps<T>) => {
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  // generate columns from the keys of the first data object
  const columns = Object.keys(data[0]) as Array<keyof T>;
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {columns?.map((columnName, index) => (
            <TableHead
              key={index}
              className={`${index === 0 && "w-[100px]"} ${
                columns.length - 1 === index && "text-right"
              } capitalize`}
            >
              {String(columnName)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="hover:bg-gray-50">
            {columns.map((column, colIndex) => (
              <TableCell
                key={colIndex}
                className={`${colIndex === 0 && "font-medium"} ${
                  columns.length - 1 === colIndex && "text-right"
                } capitalize`}
              >
                {row[column] as ReactNode}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
};
export default TableComponent;
