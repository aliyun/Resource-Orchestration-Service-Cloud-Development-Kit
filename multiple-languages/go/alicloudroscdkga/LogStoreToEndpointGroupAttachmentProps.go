package alicloudroscdkga


// Properties for defining a `LogStoreToEndpointGroupAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
type LogStoreToEndpointGroupAttachmentProps struct {
	// Property acceleratorId: Global Acceleration Instance ID.
	AcceleratorId interface{} `field:"required" json:"acceleratorId" yaml:"acceleratorId"`
	// Property endpointGroupIds: Endpoint Group ID List.
	EndpointGroupIds interface{} `field:"required" json:"endpointGroupIds" yaml:"endpointGroupIds"`
	// Property listenerId: Listener ID.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
	// Property slsLogStoreName: SLS log library name.
	SlsLogStoreName interface{} `field:"required" json:"slsLogStoreName" yaml:"slsLogStoreName"`
	// Property slsProjectName: SLS project name.
	SlsProjectName interface{} `field:"required" json:"slsProjectName" yaml:"slsProjectName"`
	// Property slsRegionId: SLS Region ID.
	SlsRegionId interface{} `field:"required" json:"slsRegionId" yaml:"slsRegionId"`
}

