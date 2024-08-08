package alicloudroscdkcms


type RosSlsGroup_SlsGroupConfigProperty struct {
	SlsLogstore interface{} `field:"required" json:"slsLogstore" yaml:"slsLogstore"`
	SlsProject interface{} `field:"required" json:"slsProject" yaml:"slsProject"`
	SlsRegion interface{} `field:"required" json:"slsRegion" yaml:"slsRegion"`
	SlsUserId interface{} `field:"optional" json:"slsUserId" yaml:"slsUserId"`
}

