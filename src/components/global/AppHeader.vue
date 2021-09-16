<template>
    <div id = "header">
        <a href="/" id="logo">AhmedBasem</a>
    <div id = "nav">
        <ul>
        <router-link to="/" tag="li">
        <button class="btn">Home</button>
        </router-link>
        <router-link to="/blog" tag="li">
        <button class="btn">Blog</button>
        </router-link>
        <!--router-link to="/contact" tag="li">
        <a>Contact Us</a>
        </router-link-->
        </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',

}
</script>,

<style lang="scss" scoped>
#header {
    background-color: #292b2c;
    color: white;
    overflow: hidden;
    #nav {
        padding: 0;
    }
    #logo {
        font-size: 24px;
        padding: 20px 40px;
        float: left;
        width: 200px;
        text-decoration: none;
        color: white;
        //padding-top: 40px;
    }
    ul {    
        float: right;
        width: calc(70% - 200px);
        margin: 0;
        li {
            padding: 10px 40px;
            display: inline-block;
            font-size: 40px;
            cursor: pointer;
            text-align: center;
            .btn {
                color: white;
                //text-decoration: none;
                box-shadow: none;
            }
            border-radius: 20px;
            transition: .3s;
        }
        li:hover {
        background-color: rgb(231, 222, 222);
        .btn{
            color: black;
        }
        }
    }
    /*.btn {
        background-color: #292b2c;
    }
    .btn:hover {
        background-color: rgb(158, 116, 116);
    }*/
}
@media screen and (max-width: 380px) {
    #header {
    
    ul{
        width: fit-content;
        margin-top: -80px;
        li {
            padding: 10px 20px;
        }
    }
    #logo {
        width: auto;
        padding: 20px 20px;
        font-family: Kalam;
        font-size: large;
    }
    }
}
@media screen and (max-width: 730px) and (min-width: 380px) {
    #header {
    
    ul{
        width: fit-content;
        margin-top: -10px;
        li {
            padding: 15px 15px;
        }
    }
    #logo {
        width: auto;
        padding: 20px 20px;
        font-family: Kalam;
        font-size: large;
    }
    }
}

</style>