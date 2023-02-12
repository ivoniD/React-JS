import { TextInfoItemSection } from "./TextInfoItemSection"

export const AboutSection = () => {
  return (
    <li>
    <div className="cd-full-width">
        <div className="container js-tm-page-content tm-section-margin-t" data-page-no="2">
            {/* <div className="row">
                <div className="col-xs-12">
                    <div className="tm-flex">


                        <div className="col-lg-6 tm-white-header-container-outer tm-margin-b tm-2-col-left">
                            <div className="tm-bg-white tm-white-header-container">
                                <h2 className="tm-text-title tm-text-title-small">Donec dictum aliquam</h2>
                            </div>
                            <div className="tm-bg-dark-blue text-xs-left tm-textbox tm-textbox-padding tm-white-header-body tm-white-border tm-2-col-equal-height">
                                <p className="tm-text">Nulla scelerisque vitae augue non viverra. Mauris nibh eros, gravida id rutrum eu, placerat quis enim. Ut massa mi, convallis eget pharetra eget, laoreet sit amet orci. Sed tincidunt nisi ut lectus pellentesque viverra. Aliquam condimentum lacinia.</p>                                            
                            </div>    
                        </div>


                        <div className="col-lg-6 tm-white-header-container-outer tm-margin-b tm-2-col-right">
                            <div className="tm-bg-white tm-white-header-container">
                                <h2 className="tm-text-title tm-text-title-small">Vivamus quis lacinia</h2>
                            </div>
                            <div className="tm-bg-dark-blue text-xs-left tm-textbox tm-textbox-padding tm-white-header-body tm-white-border tm-2-col-equal-height">
                                <p className="tm-text">Integer posuere massa ipsum, ac pharetra metus dapibus vel. Duis aliquet ac lacus quis efficitur. Morbi in vulputate sapien. Sed nec mi fringilla metus vehicula porttitor. Donec sit amet arcu quis massa mollis condimentum tempor eleifend enim.</p>                                            
                            </div>    
                        </div>


                    </div>
                </div>
            </div> */}


            {/* <div className="row">
                <div className="col-xs-12">
                    <div className="tm-flex">


                        <div className="col-lg-6 tm-margin-b tm-2-col-left">
                            <div className="tm-bg-white tm-textbox-padding tm-height-100">
                                <h2 className="tm-text-title tm-text-title-small tm-header-margin-b">Proin fringilla felis quam</h2>
                                <p className="tm-text">Ut massa mi, convallis eget pharetra eget, laoreet sit amet orci. Sed tincidunt nisi ut lectus pellentesque viverra. Aliquam condimentum lacinia.</p>    
                            </div>                                            
                        </div>


                        <div className="col-lg-6 tm-margin-b tm-2-col-right">
                            <div className="tm-bg-white tm-textbox-padding tm-height-100">
                                <h2 className="tm-text-title tm-text-title-small tm-header-margin-b">Sed rhoncus egestas</h2>
                                <p className="tm-text">Pellentesque augue urna, ultrices sit amet luctus eget, ultricies sit amet ipsum. Nulla sem nisi, commodo sed auctor sed, euismod nec dui.</p>
                            </div>
                        </div>  


                    </div>
                </div>                                
            </div> */}

            <div className="row">
                <div className="col-xs-12">
                    <div className="tm-flex">

                        <TextInfoItemSection divClassName="col-lg-4 tm-margin-b" tmDivClassName="tm-bg-brown tm-white-border tm-textbox-padding tm-height-100"  
                        value="In Japan, cats are thought to have the power to turn into super spirits when they die. This may stem from the Buddist believe that cats are temporary resting places for powerful and very spiritual people. "/>
                  
                        <TextInfoItemSection divClassName="col-lg-4 tm-margin-b" tmDivClassName="tm-bg-dark-blue tm-white-border tm-textbox-padding tm-height-100"  
                        value="It was illegal to kill cats in Ancient Egypt. Not only were cats seen as an icon for Bast, the Goddess of Protection, but they were also very effective in keeping rats at bay. It was seen as a civil dis-service to kill them and often resulted in the death penalty. "/>
                    
                        <TextInfoItemSection divClassName="col-lg-4 tm-margin-b" tmDivClassName="tm-bg-brown tm-white-border tm-textbox-padding tm-height-100"  
                        value="An orange tabby cat called Stubbs was the mayor of Talkeetna, a small town in Alaska for 20 years! He had several uncontested elections and although he didn’t hold any legislative power, he was loved by locals and tourists alike."/>

                    </div>
                </div>                                
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <div className="tm-flex">

                        <TextInfoItemSection divClassName="col-lg-4 tm-sm-margin-b" tmDivClassName="tm-bg-dark-blue tm-white-border tm-textbox-padding tm-height-100"  
                        value="The richest cat in the world according to Guinness World Records is Blackie. When his millionaire owner passed away he refused to recognise his family in his will and instead gave his 7-million-pound fortune to Blackie! We can’t believe that interesting cat fact!"/>

                        <TextInfoItemSection divClassName="col-lg-4 tm-sm-margin-b" tmDivClassName="tm-bg-brown tm-white-border tm-textbox-padding tm-height-100"  
                        value="You’ve heard of monkeys and dogs in space, but did you know that a cat braved the great unknown too? On October 18th 1963 Felicette, also known as ‘Astrocat’ was the first and only cat to go to space."/>

  
                        <TextInfoItemSection divClassName="col-lg-4 tm-sm-margin-b" tmDivClassName="tm-bg-dark-blue tm-white-border tm-textbox-padding tm-height-100"  
                        value="According to Ancient History Encyclopedia, Herodotus wrote in 440BC that when a pet cat died in Ancient Egyptian times the family members would shave off their eyebrows in mourning. Now that’s an interesting cat fact!"/>

                    </div>
                </div>                                
            </div>
        </div>                                                
    </div> 
</li>
  )
}