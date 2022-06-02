const textConfig = {
  text1: "Hellu Bé Diễm!!!",
  text2: "Em rất vui vì chị đã ở đây 🤗 Ngày hôm nay của chị thế nào? Có mệt lắm không? 🤔 Em cũng không biết đặt tên Project này là gì nữa.. Cứ tiếp tục nhé💖💖 ",
  text3: "Chị là điều tuyệt nhất mà tạo hóa đã ban cho em 💖 ",
  text4: "Em từng nói em phải có Diễm Phúc lớn mới quen được 1 cô gái Diễm Lệ như chị. Giờ chỉ thiếu mỗi Diễm Tình thôi. Em biết chị cũng không cần yêu vì chị thích toán.. mà yêu thì nằm bên ngoài logic 😐 Nhưng mà bé ơi!! Chị có thể chỉ cần thoải mái tận hưởng thôi được không? Người như chị thích hợp vào vai nữ chính của đời em nên chị đừng cố trở thành phản diện. Em cũng muốn dành hết tình cảm của chị cho riêng mình 🙄nhưng mà em lại không thể khéo miệng như MC, chị biết đó.. mọi hành động đều phải xuất phát từ tim. Hi vọng lần này em không bị ngu 🙁 Tất cả những gì em làm chỉ để giữ chị luôn hạnh phúc. Níu cuộc tình này là cái bẫy.. thì em cũng cam tâm chui vào 🤣.Em chưa đủ dũng cảm nhìn chị rẽ hướng khác😞Em vẫn luôn cố đấy thôi tại em vẫn luôn sợ 1 ngày thấy chị hạnh phúc mà cười 1 nỗi là mất em rồi😢 Chị tưởng chừng như chẳng hề yếu đuối luôn tỏ ra lạnh lùng khiến đôi lúc em không hiểu nổi. Em gặp được chị là điều em chưa từng nghĩ tới em ngại phải thay đổi nên thế. Nếu không còn buồn thì có lẽ em đã là ai khác. Không phải em không hưởng thụ, không ghen tuông, không ích kỷ mà tại.. Phải đi qua hết những ngày mưa mình mới trân trọng những này nắng nên cứ để em yêu chị như ngày cuối nhé 💖 Em biết trong tình yêu quy tắc là rượt đuổi nhưng mà em mệt rồi.. mình đi cùng nhau được không? Em đã từng muốn tự bản thân nói ra những điều trên🙁 Cho em cơ hội nhé.   ",
  text5: "Xóa Web 💔",
  text6: "FIL 💖",
  text7: "Yêu chị.. em như cái thuyền vậy. VÔ BỜ BẾN ❤️. Nên là.. LÀM NGƯỜI YÊU EM NHÉ 😶",
  text8: "Gửiii",
  text9: "Okay ",
  text10: "Cảm ơn chị vì tất cả",
  text11: "Nhắn tin cho em nhé. Bất cứ khi nào chị rảnh 💖🤘 Ai cũng thích gem cả. Còn em.. 💖 ",
  text12: "Okeee bé ơiii",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
      backdrop: `
      rgba(0,0,123,0.4)
      url("img/giphy2.gif")
      left top
      no-repeat
    `,
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 650) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 700,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='ELTCCA nghĩ kỹ nhé!'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/Cute.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/Pink.Bear266/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});