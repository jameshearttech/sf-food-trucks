import figlet from 'figlet';
import { Command } from 'commander';
import { Readable } from 'stream';
import axios from 'axios';
import { parse } from 'csv-parse';

// Write banner to console.
console.log(figlet.textSync('SF Food Trucks CLI'));

const program = new Command();
program
    // Get name, version, and description from package.json properties instead of hard coding.
    .name('sf-food-trucks-cli')
    .version('1.0.0')
    .description('San Francisco food trucks command-line application.')
    // Search food items for keywords (e.g., 'taco', 'gyro', 'pizza').
    .option('-f, --food-items [value...]', 'Search food items for keyword')
    // Dataset values for status include 'REQUESTED', 'EXPIRED', 'SUSPEND', or 'APPROVED'.
    .option('-s, --status <value>', 'Permit status', 'APPROVED')
    // Dataset values for facility type include 'Push Cart', 'Truck', or ''.
    .option('-t, --facility-type <value>', 'Facility type', 'Truck')
    .parse(process.argv);

const options = program.opts();

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
