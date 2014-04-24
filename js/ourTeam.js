var ourTeamArray = new Array();

//Main Sections
ourTeamArray = [
{id:"0", empName:"IAIN CHAPMAN", empTitle:"<span class='block bold'>Managing Director</span>Strategic Real Estate Services<br />Asia Pacific", telNo:"+852 2842 4223", email:"ichapman@savills.com.hk", location:"Hong Kong", experience:"25", languages:"English", expertise:"Legal / Banking / Accounting", workCat:['all','account management','leadership', 'sustainability','transaction management']},
{id:"1", empName:"SIMON HA", empTitle:"<span class='block bold'>Director</span>Commercial", telNo:"+86 (0) 216 391 6688", email:"simon.ha@savills.com.cn", location:"Shanghai", experience:"9", languages:"English, Cantonese, Mandarin", expertise:"Legal & Banking", workCat:['all','transaction management']},
{id:"2", empName:"JOHN MACKENZIE", empTitle:"<span class='block bold'>Divisional Director</span>Corporate Real Estate Services", telNo:"+61 (0) 2 8215 8982", email:"jmackenzie@savills.com.au", location:"Sydney & Melbourne, Australia", experience:"37", languages:"English", expertise:"All Sectors", workCat:['all','transaction management']},
{id:"3", empName:"Dominic HARDING", empTitle:"<span class='block bold'>Account Manager</span>Account Management", telNo:"+852 2842 4517", email:"dharding@savills.com.hk", location:"Hong Kong", experience:"3", languages:"English", expertise:"Corporate Real Estate", workCat:['all','transaction management','Account Management']},
{id:"4", empName:"James Sherrard", empTitle:"<span class='block bold'>Senior Director</span>Head of Project Management for Asia Pacific", telNo:"+852 2840 4720", email:"jsherrard@savills.asia", location:"Hong Kong", experience:"17", languages:"English & French", expertise:"Project Management & Commercial Management", workCat:['all','leadership','project management']},
{id:"5", empName:"BEN HOPKINS", empTitle:"<span class='block bold'>Country Manager</span>Project Management", telNo:"+65 6415 3657", email:"bhopkins@savills.com.sg", location:"Singapore", experience:"11", languages:"English & Portuguese", expertise:"Banking / Education / Oil & Gas / Legal / Industrial / Media", workCat:['all','project management']},
{id:"6", empName:"KARA THOMPSON", empTitle:"<span class='block bold'>Senior Project Manager</span>Corporate Real Estate Services", telNo:"+44(0) 207 409 8047", email:"kathompson@savills.com", location:"UK", experience:"6", languages:"English", expertise:"Project & Facilities management", workCat:['all','project management']},
{id:"7", empName:"Phill Andrew", empTitle:"<span class='block bold'>Managing Director</span>Project Management", telNo:"+61 (0) 2 82158922", email:"pandrew@savills.com.au", location:"Sydney, Australia", experience:"25", languages:"English", expertise:"Management System & Fit-out", workCat:['all','project management']},
{id:"8", empName:"Julian Wyatt", empTitle:"<span class='block bold'>Senior Director</span>Facilities management", telNo:"+852 2534 1400 ", email:"jwyatt@savills.com.hk", location:"Hong Kong", experience:"Over 20", languages:"English", expertise:"Facilities management", workCat:['all','facilities management','leadership']},
{id:"9", empName:"ANTHONY MCQUADE", empTitle:"<span class='block bold'>Senior National Director</span>", telNo:"+86 (10) 5925 2002", email:"anthony.mcquade@savills.com.cn", location:"Beijing, China", experience:"21", languages:"English, Mandarin", expertise:"All Sectors", workCat:['all','facilities management']},
{id:"10", empName:"Peter Wong", empTitle:"<span class='block bold'>Senior Director</span>Facilities management ", telNo:"+852 2534 1781", email:"pwong@savills.com.hk", location:"Hong Kong", experience:"36", languages:"Cantonese & English", expertise:"Building Services Engineering", workCat:['all','facilities management']},
{id:"11", empName:"JAMES CHOW", empTitle:"<span class='block bold'>Director</span>Project Consultancy", telNo:"+852 2534 1409", email:"jchow@savills.com.hk", location:"Hong Kong", experience:"Over 20", languages:"English, Cantonese, Mandarin", expertise:"Building Consultancy Projects", workCat:['all','facilities management']},
{id:"12", empName:"CHRIS MARRIOTT", empTitle:"<span class='block bold'>Chief Executive Officer</span>South East Asia", telNo:"+65 6415 3888", email:"cjmarriott@savills.com", location:"Singapore", experience:"Over 20", languages:"English", expertise:"All Sectors", workCat:['all']},
{id:"13", empName:"JON HUTT", empTitle:"<span class='block bold'>Head of Corporate Real Estate Services</span>", telNo:"+44 (0) 1223 347 213", email:"jhutt@savills.com", location:"UK", experience:"Over 20", languages:"English", expertise:"All Areas of Commercial Work", workCat:['all','sustainability']},
{id:"14", empName:"BRETT ASHTON", empTitle:"<span class='block bold'>Director</span>Global Business Services, North America", telNo:"", email:"bashton@savills.com", location:"United States", experience:"Over 25", languages:"English", expertise:"All Aspects of Commercial", workCat:['all']},
{id:"15", empName:"MARK ANDREWS", empTitle:"<span class='block bold'>Head of Corporate Real Estate Services (EMEA)</span>", telNo:"+44 (0) 207 409 8772", email:"mandrews@savills.com", location:"UK", experience:"18", languages:"English", expertise:"All Areas of Commercial Work", workCat:['all',]},
{id:"16", empName:"CRAIG CARR", empTitle:"<span class='block bold'>Director</span>Commercial", telNo:"+86 (0) 216 391 6702", email:"craig.carr@savills.com.cn", location:"Shanghai", experience:"16", languages:"Mandarin & English", expertise:"All Sectors", workCat:['all','transaction management']},
{id:"17", empName:"ROBERT COLLINS", empTitle:"<span class='block bold'>Chief Executive Officer</span>", telNo:"+66 (0) 2636 0300", email:"robertc@savills.com.th", location:"Bangkok Thailand", experience:"22", languages:"English", expertise:"Retail", workCat:['all','transaction management']},
{id:"18", empName:"RICKY LAU", empTitle:"<span class='block bold'>Senior Director</span>Commercial Leasing", telNo:"+852 2842 4501", email:"rklau@savills.com.hk", location:"Hong Kong", experience:"17", languages:"English, Cantonese & Mandarin", expertise:"Tenant & Landlord Representation, Lease Renewal & Restructure", workCat:['all','transaction management']},
{id:"19", empName:"SUE LEE", empTitle:"<span class='block bold'>Director</span>Commercial Leasing Services", telNo:"+82 (2) 2124 4180", email:"slee@savills.com.kr", location:"Seoul", experience:"12", languages:"Korean & English", expertise:"Legal / Pharmaceutical / Korean conglomerate", workCat:['all','transaction management']},
{id:"20", empName:"KEVIN MURTAGH", empTitle:"<span class='block bold'>Senior Manager</span>Commercial", telNo:"+65 6415 7334", email:"kevin.murtagh@savills.com.sg", location:"Singapore", experience:"6", languages:"English, German, Indonesian", expertise:"All Sectors", workCat:['all','transaction management']},
{id:"21", empName:"JEFFREY WONG", empTitle:"<span class='block bold'>Deputy Senior Director</span>Commercial Leasing", telNo:"+852 2842 4290", email:"jwong@savills.com.hk", location:"Hong Kong", experience:"10", languages:"English, Cantonese & Mandarin", expertise:"Tenant Representation & Rent Review", workCat:['all','transaction management']},
{id:"22", empName:"RUPERT PROVEST", empTitle:"<span class='block bold'>Director</span>Agency", telNo:"+84 8 3823 9205", email:"rpovest@savills.com.vn", location:"HCM City Vietnam", experience:"8", languages:"English", expertise:"Retail & Commercial", workCat:['all','transaction management']},
{id:"23", empName:"THANATCHAMON WONGLOKNIYOM", empTitle:"<span class='block bold'>Associate Director</span>", telNo:"+66 (0) 2 636 0300", email:"thanatchamonw@savills.com.th", location:"Bangkok Thailand", experience:"16", languages:"Thai & English", expertise:"Retail", workCat:['all','transaction management']},
{id:"24", empName:"GARY WEN", empTitle:"<span class='block bold'>Director</span>Commercial", telNo:"+86 (10) 5925 2064", email:"gary.wen@savills.com.cn", location:"Beijing", experience:"11", languages:"Chinese & English", expertise:"IT & Finance", workCat:['all','transaction management']},
{id:"25", empName:"TOSHIHDE HONOKI", empTitle:"<span class='block bold'>Tenant Representation</span>", telNo:"+81 (0) 3 5562 1721", email:"thonoki@savills.co.jp", location:"Tokyo", experience:"Over 10", languages:"English & Japanese", expertise:"Tenant Representation", workCat:['all','transaction management']},
{id:"26", empName:"ASHOK KUMAR", empTitle:"<span class='block bold'>Principal & Managing Director</span>Cresa", telNo:"+91 22 6504 7598", email:"akumar@cresapartners.com", location:"India", experience:"Over 20", languages:"Hindi & English", expertise:"IT / Telecom / Entertainment / Industrial", workCat:['all','']},
{id:"27", empName:"DOUG OSBORNE", empTitle:"<span class='block bold'>Managing Director</span>", telNo:"+64 (0) 9951 5910", email:"dosborne@savills.co.nz", location:"New Zealand", experience:"40", languages:"English", expertise:"Strategic and Corporate Real Estate Advisory", workCat:['all','transaction management']},
{id:"28", empName:"NICKY WIGHTMAN", empTitle:"<span class='block bold'>Business Strategy Consultant</span>", telNo:"+44(0) 1223 347 087", email:"nwightman@savills.com", location:"UK", experience:"6", languages:"English & French", expertise:"Corporate Strategy & Innovation", workCat:['all','sustainability']},
{id:"29", empName:"MICHAEL MCCULLOUGH", empTitle:"<span class='block bold'>Managing Director</span>KMC MAG Group", telNo:"+63 2403 5519", email:"michael@kmcmaggroup.com", location:"Manila Philippines", experience:"5", languages:"English & Filipino", expertise:"Tenant Representation / Customer Services Centres", workCat:['all','transaction management']},
{id:"30", empName:"RICKY HUANG", empTitle:"<span class='block bold'>Associate Director</span>Investment ", telNo:"+8662 8789 5828", email:"rhuang@savills.com.tw", location:"Taiwan", experience:"9", languages:"English & Mandarin", expertise:"Industrial & Commercial", workCat:['all','transaction management']},
{id:"31", empName:"PIERS NICKALLS", empTitle:"<span class='block bold'>Director</span>Corporate Real Estate Services", telNo:"+44 (0) 207409 8704", email:"pnickalls@savills.com", location:"London, UK", experience:"20", languages:"English", expertise:"Corporate Real Estate", workCat:['all','transaction management']},
{id:"32", empName:"NEIL MACGREGOR", empTitle:"<span class='block bold'>Managing Director", telNo:"+84 8 3823 9205", email:"nmacgregor@savills.com.vn", location:"HCM City Vietnam", experience:"16", languages:"English & Vietnamese", expertise:"Valuation & Investment, Insurance", workCat:['all','transaction management']},
{id:"33", empName:"TONY CHAI", empTitle:"<span class='block bold'>Senior Director</span>Project Management", telNo:"+82 2 2124 4231", email:"shchai@savills.com.kr", location:"Seoul", experience:"25", languages:"English & Korean", expertise:"Development and Remodeling", workCat:['all','project management']},
{id:"34", empName:"ADAM EVENNETT", empTitle:"<span class='block bold'>Associate Director</span>Project Management", telNo:"+86 186 2167 2365", email:"adam.evennett@savills.com.cn", location:"Shanghai, China", experience:"10", languages:"English & intermediate Mandarin", expertise:"Building Refurbishment & Interiors for Retail and Commercial Fit Out", workCat:['all','project management']},
{id:"35", empName:"ROBERT ANG", empTitle:"<span class='block bold'>Managing Director</span>Savills Rahim & Co", telNo:"+60 (0) 3-2691 9922", email:"robertang@savillsrahim-co.com", location:"Kuala Lumpur", experience:"Over 30", languages:"English & Chinese", expertise:"Real Estate Consultancy", workCat:['all','transaction management']},
{id:"36", empName:"SIMON SMITH", empTitle:"<span class='block bold'>Senior Director</span>Research & Consultancy", telNo:"+852 2842 4573", email:"ssmith@savills.com.hk", location:"Hong Kong", experience:"Over 19", languages:"English", expertise:"Consultancy Services for Residential, Commercial and Mixed Use Projects", workCat:['all','industrial']},
{id:"37", empName:"DARREN CURRY", empTitle:"<span class='block bold'>Divisional Director</span>Industrial", telNo:" +61 (0) 29761 1304", email:"dcurray@savills.com.au", location:"NSW Australia", experience:"20", languages:"English", expertise:"Pre-lease Co-ordination / Sales and Leasing Projects / Industrial Investment / Project Marketing", workCat:['all','industrial']},
{id:"38", empName:"JAMES SIU", empTitle:"<span class='block bold'>Senior Director</span>Industrial and Kowloon Investment Sales", telNo:"+852 2378 8638", email:"jsiu@savills.com.hk", location:"Hong Kong", experience:"30", languages:"Putonghua & Cantonese", expertise:"Industrial / Logistics", workCat:['all','industrial']},
{id:"39", empName:"Angela Lu", empTitle:"<span class='block bold'>Manager</span>Transaction Management", telNo:"+886 2 8789 5828", email:"Alu@savills.com.tw", location:"Taiwan ", experience:"8", languages:"English & Chinese", expertise:"Commercial and Corporate Real Estate", workCat:['all','transaction management']},
{id:"40", empName:"Ben Bickery", empTitle:"<span class='block bold'>Regional Co-ordinator (Korea)</span>Transaction Management & Industrial", telNo:"(82) 2 2124 4172 ", email:"bvickery@savills.co.kr", location:"Seoul, South Korea", experience:"3", languages:"English", expertise:"Tenant Rep. Legal, Banking & tech", workCat:['all','transaction management', 'industrial']},
{id:"41", empName:"Dale O'Toole", empTitle:"<span class='block bold'>National Sustainability Manager</span>Sustainability", telNo:"+61 (0) 3 8686 8037 ", email:"dotoole@savills.com.au", location:"Australia", experience:"Over 20", languages:"English", expertise:"Sustainability ", workCat:['all','sustainability']},
{id:"42", empName:"Alexander Ang", empTitle:"<span class='block bold'>Marketing Executive</span>Transaction Management", telNo:"+6010 366 7087", email:"alexang@savillsrahim-co.com", location:"KL, Malaysia", experience:"2", languages:"English, Mandarin, Cantonese & Malay", expertise:"Relocation, Tenant-Rep", workCat:['all','transaction management']},
{id:"43", empName:"Daniel Byrne", empTitle:"<span class='block bold'>Development Manager</span>Transaction Management", telNo:"+64 (0) 9 951 5913", email:"dbyrne@savills.com.nz", location:"New Zealand", experience:"11", languages:"English", expertise:"Corporate Commercial Real Estate and Investment Sales", workCat:['all','transaction management']},
{id:"44", empName:"Jerry Yan", empTitle:"<span class='block bold'>Associate Director</span>Transaction Management", telNo:"(8610) 5925 2288", email:"jerry.yan@savills.com.cn", location:"Beijing", experience:"7", languages:"English & Chinese (Mandarin) ", expertise:"Commercial Real Estate. Tier 1 and Tier 2 Chinese cities", workCat:['all','transaction management']},
{id:"45", empName:"Terence Lau", empTitle:"<span class='block bold'>Director </span>Transaction Management", telNo:"0755  8828 5703", email:"terence.lau@savills.com.cn", location:"Shenzhen", experience:"Over 20", languages:"English, Mandarin & Cantonese", expertise:"All areas of commercial real estate", workCat:['all','transaction management']},
{id:"46", empName:"Nick Bradstreet", empTitle:"<span class='block bold'>Deputy Managing Director & Head of Leasing</span>Retail", telNo:"+852 2842 4255", email:"nbradstreet@savills.com.hk", location:"Hong Kong", experience:"27", languages:"English", expertise:"Retail / Shopping Centers. Regional leasing requirements", workCat:['all','retail']},
{id:"47", empName:"Lucas Shen", empTitle:"<span class='block bold'>Manager</span>Account Management", telNo:"+852 2842 4247", email:"Lshen@savills.com.hk", location:"Hong Kong", experience:"3", languages:"English and Cantonese", expertise:"Commercial Real Estate", workCat:['all','account management']},
{id:"48", empName:"John Kim", empTitle:"<span class='block bold'>Senior Manager</span>Industrial", telNo:"+82 2 2124 4257", email:"dokim@savills.co.kr", location:"Seoul ", experience:"7", languages:"Korean & English", expertise:"Manufacturing/Automotive/Pharmaceutical", workCat:['all','industrial']},
{id:"49", empName:"Dominic Peters", empTitle:"<span class='block bold'>Director</span>Industrial", telNo:"98252101", email:"dpeters@savills.com.sg", location:"Singapore ", experience:"20", languages:"English", expertise:"Industrial", workCat:['all','industrial']},
{id:"50", empName:"Dick Kwok", empTitle:"<span class='block bold'>Senior Director</span>Project Management", telNo:"852 2534 1777", email:"dkwok@savills.com.hk", location:"Hong Kong", experience:"21", languages:"English, Cantonese and Mandarin", expertise:" Property, Facilities and Asset Management", workCat:['all','project management','facilities management']},
{id:"51", empName:"David Nicholas", empTitle:"<span class='block bold'>General Manager NSW</span>Project Management", telNo:"+61 2 8913 4813", email:"dnicholas@savills.com.au", location:"Sydney", experience:"25", languages:"English", expertise:"Project direction, structuring, risk management and commercial negotiations", workCat:['all','project management']},
{id:"52", empName:"Chris Adam", empTitle:"<span class='block bold'>General Manager</span>Project Management - VIC", telNo:"+61 (0) 3 9445 6841", email:"cadam@savills.com.au", location:"Melbourne", experience:"10", languages:"English", expertise:"Commercial development, refurbishment and fitout, data centres", workCat:['all','project management']},
{id:"53", empName:"Fred Placke", empTitle:"<span class='block bold'>Principle</span>Corporate Solutions", telNo:"+1 512 716 8262 ", email:"FPlacke@cresa.com", location:"Austin, Texas", experience:"15", languages:"English", expertise:"Corporate clients", workCat:['all','usa corporate solutions']},
{id:"54", empName:"Scott Bumpas", empTitle:"<span class='block bold'>Managing Principle</span>Corporate Solutions", telNo:"+1 972 713 4000 ", email:"Scsbumpas@cresa.com", location:"Dallas, Texas", experience:"30", languages:"English", expertise:"Corporate clients", workCat:['all','usa corporate solutions']},
{id:"55", empName:"Mark Jaccom", empTitle:"<span class='block bold'>President and Managing Principle</span>Corporate Solutions", telNo:"+1 212 687 4084", email:"mjaccom@cresa.com", location:"New York", experience:"Over 20", languages:"English", expertise:"Tenant representation and corporate clients", workCat:['all','usa corporate solutions']},
{id:"56", empName:"Rich Rhodes", empTitle:"<span class='block bold'>Managing Principle</span>Corporate Solutions", telNo:"+1 202 628 0300", email:"rrhodes@cresa.com", location:"Washington", experience:"30", languages:"English", expertise:"Tenant representation and corporate clients", workCat:['all','usa corporate solutions']},
{id:"57", empName:"Matthew Miller", empTitle:"<span class='block bold'>Managing Principle</span>Corporate Solutions", telNo:"+1 310 943 5100", email:"mmiller@cresa.com", location:"Los Angeles", experience:"Over 25", languages:"English", expertise:"Entertainment and Technology Companies", workCat:['all','usa corporate solutions']},
{id:"58", empName:"Yann Deschamps", empTitle:"<span class='block bold'>Director</span>Commercial", telNo:"", email:"", location:"Shanghai, China", experience:"Over 12", languages:"English, Mandarin, French & Spanish", expertise:"Commercial, Tenant Representation & Industrial", workCat:['all','usa corporate solutions']},
{id:"59", empName:"Phillip Infelise", empTitle:"<span class='block bold'>Managing Director</span>Cresa Denver", telNo:"303.302.1616 ext 276 dd", email:"pinfelise@cresa.com", location:"United States", experience:"35", languages:"English", expertise:"Project Management", workCat:['all','project management']},
{id:"60", empName:"Tim Bretten", empTitle:"<span class='block bold'>Director</span>", telNo:"+44 (0) 161 244 7763", email:"tbretten@savills.com", location:"Manchester", experience:"Over 12", languages:"English", expertise:"Facilities Management & Project Management", workCat:['all','project management']},
{id:"61", empName:"Bryan Kidd", empTitle:"<span class='block bold'>Country Manager, India</span>Project Management", telNo:"+91 9535 129604", email:"bkidd@savills.in", location:"Bangalore, India", experience:"5", languages:"English", expertise:"Project Management", workCat:['all','project management']}
];

