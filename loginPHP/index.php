<?php 
  session_start(); 

 
  if (isset($_GET['logout'])) {
        session_destroy();
        unset($_SESSION['username']);
        header("location: login.php");
  }
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>School Stuff</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">School stuff</div>
            <ul class="menu">
                <li><a href="index.html">Home</a></li>
                <li class="dropdown">
                    <a href="#">Classes</a>
                    <ul class="submenu">
                        <li><a href="#">CP</a></li>
                        <li><a href="#">CE1</a></li>
                        <li><a href="#">CE2</a></li>
                        <li><a href="#">CM1</a></li>
                        <li><a href="#">CM2</a></li>
                        <li><a href="#">6ème</a></li>
                        <li><a href="#">5ème</a></li>
                        <li><a href="#">4ème</a></li>
                        <li><a href="#">3ème</a></li>
                    </ul>
                </li>
                <li><a href="#"><?php  if (isset($_SESSION['username'])) : ?>
                    <p><strong><?php echo $_SESSION['username']; ?></strong></p>
                    <p> <a href="home.html" style="color: red;">logout</a> </p>
                <?php endif ?></a></li>
                <p><a href="panier.html"></h><i class="fas fa-shopping-cart"></i></a></p>
            </ul>
        </nav>
    </header>
    
    <section class="hero">
        <h1>Welcome to our school supplies website!</h1>
        <p>Discover our packs "back to school"</p>
        <a href="product.html" class="cta-button">Buy now! </a>
    </section>
    
    <section class="featured-products">
        <h2>Flagship products</h2>

        <div class="product">
            <img src="https://spacenet.tn/64569-large_default/pack-scolaire-5en1-charlotte-sac-a-dos-panier-a-gouter-chariot-lunchbox-trousse.jpg" alt="pink pack">
            <h3>PACK BACK TO SCHOOL (pink)</h3>
            <p>
                Pack including a rucksack and various essential items for your child's back to school!
            </p>
            <span class="price">89.99€</span>
            <a href="product.html" class="cta-button">Buy now! </a>
        </div>

        <div class="product">
            <img src="https://dz.jumia.is/B3xmA13Hhe-IxfGFFf1dCJyhWS4=/fit-in/680x680/filters:fill(white):sharpen(1,0,false):quality(100)/product/01/285/2.jpg" alt="low cost pack">
            <h3>Unbranded product pack</h3>
            <p>This pack is unbranded, so it's available to a wider audience!</p>
            <span class="price">19.99€</span>
        </div>

        <div class="product">
            <img src="https://www.bing.com/images/blob?bcid=RN6kBiqcCywGxivbTq3eDPJMQjBz.....yk" alt="">
            <h3>School bag</h3>
            <p>School bag playstation</p>
            <span class="price">€39.99</span>
        </div>
        
    </section>
    
    <footer>
        <p>&copy; 2023 Alex/Mateo/Valentin. </p>
    </footer>
</body>
</html>
