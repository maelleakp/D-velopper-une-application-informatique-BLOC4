document.getElementById("navbar-btn").addEventListener('click', event => {
    document.getElementById("navbar").classList.toggle('is-active');
});

$(document).ready( function () {
    $('#datatable').DataTable();
} );