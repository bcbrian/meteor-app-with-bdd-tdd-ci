#!/bin/bash
echo "######################"
echo "# RUNNING UNIT TESTS #"
echo "######################"

spacejam test --driver-package practicalmeteor:mocha-console-runner --port 3100
UNIT_TEST_RESULT=$?

echo "#######################"
echo "# UNIT TESTS FINISHED #"
echo "#######################"

echo "########################################"
echo "# ASSIGN RESULTS TO UNIT_TEST_RESULT "$UNIT_TEST_RESULT" #"
echo "########################################"

if [ "$UNIT_TEST_RESULT" == "0" ]; then
  echo "#####################"
  echo "# UNIT TESTS PASSED #"
  echo "#####################"
else
  echo "#####################"
  echo "# UNIT TESTS FAILED #"
  echo "#####################"
fi

echo "####################"
echo "# RETURNING RESULT #"
echo "####################"

exit $UNIT_TEST_RESULT
