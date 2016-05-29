#!/bin/bash
echo "##############################"
echo "# PREPARING TO RUN E2E TESTS #"
echo "##############################"

echo "#######################################"
echo "# STARTING METEOR & RUNNING E2E TESTS #"
echo "#######################################"

USE_TEST_ENVIRONMENT=true meteor & chimp --ddp=http://localhost:3000 --browser=phantomjs
E2E_TEST_RESULT=$?

echo "######################"
echo "# E2E TESTS FINISHED #"
echo "######################"

echo "######################################"
echo "# ASSIGN RESULTS TO E2E_TEST_RESULT "$E2E_TEST_RESULT"#"
echo "######################################"

if [ "$E2E_TEST_RESULT" == "0" ]; then
  echo "####################"
  echo "# E2E TESTS PASSED #"
  echo "####################"
else
  echo "####################"
  echo "# E2E TESTS FAILED #"
  echo "####################"
fi

echo "##################"
echo "# KILLING METEOR #"
echo "##################"

kill -9 `ps ax | grep node | grep meteor | grep -v atom | awk '{print $1}'`

echo "####################"
echo "# RETURNING RESULT #"
echo "####################"

exit $E2E_TEST_RESULT
