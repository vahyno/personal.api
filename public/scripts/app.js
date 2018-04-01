console.log('sanity check')// wait for the DOM to finish loading

$(document).ready(function() {
  console.log('document ready');
  // all code to manipulate the DOM
  // goes inside this function
  $.ajax({
    method: 'GET',
    url: '/api/players',
    success: handleSuccess,
    error: handleError
  });

  $('#player-form').on('submit', function(event){
    event.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
    this.reset();

    $.ajax({
      method: 'POST',
      url: '/api/players',
      data: formData,
      success: handlePostSuccess,
      error: handleError
    });
  });

}); // doc ready ends here

function handleSuccess(players) {
    players.forEach(function(player) {
      renderPlayer(player);
    });
};

function handlePostSuccess (players) {
  console.log('post success');
  renderPlayer(player);
};


function handleError(err){
  console.log('There has been an error: ', err);
}


function renderPlayer(player){
  console.log('rendering player', player);
  var age = new Date().getFullYear() - parseInt(player.age);

$('#players').append(`

  <div class="col-md-9 col-xs-12">
    <ul class="list-group">
      <li class="list-group-item">
        <h4 class='inline-header'>Player Name:</h4>
        <span class='player-name'>${ player.name }</span>
      </li>

      <li class="list-group-item">
        <h4 class='inline-header'>Height:</h4>
        <span class='player-height'>${ player.height }</span>
      </li>

      <li class="list-group-item">
        <h4 class='inline-header'>Age:</h4>
        <span class='player-age'>${ age }</span>
      </li>

      <li class="list-group-item">
        <h4 class="inline-header">Skills:</h4>
        <span>${ player.skills }</span>
      </li>

    </ul>
  </div>

  `);
}


// var sample_players = [{
//   name: 'teddy',
//   height: '5ft4',
//   age: 1976,
//   skills: 'slow, big belly'
// },
// {
//   name: 'teddy',
//   height: '5ft4',
//   age: 1976,
//   skills: 'slow, big belly'
// }];
