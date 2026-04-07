package alicloudroscdkclickhouse


type RosEnterpriseDBClusterAccount_DmlAuthSettingProperty struct {
	DdlAuthority interface{} `field:"required" json:"ddlAuthority" yaml:"ddlAuthority"`
	DmlAuthority interface{} `field:"required" json:"dmlAuthority" yaml:"dmlAuthority"`
	AllowDatabases interface{} `field:"optional" json:"allowDatabases" yaml:"allowDatabases"`
	AllowDictionaries interface{} `field:"optional" json:"allowDictionaries" yaml:"allowDictionaries"`
}

