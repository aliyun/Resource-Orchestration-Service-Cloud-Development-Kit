package alicloudroscdkthreatdetection


// Properties for defining a `BaselineStrategy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-baselinestrategy
type BaselineStrategyProps struct {
	// Property baselineStrategyName: The new name of the baseline check policy.
	BaselineStrategyName interface{} `field:"required" json:"baselineStrategyName" yaml:"baselineStrategyName"`
	// Property customType: The type of the baseline check policy.
	//
	// Valid values:
	// *   **custom**: a custom baseline check policy
	// *   **common**: a standard baseline check policy.
	CustomType interface{} `field:"required" json:"customType" yaml:"customType"`
	// Property cycleDays: The new interval of the baseline check.
	//
	// Valid values:
	// *   **1**: every 2 days
	// *   **3**: every 4 days
	// *   **7**: every 8 days
	// *   **30**: every 31 days.
	CycleDays interface{} `field:"required" json:"cycleDays" yaml:"cycleDays"`
	// Property endTime: The time when the baseline check based on the baseline check policy ends.
	//
	// Specify the time in the hh:mm:ss format.
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	// Property riskSubTypeName: The subtype of the baselines.
	RiskSubTypeName interface{} `field:"required" json:"riskSubTypeName" yaml:"riskSubTypeName"`
	// Property startTime: The time when the baseline check based on the baseline check policy starts.
	//
	// Specify the time in the hh:mm:ss format.
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	// Property targetType: The method that is used to apply the baseline check policy.
	//
	// Valid values:
	// *   **groupId**: asset groups
	// *   **uuid**: assets.
	TargetType interface{} `field:"required" json:"targetType" yaml:"targetType"`
}

