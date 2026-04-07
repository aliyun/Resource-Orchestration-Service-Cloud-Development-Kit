package alicloudroscdkgpdb


// Properties for defining a `ExternalDataService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
type ExternalDataServiceProps struct {
	// Property dbInstanceId: Instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property serviceName: Service Name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property serviceSpec: Service Specifications.
	ServiceSpec interface{} `field:"required" json:"serviceSpec" yaml:"serviceSpec"`
	// Property serviceDescription: Service Description.
	ServiceDescription interface{} `field:"optional" json:"serviceDescription" yaml:"serviceDescription"`
}

