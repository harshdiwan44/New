import First from "./downloads/2.png";
import Second from "./downloads/3.png";
import Fourth from "./downloads/5.png";
import { Carousel } from "react-carousel-minimal";
import "./App.css";
import PU from "./Partner Universities";
import ST from "./Student Testimonials";
import Footer from "./Footer";
import Nav from "./Navbar";
import check from "./downloads/66.png";
import vectortwo from "./downloads/Vector.png";
import check2 from "./downloads/67.png";
import check3 from "./downloads/68.png";
import check4 from "./downloads/69.png";
import Canada from "./downloads/Flag-Canada.png";
import USA from "./downloads/usa.png";
import Corner from "./downloads/corner.jpg";
import Turkey from "./downloads/turkey.png";
import Italy from "./downloads/download.png";
import Triangle from "./downloads/triangle.png";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ColorfulText({ children }) {
  return <span style={{ color: "#164aa5" }}>{children}</span>;
}

const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    caption: "San Francisco",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "Darjeeling",
  },
];

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};
export default function Example() {
  return (
    <>
      <Nav />

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto bg-cyan-50 ">
            <div class="columns-2 ...">
              <div class="my-32 ml-20">
                <div className="text">
                  A perfect pathway to study your{" "}
                  <ColorfulText> abroad dream </ColorfulText>
                </div>
                <div className="texttwo">
                  overseas counselling | immigration | university connect |
                  student mentor
                </div>
                <button class="mt-7 ml-2.5 bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black-700 rounded">
                  Book Free Counselling Session
                </button>
              </div>
              <div className="ll">
                <img class="w-full aspect-square ..." src={First} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto bg-white-100 ">
            <div className="text">
              <p>
                {" "}
                Click on your <ColorfulText> Dream Study </ColorfulText>{" "}
                Destination
              </p>
            </div>
            <div class="md:container md:mx-auto bg-white-100 ">
              <div class="columns-4 ...">
                <div className="iio">
                  <img className="imageones" src={check}></img>
                  <a href="http://www.google.com">
                    <img className="imagetwos" src={Canada}></img>
                  </a>
                  <a href="http://www.google.com">
                    <img className="imagetwoss" src={USA}></img>
                  </a>
                </div>
                <div className="iio1">
                  <img className="imageones" src={vectortwo}></img>
                </div>
                <div className="iio2">
                  <img src={check3}></img>
                </div>
                <div className="iio3">
                  <img className="imageoneone" src={check2}></img>
                  <a href="http://www.google.com">
                    <img className="imagetwotwo" src={Turkey}></img>
                  </a>
                  <a href="http://www.google.com">
                    <img className="imagetwotwoss" src={Italy}></img>
                  </a>
                  <a href="http://www.google.com">
                    <img className="imagetwotwos" src={Italy}></img>
                  </a>
                  <a href="http://www.google.com">
                    <img className="imagetwotwosss" src={Turkey}></img>
                  </a>

                  <img className="jj" src={Corner}></img>
                  <a href="http://www.google.com">
                    <img className="corneroneflag" src={Turkey}></img>
                  </a>
                  <a href="http://www.google.com">
                    <img className="corneroneflags" src={Turkey}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto bg-white-100 ">
            <div className="text">
              Pathway To Your <ColorfulText> Dream University </ColorfulText>
            </div>
            <div class="md:container md:mx-auto bg-white-100 ">
              <img class="w-full aspect-square ..." src={Second} />
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto">
            <div className="text">
              <ColorfulText> Our Services </ColorfulText>
            </div>

            <div class="md:container md:mx-auto bg-indigo-900">
              <div class="columns-2 ...">
                <div className="pqqwp">
                  <div className="text">
                    <div className="rotate">
                      <h1>Offerings</h1>
                    </div>
                    <div className="klkl">
                      <h1>Study abroad</h1>
                      <h1>Student essential</h1>
                      <h1>Student support</h1>
                      <h1>Community</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>
                    {" "}
                    <div className="App">
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{
                            padding: "0 20px",
                          }}
                        >
                          <Carousel
                            data={data}
                            time={2000}
                            width="1012px"
                            height="627px"
                            // captionStyle={captionStyle}
                            radius="10px"
                            slideNumber={true}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="cover"
                            // thumbnails={true}
                            // thumbnailWidth="100px"
                            style={{
                              textAlign: "center",
                              maxWidth: "1050px",
                              maxHeight: "300px",
                              margin: "20px auto",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto bg-[url('https://i.ibb.co/PM1Y3Zq/Vector-21.png')] bg-no-repeat bg-[length:100%_100%]   ">
            <div class="my-32 ml-20">
              <div className="text">
                <ColorfulText> Migrad Insights </ColorfulText>
              </div>
              <h2>
                <b>
                  On an average, mygrad conducts over 1.5 Lakh counselling
                  sessions each year. Here are some of our insights from last
                  year.
                </b>
              </h2>
            </div>
            <div class="columns-2 ...">
              <div>
                <img src={Fourth} />
              </div>
              <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div className="rowsss">
                  <div class="box-content h-32 w-32 p-4 border-4 ...">
                    <img className="triangles" src={Triangle}></img>
                    <h1>
                      <ColorfulText> 1,50,000+ </ColorfulText> Counselling
                      sessions conducted for students
                    </h1>
                  </div>
                </div>
                <div className="rowsss">
                  <div class="box-content h-32 w-32 p-4 border-4 ...">
                    <img className="triangles" src={Triangle}></img>
                    <h1>
                      <ColorfulText> 1,50,000+ </ColorfulText> Counselling
                      sessions conducted for students
                    </h1>
                  </div>
                </div>
                <div className="rowsss">
                  <div class="box-content h-32 w-32 p-4 border-4 ...">
                    <img className="triangles" src={Triangle}></img>
                    <h1>
                      <ColorfulText> 1,50,000+ </ColorfulText> Counselling
                      sessions conducted for students
                    </h1>
                  </div>
                </div>
                <div className="rowsss">
                  <div class="box-content h-32 w-32 p-4 border-4 ...">
                    <img className="triangles" src={Triangle}></img>
                    <h1>
                      <ColorfulText> 1,50,000+ </ColorfulText> Counselling
                      sessions conducted for students
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <div class="md:container md:mx-auto bg-white-100 ">
            <div class="box-content h-64 w-half p-4 border-4 ... bg-[url('https://i.ibb.co/pLWbz0Q/Rectangle-258.png')] bg-no-repeat bg-[length:100%_100%]  ">
              <div class="columns-4 ... text-center mt-12 ">
                <div className="juiop">
                  <h1>
                    80,000+<br></br> Courses
                  </h1>
                </div>

                <div className="juiop">
                  <h1>
                    30+
                    <br></br>Countries
                  </h1>
                </div>
                <div className="juiop">
                  <h1>
                    80,000+<br></br> Courses
                  </h1>
                </div>
                <div className="juiop">
                  <h1>
                    80,000+<br></br> Courses
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <PU />
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <ST />
        </div>
      </div>

      <div class="flex ...">
        <div class="flex-auto w-auto ...">
          <Footer />
        </div>
      </div>
    </>
  );
}
