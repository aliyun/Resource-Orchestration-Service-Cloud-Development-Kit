package alicloudroscdkcloudsiem


// Properties for defining a `UserSourceLogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
type UserSourceLogConfigProps struct {
	// Property sourceLogCode: The source log code.
	//
	// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
	SourceLogCode interface{} `field:"required" json:"sourceLogCode" yaml:"sourceLogCode"`
	// Property sourceLogInfo: The info of log to be added.
	SourceLogInfo interface{} `field:"required" json:"sourceLogInfo" yaml:"sourceLogInfo"`
	// Property sourceProdCode: The product code.
	//
	// For all available product codes, query the Cloud Siem ListAllProds API.
	SourceProdCode interface{} `field:"required" json:"sourceProdCode" yaml:"sourceProdCode"`
	// Property subUserId: The Id of the account to be submitted.
	SubUserId interface{} `field:"required" json:"subUserId" yaml:"subUserId"`
}

