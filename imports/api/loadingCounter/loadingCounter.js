import { Mongo } from 'meteor/mongo';

export const LoadingCounter = new Mongo.Collection(null);

if(LoadingCounter.find({}).count() < 1){
  LoadingCounter.insert({
    waitingOn: 0,
  });
}

LoadingCounter.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
