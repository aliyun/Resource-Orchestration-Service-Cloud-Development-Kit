package datasource

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.datasource.IVault",
		reflect.TypeOf((*IVault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrBackupPlanStatistics", GoGetter: "AttrBackupPlanStatistics"},
			_jsii_.MemberProperty{JsiiProperty: "attrBytesDone", GoGetter: "AttrBytesDone"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDedup", GoGetter: "AttrDedup"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexAvailable", GoGetter: "AttrIndexAvailable"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexLevel", GoGetter: "AttrIndexLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexUpdateTime", GoGetter: "AttrIndexUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrLatestReplicationTime", GoGetter: "AttrLatestReplicationTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRedundancyType", GoGetter: "AttrRedundancyType"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplication", GoGetter: "AttrReplication"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationProgress", GoGetter: "AttrReplicationProgress"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceRegionId", GoGetter: "AttrReplicationSourceRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceVaultId", GoGetter: "AttrReplicationSourceVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetention", GoGetter: "AttrRetention"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchEnabled", GoGetter: "AttrSearchEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceTypes", GoGetter: "AttrSourceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageSize", GoGetter: "AttrStorageSize"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrialInfo", GoGetter: "AttrTrialInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdatedTime", GoGetter: "AttrUpdatedTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStatusMessage", GoGetter: "AttrVaultStatusMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStorageClass", GoGetter: "AttrVaultStorageClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultType", GoGetter: "AttrVaultType"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.datasource.IVaults",
		reflect.TypeOf((*IVaults)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrVaultIds", GoGetter: "AttrVaultIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaults", GoGetter: "AttrVaults"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IVaults{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.datasource.RosVault",
		reflect.TypeOf((*RosVault)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrBackupPlanStatistics", GoGetter: "AttrBackupPlanStatistics"},
			_jsii_.MemberProperty{JsiiProperty: "attrBytesDone", GoGetter: "AttrBytesDone"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDedup", GoGetter: "AttrDedup"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexAvailable", GoGetter: "AttrIndexAvailable"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexLevel", GoGetter: "AttrIndexLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexUpdateTime", GoGetter: "AttrIndexUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrLatestReplicationTime", GoGetter: "AttrLatestReplicationTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRedundancyType", GoGetter: "AttrRedundancyType"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplication", GoGetter: "AttrReplication"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationProgress", GoGetter: "AttrReplicationProgress"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceRegionId", GoGetter: "AttrReplicationSourceRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceVaultId", GoGetter: "AttrReplicationSourceVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetention", GoGetter: "AttrRetention"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchEnabled", GoGetter: "AttrSearchEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceTypes", GoGetter: "AttrSourceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageSize", GoGetter: "AttrStorageSize"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrialInfo", GoGetter: "AttrTrialInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdatedTime", GoGetter: "AttrUpdatedTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStatusMessage", GoGetter: "AttrVaultStatusMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStorageClass", GoGetter: "AttrVaultStorageClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultType", GoGetter: "AttrVaultType"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
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
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.datasource.RosVaultProps",
		reflect.TypeOf((*RosVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.datasource.RosVaults",
		reflect.TypeOf((*RosVaults)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrVaultIds", GoGetter: "AttrVaultIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaults", GoGetter: "AttrVaults"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
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
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
			_jsii_.MemberProperty{JsiiProperty: "vaultType", GoGetter: "VaultType"},
		},
		func() interface{} {
			j := jsiiProxy_RosVaults{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.datasource.RosVaultsProps",
		reflect.TypeOf((*RosVaultsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.datasource.Vault",
		reflect.TypeOf((*Vault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrBackupPlanStatistics", GoGetter: "AttrBackupPlanStatistics"},
			_jsii_.MemberProperty{JsiiProperty: "attrBytesDone", GoGetter: "AttrBytesDone"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrDedup", GoGetter: "AttrDedup"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexAvailable", GoGetter: "AttrIndexAvailable"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexLevel", GoGetter: "AttrIndexLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrIndexUpdateTime", GoGetter: "AttrIndexUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrLatestReplicationTime", GoGetter: "AttrLatestReplicationTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRedundancyType", GoGetter: "AttrRedundancyType"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplication", GoGetter: "AttrReplication"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationProgress", GoGetter: "AttrReplicationProgress"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceRegionId", GoGetter: "AttrReplicationSourceRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrReplicationSourceVaultId", GoGetter: "AttrReplicationSourceVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetention", GoGetter: "AttrRetention"},
			_jsii_.MemberProperty{JsiiProperty: "attrSearchEnabled", GoGetter: "AttrSearchEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceTypes", GoGetter: "AttrSourceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrStorageSize", GoGetter: "AttrStorageSize"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrialInfo", GoGetter: "AttrTrialInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdatedTime", GoGetter: "AttrUpdatedTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStatusMessage", GoGetter: "AttrVaultStatusMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultStorageClass", GoGetter: "AttrVaultStorageClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultType", GoGetter: "AttrVaultType"},
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
			j := jsiiProxy_Vault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IVault)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.datasource.VaultProps",
		reflect.TypeOf((*VaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.datasource.Vaults",
		reflect.TypeOf((*Vaults)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultIds", GoGetter: "AttrVaultIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaults", GoGetter: "AttrVaults"},
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
			j := jsiiProxy_Vaults{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IVaults)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.datasource.VaultsProps",
		reflect.TypeOf((*VaultsProps)(nil)).Elem(),
	)
}
