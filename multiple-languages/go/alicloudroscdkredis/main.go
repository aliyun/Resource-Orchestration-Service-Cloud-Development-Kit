// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkredis

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.Account",
		reflect.TypeOf((*Account)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAccountName", GoGetter: "AttrAccountName"},
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
			j := jsiiProxy_Account{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IAccount)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.AccountProps",
		reflect.TypeOf((*AccountProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.AuditLogConfig",
		reflect.TypeOf((*AuditLogConfig)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
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
			j := jsiiProxy_AuditLogConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IAuditLogConfig)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.AuditLogConfigProps",
		reflect.TypeOf((*AuditLogConfigProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.Connection",
		reflect.TypeOf((*Connection)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
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
			j := jsiiProxy_Connection{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IConnection)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.ConnectionProps",
		reflect.TypeOf((*ConnectionProps)(nil)).Elem(),
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-redis.IAccount",
		reflect.TypeOf((*IAccount)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAccountName", GoGetter: "AttrAccountName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IAccount{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-redis.IAuditLogConfig",
		reflect.TypeOf((*IAuditLogConfig)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IAuditLogConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-redis.IConnection",
		reflect.TypeOf((*IConnection)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IConnection{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-redis.IInstance",
		reflect.TypeOf((*IInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
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
		"@alicloud/ros-cdk-redis.IPrepayInstance",
		reflect.TypeOf((*IPrepayInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IPrepayInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-redis.IWhitelist",
		reflect.TypeOf((*IWhitelist)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupAttribute", GoGetter: "AttrSecurityIpGroupAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupName", GoGetter: "AttrSecurityIpGroupName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IWhitelist{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.Instance",
		reflect.TypeOf((*Instance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
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
			j := jsiiProxy_Instance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IInstance)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.InstanceProps",
		reflect.TypeOf((*InstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.PrepayInstance",
		reflect.TypeOf((*PrepayInstance)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
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
			j := jsiiProxy_PrepayInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IPrepayInstance)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.PrepayInstanceProps",
		reflect.TypeOf((*PrepayInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosAccount",
		reflect.TypeOf((*RosAccount)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "accountDescription", GoGetter: "AccountDescription"},
			_jsii_.MemberProperty{JsiiProperty: "accountName", GoGetter: "AccountName"},
			_jsii_.MemberProperty{JsiiProperty: "accountPassword", GoGetter: "AccountPassword"},
			_jsii_.MemberProperty{JsiiProperty: "accountPrivilege", GoGetter: "AccountPrivilege"},
			_jsii_.MemberProperty{JsiiProperty: "accountType", GoGetter: "AccountType"},
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
			_jsii_.MemberProperty{JsiiProperty: "attrAccountName", GoGetter: "AttrAccountName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
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
			j := jsiiProxy_RosAccount{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosAccountProps",
		reflect.TypeOf((*RosAccountProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosAuditLogConfig",
		reflect.TypeOf((*RosAuditLogConfig)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
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
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "retention", GoGetter: "Retention"},
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
			j := jsiiProxy_RosAuditLogConfig{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosAuditLogConfigProps",
		reflect.TypeOf((*RosAuditLogConfigProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosConnection",
		reflect.TypeOf((*RosConnection)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionString", GoGetter: "AttrConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "connectionStringPrefix", GoGetter: "ConnectionStringPrefix"},
			_jsii_.MemberProperty{JsiiProperty: "connectionType", GoGetter: "ConnectionType"},
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
			_jsii_.MemberProperty{JsiiProperty: "port", GoGetter: "Port"},
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
			j := jsiiProxy_RosConnection{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosConnectionProps",
		reflect.TypeOf((*RosConnectionProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosInstance",
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
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewDuration", GoGetter: "AutoRenewDuration"},
			_jsii_.MemberProperty{JsiiProperty: "backupPolicy", GoGetter: "BackupPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "chargeType", GoGetter: "ChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deletionForce", GoGetter: "DeletionForce"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "engineVersion", GoGetter: "EngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "evictionPolicy", GoGetter: "EvictionPolicy"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceClass", GoGetter: "InstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "instanceMaintainTime", GoGetter: "InstanceMaintainTime"},
			_jsii_.MemberProperty{JsiiProperty: "instanceName", GoGetter: "InstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodeType", GoGetter: "NodeType"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "password", GoGetter: "Password"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "periodUnit", GoGetter: "PeriodUnit"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "productType", GoGetter: "ProductType"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "secondaryZoneId", GoGetter: "SecondaryZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroupId", GoGetter: "SecurityGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "shardCount", GoGetter: "ShardCount"},
			_jsii_.MemberProperty{JsiiProperty: "sslEnabled", GoGetter: "SslEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "tairConfig", GoGetter: "TairConfig"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vpcPasswordFree", GoGetter: "VpcPasswordFree"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitchId", GoGetter: "VSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "zoneId", GoGetter: "ZoneId"},
		},
		func() interface{} {
			j := jsiiProxy_RosInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty",
		reflect.TypeOf((*RosInstance_BackupPolicyProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty",
		reflect.TypeOf((*RosInstance_ClassicInnerConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty",
		reflect.TypeOf((*RosInstance_ConnectionsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty",
		reflect.TypeOf((*RosInstance_DirectConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty",
		reflect.TypeOf((*RosInstance_InstanceMaintainTimeProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty",
		reflect.TypeOf((*RosInstance_PublicConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.TagsProperty",
		reflect.TypeOf((*RosInstance_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.TairConfigProperty",
		reflect.TypeOf((*RosInstance_TairConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty",
		reflect.TypeOf((*RosInstance_VpcPrivateConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosInstanceProps",
		reflect.TypeOf((*RosInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosPrepayInstance",
		reflect.TypeOf((*RosPrepayInstance)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrArchitectureType", GoGetter: "AttrArchitectureType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidth", GoGetter: "AttrBandwidth"},
			_jsii_.MemberProperty{JsiiProperty: "attrCapacity", GoGetter: "AttrCapacity"},
			_jsii_.MemberProperty{JsiiProperty: "attrChargeType", GoGetter: "AttrChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionPort", GoGetter: "AttrClassicInnerConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrClassicInnerConnectionString", GoGetter: "AttrClassicInnerConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnectionDomain", GoGetter: "AttrConnectionDomain"},
			_jsii_.MemberProperty{JsiiProperty: "attrConnections", GoGetter: "AttrConnections"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionPort", GoGetter: "AttrDirectConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrDirectConnectionString", GoGetter: "AttrDirectConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrEngineVersion", GoGetter: "AttrEngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrHasRenewChangeOrder", GoGetter: "AttrHasRenewChangeOrder"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceClass", GoGetter: "AttrInstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceId", GoGetter: "AttrInstanceId"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceName", GoGetter: "AttrInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "attrInstanceType", GoGetter: "AttrInstanceType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNetworkType", GoGetter: "AttrNetworkType"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodeType", GoGetter: "AttrNodeType"},
			_jsii_.MemberProperty{JsiiProperty: "attrOrderId", GoGetter: "AttrOrderId"},
			_jsii_.MemberProperty{JsiiProperty: "attrPackageType", GoGetter: "AttrPackageType"},
			_jsii_.MemberProperty{JsiiProperty: "attrPort", GoGetter: "AttrPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateIp", GoGetter: "AttrPrivateIp"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionPort", GoGetter: "AttrPublicConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrPublicConnectionString", GoGetter: "AttrPublicConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrQps", GoGetter: "AttrQps"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionPort", GoGetter: "AttrVpcPrivateConnectionPort"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcPrivateConnectionString", GoGetter: "AttrVpcPrivateConnectionString"},
			_jsii_.MemberProperty{JsiiProperty: "attrVSwitchId", GoGetter: "AttrVSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneId", GoGetter: "AttrZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "autoPay", GoGetter: "AutoPay"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewDuration", GoGetter: "AutoRenewDuration"},
			_jsii_.MemberProperty{JsiiProperty: "backupPolicy", GoGetter: "BackupPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "connections", GoGetter: "Connections"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deletionForce", GoGetter: "DeletionForce"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "engineVersion", GoGetter: "EngineVersion"},
			_jsii_.MemberProperty{JsiiProperty: "evictionPolicy", GoGetter: "EvictionPolicy"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "instanceClass", GoGetter: "InstanceClass"},
			_jsii_.MemberProperty{JsiiProperty: "instanceMaintainTime", GoGetter: "InstanceMaintainTime"},
			_jsii_.MemberProperty{JsiiProperty: "instanceName", GoGetter: "InstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodeType", GoGetter: "NodeType"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "password", GoGetter: "Password"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "periodUnit", GoGetter: "PeriodUnit"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "productType", GoGetter: "ProductType"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "secondaryZoneId", GoGetter: "SecondaryZoneId"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroupId", GoGetter: "SecurityGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "shardCount", GoGetter: "ShardCount"},
			_jsii_.MemberProperty{JsiiProperty: "sslEnabled", GoGetter: "SslEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "tairConfig", GoGetter: "TairConfig"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vpcPasswordFree", GoGetter: "VpcPasswordFree"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitchId", GoGetter: "VSwitchId"},
			_jsii_.MemberProperty{JsiiProperty: "zoneId", GoGetter: "ZoneId"},
		},
		func() interface{} {
			j := jsiiProxy_RosPrepayInstance{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.BackupPolicyProperty",
		reflect.TypeOf((*RosPrepayInstance_BackupPolicyProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.ClassicInnerConnectionProperty",
		reflect.TypeOf((*RosPrepayInstance_ClassicInnerConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.ConnectionsProperty",
		reflect.TypeOf((*RosPrepayInstance_ConnectionsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.DirectConnectionProperty",
		reflect.TypeOf((*RosPrepayInstance_DirectConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.InstanceMaintainTimeProperty",
		reflect.TypeOf((*RosPrepayInstance_InstanceMaintainTimeProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.PublicConnectionProperty",
		reflect.TypeOf((*RosPrepayInstance_PublicConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.TagsProperty",
		reflect.TypeOf((*RosPrepayInstance_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.TairConfigProperty",
		reflect.TypeOf((*RosPrepayInstance_TairConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstance.VpcPrivateConnectionProperty",
		reflect.TypeOf((*RosPrepayInstance_VpcPrivateConnectionProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosPrepayInstanceProps",
		reflect.TypeOf((*RosPrepayInstanceProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.RosWhitelist",
		reflect.TypeOf((*RosWhitelist)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupAttribute", GoGetter: "AttrSecurityIpGroupAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupName", GoGetter: "AttrSecurityIpGroupName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
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
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "securityIpGroupAttribute", GoGetter: "SecurityIpGroupAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "securityIpGroupName", GoGetter: "SecurityIpGroupName"},
			_jsii_.MemberProperty{JsiiProperty: "securityIps", GoGetter: "SecurityIps"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosWhitelist{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.RosWhitelistProps",
		reflect.TypeOf((*RosWhitelistProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-redis.Whitelist",
		reflect.TypeOf((*Whitelist)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupAttribute", GoGetter: "AttrSecurityIpGroupAttribute"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIpGroupName", GoGetter: "AttrSecurityIpGroupName"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityIps", GoGetter: "AttrSecurityIps"},
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
			j := jsiiProxy_Whitelist{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IWhitelist)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-redis.WhitelistProps",
		reflect.TypeOf((*WhitelistProps)(nil)).Elem(),
	)
}
