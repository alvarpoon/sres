var trackRecordArray = new Array();

//Main Sections
trackRecordArray = [
{id:"0", thumb:"../../../images/trackRecord/logo_rsa.png", largeImg:"../../../images/trackRecord/logo_rsa_lrg.png", location:["shanghai"], branch:['<span class="bold">23,680 sqft</span> at China Fortune Tower, Shanghai'], industry:"insurance", companyName:"RSA (Royal Sun Alliance)",caseStudy:[]},
{id:"1", thumb:"../../../images/trackRecord/logo_axa.png", largeImg:"../../../images/trackRecord/logo_axa_lrg.png", location:["shanghai", "tokyo"], branch:['<span class="bold">16,146 sqft</span> at China Diamond Exchange Center, Shanghai','<span class="bold">35,580 sqft</span> at Kairaku Building, Tokyo'], industry:"insurance", companyName:"AXA",caseStudy:[]},
/* {id:"2", thumb:"../../../images/trackRecord/logo_bae_systems.png", largeImg:"../../../images/trackRecord/logo_bae_systems_lrg.png", location:["washington"], branch:['<span class="bold">23 million sqft</span> at Washington DC'], industry:"technology", companyName:"BAE Systems",caseStudy:["../case-studies/america/washington-technology.html"]}, */
{id:"2", thumb:"../../../images/trackRecord/logo_AON_COFCO.png", largeImg:"../../../images/trackRecord/logo_AON_COFCO_lrg.png", location:["shanghai"], branch:['<span class="bold">32,291 sqft</span> at Jin Mao Tower, Shanghai'], industry:"insurance", companyName:"AON Cofco",caseStudy:[]},
{id:"3", thumb:"../../../images/trackRecord/logo_aon.png", largeImg:"../../../images/trackRecord/logo_aon_lrg.png", location:["hong kong"], branch:['<span class="bold">52,870 sqft</span> at Times Square, Hong Kong'], industry:"insurance", companyName:"AON",caseStudy:["../../case-studies/apac/hongkong-insurance.html"]},
{id:"4", thumb:"../../../images/trackRecord/logo_aia.png", largeImg:"../../../images/trackRecord/logo_aia_lrg.jpg", location:["hong kong","hong kong","hong kong", "shanghai"], branch:['<span class="bold">16,669 sqft</span> at Kerry Center, Hong Kong','<span class="bold">88,525 sqft</span> at International Trade Centre, Hong Kong','<span class="bold">116,777 sqft</span> at Two Landmark East, Hong Kong'/*,'<span class="bold">110,330 sqft</span> at Shanghai (address TBC)'*/], industry:"insurance", companyName:"AIA",caseStudy:[]},
{id:"5", thumb:"../../../images/trackRecord/logo_jlt.png", largeImg:"../../../images/trackRecord/logo_jlt_lrg.png", location:["hong kong","singapore"], branch:['<span class="bold">23,724 sqft</span> at Cityplaza 4, Island East, Hong Kong','<span class="bold">4,250 sqft</span> at Prudential Tower, Singapore'], industry:"insurance", companyName:"JLT",caseStudy:[]},
{id:"6", thumb:"../../../images/trackRecord/logo_china_life.png", largeImg:"../../../images/trackRecord/logo_china_life_lrg.png", location:["hong kong"], branch:['<span class="bold">10,758 sqft</span> at World Finance Centre, Hong Kong'], industry:"insurance", companyName:"China Life Insurance",caseStudy:[]},
{id:"7", thumb:"../../../images/trackRecord/logo_societe_generale.png", largeImg:"../../../images/trackRecord/logo_societe_generale_lrg.png", location:["beijing","hong kong","singapore"], branch:['<span class="bold">64,583 sqft</span> at TaiKang International Tower, Beijing','<span class="bold">110,00 sqft</span> at Pacific Place 3, Hong Kong','<span class="bold">46,015 sqft</span> at One Raffles Quay, Singapore'], industry:"banking", companyName:"Societe Generale",caseStudy:["../../case-studies/apac/beijing-banking.html","../../case-studies/apac/hongkong-banking.html",""]},
/* {id:"9", thumb:"../../../images/trackRecord/logo_national_democratic_institute.png", largeImg:"../../../images/trackRecord/logo_national_democratic_institute_lrg.png", location:["washington"], branch:['<span class="bold">57,000 sqft</span> at Washington, DC'], industry:"Others", companyName:"National Democratic Institute",caseStudy:["../case-studies/america/washington-others.html"]}, */
{id:"8", thumb:"../../../images/trackRecord/logo_abInBev.png", largeImg:"../../../images/trackRecord/logo_abInBev_lrg.png", location:["shanghai"], branch:['<span class="bold">26,910 sqft</span> at Shanghai Central Plaza, Shanghai'], industry:"banking", companyName:"ABinBev",caseStudy:[]},
{id:"9", thumb:"../../../images/trackRecord/logo_morgan_stanley.png", largeImg:"../../../images/trackRecord/logo_morgan_stanley_lrg.png", location:["shanghai"], branch:['<span class="bold">43,055 sqft</span> at Bund Centre, Shanghai'], industry:"banking", companyName:"Morgan Stanley",caseStudy:[]},
{id:"10", thumb:"../../../images/trackRecord/logo_china_construction_bank.png", largeImg:"../../../images/trackRecord/logo_china_construction_bank_lrg.png", location:["hong kong"], branch:['<span class="bold">15,458 sqft</span> at AIA Central, Hong Kong'], industry:"banking", companyName:"China Construction Bank",caseStudy:[]},
{id:"11", thumb:"../../../images/trackRecord/logo_hsbc.png", largeImg:"../../../images/trackRecord/logo_hsbc_lrg.png", location:["shanghai"], branch:['<span class="bold">17,222 sqft</span> at Jie Tai Plaza, Shanghai'], industry:"banking", companyName:"HSBC",caseStudy:[]},
{id:"12", thumb:"../../../images/trackRecord/logo_ubs.png", largeImg:"../../../images/trackRecord/logo_ubs_lrg.png", location:["seoul","hong kong","singapore"], branch:['<span class="bold">64,729 sqft</span> at SFC, Seoul','<span class="bold">24,100 sqft</span> at Two International Finance Centre, Hong Kong','<span class="bold">229,000 sqft</span> at One Raffles Quay, Singapore'], industry:"banking", companyName:"UBS",caseStudy:["../../case-studies/apac/seoul-banking.html","",""]},
{id:"13", thumb:"../../../images/trackRecord/logo_clsa.png", largeImg:"../../../images/trackRecord/logo_clsa_lrg.png", location:["hong kong"], branch:['<span class="bold">10,335 sqft</span> at Lippo Centre, Hong Kong'], industry:"banking", companyName:"CLSA",caseStudy:[]},
{id:"14", thumb:"../../../images/trackRecord/logo_bea.png", largeImg:"../../../images/trackRecord/logo_bea_lrg.png", location:["hong kong"], branch:['<span class="bold">6,233 sqft</span> at United Centre, Hong Kong'], industry:"banking", companyName:"Bank of East Asia",caseStudy:[]},
{id:"15", thumb:"../../../images/trackRecord/logo_kirkland_ellis.png", largeImg:"../../../images/trackRecord/logo_kirkland_ellis_lrg.png", location:['hong kong','shanghai'], branch:['<span class="bold">12,679 sqft; 5,451 sqft; 5,291 sqft</span> at Gloucester Tower, Hong Kong', '<span class="bold">7,535 sqft</span> at CITIC Square, Shanghai'], industry:"legal", companyName:"Kirkland & Ellis",caseStudy:["../../case-studies/apac/hongkong-legal.html",""]},
{id:"16", thumb:"../../../images/trackRecord/logo_linklaters.png", largeImg:"../../../images/trackRecord/logo_linklaters_lrg.png", location:['shanghai','hong kong'], branch:['<span class="bold">43,055 sqft</span> at Mirae Asset Tower, Shanghai', '<span class="bold">16,600 sqft</span> at Alexandra House, Hong Kong'], industry:"legal", companyName:"Linklaters",caseStudy:[]},
{id:"17", thumb:"../../../images/trackRecord/logo_skadden.png", largeImg:"../../../images/trackRecord/logo_skadden_lrg.png", location:["shanghai"], branch:['<span class="bold">13,993 sqft</span> at Plaza 66, Shanghai'], industry:"legal", companyName:"Skadden",caseStudy:[]},
{id:"18", thumb:"../../../images/trackRecord/logo_herbert_smith.png", largeImg:"../../../images/trackRecord/logo_herbert_smith_lrg.png", location:['beijing','hong kong','bangkok'], branch:['<span class="bold">13,455 sqft</span> at Yintai, Beijing ','<span class="bold">30,555 sqft</span> at Gloucester Tower, Hong Kong','<span class="bold">8,180 sqft</span> at Abdulrahim Place, Bangkok'], industry:"legal", companyName:"Herbert Smith Freehills",caseStudy:["../../case-studies/apac/beijing-legal.html","",""]},
{id:"19", thumb:"../../../images/trackRecord/logo_h&M.png", largeImg:"../../../images/trackRecord/logo_h&M_lrg.png", location:["seoul"], branch:['<span class="bold">9,967 sqft</span> at M Plaza/Myeongdong Central Building, Seoul'], industry:"retail", companyName:"H&M",caseStudy:[]},
{id:"20", thumb:"../../../images/trackRecord/logo_berwin_leighton_palsner.png", largeImg:"../../../images/trackRecord/logo_berwin_leighton_palsner_lrg.png", location:["singapore"], branch:['<span class="bold">8,000 sqft</span> at Republic Plaza, Singapore'], industry:"legal", companyName:"Berwin Leighton Paisner",caseStudy:[]},
{id:"21", thumb:"../../../images/trackRecord/logo_paul_hastings.png", largeImg:"../../../images/trackRecord/logo_paul_hastings_lrg.png", location:["tokyo"], branch:['<span class="bold">13,035 sqft</span> at Sengokuyama MORI Tower, Tokyo'], industry:"legal", companyName:"Paul Hastings",caseStudy:["../../case-studies/apac/tokyo-legal.html"]},
{id:"22", thumb:"../../../images/trackRecord/logo_withers.png", largeImg:"../../../images/trackRecord/logo_withers_lrg.png", location:["singapore"], branch:['<span class="bold">1,970 sqft</span> at OUB Plaza 1, Singapore'], industry:"legal", companyName:"Withers",caseStudy:["../../case-studies/apac/singapore-legal.html"]},
{id:"23", thumb:"../../../images/trackRecord/logo_davis_wright_tremaine.png", largeImg:"../../../images/trackRecord/logo_davis_wright_tremaine_lrg.png", location:["shanghai"], branch:['<span class="bold">7,104 sqft</span> at Shanghai Centre, Shanghai'], industry:"legal", companyName:"Davis Wright Tremaine",caseStudy:[]},
/* {id:"26", thumb:"../../../images/trackRecord/logo_ea.png", largeImg:"../../../images/trackRecord/logo_ea_lrg.png", location:["washington"], branch:['<span class="bold">74,500 sqft</span> at Hunt Valley, Maryland'], industry:"technology", companyName:"EA Engineering, Science and Technology, Inc",caseStudy:["../case-studies/america/washington-technology-ea.html"]},
{id:"27", thumb:"../../../images/trackRecord/logo_athletic_propulsion_labs.png", largeImg:"../../../images/trackRecord/logo_athletic_propulsion_labs_lrg.png", location:["los angeles"], branch:['<span class="bold">8,152 sqft</span> at Downtown - 1201 W. Fifth St., Los Angeles'], industry:"technology", companyName:"Athletic Propulsion Labs LLC",caseStudy:["../case-studies/america/los-angeles-technology.html"]}, */
{id:"24", thumb:"../../../images/trackRecord/logo_troutman_sanders.png", largeImg:"../../../images/trackRecord/logo_troutman_sanders_lrg.png", location:['shanghai'], branch:['<span class="bold">7,545 sqft</span> at CITIC Square, Shanghai'], industry:"legal", companyName:"Troutman Sanders",caseStudy:[]},
{id:"25", thumb:"../../../images/trackRecord/logo_stephenson_harwood.png", largeImg:"../../../images/trackRecord/logo_stephenson_harwood_lrg.png", location:["hong kong"], branch:['<span class="bold">24,056 sqft</span> at Bank of China, Hong Kong'], industry:"legal", companyName:"Stephenson Harwood",caseStudy:[]},
{id:"26", thumb:"../../../images/trackRecord/logo_allens_arthur_robinson.png", largeImg:"../../../images/trackRecord/logo_allens_arthur_robinson_lrg.png", location:["hong kong"], branch:['<span class="bold">1,604 sqft</span> at Jardine House, Hong Kong'], industry:"legal", companyName:"Allens Arthur Robinson",caseStudy:[]},
{id:"27", thumb:"../../../images/trackRecord/logo_pwc.png", largeImg:"../../../images/trackRecord/logo_pwc_lrg.png", location:['shanghai','hong kong'], branch:['<span class="bold">116,250 sqft</span> at DBS Bank Tower, Shanghai','<span class="bold">33,318 sqft</span> at Manulife Financial Center, Hong Kong'], industry:"others", companyName:"PriceWaterhouseCoopers",caseStudy:["../../case-studies/apac/shanghai-banking.html",""]},
{id:"28", thumb:"../../../images/trackRecord/logo_conocoPhillips.png", largeImg:"../../../images/trackRecord/logo_conocoPhillips_lrg.png", location:["shanghai"], branch:['<span class="bold">69,965 sqft</span> at Hyundai Motor Tower, Shanghai'], industry:"others", companyName:"ConocoPhillips",caseStudy:[]},
{id:"29", thumb:"../../../images/trackRecord/logo_ingersoll_rand.png", largeImg:"../../../images/trackRecord/logo_ingersoll_rand_lrg.png", location:['shanghai',"hong kong"], branch:['<span class="bold">64,584 sqft</span> at City Center, Shanghai','<span class="bold">6,767 sqft</span> at China Overseas Building, Hong Kong'], industry:"others", companyName:"Ingersoll-Rand",caseStudy:[]},
{id:"30", thumb:"../../../images/trackRecord/logo_johnson_controls.png", largeImg:"../../../images/trackRecord/logo_johnson_controls_lrg.png", location:["tokyo","shanghai"], branch:['<span class="bold">49,210 sqft</span> at Minatomirai Center Building, Tokyo','<span class="bold">77,500 sqft</span> at SOHO Zhongshan Plaza, Shanghai'], industry:"others", companyName:"Johnson Controls",caseStudy:[]},
{id:"31", thumb:"../../../images/trackRecord/logo_sanofi_aventis.png", largeImg:"../../../images/trackRecord/logo_sanofi_aventis_lrg.png", location:["shanghai"], branch:['<span class="bold">18,299 sqft</span> at Ben Ben Mansion, Shanghai'], industry:"others", companyName:"Sanofi Aventis",caseStudy:[]},
{id:"32", thumb:"../../../images/trackRecord/logo_jafra.png", largeImg:"../../../images/trackRecord/logo_jafra_lrg.png", location:["shanghai"], branch:['<span class="bold">59,225 sqft</span> at West Valley - 2451 Townsgate Road, Westlake Village'], industry:"retail", companyName:"Jafra Cosmetics International, Inc",caseStudy:[]},
{id:"33", thumb:"../../../images/trackRecord/logo_apple.png", largeImg:"../../../images/trackRecord/logo_apple_lrg.png", location:['sydney', "shanghai", "beijing", "hong kong"], branch:['<span class="bold">1.3 million sqft</span> at Australia, Shanghai, Beijing, Hong Kong'], industry:"retail", companyName:"Apple",caseStudy:[]},
{id:"34", thumb:"../../../images/trackRecord/logo_prada.png", largeImg:"../../../images/trackRecord/logo_prada_lrg.png", location:["hong kong"], branch:['<span class="bold">9,397 sqft</span> at Causeway Bay & Tsuen Wan locations, Hong Kong'], industry:"retail", companyName:"Prada",caseStudy:[]},
{id:"35", thumb:"../../../images/trackRecord/logo_fuji_xerox.png", largeImg:"../../../images/trackRecord/logo_fuji_xerox_lrg.png", location:["hong kong"], branch:['<span class="bold">80,729 sqft</span> at New World Tower, Hong Kong'], industry:"others", companyName:"FujiXerox",caseStudy:[]},
{id:"36", thumb:"../../../images/trackRecord/logo_deloitte.png", largeImg:"../../../images/trackRecord/logo_deloitte_lrg.png", location:[], branch:['<span class="bold">1,334 sqft</span> at The Exchange Tower, Tianjin'], industry:"others", companyName:"Deloitte Touche Tohmatsu",caseStudy:[]},
{id:"37", thumb:"../../../images/trackRecord/logo_good_year.png", largeImg:"../../../images/trackRecord/logo_good_year_lrg.png", location:["shanghai"], branch:['<span class="bold">27,986 sqft</span> at K Wah Centre, Shanghai'], industry:"others", companyName:"Good Year",caseStudy:[]},
{id:"38", thumb:"../../../images/trackRecord/logo_philip_morris.png", largeImg:"../../../images/trackRecord/logo_philip_morris_lrg.png", location:["seoul"], branch:['<span class="bold">63,392 sqft</span> at IFC Tower One, Seoul'], industry:"others", companyName:"Phillip Morris",caseStudy:["../../case-studies/apac/seoul-others.html"]},
{id:"39", thumb:"../../../images/trackRecord/logo_3grams.png", largeImg:"../../../images/trackRecord/logo_3grams_lrg.png", location:["shanghai"], branch:['<span class="bold">27,986 sqft</span> at Shanghai IFC, Shanghai'], industry:"others", companyName:"Franklin Templeton Sealand Fund Management",caseStudy:[]},
{id:"40", thumb:"../../../images/trackRecord/logo_nec.png", largeImg:"../../../images/trackRecord/logo_nec_lrg.png", location:['shanghai'], branch:['<span class="bold">67,813 sqft</span> at Ciro&#39;s Plaza, Shanghai'], industry:"others", companyName:"NEC",caseStudy:[]},
{id:"41", thumb:"../../../images/trackRecord/logo_MERCK.png", largeImg:"../../../images/trackRecord/logo_MERCK_lrg.png", location:[], branch:['<span class="bold">7,104 sqft</span> at International Electronic Building, Guangzhou'], industry:"others", companyName:"MERCK",caseStudy:[]},
{id:"42", thumb:"../../../images/trackRecord/logo_audi.png", largeImg:"../../../images/trackRecord/logo_audi_lrg.png", location:[], branch:['<span class="bold">12,917 sqft</span> at IFP Guangzhou'], industry:"others", companyName:"Audi",caseStudy:[]},
{id:"43", thumb:"../../../images/trackRecord/logo_mercedes_benz.png", largeImg:"../../../images/trackRecord/logo_mercedes_benz_lrg.png", location:[], branch:['<span class="bold">19,375 sqft</span> at IFP, Guangzhou'], industry:"others", companyName:"Mercedes-Benz",caseStudy:[]},
{id:"44", thumb:"../../../images/trackRecord/logo_medtronic.png", largeImg:"../../../images/trackRecord/logo_medtronic_lrg.png", location:["hong kong", "shanghai", "beijing", "singapore", "seoul", "sydney", "tokyo"], branch:['<span class="bold">4.3 million sqft</span> at Hong Kong, Shanghai, Beijing, Singapore, Seoul, Sydney, Tokyo'], industry:"others", companyName:"Medtronic",caseStudy:[]},
{id:"45", thumb:"../../../images/trackRecord/logo_evonik.png", largeImg:"../../../images/trackRecord/logo_evonik_lrg.png", location:["seoul"], branch:['<span class="bold">4,424 sqft</span> at CCMM Building, Seoul'], industry:"others", companyName:"Evonik",caseStudy:[]},
{id:"46", thumb:"../../../images/trackRecord/logo_texas_instruments.png", largeImg:"../../../images/trackRecord/logo_texas_instruments_lrg.png", location:["seoul"], branch:['<span class="bold">23,465 sqft</span> at Trade Tower, Seoul','<span class="bold">17,545 sqft</span> at CAMCO Yangiae Tower, Seoul'], industry:"others", companyName:"Texas Instruments",caseStudy:[]},
{id:"47", thumb:"../../../images/trackRecord/logo_dell.png", largeImg:"../../../images/trackRecord/logo_dell_lrg.png", location:["seoul"], branch:['<span class="bold">48,115 sqft</span> at Prudential Tower, Seoul'], industry:"others", companyName:"Dell Korea",caseStudy:[]},
{id:"48", thumb:"../../../images/trackRecord/logo_standard_chartered.png", largeImg:"../../../images/trackRecord/logo_standard_chartered_lrg.png", location:["seoul"], branch:['<span class="bold">42,345 sqft</span> at 7 branches, Seoul'], industry:"banking", companyName:"Standard Chartered",caseStudy:[]},
{id:"49", thumb:"../../../images/trackRecord/logo_citi.png", largeImg:"../../../images/trackRecord/logo_citi_lrg.png", location:["seoul"], branch:['<span class="bold">16,439 sqft</span> at 4 branches, Seoul'], industry:"banking", companyName:"Citibank",caseStudy:[]},
{id:"50", thumb:"../../../images/trackRecord/logo_dhl.png", largeImg:"../../../images/trackRecord/logo_dhl_lrg.png", location:["seoul"], branch:['<span class="bold">26,727 sqft</span> at Ire Building, Seoul'], industry:"others", companyName:"DHL Korea",caseStudy:[]},
{id:"51", thumb:"../../../images/trackRecord/logo_ing_bank.png", largeImg:"../../../images/trackRecord/logo_ing_bank_lrg.png", location:["seoul"], branch:['<span class="bold">25,392 sqft</span> at Heungkuk Life Building, Seoul'], industry:"banking", companyName:"ING Bank",caseStudy:[]},
{id:"52", thumb:"../../../images/trackRecord/logo_korea_investors_service.png", largeImg:"../../../images/trackRecord/logo_korea_investors_service_lrg.png", location:["seoul"], branch:['<span class="bold">43,153 sqft</span> at 63 Building, Seoul'], industry:"others", companyName:"KIS/Moody&#39;s",caseStudy:[]},
{id:"53", thumb:"../../../images/trackRecord/logo_thyssenKrupp.png", largeImg:"../../../images/trackRecord/logo_thyssenKrupp_lrg.png", location:["seoul"], branch:['<span class="bold">71,591 sqft</span> at SMTB, Seoul'], industry:"others", companyName:"ThyssenKrupp",caseStudy:[]},
{id:"54", thumb:"../../../images/trackRecord/logo_pramerica.png", largeImg:"../../../images/trackRecord/logo_pramerica_lrg.png", location:["seoul"], branch:['<span class="bold">3,520 sqft</span> at Center 1, Seoul'], industry:"others", companyName:"Pramerica",caseStudy:[]},
{id:"55", thumb:"../../../images/trackRecord/logo_new_zealand.png", largeImg:"../../../images/trackRecord/logo_new_zealand_lrg.png", location:["seoul"], branch:['<span class="bold">20,268 sqft</span> at Jeongdong Building, Seoul'], industry:"others", companyName:"New Zealand Embassy",caseStudy:[]},
{id:"56", thumb:"../../../images/trackRecord/logo_cook_medical.png", largeImg:"../../../images/trackRecord/logo_cook_medical_lrg.png", location:["seoul"], branch:['<span class="bold">10,495 sqft</span> at Kyobo Life Building, Seoul'], industry:"others", companyName:"Cook Medical HQ",caseStudy:[]},
{id:"57", thumb:"../../../images/trackRecord/logo_estee_lauder.png", largeImg:"../../../images/trackRecord/logo_estee_lauder_lrg.png", location:["seoul"], branch:['<span class="bold">66,995 sqft</span> at Meritz Tower, Seoul','<span class="bold">196,463 sqft</span> at Keumwon Warehouse, Seoul'], industry:"retail", companyName:"Estee Lauder",caseStudy:[]},
{id:"58", thumb:"../../../images/trackRecord/logo_pepsi.png", largeImg:"../../../images/trackRecord/logo_pepsi_lrg.png", location:["seoul"], branch:['<span class="bold">9,871 sqft</span> at KT&G Daechi Tower, Seoul'], industry:"others", companyName:"Pepsi",caseStudy:[]},
{id:"59", thumb:"../../../images/trackRecord/logo_applied_materials.png", largeImg:"../../../images/trackRecord/logo_applied_materials_lrg.png", location:["seoul"], branch:['<span class="bold">78,275 sqft</span> at Bundang Korea Design Center, Seoul'], industry:"others", companyName:"Applied Materials",caseStudy:[]},
{id:"60", thumb:"../../../images/trackRecord/logo_lockton.png", largeImg:"../../../images/trackRecord/logo_lockton_lrg.png", location:["singapore"], branch:['<span class="bold">8,000 sqft</span> at One Raffles Place, Tower 2, Singapore'], industry:"insurance", companyName:"Lockton",caseStudy:["../../case-studies/apac/singapore-insurance.html"]},
{id:"61", thumb:"../../../images/trackRecord/logo_commerzbank.png", largeImg:"../../../images/trackRecord/logo_commerzbank_lrg.png", location:["tokyo"], branch:['<span class="bold">13,315 sqft</span> at Atago Green Hills MORI Tower, Toyko'], industry:"banking", companyName:"Commerzbank",caseStudy:["../../case-studies/apac/tokyo-banking.html"]},
{id:"62", thumb:"../../../images/trackRecord/logo_brit_insurance.png", largeImg:"../../../images/trackRecord/logo_brit_insurance_lrg.png", location:["tokyo"], branch:['<span class="bold">1,959 sqft</span> at Fuerte Kojimachi, Toyko'], industry:"insurance", companyName:"Brit Insurance",caseStudy:["../../case-studies/apac/tokyo-insurance.html"]},
{id:"63", thumb:"../../../images/trackRecord/logo_motorola.png", largeImg:"../../../images/trackRecord/logo_motorola_lrg.png", location:['sydney', "shanghai", "beijing", "hong kong",'taipei'], branch:['<span class="bold">1 million sqft</span> at Hong Kong, Shanghai, Beijing, Taipei'], industry:"others", companyName:"Motorola Mobility ",caseStudy:[]}
];