package alicloudroscdkfc


// Properties for defining a `RosFunctionInvoker`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
type RosFunctionInvokerProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	Async interface{} `field:"optional" json:"async" yaml:"async"`
	CheckError interface{} `field:"optional" json:"checkError" yaml:"checkError"`
	Event interface{} `field:"optional" json:"event" yaml:"event"`
	ExecuteVersion interface{} `field:"optional" json:"executeVersion" yaml:"executeVersion"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	ServiceRegionId interface{} `field:"optional" json:"serviceRegionId" yaml:"serviceRegionId"`
}

