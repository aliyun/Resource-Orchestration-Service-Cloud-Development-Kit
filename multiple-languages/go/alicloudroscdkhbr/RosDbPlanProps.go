package alicloudroscdkhbr


// Properties for defining a `RosDbPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbplan
type RosDbPlanProps struct {
	DbPlanName interface{} `field:"required" json:"dbPlanName" yaml:"dbPlanName"`
	HostUuid interface{} `field:"required" json:"hostUuid" yaml:"hostUuid"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	VaultId interface{} `field:"required" json:"vaultId" yaml:"vaultId"`
	ContinuousPlan interface{} `field:"optional" json:"continuousPlan" yaml:"continuousPlan"`
	CumulativePlan interface{} `field:"optional" json:"cumulativePlan" yaml:"cumulativePlan"`
	FullPlan interface{} `field:"optional" json:"fullPlan" yaml:"fullPlan"`
	IncPlan interface{} `field:"optional" json:"incPlan" yaml:"incPlan"`
	InstanceUuid interface{} `field:"optional" json:"instanceUuid" yaml:"instanceUuid"`
	LogPlan interface{} `field:"optional" json:"logPlan" yaml:"logPlan"`
	MaxRateLimit interface{} `field:"optional" json:"maxRateLimit" yaml:"maxRateLimit"`
	MaxRetrySeconds interface{} `field:"optional" json:"maxRetrySeconds" yaml:"maxRetrySeconds"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	Source interface{} `field:"optional" json:"source" yaml:"source"`
}

