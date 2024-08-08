package alicloudroscdkapigateway


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
type GroupProps struct {
	// Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
	// Property basePath: The base path of API.
	BasePath interface{} `field:"optional" json:"basePath" yaml:"basePath"`
	// Property description: Description of the Group, less than 180 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceId: API gateway instance ID.
	//
	// For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property internetEnable: Enable or disable internet subdomain.
	//
	// True for enable.
	InternetEnable interface{} `field:"optional" json:"internetEnable" yaml:"internetEnable"`
	// Property passthroughHeaders: Pass through headers setting.
	//
	// values:
	// host: pass through host headers.
	PassthroughHeaders interface{} `field:"optional" json:"passthroughHeaders" yaml:"passthroughHeaders"`
	// Property tags: Tags to attach to group.
	//
	// Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcIntranetEnable: Enable or disable VPC intranet subdomain.
	//
	// True for enable.
	VpcIntranetEnable interface{} `field:"optional" json:"vpcIntranetEnable" yaml:"vpcIntranetEnable"`
}