var ourTeamGeneralContent = new Array();

ourTeamGeneralContent = [
{content: '<span class="titleSpan">ACCOUNT EXECUTIVES</span><ul class="yellowList"><li>"Champions" of the Business with Real Estate Experience Exceeding 25 Years</li><li>Responsibilities are in Delivery and Strategy</li></ul></div>'},
{content: '<span class="titleSpan">ACCOUNT MANAGEMENT</span><ul class="yellowList"><li>Support in Managing the Service Delivery</li><li>Ensure Consistent High Quality Delivery</li></ul>'},
{content: '<span class="titleSpan">TRANSACTION MANAGEMENT</span><ul class="yellowList"><li>Provide Guidance and Expertise for Market Appraisals, Acquisitions and Disposals</li><li>Work Closely with the Account Executives and Account Manager to Develop Client Relationships</li></ul>'},
{content: '<span class="titleSpan">PROJECT MANAGEMENT</span><ul class="yellowList"><li>Responsible for Delivery of Building Related Matters at Exit and Occupation of Premises</li><li>Responsibilities are in Delivery and Strategy</li></ul>'},
{content: '<span class="titleSpan">INDUSTRIAL RESEARCH & CONSULTANCY</span><p>Savills has strong centres of excellence for industrial acquisition, disposition and consultancy in Sydney, Singapore and Hong Kong. Our experts service regional requirements for clients from these well located geographical hubs. </p>'},
{content: '<div class="ourTeamGeneralContent" style="height:285px;"><span class="titleSpan">SUSTAINABILITY</span><p class="smallText" style="width: 620px;">Savills Earth was established to assist a broad range of clients to improve their environmental performance in a targeted and practical, yet cost-effective manner. Among other things, our Savills Earth team can:</p><ul class="yellowList"><li>Assist in Developing and Managing Environmental Objectives between Landlords and Tenants</li><li>Advise Tenants on Energy and Water Use Performance Criteria, Fit-out Design and Equipment to Support Environmental Objectives</li><li>Establish &#39;Carbon Footprint&#39; for Organizations and Advise on Mitigation Strategies</li></ul>'},
{content: '<span class="titleSpan">GLOBAL CORPORATE SERVICES</span><p>SavillsCresa provide a full corporate property consultancy service to large commercial occupiers on a global basis. Our team only act for occupiers and always work in our client&#39;s interest to add value to their operation and portfolio.</p>'},
];