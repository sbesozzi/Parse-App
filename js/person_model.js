import Backbone from 'backbone';

// Fetch model data
let PersonModel = Backbone.Model.extend({
   url: 'https://api.parse.com/1/classes/people',


idAttribute: 'object.id'

});

export default PersonModel;