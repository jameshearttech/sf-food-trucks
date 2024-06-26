import figlet from 'figlet';
import { Command, Option } from 'commander';
import { Readable } from 'stream';
import axios from 'axios';
import { parse } from 'csv-parse';

// Write banner to console.
console.log(figlet.textSync('SF Food Trucks CLI'));

const program = new Command();
program
    // It would be nice if we imported the package.json as an object so we could use the name
    // version, and description properties instead of hard coding these values.
    .name('sf-food-trucks-cli')
    .version('1.0.0')
    .description('San Francisco food trucks command-line application.')
    // Search food items for keywords (e.g., 'taco', 'gyro', 'pizza').
    .requiredOption('-f, --food-items [value...]', 'Search food items for one or more keywords.')
    // Dataset values for status include 'REQUESTED', 'EXPIRED', 'SUSPEND', or 'APPROVED'.
    .addOption(
        new Option('-s, --status <value>', 'Permit status')
            .choices(['REQUESTED', 'EXPIRED', 'SUSPEND', 'APPROVED'])
            .default('APPROVED')
    )
    // Dataset values for facility type include 'Push Cart', 'Truck', or ''.
    // It would be nice if we included handling for those columns in the dataset where the permit
    // status has no value. I wrote it as an empty string above, but I have not included that in
    // code.
    .addOption(
        new Option('-t, --facility-type <value>', 'Facility type')
            .choices(['Push Cart', 'Truck'])
            .default('Truck')
    )
    .parse(process.argv);

const options = program.opts();

// This function streams and parses CSV. This is also where I have included the logic to filter
// the dataset from the parameters passed to the CLI application. I noticed in the dataset there
// are multiple entries for the same organization. More time should be spent to understand what if
// any logic is necessary to handle those cases.
async function downloadAndParseCsv(url: string): Promise<unknown[]> {
    const response = await axios.get(url, { responseType: 'stream' });
    const parser = response.data.pipe(parse({ columns: true }));
    const results: unknown[] = [];
    return new Promise((resolve, reject) => {
        parser
            .on('readable', function (this: Readable) {
                let record;
                while ((record = this.read())) {
                    for (const foodItem of options.foodItems) {
                        if (record.FoodItems.includes(foodItem)) {
                            if (record.FacilityType === options.facilityType) {
                                if (record.Status === options.status) {
                                    results.push(record);
                                }
                            }
                        }
                    }
                }
            })
            .on('end', () => resolve(results))
            .on('error', (error: unknown) => reject(error));
    });
}

downloadAndParseCsv('https://data.sfgov.org/api/views/rqzj-sfat/rows.csv')
    .then(data => console.log(data))
    .catch(error => console.error(error));
