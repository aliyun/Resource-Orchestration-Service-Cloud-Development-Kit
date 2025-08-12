package alicloudroscdkots


// Properties for defining a `InstanceV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-instancev2
type InstanceV2Props struct {
	// Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property instanceName: Instance name.The naming specifications for instances are as follows: Must consist of English letters, numbers or dash lines (-). The first character must be in English letters. The end character cannot be a dash (-). Insensitive case. The length is between 3 and 16 characters.
	InstanceName interface{} `field:"required" json:"instanceName" yaml:"instanceName"`
	// Property instanceDescription: Example description.
	//
	// The length is limited to between 3-256 characters.
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	// Property networkSourceAcl: The allowed-network source list.
	//
	// All networks are allowed by default.
	NetworkSourceAcl interface{} `field:"optional" json:"networkSourceAcl" yaml:"networkSourceAcl"`
	// Property networkTypeAcl: The instance allows the network type list, which is allowed by default.
	NetworkTypeAcl interface{} `field:"optional" json:"networkTypeAcl" yaml:"networkTypeAcl"`
	// Property resourceGroupId: Resource Group ID.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The list of instance tags in the form of key\/value pairs.
	//
	// You can define a maximum of 20 tags for instance.
	Tags *[]*RosInstanceV2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

