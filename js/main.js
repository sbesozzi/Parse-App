import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'VUCBtzgL28gA63f4yAJ0kGRh2nMas1zDxCHLg3LD',
    'X-Parse-REST-API-Key': 'ljIYHrZfT3hLUSeDiEpvHpa2JjFqc9kbROWbUdG9'

  }
});

import PersonModel from './person_model';
import PeopleCollection from './people_collection';
import PersonTemplate from './person_template';

let people = new PeopleCollection();

// Grab person_template & pass in for each
function renderPeople () {
  //Create a DOM node for template
  let $ul = $('<ul></ul>');
  // Grab data and do for each
  people.each(function(person) {
    let data = person.toJSON();
    console.log('data', data);

    // Pass data to template
    let templateString = PersonTemplate(data);
    console.log ('templateString');

    // Create li DOM node
    let $li = $( PersonTemplate(data) );
    // Append li to ul template
    $ul.append($li);
  });

  // Append ul to body
  $('.list').html($ul);

};

// Fetch and render data
people.fetch().then(renderPeople);

// window.PersonModel = PersonModel;
// window.PeopleCollection = PeopleCollection;

console.log('Hello, World');

