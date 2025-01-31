// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkconfig

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.AggregateCompliancePack",
		reflect.TypeOf((*AggregateCompliancePack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
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
			j := jsiiProxy_AggregateCompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IAggregateCompliancePack)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.AggregateCompliancePackProps",
		reflect.TypeOf((*AggregateCompliancePackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.Aggregator",
		reflect.TypeOf((*Aggregator)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAggregatorId", GoGetter: "AttrAggregatorId"},
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
			j := jsiiProxy_Aggregator{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IAggregator)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.AggregatorProps",
		reflect.TypeOf((*AggregatorProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.CompliancePack",
		reflect.TypeOf((*CompliancePack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAccountId", GoGetter: "AttrAccountId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackName", GoGetter: "AttrCompliancePackName"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackTemplateId", GoGetter: "AttrCompliancePackTemplateId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
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
			j := jsiiProxy_CompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ICompliancePack)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.CompliancePackProps",
		reflect.TypeOf((*CompliancePackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.DeliveryChannel",
		reflect.TypeOf((*DeliveryChannel)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrDeliveryChannelId", GoGetter: "AttrDeliveryChannelId"},
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
			j := jsiiProxy_DeliveryChannel{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDeliveryChannel)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.DeliveryChannelProps",
		reflect.TypeOf((*DeliveryChannelProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-config.IAggregateCompliancePack",
		reflect.TypeOf((*IAggregateCompliancePack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IAggregateCompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-config.IAggregator",
		reflect.TypeOf((*IAggregator)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAggregatorId", GoGetter: "AttrAggregatorId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IAggregator{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-config.ICompliancePack",
		reflect.TypeOf((*ICompliancePack)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAccountId", GoGetter: "AttrAccountId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackName", GoGetter: "AttrCompliancePackName"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackTemplateId", GoGetter: "AttrCompliancePackTemplateId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ICompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-config.IDeliveryChannel",
		reflect.TypeOf((*IDeliveryChannel)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrDeliveryChannelId", GoGetter: "AttrDeliveryChannelId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDeliveryChannel{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-config.IRule",
		reflect.TypeOf((*IRule)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleArn", GoGetter: "AttrConfigRuleArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleId", GoGetter: "AttrConfigRuleId"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleTriggerTypes", GoGetter: "AttrConfigRuleTriggerTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrEventSource", GoGetter: "AttrEventSource"},
			_jsii_.MemberProperty{JsiiProperty: "attrExcludeResourceIdsScope", GoGetter: "AttrExcludeResourceIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrInputParameters", GoGetter: "AttrInputParameters"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaximumExecutionFrequency", GoGetter: "AttrMaximumExecutionFrequency"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionIdsScope", GoGetter: "AttrRegionIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupIdsScope", GoGetter: "AttrResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceTypesScope", GoGetter: "AttrResourceTypesScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrRuleName", GoGetter: "AttrRuleName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIdentifier", GoGetter: "AttrSourceIdentifier"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceOwner", GoGetter: "AttrSourceOwner"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagKeyScope", GoGetter: "AttrTagKeyScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagValueScope", GoGetter: "AttrTagValueScope"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IRule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.RosAggregateCompliancePack",
		reflect.TypeOf((*RosAggregateCompliancePack)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "aggregatorId", GoGetter: "AggregatorId"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
			_jsii_.MemberProperty{JsiiProperty: "compliancePackName", GoGetter: "CompliancePackName"},
			_jsii_.MemberProperty{JsiiProperty: "compliancePackTemplateId", GoGetter: "CompliancePackTemplateId"},
			_jsii_.MemberProperty{JsiiProperty: "configRules", GoGetter: "ConfigRules"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "defaultEnable", GoGetter: "DefaultEnable"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "excludeRegionIdsScope", GoGetter: "ExcludeRegionIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "excludeResourceGroupIdsScope", GoGetter: "ExcludeResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "excludeResourceIdsScope", GoGetter: "ExcludeResourceIdsScope"},
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
			_jsii_.MemberProperty{JsiiProperty: "regionIdsScope", GoGetter: "RegionIdsScope"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupIdsScope", GoGetter: "ResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "resourceIdsScope", GoGetter: "ResourceIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "riskLevel", GoGetter: "RiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tagKeyScope", GoGetter: "TagKeyScope"},
			_jsii_.MemberProperty{JsiiProperty: "tagValueScope", GoGetter: "TagValueScope"},
			_jsii_.MemberProperty{JsiiProperty: "templateContent", GoGetter: "TemplateContent"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosAggregateCompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRuleParametersProperty",
		reflect.TypeOf((*RosAggregateCompliancePack_ConfigRuleParametersProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty",
		reflect.TypeOf((*RosAggregateCompliancePack_ConfigRulesProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosAggregateCompliancePackProps",
		reflect.TypeOf((*RosAggregateCompliancePackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.RosAggregator",
		reflect.TypeOf((*RosAggregator)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "aggregatorAccounts", GoGetter: "AggregatorAccounts"},
			_jsii_.MemberProperty{JsiiProperty: "aggregatorName", GoGetter: "AggregatorName"},
			_jsii_.MemberProperty{JsiiProperty: "aggregatorType", GoGetter: "AggregatorType"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAggregatorId", GoGetter: "AttrAggregatorId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberProperty{JsiiProperty: "folderId", GoGetter: "FolderId"},
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
			j := jsiiProxy_RosAggregator{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty",
		reflect.TypeOf((*RosAggregator_AggregatorAccountsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosAggregatorProps",
		reflect.TypeOf((*RosAggregatorProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.RosCompliancePack",
		reflect.TypeOf((*RosCompliancePack)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrAccountId", GoGetter: "AttrAccountId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackId", GoGetter: "AttrCompliancePackId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackName", GoGetter: "AttrCompliancePackName"},
			_jsii_.MemberProperty{JsiiProperty: "attrCompliancePackTemplateId", GoGetter: "AttrCompliancePackTemplateId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "compliancePackName", GoGetter: "CompliancePackName"},
			_jsii_.MemberProperty{JsiiProperty: "compliancePackTemplateId", GoGetter: "CompliancePackTemplateId"},
			_jsii_.MemberProperty{JsiiProperty: "configRuleIds", GoGetter: "ConfigRuleIds"},
			_jsii_.MemberProperty{JsiiProperty: "configRules", GoGetter: "ConfigRules"},
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
			_jsii_.MemberProperty{JsiiProperty: "riskLevel", GoGetter: "RiskLevel"},
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
			j := jsiiProxy_RosCompliancePack{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosCompliancePack.ConfigRuleIdsProperty",
		reflect.TypeOf((*RosCompliancePack_ConfigRuleIdsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosCompliancePackProps",
		reflect.TypeOf((*RosCompliancePackProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.RosDeliveryChannel",
		reflect.TypeOf((*RosDeliveryChannel)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrDeliveryChannelId", GoGetter: "AttrDeliveryChannelId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deliveryChannelAssumeRoleArn", GoGetter: "DeliveryChannelAssumeRoleArn"},
			_jsii_.MemberProperty{JsiiProperty: "deliveryChannelCondition", GoGetter: "DeliveryChannelCondition"},
			_jsii_.MemberProperty{JsiiProperty: "deliveryChannelName", GoGetter: "DeliveryChannelName"},
			_jsii_.MemberProperty{JsiiProperty: "deliveryChannelTargetArn", GoGetter: "DeliveryChannelTargetArn"},
			_jsii_.MemberProperty{JsiiProperty: "deliveryChannelType", GoGetter: "DeliveryChannelType"},
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
			j := jsiiProxy_RosDeliveryChannel{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosDeliveryChannelProps",
		reflect.TypeOf((*RosDeliveryChannelProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.RosRule",
		reflect.TypeOf((*RosRule)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleArn", GoGetter: "AttrConfigRuleArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleId", GoGetter: "AttrConfigRuleId"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleTriggerTypes", GoGetter: "AttrConfigRuleTriggerTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrEventSource", GoGetter: "AttrEventSource"},
			_jsii_.MemberProperty{JsiiProperty: "attrExcludeResourceIdsScope", GoGetter: "AttrExcludeResourceIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrInputParameters", GoGetter: "AttrInputParameters"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaximumExecutionFrequency", GoGetter: "AttrMaximumExecutionFrequency"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionIdsScope", GoGetter: "AttrRegionIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupIdsScope", GoGetter: "AttrResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceTypesScope", GoGetter: "AttrResourceTypesScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrRuleName", GoGetter: "AttrRuleName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIdentifier", GoGetter: "AttrSourceIdentifier"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceOwner", GoGetter: "AttrSourceOwner"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagKeyScope", GoGetter: "AttrTagKeyScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagValueScope", GoGetter: "AttrTagValueScope"},
			_jsii_.MemberProperty{JsiiProperty: "configRuleTriggerTypes", GoGetter: "ConfigRuleTriggerTypes"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "description", GoGetter: "Description"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "excludeResourceIdsScope", GoGetter: "ExcludeResourceIdsScope"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "inputParameters", GoGetter: "InputParameters"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "maximumExecutionFrequency", GoGetter: "MaximumExecutionFrequency"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "regionIdsScope", GoGetter: "RegionIdsScope"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupIdsScope", GoGetter: "ResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "resourceTypesScope", GoGetter: "ResourceTypesScope"},
			_jsii_.MemberProperty{JsiiProperty: "riskLevel", GoGetter: "RiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "ruleName", GoGetter: "RuleName"},
			_jsii_.MemberProperty{JsiiProperty: "sourceIdentifier", GoGetter: "SourceIdentifier"},
			_jsii_.MemberProperty{JsiiProperty: "sourceOwner", GoGetter: "SourceOwner"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tagKeyLogicScope", GoGetter: "TagKeyLogicScope"},
			_jsii_.MemberProperty{JsiiProperty: "tagKeyScope", GoGetter: "TagKeyScope"},
			_jsii_.MemberProperty{JsiiProperty: "tagValueScope", GoGetter: "TagValueScope"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosRule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RosRuleProps",
		reflect.TypeOf((*RosRuleProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-config.Rule",
		reflect.TypeOf((*Rule)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleArn", GoGetter: "AttrConfigRuleArn"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleId", GoGetter: "AttrConfigRuleId"},
			_jsii_.MemberProperty{JsiiProperty: "attrConfigRuleTriggerTypes", GoGetter: "AttrConfigRuleTriggerTypes"},
			_jsii_.MemberProperty{JsiiProperty: "attrDescription", GoGetter: "AttrDescription"},
			_jsii_.MemberProperty{JsiiProperty: "attrEventSource", GoGetter: "AttrEventSource"},
			_jsii_.MemberProperty{JsiiProperty: "attrExcludeResourceIdsScope", GoGetter: "AttrExcludeResourceIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrInputParameters", GoGetter: "AttrInputParameters"},
			_jsii_.MemberProperty{JsiiProperty: "attrMaximumExecutionFrequency", GoGetter: "AttrMaximumExecutionFrequency"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionIdsScope", GoGetter: "AttrRegionIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupIdsScope", GoGetter: "AttrResourceGroupIdsScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceTypesScope", GoGetter: "AttrResourceTypesScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrRiskLevel", GoGetter: "AttrRiskLevel"},
			_jsii_.MemberProperty{JsiiProperty: "attrRuleName", GoGetter: "AttrRuleName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIdentifier", GoGetter: "AttrSourceIdentifier"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceOwner", GoGetter: "AttrSourceOwner"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagKeyScope", GoGetter: "AttrTagKeyScope"},
			_jsii_.MemberProperty{JsiiProperty: "attrTagValueScope", GoGetter: "AttrTagValueScope"},
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
			j := jsiiProxy_Rule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IRule)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-config.RuleProps",
		reflect.TypeOf((*RuleProps)(nil)).Elem(),
	)
}
