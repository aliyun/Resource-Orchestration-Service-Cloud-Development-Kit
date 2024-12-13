package datasource


// Properties for defining a `StorageBundle`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudstoragegateway-storagebundle
type StorageBundleProps struct {
	// Property storageBundleId: The ID of the gateway cluster.
	StorageBundleId interface{} `field:"required" json:"storageBundleId" yaml:"storageBundleId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

