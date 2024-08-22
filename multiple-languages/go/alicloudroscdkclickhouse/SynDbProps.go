package alicloudroscdkclickhouse


// Properties for defining a `SynDb`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
type SynDbProps struct {
	// Property ckPassword: The password of the database account.
	CkPassword interface{} `field:"required" json:"ckPassword" yaml:"ckPassword"`
	// Property ckUserName: The account of the clickhouse database.
	CkUserName interface{} `field:"required" json:"ckUserName" yaml:"ckUserName"`
	// Property dbClusterId: Clickhouse cluster id.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property rdsId: The instance id of RDS.
	RdsId interface{} `field:"required" json:"rdsId" yaml:"rdsId"`
	// Property rdsPassword: The password of the RDS database account.
	RdsPassword interface{} `field:"required" json:"rdsPassword" yaml:"rdsPassword"`
	// Property rdsUserName: The account of the RDS database.
	RdsUserName interface{} `field:"required" json:"rdsUserName" yaml:"rdsUserName"`
	// Property skipUnsupported: Skip unsupported table or not.
	SkipUnsupported interface{} `field:"required" json:"skipUnsupported" yaml:"skipUnsupported"`
	// Property synDbTables: The tables to syn.
	SynDbTables interface{} `field:"required" json:"synDbTables" yaml:"synDbTables"`
	// Property clickhousePort: The port of clickhouse id.
	ClickhousePort interface{} `field:"optional" json:"clickhousePort" yaml:"clickhousePort"`
	// Property limitUpper: The maximum number of rows to sync per second.
	LimitUpper interface{} `field:"optional" json:"limitUpper" yaml:"limitUpper"`
	// Property rdsPort: The port of rds.
	RdsPort interface{} `field:"optional" json:"rdsPort" yaml:"rdsPort"`
	// Property rdsVpcId: The vpc of rds.
	RdsVpcId interface{} `field:"optional" json:"rdsVpcId" yaml:"rdsVpcId"`
	// Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
	RdsVpcUrl interface{} `field:"optional" json:"rdsVpcUrl" yaml:"rdsVpcUrl"`
}

