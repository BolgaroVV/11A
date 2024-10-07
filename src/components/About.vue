<template>
  <div class="about">
    <h3>About Us</h3>
    <div class="about-content">
        <img src="../../public/com/slide-1.jpg" alt="" class="paragraph-image">
      Мы одна из ведущих корпораций в различных сферах цифровой деятельности. Наша продукция - это как продукты общего назначения, так и профессиональные.</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Exo+2:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);

.about {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  h3 {
    text-shadow: 0px 0px 5px var(--main-color);
  }
}

.about-content {
  text-align: center;
  display: grid;
  gap: 20px;
}

.paragraph-image {
  max-width: 500px;
  width: 500px;
  aspect-ratio: 1;
  object-fit: cover;
}

.title-content {
    font-size: 18px;
    color: transparent;    
	-webkit-background-clip: text;
	background-clip: text;
	background-image: linear-gradient(to right, rgba(0, 169, 255, 1) 0%, rgba(135, 56, 248, 1) 60%);
}
</style>