import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export function exportExcel(data){

const worksheet=XLSX.utils.json_to_sheet(data);

const workbook={
Sheets:{students:worksheet},
SheetNames:["students"]
};

const excelBuffer=XLSX.write(workbook,{
bookType:"xlsx",
type:"array"
});

const blob=new Blob([excelBuffer]);

saveAs(blob,"students.xlsx");

}