// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkwaf

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.AclRule",
		reflect.TypeOf((*AclRule)(nil)).Elem(),
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
			j := jsiiProxy_AclRule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IAclRule)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.AclRuleProps",
		reflect.TypeOf((*AclRuleProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.Domain",
		reflect.TypeOf((*Domain)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterType", GoGetter: "AttrClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrDomainName", GoGetter: "AttrDomainName"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttp2Port", GoGetter: "AttrHttp2Port"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpPort", GoGetter: "AttrHttpPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsPort", GoGetter: "AttrHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsRedirect", GoGetter: "AttrHttpsRedirect"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpToUserIp", GoGetter: "AttrHttpToUserIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsAccessProduct", GoGetter: "AttrIsAccessProduct"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancing", GoGetter: "AttrLoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogHeaders", GoGetter: "AttrLogHeaders"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIps", GoGetter: "AttrSourceIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrVersion", GoGetter: "AttrVersion"},
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
			j := jsiiProxy_Domain{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDomain)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.DomainConfig",
		reflect.TypeOf((*DomainConfig)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrProtocolType", GoGetter: "AttrProtocolType"},
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
			j := jsiiProxy_DomainConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IDomainConfig)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.DomainConfigProps",
		reflect.TypeOf((*DomainConfigProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.DomainProps",
		reflect.TypeOf((*DomainProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-waf.IAclRule",
		reflect.TypeOf((*IAclRule)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IAclRule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-waf.IDomain",
		reflect.TypeOf((*IDomain)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrClusterType", GoGetter: "AttrClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrDomainName", GoGetter: "AttrDomainName"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttp2Port", GoGetter: "AttrHttp2Port"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpPort", GoGetter: "AttrHttpPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsPort", GoGetter: "AttrHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsRedirect", GoGetter: "AttrHttpsRedirect"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpToUserIp", GoGetter: "AttrHttpToUserIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsAccessProduct", GoGetter: "AttrIsAccessProduct"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancing", GoGetter: "AttrLoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogHeaders", GoGetter: "AttrLogHeaders"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIps", GoGetter: "AttrSourceIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrVersion", GoGetter: "AttrVersion"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDomain{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-waf.IDomainConfig",
		reflect.TypeOf((*IDomainConfig)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrProtocolType", GoGetter: "AttrProtocolType"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IDomainConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-waf.IInstance",
		reflect.TypeOf((*IInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrEndDate", GoGetter: "AttrEndDate"},
			_jsii_.MemberProperty{JsiiProperty: "attrInDebt", GoGetter: "AttrInDebt"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemainDay", GoGetter: "AttrRemainDay"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubscriptionType", GoGetter: "AttrSubscriptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrial", GoGetter: "AttrTrial"},
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
		"@alicloud/ros-cdk-waf.ILogServiceEnable",
		reflect.TypeOf((*ILogServiceEnable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrDomain", GoGetter: "AttrDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ILogServiceEnable{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-waf.IWafSwitch",
		reflect.TypeOf((*IWafSwitch)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IWafSwitch{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.Instance",
		reflect.TypeOf((*Instance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrEndDate", GoGetter: "AttrEndDate"},
			_jsii_.MemberProperty{JsiiProperty: "attrInDebt", GoGetter: "AttrInDebt"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemainDay", GoGetter: "AttrRemainDay"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubscriptionType", GoGetter: "AttrSubscriptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrial", GoGetter: "AttrTrial"},
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
		"@alicloud/ros-cdk-waf.InstanceProps",
		reflect.TypeOf((*InstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.LogServiceEnable",
		reflect.TypeOf((*LogServiceEnable)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrDomain", GoGetter: "AttrDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
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
			j := jsiiProxy_LogServiceEnable{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ILogServiceEnable)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.LogServiceEnableProps",
		reflect.TypeOf((*LogServiceEnableProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosAclRule",
		reflect.TypeOf((*RosAclRule)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "domain", GoGetter: "Domain"},
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
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "ruleId", GoGetter: "RuleId"},
			_jsii_.MemberProperty{JsiiProperty: "rules", GoGetter: "Rules"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosAclRule{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosAclRuleProps",
		reflect.TypeOf((*RosAclRuleProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosDomain",
		reflect.TypeOf((*RosDomain)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrClusterType", GoGetter: "AttrClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrDomainName", GoGetter: "AttrDomainName"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttp2Port", GoGetter: "AttrHttp2Port"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpPort", GoGetter: "AttrHttpPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsPort", GoGetter: "AttrHttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpsRedirect", GoGetter: "AttrHttpsRedirect"},
			_jsii_.MemberProperty{JsiiProperty: "attrHttpToUserIp", GoGetter: "AttrHttpToUserIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrIsAccessProduct", GoGetter: "AttrIsAccessProduct"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancing", GoGetter: "AttrLoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "attrLogHeaders", GoGetter: "AttrLogHeaders"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSourceIps", GoGetter: "AttrSourceIps"},
			_jsii_.MemberProperty{JsiiProperty: "attrVersion", GoGetter: "AttrVersion"},
			_jsii_.MemberProperty{JsiiProperty: "clusterType", GoGetter: "ClusterType"},
			_jsii_.MemberProperty{JsiiProperty: "connectionTime", GoGetter: "ConnectionTime"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "domainName", GoGetter: "DomainName"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "http2Port", GoGetter: "Http2Port"},
			_jsii_.MemberProperty{JsiiProperty: "httpPort", GoGetter: "HttpPort"},
			_jsii_.MemberProperty{JsiiProperty: "httpsPort", GoGetter: "HttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "httpsRedirect", GoGetter: "HttpsRedirect"},
			_jsii_.MemberProperty{JsiiProperty: "httpToUserIp", GoGetter: "HttpToUserIp"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "isAccessProduct", GoGetter: "IsAccessProduct"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancing", GoGetter: "LoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "logHeaders", GoGetter: "LogHeaders"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "readTime", GoGetter: "ReadTime"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "sourceIps", GoGetter: "SourceIps"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "writeTime", GoGetter: "WriteTime"},
		},
		func() interface{} {
			j := jsiiProxy_RosDomain{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty",
		reflect.TypeOf((*RosDomain_LogHeadersProperty)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosDomainConfig",
		reflect.TypeOf((*RosDomainConfig)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrCname", GoGetter: "AttrCname"},
			_jsii_.MemberProperty{JsiiProperty: "attrProtocolType", GoGetter: "AttrProtocolType"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "domain", GoGetter: "Domain"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "httpPort", GoGetter: "HttpPort"},
			_jsii_.MemberProperty{JsiiProperty: "httpsPort", GoGetter: "HttpsPort"},
			_jsii_.MemberProperty{JsiiProperty: "httpsRedirect", GoGetter: "HttpsRedirect"},
			_jsii_.MemberProperty{JsiiProperty: "httpToUserIp", GoGetter: "HttpToUserIp"},
			_jsii_.MemberProperty{JsiiProperty: "instanceId", GoGetter: "InstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "isAccessProduct", GoGetter: "IsAccessProduct"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancing", GoGetter: "LoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "protocols", GoGetter: "Protocols"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "rsType", GoGetter: "RsType"},
			_jsii_.MemberProperty{JsiiProperty: "sourceIps", GoGetter: "SourceIps"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosDomainConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosDomainConfigProps",
		reflect.TypeOf((*RosDomainConfigProps)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosDomainProps",
		reflect.TypeOf((*RosDomainProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosInstance",
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
			_jsii_.MemberProperty{JsiiProperty: "attrEndDate", GoGetter: "AttrEndDate"},
			_jsii_.MemberProperty{JsiiProperty: "attrInDebt", GoGetter: "AttrInDebt"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrRemainDay", GoGetter: "AttrRemainDay"},
			_jsii_.MemberProperty{JsiiProperty: "attrSubscriptionType", GoGetter: "AttrSubscriptionType"},
			_jsii_.MemberProperty{JsiiProperty: "attrTrial", GoGetter: "AttrTrial"},
			_jsii_.MemberProperty{JsiiProperty: "bigScreen", GoGetter: "BigScreen"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "exclusiveIpPackage", GoGetter: "ExclusiveIpPackage"},
			_jsii_.MemberProperty{JsiiProperty: "extBandwidth", GoGetter: "ExtBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "extDomainPackage", GoGetter: "ExtDomainPackage"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "logStorage", GoGetter: "LogStorage"},
			_jsii_.MemberProperty{JsiiProperty: "logTime", GoGetter: "LogTime"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "packageCode", GoGetter: "PackageCode"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "prefessionalService", GoGetter: "PrefessionalService"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "renewalStatus", GoGetter: "RenewalStatus"},
			_jsii_.MemberProperty{JsiiProperty: "renewPeriod", GoGetter: "RenewPeriod"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberProperty{JsiiProperty: "subscriptionType", GoGetter: "SubscriptionType"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "wafLog", GoGetter: "WafLog"},
		},
		func() interface{} {
			j := jsiiProxy_RosInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosInstanceProps",
		reflect.TypeOf((*RosInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosLogServiceEnable",
		reflect.TypeOf((*RosLogServiceEnable)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrDomain", GoGetter: "AttrDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "domain", GoGetter: "Domain"},
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
			j := jsiiProxy_RosLogServiceEnable{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosLogServiceEnableProps",
		reflect.TypeOf((*RosLogServiceEnableProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.RosWafSwitch",
		reflect.TypeOf((*RosWafSwitch)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "domain", GoGetter: "Domain"},
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
			_jsii_.MemberProperty{JsiiProperty: "region", GoGetter: "Region"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "serviceOn", GoGetter: "ServiceOn"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosWafSwitch{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.RosWafSwitchProps",
		reflect.TypeOf((*RosWafSwitchProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-waf.WafSwitch",
		reflect.TypeOf((*WafSwitch)(nil)).Elem(),
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
			j := jsiiProxy_WafSwitch{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IWafSwitch)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-waf.WafSwitchProps",
		reflect.TypeOf((*WafSwitchProps)(nil)).Elem(),
	)
}
