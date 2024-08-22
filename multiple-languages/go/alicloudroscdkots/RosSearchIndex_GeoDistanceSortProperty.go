package alicloudroscdkots


type RosSearchIndex_GeoDistanceSortProperty struct {
	FieldName interface{} `field:"required" json:"fieldName" yaml:"fieldName"`
	Points interface{} `field:"required" json:"points" yaml:"points"`
	SortMode interface{} `field:"optional" json:"sortMode" yaml:"sortMode"`
	SortOrder interface{} `field:"optional" json:"sortOrder" yaml:"sortOrder"`
}

