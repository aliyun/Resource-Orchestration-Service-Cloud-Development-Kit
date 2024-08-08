package alicloudroscdkcore


type RosMappingProps struct {
	// Mapping of key to a set of corresponding set of named values.
	//
	// The key identifies a map of name-value pairs and must be unique within the mapping.
	//
	// For example, if you want to set values based on a region, you can create a mapping
	// that uses the region name as a key and contains the values you want to specify for
	// each specific region.
	Mapping *map[string]*map[string]interface{} `field:"optional" json:"mapping" yaml:"mapping"`
}

