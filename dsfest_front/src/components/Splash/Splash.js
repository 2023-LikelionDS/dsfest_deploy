import '../../css/Splash.css';
import title from '../../img/1-title.svg';
import title2 from '../../img/2-title.svg';
import pink from '../../img/1-pink1.svg';
import ivory from '../../img/1-ivory1.svg';
import purple from '../../img/1-purple1.svg';
import obj from '../../img/1-objects.svg';
import take1 from '../../img/2-take1_card.svg';
import take2 from '../../img/2-take2_card.svg';
import take3 from '../../img/2-take3_card.svg';
import text from '../../img/2-text.svg';
import roundback from '../../img/1-roundback.svg';

function Splash() {
    return (
        <>
            <div className="insertBody">
                <img src={purple} id="purple1"></img>
                <img src={ivory} id="ivory1"></img>
                <img src={pink} id="pink1"></img>
                <img src={title} id="title"></img>
                <img src={pink} id="pink2"></img>
                <img src={purple} id="purple2"></img>
                <img src={obj} id="obj"></img>
                <img src={roundback} id="roundback"></img>
            </div>
            <div className="insertBody">
                <img src={title2} id="title2"></img>
                <img src={purple} id="purple3"></img>
                <img src={ivory} id="ivory3"></img>
                <img src={pink} id="pink3"></img>
                <div className="content">
                    <img src={take1} id="take1"></img>
                    <img src={take2} id="take2"></img>
                    <img src={take3} id="take3"></img>
                </div>
                <img src={text} id="text"></img>
                <div className="cloud">
                    <div id="cloud1"></div>
                    <div id="cloud2"></div>
                    <div id="cloud3"></div>
                    <div id="cloud4"></div>
                </div>
            </div>
        </>
    );
}
export default Splash;
