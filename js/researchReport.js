var researchReportArray = new Array();

//Main Sections
researchReportArray = [
/*-----------------------APAC-----------------------------------------*/
{id:"0", thumb:"../../../images/reports/prime-benchmark-01-2014-1.jpg", reportTitle:"Asia Pacific Prime Benchmark", reportIssue:"1 January 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/prime benchmark 01 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"1", thumb:"../../../images/reports/12 Cities-H1-2014.jpg", reportTitle:"12 Cities", reportIssue:"H1 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/12 Cities H1 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"2", thumb:"../../../images/reports/around-the-world-in-dollars-and-cents-en.jpg", reportTitle:"Around The World In Dollars And Cents", reportIssue:"2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/around-the-world-in-dollars-and-cents-en.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"3", thumb:"../../../images/reports/Beijing-April-2014.jpg", reportTitle:"Beijing Office", reportIssue:"April 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Beijing April 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"4", thumb:"../../../images/reports/Office-Hanoi-Vietmam.jpg", reportTitle:"Hanoi Office", reportIssue:"Q4 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Office Hanoi Vietmam.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"5", thumb:"../../../images/reports/Hong-Kong-1.jpg", reportTitle:"Hong Kong Office", reportIssue:"February 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Hong Kong.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"6", thumb:"../../../images/reports/Malaysia-Kuala-Lumpur-Office-2H-2013.jpg", reportTitle:"Kuala Lumpur Office", reportIssue:"2H 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Malaysia, Kuala Lumpur Office - 2H 2013.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"7", thumb:"../../../images/reports/KMC---Metro-Manila-Property-Outlook-2014-1.jpg", reportTitle:"Metro Manila Property Outlook", reportIssue:"2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/KMC - Metro Manila Property Outlook 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"8", thumb:"../../../images/reports/Manila-1H-2014.jpg", reportTitle:"Manila Office", reportIssue:"1H 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Manila-1H-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"9", thumb:"../../../images/reports/melbourne-cbd-office-q1-2014.jpg", reportTitle:"Melbourne CBD Office", reportIssue:"April 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/melbourne-cbd-office-q1-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"10", thumb:"../../../images/reports/korea-1.jpg", reportTitle:"Seoul office", reportIssue:"Q4 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/korea.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"11", thumb:"../../../images/reports/2013H2-Retail-Korea-Seoul.jpg", reportTitle:"Seoul Retail", reportIssue:"2H 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/2013H2 Retail - Korea, Seoul.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"12", thumb:"../../../images/reports/Shanghai-office-1.jpg", reportTitle:"Shanghai Office", reportIssue:"February 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Shanghai office.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"13", thumb:"../../../images/reports/sydney-cbd-office-q1-2014.jpg", reportTitle:"Sydney CBD Office", reportIssue:"April 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/sydney-cbd-office-q1-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"14", thumb:"../../../images/reports/Taiwan March-2014.jpg", reportTitle:"Taiwan Office", reportIssue:"March 2014", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Taiwan March-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"15", thumb:"../../../images/reports/Japan-1.jpg", reportTitle:"Tokyo Office", reportIssue:"Q4 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Japan.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"16", thumb:"../../../images/reports/Myanmar-2H-2013.jpg", reportTitle:"Yangon, Myanmar", reportIssue:"2H 2013", pdfLink:"http://pdf.savills-it.com/research-reports/apac/Myanmar.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

/*-----------------------Europe-----------------------------------------*/

{id:"17", thumb:"../../../images/reports/european-office-markets--march-2014.jpg", reportTitle:"European Offices", reportIssue:"March 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/european-office-markets---march-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"18", thumb:"../../../images/reports/European-occupier-trends-March-2014.jpg", reportTitle:"European Occupier Trends", reportIssue:"March 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/European occupier trends - March 2014[1].pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"19", thumb:"../../../images/reports/12 Cities-H1-2014.jpg", reportTitle:"12 Cities", reportIssue:"H1 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/12 Cities H1 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"20", thumb:"../../../images/reports/around-the-world-in-dollars-and-cents-en.jpg", reportTitle:"Around The World In Dollars And Cents", reportIssue:"2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/around-the-world-in-dollars-and-cents-en.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"21", thumb:"../../../images/reports/Central-London-March-2014.jpg", reportTitle:"Central London office", reportIssue:"February 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/Central London March 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"22", thumb:"../../../images/reports/London-1.jpg", reportTitle:"UK Commercial West End Office", reportIssue:"December 2013", pdfLink:"http://pdf.savills-it.com/research-reports/europe/London.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"23", thumb:"../../../images/reports/Paris-office-market-Q1-2014.jpg", reportTitle:"Ile-de-France Offices", reportIssue:"Q4 2013", pdfLink:"http://pdf.savills-it.com/research-reports/europe/Paris office market Q1 2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"24", thumb:"../../../images/reports/Germany-H2-2013-1.jpg", reportTitle:"Germany offices", reportIssue:"2013", pdfLink:"http://pdf.savills-it.com/research-reports/europe/Germany H2-2013.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"25", thumb:"../../../images/reports/Madrid-1.jpg", reportTitle:"Madrid offices", reportIssue:"Q4 2013", pdfLink:"http://pdf.savills-it.com/research-reports/europe/Madrid.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"26", thumb:"../../../images/reports/netherlands march-2014.jpg", reportTitle:"Netherlands Market in Minutes", reportIssue:"March 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/netherlands march-2014.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"},

{id:"27", thumb:"../../../images/reports/Warsaw-1.jpg", reportTitle:"Warsaw office", reportIssue:"February 2014", pdfLink:"http://pdf.savills-it.com/research-reports/europe/Warsaw.pdf", previewLink:"", contactPersonImg:"../../../images/reports/img_simon_smith.jpg", contactPerson:"Simon Smith", cpTitle:"Senior Director", cpDepartment:"Research & Consultancy", cpTel:"+852 2842 4573", cpEmail:"ssmith@savills.com.hk"}
];