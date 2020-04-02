function backClick(){
    //Make the character cards visible again and Hide the details page.
    $(".dionne").show();
    $(".tai").show();
    $(".amber").show();
    $(".christian").show();
    $(".cher").show();
    $(".page").css("position","static"); //Move the details page below the character cards by changing document flow
    $(".back").hide(); //Hide the back button
    $("body, html").css("overflow", "hidden"); //Remove the ability to scroll
    $(".outfitone, .outfittwo, .outfitthree, .outfitfour").hide();
}

function hideChars(){
    //Hide Character cards and reveal back button + Details Page
    $(".dionne").hide();
    $(".tai").hide();
    $(".amber").hide();
    $(".christian").hide();
    $(".cher").hide();
    $(".page").css("position","absolute"); //Remove details page from document flow to "move" it to the top of the screen
    $(".back").show();
    $("body, html").css("overflow", "visible"); //Restore ability to scroll
}


function cherClick() {
    //Hide Characters, reveal back button + details page
    hideChars();
    
    
    $(".outfitone, .outfittwo, .outfitthree, .outfitfour").show(); //Reset visibility of outfit sections
    //Change outfit 1
    $(".outfitone img").attr('src', './images/cher-first.png') //Change Image source
    $(".outfitone h3").html("Cher's Mad for Plaid Outfit"); //Change Header
    $(".outfitone p").html("Yellow Plaid Mini Skirt + Matching Jacket<br /> Cotton <br />Skirt from ASOS: $15 <br />Jacket from Urban Outfitters: $98"); //Change Outfit Details
    
    //Change outfit 2
    $(".outfittwo img").attr('src', './images/outfits-cher-date.png')
    $(".outfittwo h3").html("Cher's Date Look");
    $(".outfittwo p").html("Skin Tight White Mini Dress<br /> Polyester / Viscose <br />Dress from Nordstrom: $209");
    
    //Change outfit 3
    $(".outfitthree img").attr('src', './images/outfits-cher-school.png')
    $(".outfitthree h3").html("Cher's School Look");
    $(".outfitthree p").html("Burgundy Sweater Vest + Oxford + Button-front Mini Skirt<br />Polyester / Acrylic / Corduroy <br />Oxford from Gap: $30 <br />Sweater Vest from Amazon: $28<br />");
    
    //Change outfit 4
    $(".outfitfour img").attr('src', './images/outfits-cher-red.png')
    $(".outfitfour h3").html("Cher's Little Red Dress");
    $(".outfitfour p").html("Red Mini dress + Fur Coat <br />Polyester / Faux Fur <br />Dress from Boohoo: $11<br />Coat from Cichic: $45 <br />");
}

function dionneClick(){
    
    hideChars()
    
    
    $(".outfitone, .outfittwo, .outfitthree, .outfitfour").show();
    //Change outfit 1
    $(".outfitone img").attr('src', './images/dionne-first.png')
    $(".outfitone h3").html("Dionne's Velvet Moment");
    $(".outfitone p").html("Soft Red Velvet Collared Dress <br> Velvet <br> Dress from Shein: 21$");
    
    //Change outfit 2
    $(".outfittwo img").attr('src', './images/dionne-cheetah.png')
    $(".outfittwo h3").html("Dionne's Cheetah Girl Set");
    $(".outfittwo p").html("Cheetah Print Jacket + Skirt + <br> Magenta Blouse <br> Polyester / Chiffon <br> Jacket from Shein: $33 <br> Skirt from Shein: $22 <br> Blouse from Banana Republic: $66");
    
    //Change outfit 3
    $(".outfitthree img").attr('src', './images/dionne-orange.png')
    $(".outfitthree h3").html("Dionne's Orange is the New Black Outfit");
    $(".outfitthree p").html("Dr. Seuss Inspired Hat + Orange Striped T-Shirt + Plaid Skirt <br> Felt/Wool/Cotton <br> Hat from Wish: $41 <br> Shirt from Fat Buddha: $45 <br> Skirt from Zaful: $14");
    
    //Change outfit 4
    $(".outfitfour img").attr('src', './images/dionne-preppy.png')
    $(".outfitfour h3").html("Dionnes Preppy Look");
    $(".outfitfour p").html("B&W Plaid Mini Skirt + Matching Jacket + <br> Top Hat with Bow <br> Cotton <br> Set from DHGate: $60 <br> Hat from Signature: $235 ");
}

