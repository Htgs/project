<template>
  <div class="photobtn">
    <div class="btn">
      <input type="file" accept="image/*;capture=camera" class="inp" id="file" />
      <span>
        <img src="../assets/img/photo.png">
        上传相片
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        photobase64: ''
      }
    }
    // methods: {
    //   upload () {
    //     // 获取文件
    //     // 判断是否图片
    //     // 创建Canvas
    //     // 重新绘制图片(压缩)
    //     // 创建图片
    //     // 返回base64
    //     // 读取文件
    //     var f = document.querySelector('#file')
    //     var file = f.files[0]
    //     console.dir(file)

    //     var isImg = this.isImg(file)
    //     if (isImg) {}
    //   },
    //   isImg (f) {
    //     var type = f.type
    //     if (!/image.(jpg|png|jpeg|gif)/.test(type)) {
    //       return false
    //     } else {
    //       return true
    //     }
    //   },
    //   createCanvas: () {
    //     var canvas = document.createElement('canvas');
    //   },
    //   createImg () {
    //     var img = new Image()
    //   }
    // }
  }
</script>

<style scoped>
  .photobtn{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3.75rem;
    padding: 0 0.06rem 0.135rem 0.06rem;
  }
  .btn{
    position: relative;
    width: 3.635rem;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 0.01rem solid #C2C2C4;
    background-color: #EAEAEA;
    border-radius: 0.05rem;
    font-size: 0.18rem;
    text-align: center;
    color: #9FA1A0;
  }
  .inp{
    position: absolute;
    top: 0;
    left: 0;
    width: 3.635rem;
    height: 0.54rem;
    font-size: 0.18rem;
    opacity: 0;
  }
  .btn img{
    width: 0.38rem;
    height: 0.305rem;
    vertical-align: -0.05rem;
  }
</style>
