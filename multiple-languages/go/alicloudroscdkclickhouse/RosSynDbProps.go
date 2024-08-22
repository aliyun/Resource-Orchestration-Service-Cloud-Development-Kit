package alicloudroscdkclickhouse


// Properties for defining a `RosSynDb`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
type RosSynDbProps struct {
	CkPassword interface{} `field:"required" json:"ckPassword" yaml:"ckPassword"`
	CkUserName interface{} `field:"required" json:"ckUserName" yaml:"ckUserName"`
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	RdsId interface{} `field:"required" json:"rdsId" yaml:"rdsId"`
	RdsPassword interface{} `field:"required" json:"rdsPassword" yaml:"rdsPassword"`
	RdsUserName interface{} `field:"required" json:"rdsUserName" yaml:"rdsUserName"`
	SkipUnsupported interface{} `field:"required" json:"skipUnsupported" yaml:"skipUnsupported"`
	SynDbTables interface{} `field:"required" json:"synDbTables" yaml:"synDbTables"`
	ClickhousePort interface{} `field:"optional" json:"clickhousePort" yaml:"clickhousePort"`
	LimitUpper interface{} `field:"optional" json:"limitUpper" yaml:"limitUpper"`
	RdsPort interface{} `field:"optional" json:"rdsPort" yaml:"rdsPort"`
	RdsVpcId interface{} `field:"optional" json:"rdsVpcId" yaml:"rdsVpcId"`
	RdsVpcUrl interface{} `field:"optional" json:"rdsVpcUrl" yaml:"rdsVpcUrl"`
}

