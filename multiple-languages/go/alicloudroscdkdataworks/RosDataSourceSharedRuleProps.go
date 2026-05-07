package alicloudroscdkdataworks


// Properties for defining a `RosDataSourceSharedRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-datasourcesharedrule
type RosDataSourceSharedRuleProps struct {
	DataSourceId interface{} `field:"required" json:"dataSourceId" yaml:"dataSourceId"`
	EnvType interface{} `field:"required" json:"envType" yaml:"envType"`
	TargetProjectId interface{} `field:"required" json:"targetProjectId" yaml:"targetProjectId"`
	SharedUser interface{} `field:"optional" json:"sharedUser" yaml:"sharedUser"`
}

