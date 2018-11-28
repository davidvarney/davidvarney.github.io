var protocol = window.location.protocol;
var current_url = window.location.host;
var uri = window.location.pathname;
var params = window.location.search.substring(1);
alert(current_url);
var filtered_content = [];
switch (current_url) {
    case 'timeassist.movehq.com':
        // Billable Column
        filtered_content.push({column_name: 'Billable?', field_name: 'Billable'});
        //
        break;
    default:
        // do nothing
        break;
}

console.log(filtered_content);
