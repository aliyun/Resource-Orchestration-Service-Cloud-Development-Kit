package alicloudroscdkdts


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
type RosInstanceProps struct {
	InstanceClass interface{} `field:"required" json:"instanceClass" yaml:"instanceClass"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	AutoStart interface{} `field:"optional" json:"autoStart" yaml:"autoStart"`
	ComputeUnit interface{} `field:"optional" json:"computeUnit" yaml:"computeUnit"`
	DatabaseCount interface{} `field:"optional" json:"databaseCount" yaml:"databaseCount"`
	DestinationEndpointEngineName interface{} `field:"optional" json:"destinationEndpointEngineName" yaml:"destinationEndpointEngineName"`
	DestinationRegion interface{} `field:"optional" json:"destinationRegion" yaml:"destinationRegion"`
	Du interface{} `field:"optional" json:"du" yaml:"du"`
	FeeType interface{} `field:"optional" json:"feeType" yaml:"feeType"`
	JobId interface{} `field:"optional" json:"jobId" yaml:"jobId"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SourceEndpointEngineName interface{} `field:"optional" json:"sourceEndpointEngineName" yaml:"sourceEndpointEngineName"`
	SourceRegion interface{} `field:"optional" json:"sourceRegion" yaml:"sourceRegion"`
	SyncArchitecture interface{} `field:"optional" json:"syncArchitecture" yaml:"syncArchitecture"`
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

