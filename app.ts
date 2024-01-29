import * as fs from "fs";
import * as xlsx from "xlsx";

interface IndexEntry {
  retailer: string;
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
    address: string;
    lat: number;
    lng: number;
    zip: number;
    state: string;
  };
  social: {
    facebook: string;
    googleplus: string;
    twitter: string;
  };
}

function processSpreadsheet(
  inputFilePath: string,
  outputFilePath: string
): void {
  const workbook = xlsx.readFile(inputFilePath);
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet

  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  const outputStream = fs.createWriteStream(outputFilePath);

  data.forEach((row: any) => {
    const indexEntry: IndexEntry = {
      retailer: row.directory_category?.toLowerCase(),
      contact: {
        email: row.directory_contact__email?.toLowerCase(),
        phone: row.directory_contact__phone,
        website: row.directory_contact__website,
      },
      location: {
        street: row.directory_location__street,
        city: row.directory_location__city,
        country: row.directory_location__country,
        address: row.directory_location__address,
        lat: parseFloat(row.directory_location__lat),
        lng: parseFloat(row.directory_location__lng),
        zip: parseInt(row.directory_location__zip),
        state: row.directory_location__state,
      },
      social: {
        facebook: row.directory_social__facebook,
        googleplus: row.directory_social__googleplus,
        twitter: row.directory_social__twitter,
      },
    };

    // Write the index entry as a JSON line to the file
    outputStream.write(JSON.stringify(indexEntry) + "\n");
  });

  outputStream.end();
  console.log("Processing complete. Output written to", outputFilePath);
}

processSpreadsheet("input.xlsx", "output.json");
