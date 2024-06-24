# SF Food Trucks CLI

A simple CLI application that streams and filters [San Francisco food truck data](https://data.sfgov.org/api/views/rqzj-sfat/rows.csv).

```text
  ____  _____   _____               _   _____                _           ____ _     ___
 / ___||  ___| |  ___|__   ___   __| | |_   _| __ _   _  ___| | _____   / ___| |   |_ _|
 \___ \| |_    | |_ / _ \ / _ \ / _` |   | || '__| | | |/ __| |/ / __| | |   | |    | |
  ___) |  _|   |  _| (_) | (_) | (_| |   | || |  | |_| | (__|   <\__ \ | |___| |___ | |
 |____/|_|     |_|  \___/ \___/ \__,_|   |_||_|   \__,_|\___|_|\_\___/  \____|_____|___|

Usage: sf-food-trucks-cli [options]

San Francisco food trucks command-line application.

Options:
  -V, --version                output the version number
  -f, --food-items [value...]  Search food items for keyword
  -s, --status <value>         Permit status (choices: "REQUESTED", "EXPIRED", "SUSPEND", "APPROVED", default: "APPROVED")
  -t, --facility-type <value>  Facility type (choices: "Push Cart", "Truck", default: "Truck")
  -h, --help                   display help for command
```

## Process

I started work on this application by reviewing the dataset provided by sfgov.org. Thinking about the peck engineering challenge they mention food trucks, but I notice the dataset includes trucks and push carts. I'll assume we are interested in trucks not push carts. Another observation I made is the permit status. I'll also assume that we are not interested in trucks with a permit status other than APPROVED because they likely are not operational.

With some basic requirements in mind I searched the NPM registry for libraries that I could use to write a CLI application. The first library that caught my attention was a port of the argparse library, which I am familiar with from writing CLI applications in Python. This was tempting, but then I found the commander library. This was less comfortable, but seemed like the best choice. I recognized it from the semantic-release project, which I have used to automate releases in the past.

I searched the NPM registry for libraries I could use to get the dataset from sfgov.org. At first I was considering node-fetch, but then I came across axios. In the short term node-fetch is probably the better choice because it's simple, but axios is more robust with potentially better error handling and broader compatibility. Initially, our error handling is bad, but this could save time later not having to switch libraries for better error handling or more advanced features.

During my research I came across a fun library, figlet. I simply had to include this to generate an ascii art banner when the CLI application starts up!

I created the CLI banner. I read through the commander documention. I put together some initial parameters for the CLI application. I used generative AI to create an example function to get the dataset and parse the CSV. I put the example function into src/index.ts and refactored it to correct some implicit any type issues. I created the logic to filter the dataset using the CLI application's parameters.

After a day I came back to the project with fresh eyes. I saw the parameters and filtering logic needed more work. I improved the `-f` parameter by accepting multiple values and iterating over those values in the filtering logic so we can search multiple keywords. The `-s` and `-t` parameters had default values initially of 'APPROVED' and 'Truck' respectively, but I recognized this could be improved with lists of choices. The value in this change is that you cannot use a value that doesn't exist in the dataset. That said, if the possible permit statuses or facility types change in the future the code will need to be updated.
