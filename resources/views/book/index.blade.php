@extends('layout.main')

@section('content')
<pre>{{$books}}</pre>
<div class="row">
<div class="col-md-6 col-md-offset-3">
<div class="btn btn-success pull-right" data-toggle="modal" data-target="#modal-insert">Add Into Book</div>
<table class="table table-hover">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>&nbsp;</th>
</tr>
</thead>
<tbody>
@foreach($books as $book)
<tr>
<td>{{$book->id}}</td>
<td>{{$book->name}}</td>
<td>
<a class="btn btn-primary btn-sm" onclick="book_open({{$book}})">Update</a>
<a class="btn btn-danger btn-sm" onclick="book_delete({{$book->id}})">Delete</a>
</td>
</tr>
@endforeach
</tbody>
</table>
@include('book.modal-insert')
@include('book.modal-update')
</div>
</div>
@endsection