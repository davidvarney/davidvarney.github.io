var protocol = window.location.protocol;
var current_url = window.location.host;
var uri = window.location.pathname;
var params = window.location.search.substring(1);
alert(current_url);
var filtered_content = [];
switch (current_url) {
    case 'timeassist.movehq.com':
        // Billable Column
        filtered_content.push({value: false, name: 'Billable', filtered_options: false});
        // Company Column
        filtered_content.push({value: 'MoveHQ', name: 'Companies', filtered_options: false});
        // Project Column
        filtered_content.push({value: '', name: 'Projects', filtered_options: ['MoveHQ', 'MoveIQ', 'Sirva', 'SIRVA', 'Windfall']});
        // Customer Column
        filtered_content.push({value: '', name: 'Customers', filtered_options: ['Move HQ', 'SIRVA']});
        break;
    default:
        // do nothing
        break;
}

console.log(filtered_content);

if (filtered_content.length > 0) {
    jQuery.each(filtered_content, function (index, value) {
        switch (value.name) {
            case 'Billable':
                jQuery('input[name^="' + value.name + '"]').prop("checked", value.value);
                break;
            case 'Companies':
                jQuery('select[name^="' + value.name + '"] option:contains("' + value.value + '")').prop("selected", true);
                break;
            case 'Projects':

                break;
            case 'Customers':

                break;
        }
    });
}
