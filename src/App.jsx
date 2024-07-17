import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HoverComponent = () => {
    const [backgroundColor, setBackgroundColor] = useState('transparent');
  
    const handleMouseEnter = () => {
      setBackgroundColor('#1C1E53');
    };
  
    const handleMouseLeave = () => {
      setBackgroundColor('transparent');
    };
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
    <wrapper class="wrapper">
        <header class="header">
            <div class="header_content">
                <div class="logo">
                    <a href="index.html" class="alogo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="25" viewBox="0 0 122 25" fill="none">
                            <g clip-path="url(#clip0_1_1295)">
                              <path d="M121.784 18.8714V21.8905H119.252C116.549 21.8056 115.105 20.3462 115.105 17.6051V10.7098H113.337V8.06127H115.105V5.09621H118.842V8.03038H121.699V10.6711H118.842V17.2344C118.842 18.1224 119.02 18.8328 120.387 18.8328L121.784 18.8714Z" fill="white"/>
                              <path d="M98.4416 15.0029V14.8022C98.4011 13.9141 98.5364 13.0267 98.8395 12.191C99.1427 11.3553 99.6078 10.5876 100.208 9.932C100.809 9.27637 101.532 8.74567 102.338 8.37033C103.144 7.99499 104.016 7.78238 104.904 7.74469C105.082 7.74469 105.267 7.74469 105.445 7.74469C108.974 7.74469 112.07 9.79861 112.07 14.6941V15.7365H102.264C102.364 17.9911 103.584 19.2652 105.638 19.2652C107.406 19.2652 108.232 18.493 108.472 17.3657H112.001C111.568 20.3076 109.221 21.9446 105.507 21.9446C101.43 21.9137 98.4416 19.3347 98.4416 15.0029ZM108.395 13.3737C108.263 11.3198 107.229 10.3314 105.43 10.3314C103.63 10.3314 102.596 11.4433 102.341 13.3737H108.395Z" fill="white"/>
                              <path d="M83.1838 15.0029V14.8022C83.1433 13.9153 83.278 13.0292 83.5802 12.1945C83.8824 11.3597 84.3462 10.5927 84.9449 9.93726C85.5437 9.28183 86.2658 8.75084 87.0699 8.37462C87.874 7.99841 88.7444 7.78435 89.6312 7.74469C89.8088 7.74469 89.9942 7.74469 90.1717 7.74469C93.7005 7.74469 96.8045 9.79861 96.8045 14.6941V15.7365H87.0059C87.1063 17.9911 88.3263 19.2652 90.3802 19.2652C92.1485 19.2652 92.9747 18.493 93.214 17.3657H96.7428C96.3026 20.3076 93.9553 21.9446 90.2412 21.9446C86.172 21.9137 83.1838 19.3347 83.1838 15.0029ZM93.1368 13.3737C93.0055 11.3198 91.9709 10.3314 90.1717 10.3314C88.3726 10.3314 87.3688 11.4742 87.0831 13.366L93.1368 13.3737Z" fill="white"/>
                              <path d="M61.7725 8.03038H65.7259L68.1427 17.1881L70.7912 8.03038H73.8798L76.2735 17.1881L78.8216 8.03038H82.443L78.1498 21.6357H74.4435L72.127 13.0957L69.6484 21.6357H65.8958L61.7725 8.03038Z" fill="white"/>
                              <path d="M49.209 17.358H52.7377C52.8999 18.5857 53.5099 19.2883 55.1314 19.2883C56.583 19.2883 57.2548 18.7401 57.2548 17.8058C57.2548 16.8715 56.4827 16.4777 54.506 16.1997C50.8846 15.6515 49.487 14.6091 49.487 11.9529C49.487 9.11911 52.0814 7.71379 54.892 7.71379C57.9111 7.71379 60.189 8.81025 60.5133 11.9375H57.0309C57.0087 11.6957 56.9388 11.4607 56.8252 11.2462C56.7117 11.0316 56.5567 10.8416 56.3693 10.6873C56.1819 10.5329 55.9658 10.4172 55.7335 10.3468C55.5011 10.2765 55.2571 10.2529 55.0156 10.2773H54.8997C53.6797 10.2773 52.9694 10.8487 52.9694 11.6827C52.9694 12.5166 53.6257 12.8795 55.6178 13.1652C58.9999 13.6748 60.8916 14.5319 60.8916 17.4429C60.8916 20.3539 58.7528 21.9137 55.17 21.9137C51.5872 21.9137 49.3094 20.2999 49.209 17.358Z" fill="white"/>
                              <path d="M34.2139 8.03038H37.9511V10.1847C38.3723 9.39395 39.0117 8.74077 39.7933 8.30277C40.5748 7.86476 41.4657 7.66034 42.3601 7.7138C45.0085 7.7138 46.9312 9.3276 46.9312 13.0108V21.6666H43.2403V13.5513C43.2403 11.7058 42.5222 10.8256 40.8544 10.8256C40.5019 10.7949 40.1467 10.8341 39.8094 10.941C39.4721 11.0479 39.1593 11.2204 38.8888 11.4486C38.6183 11.6767 38.3955 11.956 38.2333 12.2705C38.0711 12.585 37.9725 12.9284 37.9434 13.281C37.9241 13.4452 37.9241 13.611 37.9434 13.7752V21.6357H34.2139V8.03038Z" fill="white"/>
                              <path d="M27.0022 4.60975C26.9887 4.23713 27.086 3.86888 27.2819 3.55161C27.4777 3.23433 27.7633 2.98231 28.1025 2.82745C28.4417 2.67259 28.8192 2.62185 29.1872 2.68165C29.5553 2.74146 29.8973 2.90912 30.17 3.16342C30.4427 3.41771 30.6338 3.7472 30.7191 4.11017C30.8044 4.47314 30.7801 4.85326 30.6493 5.20241C30.5184 5.55156 30.287 5.85405 29.9841 6.07156C29.6813 6.28907 29.3207 6.41183 28.948 6.42431H28.8785C28.6473 6.43895 28.4154 6.40778 28.1961 6.33258C27.9769 6.25739 27.7747 6.13966 27.6011 5.98614C27.4275 5.83262 27.2859 5.64633 27.1845 5.43796C27.083 5.22959 27.0237 5.00324 27.0099 4.7719C27.0035 4.7181 27.0009 4.66391 27.0022 4.60975ZM27.0022 8.03038H30.778V21.6357H27.0177L27.0022 8.03038Z" fill="white"/>
                              <path d="M12.7715 3.04228H24.709V6.33937H16.9874V11.258H23.1029V14.4315H16.9797V21.6357H12.7715V3.04228Z" fill="white"/>
                              <path d="M5.56722 9.12683C5.56722 10.2928 5.56722 11.7135 3.96114 12.2927C5.60582 12.8563 5.56722 14.0532 5.56722 15.3041V19.937C5.56722 20.8172 5.92241 21.35 6.55557 21.4813C6.6947 21.5282 6.84127 21.5491 6.98797 21.543H8.53228V24.6316H5.98418C3.2662 24.6316 1.76823 23.0873 1.76823 20.2227V14.7404C1.74895 14.4589 1.62485 14.1949 1.42043 14.0005C1.216 13.8061 0.946116 13.6954 0.664051 13.6903H0V10.98H0.664051C0.951744 10.9762 1.22693 10.8618 1.43252 10.6605C1.63812 10.4592 1.75833 10.1865 1.76823 9.89899V4.33949C1.76823 1.52114 3.23532 0 5.98418 0H8.55544V3.04228H7.01114C6.86426 3.0427 6.71835 3.06615 6.57873 3.11177C5.94557 3.27392 5.59038 3.79899 5.59038 4.65608L5.56722 9.12683Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_1_1295">
                                <rect width="122" height="24.7089" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                    </a>
                </div>
                <div class="freespace">                </div>
                <nav class="navbar">
                    <div class = "divnav"><a href="index.html" class = "nava">Home</a></div>
                    <div class = "divnav"><a href="#" class = "nava">About us</a></div>
                    <div class = "divnav"><a href="#" class = "nava">Features</a></div>
                    <div class = "divnav"><a href="pricing.html" class = "nava">Pricing</a></div>
                    <div class = "divnav"><a href="#" class = "nava">FAQ</a></div>
                    <div class = "divnav"><a href="#" class = "nava">Blog</a></div>
                </nav>
                <div class="div_butt">
                    <a href="contacts.html" class = "ba">Contact us</a>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="OurPricingPlans_divBlock">
                <div class="OurPricingPlans_title_box">
                    <div class="OurPricingPlans_title_box_content">
                        <div class="OurPricingPlans_title">Our Pricing Plans</div>
                        <div class="OurPricingPlans_undertitle">When you’re ready to go beyond prototyping in Figma, Webflow isready to help you bring your designs to life — without coding them.</div>
                        <div class="pricingPlans">
                            <div class="landingPage">
                                <div class="price_box">
                                    <div class="price">$299</div>
                                    <div class="price-Task">Per-Design</div>
                                </div>
                                <div class="price-Title">Landing Page </div>
                                <div class="price-underTitle">When you’re ready to go beyond prototyping in Figma</div>
                                <div class="benefits_box">
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">All limited links</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Own analytics platform</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Chat support</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Optimize hashtags</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Unlimited users</p>
                                    </div>
                                    
                                </div>
                                <div class="button_plan">
                                    <div class="div_but_view_ourwork">
                                        <a href="#" class = "bav">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div class="websitePage"
                             
                             onMouseEnter={() => this.handleMouseEnter}
                             onMouseLeave={() => this.handleMouseLeave} >
                                <div class="price_box">
                                    <div class="price">$399</div>
                                    <div class="price-Task">Multi Design</div>
                                </div>
                                <div class="price-Title">Website Page</div>
                                <div class="price-underTitle">When you’re ready to go beyond prototyping in Figma.</div>
                                <div class="benefits_box">
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">All limited links</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Own analytics platform</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Chat support</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Optimize hashtags</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Unlimited users</p>
                                    </div>
                                    
                                </div>
                                <div class="button_plan">
                                    <div class="div_but_view_ourwork">
                                        <a href="#" class = "bav">Get started</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="complexProjext">
                                <div class="price_box">
                                    <div class="price">$499+</div>
                                    <div class="price-Task">Per Design</div>
                                </div>
                                <div class="price-Title">Complex Project</div>
                                <div class="price-underTitle">When you’re ready to go beyond prototyping in Figma</div>
                                <div class="benefits_box">
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">All limited links</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Own analytics platform</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Chat support</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Optimize hashtags</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Unlimited users</p>
                                    </div>
                                    <div class="benefit_item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                            <path d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z" fill="#97DAAD" stroke="url(#paint0_linear_1_69)" stroke-width="3"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1_69" x1="-4.84615" y1="-17" x2="11.6069" y2="11.3225" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="white"/>
                                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                            </linearGradient>
                                            </defs>
                                        </svg>
                                        <p class="benefit">Assist and Help</p>
                                    </div>
                                </div>
                                <div class="button_plan">
                                    <div class="div_but_view_ourwork">
                                        <a href="contacts.html" class = "bav">Contact Us</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="faq_divBloc">
                <div class="faq_title_box">
                    <div class="faq_title">Frequently asked questions</div>
                    <a href="#" class="formoreinfo">Contact us For More Info</a>
                </div>
                <div class="faq_question_box">
                    <div class="faq_question_item">
                        <div class="faq_number_of_question">01</div>
                        <div class="faq_question">
                            <div class="faq_question_title">How much time does it take ?</div>
                            <div class="faq_question_underTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
                        </svg>
                    </div>
                    <div class="faq_question_item">
                        <div class="faq_number_of_question">02</div>
                        <div class="faq_question">
                            <div class="faq_question_title">What is your class naming convention ?</div>
                            
                            
                        </div>
                        <div class="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq_question_item">
                        <div class="faq_number_of_question">03</div>
                        <div class="faq_question">
                            <div class="faq_question_title">How do we communicate ?</div>
                            
                            
                        </div>
                        <div class="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq_question_item">
                        <div class="faq_number_of_question">04</div>
                        <div class="faq_question">
                            <div class="faq_question_title">I have a bigger project. Can you handle it ?</div>
                            
                            
                        </div>
                        <div class="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
                            </svg>
                        </div>
                    </div>
                    <div class="faq_question_item">
                        <div class="faq_number_of_question">05</div>
                        <div class="faq_question">
                            <div class="faq_question_title">What is your class naming convention ?</div>
                            
                            
                        </div>
                        <div class="x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path opacity="0.7" d="M13.449 15.8929L8.30697 10.7508L3.03761 16.0201L0.339287 13.3218L5.60865 8.05247L0.466566 2.91039L2.91033 0.466626L8.05241 5.60871L13.3218 0.339346L16.0201 3.03767L10.7507 8.30703L15.8928 13.4491L13.449 15.8929Z" fill="#282938"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </wrapper>

    </>
  )
}

export default App
