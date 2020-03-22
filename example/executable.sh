#!/bin/bash

echo 'Hello, world!'
if [[ "$#" > 0 ]]
then echo "You provided the arguments:" "$@"
fi
