package alicloudroscdkcloudsiem


// Properties for defining a `ImportLogTasksSubmission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
type ImportLogTasksSubmissionProps struct {
	// Property accounts: The list of accounts for log ingestion.
	//
	// The value must be a JSON array. Valid
	// values:
	// - AccountId: The ID of the account.
	// - Imported: Specifies whether to enable or disable log ingestion for the account.
	// Valid values:
	// - 0: Disable ingestion.
	// - 1: Enable ingestion.
	Accounts interface{} `field:"required" json:"accounts" yaml:"accounts"`
	// Property cloudCode: The cloud code.
	//
	// The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud
	CloudCode interface{} `field:"required" json:"cloudCode" yaml:"cloudCode"`
	// Property logCodes: The list of log codes to be submitted.
	//
	// For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code.
	LogCodes interface{} `field:"required" json:"logCodes" yaml:"logCodes"`
	// Property prodCode: The product code.
	//
	// For all available product codes, query the Cloud Siem ListAllProds API.
	ProdCode interface{} `field:"required" json:"prodCode" yaml:"prodCode"`
}

