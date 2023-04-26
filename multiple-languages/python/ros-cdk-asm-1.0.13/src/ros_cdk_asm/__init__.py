'''
## Aliyun ROS ASM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ASM from '@alicloud/ros-cdk-asm';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class RosServiceMesh(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-asm.RosServiceMesh",
):
    '''A ROS template type:  ``ALIYUN::ASM::ServiceMesh``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceMeshProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ASM::ServiceMesh``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f764cb53e465abe51eecebd06f0609ce505526274f68e09303ab7385b4adb8bb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b4842ba05bc49b125705a4f65a06a87e96ca3725efde3ff2945838b7517c82e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceMeshId")
    def attr_service_mesh_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceMeshId: The ID of the ASM instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceMeshId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a90a77fb03c9aaa6e53cad21a4afe1654bd5f9adb3d04fcc0794e20d149bd70c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bccc89ca5d540cf6438c24292d3ccb8c3fe44b4d5db0f9ffe937b273ffefdf1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitches")
    def v_switches(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitches"))

    @v_switches.setter
    def v_switches(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c213ea29416f06ffa7e33e10b95c4c16b7955d7f89f7bddd450aba3d6f8a3843)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitches", value)

    @builtins.property
    @jsii.member(jsii_name="apiServerPublicEip")
    def api_server_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        apiServerPublicEip: Specifies whether to expose the API server to the Internet.
        Valid values: true and false. Default value: false.
        If you do not set this parameter, the API server of clusters added to the ASM instance
        cannot be accessed from the Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiServerPublicEip"))

    @api_server_public_eip.setter
    def api_server_public_eip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f03229ee8a85ae086f1daa9768e7b541a29d86e6232a44fcaafe4b2a075dbdef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiServerPublicEip", value)

    @builtins.property
    @jsii.member(jsii_name="auditProject")
    def audit_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        auditProject: The name of the Log Service project that is used for mesh audit.
        Default value: mesh-log-{meshId}.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "auditProject"))

    @audit_project.setter
    def audit_project(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__841cf4ce88a015660dd471f748f010040cfb283c1e934b4649f5182970154f6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "auditProject", value)

    @builtins.property
    @jsii.member(jsii_name="customizedZipkin")
    def customized_zipkin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customizedZipkin: Specifies whether to use a user-created Zipkin system.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "customizedZipkin"))

    @customized_zipkin.setter
    def customized_zipkin(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1ece318baee321d850a185a0489ecdde7710ff53d54c4ef3ff15eaac63eaa60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customizedZipkin", value)

    @builtins.property
    @jsii.member(jsii_name="enableAudit")
    def enable_audit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
        that you have activated Alibaba Cloud Log Service.
        Valid values: true and false. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAudit"))

    @enable_audit.setter
    def enable_audit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0dffad68eb690dc5b760ad154d5784fcc03eb8bc0a3b7d99270e10f52ce39f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAudit", value)

    @builtins.property
    @jsii.member(jsii_name="includeIpRanges")
    def include_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
        to access external services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "includeIpRanges"))

    @include_ip_ranges.setter
    def include_ip_ranges(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9d0cb9b4711c3b79a43c202a2e92be4196e51ede8d768b0221fc41e9ce4a43f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "includeIpRanges", value)

    @builtins.property
    @jsii.member(jsii_name="istioVersion")
    def istio_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: istioVersion: The Istio version of the ASM instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "istioVersion"))

    @istio_version.setter
    def istio_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29ee2821a691019cb3e807c7aff8b16d5d4ef550842036f94fd89c9b9095a5e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "istioVersion", value)

    @builtins.property
    @jsii.member(jsii_name="localityLoadBalancing")
    def locality_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
        Valid values: true and false. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localityLoadBalancing"))

    @locality_load_balancing.setter
    def locality_load_balancing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bc953c7bf3b7477b608bd0b3775b9b58e9fab00e01b4150c4433da3dbebb890)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localityLoadBalancing", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the ASM instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88ebccee013702f1b56ebdfb7967a753f929567c4638c796db92d59eed588ded)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="opa")
    def opa(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.OPAProperty"]]:
        '''
        :Property: opa: OPA settings.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.OPAProperty"]], jsii.get(self, "opa"))

    @opa.setter
    def opa(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.OPAProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68e2070571de1ac09ea3fe938ff0851ac736842de549624975c5c022dd5b9c09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "opa", value)

    @builtins.property
    @jsii.member(jsii_name="outboundTrafficPolicy")
    def outbound_traffic_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "outboundTrafficPolicy"))

    @outbound_traffic_policy.setter
    def outbound_traffic_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d76119bdece07a8eaea5f816b8ae7af0ef092ca32fb8cd2277d3b5ce13de55a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "outboundTrafficPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="pilotPublicEip")
    def pilot_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
        Valid values: true and false. Default value: false.
        If you do not set this parameter, only clusters in the same VPC as the ASM instance
        can access Istio Pilot of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pilotPublicEip"))

    @pilot_public_eip.setter
    def pilot_public_eip(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba2964577de6f9dddb93446044c6516b47acfe426755e02c0749cbee9455f5af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pilotPublicEip", value)

    @builtins.property
    @jsii.member(jsii_name="proxy")
    def proxy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.ProxyProperty"]]:
        '''
        :Property: proxy: Proxy settings.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.ProxyProperty"]], jsii.get(self, "proxy"))

    @proxy.setter
    def proxy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServiceMesh.ProxyProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4bec110dabe25e3e7ab0b51522f5c2f1bb571cb11cf44af57d9334327e228f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxy", value)

    @builtins.property
    @jsii.member(jsii_name="telemetry")
    def telemetry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "telemetry"))

    @telemetry.setter
    def telemetry(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__270567c73da4a628791972296c74f4da74d7c25ade1c7d2b635735296ee678b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "telemetry", value)

    @builtins.property
    @jsii.member(jsii_name="traceSampling")
    def trace_sampling(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: traceSampling: The sampling percentage of tracing.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "traceSampling"))

    @trace_sampling.setter
    def trace_sampling(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ebc9d1afe17d3fd261d093aa7f9f16c5706586550cf6c618c7c061cef35d0da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "traceSampling", value)

    @builtins.property
    @jsii.member(jsii_name="tracing")
    def tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
        that you have activated Alibaba Cloud Tracing Analysis.
        Valid values: true and false. Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tracing"))

    @tracing.setter
    def tracing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a85677a9046d74958218061e7a83de0ea9a41dc57cf5e6b19938ac307032d364)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tracing", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-asm.RosServiceMesh.OPAProperty",
        jsii_struct_bases=[],
        name_mapping={
            "opa_limit_cpu": "opaLimitCpu",
            "opa_limit_memory": "opaLimitMemory",
            "opa_log_level": "opaLogLevel",
            "opa_request_cpu": "opaRequestCpu",
            "opa_request_memory": "opaRequestMemory",
            "open_agent_policy": "openAgentPolicy",
        },
    )
    class OPAProperty:
        def __init__(
            self,
            *,
            opa_limit_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            opa_limit_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            opa_log_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            opa_request_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            opa_request_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            open_agent_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param opa_limit_cpu: 
            :param opa_limit_memory: 
            :param opa_log_level: 
            :param opa_request_cpu: 
            :param opa_request_memory: 
            :param open_agent_policy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__82faf43833e0ef6a44e5ab9d2d7da8ee99b622f31f94cdd92a660785576fbe4f)
                check_type(argname="argument opa_limit_cpu", value=opa_limit_cpu, expected_type=type_hints["opa_limit_cpu"])
                check_type(argname="argument opa_limit_memory", value=opa_limit_memory, expected_type=type_hints["opa_limit_memory"])
                check_type(argname="argument opa_log_level", value=opa_log_level, expected_type=type_hints["opa_log_level"])
                check_type(argname="argument opa_request_cpu", value=opa_request_cpu, expected_type=type_hints["opa_request_cpu"])
                check_type(argname="argument opa_request_memory", value=opa_request_memory, expected_type=type_hints["opa_request_memory"])
                check_type(argname="argument open_agent_policy", value=open_agent_policy, expected_type=type_hints["open_agent_policy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if opa_limit_cpu is not None:
                self._values["opa_limit_cpu"] = opa_limit_cpu
            if opa_limit_memory is not None:
                self._values["opa_limit_memory"] = opa_limit_memory
            if opa_log_level is not None:
                self._values["opa_log_level"] = opa_log_level
            if opa_request_cpu is not None:
                self._values["opa_request_cpu"] = opa_request_cpu
            if opa_request_memory is not None:
                self._values["opa_request_memory"] = opa_request_memory
            if open_agent_policy is not None:
                self._values["open_agent_policy"] = open_agent_policy

        @builtins.property
        def opa_limit_cpu(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: opaLimitCpu: The limit on the CPU of the OPA container.
            '''
            result = self._values.get("opa_limit_cpu")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def opa_limit_memory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: opaLimitMemory: The limit on the memory size of the OPA container.
            '''
            result = self._values.get("opa_limit_memory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def opa_log_level(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: opaLogLevel: The log level of the OPA container.
            '''
            result = self._values.get("opa_log_level")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def opa_request_cpu(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: opaRequestCpu: The number of CPU cores requested by the OPA container.
            '''
            result = self._values.get("opa_request_cpu")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def opa_request_memory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: opaRequestMemory: The size of the memory requested by the OPA container.
            '''
            result = self._values.get("opa_request_memory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def open_agent_policy(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            openAgentPolicy: Specifies whether to enable the Open Policy Agent (OPA) plug-in.
            Valid values: true and false. Default value: false.
            '''
            result = self._values.get("open_agent_policy")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OPAProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-asm.RosServiceMesh.ProxyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cluster_domain": "clusterDomain",
            "proxy_limit_cpu": "proxyLimitCpu",
            "proxy_limit_memory": "proxyLimitMemory",
            "proxy_request_cpu": "proxyRequestCpu",
            "proxy_request_memory": "proxyRequestMemory",
        },
    )
    class ProxyProperty:
        def __init__(
            self,
            *,
            cluster_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            proxy_limit_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            proxy_limit_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            proxy_request_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            proxy_request_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cluster_domain: 
            :param proxy_limit_cpu: 
            :param proxy_limit_memory: 
            :param proxy_request_cpu: 
            :param proxy_request_memory: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__25b2f5efa434a8ab0ea0f08aaeba7426945492212936cfa995c31e94d91e2131)
                check_type(argname="argument cluster_domain", value=cluster_domain, expected_type=type_hints["cluster_domain"])
                check_type(argname="argument proxy_limit_cpu", value=proxy_limit_cpu, expected_type=type_hints["proxy_limit_cpu"])
                check_type(argname="argument proxy_limit_memory", value=proxy_limit_memory, expected_type=type_hints["proxy_limit_memory"])
                check_type(argname="argument proxy_request_cpu", value=proxy_request_cpu, expected_type=type_hints["proxy_request_cpu"])
                check_type(argname="argument proxy_request_memory", value=proxy_request_memory, expected_type=type_hints["proxy_request_memory"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cluster_domain is not None:
                self._values["cluster_domain"] = cluster_domain
            if proxy_limit_cpu is not None:
                self._values["proxy_limit_cpu"] = proxy_limit_cpu
            if proxy_limit_memory is not None:
                self._values["proxy_limit_memory"] = proxy_limit_memory
            if proxy_request_cpu is not None:
                self._values["proxy_request_cpu"] = proxy_request_cpu
            if proxy_request_memory is not None:
                self._values["proxy_request_memory"] = proxy_request_memory

        @builtins.property
        def cluster_domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clusterDomain: The domain name of the cluster.
            '''
            result = self._values.get("cluster_domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def proxy_limit_cpu(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: proxyLimitCpu: The limit on the CPU of the sidecar.
            '''
            result = self._values.get("proxy_limit_cpu")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def proxy_limit_memory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: proxyLimitMemory: The limit on the memory size of the sidecar.
            '''
            result = self._values.get("proxy_limit_memory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def proxy_request_cpu(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: proxyRequestCpu: The number of CPU cores requested by the sidecar.
            '''
            result = self._values.get("proxy_request_cpu")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def proxy_request_memory(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: proxyRequestMemory: The size of the memory requested by the sidecar.
            '''
            result = self._values.get("proxy_request_memory")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ProxyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-asm.RosServiceMeshProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switches": "vSwitches",
        "api_server_public_eip": "apiServerPublicEip",
        "audit_project": "auditProject",
        "customized_zipkin": "customizedZipkin",
        "enable_audit": "enableAudit",
        "include_ip_ranges": "includeIpRanges",
        "istio_version": "istioVersion",
        "locality_load_balancing": "localityLoadBalancing",
        "name": "name",
        "opa": "opa",
        "outbound_traffic_policy": "outboundTrafficPolicy",
        "pilot_public_eip": "pilotPublicEip",
        "proxy": "proxy",
        "telemetry": "telemetry",
        "trace_sampling": "traceSampling",
        "tracing": "tracing",
    },
)
class RosServiceMeshProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ASM::ServiceMesh``.

        :param vpc_id: 
        :param v_switches: 
        :param api_server_public_eip: 
        :param audit_project: 
        :param customized_zipkin: 
        :param enable_audit: 
        :param include_ip_ranges: 
        :param istio_version: 
        :param locality_load_balancing: 
        :param name: 
        :param opa: 
        :param outbound_traffic_policy: 
        :param pilot_public_eip: 
        :param proxy: 
        :param telemetry: 
        :param trace_sampling: 
        :param tracing: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__593e7b06259bb70f6a9af622aad925693896d5442f918769fc84cde0933c82e4)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switches", value=v_switches, expected_type=type_hints["v_switches"])
            check_type(argname="argument api_server_public_eip", value=api_server_public_eip, expected_type=type_hints["api_server_public_eip"])
            check_type(argname="argument audit_project", value=audit_project, expected_type=type_hints["audit_project"])
            check_type(argname="argument customized_zipkin", value=customized_zipkin, expected_type=type_hints["customized_zipkin"])
            check_type(argname="argument enable_audit", value=enable_audit, expected_type=type_hints["enable_audit"])
            check_type(argname="argument include_ip_ranges", value=include_ip_ranges, expected_type=type_hints["include_ip_ranges"])
            check_type(argname="argument istio_version", value=istio_version, expected_type=type_hints["istio_version"])
            check_type(argname="argument locality_load_balancing", value=locality_load_balancing, expected_type=type_hints["locality_load_balancing"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument opa", value=opa, expected_type=type_hints["opa"])
            check_type(argname="argument outbound_traffic_policy", value=outbound_traffic_policy, expected_type=type_hints["outbound_traffic_policy"])
            check_type(argname="argument pilot_public_eip", value=pilot_public_eip, expected_type=type_hints["pilot_public_eip"])
            check_type(argname="argument proxy", value=proxy, expected_type=type_hints["proxy"])
            check_type(argname="argument telemetry", value=telemetry, expected_type=type_hints["telemetry"])
            check_type(argname="argument trace_sampling", value=trace_sampling, expected_type=type_hints["trace_sampling"])
            check_type(argname="argument tracing", value=tracing, expected_type=type_hints["tracing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switches": v_switches,
        }
        if api_server_public_eip is not None:
            self._values["api_server_public_eip"] = api_server_public_eip
        if audit_project is not None:
            self._values["audit_project"] = audit_project
        if customized_zipkin is not None:
            self._values["customized_zipkin"] = customized_zipkin
        if enable_audit is not None:
            self._values["enable_audit"] = enable_audit
        if include_ip_ranges is not None:
            self._values["include_ip_ranges"] = include_ip_ranges
        if istio_version is not None:
            self._values["istio_version"] = istio_version
        if locality_load_balancing is not None:
            self._values["locality_load_balancing"] = locality_load_balancing
        if name is not None:
            self._values["name"] = name
        if opa is not None:
            self._values["opa"] = opa
        if outbound_traffic_policy is not None:
            self._values["outbound_traffic_policy"] = outbound_traffic_policy
        if pilot_public_eip is not None:
            self._values["pilot_public_eip"] = pilot_public_eip
        if proxy is not None:
            self._values["proxy"] = proxy
        if telemetry is not None:
            self._values["telemetry"] = telemetry
        if trace_sampling is not None:
            self._values["trace_sampling"] = trace_sampling
        if tracing is not None:
            self._values["tracing"] = tracing

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC).
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switches(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"]
        '''
        result = self._values.get("v_switches")
        assert result is not None, "Required property 'v_switches' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_server_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        apiServerPublicEip: Specifies whether to expose the API server to the Internet.
        Valid values: true and false. Default value: false.
        If you do not set this parameter, the API server of clusters added to the ASM instance
        cannot be accessed from the Internet.
        '''
        result = self._values.get("api_server_public_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audit_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        auditProject: The name of the Log Service project that is used for mesh audit.
        Default value: mesh-log-{meshId}.
        '''
        result = self._values.get("audit_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def customized_zipkin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customizedZipkin: Specifies whether to use a user-created Zipkin system.
        '''
        result = self._values.get("customized_zipkin")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_audit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure
        that you have activated Alibaba Cloud Log Service.
        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("enable_audit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def include_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied
        to access external services.
        '''
        result = self._values.get("include_ip_ranges")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def istio_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: istioVersion: The Istio version of the ASM instance.
        '''
        result = self._values.get("istio_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def locality_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localityLoadBalancing: Specifies whether to route traffic to the nearest instance.
        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("locality_load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the ASM instance.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def opa(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.OPAProperty]]:
        '''
        :Property: opa: OPA settings.
        '''
        result = self._values.get("opa")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.OPAProperty]], result)

    @builtins.property
    def outbound_traffic_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        '''
        result = self._values.get("outbound_traffic_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pilot_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.
        Valid values: true and false. Default value: false.
        If you do not set this parameter, only clusters in the same VPC as the ASM instance
        can access Istio Pilot of the instance.
        '''
        result = self._values.get("pilot_public_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.ProxyProperty]]:
        '''
        :Property: proxy: Proxy settings.
        '''
        result = self._values.get("proxy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.ProxyProperty]], result)

    @builtins.property
    def telemetry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
        '''
        result = self._values.get("telemetry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def trace_sampling(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: traceSampling: The sampling percentage of tracing.
        '''
        result = self._values.get("trace_sampling")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure
        that you have activated Alibaba Cloud Tracing Analysis.
        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceMeshProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServiceMesh(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-asm.ServiceMesh",
):
    '''A ROS resource type:  ``ALIYUN::ASM::ServiceMesh``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceMeshProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ASM::ServiceMesh``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b32550f2f66937befbcd019719e01807746869850bc0d4cd012b4b9125f2aaa9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServiceMeshId")
    def attr_service_mesh_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceMeshId: The ID of the ASM instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceMeshId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-asm.ServiceMeshProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switches": "vSwitches",
        "api_server_public_eip": "apiServerPublicEip",
        "audit_project": "auditProject",
        "customized_zipkin": "customizedZipkin",
        "enable_audit": "enableAudit",
        "include_ip_ranges": "includeIpRanges",
        "istio_version": "istioVersion",
        "locality_load_balancing": "localityLoadBalancing",
        "name": "name",
        "opa": "opa",
        "outbound_traffic_policy": "outboundTrafficPolicy",
        "pilot_public_eip": "pilotPublicEip",
        "proxy": "proxy",
        "telemetry": "telemetry",
        "trace_sampling": "traceSampling",
        "tracing": "tracing",
    },
)
class ServiceMeshProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ASM::ServiceMesh``.

        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC).
        :param v_switches: Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
        :param api_server_public_eip: Property apiServerPublicEip: Specifies whether to expose the API server to the Internet. Valid values: true and false. Default value: false. If you do not set this parameter, the API server of clusters added to the ASM instance cannot be accessed from the Internet.
        :param audit_project: Property auditProject: The name of the Log Service project that is used for mesh audit. Default value: mesh-log-{meshId}.
        :param customized_zipkin: Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
        :param enable_audit: Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure that you have activated Alibaba Cloud Log Service. Valid values: true and false. Default value: false.
        :param include_ip_ranges: Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
        :param istio_version: Property istioVersion: The Istio version of the ASM instance.
        :param locality_load_balancing: Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance. Valid values: true and false. Default value: false.
        :param name: Property name: The name of the ASM instance.
        :param opa: Property opa: OPA settings.
        :param outbound_traffic_policy: Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        :param pilot_public_eip: Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet. Valid values: true and false. Default value: false. If you do not set this parameter, only clusters in the same VPC as the ASM instance can access Istio Pilot of the instance.
        :param proxy: Property proxy: Proxy settings.
        :param telemetry: Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
        :param trace_sampling: Property traceSampling: The sampling percentage of tracing.
        :param tracing: Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure that you have activated Alibaba Cloud Tracing Analysis. Valid values: true and false. Default value: false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed14ee0f0c3faeeb7237cc647a355ce5d2f8d14160c9af19b533701c843495f0)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switches", value=v_switches, expected_type=type_hints["v_switches"])
            check_type(argname="argument api_server_public_eip", value=api_server_public_eip, expected_type=type_hints["api_server_public_eip"])
            check_type(argname="argument audit_project", value=audit_project, expected_type=type_hints["audit_project"])
            check_type(argname="argument customized_zipkin", value=customized_zipkin, expected_type=type_hints["customized_zipkin"])
            check_type(argname="argument enable_audit", value=enable_audit, expected_type=type_hints["enable_audit"])
            check_type(argname="argument include_ip_ranges", value=include_ip_ranges, expected_type=type_hints["include_ip_ranges"])
            check_type(argname="argument istio_version", value=istio_version, expected_type=type_hints["istio_version"])
            check_type(argname="argument locality_load_balancing", value=locality_load_balancing, expected_type=type_hints["locality_load_balancing"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument opa", value=opa, expected_type=type_hints["opa"])
            check_type(argname="argument outbound_traffic_policy", value=outbound_traffic_policy, expected_type=type_hints["outbound_traffic_policy"])
            check_type(argname="argument pilot_public_eip", value=pilot_public_eip, expected_type=type_hints["pilot_public_eip"])
            check_type(argname="argument proxy", value=proxy, expected_type=type_hints["proxy"])
            check_type(argname="argument telemetry", value=telemetry, expected_type=type_hints["telemetry"])
            check_type(argname="argument trace_sampling", value=trace_sampling, expected_type=type_hints["trace_sampling"])
            check_type(argname="argument tracing", value=tracing, expected_type=type_hints["tracing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switches": v_switches,
        }
        if api_server_public_eip is not None:
            self._values["api_server_public_eip"] = api_server_public_eip
        if audit_project is not None:
            self._values["audit_project"] = audit_project
        if customized_zipkin is not None:
            self._values["customized_zipkin"] = customized_zipkin
        if enable_audit is not None:
            self._values["enable_audit"] = enable_audit
        if include_ip_ranges is not None:
            self._values["include_ip_ranges"] = include_ip_ranges
        if istio_version is not None:
            self._values["istio_version"] = istio_version
        if locality_load_balancing is not None:
            self._values["locality_load_balancing"] = locality_load_balancing
        if name is not None:
            self._values["name"] = name
        if opa is not None:
            self._values["opa"] = opa
        if outbound_traffic_policy is not None:
            self._values["outbound_traffic_policy"] = outbound_traffic_policy
        if pilot_public_eip is not None:
            self._values["pilot_public_eip"] = pilot_public_eip
        if proxy is not None:
            self._values["proxy"] = proxy
        if telemetry is not None:
            self._values["telemetry"] = telemetry
        if trace_sampling is not None:
            self._values["trace_sampling"] = trace_sampling
        if tracing is not None:
            self._values["tracing"] = tracing

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switches(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].'''
        result = self._values.get("v_switches")
        assert result is not None, "Required property 'v_switches' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_server_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiServerPublicEip: Specifies whether to expose the API server to the Internet.

        Valid values: true and false. Default value: false.
        If you do not set this parameter, the API server of clusters added to the ASM instance
        cannot be accessed from the Internet.
        '''
        result = self._values.get("api_server_public_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def audit_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property auditProject: The name of the Log Service project that is used for mesh audit.

        Default value: mesh-log-{meshId}.
        '''
        result = self._values.get("audit_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def customized_zipkin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property customizedZipkin: Specifies whether to use a user-created Zipkin system.'''
        result = self._values.get("customized_zipkin")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_audit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAudit: Specifies whether to enable the mesh audit feature.

        To enable this feature, make sure
        that you have activated Alibaba Cloud Log Service.
        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("enable_audit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def include_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.'''
        result = self._values.get("include_ip_ranges")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def istio_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property istioVersion: The Istio version of the ASM instance.'''
        result = self._values.get("istio_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def locality_load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance.

        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("locality_load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the ASM instance.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def opa(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.OPAProperty]]:
        '''Property opa: OPA settings.'''
        result = self._values.get("opa")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.OPAProperty]], result)

    @builtins.property
    def outbound_traffic_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.'''
        result = self._values.get("outbound_traffic_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pilot_public_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet.

        Valid values: true and false. Default value: false.
        If you do not set this parameter, only clusters in the same VPC as the ASM instance
        can access Istio Pilot of the instance.
        '''
        result = self._values.get("pilot_public_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.ProxyProperty]]:
        '''Property proxy: Proxy settings.'''
        result = self._values.get("proxy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.ProxyProperty]], result)

    @builtins.property
    def telemetry(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property telemetry: Specifies whether to enable Prometheus monitoring.

        We recommend that you use Application Real-Time Monitoring Service (ARMS).
        '''
        result = self._values.get("telemetry")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def trace_sampling(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property traceSampling: The sampling percentage of tracing.'''
        result = self._values.get("trace_sampling")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tracing: Specifies whether to enable the tracing feature.

        To enable this feature, make sure
        that you have activated Alibaba Cloud Tracing Analysis.
        Valid values: true and false. Default value: false.
        '''
        result = self._values.get("tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceMeshProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosServiceMesh",
    "RosServiceMeshProps",
    "ServiceMesh",
    "ServiceMeshProps",
]

publication.publish()

def _typecheckingstub__f764cb53e465abe51eecebd06f0609ce505526274f68e09303ab7385b4adb8bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceMeshProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b4842ba05bc49b125705a4f65a06a87e96ca3725efde3ff2945838b7517c82e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a90a77fb03c9aaa6e53cad21a4afe1654bd5f9adb3d04fcc0794e20d149bd70c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bccc89ca5d540cf6438c24292d3ccb8c3fe44b4d5db0f9ffe937b273ffefdf1d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c213ea29416f06ffa7e33e10b95c4c16b7955d7f89f7bddd450aba3d6f8a3843(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f03229ee8a85ae086f1daa9768e7b541a29d86e6232a44fcaafe4b2a075dbdef(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__841cf4ce88a015660dd471f748f010040cfb283c1e934b4649f5182970154f6d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ece318baee321d850a185a0489ecdde7710ff53d54c4ef3ff15eaac63eaa60(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0dffad68eb690dc5b760ad154d5784fcc03eb8bc0a3b7d99270e10f52ce39f8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9d0cb9b4711c3b79a43c202a2e92be4196e51ede8d768b0221fc41e9ce4a43f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29ee2821a691019cb3e807c7aff8b16d5d4ef550842036f94fd89c9b9095a5e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc953c7bf3b7477b608bd0b3775b9b58e9fab00e01b4150c4433da3dbebb890(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88ebccee013702f1b56ebdfb7967a753f929567c4638c796db92d59eed588ded(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68e2070571de1ac09ea3fe938ff0851ac736842de549624975c5c022dd5b9c09(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.OPAProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d76119bdece07a8eaea5f816b8ae7af0ef092ca32fb8cd2277d3b5ce13de55a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba2964577de6f9dddb93446044c6516b47acfe426755e02c0749cbee9455f5af(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4bec110dabe25e3e7ab0b51522f5c2f1bb571cb11cf44af57d9334327e228f4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServiceMesh.ProxyProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__270567c73da4a628791972296c74f4da74d7c25ade1c7d2b635735296ee678b8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ebc9d1afe17d3fd261d093aa7f9f16c5706586550cf6c618c7c061cef35d0da(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a85677a9046d74958218061e7a83de0ea9a41dc57cf5e6b19938ac307032d364(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82faf43833e0ef6a44e5ab9d2d7da8ee99b622f31f94cdd92a660785576fbe4f(
    *,
    opa_limit_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa_limit_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa_log_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa_request_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa_request_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_agent_policy: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25b2f5efa434a8ab0ea0f08aaeba7426945492212936cfa995c31e94d91e2131(
    *,
    cluster_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_limit_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_limit_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_request_cpu: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_request_memory: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__593e7b06259bb70f6a9af622aad925693896d5442f918769fc84cde0933c82e4(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b32550f2f66937befbcd019719e01807746869850bc0d4cd012b4b9125f2aaa9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceMeshProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed14ee0f0c3faeeb7237cc647a355ce5d2f8d14160c9af19b533701c843495f0(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
