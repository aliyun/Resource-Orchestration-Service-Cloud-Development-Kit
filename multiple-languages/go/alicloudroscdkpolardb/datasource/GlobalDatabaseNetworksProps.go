package datasource


// Properties for defining a `GlobalDatabaseNetworks`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-globaldatabasenetworks
type GlobalDatabaseNetworksProps struct {
	// Property dbClusterId: The ID of the cluster.
	DbClusterId interface{} `field:"optional" json:"dbClusterId" yaml:"dbClusterId"`
	// Property gdnId: The ID of the GDN.
	GdnId interface{} `field:"optional" json:"gdnId" yaml:"gdnId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

