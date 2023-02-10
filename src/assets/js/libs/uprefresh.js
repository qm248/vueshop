/*eslint-disable*/
(function (global,document,factory) {
    //这个判断支持模块化比如react和vue
    if ( typeof module != 'undefined' && module.exports ) {
        module.exports = factory(global,document);
    } else if ( typeof define == 'function' && define.amd ) {
        define( function () { return factory(global,document); } );
    } else if(typeof global != "undefined") {
        global.UpRefresh = factory(global,document);
    }
})(window, document,function (global,document) {
    var UpRefresh=function(){
        this.fnScrollBottom=null;
        this.eventScroll();
    };
    UpRefresh.prototype={
        init:function(opts,callback){
            if(opts instanceof Object) {
                this.opts = opts;
                this.iMaxPage=this.opts.maxPage;
                this.fnCallback=callback;
                this.iOffsetBottom=this.opts.offsetBottom;
                this.iCurPage=this.opts.curPage;
            }

        },
        eventScroll:function(){
            var _this=this;
            _this.fnScrollBottom=_this.scrollBottom().bind(this);
            global.addEventListener("scroll",_this.fnScrollBottom,false);
        },
        uneventSrcoll:function(){
            var _this=this;
            global.removeEventListener("scroll",_this.fnScrollBottom,false);
        },
        scrollBottom:function(){
            var _this=this;
            var bScroll=true;
            return function(){
                if(!bScroll){
                    return;
                }
                bScroll=false;
                var timer=null;
                clearTimeout(timer);
                timer = setTimeout(function(){
                    //整个页面滚动条的高度
                    var iScrollHeight=document.documentElement.scrollHeight || document.body.scrollHeight;
                    //滚动到当前的距离
                    var iScrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                    //整个窗体的高度
                    var iWinHeight=document.documentElement.clientHeight || document.body.clientHeight;
                    if(iScrollHeight-(iWinHeight+iScrollTop)<=_this.iOffsetBottom){
                        if(_this.iCurPage<_this.iMaxPage) {
                            _this.iCurPage++;
                            _this.fnCallback(_this.iCurPage);
                        }
                    }
                    bScroll=true;
                },300);
            }
        }
    };
    return UpRefresh;
});
