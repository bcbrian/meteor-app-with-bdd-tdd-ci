echo "#######################"
echo "# PREPARING TO DEPLOY #"
echo "#######################"
SHOULD_DEPLOY="false"
THIS_BRANCH="NULL"
REPO_DIRECTORY=$(pwd)/.deploy
echo "####################################"
echo "# REPO DIRECTORY IS "$REPO_DIRECTORY
echo "####################################"

echo "##########################"
echo "# EVALUATING LOCAL OR CI #"
echo "##########################"

if [ "$TRAVIS" == "true" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "################"
  echo "# ON TRAVIS CI #"
  echo "################"

  SHOULD_DEPLOY="true"
  THIS_BRANCH=$TRAVIS_BRANCH

elif [ "$CIRCLECI" == "true" ] && [ "$CIRCLE_BRANCH" == "master" ]; then
  echo "################"
  echo "# ON CIRCLE CI #"
  echo "################"

  SHOULD_DEPLOY="true"
  THIS_BRANCH=$CIRCLE_BRANCH

else
  echo "############"
  echo "# ON LOCAL #"
  echo "############"

  if [ "$MANUAL_DEPLOY" == "true" ]; then
    SHOULD_DEPLOY=$MANUAL_DEPLOY
  fi
fi

echo "##########################"
echo "#   EVALUATION RESULTS   #"
echo "##########################"
echo "#                         "
echo "# SHOULD DEPLOY? "$SHOULD_DEPLOY" "
echo "# ON BRANCH "$THIS_BRANCH" "
echo "# REPO DIRECTORY "$REPO_DIRECTORY
echo "#                    "
echo "######################"


if [ "$SHOULD_DEPLOY" == "true" ]; then
  echo "#############"
  echo "# DEPLOYING #"
  echo "#############"

  # could build this so that it is git ignored???
  echo "################"
  echo "# BUILDING CSS #"
  echo "################"

  npm run build:css

  echo "################################"
  echo "# CHANGING TO PARENT DIRECTORY #"
  echo "################################"

  cd ../

  echo "#####################"
  echo "# CLONING METEOR-UP #"
  echo "#####################"

  git clone https://github.com/kadirahq/meteor-up

  echo "###################################"
  echo "# CHANGING TO METEOR-UP DIRECTORY #"
  echo "###################################"

  cd meteor-up

  echo "###############"
  echo "# NPM INSTALL #"
  echo "###############"

  npm install

  echo "##################"
  echo "# NPM PREPUBLISH #"
  echo "##################"

  npm run prepublish

  echo "############"
  echo "# NPM LINK #"
  echo "############"

  npm link

  echo "#####################################"
  echo "# CHANGING TO REPO DEPLOY DIRECTORY #"
  echo "#####################################"

  echo "#######################"
  cd "$REPO_DIRECTORY"
  echo "#######################"

  echo "#######################"
  echo "# DEPLOYING TO SERVER #"
  echo "#######################"

  mup deploy
  DEPLOY_RESULT=$?

  echo "#####################################"
  echo "# ASSIGN RESULTS TO DEPLOY_RESULT "$DEPLOY_RESULT" #"
  echo "#####################################"

  if [ "$DEPLOY_RESULT" == "0" ]; then
    echo "####################################"
    echo "# DEPLOYMENT FINISHED SUCCESSFULLY #"
    echo "####################################"
  else
    echo "#####################"
    echo "# DEPLOYMENT FAILED #"
    echo "#####################"
  fi

  exit $DEPLOY_RESULT
else
  echo "#################"
  echo "# NOT DEPLOYING #"
  echo "#################"
  exit 0
fi
