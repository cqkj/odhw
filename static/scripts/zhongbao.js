$(function() {
  var para = {
    pageIndex: 1,
    pageSize: 10
  };
  // 根据用户的搜索条件获取数据
  var originsu = location.search.substring(1).split('=')[1];
  var su = decodeURIComponent(originsu);
  var state = $('.content_r_ttl-current').attr("v");
  para.keyword = su;
  para.typeid = type;
  para.state = state;
  loadData('/List/List', para, "zbItem", ".zbList");
  
  $(".content_r_ttl_item").click(function () {
    $(".content_r_ttl_item").removeClass("content_r_ttl-current");
    $(this).addClass("content_r_ttl-current");
    
    state = $('.content_r_ttl-current').attr("v");
    para.state = state;
    loadData('/List/List', para, "zbItem", ".zbList");
  });
});