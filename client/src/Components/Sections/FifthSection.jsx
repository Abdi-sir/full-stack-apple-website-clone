import appleTvLogo from '../../commonResource/Images/icons/apple-tv-logo.png'
import watchSeries from '../../commonResource/Images/icons/watch-series5-logo.png'
import banker from '../../commonResource/Images/home/banker.png'
export default function FifthSection() {
  return (
    <section className="fifth-heghlight-wrapper">
<div className="container-fluid">
    <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                       <img src={appleTvLogo} alt="" /> 
                    </div>
                </div>

                <div className="tvshow-logo-wraper">
                    <img src={banker} alt="" />
                </div>

                <div className="watch-more-wrapper">
                    <a href="#">Watch now on the Apple TV App</a>
                </div>
            </div>
        </div>
        <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
                <div className="top-logo-wrapper">
                    <div className="logo-wrapper">
                        <img src={watchSeries} alt="" />
                    </div>
                </div>
                <div className="description-wraper">
                    With the Always-On Retina display.<br/>
                    You’ve never seen a watch like this.
                </div>
                <div className="links-wrapper">
                    <ul>
                        <li><a href="">Learn more</a></li>
                        <li><a href="">Buy</a></li>
                    </ul> 
                </div>
            </div>
        </div>					
    </div>
</div> 
</section>
  )
}

