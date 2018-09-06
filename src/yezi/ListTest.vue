<template>
    <div class="layout">
        <ul class="list_skin">
             <div class="item">
                <p>啦啦啦</p>
                <img/>
                <div></div>
            </div>
            <div class="item">
                <p>啦啦啦1</p>
                <img/>
                <div></div>
            </div>
            <div class="item">
                <p>啦啦啦2</p>
                <img/>
                <div></div>
            </div>
            <div class="item">
                <p>啦啦啦3</p>
                <img/>
                <div></div>
            </div>
        </ul>
       
    </div>
</template>

<style scoped>

.item{
    /* width:16rem;
    height: 10.65rem; */
    width:320px;
    height: 213px;
    background-image: url(../assets/is_build_bg.png);
    background-size: contain;
    background-repeat: round;
    margin: 0 20px 20px 0;

}
.item2{
    width:16rem;
    height: 10.65rem;
    background-image: url(../assets/is_build_bg.png);
    background-size: contain;
    background-repeat: round;
    margin: 0 20px 20px 0;

}
.layout{
    justify-content:center;
}
.list_skin{
  display: flex;
  width: 30rem;
  /* flex-direction: column-reverse; */
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
  /* align-items: flex-end; */
  
  justify-content: center;
  transform: translate(10px);
  margin: auto;
  /* padding: 20px; */
  /* -webkit-align-content:space-between; */
  
}
</style>
