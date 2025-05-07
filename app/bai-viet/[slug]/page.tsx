import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/lib/articles";
import ArticleDetailClient from "./ArticleDetailClient";

const articleContent: Record<string, JSX.Element> = {
  "tong-quan-dai-hoc-mo-ha-noi": (
    <>
      <h2 id="tong-quan">Tổng Quan Về Trường Đại Học Mở Hà Nội</h2>
      <p>
        Trường Đại học Mở Hà Nội (Hanoi Open University - HOU) là một trong
        những trường đại học công lập đa ngành, đa lĩnh vực nổi bật tại Việt
        Nam, trực thuộc Bộ Giáo dục và Đào tạo. Được thành lập ngày 3/11/1993,
        trường ra đời với sứ mệnh mở rộng cơ hội học tập cho mọi người, đáp ứng
        nhu cầu đào tạo nguồn nhân lực chất lượng cao trong bối cảnh đổi mới và
        hội nhập quốc tế.
      </p>
      <h2 id="lich-su">Lịch Sử Hình Thành & Phát Triển</h2>
      <p>
        Ban đầu là Viện Đại học Mở Hà Nội, trường được thành lập trên cơ sở Viện
        Đào tạo Mở rộng thuộc Bộ Giáo dục và Đào tạo. Đến năm 2018, trường chính
        thức đổi tên thành Trường Đại học Mở Hà Nội. Trải qua hơn 30 năm phát
        triển, HOU đã đào tạo gần 200.000 cử nhân, kỹ sư, kiến trúc sư, thạc sĩ
        và tiến sĩ, khẳng định vị thế là trường đại học tiên phong về đào tạo
        mở, từ xa, trực tuyến và tại chỗ.
      </p>
      <h2 id="quy-mo">Quy Mô Đào Tạo & Các Ngành Nghề</h2>
      <p>
        HOU hiện có quy mô đào tạo khoảng 35.000 sinh viên ở các hệ chính quy,
        vừa làm vừa học, đào tạo từ xa và trực tuyến. Trường đào tạo 21 ngành
        trình độ đại học như Quản trị kinh doanh, Công nghệ thông tin, Kế toán,
        Luật, Ngôn ngữ Anh, Thiết kế đồ họa, Kiến trúc, Công nghệ sinh học,
        Thương mại điện tử… Ngoài ra, trường còn đào tạo 7 ngành trình độ sau
        đại học (thạc sĩ, tiến sĩ).
      </p>
      <h2 id="giang-vien">Đội Ngũ Giảng Viên & Cơ Sở Vật Chất</h2>
      <p>
        Đại học Mở Hà Nội sở hữu đội ngũ giảng viên chất lượng cao với 29 Giáo
        sư, 123 Phó Giáo sư, 322 Tiến sĩ và 487 Thạc sĩ, đảm bảo chuyên môn vững
        vàng và tâm huyết với nghề. Cơ sở vật chất hiện đại với gần 60.000 m²
        diện tích, hơn 150 phòng học, phòng máy tính, phòng thí nghiệm, thực
        hành và nhiều cơ sở đặt tại các quận huyện lớn ở Hà Nội, đáp ứng nhu cầu
        học tập đa dạng của sinh viên.
      </p>
      <h2 id="su-menh">Sứ Mệnh & Tầm Nhìn</h2>
      <p>
        HOU hướng tới xây dựng một trường đại học đa ngành, đa trình độ, đa
        phương thức, chú trọng đào tạo từ xa, phục vụ xã hội học tập và học tập
        suốt đời. Phương châm của trường là “Mở cơ hội – Mở trái tim – Mở trí
        tuệ – Mở tầm nhìn – Mở tương lai”.
      </p>
      <h2 id="thanh-tich">Một Số Thành Tích Nổi Bật</h2>
      <ul className="list-disc ml-6">
        <li>
          Được trao tặng Huân chương Lao động Hạng Nhất, Nhì, Cờ thi đua của Thủ
          tướng Chính phủ và Giấy chứng nhận kiểm định chất lượng giáo dục đại
          học.
        </li>
        <li>
          Xếp hạng 50 trong các trường đại học Việt Nam theo Webometrics (2019).
        </li>
      </ul>
      <h2 id="lien-he">Thông Tin Liên Hệ</h2>
      <ul className="list-disc ml-6">
        <li>
          Địa chỉ: Nhà B101, phố Nguyễn Hiền, phường Bách Khoa, quận Hai Bà
          Trưng, Hà Nội
        </li>
        <li>Điện thoại: 024 38682321</li>
        <li>Email: mhn@hou.edu.vn</li>
        <li>Website: www.hou.edu.vn</li>
        <li>Facebook: facebook.com/viendaihocmohanoi.vn</li>
      </ul>
      <h2 id="tuyen-sinh">Tuyển Sinh</h2>
      <p>
        Năm 2025, trường tuyển sinh hơn 4.100 chỉ tiêu cho 21 ngành đại học với
        nhiều phương thức xét tuyển: điểm thi THPT, học bạ, đánh giá năng lực,
        đánh giá tư duy, ưu tiên xét tuyển và kết hợp.
      </p>
      <p>
        Đại học Mở Hà Nội là lựa chọn lý tưởng cho những ai mong muốn tiếp cận
        giáo dục đại học chất lượng, linh hoạt và phù hợp với nhiều đối tượng
        học tập trong thời đại số hóa và hội nhập.
      </p>
    </>
  ),
  "nganh-noi-bat-hou": (
    <>
      <h2 id="nganh-hoc">Các Ngành Đào Tạo Nổi Bật Tại Đại Học Mở Hà Nội</h2>
      <p>
        Đại học Mở Hà Nội (HOU) là trường đại học công lập đa ngành, đa lĩnh
        vực, nổi bật với nhiều chương trình đào tạo chất lượng cao, đáp ứng nhu
        cầu phát triển của xã hội hiện đại. Dưới đây là các ngành đào tạo nổi
        bật và mô tả ngắn gọn về từng ngành:
      </p>
      <ol className="list-decimal ml-6">
        <li>
          <strong>Ngôn ngữ Anh</strong>
          <br />
          Chương trình đào tạo giúp sinh viên sử dụng thành thạo tiếng Anh, hiểu
          sâu về văn hóa các nước nói tiếng Anh, đồng thời trang bị kiến thức
          chuyên môn hiện đại để đáp ứng nhu cầu hội nhập quốc tế và làm việc
          trong môi trường đa quốc gia.
        </li>
        <li>
          <strong>Công nghệ Thông tin</strong>
          <br />
          Sinh viên được đào tạo kiến thức nền tảng và chuyên sâu về phần mềm,
          mạng máy tính, an toàn thông tin, trí tuệ nhân tạo, đáp ứng nhu cầu
          phát triển của nền kinh tế số và cách mạng công nghiệp 4.0.
        </li>
        <li>
          <strong>Luật Kinh tế</strong>
          <br />
          Ngành học này trang bị kiến thức pháp luật về kinh tế, thương mại,
          doanh nghiệp, giúp sinh viên có khả năng tư vấn, giải quyết các vấn đề
          pháp lý phát sinh trong hoạt động kinh doanh, phù hợp với nhu cầu nhân
          lực pháp lý chất lượng cao.
        </li>
        <li>
          <strong>Quản trị Kinh doanh</strong>
          <br />
          Chương trình cung cấp kiến thức về quản lý, vận hành doanh nghiệp, lập
          kế hoạch kinh doanh, marketing, tài chính, giúp sinh viên phát triển
          tư duy lãnh đạo và kỹ năng quản trị toàn diện.
        </li>
        <li>
          <strong>Kế toán</strong>
          <br />
          Sinh viên được đào tạo về thu thập, xử lý dữ liệu tài chính, kiểm
          toán, thuế, hệ thống thông tin kế toán, đáp ứng nhu cầu nhân lực kế
          toán cho doanh nghiệp, tổ chức kinh tế và dịch vụ kế toán.
        </li>
        <li>
          <strong>Tài chính – Ngân hàng</strong>
          <br />
          Ngành học tập trung vào hoạt động ngân hàng, thị trường tài chính,
          chính sách tiền tệ, trang bị cho sinh viên kiến thức và kỹ năng để làm
          việc trong các tổ chức tài chính, ngân hàng, công ty chứng khoán.
        </li>
        <li>
          <strong>Quản trị Dịch vụ Du lịch và Lữ hành</strong>
          <br />
          Sinh viên được học về địa lý du lịch, văn hóa, kỹ năng hướng dẫn,
          thiết kế tour, quản lý và điều hành du lịch, đáp ứng nhu cầu nhân lực
          chất lượng cao cho ngành du lịch đang phát triển mạnh mẽ.
        </li>
        <li>
          <strong>Quản trị Khách sạn</strong>
          <br />
          Chương trình đào tạo chuyên sâu về quản lý khách sạn, dịch vụ lưu trú,
          tổ chức sự kiện, giúp sinh viên có nhiều cơ hội việc làm với mức thu
          nhập hấp dẫn trong ngành du lịch – khách sạn.
        </li>
        <li>
          <strong>Thiết kế Đồ họa, Nội thất, Thời trang</strong>
          <br />
          Các ngành thiết kế thuộc nhóm mỹ thuật ứng dụng, đào tạo sinh viên
          sáng tạo, thiết kế sản phẩm đồ họa, nội thất, thời trang đáp ứng nhu
          cầu thị trường nghệ thuật, quảng cáo, truyền thông và công nghiệp sáng
          tạo.
        </li>
        <li>
          <strong>
            Công nghệ Kỹ thuật Điện tử – Viễn thông, Điều khiển & Tự động hóa
          </strong>
          <br />
          Trang bị kiến thức về hệ thống điện tử, viễn thông, tự động hóa, điều
          khiển robot, đáp ứng nhu cầu nhân lực kỹ thuật cao trong các ngành
          công nghiệp hiện đại.
        </li>
        <li>
          <strong>Ngôn ngữ Trung Quốc</strong>
          <br />
          Chương trình đào tạo giúp sinh viên thành thạo tiếng Trung, hiểu văn
          hóa Trung Quốc, đáp ứng nhu cầu giao thương, hợp tác quốc tế và các
          công việc liên quan đến ngôn ngữ này.
        </li>
      </ol>
      <p>
        Đại học Mở Hà Nội không ngừng cập nhật chương trình đào tạo, chú trọng
        tính ứng dụng và khả năng tìm việc làm nhanh chóng cho sinh viên, góp
        phần cung cấp nguồn nhân lực chất lượng cao cho xã hội hiện đại.
      </p>
    </>
  ),
  "co-hoi-viec-lam-hou": (
    <>
      <h2 id="co-hoi-viec-lam">
        Cơ Hội Việc Làm Sau Tốt Nghiệp Đại Học Mở Hà Nội
      </h2>
      <p>
        Sinh viên Đại học Mở Hà Nội (HOU) có nhiều cơ hội việc làm hấp dẫn ngay
        sau khi tốt nghiệp nhờ chương trình đào tạo gắn liền thực tiễn, hợp tác
        doanh nghiệp sâu rộng và mạng lưới hỗ trợ nghề nghiệp hiệu quả.
      </p>
      <h3>Tỷ lệ sinh viên có việc làm cao</h3>
      <p>
        Theo kết quả khảo sát mới nhất, hầu hết các ngành đào tạo của HOU đều có
        tỷ lệ sinh viên tốt nghiệp có việc làm dao động từ 91% đến 98,5%. Một số
        ngành như Công nghệ kỹ thuật điện tử - viễn thông, Công nghệ thông tin,
        Kế toán, Quản trị kinh doanh... đạt tỷ lệ gần như tuyệt đối, nhiều sinh
        viên có việc làm đúng chuyên ngành chỉ trong vòng 12 tháng sau tốt
        nghiệp.
      </p>
      <h3>Hợp tác doanh nghiệp và ngày hội việc làm</h3>
      <p>
        Trường thường xuyên phối hợp với hàng trăm doanh nghiệp lớn như
        PVcomBank, Viettel, VNPT, Samsung... để tổ chức ngày hội việc làm, tọa
        đàm, hội thảo, tạo điều kiện cho sinh viên tiếp cận thực tế, thực tập và
        tuyển dụng trực tiếp. Riêng trong ngày tốt nghiệp năm 2023, gần 3.000 vị
        trí việc làm đã được các doanh nghiệp dành riêng cho sinh viên HOU.
      </p>
      <h3>Đào tạo kỹ năng và hỗ trợ nghề nghiệp</h3>
      <p>
        Ngoài kiến thức chuyên môn, sinh viên được tham gia các chương trình
        huấn luyện kỹ năng mềm, xây dựng hồ sơ cá nhân, chinh phục nhà tuyển
        dụng và định vị bản thân trên thị trường lao động. Nhà trường còn hỗ trợ
        sinh viên khởi nghiệp, kết nối với các dự án thực tế và ưu tiên tuyển
        dụng cho sinh viên tốt nghiệp loại khá, giỏi.
      </p>
      <h3>Cơ hội việc làm đa dạng</h3>
      <p>
        Sinh viên HOU có thể làm việc trong nhiều lĩnh vực: kinh doanh, tài
        chính, ngân hàng, luật, du lịch, công nghệ thông tin, thiết kế, kỹ
        thuật, biên phiên dịch, quản trị khách sạn, tổ chức sự kiện... Nhiều cựu
        sinh viên đã giữ vị trí quan trọng tại các tập đoàn lớn trong và ngoài
        nước.
      </p>
      <h3>Thu nhập khởi điểm hấp dẫn</h3>
      <p>
        Với các ngành kỹ thuật, công nghệ, mức lương khởi điểm cho sinh viên mới
        ra trường thường đạt từ 10–12 triệu đồng/tháng, đặc biệt nếu có kỹ năng
        ngoại ngữ và công nghệ tốt.
      </p>
      <h3>Kết luận</h3>
      <p>
        Nhờ sự gắn kết giữa đào tạo và thực tiễn, cùng mạng lưới doanh nghiệp
        đối tác rộng lớn, sinh viên Đại học Mở Hà Nội luôn có nhiều lựa chọn
        nghề nghiệp và cơ hội phát triển bền vững sau khi tốt nghiệp.
      </p>
    </>
  ),
  "doi-ngu-giang-vien-hou": (
    <>
      <h2 id="doi-ngu-giang-vien">Đội Ngũ Giảng Viên Đại Học Mở Hà Nội</h2>
      <p>
        Đại học Mở Hà Nội (HOU) tự hào sở hữu đội ngũ giảng viên đông đảo, đa
        dạng về chuyên ngành và có trình độ chuyên môn cao. Đây là nền tảng vững
        chắc giúp trường duy trì và phát triển chất lượng đào tạo, đáp ứng nhu
        cầu học tập của hàng chục nghìn sinh viên trên cả nước.
      </p>
      <h3>Quy mô và chất lượng đội ngũ</h3>
      <p>
        Trường hiện có 29 Giáo sư, 123 Phó Giáo sư, 322 Tiến sĩ Khoa học và Tiến
        sĩ, cùng 487 Thạc sĩ. Các giảng viên không chỉ là chuyên gia hàng đầu
        trong lĩnh vực của mình mà còn có năng lực sư phạm, giàu nhiệt huyết và
        kinh nghiệm thực tiễn, mang đến môi trường học tập phong phú, hiện đại
        cho sinh viên.
      </p>
      <h3>Đa dạng chuyên ngành, cập nhật thực tiễn</h3>
      <p>
        Giảng viên Đại học Mở Hà Nội đến từ nhiều lĩnh vực như Công nghệ thông
        tin, Kinh tế, Luật, Ngôn ngữ, Thiết kế, Du lịch… Ngoài đội ngũ cơ hữu,
        trường còn mời các giảng viên thỉnh giảng từ các trường đại học lớn, các
        chuyên gia doanh nghiệp uy tín tham gia hướng dẫn thực hành, đảm bảo
        kiến thức luôn sát thực tiễn và cập nhật.
      </p>
      <h3>Tận tâm đồng hành cùng sinh viên</h3>
      <p>
        Giảng viên HOU không chỉ truyền đạt kiến thức mà còn là người đồng hành,
        tư vấn, hỗ trợ sinh viên trong học tập, nghiên cứu và định hướng nghề
        nghiệp. Các thầy cô luôn sẵn sàng lắng nghe, giải đáp thắc mắc và chia
        sẻ kinh nghiệm, giúp sinh viên vượt qua khó khăn và phát triển toàn
        diện.
      </p>
      <h3>Một số giảng viên tiêu biểu</h3>
      <ul className="list-disc ml-6">
        <li>TS. Đỗ Phương Khanh – Bộ môn Công nghệ và Kỹ thuật Thực phẩm</li>
        <li>
          TS. Tăng Thị Hằng, TS. Trần Thu Phương, TS. Vũ An Dân – giảng viên
          chuyên ngành, hướng dẫn trực tuyến
        </li>
        <li>
          PGS.TS. Hồ Ngọc Trung – Trưởng khoa, TS. Lê Phương Thảo – Phó trưởng
          khoa, cùng nhiều giảng viên giàu kinh nghiệm khác
        </li>
      </ul>
      <p>
        Với đội ngũ giảng viên chất lượng, tận tâm và chuyên nghiệp, Đại học Mở
        Hà Nội luôn là địa chỉ tin cậy cho sinh viên trên con đường chinh phục
        tri thức và phát triển nghề nghiệp.
      </p>
    </>
  ),
};

