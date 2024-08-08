package alicloudroscdkcas


// Properties for defining a `SslCertificate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
type SslCertificateProps struct {
	// Property certBrand: Certificate brand.
	//
	// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
	// **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
	CertBrand interface{} `field:"optional" json:"certBrand" yaml:"certBrand"`
	// Property certType: Certificate type.
	//
	// Valid values: DV, OV, EV.
	// **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
	CertType interface{} `field:"optional" json:"certType" yaml:"certType"`
	// Property companyName: The name of the certificate application company.
	//
	// **Note**: This parameter is only applicable when applying for OV certificates.
	// When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
	CompanyName interface{} `field:"optional" json:"companyName" yaml:"companyName"`
	// Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
	//
	// The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
	// A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
	Csr interface{} `field:"optional" json:"csr" yaml:"csr"`
	// Property domains: The domain to bind the certificate to.
	//
	// The specific requirements are as follows:
	// - Supports single or wildcard domains (e.g., *.aliyundoc.com).
	// - Multiple domains are supported. You can set up to 5 domains.
	// - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
	// **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
	Domains interface{} `field:"optional" json:"domains" yaml:"domains"`
	// Property domainType: Domain type.
	//
	// Valid values: one, all, multiple.
	// **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
	DomainType interface{} `field:"optional" json:"domainType" yaml:"domainType"`
	// Property email: The applicant's email.
	Email interface{} `field:"optional" json:"email" yaml:"email"`
	// Property phone: The applicant's mobile phone number.
	//
	// A CA official may contact you at this number to verify your certificate request.
	Phone interface{} `field:"optional" json:"phone" yaml:"phone"`
	// Property productCode: Specification of the certificate to apply for.
	//
	// Value:
	// - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
	// - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
	// - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
	// - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
	// - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
	// - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
	// - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
	// - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
	// - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
	// - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
	// - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
	// - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
	// - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
	// - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
	// - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
	// **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
	ProductCode interface{} `field:"optional" json:"productCode" yaml:"productCode"`
	// Property username: The applicant's name.
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	// Property validateType: How domain ownership is verified.
	//
	// Valid values:
	// - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
	// - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
	ValidateType interface{} `field:"optional" json:"validateType" yaml:"validateType"`
}

