const ApiListBook = {
  books: [
    {
      id: 33,
      imgUrl:
        "https://designs.vn/wp-content/images/18-04-2013/Beyond%20the%20cover%20Ng%C3%B4n%20t%C3%ACnh%20%20(4).jpg",
      titleBook: "Thiên Sơn Mộ Tuyết",
      originPrice: 29000,
      salePrice: 16000,
      category: "truyện tranh",
      qtty: 30,
      descriptions:
        "Phỉ Ngã Tư Tồn đã lấy tựa đề truyện là “Thiên sơn mộ tuyết” có ngụ ý lồng ghép tên các nhân vật có sự liên quan đến nhau. Ngụ ý của tác giả muốn nói đến mối quan hệ phức tạp và chiếm nhiều nước mắt của cả bốn nhân vật này, một quan hệ “vạn mối tơ vò”, thật mà giả, giả mà thật, yêu và hận đan xen chồng chất.",
    },
    {
      id: 32,
      imgUrl:
        "https://vnwriter.net/wp-content/uploads/2017/10/sach-co-gai-vuot-thoi-gian.jpg",
      titleBook: "Cô Gái Vượt Thời Gian",
      originPrice: 49000,
      salePrice: 36000,
      category: "truyện tranh",
      qtty: 100,
      descriptions:
        "Cô gái vượt thời gian là một anime thể loại khoa học viễn tưởng lãng mạn công chiếu năm 2006, Hosoda Mamoru đạo diễn và Okudera Satoko viết kịch bản. Phim là một phần tiếp nối không rõ ràng của tiểu thuyết Cô gái vượt thời gian của Tsutsui Yasutaka",
    },
    {
      id: 31,
      imgUrl:
        "https://i.pinimg.com/736x/c5/1a/a1/c51aa1fc03000b4aa857efe6aa133b44--tins-book.jpg",
      titleBook: "Công Tắc Tình Yêu",
      originPrice: 90000,
      salePrice: 40000,
      category: "truyện tranh",
      qtty: 4,
      descriptions:
        "Em chỉ muốn lắp trong tim một cái công tắc, như vậy khi nào em muốn yêu anh thì yêu, không muốn yêu anh, thì sẽ không yêu nữa.” Chu Diễn Chiếu từng khắc cho Chu Tiểu Manh một đôi giày gỗ, dưới đế ghi bốn chữ trọn đời bên nhau",
    },
    {
      id: 3,
      imgUrl:
        "https://i.pinimg.com/originals/dd/be/49/ddbe4941a193c2eb6abab6606848565d.png",
      titleBook: "Mối Tình Vượt Thời Gian",
      originPrice: 120000,
      salePrice: 60000,
      category: "truyện tranh",
      qtty: 9,
      descriptions:
        "Mới ngày đầu tiên nhập học, Lâm Tiểu Ngư đã vô tình “đắc tội” ngay với hội trưởng hội học sinh trường Trung học phổ thông Phác Thiện, kết quả là đêm đó cô nàng phải ngủ ở ngoài công viên gần trường học. Trong lúc Lâm Tiểu Ngư đang “say giấc nồng” thì bỗng nhiên có một thứ gì đó rất nặng đè lên người cô. Khi cô choàng tỉnh giấc thì thấy trên người mình là một anh chàng khôi ngô tuấn tú trong bộ trang phục thời cổ đại, nai nịt gọn gàng, lưng đeo một thanh kiếm",
    },
    {
      id: 30,
      imgUrl:
        "https://cloud.inthienhang.com/wp-content/uploads/2020/03/mau-bia-sach-dep.jpg",
      titleBook: "Yêu Trên Từng Ngón Tay",
      originPrice: 200000,
      salePrice: 150000,
      category: "truyện tranh",
      qtty: 15,
      descriptions:
        "Yêu trên từng ngón tay là tuyển tập gồm 11 truyện ngắn về tình yêu, hôn nhân, gia đình, truyện nào cũng mở ra từ những nhức nhối, những dẳn vặt, những nỗi đau… nhưng kết thúc mỗi truyện luôn là niềm tin và hy vọng. Phương thuốc thần Trần Trà My kê cho nhân vật của mình luôn là tình thân và tình yêu.",
    },
    {
      id: 29,
      imgUrl:
        "https://image.thanhnien.vn/w1024/Uploaded/2022/wsxrxqeiod/2022_05_08/bia-sach2-9886.jpg",
      category: "sách thiếu nhi",
      titleBook: "Dế Mèn Phiêu Lưu Kí",
      originPrice: 50000,
      salePrice: 26000,
      qtty: 23,
      descriptions:
        "Dế Mèn phiêu lưu ký là tác phẩm văn xuôi đặc sắc và nổi tiếng nhất của nhà văn Tô Hoài viết về loài vật, dành cho lứa tuổi thiếu nhi. Ban đầu truyện có tên là Con dế mèn do Nhà xuất bản Tân Dân, Hà Nội phát hành năm 1941. Sau đó, được sự ủng hộ nhiệt tình của nhân dân, Tô Hoài viết thêm truyện Dế Mèn phiêu lưu ký",
    },
    {
      id: 28,
      imgUrl:
        "https://i.pinimg.com/236x/f0/e9/74/f0e974ec44ac81dbfd88b665b0c4ebd0--html.jpg",
      titleBook: "Đã Đến Lúc Nói Lời Tạm Biệt",
      originPrice: 27000,
      salePrice: 16000,
      category: "truyện tranh",
      qtty: 31,
      descriptions:
        "Yêu xa như ngọn nến trước gió, luôn bị đe dọa có thể tắt bất cứ lúc nào. Cũng bởi vì khoảng cách địa lý, nhưng sau cùng vẫn là sự ngăn cách của lòng người. Thế mới nói, khoảng cách và sự im lặng giết chết tình yêu. Vậy thì đến lúc phải nói lời tạm biệt rồi. Không phải dành cho em, mà cho những nỗi buồn đi hoang của anh.",
    },
    {
      id: 27,
      imgUrl:
        "https://designs.vn/wp-content/images/18-04-2013/Beyond%20the%20cover%20Ng%C3%B4n%20t%C3%ACnh%20%20(14).jpg",
      titleBook: "Nếu Như Anh Là Truyền Thuyết Của Em",
      originPrice: 40000,
      salePrice: 20000,
      category: "truyện tranh",
      qtty: 63,
      descriptions:
        "Trong thế giới của tình yêu, không hề có chuyện ai có lỗi với ai, chỉ là người này không biết trân trọng người kia mà thôi. Nếu Đáng tiếc không phải anh là khúc nhạc cho tuổi thanh xuân với mối tình đầu sâu sắc, Gặp anh là điều bất ngờ tuyệt vời nhất là mối tình của cặp đôi oan gia từ game ra đến đời, Mùa hạ chung tình là chuyện tình công sở nhẹ nhàng nhưng ngọt ngào thì Nếu em là truyền thuyết của anh lại là câu chuyện tình yêu hôn nhân nhiều cảm xúc.Con người đều phải trả giá cho những sai trái của mình, không phải anh cứ nói câu xin lỗi thì em phải đáp câu không sao đâu.Kết hôn ngày nay chỉ cần tốn năm đồng, phí ly hôn phải mất đến chín đồng.",
    },
    {
      id: 26,
      imgUrl:
        "https://bloganchoi.com/wp-content/uploads/2019/09/yeu-anh-hon-ca-tu-than.jpg",
      titleBook: "Yêu Anh Hơn Cả Tử Thần",
      originPrice: 79000,
      salePrice: 21000,
      category: "truyện tranh",
      qtty: 41,
      descriptions:
        "Yêu anh hơn cả tử thần kể về Đào Hoa Tiên Tử Mễ Bối, nàng tiên nữ xinh đẹp dịu dàng như cánh hoa đào của thiên đình. Nàng vì muốn báo ơn cho ân nhân cứu mạng của mình là cậu bé nhà nghèo tên Mạc Ngôn Hy mà đã hạ phàm, sống trên trần gian hai mươi năm và không ngừng tìm kiếm kiếp sau của ân nhân mình.",
    },
    {
      id: 25,
      imgUrl:
        "https://designs.vn/wp-content/images/18-04-2013/Beyond%20the%20cover%20Ng%C3%B4n%20t%C3%ACnh%20%20(10).jpg",
      titleBook: "Công Tắc Tình Yêu",
      originPrice: 58000,
      salePrice: 40000,
      category: "truyện tranh",
      qtty: 21,
      descriptions:
        "Yêu anh hơn cả tử thần kể về Đào Hoa Tiên Tử Mễ Bối, nàng tiên nữ xinh đẹp dịu dàng như cánh hoa đào của thiên đình. Nàng vì muốn báo ơn cho ân nhân cứu mạng của mình là cậu bé nhà nghèo tên Mạc Ngôn Hy mà đã hạ phàm, sống trên trần gian hai mươi năm và không ngừng tìm kiếm kiếp sau của ân nhân mình.",
    },
    {
      id: 24,
      imgUrl:
        "https://salt.tikicdn.com/cache/w1200/media/catalog/product/t/h/thoi_gian_hoa_no1.jpg",
      titleBook: "Thời Gian Hoa Nở",
      originPrice: 53000,
      salePrice: 20000,
      category: "truyện tranh",
      qtty: 16,
      descriptions:
        "Cô nàng Chu Tiểu Viên chưa-bao-giờ-có-bạn-trai, trong một lần đi xem mặt, tình cờ gặp lại người bạn thanh mai trúc mã hồi nhỏ - Thang Hi Hàn. Điều kì lạ là cô không hề nhận ra người bạn ấy.  Nhưng trong cô, dường như có một điều đó đã nảy nở. Cô nhận ra mình đã yêu Thang Hi Hàn",
    },
    {
      id: 23,
      imgUrl:
        "https://bloganchoi.com/wp-content/uploads/2019/08/toi-bi-bo-bat-coc.jpg",
      titleBook: "Tôi Bị Bố Bắt Cóc",
      originPrice: 40000,
      salePrice: 20000,
      category: "truyện tranh",
      qtty: 26,
      descriptions:
        "Tôi bị bố bắt cóc đạt giải Văn học Robo no ishi năm 2000 (Totto- chan: Cô bé bên cửa sổ cũng đạt giải thưởng này năm 1983). Tôi bị bố bắt cóc viết về một chuyến nghỉ hè. Đây là một chuyến nghỉ hè lạ lùng - bởi người ta đi nghỉ cùng tên bắt cóc!",
    },
    {
      id: 22,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTufPSiNpY-eWuJ3BZ1aaB1NIoJFxQbSiXCqz0K_35P4EjMvyml4YBmzqOxnrifCeqbLo&usqp=CAU",
      titleBook: "Liên Hoa Yêu Cốt",
      originPrice: 30000,
      salePrice: 10000,
      category: "truyện tranh",
      qtty: 42,
      descriptions:
        "Liên hoa yêu cốt là đóa sen xanh hình thành từ nộ khí của ba vạn đóa sen, sau đó dưới bàn tay của “người dẫn dắt”, nương nhờ cơ thể của một người phụ nữ mang thai giúp nộ khí ấy có được dạng người và sẽ được dẫn đường tu tiên để hóa giải tà niệm của Liên hoa yêu cốt ",
    },
    {
      id: 21,
      imgUrl:
        "https://sach86.com/wp-content/uploads/2019/06/bi-mat-thanh-xuan.jpg",
      titleBook: "Bí Mật Thanh Xuân",
      originPrice: 210000,
      salePrice: 200000,
      category: "truyện tranh",
      qtty: 24,
      descriptions:
        "Bí mật thanh xuân” là hai câu chuyện yêu thầm liên quan đến nhau. Phần đầu tác giả nói về Đoàn Văn Bách, cậu nam sinh 17 tuổi, với gương mặt sáng ngời, tính tình vui vẻ. Cậu đem lòng thầm yêu cô giáo trẻ Tiểu Nhĩ Đoá, đó cũng là bí mật của cậu.",
    },
    {
      id: 20,
      imgUrl:
        "https://i.pinimg.com/550x/e5/ac/f6/e5acf6004bcf0987896355780d5bb51f.jpg",
      titleBook: "Cũng Chỉ Là Một Hạt Bụi",
      originPrice: 320000,
      salePrice: 250000,
      category: "truyện tranh",
      qtty: 17,
      descriptions:
        "Lần trước nói chuyện điện thoại, tôi có hỏi cô một câu, cô còn nhớ không?”. Anh nhìn thẳng vào mắt cô mà nói.“Gì cơ?”.“Tôi hỏi, trái tim em còn đó không?”.",
    },
    {
      id: 1,
      category: "sách giáo dục",
      originPrice: 29000,
      salePrice: 16000,
      titleBook: "Luôn cảnh giác người lạ",
      qtty: 19,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-1.jpg",
      descriptions:
        "Khi một người lạ đến gần và tỏ vẽ thân thiện với mình thì phải làm như thế nào? Cuốn sách sẽ kể một câu chuyện mà một cô bé suýt gặp nguy hiểm vì gặp và chơi với một người đàn ông lạ mặt",
    },
    {
      id: 4,
      category: "sách giáo dục",
      originPrice: 59000,
      salePrice: 16000,
      titleBook: " Con đã lớn rồi",
      qtty: 31,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-2.jpg",
      descriptions:
        "Thông qua những câu chuyển trong quyển sách là những tâm lý, đưa ra những lời khuyên trong giáo dục giới tính của trẻ. Cha mẹ cũng hiểu và có thể giải đáp những thắc mắc của con vấn đề về giới tính mà độ tuổi này đang tò mò.",
    },
    {
      id: 5,
      category: "sách giáo dục",
      originPrice: 119000,
      salePrice: 116000,
      titleBook: "Khác biệt giới tính",
      qtty: 33,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-3.jpg",
      descriptions:
        " Qua quyển sách Giáo dục giới tính – Khác biệt giới tính kể về câu chuyển của một bé gái muốn đứng khi đi vệ sinh như em trai của mình, giúp cho trẻ cũng như phụ huynh biết cách giáo dục cho trẻ và con bạn cũng sẽ hiểu vì sao con trai và con gái khi đi vệ sinh lại khác nhau",
    },
    {
      id: 6,
      category: "sách giáo dục",
      originPrice: 190000,
      salePrice: 160000,
      titleBook: " Con được sinh ra như thế nào",
      qtty: 21,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-4.jpg",
      descriptions:
        "Qua quyển sách Con được sinh ra như thế nào lý giải cho bé hiểu rằng em bé được sinh ra từ đâu. Quyển sách kể một câu chuyện về cô bé đang đợi em mình chào đời, với rất nhiều thắc mắc mà cha mẹ có thể dễ dàng giải đáp, cũng như giúp trẻ hiểu được quá trình hình thành cho đến khi sinh ra",
    },
    {
      id: 7,
      category: "sách giáo dục",
      originPrice: 100000,
      salePrice: 90000,
      titleBook: "Những trò đùa ác ý",
      qtty: 15,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-5.jpg",
      descriptions:
        "Qua câu chuyện cũng giúp cho bé hiểu được đâu là những trò đùa ác ý, có nên thực hiện hay không và làm thế nào để tránh",
    },
    {
      id: 8,
      category: "sách giáo dục",
      originPrice: 70000,
      salePrice: 20000,
      titleBook: "Không phải lỗi của con",
      qtty: 31,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-6.jpg",
      descriptions:
        "Một đêm nọ, Lan giật mình tỉnh giấc và hét lên thất thimgUrl, mồ hôi lấm tấm trên trán, tim đập thình thịch liên hồi. Lan không thể quên được đã xảy ra mấy ngày trước, mặc dù cô bé rất muốn quên đi, nhưng sự việc thỉnh thoảng lại hiện về. Đây là câu chuyện mà một cô bé đã đi theo người lạ và bị quấy rối",
    },
    {
      id: 9,
      category: "sách giáo dục",
      originPrice: 40000,
      salePrice: 30000,
      titleBook: "Cô bé đá bóng và câu bé múa ba lê",
      qtty: 3,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-7.jpg",
      descriptions:
        "Nhưng cha mẹ nói rằng “Con gái mà muốn làm cầu thủ bóng đá ư, nếu muốn trở thành một thiếu nữ xinh đẹp thì không thể chơi bóng đá và bóng đá chỉ dành cho con trai”",
    },
    {
      id: 10,
      category: "sách giáo dục",
      originPrice: 10000,
      salePrice: 8000,
      titleBook: " Giáo dục giới tính – Nói “không”",
      qtty: 4,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-8.jpg",
      descriptions:
        " Hay Nam biểu diễn những bài hát và điệu nhảy trong trường cho ông bà xem, ông thì khen cháu giỏi con bà thì ôm cháu và mỉm cười.",
    },
    {
      id: 11,
      category: "sách giáo dục",
      originPrice: 19000,
      salePrice: 10000,
      titleBook: "Phép lịch sự khi đi vệ sinh",
      qtty: 5,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-9.jpg",
      descriptions:
        "Đây cũng là một câu chuyện của một câu bé vừa dạy em khi đi vệ sinh đúng cách vừa tự sửa những thói quen xấu khi đi vệ sinh của mình. Đây là một trong những nội dung mà quyển sách sẽ đề cập đến",
    },
    {
      id: 12,
      category: "sách giáo dục",
      originPrice: 20000,
      salePrice: 16000,
      titleBook: "Vệ sinh cá nhân",
      qtty: 1,
      imgUrl:
        "https://cachhay.net/wp-content/uploads/2020/09/sach-giao-duc-gioi-tinh-cho-tre-10.jpg",
      descriptions:
        "Vì quá thích bộ đồ này mà cả hai không chịu thay đồ mới ra và chuyện gì sẽ đến với hai bạn này? Qua quyển sách giúp cho bé hiểu được tầm quan trọng của việc thay đồ lót hàng ngày cũng như là vệ sinh sạch sẽ cá nhân.",
    },
  ],
};

export default ApiListBook;
