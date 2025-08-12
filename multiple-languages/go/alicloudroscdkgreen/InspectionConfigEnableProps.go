package alicloudroscdkgreen


// Properties for defining a `InspectionConfigEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
type InspectionConfigEnableProps struct {
	// Property configType: The type of the configuration to be enabled for inspection.
	ConfigType interface{} `field:"required" json:"configType" yaml:"configType"`
	// Property serviceCode: The code of the service to be enabled for inspection.
	ServiceCode interface{} `field:"required" json:"serviceCode" yaml:"serviceCode"`
}

