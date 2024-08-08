package datasource


// Properties for defining a `Apis`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-apis
type ApisProps struct {
	// Property apiId: ID of the specified API.
	ApiId interface{} `field:"optional" json:"apiId" yaml:"apiId"`
	// Property apiName: API name (fuzzy matching).
	ApiName interface{} `field:"optional" json:"apiName" yaml:"apiName"`
	// Property catalogId: Catalog number.
	CatalogId interface{} `field:"optional" json:"catalogId" yaml:"catalogId"`
	// Property enableTagAuth: Enable label validation.
	EnableTagAuth interface{} `field:"optional" json:"enableTagAuth" yaml:"enableTagAuth"`
	// Property groupId: ID of the specified group.
	GroupId interface{} `field:"optional" json:"groupId" yaml:"groupId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property visibility: Whether the API is public.
	Visibility interface{} `field:"optional" json:"visibility" yaml:"visibility"`
}

