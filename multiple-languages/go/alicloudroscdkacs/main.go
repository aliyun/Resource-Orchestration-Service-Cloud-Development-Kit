// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkacs

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-acs.Cluster",
		reflect.TypeOf((*Cluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrApiServerSlbId", GoGetter: "AttrApiServerSlbId"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDefaultUserKubeConfig", GoGetter: "AttrDefaultUserKubeConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrIngressSlbId", GoGetter: "AttrIngressSlbId"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodes", GoGetter: "AttrNodes"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateUserKubConfig", GoGetter: "AttrPrivateUserKubConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingConfigurationId", GoGetter: "AttrScalingConfigurationId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingGroupId", GoGetter: "AttrScalingGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingRuleId", GoGetter: "AttrScalingRuleId"},
			_jsii_.MemberProperty{JsiiProperty: "attrTaskId", GoGetter: "AttrTaskId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWorkerRamRoleName", GoGetter: "AttrWorkerRamRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
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
			j := jsiiProxy_Cluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-acs.ClusterProps",
		reflect.TypeOf((*ClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-acs.RosCluster",
		reflect.TypeOf((*RosCluster)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDeletionOverride", GoMethod: "AddDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addDependsOn", GoMethod: "AddDependsOn"},
			_jsii_.MemberMethod{JsiiMethod: "addDesc", GoMethod: "AddDesc"},
			_jsii_.MemberMethod{JsiiMethod: "addMetaData", GoMethod: "AddMetaData"},
			_jsii_.MemberProperty{JsiiProperty: "addons", GoGetter: "Addons"},
			_jsii_.MemberMethod{JsiiMethod: "addOverride", GoMethod: "AddOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyDeletionOverride", GoMethod: "AddPropertyDeletionOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addPropertyOverride", GoMethod: "AddPropertyOverride"},
			_jsii_.MemberMethod{JsiiMethod: "addRosDependency", GoMethod: "AddRosDependency"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrApiServerSlbId", GoGetter: "AttrApiServerSlbId"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrDefaultUserKubeConfig", GoGetter: "AttrDefaultUserKubeConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrIngressSlbId", GoGetter: "AttrIngressSlbId"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodes", GoGetter: "AttrNodes"},
			_jsii_.MemberProperty{JsiiProperty: "attrPrivateUserKubConfig", GoGetter: "AttrPrivateUserKubConfig"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingConfigurationId", GoGetter: "AttrScalingConfigurationId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingGroupId", GoGetter: "AttrScalingGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "attrScalingRuleId", GoGetter: "AttrScalingRuleId"},
			_jsii_.MemberProperty{JsiiProperty: "attrTaskId", GoGetter: "AttrTaskId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWorkerRamRoleName", GoGetter: "AttrWorkerRamRoleName"},
			_jsii_.MemberProperty{JsiiProperty: "clusterSpec", GoGetter: "ClusterSpec"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "endpointPublicAccess", GoGetter: "EndpointPublicAccess"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "ipStack", GoGetter: "IpStack"},
			_jsii_.MemberProperty{JsiiProperty: "kubernetesVersion", GoGetter: "KubernetesVersion"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerSpec", GoGetter: "LoadBalancerSpec"},
			_jsii_.MemberProperty{JsiiProperty: "loggingType", GoGetter: "LoggingType"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "maintenanceWindow", GoGetter: "MaintenanceWindow"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "podVSwitchIds", GoGetter: "PodVSwitchIds"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "serviceCidr", GoGetter: "ServiceCidr"},
			_jsii_.MemberProperty{JsiiProperty: "serviceDiscoveryTypes", GoGetter: "ServiceDiscoveryTypes"},
			_jsii_.MemberProperty{JsiiProperty: "slsProjectName", GoGetter: "SlsProjectName"},
			_jsii_.MemberProperty{JsiiProperty: "snatEntry", GoGetter: "SnatEntry"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "timeZone", GoGetter: "TimeZone"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitchIds", GoGetter: "VSwitchIds"},
			_jsii_.MemberProperty{JsiiProperty: "zoneId", GoGetter: "ZoneId"},
		},
		func() interface{} {
			j := jsiiProxy_RosCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-acs.RosCluster.AddonsProperty",
		reflect.TypeOf((*RosCluster_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-acs.RosCluster.MaintenanceWindowProperty",
		reflect.TypeOf((*RosCluster_MaintenanceWindowProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-acs.RosCluster.TagsProperty",
		reflect.TypeOf((*RosCluster_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-acs.RosClusterProps",
		reflect.TypeOf((*RosClusterProps)(nil)).Elem(),
	)
}
