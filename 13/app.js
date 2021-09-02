$("body").append('<h1>Desafío complementario N° 13</h1>');

$("body").append('<button id="btn1">Apretar para ver animación</button>');

$("body").append("<div id='caja' style='display:none;background:red;width:200px;height:200px;'></div>")

$("#btn1").click(()=>
{
    $("#caja").fadeIn(2000, function()
    {
    $("#caja").animate(
        {
        height:"300px",
        },
        "slow",
        function()
        {
        $("#caja").animate(
            {
            width:"500px",
            },
            "slow",
            function()
                {
                $("#caja").animate(
                {
                opacity:"0.5",
                width: "100px",
                height:"100px",
                }
                )
                }
        )
        }
    );
    }
    )
}
);

