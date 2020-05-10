# Activity Simulator
This is an activity simulation tool to produce telemetry which can be compared to data emitted
from the EDR agent to prevent regressions in that data. It is written in Typescript and designed
with the intent of being easily extendible.

There is an entrypoint which parses command line options then passes them off to the
Simulator and calls run(). The Simulator chooses Activities to execute and executes them.
Currently all Activities are chosen but in the future maybe there would command line options
that determine the selected Activities.

Each Activity performs some activity, such as creating a file or starting a process, and produces
one or more ActivityLogs to report what it did. These ActivityLogs are collected and passed to
the LogSerializer which serializes them for comparison with what the EDR agent produces.

The LogSerializer takes a LogFormatter as a constructor parameter. I have only implemented
the JsonLogFormatter to convert the ActivityLogs to JSON format, but the intent is that others
could be easily dropped in if we wanted to produce logs in another format such as CSV or
YAML. Logs are written to a logs/ directory in the project root directory.

## Usage:
Usage is simple once the appropriate version of Node is installed. If you use a tool such as
NVM, this is as simple as running “nvm install” which will install (if not present) and switch to
using the version specified in the .nvmrc file.

Next, dependencies need to be installed. This can be done by running “npm install”.

The project is now set up to be able to run. This can be done by running the exec package
script, “npm run exec -- [options]”. Run “npm run exec -- -h” for a help menu that lists options and
what they are for. An example executable is provided at examples/executable.sh.

## Platforms:

I developed and tested this application on macOS. Additionally, I have provided a Dockerfile
which builds off node:10.16-jessie. This Node base image is built on top of Debian’s “Jessie”
release. Running “docker-compose up --build" will get the container running. In another tab you
can run “docker ps” to get the container ID which can be used to run “docker exec -it
[container-id] bash”. From there you can run the “npm run exec -- [options]” command described
above. I believe this sufficiently tests that the functionality works on Linux.
