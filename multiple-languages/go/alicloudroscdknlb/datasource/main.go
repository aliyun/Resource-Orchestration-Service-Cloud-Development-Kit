package datasource

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-nlb.datasource.ILoadBalancer",
		reflect.TypeOf((*ILoadBalancer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrAddressIpVersion", GoGetter: "AttrAddressIpVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrAddressType", GoGetter: "AttrAddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidthPackageId", GoGetter: "AttrBandwidthPackageId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCps", GoGetter: "AttrCps"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrCrossZoneEnabled", GoGetter: "AttrCrossZoneEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrDeletionProtectionConfig", GoGetter: "AttrDeletionProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrDnsName", GoGetter: "AttrDnsName"},
			_jsii_.MemberProperty{JsiiProperty: "attrIpv6AddressType", GoGetter: "AttrIpv6AddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBillingConfig", GoGetter: "AttrLoadBalancerBillingConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBusinessStatus", GoGetter: "AttrLoadBalancerBusinessStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerId", GoGetter: "AttrLoadBalancerId"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerName", GoGetter: "AttrLoadBalancerName"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerStatus", GoGetter: "AttrLoadBalancerStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerType", GoGetter: "AttrLoadBalancerType"},
			_jsii_.MemberProperty{JsiiProperty: "attrModificationProtectionConfig", GoGetter: "AttrModificationProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrOperationLocks", GoGetter: "AttrOperationLocks"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionId", GoGetter: "AttrRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityGroupIds", GoGetter: "AttrSecurityGroupIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneMappings", GoGetter: "AttrZoneMappings"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ILoadBalancer{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-nlb.datasource.ILoadBalancers",
		reflect.TypeOf((*ILoadBalancers)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerIds", GoGetter: "AttrLoadBalancerIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancers", GoGetter: "AttrLoadBalancers"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_ILoadBalancers{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-nlb.datasource.LoadBalancer",
		reflect.TypeOf((*LoadBalancer)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrAddressIpVersion", GoGetter: "AttrAddressIpVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrAddressType", GoGetter: "AttrAddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidthPackageId", GoGetter: "AttrBandwidthPackageId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCps", GoGetter: "AttrCps"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrCrossZoneEnabled", GoGetter: "AttrCrossZoneEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrDeletionProtectionConfig", GoGetter: "AttrDeletionProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrDnsName", GoGetter: "AttrDnsName"},
			_jsii_.MemberProperty{JsiiProperty: "attrIpv6AddressType", GoGetter: "AttrIpv6AddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBillingConfig", GoGetter: "AttrLoadBalancerBillingConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBusinessStatus", GoGetter: "AttrLoadBalancerBusinessStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerId", GoGetter: "AttrLoadBalancerId"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerName", GoGetter: "AttrLoadBalancerName"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerStatus", GoGetter: "AttrLoadBalancerStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerType", GoGetter: "AttrLoadBalancerType"},
			_jsii_.MemberProperty{JsiiProperty: "attrModificationProtectionConfig", GoGetter: "AttrModificationProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrOperationLocks", GoGetter: "AttrOperationLocks"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionId", GoGetter: "AttrRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityGroupIds", GoGetter: "AttrSecurityGroupIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneMappings", GoGetter: "AttrZoneMappings"},
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
			j := jsiiProxy_LoadBalancer{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ILoadBalancer)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-nlb.datasource.LoadBalancerProps",
		reflect.TypeOf((*LoadBalancerProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-nlb.datasource.LoadBalancers",
		reflect.TypeOf((*LoadBalancers)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerIds", GoGetter: "AttrLoadBalancerIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancers", GoGetter: "AttrLoadBalancers"},
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
			j := jsiiProxy_LoadBalancers{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_ILoadBalancers)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps",
		reflect.TypeOf((*LoadBalancersProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancer",
		reflect.TypeOf((*RosLoadBalancer)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrAddressIpVersion", GoGetter: "AttrAddressIpVersion"},
			_jsii_.MemberProperty{JsiiProperty: "attrAddressType", GoGetter: "AttrAddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrBandwidthPackageId", GoGetter: "AttrBandwidthPackageId"},
			_jsii_.MemberProperty{JsiiProperty: "attrCps", GoGetter: "AttrCps"},
			_jsii_.MemberProperty{JsiiProperty: "attrCreateTime", GoGetter: "AttrCreateTime"},
			_jsii_.MemberProperty{JsiiProperty: "attrCrossZoneEnabled", GoGetter: "AttrCrossZoneEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "attrDeletionProtectionConfig", GoGetter: "AttrDeletionProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrDnsName", GoGetter: "AttrDnsName"},
			_jsii_.MemberProperty{JsiiProperty: "attrIpv6AddressType", GoGetter: "AttrIpv6AddressType"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBillingConfig", GoGetter: "AttrLoadBalancerBillingConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerBusinessStatus", GoGetter: "AttrLoadBalancerBusinessStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerId", GoGetter: "AttrLoadBalancerId"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerName", GoGetter: "AttrLoadBalancerName"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerStatus", GoGetter: "AttrLoadBalancerStatus"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerType", GoGetter: "AttrLoadBalancerType"},
			_jsii_.MemberProperty{JsiiProperty: "attrModificationProtectionConfig", GoGetter: "AttrModificationProtectionConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrOperationLocks", GoGetter: "AttrOperationLocks"},
			_jsii_.MemberProperty{JsiiProperty: "attrRegionId", GoGetter: "AttrRegionId"},
			_jsii_.MemberProperty{JsiiProperty: "attrResourceGroupId", GoGetter: "AttrResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrSecurityGroupIds", GoGetter: "AttrSecurityGroupIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrTags", GoGetter: "AttrTags"},
			_jsii_.MemberProperty{JsiiProperty: "attrVpcId", GoGetter: "AttrVpcId"},
			_jsii_.MemberProperty{JsiiProperty: "attrZoneMappings", GoGetter: "AttrZoneMappings"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerId", GoGetter: "LoadBalancerId"},
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
			j := jsiiProxy_RosLoadBalancer{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancerProps",
		reflect.TypeOf((*RosLoadBalancerProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers",
		reflect.TypeOf((*RosLoadBalancers)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "addressIpVersion", GoGetter: "AddressIpVersion"},
			_jsii_.MemberProperty{JsiiProperty: "addressType", GoGetter: "AddressType"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancerIds", GoGetter: "AttrLoadBalancerIds"},
			_jsii_.MemberProperty{JsiiProperty: "attrLoadBalancers", GoGetter: "AttrLoadBalancers"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "ipv6AddressType", GoGetter: "Ipv6AddressType"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerBussinessStatus", GoGetter: "LoadBalancerBussinessStatus"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerIds", GoGetter: "LoadBalancerIds"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerNames", GoGetter: "LoadBalancerNames"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerStatus", GoGetter: "LoadBalancerStatus"},
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
			_jsii_.MemberProperty{JsiiProperty: "vpcIds", GoGetter: "VpcIds"},
			_jsii_.MemberProperty{JsiiProperty: "zoneId", GoGetter: "ZoneId"},
		},
		func() interface{} {
			j := jsiiProxy_RosLoadBalancers{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers.TagsProperty",
		reflect.TypeOf((*RosLoadBalancers_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-nlb.datasource.RosLoadBalancersProps",
		reflect.TypeOf((*RosLoadBalancersProps)(nil)).Elem(),
	)
}
