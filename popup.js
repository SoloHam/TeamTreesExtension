$.get('https://www.teamtrees.org/').then(function (html) {
    // Success response
    var $totalTrees = $(html).find('#totalTrees');
    $("#totalTrees").text($totalTrees.text);
}, function () {
    // Error response
    document.write('Access denied');
});