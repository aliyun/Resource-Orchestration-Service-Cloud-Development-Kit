package alicloudroscdkdataworks


// Properties for defining a `DataSourceSharedRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
type DataSourceSharedRuleProps struct {
	// Property dataSourceId: The ID of the data source, that is, the unique identifier of the data source.
	DataSourceId interface{} `field:"required" json:"dataSourceId" yaml:"dataSourceId"`
	// Property envType: The environment type of the data source shared to the target project, such as Dev (Development Environment) and Prod (production environment).
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	// Property targetProjectId: The ID of the project to which the data source is shared.
	TargetProjectId interface{} `field:"required" json:"targetProjectId" yaml:"targetProjectId"`
	// Property sharedUser: The target user of the data source permission policy, which is null to share to the project.
	SharedUser interface{} `field:"optional" json:"sharedUser" yaml:"sharedUser"`
}

