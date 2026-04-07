package alicloudroscdkgpdb


// Properties for defining a `RosStreamingDataService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-streamingdataservice
type RosStreamingDataServiceProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	ServiceSpec interface{} `field:"required" json:"serviceSpec" yaml:"serviceSpec"`
	ServiceDescription interface{} `field:"optional" json:"serviceDescription" yaml:"serviceDescription"`
}

