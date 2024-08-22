package alicloudroscdkdts


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
type InstanceProps struct {
	// Property instanceClass: The instance class.
	//
	// - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
	// - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
	// **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
	InstanceClass interface{} `field:"required" json:"instanceClass" yaml:"instanceClass"`
	// Property payType: The billing method.
	//
	// Valid values:
	// - **PrePaid**: subscription
	// - **PostPaid**: pay-as-you-go.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property type: The type of the DTS instance.
	//
	// Valid values:
	// - **MIGRATION*: data migration instance
	// - **SYNC**: data synchronization instance
	// - **SUBSCRIBE**: change tracking instance.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.
	//
	// Valid values:
	// - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
	// - **true**: automatically renews the DTS instance when it expires.
	AutoPay interface{} `field:"optional" json:"autoPay" yaml:"autoPay"`
	// Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.
	//
	// Valid values:
	// - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
	// - **true**: automatically starts the task after the DTS instance is purchased.
	AutoStart interface{} `field:"optional" json:"autoStart" yaml:"autoStart"`
	// Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.
	//
	// The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
	ComputeUnit interface{} `field:"optional" json:"computeUnit" yaml:"computeUnit"`
	// Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.
	//
	// Default value: **1**.
	// **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
	DatabaseCount interface{} `field:"optional" json:"databaseCount" yaml:"databaseCount"`
	// Property destinationEndpointEngineName: The database engine of the destination instance.
	//
	// Valid values:
	// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
	// - **PolarDB**: PolarDB for MySQL cluster
	// - **polardb_o**: PolarDB for Oracle cluster
	// - **polardb_pg**: PolarDB for PostgreSQL cluster
	// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
	// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
	// - **PostgreSQL**: self-managed PostgreSQL database
	// - **odps**: MaxCompute project
	// - **oracle**: self-managed Oracle database
	// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
	// - **tidb**: TiDB database
	// - **ADS**: AnalyticDB for MySQL V2.0 cluster
	// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
	// - **Greenplum**: AnalyticDB for PostgreSQL instance
	// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
	// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
	// - **DataHub**: DataHub project
	// - **DB2**: self-managed Db2 for LUW database
	// - **as400**: AS\/400
	// - **Tablestore**: Tablestore instance
	// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
	DestinationEndpointEngineName interface{} `field:"optional" json:"destinationEndpointEngineName" yaml:"destinationEndpointEngineName"`
	// Property destinationRegion: The ID of the region in which the destination instance resides.
	//
	// **Note**: You must specify one of this parameter and the **JobId** parameter.
	DestinationRegion interface{} `field:"optional" json:"destinationRegion" yaml:"destinationRegion"`
	// Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.
	//
	// Valid values: **1** to **100**.
	// **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
	Du interface{} `field:"optional" json:"du" yaml:"du"`
	// Property feeType: The billing type for a change tracking instance.
	//
	// Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.
	// - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
	// - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
	FeeType interface{} `field:"optional" json:"feeType" yaml:"feeType"`
	// Property jobId: The ID of the task.
	//
	// **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
	JobId interface{} `field:"optional" json:"jobId" yaml:"jobId"`
	// Property period: The unit of the subscription duration.
	//
	// Valid values: **Year** and **Month**.
	// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sourceEndpointEngineName: The database engine of the source instance.
	//
	// Valid values:
	// - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
	// - **PolarDB**: PolarDB for MySQL cluster
	// - **polardb_o**: PolarDB for Oracle cluster
	// - **polardb_pg**: PolarDB for PostgreSQL cluster
	// - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
	// - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
	// - **PostgreSQL**: self-managed PostgreSQL database
	// - **odps**: MaxCompute project
	// - **oracle**: self-managed Oracle database
	// - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
	// - **tidb**: TiDB database
	// - **ADS**: AnalyticDB for MySQL V2.0 cluster
	// - **ADB30**: AnalyticDB for MySQL V3.0 cluster
	// - **Greenplum**: AnalyticDB for PostgreSQL instance
	// - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
	// - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
	// - **DataHub**: DataHub project
	// - **DB2**: self-managed Db2 for LUW database
	// - **as400**: AS\/400
	// - **Tablestore**: Tablestore instance
	// **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
	SourceEndpointEngineName interface{} `field:"optional" json:"sourceEndpointEngineName" yaml:"sourceEndpointEngineName"`
	// Property sourceRegion: The ID of the region in which the source instance resides.
	//
	// **Note**: You must specify one of this parameter and the **JobId** parameter.
	SourceRegion interface{} `field:"optional" json:"sourceRegion" yaml:"sourceRegion"`
	// Property syncArchitecture: The synchronization topology.
	//
	// Valid values:
	// - **oneway**: one-way synchronization. This is the default value.
	// - **bidirectional**: two-way synchronization.
	SyncArchitecture interface{} `field:"optional" json:"syncArchitecture" yaml:"syncArchitecture"`
	// Property usedTime: The subscription duration.
	//
	// - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
	// - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
	// **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
}

