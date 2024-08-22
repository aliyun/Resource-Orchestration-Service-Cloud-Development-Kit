package alicloudroscdkcas


// Properties for defining a `Order`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
type OrderProps struct {
	// Property certBrand: Certificate brand.
	//
	// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
	CertBrand interface{} `field:"required" json:"certBrand" yaml:"certBrand"`
	// Property certType: Certificate type.
	//
	// Valid values: DV, OV, EV.
	CertType interface{} `field:"required" json:"certType" yaml:"certType"`
	// Property domainCnt: Number of domains to be included in the certificate.
	//
	// Valid values: 1-500.
	DomainCnt interface{} `field:"optional" json:"domainCnt" yaml:"domainCnt"`
	// Property domainType: Domain type.
	//
	// Valid values: one, all, multiple.
	DomainType interface{} `field:"optional" json:"domainType" yaml:"domainType"`
	// Property period: Service time of the certificate, in year.
	//
	// Valid values: 1, 2, 3.
	// Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property service: Whether enable other service.
	//
	// Valid values:
	// - NoNeed: Do not apply for any services.
	// - ExpeditedProduct: Request assistance services.
	// - DeployProduct: Deploy services.
	// - SM2DeployProduct: Deploy services with SM2 encryption.
	// - VipProduct: Request assistance and deployment services.
	// **Note:** This parameter is not supported by international stations.
	Service interface{} `field:"optional" json:"service" yaml:"service"`
}

