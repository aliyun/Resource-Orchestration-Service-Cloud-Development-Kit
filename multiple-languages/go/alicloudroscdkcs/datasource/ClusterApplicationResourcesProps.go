package datasource


// Properties for defining a `ClusterApplicationResources`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
type ClusterApplicationResourcesProps struct {
	// Property clusterId: The ID of the kubernetes cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property kind: The kind of kubernetes resources to query.
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	// Property apiVersion: The api version of kubernetes resource to query.
	ApiVersion interface{} `field:"optional" json:"apiVersion" yaml:"apiVersion"`
	// Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.
	//
	// Default False.
	FirstMatch interface{} `field:"optional" json:"firstMatch" yaml:"firstMatch"`
	// Property jsonPath: Json path expression to filter the output.
	JsonPath interface{} `field:"optional" json:"jsonPath" yaml:"jsonPath"`
	// Property name: The name of the kubernetes resource to query.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property namespace: The namespace of kubernetes containing the resource.
	//
	// Default value is default.
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

