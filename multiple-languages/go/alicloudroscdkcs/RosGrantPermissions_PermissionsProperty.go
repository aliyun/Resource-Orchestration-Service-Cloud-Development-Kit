package alicloudroscdkcs


type RosGrantPermissions_PermissionsProperty struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	RoleName interface{} `field:"required" json:"roleName" yaml:"roleName"`
	RoleType interface{} `field:"required" json:"roleType" yaml:"roleType"`
	IsCustom interface{} `field:"optional" json:"isCustom" yaml:"isCustom"`
	IsRamRole interface{} `field:"optional" json:"isRamRole" yaml:"isRamRole"`
	Namespace interface{} `field:"optional" json:"namespace" yaml:"namespace"`
}

