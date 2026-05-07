package alicloudroscdkpaifeaturestore


// Properties for defining a `RosDatasource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
type RosDatasourceProps struct {
	DatasourceName interface{} `field:"required" json:"datasourceName" yaml:"datasourceName"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
}