const tocMap: Record<string, { id: string; text: string }[]> = {
  "tong-quan-dai-hoc-mo-ha-noi": [
    { id: "tong-quan", text: "Tổng Quan Về Trường Đại Học Mở Hà Nội" },
    { id: "lich-su", text: "Lịch Sử Hình Thành & Phát Triển" },
    { id: "quy-mo", text: "Quy Mô Đào Tạo & Các Ngành Nghề" },
    { id: "giang-vien", text: "Đội Ngũ Giảng Viên & Cơ Sở Vật Chất" },
    { id: "su-menh", text: "Sứ Mệnh & Tầm Nhìn" },
    { id: "thanh-tich", text: "Một Số Thành Tích Nổi Bật" },
    { id: "lien-he", text: "Thông Tin Liên Hệ" },
    { id: "tuyen-sinh", text: "Tuyển Sinh" },
  ],
  "nganh-noi-bat-hou": [{ id: "nganh-hoc", text: "Các ngành học nổi bật" }],
  "co-hoi-viec-lam-hou": [{ id: "co-hoi-viec-lam", text: "Cơ hội việc làm" }],
  "doi-ngu-giang-vien-hou": [
    { id: "doi-ngu-giang-vien", text: "Đội ngũ giảng viên" },
  ],
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const toc = tocMap[article.slug] || [];
  return (
    <ArticleDetailClient
      article={article}
      toc={toc}
      content={articleContent[article.slug] || <p>{article.description}</p>}
      related={related}
    />
  );
}
