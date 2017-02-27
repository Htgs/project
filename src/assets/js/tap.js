;(function (){

    // touchstart
    // touchmove
    // touchend
    // 开始坐标 touch时间 结束坐标
    // 根据两个坐标判断做了哪些动作
    function touchStart (e,self){
        var touchObj = self.touchObj;
        touchObj.startX = e.touches[0].clientX;
        touchObj.startY = e.touches[0].clientY;
        touchObj.startTime = new Date().now();
    }
    function touchEnd (e,self){
        var touchObj = self.touchObj;
        touchObj.endX = e.touches[0].clientX;
        touchObj.endY = e.touches[0].clientY;
        touchObj.endTime = new Date().now();
        touchObj.distanceX = touchObj.endX - touchObj.startX;
        touchObj.distanceY = touchObj.endY - touchObj.startY;
        touchObj.time = touchObj.endTime - touchObj.stratTime;
        isTap(self);
    }
    function whichGesture(self) {
        if(self.time < 300 && Math.abs(self.distanceX) < 6 && Math.abs(self.distanceY) < 6){
            //tap
            return 'tap';
        }
        if( Math.abs(self.distanceX) >= Math.abs(self.distanceY) ){
            if( distanceX > 20  ){
                //向左滑动
                return 'swipeLeft';
            }
        }
        if( Math.abs(distanceX) >= Math.abs(distanceY) ){
            if( distanceX < -20  ){
                //向右滑动
                return 'swipeRight';
            }
        }
    }

    var vTap = {};
    vTap.install = function(Vue) {
        Vue.directive('tap',{
            isFn: true,
            bind: function (el, binding) {
                el.touchObj = {};
                el.addEventListener("touchstart",function(e){
                    touchStart(e,el);
                },false);
                el.addEventListener("touchend",function(e){
                    touchEnd(e,el);
                    var gesture = whichGesture(el);
                    switch (gesture) {
                        case 'tap': {
                            //do
                            var method = binding.value.method;
                            var params = binding.value.params;
                            method(params);
                        }
                        case 'swipeLeft': {
                            //do
                        }
                        case 'swipeRight': {
                            //do
                        }
                    }
                },false);
            },
            update: function (fn) {},
            isTap: function () {},
            touchstart: function(e,self){},
            touchend: function(e,self){}
        });
    };

    if (typeof exports == "object") {
        module.exports = vTap;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return vTap })
    } else if (window.Vue) {
        window.vTap = vTap;
        Vue.use(vTap);
    }

})();
