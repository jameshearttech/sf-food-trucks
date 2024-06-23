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
  -f, --food-items <value>     Search food items for keyword
  -s, --status <value>         Permit status (default: "APPROVED")
  -t, --facility-type <value>  Facility type (default: "Truck")
  -h, --help                   display help for command
```
