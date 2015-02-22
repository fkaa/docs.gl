{$search_versions_commands}

$(function() {
	// This file is loaded asynchronously. Now that it's loaded, reset the autocomplete source.
	$("#search-khr").autocomplete( "option", "source", search_versions["all"] );
});