function taiClick() {
    
    hideChars()
    
    
    $(".outfitone, .outfittwo, .outfitthree, .outfitfour").show();
    //Change outfit 1
    $(".outfitone img").attr('src', './images/tai-first.png')
    $(".outfitone h3").html("Tai's Preppy Look");
    $(".outfitone p").html("Brown Plaid Mini Skirt + Matching Jacket + <br> Pink Undershirt <br> Cotton <br> Tank Top from UNIQLO: 2$ <br> Set from AliExpress: $50");
    
    
    //Change outfit 2
    $(".outfittwo img").attr('src', './images/tai-day.png')
    $(".outfittwo h3").html("Tai's Day-Out Outfit");
    $(".outfittwo p").html("White Long Sleeve + Blue Sweater Vest + <br> Plaid Skirt <br> Polyester/Cotton <br> Top from Shein: $8 <br> Sweater Vest from Amazon: $55 <br> Skirt from Zaful: $14");
    
    //Change outfit 3
    $(".outfitthree img").attr('src', './images/tai-makeover.png')
    $(".outfitthree h3").html("Tai's Makeover Look");
    $(".outfitthree p").html("Heart Print TOp + Burgundy Skirt <br> Wool/Corduroy <br> Top from Pretties: $85 <br> Skirt from Zaful: $18");
    
    //Change outfit 4
    $(".outfitfour img").attr('src', './images/tai-last.png')
    $(".outfitfour h3").html("Tai's First Day of School Look");
    $(".outfitfour p").html("V-Neck Cardigan Sweater + Black Pencil <br> Mini Skirt <br> Polyester <br> Set from Amazon: $50");
}

function amberClick() {
    
    hideChars()

    $(".outfitone, .outfittwo, .outfitthree, .outfitfour").show();
    //Change outfit 1
    $(".outfitone img").attr('src', './images/amber-first.png')
    $(".outfitone h3").html("Amber's Prom Look");
    $(".outfitone p").html("Black Tanktop + Pink Frilly Skirt <br> Polyester / Viscose <br> Bodysuit from Shein: $11 <br> Skirt from Shein: $17");
    
    //Change outfit 2
    $(".outfittwo img").attr('src', './images/amber-sport.png')
    $(".outfittwo h3").html("Amber's Sport Attire");
    $(".outfittwo p").html("Striped Star Singlet + Matching Biker Shorts <br> Jersey / Polyamide <br> Singlet From Etsy: $72 <br> Shorts from LPRD: $220");
    
    //Change outfit 3
    $(".outfitthree img").attr('src', './images/amber-neon.png')
    $(".outfitthree h3").html("Amber's Neon Addiction");
    $(".outfitthree p").html("Neon Green Mini Skirt + Matching Top <br> Movie Time <br> Denim <br> Top from Banana Republic: $95 <br> Skirt from DollSkill: $18");
    
    //Change outfit 4
    $(".outfitfour").hide(); //Hide section because no outfit. (Reason for resetting visibility at top)
    
}

function christianClick() {
    
    hideChars()

     $(".outfitone, .outfittwo, .outfitthree, .outfitfour").show();
    //Change outfit 1
    $(".outfitone img").attr('src', './images/christian-first.png')
    $(".outfitone h3").html("Christian's Baby Blues");
    $(".outfitone p").html("Light Blue Slim-Fit Tuxedo <br> Polyester <br> Suit Set from Hudson's Bay: $130");
    
    //Change outfit 2
    $(".outfittwo img").attr('src', './images/christian-70.png')
    $(".outfittwo h3").html("Christian's 70s Throwback");
    $(".outfittwo p").html("Multicolored Jacket + Black <br> Oxford + Magenta Pants <br> Cotton <br> Jacket from OuterLimitz: $162 <br> Oxford From AE: $35 <br> Jeans from DHGate: $50");
    
    //Change outfit 3
    $(".outfitthree img").attr('src', './images/christian-casual.png')
    $(".outfitthree h3").html("Christian's Casual Outfit");
    $(".outfitthree p").html("Plain Black Crewneck + Beige Khakis <br> Rayon / Cotton <br> Crewneck from UNIQLO: $2 <br> Khakis from Gap: $55");
    
    //Change outfit 4
    $(".outfitfour").hide();
}