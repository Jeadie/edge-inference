import React from "react";

interface LogoProps {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    height: string;
    width: string;
  }
  
const Logo: React.FC<LogoProps> = ({ backgroundColor, secondaryColor, primaryColor, height, width }) => {
return (  
                                // 'rgb(247, 247, 245)'
    <div className="logo-inner" style={{ backgroundColor: backgroundColor }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1024 768"
        height={height}
        width={width}
        version="1.1"
      >
        <linearGradient spreadMethod="pad" y2="30%" x2="-10%" y1="120%" x1="30%" id="3d_gradient2-logo-5f8860d5-ff7c-4715-9ab0-bfc5d7fa60cf">
          <stop id="stop342655" stopOpacity="1" stopColor="#ffffff" offset="0%" />
          <stop id="stop342657" stopOpacity="1" stopColor="#000000" offset="100%" />
        </linearGradient>
        <linearGradient gradientTransform="rotate(-30)" spreadMethod="pad" y2="30%" x2="-10%" y1="120%" x1="30%" id="3d_gradient3-logo-5f8860d5-ff7c-4715-9ab0-bfc5d7fa60cf">
          <stop id="stop342660" stopOpacity="1" stopColor="#ffffff" offset="0%" />
          <stop id="stop342662" stopOpacity="1" stopColor="#cccccc" offset="50%" />
          <stop id="stop342664" stopOpacity="1" stopColor="#000000" offset="100%" />
        </linearGradient>
        <g id="logo-group">
          <image xlinkHref="" id="container" x="272" y="144" width="480" height="480" transform="translate(0 0)" style={{ display: 'none' }} />
          <g id="logo-center" transform="translate(0 0)">
            <image xlinkHref="" id="icon_container" x="0" y="0" style={{ display: 'none' }} />
            <g id="slogan" style={{ fontStyle: 'normal', fontWeight: 500, fontSize: '32px', lineHeight: 1, fontFamily: 'Montserrat', fontVariantLigatures: 'none', textAlign: 'center', textAnchor: 'middle' }} transform="translate(0 0)" />
            <g id="title" style={{ fontStyle: 'normal', fontWeight: 'normal', fontSize: '72px', lineHeight: 1, fontFamily: 'Brandmark Sans 14 Color', fontVariantLigatures: 'normal', textAlign: 'center', textAnchor: 'middle' }} transform="translate(0 0)">
              <g id="path342683" aria-label="I" transform="translate(0 325.8154) translate(297.35531750000007 16.52144) scale(1.67) translate(-392.91312 49.968)">
                <path className="c1" d="M93.73653,121.9545V72.04483h12.47754v49.90967H93.73653z" transform="translate(299.17659 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
              </g>
              <g id="path342685" aria-label="N" transform="translate(0 325.8154) translate(336.4176696 16.52144) scale(1.67) translate(-413.30375 49.968)">
                <path className="c1" d="M124.21992,72.04483v49.90967h-12.47705L88.21407,91.15237v30.80212H75.73653V72.04483h12.47754 l23.52881,30.80212V72.04483H124.21992z" transform="translate(337.56722 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
              </g>
              <g id="path342687" aria-label="F" transform="translate(0 325.8154) translate(435.600005 16.52144) scale(1.67) translate(-469.69437 49.968)">
                <path className="c1" d="M114.63911,83.22952H99.30196v38.72498H86.82442V72.04483h12.47754v0.09363h15.33716V83.22952z" transform="translate(382.86995 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
                <path className="c3" d="M102.3232,97.04178c0-3.72205,2.92358-6.73914,6.53027-6.73914c3.60596,0,6.52954,3.01709,6.52954,6.73914 s-2.92358,6.73901-6.52954,6.73901C105.24678,103.78079,102.3232,100.76382,102.3232,97.04178z" transform="translate(382.86995 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={primaryColor} stroke={primaryColor} />
              </g>
              <g id="path342689" aria-label="I" transform="translate(0 325.8154) translate(497.91188 16.52144) scale(1.67) translate(-504.00687 49.968)">
                <path className="c1" d="M93.73653,121.9545V72.04483h12.47754v49.90967H93.73653z" transform="translate(410.27034 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
              </g>
              <g id="path342691" aria-label="M" transform="translate(0 325.8154) translate(532.5253521000001 16.52144) scale(1.67) translate(-521.7335 49.968)">
                <path className="c1" d="M130.52705,121.9545h-12.47754l-4.3252-28.19556l-8.07324,20.73853l-2.9043,7.4585h-5.48975 l-2.90479-7.4585l-8.07764-20.73914l-4.32471,28.19617H69.47285l8.34839-49.90393l-0.00146-0.00354h0.00146l0.00073-0.0022 h11.78467l-0.00098,0.0022h0.69141l9.70508,26.82654l9.69775-26.82654h0.69336v-0.0022h11.78467L130.52705,121.9545z" transform="translate(452.26065 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
              </g>
              <g id="path342693" aria-label="A" transform="translate(0 325.8154) translate(641.8754825 16.52144) scale(1.67) translate(-584.21262 49.968)">
                <path className="c1" d="M125.35542,121.9545h-13.86414L99.98836,87.44266L88.48384,121.9545H74.62056l18.02246-49.90967h14.68921 L125.35542,121.9545z" transform="translate(509.59206 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={secondaryColor} stroke={secondaryColor} />
                <path className="c3" d="M93.42134,113.17764c0-3.72205,2.92346-6.73901,6.52954-6.73901s6.52954,3.01697,6.52954,6.73901 s-2.92346,6.73901-6.52954,6.73901S93.42134,116.89969,93.42134,113.17764z" transform="translate(509.59206 -122.01283)" strokeWidth="0" strokeLinejoin="miter" strokeMiterlimit="2" fill={primaryColor} stroke={primaryColor} />
              </g>
            </g>
            <image xlinkHref="" id="icon" x="0" y="0" style={{ display: 'none' }} />
          </g>
        </g>
      </svg>
    </div>
  );
}
export default Logo;