// Fonction pour ajouter un article à la base de données
function ajouterArticle(article) {
    // Récupérer les articles existants depuis localStorage
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
  
    // Ajouter le nouvel article à la liste
    articles.push(article);
  
    // Sauvegarder la liste mise à jour dans localStorage
    localStorage.setItem('articles', JSON.stringify(articles));
  }
  
  // Fonction pour récupérer tous les articles de la base de données
  function obtenirArticles() {
    return JSON.parse(localStorage.getItem('articles')) || [];
  }
  
  // Exemple d'utilisation :
  const nouvelArticle = {
    id: 1,
    nom: 'Produit A',
    prix: 19.99,
    description: 'Ceci est le produit A.',
  };
  
  ajouterArticle(nouvelArticle);
  
  const articlesEnregistres = obtenirArticles();
  console.log(articlesEnregistres);
  
