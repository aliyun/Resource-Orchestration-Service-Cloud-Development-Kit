package alicloudroscdkots


type RosSearchIndex_SortersProperty struct {
	FieldSort interface{} `field:"optional" json:"fieldSort" yaml:"fieldSort"`
	GeoDistanceSort interface{} `field:"optional" json:"geoDistanceSort" yaml:"geoDistanceSort"`
	PrimaryKeySort interface{} `field:"optional" json:"primaryKeySort" yaml:"primaryKeySort"`
	ScoreSort interface{} `field:"optional" json:"scoreSort" yaml:"scoreSort"`
}

