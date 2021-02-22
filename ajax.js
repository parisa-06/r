$(document).ready(function(e) {
    $("#show").click(function(e) {

        var name = $("#name").val();
        console.log(name);
        var pass = $("#pass").val();


        $.ajax({
            url: 'https://api.noaeincloud.ir/api/sample',
            data: { "username": name, "password": pass },
            type: 'GET',
            dataType: 'JSON',
            beforeSend: function() {
                // alert("gfh");
            },
            success: function(xhr, response) {

                // alert(xhr.message);
                // console.log(xhr);
                if (xhr.status == true) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'button',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    });



                } else {
                    swal({
                            icon: 'error',
                            title: xhr.message,
                            text: 'Something went wrong!',
                            // footer: '<a href>Why do I have this issue?</a>'
                            closeOnClickOutside: xhr.backdrop,
                        })
                        // swal("Oops", xhr.message, "error",)
                };
            },
            error: function(xhr, status, error) {
                console.log(xhr.message)

            },

        });

    });

});