package datasource

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.Groups",
		reflect.TypeOf((*Groups)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroupNames", GoGetter: "AttrGroupNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroups", GoGetter: "AttrGroups"},
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
			j := jsiiProxy_Groups{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IGroups)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.GroupsProps",
		reflect.TypeOf((*GroupsProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-rocketmq.datasource.IGroups",
		reflect.TypeOf((*IGroups)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrGroupNames", GoGetter: "AttrGroupNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroups", GoGetter: "AttrGroups"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IGroups{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-rocketmq.datasource.IInstance",
		reflect.TypeOf((*IInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAccountInfo", GoGetter: "AttrAccountInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrAclInfo", GoGetter: "AttrAclInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroupCount", GoGetter: "AttrGroupCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceQuotas", GoGetter: "AttrInstanceQuotas"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkInfo", GoGetter: "AttrNetworkInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrProductInfo", GoGetter: "AttrProductInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrReleaseTime", GoGetter: "AttrReleaseTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSeriesCode", GoGetter: "AttrSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrServiceCode", GoGetter: "AttrServiceCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrSoftware", GoGetter: "AttrSoftware"},
			_jsii_.MemberProperty{JsiiProperty: "attrStartTime", GoGetter: "AttrStartTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubSeriesCode", GoGetter: "AttrSubSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicCount", GoGetter: "AttrTopicCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrUserId", GoGetter: "AttrUserId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-rocketmq.datasource.IInstances",
		reflect.TypeOf((*IInstances)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstances", GoGetter: "AttrInstances"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IInstances{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-rocketmq.datasource.ITopic",
		reflect.TypeOf((*ITopic)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrMessageType", GoGetter: "AttrMessageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicName", GoGetter: "AttrTopicName"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ITopic{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-rocketmq.datasource.ITopics",
		reflect.TypeOf((*ITopics)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrTopicNames", GoGetter: "AttrTopicNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopics", GoGetter: "AttrTopics"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ITopics{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.Instance",
		reflect.TypeOf((*Instance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAccountInfo", GoGetter: "AttrAccountInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrAclInfo", GoGetter: "AttrAclInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroupCount", GoGetter: "AttrGroupCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceQuotas", GoGetter: "AttrInstanceQuotas"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkInfo", GoGetter: "AttrNetworkInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrProductInfo", GoGetter: "AttrProductInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrReleaseTime", GoGetter: "AttrReleaseTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSeriesCode", GoGetter: "AttrSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrServiceCode", GoGetter: "AttrServiceCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrSoftware", GoGetter: "AttrSoftware"},
			_jsii_.MemberProperty{JsiiProperty: "attrStartTime", GoGetter: "AttrStartTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubSeriesCode", GoGetter: "AttrSubSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicCount", GoGetter: "AttrTopicCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrUserId", GoGetter: "AttrUserId"},
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
			j := jsiiProxy_Instance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IInstance)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.InstanceProps",
		reflect.TypeOf((*InstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.Instances",
		reflect.TypeOf((*Instances)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceIds", GoGetter: "AttrInstanceIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstances", GoGetter: "AttrInstances"},
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
			j := jsiiProxy_Instances{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IInstances)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.InstancesProps",
		reflect.TypeOf((*InstancesProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.RosGroups",
		reflect.TypeOf((*RosGroups)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrGroupNames", GoGetter: "AttrGroupNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroups", GoGetter: "AttrGroups"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "groupName", GoGetter: "GroupName"},
			_jsii_.MemberProperty{JsiiProperty: "groupType", GoGetter: "GroupType"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
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
			j := jsiiProxy_RosGroups{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.RosGroupsProps",
		reflect.TypeOf((*RosGroupsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.RosInstance",
		reflect.TypeOf((*RosInstance)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrAccountInfo", GoGetter: "AttrAccountInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrAclInfo", GoGetter: "AttrAclInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrCommodityCode", GoGetter: "AttrCommodityCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrExpireTime", GoGetter: "AttrExpireTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrGroupCount", GoGetter: "AttrGroupCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceQuotas", GoGetter: "AttrInstanceQuotas"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkInfo", GoGetter: "AttrNetworkInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrPaymentType", GoGetter: "AttrPaymentType"},
			_jsii_.MemberProperty{JsiiProperty: "attrProductInfo", GoGetter: "AttrProductInfo"},
			_jsii_.MemberProperty{JsiiProperty: "attrReleaseTime", GoGetter: "AttrReleaseTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSeriesCode", GoGetter: "AttrSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrServiceCode", GoGetter: "AttrServiceCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrSoftware", GoGetter: "AttrSoftware"},
			_jsii_.MemberProperty{JsiiProperty: "attrStartTime", GoGetter: "AttrStartTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubSeriesCode", GoGetter: "AttrSubSeriesCode"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicCount", GoGetter: "AttrTopicCount"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrUserId", GoGetter: "AttrUserId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
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
			j := jsiiProxy_RosInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.RosInstanceProps",
		reflect.TypeOf((*RosInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.RosInstances",
		reflect.TypeOf((*RosInstances)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrInstances", GoGetter: "AttrInstances"},
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
		},
		func() interface{} {
			j := jsiiProxy_RosInstances{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.RosInstancesProps",
		reflect.TypeOf((*RosInstancesProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.RosTopic",
		reflect.TypeOf((*RosTopic)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrMessageType", GoGetter: "AttrMessageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicName", GoGetter: "AttrTopicName"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
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
			_jsii_.MemberProperty{JsiiProperty: "topicName", GoGetter: "TopicName"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosTopic{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.RosTopicProps",
		reflect.TypeOf((*RosTopicProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.RosTopics",
		reflect.TypeOf((*RosTopics)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrTopicNames", GoGetter: "AttrTopicNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopics", GoGetter: "AttrTopics"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
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
			_jsii_.MemberProperty{JsiiProperty: "topicName", GoGetter: "TopicName"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosTopics{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.RosTopicsProps",
		reflect.TypeOf((*RosTopicsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.Topic",
		reflect.TypeOf((*Topic)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrMessageType", GoGetter: "AttrMessageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemark", GoGetter: "AttrRemark"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicName", GoGetter: "AttrTopicName"},
			_jsii_.MemberProperty{JsiiProperty: "attrUpdateTime", GoGetter: "AttrUpdateTime"},
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
			j := jsiiProxy_Topic{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ITopic)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.TopicProps",
		reflect.TypeOf((*TopicProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-rocketmq.datasource.Topics",
		reflect.TypeOf((*Topics)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopicNames", GoGetter: "AttrTopicNames"},
			_jsii_.MemberProperty{JsiiProperty: "attrTopics", GoGetter: "AttrTopics"},
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
			j := jsiiProxy_Topics{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ITopics)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-rocketmq.datasource.TopicsProps",
		reflect.TypeOf((*TopicsProps)(nil)).Elem(),
	)
}
