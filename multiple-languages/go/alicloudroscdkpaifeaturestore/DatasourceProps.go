package alicloudroscdkpaifeaturestore


// Properties for defining a `Datasource`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
type DatasourceProps struct {
	// Property datasourceName: The datasource name.
	//
	// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
	DatasourceName interface{} `field:"required" json:"datasourceName" yaml:"datasourceName"`
	// Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property type: Data source type.
	//
	// The value is as follows:
	// *  Hologres
	// *  GraphCompute
	// *  FeatureDB
	// *  MaxCompute.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property uri: The resource address of the datasource.
	//
	// The maximum length cannot exceed 64.
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	// Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property config: Resource configuration information.
	//
	// The string format is json.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
}

