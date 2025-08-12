package alicloudroscdkcloudsiem


// Properties for defining a `RosImportLogTasksSubmission`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-importlogtaskssubmission
type RosImportLogTasksSubmissionProps struct {
	Accounts interface{} `field:"required" json:"accounts" yaml:"accounts"`
	CloudCode interface{} `field:"required" json:"cloudCode" yaml:"cloudCode"`
	LogCodes interface{} `field:"required" json:"logCodes" yaml:"logCodes"`
	ProdCode interface{} `field:"required" json:"prodCode" yaml:"prodCode"`
}

