import Backbone from 'backbone';
import PersonModel from './person_model';

// Fetch all data
let PeopleCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/people',

  model: PersonModel,
  // Get Parse URL data
  parse: function(data) {
    return data.results;
  }
});

export default PeopleCollection;