import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from './navBar';
import '../css/details.css';
import { Col, Container, Row, Image } from "react-bootstrap";
import Boy from '../assets/boy.png';
import Gains from '../components/gains.js';
import { Data } from "./data";

export default function Details() {
  let id = useParams();
  // let result = []
  const [data,setData] = useState([])
  useEffect(() => {
   
    axios
    .post("http://localhost:3001/backend/getExerciseDataById", {
      id: id,
    })
    .then((res) =>setData(res.data.details[0])
    )
    .catch((err) => console.log(err));
  
  }, []);
  console.log(data,"iddd")
  // const [data, setData] = useState([]);
 
  const dim={
    "width": 400,
    "height": 400,
  }
  let text = data.about
  let title= data.name
  return(
    <div className="my">
        <section>
          <Container>
            <Row>
              <Col sm={4}>
                <Image alt='gymboy' src={data.gifUrl} style={dim} className='col-img' />
              </Col>
              <Col sm={8}>
              <div>
                <h2 style={{color:'#0D6EFD'}}>{title}</h2>
                <p>{text}</p>
              </div>
              <div className="desc">
                <h1></h1>
              </div>
              <Gains name={data.bodyPart} url="data:image/png;base64,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"/>
              <Gains name={data.target}  url="data:image/png;base64,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"/>
              <Gains name={data.equipment}  url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiOSURBVHgB3VpvUFTXFf9BrEQruhNiMgk4fcyIWGLrq1rCOGnzonYm1DaszQfMlBT4oOm0Rkisf6YBgbZODX4AJO1UyQQQq8nIhN1pK4lVdmkSU0gJKwF1gnEfCTR/ZhI2OGOT+uHmnvPePnbZhWXZ5yST38yD9+ece8+595xzzz13ga8JkkIfhBAOdHZWYWLCYb0sLHQnJSW5ojFLegVebxU+/BAh9DWSXscMiJdPDAw4cfFigfUiOzsAVSX6QPDVvCk8Kg7Vllv6jY0C166psmNftA4wNFSFx7aXID1jkj4zc0TeVWMm9PaWRPCpqkP280RU+sbGMhxr0ZC6RMrzKZC6GOjyuOUX73SKGNi9uxv5+S48WlSHbq+KK8P+qHTXrhn/u7pa5F8Hslc4EQ+6umimP5V8xTjc4ERqanT+sTFgZQ7Q1laOl15yovZpbSpJclTGiQkS3DCned8I4PalAZw7C/zvswAWLdK54cuXgbTbg1PbLa8LiB/E4+W7tLQALl8yhKY+aJDOnQP3vXhxkN6FQGAkWkPJiIXFqcAddwQwIRsuLW1NqtyfKW1Ul6MHLFsG27BU9kEmsyJb5z62bW+QAyrneYnOgxkD0U3r1lvJ2RW+P/+ag6/0dLJjr0XDo/ffYFBYYl5hkDavSlOow+CgKtv0YceO0ikOPcnX0aGw/a/INr5QX+npZTjyF5WfybSkB2LBgoh+plek+Tkn2k85WdjHfulDxrIAKis06Lpi0eTeCzzxpBebf6xJX6qPUGJkpAy//lU9enuAjT+SDt6jISWlXyqXKZ3dIHq0qHyyz2YdtQeVkCaMQTpY68PVq8DRI6qk91h+GUMRn5xSLz7+2Hi6Nw9YnuWGpvlQ+ZSG1hYKgfX4znd90vEU/KJYxqeacPrc3BYprBPOh+o5yhxpasCaNdU4+dcOND2rYds2TdK4JN/9YXzJySrOSp94scOL/fuBpqYy/rZxYwNuucWB4pJJ81q4kO51zAXi0KFxUfRzKaPQaB0QlZXWcwStECXiAUl24IAQx475+SJ+eie/RaFXRMFPhdi5c5zvpUly262t/tnKF9vZg9i6tYFNornZyXa+XTojmd4zjVW8kEYDmdWZMwpfr/4rKg3ztrV5OJg88kgDtz00VMZ9rV3rhd2gDnmUaCZMwcXhw36xbq0Qe/cIcfy4R/T315kzVsaj39HhMkdYES5XhzkjZUzzwQd1orHRIw78QYh1a6zR5352Pj4u9u4VnAHcDIjOTg8L7veXm52q4tSpfhaQhFmRJUTBQ4Zi9Pz8880WLylCvCQ40RMt0dA9KUQRDiFmKfuKQ7Q4TIvw4IM1siuYTg9pBjKiZbh5EWtocKHteA0Kt3o5xaE1YWjQac6QhldeUZn3888D+NnDXpzrqkHFfhdHIaezm9sitLVVmX214maCzYlGrKeHfYMdmWZhitMLmbYwHX2ji0a/r68+1J9YSTJXCgTUFpkm8cTh5HNXhMyJ/ITMJBiJpulYdP6jRJw44RFNTf3ivfeqo9LUVHtY0aNHx1lZ8g/TzG462HmbjvZbtt7b65mLY3I7FCSoDdMvbpqDzyjI22+XiN//zs+C7HrSLzye8lnzypWfZ5Z4KyvGgwHkSwOP6sCA4Q90zUIgHgCiLSoSUvnmadehODAPCcJMAkukMOB9xUcfxRZqfFzhSNfloQXQlpmIL/zODB3xI2Z6PlvYqciXioRNKwKffHK/eP316lg0sBn2KTI6avwv26nJv1pcPDbAPkX6+lbz3vqN/zSA9jUzQ8P31xbjypVvwSbYp8j16w6s/DbduWQk8s5EyuWl9HRSxLYV3D5nHxtTzWpHrNkg6LwHf/ddBTbBFkV4QfO/45DFuUBo9W86MM2ib+pyq+uwYzEk2DUjKi9wd90VMRvC7fZHTSrnp/hw6SLdKbAB9ilySRbsbrstrEjHqf1zzyr45xklYm+/atUIK0+8NsAeZz99WuH/+fl62Ps333SygoT336dyqNf6tirHoPX5vkKKJCcbobe9vViOPPmI1ywiFHD9i3aG7e20qyxnn9D1Egy/U8xVzL4+BTbAHkXeesvBwv75Tyqe/mMzNm6C3Mv74HYpUhFdbm8dsqKiiLNn+7Fvr8p1ZAJth69fXw0bYI+P3Pi/ii0PUza7Bbt2t+IzWewmpaiks2GDF5s2tfL9vj2qrDYG8Js9LXij7wHc94OA9BMFXwVYxbTa2v6w9yF7eb6oACdpwvbs9GzQJLzC2zEjChfqsrKscj9vV/99XsHy5Tqt8rzS3/fDAAYukGNPFqFTUi6Yket7SBCJKzI6qnKVcN26yTVkeFjjOu5PNnutd2lprXymoutbrHd5eTofHYQWx+eIxBUJJosZGZOKvPxyMR9DaBvc1rvSUhefqfz9b5Nngbm5OkcuXU/Y4RNXZDJZ5NSEzerSkCYr9oEph6g+du7RMS3ET3yssA3JY+KKRCaLGkeo9evDToI5v8rJcXPopXXEgG3JY0KKRE0WT54s5vWhsLA7gmErlVMFnT8GS662JY+JzkhYssjCXPBpxmqOaGfzLuRvDuD8edUS3KbkMXFFwpNFJ5tVXp47WjrP79av96HztINpCTYlj3NWhLPZp35bzA9ZWat5hN3uArO67pqWMWelm83L5XIyz40bxmLYyAdGc1YmKU56Iyq53XXWYSkddHa8COx4XMeVYQcWLHTg4MHMaX+OQcLv2zeO+fMDWCrP0I+1KOZhqUHQ+EwL7rkn5s9AEgIdck6t13LJNPSwRxalY7ZzwixcE71ZuKa6sdi1y2+1HeVs0j5FenqquaPXXqWOyvl0KXhdvdrP3yTNrNvRdX9YG0JUi8HB8dm2E4q5pfEVFeSsdUgUpSWK/Nsc9dvddyMexOUj7B8vvFA1LcGdd8rlUJvdz5xsaOdriS8AZosIGpijJ4gAAAAASUVORK5CYII="/>
              <div>
              <h3 style={{color:'#0D6EFD'}}>Primary Muscles:</h3> {data.PrimaryMuscles}<p></p>
                <h3 style={{color:'#0D6EFD'}}>Seconday Muscles:</h3> {data.SecondaryMuscles}
              </div>
              </Col>
            </Row>
          </Container>
        </section>
    </div>
  ) 
}
