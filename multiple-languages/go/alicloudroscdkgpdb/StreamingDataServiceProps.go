package alicloudroscdkgpdb


// Properties for defining a `StreamingDataService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-streamingdataservice
type StreamingDataServiceProps struct {
	// Property dbInstanceId: The ID of the associated instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property serviceName: Service Name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property serviceSpec: Resource Specifications.
	ServiceSpec interface{} `field:"required" json:"serviceSpec" yaml:"serviceSpec"`
	// Property serviceDescription: The description of the service.
	ServiceDescription interface{} `field:"optional" json:"serviceDescription" yaml:"serviceDescription"`
}

