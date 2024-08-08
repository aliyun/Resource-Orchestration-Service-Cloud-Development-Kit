package datasource


// Properties for defining a `RosApplications`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
type RosApplicationsProps struct {
	AppName interface{} `field:"optional" json:"appName" yaml:"appName"`
	FieldType interface{} `field:"optional" json:"fieldType" yaml:"fieldType"`
	FieldValue interface{} `field:"optional" json:"fieldValue" yaml:"fieldValue"`
	NamespaceId interface{} `field:"optional" json:"namespaceId" yaml:"namespaceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

