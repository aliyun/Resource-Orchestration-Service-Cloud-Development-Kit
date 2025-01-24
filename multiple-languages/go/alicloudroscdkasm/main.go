// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkasm

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterInterface(
		"@alicloud/ros-cdk-asm.IServiceMesh",
		reflect.TypeOf((*IServiceMesh)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "attrServiceMeshId", GoGetter: "AttrServiceMeshId"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "props", GoGetter: "Props"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
		},
		func() interface{} {
			j := jsiiProxy_IServiceMesh{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreIResource)
			return &j
		},
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-asm.RosServiceMesh",
		reflect.TypeOf((*RosServiceMesh)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberProperty{JsiiProperty: "accessLogEnabled", GoGetter: "AccessLogEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogFile", GoGetter: "AccessLogFile"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogFormat", GoGetter: "AccessLogFormat"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogProject", GoGetter: "AccessLogProject"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogServiceEnabled", GoGetter: "AccessLogServiceEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogServiceHost", GoGetter: "AccessLogServiceHost"},
			_jsii_.MemberProperty{JsiiProperty: "accessLogServicePort", GoGetter: "AccessLogServicePort"},
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
			_jsii_.MemberProperty{JsiiProperty: "apiServerLoadBalancerSpec", GoGetter: "ApiServerLoadBalancerSpec"},
			_jsii_.MemberProperty{JsiiProperty: "apiServerPublicEip", GoGetter: "ApiServerPublicEip"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrServiceMeshId", GoGetter: "AttrServiceMeshId"},
			_jsii_.MemberProperty{JsiiProperty: "auditProject", GoGetter: "AuditProject"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenew", GoGetter: "AutoRenew"},
			_jsii_.MemberProperty{JsiiProperty: "autoRenewPeriod", GoGetter: "AutoRenewPeriod"},
			_jsii_.MemberProperty{JsiiProperty: "certChain", GoGetter: "CertChain"},
			_jsii_.MemberProperty{JsiiProperty: "chargeType", GoGetter: "ChargeType"},
			_jsii_.MemberProperty{JsiiProperty: "clusterSpec", GoGetter: "ClusterSpec"},
			_jsii_.MemberProperty{JsiiProperty: "configSourceEnabled", GoGetter: "ConfigSourceEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "configSourceNacosId", GoGetter: "ConfigSourceNacosId"},
			_jsii_.MemberProperty{JsiiProperty: "controlPlaneLogEnabled", GoGetter: "ControlPlaneLogEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "controlPlaneLogProject", GoGetter: "ControlPlaneLogProject"},
			_jsii_.MemberProperty{JsiiProperty: "crAggregationEnabled", GoGetter: "CrAggregationEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "creationStack", GoGetter: "CreationStack"},
			_jsii_.MemberProperty{JsiiProperty: "customizedPrometheus", GoGetter: "CustomizedPrometheus"},
			_jsii_.MemberProperty{JsiiProperty: "customizedZipkin", GoGetter: "CustomizedZipkin"},
			_jsii_.MemberProperty{JsiiProperty: "dnsProxyingEnabled", GoGetter: "DnsProxyingEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "dubboFilterEnabled", GoGetter: "DubboFilterEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "edition", GoGetter: "Edition"},
			_jsii_.MemberProperty{JsiiProperty: "enableAcmg", GoGetter: "EnableAcmg"},
			_jsii_.MemberProperty{JsiiProperty: "enableAmbient", GoGetter: "EnableAmbient"},
			_jsii_.MemberProperty{JsiiProperty: "enableAudit", GoGetter: "EnableAudit"},
			_jsii_.MemberProperty{JsiiProperty: "enableCrHistory", GoGetter: "EnableCrHistory"},
			_jsii_.MemberProperty{JsiiProperty: "enableResourcePropertyConstraint", GoGetter: "EnableResourcePropertyConstraint"},
			_jsii_.MemberProperty{JsiiProperty: "enableSdsServer", GoGetter: "EnableSdsServer"},
			_jsii_.MemberProperty{JsiiProperty: "excludeInboundPorts", GoGetter: "ExcludeInboundPorts"},
			_jsii_.MemberProperty{JsiiProperty: "excludeIpRanges", GoGetter: "ExcludeIpRanges"},
			_jsii_.MemberProperty{JsiiProperty: "excludeOutboundPorts", GoGetter: "ExcludeOutboundPorts"},
			_jsii_.MemberProperty{JsiiProperty: "existingCaCert", GoGetter: "ExistingCaCert"},
			_jsii_.MemberProperty{JsiiProperty: "existingCaKey", GoGetter: "ExistingCaKey"},
			_jsii_.MemberProperty{JsiiProperty: "existingCaType", GoGetter: "ExistingCaType"},
			_jsii_.MemberProperty{JsiiProperty: "existingRootCaCert", GoGetter: "ExistingRootCaCert"},
			_jsii_.MemberProperty{JsiiProperty: "existingRootCaKey", GoGetter: "ExistingRootCaKey"},
			_jsii_.MemberMethod{JsiiMethod: "fetchCondition", GoMethod: "FetchCondition"},
			_jsii_.MemberMethod{JsiiMethod: "fetchDesc", GoMethod: "FetchDesc"},
			_jsii_.MemberMethod{JsiiMethod: "fetchRosDependency", GoMethod: "FetchRosDependency"},
			_jsii_.MemberProperty{JsiiProperty: "filterGatewayClusterConfig", GoGetter: "FilterGatewayClusterConfig"},
			_jsii_.MemberProperty{JsiiProperty: "gatewayApiEnabled", GoGetter: "GatewayApiEnabled"},
			_jsii_.MemberMethod{JsiiMethod: "getAtt", GoMethod: "GetAtt"},
			_jsii_.MemberProperty{JsiiProperty: "guestCluster", GoGetter: "GuestCluster"},
			_jsii_.MemberProperty{JsiiProperty: "includeIpRanges", GoGetter: "IncludeIpRanges"},
			_jsii_.MemberProperty{JsiiProperty: "istioVersion", GoGetter: "IstioVersion"},
			_jsii_.MemberProperty{JsiiProperty: "kialiEnabled", GoGetter: "KialiEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "localityLbConf", GoGetter: "LocalityLbConf"},
			_jsii_.MemberProperty{JsiiProperty: "localityLoadBalancing", GoGetter: "LocalityLoadBalancing"},
			_jsii_.MemberProperty{JsiiProperty: "logicalId", GoGetter: "LogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "mseEnabled", GoGetter: "MseEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "multiBufferEnabled", GoGetter: "MultiBufferEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "multiBufferPollDelay", GoGetter: "MultiBufferPollDelay"},
			_jsii_.MemberProperty{JsiiProperty: "mysqlFilterEnabled", GoGetter: "MysqlFilterEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "name", GoGetter: "Name"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberMethod{JsiiMethod: "onPrepare", GoMethod: "OnPrepare"},
			_jsii_.MemberMethod{JsiiMethod: "onSynthesize", GoMethod: "OnSynthesize"},
			_jsii_.MemberMethod{JsiiMethod: "onValidate", GoMethod: "OnValidate"},
			_jsii_.MemberProperty{JsiiProperty: "opa", GoGetter: "Opa"},
			_jsii_.MemberProperty{JsiiProperty: "opaEnabled", GoGetter: "OpaEnabled"},
			_jsii_.MemberProperty{JsiiProperty: "outboundTrafficPolicy", GoGetter: "OutboundTrafficPolicy"},
			_jsii_.MemberMethod{JsiiMethod: "overrideLogicalId", GoMethod: "OverrideLogicalId"},
			_jsii_.MemberProperty{JsiiProperty: "period", GoGetter: "Period"},
			_jsii_.MemberProperty{JsiiProperty: "pilotLoadBalancerSpec", GoGetter: "PilotLoadBalancerSpec"},
			_jsii_.MemberProperty{JsiiProperty: "pilotPublicEip", GoGetter: "PilotPublicEip"},
			_jsii_.MemberProperty{JsiiProperty: "playgroundScene", GoGetter: "PlaygroundScene"},
			_jsii_.MemberMethod{JsiiMethod: "prepare", GoMethod: "Prepare"},
			_jsii_.MemberProperty{JsiiProperty: "prometheusUrl", GoGetter: "PrometheusUrl"},
			_jsii_.MemberProperty{JsiiProperty: "proxy", GoGetter: "Proxy"},
			_jsii_.MemberProperty{JsiiProperty: "ref", GoGetter: "Ref"},
			_jsii_.MemberMethod{JsiiMethod: "renderProperties", GoMethod: "RenderProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosOptions", GoGetter: "RosOptions"},
			_jsii_.MemberProperty{JsiiProperty: "rosProperties", GoGetter: "RosProperties"},
			_jsii_.MemberProperty{JsiiProperty: "rosResourceType", GoGetter: "RosResourceType"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberMethod{JsiiMethod: "synthesize", GoMethod: "Synthesize"},
			_jsii_.MemberProperty{JsiiProperty: "telemetry", GoGetter: "Telemetry"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
			_jsii_.MemberProperty{JsiiProperty: "traceSampling", GoGetter: "TraceSampling"},
			_jsii_.MemberProperty{JsiiProperty: "tracing", GoGetter: "Tracing"},
			_jsii_.MemberProperty{JsiiProperty: "updatedProperites", GoGetter: "UpdatedProperites"},
			_jsii_.MemberProperty{JsiiProperty: "useExistingCa", GoGetter: "UseExistingCa"},
			_jsii_.MemberMethod{JsiiMethod: "validate", GoMethod: "Validate"},
			_jsii_.MemberMethod{JsiiMethod: "validateProperties", GoMethod: "ValidateProperties"},
			_jsii_.MemberProperty{JsiiProperty: "vpcId", GoGetter: "VpcId"},
			_jsii_.MemberProperty{JsiiProperty: "vSwitches", GoGetter: "VSwitches"},
			_jsii_.MemberProperty{JsiiProperty: "webAssemblyFilterEnabled", GoGetter: "WebAssemblyFilterEnabled"},
		},
		func() interface{} {
			j := jsiiProxy_RosServiceMesh{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreRosResource)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty",
		reflect.TypeOf((*RosServiceMesh_OPAProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty",
		reflect.TypeOf((*RosServiceMesh_ProxyProperty)(nil)).Elem(),
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-asm.RosServiceMeshProps",
		reflect.TypeOf((*RosServiceMeshProps)(nil)).Elem(),
	)
	_jsii_.RegisterClass(
		"@alicloud/ros-cdk-asm.ServiceMesh",
		reflect.TypeOf((*ServiceMesh)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addCondition", GoMethod: "AddCondition"},
			_jsii_.MemberMethod{JsiiMethod: "addCount", GoMethod: "AddCount"},
			_jsii_.MemberMethod{JsiiMethod: "addDependency", GoMethod: "AddDependency"},
			_jsii_.MemberMethod{JsiiMethod: "addResourceDesc", GoMethod: "AddResourceDesc"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "attrServiceMeshId", GoGetter: "AttrServiceMeshId"},
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
			j := jsiiProxy_ServiceMesh{}
			_jsii_.InitJsiiProxy(&j.Type__alicloudroscdkcoreResource)
			_jsii_.InitJsiiProxy(&j.jsiiProxy_IServiceMesh)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"@alicloud/ros-cdk-asm.ServiceMeshProps",
		reflect.TypeOf((*ServiceMeshProps)(nil)).Elem(),
	)
}
