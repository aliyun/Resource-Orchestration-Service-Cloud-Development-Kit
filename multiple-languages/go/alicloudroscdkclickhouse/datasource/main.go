package datasource

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-clickhouse.datasource.DBCluster",
		reflect.TypeOf((*DBCluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAliUid", GoGetter: "AttrAliUid"},
			_jsii_.MemberProperty{JsiiProperty: "attrBid", GoGetter: "AttrBid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCategory", GoGetter: "AttrCategory"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterId", GoGetter: "AttrDbClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIpArrayName", GoGetter: "AttrDbClusterIpArrayName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterName", GoGetter: "AttrDbClusterName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterNetworkType", GoGetter: "AttrDbClusterNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterType", GoGetter: "AttrDbClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeClass", GoGetter: "AttrDbNodeClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeCount", GoGetter: "AttrDbNodeCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeStorage", GoGetter: "AttrDbNodeStorage"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionKey", GoGetter: "AttrEncryptionKey"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionType", GoGetter: "AttrEncryptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngine", GoGetter: "AttrEngine"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsExpired", GoGetter: "AttrIsExpired"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockMode", GoGetter: "AttrLockMode"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockReason", GoGetter: "AttrLockReason"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaintainTime", GoGetter: "AttrMaintainTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicIpAddr", GoGetter: "AttrPublicIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicPort", GoGetter: "AttrPublicPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScaleOutStatus", GoGetter: "AttrScaleOutStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageType", GoGetter: "AttrStorageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportBackup", GoGetter: "AttrSupportBackup"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportHttpsPort", GoGetter: "AttrSupportHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportMysqlPort", GoGetter: "AttrSupportMysqlPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportOss", GoGetter: "AttrSupportOss"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcCloudInstanceId", GoGetter: "AttrVpcCloudInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcIpAddr", GoGetter: "AttrVpcIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDependency", GoMethod: "FetchDependency"},
			_jsii_.MemberMethod{JsiiMethod: "fetchResourceDesc", GoMethod: "FetchResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "resource", GoGetter: "Resource"},
			_jsii_.MemberProperty{JsiiProperty: "scope", GoGetter: "Scope"},
			_jsii_.MemberMethod{JsiiMethod: "setMetadata", GoMethod: "SetMetadata"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_DBCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDBCluster)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps",
		reflect.TypeOf((*DBClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-clickhouse.datasource.DBClusters",
		reflect.TypeOf((*DBClusters)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIds", GoGetter: "AttrDbClusterIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusters", GoGetter: "AttrDbClusters"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDependency", GoMethod: "FetchDependency"},
			_jsii_.MemberMethod{JsiiMethod: "fetchResourceDesc", GoMethod: "FetchResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "id", GoGetter: "Id"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "resource", GoGetter: "Resource"},
			_jsii_.MemberProperty{JsiiProperty: "scope", GoGetter: "Scope"},
			_jsii_.MemberMethod{JsiiMethod: "setMetadata", GoMethod: "SetMetadata"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
		},
		func() interface{} {
			j := jsiiProxy_DBClusters{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDBClusters)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps",
		reflect.TypeOf((*DBClustersProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-clickhouse.datasource.IDBCluster",
		reflect.TypeOf((*IDBCluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAliUid", GoGetter: "AttrAliUid"},
			_jsii_.MemberProperty{JsiiProperty: "attrBid", GoGetter: "AttrBid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCategory", GoGetter: "AttrCategory"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterId", GoGetter: "AttrDbClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIpArrayName", GoGetter: "AttrDbClusterIpArrayName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterName", GoGetter: "AttrDbClusterName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterNetworkType", GoGetter: "AttrDbClusterNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterType", GoGetter: "AttrDbClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeClass", GoGetter: "AttrDbNodeClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeCount", GoGetter: "AttrDbNodeCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeStorage", GoGetter: "AttrDbNodeStorage"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionKey", GoGetter: "AttrEncryptionKey"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionType", GoGetter: "AttrEncryptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngine", GoGetter: "AttrEngine"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsExpired", GoGetter: "AttrIsExpired"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockMode", GoGetter: "AttrLockMode"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockReason", GoGetter: "AttrLockReason"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaintainTime", GoGetter: "AttrMaintainTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicIpAddr", GoGetter: "AttrPublicIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicPort", GoGetter: "AttrPublicPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScaleOutStatus", GoGetter: "AttrScaleOutStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageType", GoGetter: "AttrStorageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportBackup", GoGetter: "AttrSupportBackup"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportHttpsPort", GoGetter: "AttrSupportHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportMysqlPort", GoGetter: "AttrSupportMysqlPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportOss", GoGetter: "AttrSupportOss"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcCloudInstanceId", GoGetter: "AttrVpcCloudInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcIpAddr", GoGetter: "AttrVpcIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDBCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-clickhouse.datasource.IDBClusters",
		reflect.TypeOf((*IDBClusters)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIds", GoGetter: "AttrDbClusterIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusters", GoGetter: "AttrDbClusters"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDBClusters{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBCluster",
		reflect.TypeOf((*RosDBCluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDeletionOverride", GoMethod: "AddDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addDependsOn", GoMethod: "AddDependsOn"},
			_jsii_.MemberMethod{JsiiMethod: "addDesc", GoMethod: "AddDesc"},
			_jsii_.MemberMethod{JsiiMethod: "addMetaData", GoMethod: "AddMetaData"},
			_jsii_.MemberMethod{JsiiMethod: "addOverride", GoMethod: "AddOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyDeletionOverride", GoMethod: "AddPropertyDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyOverride", GoMethod: "AddPropertyOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAliUid", GoGetter: "AttrAliUid"},
			_jsii_.MemberProperty{JsiiProperty: "attrBid", GoGetter: "AttrBid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCategory", GoGetter: "AttrCategory"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterId", GoGetter: "AttrDbClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIpArrayName", GoGetter: "AttrDbClusterIpArrayName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterName", GoGetter: "AttrDbClusterName"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterNetworkType", GoGetter: "AttrDbClusterNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterType", GoGetter: "AttrDbClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeClass", GoGetter: "AttrDbNodeClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeCount", GoGetter: "AttrDbNodeCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbNodeStorage", GoGetter: "AttrDbNodeStorage"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionKey", GoGetter: "AttrEncryptionKey"},
			_jsii_.MemberProperty{JsiiProperty: "attrEncryptionType", GoGetter: "AttrEncryptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngine", GoGetter: "AttrEngine"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsExpired", GoGetter: "AttrIsExpired"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockMode", GoGetter: "AttrLockMode"},
			_jsii_.MemberProperty{JsiiProperty: "attrLockReason", GoGetter: "AttrLockReason"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaintainTime", GoGetter: "AttrMaintainTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicIpAddr", GoGetter: "AttrPublicIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicPort", GoGetter: "AttrPublicPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScaleOutStatus", GoGetter: "AttrScaleOutStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageType", GoGetter: "AttrStorageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportBackup", GoGetter: "AttrSupportBackup"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportHttpsPort", GoGetter: "AttrSupportHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportMysqlPort", GoGetter: "AttrSupportMysqlPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrSupportOss", GoGetter: "AttrSupportOss"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcCloudInstanceId", GoGetter: "AttrVpcCloudInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcIpAddr", GoGetter: "AttrVpcIpAddr"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "dbClusterId", GoGetter: "DbClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "refreshOptions", GoGetter: "RefreshOptions"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosDBCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBClusterProps",
		reflect.TypeOf((*RosDBClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBClusters",
		reflect.TypeOf((*RosDBClusters)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDeletionOverride", GoMethod: "AddDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addDependsOn", GoMethod: "AddDependsOn"},
			_jsii_.MemberMethod{JsiiMethod: "addDesc", GoMethod: "AddDesc"},
			_jsii_.MemberMethod{JsiiMethod: "addMetaData", GoMethod: "AddMetaData"},
			_jsii_.MemberMethod{JsiiMethod: "addOverride", GoMethod: "AddOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyDeletionOverride", GoMethod: "AddPropertyDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyOverride", GoMethod: "AddPropertyOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusterIds", GoGetter: "AttrDbClusterIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbClusters", GoGetter: "AttrDbClusters"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "dbClusterId", GoGetter: "DbClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "dbClusterName", GoGetter: "DbClusterName"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "refreshOptions", GoGetter: "RefreshOptions"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosDBClusters{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps",
		reflect.TypeOf((*RosDBClustersProps)(nil)).Elem(),
	)
}
