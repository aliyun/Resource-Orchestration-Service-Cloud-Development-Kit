package alicloudroscdkga


// Properties for defining a `RosLogStoreToEndpointGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
type RosLogStoreToEndpointGroupAttachmentProps struct {
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	EndpointGroupIds interface{} `field:"required" json:"endpointGroupIds" yaml:"endpointGroupIds"`
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	SlsLogStoreName interface{} `field:"required" json:"slsLogStoreName" yaml:"slsLogStoreName"`
	SlsProjectName interface{} `field:"required" json:"slsProjectName" yaml:"slsProjectName"`
	SlsRegionId interface{} `field:"required" json:"slsRegionId" yaml:"slsRegionId"`
}

