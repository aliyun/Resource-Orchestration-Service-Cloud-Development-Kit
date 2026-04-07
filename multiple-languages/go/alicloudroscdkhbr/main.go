// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkhbr

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.BackupClients",
		reflect.TypeOf((*BackupClients)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrArn", GoGetter: "AttrArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrClientIds", GoGetter: "AttrClientIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
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
			j := jsiiProxy_BackupClients{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IBackupClients)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.BackupClientsProps",
		reflect.TypeOf((*BackupClientsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.CrossAccount",
		reflect.TypeOf((*CrossAccount)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
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
			j := jsiiProxy_CrossAccount{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ICrossAccount)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.CrossAccountProps",
		reflect.TypeOf((*CrossAccountProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.DbAgent",
		reflect.TypeOf((*DbAgent)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTaskId", GoGetter: "AttrTaskId"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstanceDetails", GoGetter: "AttrUniBackupInstanceDetails"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstances", GoGetter: "AttrUniBackupInstances"},
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
			j := jsiiProxy_DbAgent{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDbAgent)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.DbAgentProps",
		reflect.TypeOf((*DbAgentProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.DbPlan",
		reflect.TypeOf((*DbPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousPlan", GoGetter: "AttrContinuousPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousUuid", GoGetter: "AttrContinuousUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativePlan", GoGetter: "AttrCumulativePlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativeUuid", GoGetter: "AttrCumulativeUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbPlanName", GoGetter: "AttrDbPlanName"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullPlan", GoGetter: "AttrFullPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullUuid", GoGetter: "AttrFullUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrHostUuid", GoGetter: "AttrHostUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncPlan", GoGetter: "AttrIncPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncUuid", GoGetter: "AttrIncUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceUuid", GoGetter: "AttrInstanceUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogPlan", GoGetter: "AttrLogPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogUuid", GoGetter: "AttrLogUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRateLimit", GoGetter: "AttrMaxRateLimit"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRetrySeconds", GoGetter: "AttrMaxRetrySeconds"},
			_jsii_.MemberProperty{JsiiProperty: "attrOptions", GoGetter: "AttrOptions"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTarget", GoGetter: "AttrTarget"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
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
			j := jsiiProxy_DbPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDbPlan)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.DbPlanProps",
		reflect.TypeOf((*DbPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.DbVault",
		reflect.TypeOf((*DbVault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetentionDays", GoGetter: "AttrRetentionDays"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultRegionId", GoGetter: "AttrVaultRegionId"},
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
			j := jsiiProxy_DbVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDbVault)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.DbVaultProps",
		reflect.TypeOf((*DbVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.EcsBackupPlan",
		reflect.TypeOf((*EcsBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
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
			j := jsiiProxy_EcsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IEcsBackupPlan)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.EcsBackupPlanProps",
		reflect.TypeOf((*EcsBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IBackupClients",
		reflect.TypeOf((*IBackupClients)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrArn", GoGetter: "AttrArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrClientIds", GoGetter: "AttrClientIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IBackupClients{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.ICrossAccount",
		reflect.TypeOf((*ICrossAccount)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ICrossAccount{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IDbAgent",
		reflect.TypeOf((*IDbAgent)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTaskId", GoGetter: "AttrTaskId"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstanceDetails", GoGetter: "AttrUniBackupInstanceDetails"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstances", GoGetter: "AttrUniBackupInstances"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDbAgent{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IDbPlan",
		reflect.TypeOf((*IDbPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousPlan", GoGetter: "AttrContinuousPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousUuid", GoGetter: "AttrContinuousUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativePlan", GoGetter: "AttrCumulativePlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativeUuid", GoGetter: "AttrCumulativeUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbPlanName", GoGetter: "AttrDbPlanName"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullPlan", GoGetter: "AttrFullPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullUuid", GoGetter: "AttrFullUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrHostUuid", GoGetter: "AttrHostUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncPlan", GoGetter: "AttrIncPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncUuid", GoGetter: "AttrIncUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceUuid", GoGetter: "AttrInstanceUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogPlan", GoGetter: "AttrLogPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogUuid", GoGetter: "AttrLogUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRateLimit", GoGetter: "AttrMaxRateLimit"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRetrySeconds", GoGetter: "AttrMaxRetrySeconds"},
			_jsii_.MemberProperty{JsiiProperty: "attrOptions", GoGetter: "AttrOptions"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTarget", GoGetter: "AttrTarget"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDbPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IDbVault",
		reflect.TypeOf((*IDbVault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetentionDays", GoGetter: "AttrRetentionDays"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultRegionId", GoGetter: "AttrVaultRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDbVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IEcsBackupPlan",
		reflect.TypeOf((*IEcsBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IEcsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.INasBackupPlan",
		reflect.TypeOf((*INasBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_INasBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IOssBackupPlan",
		reflect.TypeOf((*IOssBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IOssBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IOtsBackupPlan",
		reflect.TypeOf((*IOtsBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IOtsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IPolicy",
		reflect.TypeOf((*IPolicy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrPolicyId", GoGetter: "AttrPolicyId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IPolicy{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IReplicationVault",
		reflect.TypeOf((*IReplicationVault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IReplicationVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IRestoreJob",
		reflect.TypeOf((*IRestoreJob)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrErrorMessage", GoGetter: "AttrErrorMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreId", GoGetter: "AttrRestoreId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreType", GoGetter: "AttrRestoreType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrStatus", GoGetter: "AttrStatus"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IRestoreJob{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-hbr.IVault",
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
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.NasBackupPlan",
		reflect.TypeOf((*NasBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
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
			j := jsiiProxy_NasBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_INasBackupPlan)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.NasBackupPlanProps",
		reflect.TypeOf((*NasBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.OssBackupPlan",
		reflect.TypeOf((*OssBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
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
			j := jsiiProxy_OssBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IOssBackupPlan)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.OssBackupPlanProps",
		reflect.TypeOf((*OssBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.OtsBackupPlan",
		reflect.TypeOf((*OtsBackupPlan)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
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
			j := jsiiProxy_OtsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IOtsBackupPlan)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.OtsBackupPlanProps",
		reflect.TypeOf((*OtsBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.Policy",
		reflect.TypeOf((*Policy)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrPolicyId", GoGetter: "AttrPolicyId"},
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
			j := jsiiProxy_Policy{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IPolicy)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.PolicyProps",
		reflect.TypeOf((*PolicyProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.ReplicationVault",
		reflect.TypeOf((*ReplicationVault)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
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
			j := jsiiProxy_ReplicationVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IReplicationVault)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.ReplicationVaultProps",
		reflect.TypeOf((*ReplicationVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RestoreJob",
		reflect.TypeOf((*RestoreJob)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrErrorMessage", GoGetter: "AttrErrorMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreId", GoGetter: "AttrRestoreId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreType", GoGetter: "AttrRestoreType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrStatus", GoGetter: "AttrStatus"},
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
			j := jsiiProxy_RestoreJob{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRestoreJob)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RestoreJobProps",
		reflect.TypeOf((*RestoreJobProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosBackupClients",
		reflect.TypeOf((*RosBackupClients)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrArn", GoGetter: "AttrArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrClientIds", GoGetter: "AttrClientIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceIds", GoGetter: "InstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosBackupClients{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosBackupClients.TagsProperty",
		reflect.TypeOf((*RosBackupClients_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosBackupClientsProps",
		reflect.TypeOf((*RosBackupClientsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosCrossAccount",
		reflect.TypeOf((*RosCrossAccount)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "alias", GoGetter: "Alias"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
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
			j := jsiiProxy_RosCrossAccount{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosCrossAccountProps",
		reflect.TypeOf((*RosCrossAccountProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosDbAgent",
		reflect.TypeOf((*RosDbAgent)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTaskId", GoGetter: "AttrTaskId"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstanceDetails", GoGetter: "AttrUniBackupInstanceDetails"},
			_jsii_.MemberProperty{JsiiProperty: "attrUniBackupInstances", GoGetter: "AttrUniBackupInstances"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceInfo", GoGetter: "InstanceInfo"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
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
			j := jsiiProxy_RosDbAgent{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty",
		reflect.TypeOf((*RosDbAgent_InstanceInfoProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbAgentProps",
		reflect.TypeOf((*RosDbAgentProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosDbPlan",
		reflect.TypeOf((*RosDbPlan)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousPlan", GoGetter: "AttrContinuousPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrContinuousUuid", GoGetter: "AttrContinuousUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativePlan", GoGetter: "AttrCumulativePlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrCumulativeUuid", GoGetter: "AttrCumulativeUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrDbPlanName", GoGetter: "AttrDbPlanName"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullPlan", GoGetter: "AttrFullPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrFullUuid", GoGetter: "AttrFullUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrHostUuid", GoGetter: "AttrHostUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncPlan", GoGetter: "AttrIncPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrIncUuid", GoGetter: "AttrIncUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceUuid", GoGetter: "AttrInstanceUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogPlan", GoGetter: "AttrLogPlan"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogUuid", GoGetter: "AttrLogUuid"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRateLimit", GoGetter: "AttrMaxRateLimit"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaxRetrySeconds", GoGetter: "AttrMaxRetrySeconds"},
			_jsii_.MemberProperty{JsiiProperty: "attrOptions", GoGetter: "AttrOptions"},
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTarget", GoGetter: "AttrTarget"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "continuousPlan", GoGetter: "ContinuousPlan"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "cumulativePlan", GoGetter: "CumulativePlan"},
			_jsii_.MemberProperty{JsiiProperty: "dbPlanName", GoGetter: "DbPlanName"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberProperty{JsiiProperty: "fullPlan", GoGetter: "FullPlan"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "hostUuid", GoGetter: "HostUuid"},
			_jsii_.MemberProperty{JsiiProperty: "incPlan", GoGetter: "IncPlan"},
			_jsii_.MemberProperty{JsiiProperty: "instanceUuid", GoGetter: "InstanceUuid"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "logPlan", GoGetter: "LogPlan"},
			_jsii_.MemberProperty{JsiiProperty: "maxRateLimit", GoGetter: "MaxRateLimit"},
			_jsii_.MemberProperty{JsiiProperty: "maxRetrySeconds", GoGetter: "MaxRetrySeconds"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "options", GoGetter: "Options"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "source", GoGetter: "Source"},
			_jsii_.MemberProperty{JsiiProperty: "sourceType", GoGetter: "SourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosDbPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbPlan.SourceProperty",
		reflect.TypeOf((*RosDbPlan_SourceProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbPlanProps",
		reflect.TypeOf((*RosDbPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosDbVault",
		reflect.TypeOf((*RosDbVault)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRetentionDays", GoGetter: "AttrRetentionDays"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultName", GoGetter: "AttrVaultName"},
			_jsii_.MemberProperty{JsiiProperty: "attrVaultRegionId", GoGetter: "AttrVaultRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
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
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retentionDays", GoGetter: "RetentionDays"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultName", GoGetter: "VaultName"},
			_jsii_.MemberProperty{JsiiProperty: "vaultRegionId", GoGetter: "VaultRegionId"},
		},
		func() interface{} {
			j := jsiiProxy_RosDbVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbVault.TagsProperty",
		reflect.TypeOf((*RosDbVault_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosDbVaultProps",
		reflect.TypeOf((*RosDbVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlan",
		reflect.TypeOf((*RosEcsBackupPlan)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "backupType", GoGetter: "BackupType"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
			_jsii_.MemberProperty{JsiiProperty: "detail", GoGetter: "Detail"},
			_jsii_.MemberProperty{JsiiProperty: "disabled", GoGetter: "Disabled"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "exclude", GoGetter: "Exclude"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "include", GoGetter: "Include"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "options", GoGetter: "Options"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "paths", GoGetter: "Paths"},
			_jsii_.MemberProperty{JsiiProperty: "planName", GoGetter: "PlanName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retention", GoGetter: "Retention"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "schedule", GoGetter: "Schedule"},
			_jsii_.MemberProperty{JsiiProperty: "speedLimit", GoGetter: "SpeedLimit"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosEcsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosEcsBackupPlanProps",
		reflect.TypeOf((*RosEcsBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosNasBackupPlan",
		reflect.TypeOf((*RosNasBackupPlan)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "backupType", GoGetter: "BackupType"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
			_jsii_.MemberProperty{JsiiProperty: "disabled", GoGetter: "Disabled"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberProperty{JsiiProperty: "fileSystemId", GoGetter: "FileSystemId"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "options", GoGetter: "Options"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "paths", GoGetter: "Paths"},
			_jsii_.MemberProperty{JsiiProperty: "planName", GoGetter: "PlanName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retention", GoGetter: "Retention"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "schedule", GoGetter: "Schedule"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosNasBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosNasBackupPlanProps",
		reflect.TypeOf((*RosNasBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosOssBackupPlan",
		reflect.TypeOf((*RosOssBackupPlan)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "backupType", GoGetter: "BackupType"},
			_jsii_.MemberProperty{JsiiProperty: "bucket", GoGetter: "Bucket"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
			_jsii_.MemberProperty{JsiiProperty: "disabled", GoGetter: "Disabled"},
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
			_jsii_.MemberProperty{JsiiProperty: "planName", GoGetter: "PlanName"},
			_jsii_.MemberProperty{JsiiProperty: "prefix", GoGetter: "Prefix"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retention", GoGetter: "Retention"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "schedule", GoGetter: "Schedule"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosOssBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosOssBackupPlanProps",
		reflect.TypeOf((*RosOssBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosOtsBackupPlan",
		reflect.TypeOf((*RosOtsBackupPlan)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrPlanId", GoGetter: "AttrPlanId"},
			_jsii_.MemberProperty{JsiiProperty: "backupType", GoGetter: "BackupType"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountRoleName", GoGetter: "CrossAccountRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountType", GoGetter: "CrossAccountType"},
			_jsii_.MemberProperty{JsiiProperty: "crossAccountUserId", GoGetter: "CrossAccountUserId"},
			_jsii_.MemberProperty{JsiiProperty: "disabled", GoGetter: "Disabled"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceName", GoGetter: "InstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "otsDetail", GoGetter: "OtsDetail"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "planName", GoGetter: "PlanName"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retention", GoGetter: "Retention"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "rules", GoGetter: "Rules"},
			_jsii_.MemberProperty{JsiiProperty: "schedule", GoGetter: "Schedule"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosOtsBackupPlan{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosOtsBackupPlan.OtsDetailProperty",
		reflect.TypeOf((*RosOtsBackupPlan_OtsDetailProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosOtsBackupPlan.RulesProperty",
		reflect.TypeOf((*RosOtsBackupPlan_RulesProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosOtsBackupPlanProps",
		reflect.TypeOf((*RosOtsBackupPlanProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosPolicy",
		reflect.TypeOf((*RosPolicy)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrPolicyId", GoGetter: "AttrPolicyId"},
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
			_jsii_.MemberProperty{JsiiProperty: "policyDescription", GoGetter: "PolicyDescription"},
			_jsii_.MemberProperty{JsiiProperty: "policyName", GoGetter: "PolicyName"},
			_jsii_.MemberProperty{JsiiProperty: "policyType", GoGetter: "PolicyType"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "rules", GoGetter: "Rules"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosPolicy{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicy.DataSourceFiltersProperty",
		reflect.TypeOf((*RosPolicy_DataSourceFiltersProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicy.RetentionRulesProperty",
		reflect.TypeOf((*RosPolicy_RetentionRulesProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicy.RulesProperty",
		reflect.TypeOf((*RosPolicy_RulesProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicy.SelectorProperty",
		reflect.TypeOf((*RosPolicy_SelectorProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicy.TagFiltersProperty",
		reflect.TypeOf((*RosPolicy_TagFiltersProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosPolicyProps",
		reflect.TypeOf((*RosPolicyProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosReplicationVault",
		reflect.TypeOf((*RosReplicationVault)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrVaultId", GoGetter: "AttrVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "encryptType", GoGetter: "EncryptType"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "kmsKeyId", GoGetter: "KmsKeyId"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "redundancyType", GoGetter: "RedundancyType"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "replicationSourceRegionId", GoGetter: "ReplicationSourceRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "replicationSourceVaultId", GoGetter: "ReplicationSourceVaultId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultName", GoGetter: "VaultName"},
			_jsii_.MemberProperty{JsiiProperty: "vaultStorageClass", GoGetter: "VaultStorageClass"},
		},
		func() interface{} {
			j := jsiiProxy_RosReplicationVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosReplicationVaultProps",
		reflect.TypeOf((*RosReplicationVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosRestoreJob",
		reflect.TypeOf((*RosRestoreJob)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrErrorMessage", GoGetter: "AttrErrorMessage"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreId", GoGetter: "AttrRestoreId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRestoreType", GoGetter: "AttrRestoreType"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceType", GoGetter: "AttrSourceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrStatus", GoGetter: "AttrStatus"},
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
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "restoreType", GoGetter: "RestoreType"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "snapshotId", GoGetter: "SnapshotId"},
			_jsii_.MemberProperty{JsiiProperty: "sourceClientId", GoGetter: "SourceClientId"},
			_jsii_.MemberProperty{JsiiProperty: "sourceInstanceId", GoGetter: "SourceInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "sourceType", GoGetter: "SourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "targetClientId", GoGetter: "TargetClientId"},
			_jsii_.MemberProperty{JsiiProperty: "targetInstanceId", GoGetter: "TargetInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "targetPath", GoGetter: "TargetPath"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultId", GoGetter: "VaultId"},
		},
		func() interface{} {
			j := jsiiProxy_RosRestoreJob{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosRestoreJobProps",
		reflect.TypeOf((*RosRestoreJobProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.RosVault",
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
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "encryptType", GoGetter: "EncryptType"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "kmsKeyId", GoGetter: "KmsKeyId"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "redundancyType", GoGetter: "RedundancyType"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vaultName", GoGetter: "VaultName"},
			_jsii_.MemberProperty{JsiiProperty: "vaultStorageClass", GoGetter: "VaultStorageClass"},
			_jsii_.MemberProperty{JsiiProperty: "vaultType", GoGetter: "VaultType"},
		},
		func() interface{} {
			j := jsiiProxy_RosVault{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosVault.TagsProperty",
		reflect.TypeOf((*RosVault_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-hbr.RosVaultProps",
		reflect.TypeOf((*RosVaultProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-hbr.Vault",
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
		"@alicloud/ros-cdk-hbr.VaultProps",
		reflect.TypeOf((*VaultProps)(nil)).Elem(),
	)
}
