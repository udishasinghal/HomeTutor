$(()=>{
    $("#submit").click(()=>{
        $.post(
            '/reset',
            {
                new_password : $('#one').val(),
                token : $('#token').val()
            },
            (data)=>{
                
            }
        )
    })
})