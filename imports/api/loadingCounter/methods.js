import { Meteor } from 'meteor/meteor';
import { LoadingCounter } from "./loadingCounter.js";

export function incWatingOn(){
  let lc = LoadingCounter.findOne({});
  LoadingCounter.update(lc._id, {$inc:{waitingOn:1}});
}

export function decWatingOn(){
  let lc = LoadingCounter.findOne({});
  LoadingCounter.update(lc._id, {$inc:{waitingOn:-1}});
}
