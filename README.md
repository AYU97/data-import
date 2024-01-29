# Data Import Script Documentation

## Overview

The data import script is designed to process an Excel spreadsheet and generate a JSON stream suitable for building a search engine index. It's implemented in Node.js using TypeScript.

## Usage

### Prerequisites

1. **Node.js and npm:** Ensure that Node.js and npm are installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AYU97/data-import.git
   ```

2. Navigate to the project directory:

   ```bash
   cd data-import
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Script

1. Update the `inputFilePath` and `outputFilePath` variables in the `processSpreadsheet` function in `app.ts` with the actual paths of our Excel spreadsheet and the desired output JSON file.

2. Run the script:

   ```bash
   npm start
   ```

3. Put the `inputFilePath` .xlsx file in the root of the folder. You can update the name of this file which will be used as the input. The current name is `input.xlsx`

4. Check the output file specified in `outputFilePath` i.e `output.json` for the generated JSON stream.

## Script Details

### Input

- The script expects an Excel file as input. Ensure that the file is in `.xlsx` format.

### Output

- The output is a JSON stream containing index entries suitable for a search engine.

### Schema

- The schema of the output JSON is based on the provided sample data structure.

### Error Handling

- Basic error handling is included, but additional validation and error reporting can be added for enhanced robustness.

## Limitations and Suggestions

### Limitations

- Data Integrity:
  The code assumes that the data in the Excel file is well-structured and adheres to expected formats. It may not handle extreme edge cases or unexpected data well.

- Schema Flexibility:
  Current schema is hard-coded. If the structure of the Excel sheet changes or if there are variations in the data format, the code may not adapt automatically.

- Error Handling:
  The code lacks detailed error handling. If there are unexpected issues or inconsistencies in the data, the application may not provide informative error messages or recover gracefully.

- Testing and Validation:
  While the code includes basic data validation, it may not cover all possible scenarios. Additional testing with diverse datasets and edge cases would be beneficial.

### Suggestions for Improvement:

- Allow users to specify column mappings or use metadata in the Excel file to dynamically determine the schema.
- Implement more advanced data validation, especially for fields like email addresses, phone numbers, and website URLs. Could use libraries for validation.
- Instead of hard-coding the schema, dynamically generate the schema based on the available columns in the Excel file. This would make the code more adaptive to changes in the data structure.
- Enhance logging and error handling to provide detailed information about issues encountered during data processing. This would aid in debugging and improve the overall robustness of the application.
- Develop unit tests to cover various aspects of the code, ensuring that it functions correctly and reliably. This is especially important when handling user data.
- Could use configuration files or environment variables for parameters such as file paths, output formats, or default values. This makes the application more flexible and easier to
- Comprehensive documentation for users, including instructions for setup, configuration, and troubleshooting. This is crucial for other team members or users who may interact with the application
