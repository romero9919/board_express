$(function(){

   //modal 정보 넘기기
   $("#delModal").on('show.bs.modal', function(e){
      const button = $(e.relatedTarget);
      const char = button.data('char');
      const delnum = button.data("delnum");
      $("#comment_delnum").val(delnum);
      $('#char').val(char);
   })

   $("#del").click(function(){
      const delpass = $('#password_del').val();
      const delnum = $('#delnum').val();
      const comment_delnum = $('#comment_delnum').val();
      const char = $("#char").val();
      let delurl;
      if(char == "main"){
         delurl = "/del";
      }else{
         delurl ="/comment_del";
      }
      $.ajax({
        url : delurl,
        type: 'post',
        data: { delpass, delnum, comment_delnum },
        success: function(data) {
            const rs = parseInt(data);
            if(rs > 0) {
               alert("삭제했습니다.");
               location.href="/";
            }else{
               alert("비밀번호를 다시 확인하세요.");
               $('#password_del').val('');
               $('#password_del').focus();
            }
        },
        error: function(xhr){
           alert("삭제하는데 에러가 발생했습니다. \n 다시 시도하거나 운영자에게 문의하세요.");
           $('#password_del').val('');
           $('#password_del').focus();
        }
      });
   });
});