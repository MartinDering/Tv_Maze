$('body').css('background-color', 'gray');
$(function () {
    console.log("Let's get ready to party with jQuery!");
})
$('#movie-form').on('submit', function(event) {
    event.preventDefault();

    let title = $('input[name="title"]').val();
    let rating = $('input[name="rating"]').val();

    let listItem = $('<li>').text(`Title: ${title}, Rating: ${rating} `);
    let removeButton = $('<button>').text('Remove');

    listItem.append(removeButton);
    $('#movie-list').append(listItem);

    $('input[name="title"]').val('');
    $('input[name="rating"]').val('');
  });

  $('#movie-list').on('click', 'button', function() {
    $(this).parent().remove();
  });


///////////Testing OUT BELOW  //////////////

// $('#add-input').on('click', function () {
//     $('form').val(function(){
//         let title = $('input[name="title"]').val();
//       let rating = $('input[name="rating"]').val();
      
//       let listItem = $('<li>').text('Title: ' + title + ', Rating: ' + rating);

//         $('form').append(listItem).text(title, rating)
//     })
//     })

// $(document).ready(function() {
//     $('#add-input').on('click', function () {
//       // Get the values from the input fields
//       let title = $('input[name="title"]').val();
//       let rating = $('input[name="rating"]').val();

//       // Create the new list item
//       let listItem = $('<li>').text('Title: ' + title + ', Rating: ' + rating);

//       // Append the new list item to the list
//       $('ul').append(listItem);

//       // Clear the input fields
//       $('input[name="title"]').val('');
//       $('input[name="rating"]').val('');
//     });
//   });

// $('input').on('focus', function(){ 
//     $(this).val('Bamboozled')
// })