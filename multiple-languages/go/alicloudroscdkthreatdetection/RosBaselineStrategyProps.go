package alicloudroscdkthreatdetection


// Properties for defining a `RosBaselineStrategy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
type RosBaselineStrategyProps struct {
	BaselineStrategyName interface{} `field:"required" json:"baselineStrategyName" yaml:"baselineStrategyName"`
	CustomType interface{} `field:"required" json:"customType" yaml:"customType"`
	CycleDays interface{} `field:"required" json:"cycleDays" yaml:"cycleDays"`
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	RiskSubTypeName interface{} `field:"required" json:"riskSubTypeName" yaml:"riskSubTypeName"`
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

