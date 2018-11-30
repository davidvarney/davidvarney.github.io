//var protocol = window.location.protocol;
var current_url = window.location.host;
//var uri = window.location.pathname;
//var params = window.location.search.substring(1);
//alert(current_url);

switch (current_url) {
    case 'timeassist.movehq.com':
        var filtered_content = [];
        // Billable Column
        filtered_content.push({value: false, name: 'Billable', filtered_options: false});
        // Company Column
        filtered_content.push({value: 'MoveHQ', name: 'Companies', filtered_options: false});
        // Project Column
        filtered_content.push({value: '', name: 'Projects', filtered_options: ['MoveHQ', 'MoveIQ', 'Sirva', 'SIRVA', 'Windfall']});
        // Customer Column
        filtered_content.push({value: '', name: 'Customers', filtered_options: ['Move HQ', 'SIRVA']});
        timeAssistAction(filtered_content);
        console.log(filtered_content);
        // Let's refresh the page every 30mins so we don't have to keep logging in
        // 1800000 miliseconds = 30mins
        setTimeout(function(){ location.reload(); }, 1800000);
        break;
    default:
        // do nothing
        break;
}

function timeAssistAction(filtered_content) {
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
                case 'Customers':
                    jQuery('select[name^="' + value.name + '"] option').each(function () {
                        // Skip the blank options
                        if (jQuery(this).val() == '') {
                            return true;
                        }
                        var select_option = this;
                        var found_it = 0;
                        jQuery.each(value.filtered_options, function (option_index, option_value) {
                            //console.log("Field: " + value.name);
                            //console.log("Option Value: " + jQuery(select_option).val());
                            //console.log("Searching For: " + option_value);
                            //console.log("Found?: " + jQuery(select_option).val().indexOf(option_value));
                            if (jQuery(select_option).val().indexOf(option_value) >= 0) {
                                found_it++;
                            }
                        });

                        if (found_it === 0) {
                            jQuery(this).remove();
                        }
                    });
                    break;
            }
        });
    }
}
