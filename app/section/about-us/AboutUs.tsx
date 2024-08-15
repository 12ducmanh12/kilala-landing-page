import "./style.css";
import icon1 from "@/public/IconBackground.png";
import icon2 from "@/public/IconBackground2.png";
import icon3 from "@/public/IconBackground3.png";
import icon4 from "@/public/IconBackground4.png";
import TabItems from "./components/TabItems";

function AboutUs() {
  const listTabItems = [
    {
      id: 0,
      icon: icon1,
      title: "BRADING",
    },
    { id: 1, icon: icon2, title: "WEB DESIGN" },
    {
      id: 3,
      icon: icon3,
      title: "WEB DEVELOPMENT",
    },
    {
      id: 4,
      icon: icon4,
      title: "ONLINE MARKETING",
    },
  ];
  return (
    <div className="wrapper about_us">
      <div className="about_us_header">
        <div className="line_horizontal"></div>
        <h1>ABOUT US</h1>
        <div className="line_horizontal"></div>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="tab">
        <div className="tab_item">SERVICES</div>
        <div className="tab_item">ABOUT CESIS</div>
        <div className="tab_item">PURCHASE NOW</div>
      </div>
      <div className="list_tab">
        {listTabItems.map((item) => (
          <TabItems key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
