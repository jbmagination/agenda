$('#add').on('click', function (e) {
    var $this = $(this);
    var $firstRow=$this.closest('table').find('tr:first');
    var $newRow = $firstRow.clone();
    $newRow.find(':input').prop('checked', false);
    $newRow.insertAfter($firstRow);
});
