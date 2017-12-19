var _header = {'X-CSRF-TOKEN': $('#_token').val()};

function book_create() {
  var data = {
    name: $('#name_insert').val()
  };
 
  $.ajax({
    url: 'books',
    type: 'post',
    data: data,
    headers: _header,
    success: function($response) {
      location.reload();
    }
  });
}

function book_open(book) {
  $('#name_update').val(book.name);
  $('#id_update').val(book.id);
  $('#modal-update').modal('show');
}

function book_update() {
  var data = {
    id: $('#id_update').val(), 
    name: $('#name_update').val()
    };

  $.ajax({
    url: 'books/' + data.id,
    type: 'put',
    data: data,
    headers: _header,
    success: function($response) {
      location.reload();
    }
  });
}

function book_delete(id) {
  $.ajax({
    url: 'books/' + id,
    type: 'delete',
    headers: _header,
    success: function($response) {
      location.reload();
    }
  });
}