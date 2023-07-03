<template>
    <div class="nav-div">
        <nav>
        <ul class="nav-links">
            <h3>Connor Winkworth</h3>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT ME</a></li>
        </ul>
    </nav>
    </div>
</template>

<script>
export default {
    name: "NavBarComp"
}
</script>

<style scoped>
.nav-div {
    display: flex;
    
    align-items: center;
}

ul {
    display: flex;
    
    align-items: center;
}
li {
    float: right;
    list-style: none;
    
    align-items: center;
}
</style>