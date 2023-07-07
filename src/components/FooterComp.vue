<template>
    <footer>
        <div class="socials-div">
            <div class="socials-img-div">
                <li><img src="https://i.postimg.cc/PrX4XZqX/pngwing-com.png" alt="instagram"></li>
                <li><img src="https://i.postimg.cc/pVCW791b/pngwing-com-1.png" alt="faceBook"></li>
                <li><img src="https://i.postimg.cc/4yfczmBv/pngwing-com-4.png" alt="twitter"></li>
                <li><img src="https://i.postimg.cc/3rfXhwdV/pngwing-com-3.png" alt="gmail"></li>
            </div>
        </div>
        <div>
            <p>&copy;COPYRIGHT</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: "FooterComp"
}

</script>

<style scoped>
footer {
    background-color: rgb(0, 0, 0);
}
.socials-div {
    display: flex;
    flex-direction: column;
}
.socials-img-div {
    justify-content: center;
    display: flex;
    list-style: none;
}
.socials-img-div li {
    list-style: none;
    margin: 0;
}
.socials-img-div img {
    padding: 1vw 0.5vw 0 0.5vw;
    width: 4vw;
    height: 4wv;
}
p {
    margin: 0.5vw 0 0.5vw 0;
    font-size: 1vw;
    color: white;
}
</style>