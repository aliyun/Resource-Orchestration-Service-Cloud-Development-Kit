package alicloudroscdkgreen


// Properties for defining a `RosInspectionConfigEnable`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
type RosInspectionConfigEnableProps struct {
	ConfigType interface{} `field:"required" json:"configType" yaml:"configType"`
	ServiceCode interface{} `field:"required" json:"serviceCode" yaml:"serviceCode"`
}

