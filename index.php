<?php
$menu = [
    'work' => ['url'=>'work.php','link'=>'Work'],
    'about-me' => ['url'=>'about-me.php','link'=>'About Me'],
    'contact' => ['url'=>'contact.php','link'=>'Contact']
];
?>
<?php
if(empty($_GET['page'])){
    $_GET['page'] = 'work';
}
else{
    if(empty($_GET['page'])){
        $_GET['page'] = '404';
    }
}
$page = ($menu[$_GET['page']]['url']);
?>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1" >
    <title>Tevin Mantock - Simple Web Design</title>
    <script src ="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Bootstrap Material Design -->
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/css/bootstrap-material-design.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/css/ripples.min.css">
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
    <!--Begin Fonts for document-->
    <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Courgette' rel='stylesheet' type='text/css'>
    <!--Personal Stylesheet-->
    <link href = "style.css" rel = "stylesheet" type = "text/css">
    <?php
    if($page == 'work.php'){
        print("<link href = 'work.css' rel = 'stylesheet' type = 'text/css'>");
    }
    ?>
    <link href = "https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" rel = "stylesheet" type = "text/css">
    <script src = 'script.js'></script>
</head>
<body>
<nav id = 'navbar' class = "navbar navbar-warning navbar-fixed-top">
    <div class = 'container-fluid'>
        <div class = 'navbar-header'>
            <button class = "navbar-toggle" data-toggle = "collapse" data-target = ".navbar-warning-collapse">
                <span class = "icon-bar"></span>
                <span class = "icon-bar"></span>
                <span class = "icon-bar"></span>
            </button>
            <a class = 'navbar-brand'>Tevin Mantock</a>
        </div>
        <div class = 'navbar-collapse collapse navbar-warning-collapse'>
            <ul class = 'nav navbar-nav navbar-right'>
                <?php
                    foreach($menu as $key => $value) {
                        ?>
                        <li ><a href ="?page=<?=$key;?>"><?=$value['link'];?></a></li>
                <?php
                }
                ?>
            </ul>
        </div>
    </div>
</nav>
<?php
    require($page);
?>
<script src="https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/js/ripples.min.js"></script>
<script src="https://cdn.jsdelivr.net/bootstrap.material-design/0.5.9/js/material.min.js"></script>
<script>
    $.material.ripples(".btn ");
    $(function () {
        $.material.init();
        $(".shor").noUiSlider({
            start: 40,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            }
        });

        $(".svert").noUiSlider({
            orientation: "vertical",
            start: 40,
            connect: "lower",
            range: {
                min: 0,
                max: 100
            }
        });
    });
</script>
</body>
</html>