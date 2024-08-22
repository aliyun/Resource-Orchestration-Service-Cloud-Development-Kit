// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkcs

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ASKCluster",
		reflect.TypeOf((*ASKCluster)(nil)).Elem(),
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
			j := jsiiProxy_ASKCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ASKClusterProps",
		reflect.TypeOf((*ASKClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.AnyCluster",
		reflect.TypeOf((*AnyCluster)(nil)).Elem(),
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
			j := jsiiProxy_AnyCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.AnyClusterProps",
		reflect.TypeOf((*AnyClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ClusterAddons",
		reflect.TypeOf((*ClusterAddons)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
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
			j := jsiiProxy_ClusterAddons{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ClusterAddonsProps",
		reflect.TypeOf((*ClusterAddonsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ClusterApplication",
		reflect.TypeOf((*ClusterApplication)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
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
			j := jsiiProxy_ClusterApplication{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ClusterApplicationProps",
		reflect.TypeOf((*ClusterApplicationProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ClusterHelmApplication",
		reflect.TypeOf((*ClusterHelmApplication)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
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
			j := jsiiProxy_ClusterHelmApplication{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ClusterHelmApplicationProps",
		reflect.TypeOf((*ClusterHelmApplicationProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ClusterNodePool",
		reflect.TypeOf((*ClusterNodePool)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrNodePoolId", GoGetter: "AttrNodePoolId"},
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
			j := jsiiProxy_ClusterNodePool{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ClusterNodePoolProps",
		reflect.TypeOf((*ClusterNodePoolProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.GrantPermissions",
		reflect.TypeOf((*GrantPermissions)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
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
			j := jsiiProxy_GrantPermissions{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.GrantPermissionsProps",
		reflect.TypeOf((*GrantPermissionsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.KubernetesCluster",
		reflect.TypeOf((*KubernetesCluster)(nil)).Elem(),
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
			j := jsiiProxy_KubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.KubernetesClusterProps",
		reflect.TypeOf((*KubernetesClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ManagedEdgeKubernetesCluster",
		reflect.TypeOf((*ManagedEdgeKubernetesCluster)(nil)).Elem(),
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
			j := jsiiProxy_ManagedEdgeKubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps",
		reflect.TypeOf((*ManagedEdgeKubernetesClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.ManagedKubernetesCluster",
		reflect.TypeOf((*ManagedKubernetesCluster)(nil)).Elem(),
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
			j := jsiiProxy_ManagedKubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps",
		reflect.TypeOf((*ManagedKubernetesClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosASKCluster",
		reflect.TypeOf((*RosASKCluster)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "kubernetesVersion", GoGetter: "KubernetesVersion"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "privateZone", GoGetter: "PrivateZone"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroupId", GoGetter: "SecurityGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "serviceCidr", GoGetter: "ServiceCidr"},
			_jsii_.MemberProperty{JsiiProperty: "serviceDiscoveryTypes", GoGetter: "ServiceDiscoveryTypes"},
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
			j := jsiiProxy_RosASKCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosASKCluster.AddonsProperty",
		reflect.TypeOf((*RosASKCluster_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosASKCluster.TagsProperty",
		reflect.TypeOf((*RosASKCluster_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosASKClusterProps",
		reflect.TypeOf((*RosASKClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosAnyCluster",
		reflect.TypeOf((*RosAnyCluster)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "clusterConfig", GoGetter: "ClusterConfig"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
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
			j := jsiiProxy_RosAnyCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosAnyClusterProps",
		reflect.TypeOf((*RosAnyClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosClusterAddons",
		reflect.TypeOf((*RosClusterAddons)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
			_jsii_.MemberProperty{JsiiProperty: "clusterId", GoGetter: "ClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "installedIgnore", GoGetter: "InstalledIgnore"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rolePolicy", GoGetter: "RolePolicy"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "validationMode", GoGetter: "ValidationMode"},
			_jsii_.MemberProperty{JsiiProperty: "waitUntil", GoGetter: "WaitUntil"},
		},
		func() interface{} {
			j := jsiiProxy_RosClusterAddons{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterAddons.AddonsProperty",
		reflect.TypeOf((*RosClusterAddons_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterAddons.WaitUntilProperty",
		reflect.TypeOf((*RosClusterAddons_WaitUntilProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterAddonsProps",
		reflect.TypeOf((*RosClusterAddonsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosClusterApplication",
		reflect.TypeOf((*RosClusterApplication)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
			_jsii_.MemberProperty{JsiiProperty: "clusterId", GoGetter: "ClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "defaultNamespace", GoGetter: "DefaultNamespace"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
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
			_jsii_.MemberProperty{JsiiProperty: "rolePolicy", GoGetter: "RolePolicy"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberProperty{JsiiProperty: "stage", GoGetter: "Stage"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "validationMode", GoGetter: "ValidationMode"},
			_jsii_.MemberProperty{JsiiProperty: "waitUntil", GoGetter: "WaitUntil"},
			_jsii_.MemberProperty{JsiiProperty: "yamlContent", GoGetter: "YamlContent"},
		},
		func() interface{} {
			j := jsiiProxy_RosClusterApplication{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterApplication.WaitUntilProperty",
		reflect.TypeOf((*RosClusterApplication_WaitUntilProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterApplicationProps",
		reflect.TypeOf((*RosClusterApplicationProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosClusterHelmApplication",
		reflect.TypeOf((*RosClusterHelmApplication)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrClusterId", GoGetter: "AttrClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "attrWaitUntilData", GoGetter: "AttrWaitUntilData"},
			_jsii_.MemberProperty{JsiiProperty: "chartUrl", GoGetter: "ChartUrl"},
			_jsii_.MemberProperty{JsiiProperty: "chartValues", GoGetter: "ChartValues"},
			_jsii_.MemberProperty{JsiiProperty: "clusterId", GoGetter: "ClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "credential", GoGetter: "Credential"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "namespace", GoGetter: "Namespace"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rolePolicy", GoGetter: "RolePolicy"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "validationMode", GoGetter: "ValidationMode"},
			_jsii_.MemberProperty{JsiiProperty: "waitUntil", GoGetter: "WaitUntil"},
		},
		func() interface{} {
			j := jsiiProxy_RosClusterHelmApplication{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterHelmApplication.CredentialProperty",
		reflect.TypeOf((*RosClusterHelmApplication_CredentialProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterHelmApplication.WaitUntilProperty",
		reflect.TypeOf((*RosClusterHelmApplication_WaitUntilProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterHelmApplicationProps",
		reflect.TypeOf((*RosClusterHelmApplicationProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosClusterNodePool",
		reflect.TypeOf((*RosClusterNodePool)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "attrNodePoolId", GoGetter: "AttrNodePoolId"},
			_jsii_.MemberProperty{JsiiProperty: "autoScaling", GoGetter: "AutoScaling"},
			_jsii_.MemberProperty{JsiiProperty: "clusterId", GoGetter: "ClusterId"},
			_jsii_.MemberProperty{JsiiProperty: "count", GoGetter: "Count"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "kubernetesConfig", GoGetter: "KubernetesConfig"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "management", GoGetter: "Management"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodePoolInfo", GoGetter: "NodePoolInfo"},
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
			_jsii_.MemberProperty{JsiiProperty: "scalingGroup", GoGetter: "ScalingGroup"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "teeConfig", GoGetter: "TeeConfig"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosClusterNodePool{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.AutoScalingProperty",
		reflect.TypeOf((*RosClusterNodePool_AutoScalingProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.DataDisksProperty",
		reflect.TypeOf((*RosClusterNodePool_DataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.KubernetesConfigProperty",
		reflect.TypeOf((*RosClusterNodePool_KubernetesConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.LabelsProperty",
		reflect.TypeOf((*RosClusterNodePool_LabelsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.ManagementProperty",
		reflect.TypeOf((*RosClusterNodePool_ManagementProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.NodePoolInfoProperty",
		reflect.TypeOf((*RosClusterNodePool_NodePoolInfoProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.ScalingGroupProperty",
		reflect.TypeOf((*RosClusterNodePool_ScalingGroupProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.SpotPriceLimitProperty",
		reflect.TypeOf((*RosClusterNodePool_SpotPriceLimitProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.TagsProperty",
		reflect.TypeOf((*RosClusterNodePool_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.TaintsProperty",
		reflect.TypeOf((*RosClusterNodePool_TaintsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.TeeConfigProperty",
		reflect.TypeOf((*RosClusterNodePool_TeeConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePool.UpgradeConfigProperty",
		reflect.TypeOf((*RosClusterNodePool_UpgradeConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosClusterNodePoolProps",
		reflect.TypeOf((*RosClusterNodePoolProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosGrantPermissions",
		reflect.TypeOf((*RosGrantPermissions)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "permissions", GoGetter: "Permissions"},
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
			_jsii_.MemberProperty{JsiiProperty: "userId", GoGetter: "UserId"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
		},
		func() interface{} {
			j := jsiiProxy_RosGrantPermissions{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosGrantPermissions.PermissionsProperty",
		reflect.TypeOf((*RosGrantPermissions_PermissionsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosGrantPermissionsProps",
		reflect.TypeOf((*RosGrantPermissionsProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster",
		reflect.TypeOf((*RosKubernetesCluster)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "autoRenew", GoGetter: "AutoRenew"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewPeriod", GoGetter: "AutoRenewPeriod"},
			_jsii_.MemberProperty{JsiiProperty: "chargeType", GoGetter: "ChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "cloudMonitorFlags", GoGetter: "CloudMonitorFlags"},
			_jsii_.MemberProperty{JsiiProperty: "containerCidr", GoGetter: "ContainerCidr"},
			_jsii_.MemberProperty{JsiiProperty: "cpuPolicy", GoGetter: "CpuPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deleteOptions", GoGetter: "DeleteOptions"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "disableRollback", GoGetter: "DisableRollback"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "endpointPublicAccess", GoGetter: "EndpointPublicAccess"},
			_jsii_.MemberProperty{JsiiProperty: "formatDisk", GoGetter: "FormatDisk"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "isEnterpriseSecurityGroup", GoGetter: "IsEnterpriseSecurityGroup"},
			_jsii_.MemberProperty{JsiiProperty: "keepInstanceName", GoGetter: "KeepInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "keyPair", GoGetter: "KeyPair"},
			_jsii_.MemberProperty{JsiiProperty: "kubernetesVersion", GoGetter: "KubernetesVersion"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerSpec", GoGetter: "LoadBalancerSpec"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "loginPassword", GoGetter: "LoginPassword"},
			_jsii_.MemberProperty{JsiiProperty: "masterCount", GoGetter: "MasterCount"},
			_jsii_.MemberProperty{JsiiProperty: "masterDataDisk", GoGetter: "MasterDataDisk"},
			_jsii_.MemberProperty{JsiiProperty: "masterDataDisks", GoGetter: "MasterDataDisks"},
			_jsii_.MemberProperty{JsiiProperty: "masterInstanceTypes", GoGetter: "MasterInstanceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "masterSystemDiskCategory", GoGetter: "MasterSystemDiskCategory"},
			_jsii_.MemberProperty{JsiiProperty: "masterSystemDiskPerformanceLevel", GoGetter: "MasterSystemDiskPerformanceLevel"},
			_jsii_.MemberProperty{JsiiProperty: "masterSystemDiskSize", GoGetter: "MasterSystemDiskSize"},
			_jsii_.MemberProperty{JsiiProperty: "masterSystemDiskSnapshotPolicyId", GoGetter: "MasterSystemDiskSnapshotPolicyId"},
			_jsii_.MemberProperty{JsiiProperty: "masterVSwitchIds", GoGetter: "MasterVSwitchIds"},
			_jsii_.MemberProperty{JsiiProperty: "masterZoneIds", GoGetter: "MasterZoneIds"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodeCidrMask", GoGetter: "NodeCidrMask"},
			_jsii_.MemberProperty{JsiiProperty: "nodeNameMode", GoGetter: "NodeNameMode"},
			_jsii_.MemberProperty{JsiiProperty: "nodePools", GoGetter: "NodePools"},
			_jsii_.MemberProperty{JsiiProperty: "nodePortRange", GoGetter: "NodePortRange"},
			_jsii_.MemberProperty{JsiiProperty: "numOfNodes", GoGetter: "NumOfNodes"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "osType", GoGetter: "OsType"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "periodUnit", GoGetter: "PeriodUnit"},
			_jsii_.MemberProperty{JsiiProperty: "platform", GoGetter: "Platform"},
			_jsii_.MemberProperty{JsiiProperty: "podVswitchIds", GoGetter: "PodVswitchIds"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "proxyMode", GoGetter: "ProxyMode"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "runtime", GoGetter: "Runtime"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroupId", GoGetter: "SecurityGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "securityHardeningOs", GoGetter: "SecurityHardeningOs"},
			_jsii_.MemberProperty{JsiiProperty: "serviceCidr", GoGetter: "ServiceCidr"},
			_jsii_.MemberProperty{JsiiProperty: "snatEntry", GoGetter: "SnatEntry"},
			_jsii_.MemberProperty{JsiiProperty: "socEnabled", GoGetter: "SocEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "sshFlags", GoGetter: "SshFlags"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "taint", GoGetter: "Taint"},
			_jsii_.MemberProperty{JsiiProperty: "timeoutMins", GoGetter: "TimeoutMins"},
			_jsii_.MemberProperty{JsiiProperty: "timeZone", GoGetter: "TimeZone"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberProperty{JsiiProperty: "userCa", GoGetter: "UserCa"},
			_jsii_.MemberProperty{JsiiProperty: "userData", GoGetter: "UserData"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisk", GoGetter: "WorkerDataDisk"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisks", GoGetter: "WorkerDataDisks"},
			_jsii_.MemberProperty{JsiiProperty: "workerInstanceTypes", GoGetter: "WorkerInstanceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskCategory", GoGetter: "WorkerSystemDiskCategory"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskSize", GoGetter: "WorkerSystemDiskSize"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskSnapshotPolicyId", GoGetter: "WorkerSystemDiskSnapshotPolicyId"},
			_jsii_.MemberProperty{JsiiProperty: "workerVSwitchIds", GoGetter: "WorkerVSwitchIds"},
			_jsii_.MemberProperty{JsiiProperty: "workerZoneIds", GoGetter: "WorkerZoneIds"},
		},
		func() interface{} {
			j := jsiiProxy_RosKubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.AddonsProperty",
		reflect.TypeOf((*RosKubernetesCluster_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.DataDisksProperty",
		reflect.TypeOf((*RosKubernetesCluster_DataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.DeleteOptionsProperty",
		reflect.TypeOf((*RosKubernetesCluster_DeleteOptionsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.KubernetesConfigProperty",
		reflect.TypeOf((*RosKubernetesCluster_KubernetesConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.LabelsProperty",
		reflect.TypeOf((*RosKubernetesCluster_LabelsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.MasterDataDisksProperty",
		reflect.TypeOf((*RosKubernetesCluster_MasterDataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.NodePoolInfoProperty",
		reflect.TypeOf((*RosKubernetesCluster_NodePoolInfoProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.NodePoolsProperty",
		reflect.TypeOf((*RosKubernetesCluster_NodePoolsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.RuntimeProperty",
		reflect.TypeOf((*RosKubernetesCluster_RuntimeProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.ScalingGroupProperty",
		reflect.TypeOf((*RosKubernetesCluster_ScalingGroupProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.ScalingGroupTagsProperty",
		reflect.TypeOf((*RosKubernetesCluster_ScalingGroupTagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.TagsProperty",
		reflect.TypeOf((*RosKubernetesCluster_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.TaintsProperty",
		reflect.TypeOf((*RosKubernetesCluster_TaintsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesCluster.WorkerDataDisksProperty",
		reflect.TypeOf((*RosKubernetesCluster_WorkerDataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosKubernetesClusterProps",
		reflect.TypeOf((*RosKubernetesClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster",
		reflect.TypeOf((*RosManagedEdgeKubernetesCluster)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "autoRenew", GoGetter: "AutoRenew"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewPeriod", GoGetter: "AutoRenewPeriod"},
			_jsii_.MemberProperty{JsiiProperty: "chargeType", GoGetter: "ChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "cloudMonitorFlags", GoGetter: "CloudMonitorFlags"},
			_jsii_.MemberProperty{JsiiProperty: "clusterSpec", GoGetter: "ClusterSpec"},
			_jsii_.MemberProperty{JsiiProperty: "containerCidr", GoGetter: "ContainerCidr"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "disableRollback", GoGetter: "DisableRollback"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "endpointPublicAccess", GoGetter: "EndpointPublicAccess"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "isEnterpriseSecurityGroup", GoGetter: "IsEnterpriseSecurityGroup"},
			_jsii_.MemberProperty{JsiiProperty: "keyPair", GoGetter: "KeyPair"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "loginPassword", GoGetter: "LoginPassword"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodeCidrMask", GoGetter: "NodeCidrMask"},
			_jsii_.MemberProperty{JsiiProperty: "numOfNodes", GoGetter: "NumOfNodes"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "periodUnit", GoGetter: "PeriodUnit"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "profile", GoGetter: "Profile"},
			_jsii_.MemberProperty{JsiiProperty: "proxyMode", GoGetter: "ProxyMode"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "serviceCidr", GoGetter: "ServiceCidr"},
			_jsii_.MemberProperty{JsiiProperty: "snatEntry", GoGetter: "SnatEntry"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "timeoutMins", GoGetter: "TimeoutMins"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitchIds", GoGetter: "VSwitchIds"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisk", GoGetter: "WorkerDataDisk"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDiskCategory", GoGetter: "WorkerDataDiskCategory"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisks", GoGetter: "WorkerDataDisks"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDiskSize", GoGetter: "WorkerDataDiskSize"},
			_jsii_.MemberProperty{JsiiProperty: "workerInstanceTypes", GoGetter: "WorkerInstanceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskCategory", GoGetter: "WorkerSystemDiskCategory"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskSize", GoGetter: "WorkerSystemDiskSize"},
			_jsii_.MemberProperty{JsiiProperty: "zoneIds", GoGetter: "ZoneIds"},
		},
		func() interface{} {
			j := jsiiProxy_RosManagedEdgeKubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.AddonsProperty",
		reflect.TypeOf((*RosManagedEdgeKubernetesCluster_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.TagsProperty",
		reflect.TypeOf((*RosManagedEdgeKubernetesCluster_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesCluster.WorkerDataDisksProperty",
		reflect.TypeOf((*RosManagedEdgeKubernetesCluster_WorkerDataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedEdgeKubernetesClusterProps",
		reflect.TypeOf((*RosManagedEdgeKubernetesClusterProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster",
		reflect.TypeOf((*RosManagedKubernetesCluster)(nil)).Elem(),
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
			_jsii_.MemberProperty{JsiiProperty: "autoRenew", GoGetter: "AutoRenew"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewPeriod", GoGetter: "AutoRenewPeriod"},
			_jsii_.MemberProperty{JsiiProperty: "chargeType", GoGetter: "ChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "cloudMonitorFlags", GoGetter: "CloudMonitorFlags"},
			_jsii_.MemberProperty{JsiiProperty: "clusterSpec", GoGetter: "ClusterSpec"},
			_jsii_.MemberProperty{JsiiProperty: "containerCidr", GoGetter: "ContainerCidr"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "deleteOptions", GoGetter: "DeleteOptions"},
			_jsii_.MemberProperty{JsiiProperty: "deletionProtection", GoGetter: "DeletionProtection"},
			_jsii_.MemberProperty{JsiiProperty: "disableRollback", GoGetter: "DisableRollback"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "encryptionProviderKey", GoGetter: "EncryptionProviderKey"},
			_jsii_.MemberProperty{JsiiProperty: "endpointPublicAccess", GoGetter: "EndpointPublicAccess"},
			_jsii_.MemberProperty{JsiiProperty: "formatDisk", GoGetter: "FormatDisk"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "isEnterpriseSecurityGroup", GoGetter: "IsEnterpriseSecurityGroup"},
			_jsii_.MemberProperty{JsiiProperty: "keepInstanceName", GoGetter: "KeepInstanceName"},
			_jsii_.MemberProperty{JsiiProperty: "keyPair", GoGetter: "KeyPair"},
			_jsii_.MemberProperty{JsiiProperty: "kubernetesVersion", GoGetter: "KubernetesVersion"},
			_jsii_.MemberProperty{JsiiProperty: "loadBalancerSpec", GoGetter: "LoadBalancerSpec"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "loginPassword", GoGetter: "LoginPassword"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "nodeCidrMask", GoGetter: "NodeCidrMask"},
			_jsii_.MemberProperty{JsiiProperty: "nodeNameMode", GoGetter: "NodeNameMode"},
			_jsii_.MemberProperty{JsiiProperty: "nodePools", GoGetter: "NodePools"},
			_jsii_.MemberProperty{JsiiProperty: "numOfNodes", GoGetter: "NumOfNodes"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "osType", GoGetter: "OsType"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "periodUnit", GoGetter: "PeriodUnit"},
			_jsii_.MemberProperty{JsiiProperty: "platform", GoGetter: "Platform"},
			_jsii_.MemberProperty{JsiiProperty: "podVswitchIds", GoGetter: "PodVswitchIds"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "proxyMode", GoGetter: "ProxyMode"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "resourceGroupId", GoGetter: "ResourceGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "runtime", GoGetter: "Runtime"},
			_jsii_.MemberProperty{JsiiProperty: "securityGroupId", GoGetter: "SecurityGroupId"},
			_jsii_.MemberProperty{JsiiProperty: "securityHardeningOs", GoGetter: "SecurityHardeningOs"},
			_jsii_.MemberProperty{JsiiProperty: "serviceCidr", GoGetter: "ServiceCidr"},
			_jsii_.MemberProperty{JsiiProperty: "snatEntry", GoGetter: "SnatEntry"},
			_jsii_.MemberProperty{JsiiProperty: "socEnabled", GoGetter: "SocEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "tags", GoGetter: "Tags"},
			_jsii_.MemberProperty{JsiiProperty: "taint", GoGetter: "Taint"},
			_jsii_.MemberProperty{JsiiProperty: "timeoutMins", GoGetter: "TimeoutMins"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberProperty{JsiiProperty: "userData", GoGetter: "UserData"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitchIds", GoGetter: "VSwitchIds"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisk", GoGetter: "WorkerDataDisk"},
			_jsii_.MemberProperty{JsiiProperty: "workerDataDisks", GoGetter: "WorkerDataDisks"},
			_jsii_.MemberProperty{JsiiProperty: "workerInstanceTypes", GoGetter: "WorkerInstanceTypes"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskCategory", GoGetter: "WorkerSystemDiskCategory"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskPerformanceLevel", GoGetter: "WorkerSystemDiskPerformanceLevel"},
			_jsii_.MemberProperty{JsiiProperty: "workerSystemDiskSize", GoGetter: "WorkerSystemDiskSize"},
			_jsii_.MemberProperty{JsiiProperty: "zoneIds", GoGetter: "ZoneIds"},
		},
		func() interface{} {
			j := jsiiProxy_RosManagedKubernetesCluster{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.AddonsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_AddonsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DataDisksProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_DataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.DeleteOptionsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_DeleteOptionsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.KubernetesConfigProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_KubernetesConfigProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.LabelsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_LabelsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolInfoProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_NodePoolInfoProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.NodePoolsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_NodePoolsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.RuntimeProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_RuntimeProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_ScalingGroupProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.ScalingGroupTagsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_ScalingGroupTagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TagsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_TagsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.TaintsProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_TaintsProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesCluster.WorkerDataDisksProperty",
		reflect.TypeOf((*RosManagedKubernetesCluster_WorkerDataDisksProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-cs.RosManagedKubernetesClusterProps",
		reflect.TypeOf((*RosManagedKubernetesClusterProps)(nil)).Elem(),
	)
}
