<template>
    <div class="jumbotron text-center" style="margin-bottom:0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <footer>
    <a href="https://www.facebook.com/ahmedbasem.elshemy.9" class="fa fa-facebook-official" ></a>
    <a href="https://twitter.com/AhmedBasem" class="fa fa-twitter"></a>
    <i class="fa fa-linkedin"></i>
    <a href="https://github.com/AhmedBasem20" class="fa fa-github"></a>

  <p>Designed & Developed by <a class="owner" href="/" target="_blank">AhmedBasem</a></p>
</footer>
    </div>
</template>
<script>
export default {
    name: 'AppFooter',

}
</script>,

<style scoped>
.jumbotron {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.footer {
    margin: 0;
    background-color: cadetblue;
    
}
.owner {
    font-family: cursive;
    text-decoration: none;
}
.fa {
    padding: 20px;
    text-decoration-line: none;
    color:black;
    font-size: 30px;
}
.fa:hover {
    color: grey;
}
@media screen and (max-width: 500px) {
.fa {
    font-size: 18px;
}
p {
    font-size: 10px;
}    
}
</style>