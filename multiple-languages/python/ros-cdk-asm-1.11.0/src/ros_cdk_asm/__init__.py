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


@jsii.interface(jsii_type="@alicloud/ros-cdk-asm.IServiceMesh")
class IServiceMesh(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ServiceMesh``.'''

    @builtins.property
    @jsii.member(jsii_name="attrServiceMeshId")
    def attr_service_mesh_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceMeshId: The ID of the ASM instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceMeshProps":
        ...


class _IServiceMeshProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ServiceMesh``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-asm.IServiceMesh"

    @builtins.property
    @jsii.member(jsii_name="attrServiceMeshId")
    def attr_service_mesh_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceMeshId: The ID of the ASM instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceMeshId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceMeshProps":
        return typing.cast("ServiceMeshProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServiceMesh).__jsii_proxy_class__ = lambda : _IServiceMeshProxy


class RosServiceMesh(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-asm.RosServiceMesh",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ASM::ServiceMesh``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServiceMesh`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceMeshProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="accessLogEnabled")
    def access_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogEnabled: Specifies whether to enable access logging.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogEnabled"))

    @access_log_enabled.setter
    def access_log_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4ff8a3c2d24a38cc30b66c2e17d3f1f86a0591523c5a35b95256ca29338033f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogFile")
    def access_log_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessLogFile: Enable and disable access logs. Value:

        - "" : Turn off access logs.
        - /dev/stdout: Enables access logging
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogFile"))

    @access_log_file.setter
    def access_log_file(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f162ae1c0286294030b1de2c175caa9908b096dd7f6e6ad52f1b3c40e741153)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogFile", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogFormat")
    def access_log_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogFormat: The format of access logs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogFormat"))

    @access_log_format.setter
    def access_log_format(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e47f02149b8b20431b11eaceef2b2cf6ae27c8c1603d6095c2e695f7b49ac9f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogFormat", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogProject")
    def access_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogProject: The Log Service project for access logs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogProject"))

    @access_log_project.setter
    def access_log_project(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39124dd9fe1d4f8578730273edaf05cceb4b6264d6f50067dd3555d31435fe7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogProject", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogServiceEnabled")
    def access_log_service_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:

        - true: Enables Envoy's gRPC logging service.
        - false: Envoy's gRPC logging service is not enabled.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogServiceEnabled"))

    @access_log_service_enabled.setter
    def access_log_service_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e25b3e78542a552bbccef16db9e316689d3d89e4b6b0df7c9c38b3f9963fed5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogServiceEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogServiceHost")
    def access_log_service_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogServiceHost"))

    @access_log_service_host.setter
    def access_log_service_host(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2edc46036eb5a13bae0836358d6e0f9b9bd768290832aa87d4a78128e82b557)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogServiceHost", value)

    @builtins.property
    @jsii.member(jsii_name="accessLogServicePort")
    def access_log_service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accessLogServicePort"))

    @access_log_service_port.setter
    def access_log_service_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c68fd792c8c128a98a550229575a107f1895925c9347d70a737aadf85de451c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accessLogServicePort", value)

    @builtins.property
    @jsii.member(jsii_name="apiServerLoadBalancerSpec")
    def api_server_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiServerLoadBalancerSpec"))

    @api_server_load_balancer_spec.setter
    def api_server_load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8042ce60766b7bbd60bf41fdfc02152ce9c254a270018b5d99019850d4683b65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiServerLoadBalancerSpec", value)

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
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:

        - true: Automatic renewal.
        - false: No automatic renewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6226650956f130ae1ddd4fdcadfa9eca325a1ff8bd7d50fdfe9c30ec1b9352f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d834d076cbeffcf0e8c857c8ed95935b3913ae088c8422139bce96afe917d47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="certChain")
    def cert_chain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certChain"))

    @cert_chain.setter
    def cert_chain(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dccc464107e55ec9352946c14971bc492ea7f2cc2d3a955e7e278986ed921f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certChain", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: CLB payment type. Value:

        - PayOnDemand: pay-as-you-go type
        - PrePay: Annual and monthly.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d78569d9c51e44a3574a9b907a6509330fbfa69018a86e8b83a390bc516ae8b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="clusterSpec")
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: Service grid instance specification, value:

        - standard: The standard version.
        - enterprise: Enterprise Edition
        - ultimate: ultimate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterSpec"))

    @cluster_spec.setter
    def cluster_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a1b82ad12d95653d41bd43f05e7b30824d0ccb7a76e7e177de01e0106d2e3b5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterSpec", value)

    @builtins.property
    @jsii.member(jsii_name="configSourceEnabled")
    def config_source_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        configSourceEnabled: Whether to enable an external service registry. Value:

        - true: Enables the external service registry.
        - false: The external service registry is not enabled.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configSourceEnabled"))

    @config_source_enabled.setter
    def config_source_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__881abf3fd4a23925f3c8cca73d5a0a6dea3d04ff21c47472fcfe1bff5b0ebc88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configSourceEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="configSourceNacosId")
    def config_source_nacos_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configSourceNacosId: The Nacos ID for config source.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configSourceNacosId"))

    @config_source_nacos_id.setter
    def config_source_nacos_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__193782ddb61ef722247770ee518d235108135201bb0c35c3e4047e65fc7d2106)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configSourceNacosId", value)

    @builtins.property
    @jsii.member(jsii_name="controlPlaneLogEnabled")
    def control_plane_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: controlPlaneLogEnabled: Specifies whether to enable control plane logging.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "controlPlaneLogEnabled"))

    @control_plane_log_enabled.setter
    def control_plane_log_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edeb228d340dbd69c3a1090d5095ce1adb2c8fadced8ea0a91149e19157bf708)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "controlPlaneLogEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="controlPlaneLogProject")
    def control_plane_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: controlPlaneLogProject: The Log Service project for control plane logs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "controlPlaneLogProject"))

    @control_plane_log_project.setter
    def control_plane_log_project(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2362834716d728b68e034371672524765b166961e7d2110b33ebd28682cd88e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "controlPlaneLogProject", value)

    @builtins.property
    @jsii.member(jsii_name="crAggregationEnabled")
    def cr_aggregation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:

        - true: Enable data plane cluster Kubernetes API to access Istio resources.
        - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crAggregationEnabled"))

    @cr_aggregation_enabled.setter
    def cr_aggregation_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08c8a90cdd61e0feaf85c18ca52cf7948b2ca406453fd6f47aeda7c730b24fc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crAggregationEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="customizedPrometheus")
    def customized_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customizedPrometheus: Specifies whether to use a customized Prometheus system.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "customizedPrometheus"))

    @customized_prometheus.setter
    def customized_prometheus(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a89aec6a9c9b18c18e826fd75ed97d379752a4df12e4f3added75ddb96d3210b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customizedPrometheus", value)

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
    @jsii.member(jsii_name="dnsProxyingEnabled")
    def dns_proxying_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dnsProxyingEnabled: Specifies whether to enable DNS proxying.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dnsProxyingEnabled"))

    @dns_proxying_enabled.setter
    def dns_proxying_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a5c6128202dba57219c717e363a03862f5db1756f171b9b25859e1376ddfce1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dnsProxyingEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="dubboFilterEnabled")
    def dubbo_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dubboFilterEnabled: Specifies whether to enable Dubbo filter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dubboFilterEnabled"))

    @dubbo_filter_enabled.setter
    def dubbo_filter_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6283ed99dbdb1587ca9b4afa8b66a06f7031359953a1dd18741e2f314d5982e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dubboFilterEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="edition")
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The edition of the ASM instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "edition"))

    @edition.setter
    def edition(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b46491bfb979527c5986c1955a369ee307b5893d6298cb48fa9e44bcb9ca0a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "edition", value)

    @builtins.property
    @jsii.member(jsii_name="enableAcmg")
    def enable_acmg(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAcmg: Specifies whether to enable ACMG.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAcmg"))

    @enable_acmg.setter
    def enable_acmg(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5d411c8a4357b7bc64176b8ca8b6d478779282972ebe2de7ad1a16ced6f3a34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAcmg", value)

    @builtins.property
    @jsii.member(jsii_name="enableAmbient")
    def enable_ambient(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAmbient: Specifies whether to enable ambient mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAmbient"))

    @enable_ambient.setter
    def enable_ambient(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a52e713864f1e3ae9bc925d4c4009b0a88c479ee66861fa0531f8d94ddae3384)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAmbient", value)

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
    @jsii.member(jsii_name="enableCrHistory")
    def enable_cr_history(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableCrHistory: Specifies whether to enable CR history.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableCrHistory"))

    @enable_cr_history.setter
    def enable_cr_history(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e50765b7bf5eb0476b3b098810cf2324a1f9e9a11c3517670f76075bd2f95f38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableCrHistory", value)

    @builtins.property
    @jsii.member(jsii_name="enableSdsServer")
    def enable_sds_server(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableSdsServer: Specifies whether to enable SDS server.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableSdsServer"))

    @enable_sds_server.setter
    def enable_sds_server(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29d29d82213d419e45d0b08e1a9c67a181ee53a6b6d9081354616f4fb994c0b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableSdsServer", value)

    @builtins.property
    @jsii.member(jsii_name="excludeInboundPorts")
    def exclude_inbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeInboundPorts: The inbound ports to exclude from traffic management.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeInboundPorts"))

    @exclude_inbound_ports.setter
    def exclude_inbound_ports(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__801cc0cceefe0dda805d3e23c2aeecb658955a17449b5f7f1d4f0d3f4e04d2ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeInboundPorts", value)

    @builtins.property
    @jsii.member(jsii_name="excludeIpRanges")
    def exclude_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeIpRanges: The IP ranges to exclude from traffic management.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeIpRanges"))

    @exclude_ip_ranges.setter
    def exclude_ip_ranges(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b808729bed64a51dded1f8f8623ecba42b55fc04eda26a5e21fe535e023a401)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeIpRanges", value)

    @builtins.property
    @jsii.member(jsii_name="excludeOutboundPorts")
    def exclude_outbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeOutboundPorts: The outbound ports to exclude from traffic management.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "excludeOutboundPorts"))

    @exclude_outbound_ports.setter
    def exclude_outbound_ports(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c98a7abad55ca5cc57b57d6ef85614a884b879c6a0dfde4d334116c829fb987a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "excludeOutboundPorts", value)

    @builtins.property
    @jsii.member(jsii_name="existingCaCert")
    def existing_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaCert: The existing CA certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "existingCaCert"))

    @existing_ca_cert.setter
    def existing_ca_cert(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50471b23c40a55b5c46abde9a442dc8f1511d86754389806e2f354e640024fd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "existingCaCert", value)

    @builtins.property
    @jsii.member(jsii_name="existingCaKey")
    def existing_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaKey: The existing CA key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "existingCaKey"))

    @existing_ca_key.setter
    def existing_ca_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91b717b621972be064082c9fb39d1078d09ed06a39552119ca71066c9df01d3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "existingCaKey", value)

    @builtins.property
    @jsii.member(jsii_name="existingCaType")
    def existing_ca_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaType: The type of existing CA.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "existingCaType"))

    @existing_ca_type.setter
    def existing_ca_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be793f3b8e4202e36b11828acbdade9a42d0fbc31b4dc01696a4fa1b7f4fccfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "existingCaType", value)

    @builtins.property
    @jsii.member(jsii_name="existingRootCaCert")
    def existing_root_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingRootCaCert: The existing root CA certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "existingRootCaCert"))

    @existing_root_ca_cert.setter
    def existing_root_ca_cert(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52bef52663ff971766d76cd6ca46de9db1f036b0286ed6e09c0208191acfa003)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "existingRootCaCert", value)

    @builtins.property
    @jsii.member(jsii_name="existingRootCaKey")
    def existing_root_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingRootCaKey: The existing root CA key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "existingRootCaKey"))

    @existing_root_ca_key.setter
    def existing_root_ca_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4a261461fcfc23a58e8dead1d0aa0348247a060a872b2e797483977a0c9af6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "existingRootCaKey", value)

    @builtins.property
    @jsii.member(jsii_name="filterGatewayClusterConfig")
    def filter_gateway_cluster_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filterGatewayClusterConfig"))

    @filter_gateway_cluster_config.setter
    def filter_gateway_cluster_config(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6cc065ba7cf64ef37e4bffde6ba0b81a9bd4849ea0ac4ec84536bab6a65da23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterGatewayClusterConfig", value)

    @builtins.property
    @jsii.member(jsii_name="gatewayApiEnabled")
    def gateway_api_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayApiEnabled: Specifies whether to enable Gateway API.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "gatewayApiEnabled"))

    @gateway_api_enabled.setter
    def gateway_api_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9466c5267890890214e560c7669405de74e705e5e87ce244b563acf9b02d8133)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gatewayApiEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="guestCluster")
    def guest_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: guestCluster: The guest cluster configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "guestCluster"))

    @guest_cluster.setter
    def guest_cluster(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9cb95a3c80903dba8f45b2620d4ef691b42c4126e3e07b52b6c8339f5868737f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "guestCluster", value)

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
    @jsii.member(jsii_name="kialiEnabled")
    def kiali_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kialiEnabled: Specifies whether to enable Kiali.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kialiEnabled"))

    @kiali_enabled.setter
    def kiali_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc4ad981d5eca39f1f4abe1bd0bf6d9f2da459f13a3aa075652337038dd9fc1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kialiEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="localityLbConf")
    def locality_lb_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: localityLbConf: The locality load balancing configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localityLbConf"))

    @locality_lb_conf.setter
    def locality_lb_conf(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60162bcc46d1add12b79d424a03ea25d9aa8078c443cd72fcca0c47f2bc1ef62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localityLbConf", value)

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
    @jsii.member(jsii_name="mseEnabled")
    def mse_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mseEnabled: Specifies whether to enable MSE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mseEnabled"))

    @mse_enabled.setter
    def mse_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba736c4301c06605830cc0387d25a73d911e63c5149280bed3de20fa667830b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mseEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="multiBufferEnabled")
    def multi_buffer_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiBufferEnabled: Specifies whether to enable multi-buffer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiBufferEnabled"))

    @multi_buffer_enabled.setter
    def multi_buffer_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eb7fe02927af1e6885b4f7a21c572908d26e954a0a0954cffa18d7d7088c72e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiBufferEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="multiBufferPollDelay")
    def multi_buffer_poll_delay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiBufferPollDelay: The poll delay for multi-buffer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiBufferPollDelay"))

    @multi_buffer_poll_delay.setter
    def multi_buffer_poll_delay(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cd39fccf408c3cda2cc1a0ee8c3f54431586aa81875d654975e6629fc0e84bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiBufferPollDelay", value)

    @builtins.property
    @jsii.member(jsii_name="mysqlFilterEnabled")
    def mysql_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mysqlFilterEnabled: Specifies whether to enable MySQL filter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mysqlFilterEnabled"))

    @mysql_filter_enabled.setter
    def mysql_filter_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1749ab28b16180e6a2204100a15fb62ef92b794cd2ecdf3661019e3f3eda5a11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mysqlFilterEnabled", value)

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
    @jsii.member(jsii_name="opaEnabled")
    def opa_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: opaEnabled: Specifies whether to enable OPA.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "opaEnabled"))

    @opa_enabled.setter
    def opa_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__622f6b766d89410bd3e3678a2f74ab56b2e42dbad3aeee9ae9d2674d6ad99cb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "opaEnabled", value)

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
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b23c505a08bafe0d3a88a4306fc5c10ca027ace6069be0f9c547d426136a5e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="pilotLoadBalancerSpec")
    def pilot_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pilotLoadBalancerSpec: The specification for the pilot load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pilotLoadBalancerSpec"))

    @pilot_load_balancer_spec.setter
    def pilot_load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3481336e804edc16f235fdc2c8d38d0c013113cf2f95cb9263057652fa741a01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pilotLoadBalancerSpec", value)

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
    @jsii.member(jsii_name="playgroundScene")
    def playground_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: playgroundScene: The playground scene configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "playgroundScene"))

    @playground_scene.setter
    def playground_scene(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0877a7b40e5f931830a46f98d14cefd3e4da21c09865f40aadc82b04f515c407)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "playgroundScene", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusUrl")
    def prometheus_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusUrl: The URL for Prometheus.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "prometheusUrl"))

    @prometheus_url.setter
    def prometheus_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__acb2acb89912b599d73c840a85fe40236b37118030d6073862d718a9c5a4bbc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusUrl", value)

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

    @builtins.property
    @jsii.member(jsii_name="useExistingCa")
    def use_existing_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: useExistingCa: Specifies whether to use an existing CA.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "useExistingCa"))

    @use_existing_ca.setter
    def use_existing_ca(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58b33e49d90a3c1dc0687f8cf8cf9f08edfeb8f2ece5562fc3af728706960af8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "useExistingCa", value)

    @builtins.property
    @jsii.member(jsii_name="webAssemblyFilterEnabled")
    def web_assembly_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "webAssemblyFilterEnabled"))

    @web_assembly_filter_enabled.setter
    def web_assembly_filter_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea7a3ad6a94094e0d3e85450dfadca3dd78c5c5ac8ee1fc2011617b514aee627)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "webAssemblyFilterEnabled", value)

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
        "access_log_enabled": "accessLogEnabled",
        "access_log_file": "accessLogFile",
        "access_log_format": "accessLogFormat",
        "access_log_project": "accessLogProject",
        "access_log_service_enabled": "accessLogServiceEnabled",
        "access_log_service_host": "accessLogServiceHost",
        "access_log_service_port": "accessLogServicePort",
        "api_server_load_balancer_spec": "apiServerLoadBalancerSpec",
        "api_server_public_eip": "apiServerPublicEip",
        "audit_project": "auditProject",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "cert_chain": "certChain",
        "charge_type": "chargeType",
        "cluster_spec": "clusterSpec",
        "config_source_enabled": "configSourceEnabled",
        "config_source_nacos_id": "configSourceNacosId",
        "control_plane_log_enabled": "controlPlaneLogEnabled",
        "control_plane_log_project": "controlPlaneLogProject",
        "cr_aggregation_enabled": "crAggregationEnabled",
        "customized_prometheus": "customizedPrometheus",
        "customized_zipkin": "customizedZipkin",
        "dns_proxying_enabled": "dnsProxyingEnabled",
        "dubbo_filter_enabled": "dubboFilterEnabled",
        "edition": "edition",
        "enable_acmg": "enableAcmg",
        "enable_ambient": "enableAmbient",
        "enable_audit": "enableAudit",
        "enable_cr_history": "enableCrHistory",
        "enable_sds_server": "enableSdsServer",
        "exclude_inbound_ports": "excludeInboundPorts",
        "exclude_ip_ranges": "excludeIpRanges",
        "exclude_outbound_ports": "excludeOutboundPorts",
        "existing_ca_cert": "existingCaCert",
        "existing_ca_key": "existingCaKey",
        "existing_ca_type": "existingCaType",
        "existing_root_ca_cert": "existingRootCaCert",
        "existing_root_ca_key": "existingRootCaKey",
        "filter_gateway_cluster_config": "filterGatewayClusterConfig",
        "gateway_api_enabled": "gatewayApiEnabled",
        "guest_cluster": "guestCluster",
        "include_ip_ranges": "includeIpRanges",
        "istio_version": "istioVersion",
        "kiali_enabled": "kialiEnabled",
        "locality_lb_conf": "localityLbConf",
        "locality_load_balancing": "localityLoadBalancing",
        "mse_enabled": "mseEnabled",
        "multi_buffer_enabled": "multiBufferEnabled",
        "multi_buffer_poll_delay": "multiBufferPollDelay",
        "mysql_filter_enabled": "mysqlFilterEnabled",
        "name": "name",
        "opa": "opa",
        "opa_enabled": "opaEnabled",
        "outbound_traffic_policy": "outboundTrafficPolicy",
        "period": "period",
        "pilot_load_balancer_spec": "pilotLoadBalancerSpec",
        "pilot_public_eip": "pilotPublicEip",
        "playground_scene": "playgroundScene",
        "prometheus_url": "prometheusUrl",
        "proxy": "proxy",
        "telemetry": "telemetry",
        "trace_sampling": "traceSampling",
        "tracing": "tracing",
        "use_existing_ca": "useExistingCa",
        "web_assembly_filter_enabled": "webAssemblyFilterEnabled",
    },
)
class RosServiceMeshProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        access_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_server_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_chain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_source_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_source_nacos_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        control_plane_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        control_plane_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cr_aggregation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dns_proxying_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dubbo_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_acmg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_ambient: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_cr_history: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_sds_server: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_inbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_outbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_root_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_root_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_gateway_cluster_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gateway_api_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        guest_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kiali_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_lb_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_buffer_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_buffer_poll_delay: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mysql_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        opa_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        playground_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        use_existing_ca: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_assembly_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosServiceMesh``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh

        :param vpc_id: 
        :param v_switches: 
        :param access_log_enabled: 
        :param access_log_file: 
        :param access_log_format: 
        :param access_log_project: 
        :param access_log_service_enabled: 
        :param access_log_service_host: 
        :param access_log_service_port: 
        :param api_server_load_balancer_spec: 
        :param api_server_public_eip: 
        :param audit_project: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param cert_chain: 
        :param charge_type: 
        :param cluster_spec: 
        :param config_source_enabled: 
        :param config_source_nacos_id: 
        :param control_plane_log_enabled: 
        :param control_plane_log_project: 
        :param cr_aggregation_enabled: 
        :param customized_prometheus: 
        :param customized_zipkin: 
        :param dns_proxying_enabled: 
        :param dubbo_filter_enabled: 
        :param edition: 
        :param enable_acmg: 
        :param enable_ambient: 
        :param enable_audit: 
        :param enable_cr_history: 
        :param enable_sds_server: 
        :param exclude_inbound_ports: 
        :param exclude_ip_ranges: 
        :param exclude_outbound_ports: 
        :param existing_ca_cert: 
        :param existing_ca_key: 
        :param existing_ca_type: 
        :param existing_root_ca_cert: 
        :param existing_root_ca_key: 
        :param filter_gateway_cluster_config: 
        :param gateway_api_enabled: 
        :param guest_cluster: 
        :param include_ip_ranges: 
        :param istio_version: 
        :param kiali_enabled: 
        :param locality_lb_conf: 
        :param locality_load_balancing: 
        :param mse_enabled: 
        :param multi_buffer_enabled: 
        :param multi_buffer_poll_delay: 
        :param mysql_filter_enabled: 
        :param name: 
        :param opa: 
        :param opa_enabled: 
        :param outbound_traffic_policy: 
        :param period: 
        :param pilot_load_balancer_spec: 
        :param pilot_public_eip: 
        :param playground_scene: 
        :param prometheus_url: 
        :param proxy: 
        :param telemetry: 
        :param trace_sampling: 
        :param tracing: 
        :param use_existing_ca: 
        :param web_assembly_filter_enabled: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__593e7b06259bb70f6a9af622aad925693896d5442f918769fc84cde0933c82e4)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switches", value=v_switches, expected_type=type_hints["v_switches"])
            check_type(argname="argument access_log_enabled", value=access_log_enabled, expected_type=type_hints["access_log_enabled"])
            check_type(argname="argument access_log_file", value=access_log_file, expected_type=type_hints["access_log_file"])
            check_type(argname="argument access_log_format", value=access_log_format, expected_type=type_hints["access_log_format"])
            check_type(argname="argument access_log_project", value=access_log_project, expected_type=type_hints["access_log_project"])
            check_type(argname="argument access_log_service_enabled", value=access_log_service_enabled, expected_type=type_hints["access_log_service_enabled"])
            check_type(argname="argument access_log_service_host", value=access_log_service_host, expected_type=type_hints["access_log_service_host"])
            check_type(argname="argument access_log_service_port", value=access_log_service_port, expected_type=type_hints["access_log_service_port"])
            check_type(argname="argument api_server_load_balancer_spec", value=api_server_load_balancer_spec, expected_type=type_hints["api_server_load_balancer_spec"])
            check_type(argname="argument api_server_public_eip", value=api_server_public_eip, expected_type=type_hints["api_server_public_eip"])
            check_type(argname="argument audit_project", value=audit_project, expected_type=type_hints["audit_project"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cert_chain", value=cert_chain, expected_type=type_hints["cert_chain"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument config_source_enabled", value=config_source_enabled, expected_type=type_hints["config_source_enabled"])
            check_type(argname="argument config_source_nacos_id", value=config_source_nacos_id, expected_type=type_hints["config_source_nacos_id"])
            check_type(argname="argument control_plane_log_enabled", value=control_plane_log_enabled, expected_type=type_hints["control_plane_log_enabled"])
            check_type(argname="argument control_plane_log_project", value=control_plane_log_project, expected_type=type_hints["control_plane_log_project"])
            check_type(argname="argument cr_aggregation_enabled", value=cr_aggregation_enabled, expected_type=type_hints["cr_aggregation_enabled"])
            check_type(argname="argument customized_prometheus", value=customized_prometheus, expected_type=type_hints["customized_prometheus"])
            check_type(argname="argument customized_zipkin", value=customized_zipkin, expected_type=type_hints["customized_zipkin"])
            check_type(argname="argument dns_proxying_enabled", value=dns_proxying_enabled, expected_type=type_hints["dns_proxying_enabled"])
            check_type(argname="argument dubbo_filter_enabled", value=dubbo_filter_enabled, expected_type=type_hints["dubbo_filter_enabled"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument enable_acmg", value=enable_acmg, expected_type=type_hints["enable_acmg"])
            check_type(argname="argument enable_ambient", value=enable_ambient, expected_type=type_hints["enable_ambient"])
            check_type(argname="argument enable_audit", value=enable_audit, expected_type=type_hints["enable_audit"])
            check_type(argname="argument enable_cr_history", value=enable_cr_history, expected_type=type_hints["enable_cr_history"])
            check_type(argname="argument enable_sds_server", value=enable_sds_server, expected_type=type_hints["enable_sds_server"])
            check_type(argname="argument exclude_inbound_ports", value=exclude_inbound_ports, expected_type=type_hints["exclude_inbound_ports"])
            check_type(argname="argument exclude_ip_ranges", value=exclude_ip_ranges, expected_type=type_hints["exclude_ip_ranges"])
            check_type(argname="argument exclude_outbound_ports", value=exclude_outbound_ports, expected_type=type_hints["exclude_outbound_ports"])
            check_type(argname="argument existing_ca_cert", value=existing_ca_cert, expected_type=type_hints["existing_ca_cert"])
            check_type(argname="argument existing_ca_key", value=existing_ca_key, expected_type=type_hints["existing_ca_key"])
            check_type(argname="argument existing_ca_type", value=existing_ca_type, expected_type=type_hints["existing_ca_type"])
            check_type(argname="argument existing_root_ca_cert", value=existing_root_ca_cert, expected_type=type_hints["existing_root_ca_cert"])
            check_type(argname="argument existing_root_ca_key", value=existing_root_ca_key, expected_type=type_hints["existing_root_ca_key"])
            check_type(argname="argument filter_gateway_cluster_config", value=filter_gateway_cluster_config, expected_type=type_hints["filter_gateway_cluster_config"])
            check_type(argname="argument gateway_api_enabled", value=gateway_api_enabled, expected_type=type_hints["gateway_api_enabled"])
            check_type(argname="argument guest_cluster", value=guest_cluster, expected_type=type_hints["guest_cluster"])
            check_type(argname="argument include_ip_ranges", value=include_ip_ranges, expected_type=type_hints["include_ip_ranges"])
            check_type(argname="argument istio_version", value=istio_version, expected_type=type_hints["istio_version"])
            check_type(argname="argument kiali_enabled", value=kiali_enabled, expected_type=type_hints["kiali_enabled"])
            check_type(argname="argument locality_lb_conf", value=locality_lb_conf, expected_type=type_hints["locality_lb_conf"])
            check_type(argname="argument locality_load_balancing", value=locality_load_balancing, expected_type=type_hints["locality_load_balancing"])
            check_type(argname="argument mse_enabled", value=mse_enabled, expected_type=type_hints["mse_enabled"])
            check_type(argname="argument multi_buffer_enabled", value=multi_buffer_enabled, expected_type=type_hints["multi_buffer_enabled"])
            check_type(argname="argument multi_buffer_poll_delay", value=multi_buffer_poll_delay, expected_type=type_hints["multi_buffer_poll_delay"])
            check_type(argname="argument mysql_filter_enabled", value=mysql_filter_enabled, expected_type=type_hints["mysql_filter_enabled"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument opa", value=opa, expected_type=type_hints["opa"])
            check_type(argname="argument opa_enabled", value=opa_enabled, expected_type=type_hints["opa_enabled"])
            check_type(argname="argument outbound_traffic_policy", value=outbound_traffic_policy, expected_type=type_hints["outbound_traffic_policy"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument pilot_load_balancer_spec", value=pilot_load_balancer_spec, expected_type=type_hints["pilot_load_balancer_spec"])
            check_type(argname="argument pilot_public_eip", value=pilot_public_eip, expected_type=type_hints["pilot_public_eip"])
            check_type(argname="argument playground_scene", value=playground_scene, expected_type=type_hints["playground_scene"])
            check_type(argname="argument prometheus_url", value=prometheus_url, expected_type=type_hints["prometheus_url"])
            check_type(argname="argument proxy", value=proxy, expected_type=type_hints["proxy"])
            check_type(argname="argument telemetry", value=telemetry, expected_type=type_hints["telemetry"])
            check_type(argname="argument trace_sampling", value=trace_sampling, expected_type=type_hints["trace_sampling"])
            check_type(argname="argument tracing", value=tracing, expected_type=type_hints["tracing"])
            check_type(argname="argument use_existing_ca", value=use_existing_ca, expected_type=type_hints["use_existing_ca"])
            check_type(argname="argument web_assembly_filter_enabled", value=web_assembly_filter_enabled, expected_type=type_hints["web_assembly_filter_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switches": v_switches,
        }
        if access_log_enabled is not None:
            self._values["access_log_enabled"] = access_log_enabled
        if access_log_file is not None:
            self._values["access_log_file"] = access_log_file
        if access_log_format is not None:
            self._values["access_log_format"] = access_log_format
        if access_log_project is not None:
            self._values["access_log_project"] = access_log_project
        if access_log_service_enabled is not None:
            self._values["access_log_service_enabled"] = access_log_service_enabled
        if access_log_service_host is not None:
            self._values["access_log_service_host"] = access_log_service_host
        if access_log_service_port is not None:
            self._values["access_log_service_port"] = access_log_service_port
        if api_server_load_balancer_spec is not None:
            self._values["api_server_load_balancer_spec"] = api_server_load_balancer_spec
        if api_server_public_eip is not None:
            self._values["api_server_public_eip"] = api_server_public_eip
        if audit_project is not None:
            self._values["audit_project"] = audit_project
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cert_chain is not None:
            self._values["cert_chain"] = cert_chain
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if config_source_enabled is not None:
            self._values["config_source_enabled"] = config_source_enabled
        if config_source_nacos_id is not None:
            self._values["config_source_nacos_id"] = config_source_nacos_id
        if control_plane_log_enabled is not None:
            self._values["control_plane_log_enabled"] = control_plane_log_enabled
        if control_plane_log_project is not None:
            self._values["control_plane_log_project"] = control_plane_log_project
        if cr_aggregation_enabled is not None:
            self._values["cr_aggregation_enabled"] = cr_aggregation_enabled
        if customized_prometheus is not None:
            self._values["customized_prometheus"] = customized_prometheus
        if customized_zipkin is not None:
            self._values["customized_zipkin"] = customized_zipkin
        if dns_proxying_enabled is not None:
            self._values["dns_proxying_enabled"] = dns_proxying_enabled
        if dubbo_filter_enabled is not None:
            self._values["dubbo_filter_enabled"] = dubbo_filter_enabled
        if edition is not None:
            self._values["edition"] = edition
        if enable_acmg is not None:
            self._values["enable_acmg"] = enable_acmg
        if enable_ambient is not None:
            self._values["enable_ambient"] = enable_ambient
        if enable_audit is not None:
            self._values["enable_audit"] = enable_audit
        if enable_cr_history is not None:
            self._values["enable_cr_history"] = enable_cr_history
        if enable_sds_server is not None:
            self._values["enable_sds_server"] = enable_sds_server
        if exclude_inbound_ports is not None:
            self._values["exclude_inbound_ports"] = exclude_inbound_ports
        if exclude_ip_ranges is not None:
            self._values["exclude_ip_ranges"] = exclude_ip_ranges
        if exclude_outbound_ports is not None:
            self._values["exclude_outbound_ports"] = exclude_outbound_ports
        if existing_ca_cert is not None:
            self._values["existing_ca_cert"] = existing_ca_cert
        if existing_ca_key is not None:
            self._values["existing_ca_key"] = existing_ca_key
        if existing_ca_type is not None:
            self._values["existing_ca_type"] = existing_ca_type
        if existing_root_ca_cert is not None:
            self._values["existing_root_ca_cert"] = existing_root_ca_cert
        if existing_root_ca_key is not None:
            self._values["existing_root_ca_key"] = existing_root_ca_key
        if filter_gateway_cluster_config is not None:
            self._values["filter_gateway_cluster_config"] = filter_gateway_cluster_config
        if gateway_api_enabled is not None:
            self._values["gateway_api_enabled"] = gateway_api_enabled
        if guest_cluster is not None:
            self._values["guest_cluster"] = guest_cluster
        if include_ip_ranges is not None:
            self._values["include_ip_ranges"] = include_ip_ranges
        if istio_version is not None:
            self._values["istio_version"] = istio_version
        if kiali_enabled is not None:
            self._values["kiali_enabled"] = kiali_enabled
        if locality_lb_conf is not None:
            self._values["locality_lb_conf"] = locality_lb_conf
        if locality_load_balancing is not None:
            self._values["locality_load_balancing"] = locality_load_balancing
        if mse_enabled is not None:
            self._values["mse_enabled"] = mse_enabled
        if multi_buffer_enabled is not None:
            self._values["multi_buffer_enabled"] = multi_buffer_enabled
        if multi_buffer_poll_delay is not None:
            self._values["multi_buffer_poll_delay"] = multi_buffer_poll_delay
        if mysql_filter_enabled is not None:
            self._values["mysql_filter_enabled"] = mysql_filter_enabled
        if name is not None:
            self._values["name"] = name
        if opa is not None:
            self._values["opa"] = opa
        if opa_enabled is not None:
            self._values["opa_enabled"] = opa_enabled
        if outbound_traffic_policy is not None:
            self._values["outbound_traffic_policy"] = outbound_traffic_policy
        if period is not None:
            self._values["period"] = period
        if pilot_load_balancer_spec is not None:
            self._values["pilot_load_balancer_spec"] = pilot_load_balancer_spec
        if pilot_public_eip is not None:
            self._values["pilot_public_eip"] = pilot_public_eip
        if playground_scene is not None:
            self._values["playground_scene"] = playground_scene
        if prometheus_url is not None:
            self._values["prometheus_url"] = prometheus_url
        if proxy is not None:
            self._values["proxy"] = proxy
        if telemetry is not None:
            self._values["telemetry"] = telemetry
        if trace_sampling is not None:
            self._values["trace_sampling"] = trace_sampling
        if tracing is not None:
            self._values["tracing"] = tracing
        if use_existing_ca is not None:
            self._values["use_existing_ca"] = use_existing_ca
        if web_assembly_filter_enabled is not None:
            self._values["web_assembly_filter_enabled"] = web_assembly_filter_enabled

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
    def access_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogEnabled: Specifies whether to enable access logging.
        '''
        result = self._values.get("access_log_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessLogFile: Enable and disable access logs. Value:

        - "" : Turn off access logs.
        - /dev/stdout: Enables access logging
        '''
        result = self._values.get("access_log_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogFormat: The format of access logs.
        '''
        result = self._values.get("access_log_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogProject: The Log Service project for access logs.
        '''
        result = self._values.get("access_log_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value:

        - true: Enables Envoy's gRPC logging service.
        - false: Envoy's gRPC logging service is not enabled.
        Default value: false
        '''
        result = self._values.get("access_log_service_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
        '''
        result = self._values.get("access_log_service_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
        '''
        result = self._values.get("access_log_service_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_server_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
        '''
        result = self._values.get("api_server_load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value:

        - true: Automatic renewal.
        - false: No automatic renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_chain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
        '''
        result = self._values.get("cert_chain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: CLB payment type. Value:

        - PayOnDemand: pay-as-you-go type
        - PrePay: Annual and monthly.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterSpec: Service grid instance specification, value:

        - standard: The standard version.
        - enterprise: Enterprise Edition
        - ultimate: ultimate.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_source_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        configSourceEnabled: Whether to enable an external service registry. Value:

        - true: Enables the external service registry.
        - false: The external service registry is not enabled.
        Default value: false
        '''
        result = self._values.get("config_source_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_source_nacos_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configSourceNacosId: The Nacos ID for config source.
        '''
        result = self._values.get("config_source_nacos_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def control_plane_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: controlPlaneLogEnabled: Specifies whether to enable control plane logging.
        '''
        result = self._values.get("control_plane_log_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def control_plane_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: controlPlaneLogProject: The Log Service project for control plane logs.
        '''
        result = self._values.get("control_plane_log_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cr_aggregation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value:

        - true: Enable data plane cluster Kubernetes API to access Istio resources.
        - false: Data plane cluster Kubernetes API is not enabled to access Istio resources.
        Default value: false
        '''
        result = self._values.get("cr_aggregation_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def customized_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: customizedPrometheus: Specifies whether to use a customized Prometheus system.
        '''
        result = self._values.get("customized_prometheus")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def dns_proxying_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dnsProxyingEnabled: Specifies whether to enable DNS proxying.
        '''
        result = self._values.get("dns_proxying_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dubbo_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dubboFilterEnabled: Specifies whether to enable Dubbo filter.
        '''
        result = self._values.get("dubbo_filter_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: edition: The edition of the ASM instance.
        '''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_acmg(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAcmg: Specifies whether to enable ACMG.
        '''
        result = self._values.get("enable_acmg")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_ambient(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAmbient: Specifies whether to enable ambient mode.
        '''
        result = self._values.get("enable_ambient")
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
    def enable_cr_history(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableCrHistory: Specifies whether to enable CR history.
        '''
        result = self._values.get("enable_cr_history")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_sds_server(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableSdsServer: Specifies whether to enable SDS server.
        '''
        result = self._values.get("enable_sds_server")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_inbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeInboundPorts: The inbound ports to exclude from traffic management.
        '''
        result = self._values.get("exclude_inbound_ports")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeIpRanges: The IP ranges to exclude from traffic management.
        '''
        result = self._values.get("exclude_ip_ranges")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_outbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: excludeOutboundPorts: The outbound ports to exclude from traffic management.
        '''
        result = self._values.get("exclude_outbound_ports")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaCert: The existing CA certificate.
        '''
        result = self._values.get("existing_ca_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaKey: The existing CA key.
        '''
        result = self._values.get("existing_ca_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingCaType: The type of existing CA.
        '''
        result = self._values.get("existing_ca_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_root_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingRootCaCert: The existing root CA certificate.
        '''
        result = self._values.get("existing_root_ca_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_root_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: existingRootCaKey: The existing root CA key.
        '''
        result = self._values.get("existing_root_ca_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_gateway_cluster_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
        '''
        result = self._values.get("filter_gateway_cluster_config")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gateway_api_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: gatewayApiEnabled: Specifies whether to enable Gateway API.
        '''
        result = self._values.get("gateway_api_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def guest_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: guestCluster: The guest cluster configuration.
        '''
        result = self._values.get("guest_cluster")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def kiali_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kialiEnabled: Specifies whether to enable Kiali.
        '''
        result = self._values.get("kiali_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def locality_lb_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: localityLbConf: The locality load balancing configuration.
        '''
        result = self._values.get("locality_lb_conf")
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
    def mse_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mseEnabled: Specifies whether to enable MSE.
        '''
        result = self._values.get("mse_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_buffer_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiBufferEnabled: Specifies whether to enable multi-buffer.
        '''
        result = self._values.get("multi_buffer_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_buffer_poll_delay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiBufferPollDelay: The poll delay for multi-buffer.
        '''
        result = self._values.get("multi_buffer_poll_delay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mysql_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mysqlFilterEnabled: Specifies whether to enable MySQL filter.
        '''
        result = self._values.get("mysql_filter_enabled")
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
    def opa_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: opaEnabled: Specifies whether to enable OPA.
        '''
        result = self._values.get("opa_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The subscription period.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pilot_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pilotLoadBalancerSpec: The specification for the pilot load balancer.
        '''
        result = self._values.get("pilot_load_balancer_spec")
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
    def playground_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: playgroundScene: The playground scene configuration.
        '''
        result = self._values.get("playground_scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusUrl: The URL for Prometheus.
        '''
        result = self._values.get("prometheus_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

    @builtins.property
    def use_existing_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: useExistingCa: Specifies whether to use an existing CA.
        '''
        result = self._values.get("use_existing_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_assembly_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
        '''
        result = self._values.get("web_assembly_filter_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceMeshProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServiceMesh)
class ServiceMesh(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-asm.ServiceMesh",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ASM::ServiceMesh``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServiceMesh``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceMeshProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_service_mesh_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServiceMeshId: The ID of the ASM instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServiceMeshId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServiceMeshProps":
        return typing.cast("ServiceMeshProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd4ee0d53d99bfad9adf102b1fb5bae3419710d1105bdce7b3c781916af858bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34809437f20cfaf1d558347202dc8cd22b89cf37038e77146c53b8ef502a410e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77eef398dad75e7a19032fc8e4c857e40275be000f9b6c377cb889c68eb6e51c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-asm.ServiceMeshProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switches": "vSwitches",
        "access_log_enabled": "accessLogEnabled",
        "access_log_file": "accessLogFile",
        "access_log_format": "accessLogFormat",
        "access_log_project": "accessLogProject",
        "access_log_service_enabled": "accessLogServiceEnabled",
        "access_log_service_host": "accessLogServiceHost",
        "access_log_service_port": "accessLogServicePort",
        "api_server_load_balancer_spec": "apiServerLoadBalancerSpec",
        "api_server_public_eip": "apiServerPublicEip",
        "audit_project": "auditProject",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "cert_chain": "certChain",
        "charge_type": "chargeType",
        "cluster_spec": "clusterSpec",
        "config_source_enabled": "configSourceEnabled",
        "config_source_nacos_id": "configSourceNacosId",
        "control_plane_log_enabled": "controlPlaneLogEnabled",
        "control_plane_log_project": "controlPlaneLogProject",
        "cr_aggregation_enabled": "crAggregationEnabled",
        "customized_prometheus": "customizedPrometheus",
        "customized_zipkin": "customizedZipkin",
        "dns_proxying_enabled": "dnsProxyingEnabled",
        "dubbo_filter_enabled": "dubboFilterEnabled",
        "edition": "edition",
        "enable_acmg": "enableAcmg",
        "enable_ambient": "enableAmbient",
        "enable_audit": "enableAudit",
        "enable_cr_history": "enableCrHistory",
        "enable_sds_server": "enableSdsServer",
        "exclude_inbound_ports": "excludeInboundPorts",
        "exclude_ip_ranges": "excludeIpRanges",
        "exclude_outbound_ports": "excludeOutboundPorts",
        "existing_ca_cert": "existingCaCert",
        "existing_ca_key": "existingCaKey",
        "existing_ca_type": "existingCaType",
        "existing_root_ca_cert": "existingRootCaCert",
        "existing_root_ca_key": "existingRootCaKey",
        "filter_gateway_cluster_config": "filterGatewayClusterConfig",
        "gateway_api_enabled": "gatewayApiEnabled",
        "guest_cluster": "guestCluster",
        "include_ip_ranges": "includeIpRanges",
        "istio_version": "istioVersion",
        "kiali_enabled": "kialiEnabled",
        "locality_lb_conf": "localityLbConf",
        "locality_load_balancing": "localityLoadBalancing",
        "mse_enabled": "mseEnabled",
        "multi_buffer_enabled": "multiBufferEnabled",
        "multi_buffer_poll_delay": "multiBufferPollDelay",
        "mysql_filter_enabled": "mysqlFilterEnabled",
        "name": "name",
        "opa": "opa",
        "opa_enabled": "opaEnabled",
        "outbound_traffic_policy": "outboundTrafficPolicy",
        "period": "period",
        "pilot_load_balancer_spec": "pilotLoadBalancerSpec",
        "pilot_public_eip": "pilotPublicEip",
        "playground_scene": "playgroundScene",
        "prometheus_url": "prometheusUrl",
        "proxy": "proxy",
        "telemetry": "telemetry",
        "trace_sampling": "traceSampling",
        "tracing": "tracing",
        "use_existing_ca": "useExistingCa",
        "web_assembly_filter_enabled": "webAssemblyFilterEnabled",
    },
)
class ServiceMeshProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        access_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        access_log_service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_server_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_chain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_source_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config_source_nacos_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        control_plane_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        control_plane_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cr_aggregation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dns_proxying_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dubbo_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_acmg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_ambient: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_cr_history: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_sds_server: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_inbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclude_outbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_ca_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_root_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        existing_root_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filter_gateway_cluster_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        gateway_api_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        guest_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kiali_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_lb_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mse_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_buffer_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_buffer_poll_delay: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mysql_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        opa_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        playground_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        use_existing_ca: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        web_assembly_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ServiceMesh``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-asm-servicemesh

        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC).
        :param v_switches: Property vSwitches: The ID of the vSwitch, eg: ["vsw-xzegf5dndkbf4m6eg****"].
        :param access_log_enabled: Property accessLogEnabled: Specifies whether to enable access logging.
        :param access_log_file: Property accessLogFile: Enable and disable access logs. Value: - "" : Turn off access logs. - /dev/stdout: Enables access logging
        :param access_log_format: Property accessLogFormat: The format of access logs.
        :param access_log_project: Property accessLogProject: The Log Service project for access logs.
        :param access_log_service_enabled: Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled. Value: - true: Enables Envoy's gRPC logging service. - false: Envoy's gRPC logging service is not enabled. Default value: false
        :param access_log_service_host: Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.
        :param access_log_service_port: Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.
        :param api_server_load_balancer_spec: Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding. Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
        :param api_server_public_eip: Property apiServerPublicEip: Specifies whether to expose the API server to the Internet. Valid values: true and false. Default value: false. If you do not set this parameter, the API server of clusters added to the ASM instance cannot be accessed from the Internet.
        :param audit_project: Property auditProject: The name of the Log Service project that is used for mesh audit. Default value: mesh-log-{meshId}.
        :param auto_renew: Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed. Value: - true: Automatic renewal. - false: No automatic renewal.
        :param auto_renew_period: Property autoRenewPeriod: ChargeType is a PrePay. Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
        :param cert_chain: Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.
        :param charge_type: Property chargeType: CLB payment type. Value: - PayOnDemand: pay-as-you-go type - PrePay: Annual and monthly.
        :param cluster_spec: Property clusterSpec: Service grid instance specification, value: - standard: The standard version. - enterprise: Enterprise Edition - ultimate: ultimate.
        :param config_source_enabled: Property configSourceEnabled: Whether to enable an external service registry. Value: - true: Enables the external service registry. - false: The external service registry is not enabled. Default value: false
        :param config_source_nacos_id: Property configSourceNacosId: The Nacos ID for config source.
        :param control_plane_log_enabled: Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.
        :param control_plane_log_project: Property controlPlaneLogProject: The Log Service project for control plane logs.
        :param cr_aggregation_enabled: Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.
        :param customized_prometheus: Property customizedPrometheus: Specifies whether to use a customized Prometheus system.
        :param customized_zipkin: Property customizedZipkin: Specifies whether to use a user-created Zipkin system.
        :param dns_proxying_enabled: Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.
        :param dubbo_filter_enabled: Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.
        :param edition: Property edition: The edition of the ASM instance.
        :param enable_acmg: Property enableAcmg: Specifies whether to enable ACMG.
        :param enable_ambient: Property enableAmbient: Specifies whether to enable ambient mode.
        :param enable_audit: Property enableAudit: Specifies whether to enable the mesh audit feature. To enable this feature, make sure that you have activated Alibaba Cloud Log Service. Valid values: true and false. Default value: false.
        :param enable_cr_history: Property enableCrHistory: Specifies whether to enable CR history.
        :param enable_sds_server: Property enableSdsServer: Specifies whether to enable SDS server.
        :param exclude_inbound_ports: Property excludeInboundPorts: The inbound ports to exclude from traffic management.
        :param exclude_ip_ranges: Property excludeIpRanges: The IP ranges to exclude from traffic management.
        :param exclude_outbound_ports: Property excludeOutboundPorts: The outbound ports to exclude from traffic management.
        :param existing_ca_cert: Property existingCaCert: The existing CA certificate.
        :param existing_ca_key: Property existingCaKey: The existing CA key.
        :param existing_ca_type: Property existingCaType: The type of existing CA.
        :param existing_root_ca_cert: Property existingRootCaCert: The existing root CA certificate.
        :param existing_root_ca_key: Property existingRootCaKey: The existing root CA key.
        :param filter_gateway_cluster_config: Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.
        :param gateway_api_enabled: Property gatewayApiEnabled: Specifies whether to enable Gateway API.
        :param guest_cluster: Property guestCluster: The guest cluster configuration.
        :param include_ip_ranges: Property includeIpRanges: The Classless Inter-Domain Routing (CIDR) block in the ASM instance that are denied to access external services.
        :param istio_version: Property istioVersion: The Istio version of the ASM instance.
        :param kiali_enabled: Property kialiEnabled: Specifies whether to enable Kiali.
        :param locality_lb_conf: Property localityLbConf: The locality load balancing configuration.
        :param locality_load_balancing: Property localityLoadBalancing: Specifies whether to route traffic to the nearest instance. Valid values: true and false. Default value: false.
        :param mse_enabled: Property mseEnabled: Specifies whether to enable MSE.
        :param multi_buffer_enabled: Property multiBufferEnabled: Specifies whether to enable multi-buffer.
        :param multi_buffer_poll_delay: Property multiBufferPollDelay: The poll delay for multi-buffer.
        :param mysql_filter_enabled: Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.
        :param name: Property name: The name of the ASM instance.
        :param opa: Property opa: OPA settings.
        :param opa_enabled: Property opaEnabled: Specifies whether to enable OPA.
        :param outbound_traffic_policy: Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.
        :param period: Property period: The subscription period.
        :param pilot_load_balancer_spec: Property pilotLoadBalancerSpec: The specification for the pilot load balancer.
        :param pilot_public_eip: Property pilotPublicEip: Specifies whether to expose Istio Pilot to the Internet. Valid values: true and false. Default value: false. If you do not set this parameter, only clusters in the same VPC as the ASM instance can access Istio Pilot of the instance.
        :param playground_scene: Property playgroundScene: The playground scene configuration.
        :param prometheus_url: Property prometheusUrl: The URL for Prometheus.
        :param proxy: Property proxy: Proxy settings.
        :param telemetry: Property telemetry: Specifies whether to enable Prometheus monitoring. We recommend that you use Application Real-Time Monitoring Service (ARMS).
        :param trace_sampling: Property traceSampling: The sampling percentage of tracing.
        :param tracing: Property tracing: Specifies whether to enable the tracing feature. To enable this feature, make sure that you have activated Alibaba Cloud Tracing Analysis. Valid values: true and false. Default value: false.
        :param use_existing_ca: Property useExistingCa: Specifies whether to use an existing CA.
        :param web_assembly_filter_enabled: Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed14ee0f0c3faeeb7237cc647a355ce5d2f8d14160c9af19b533701c843495f0)
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switches", value=v_switches, expected_type=type_hints["v_switches"])
            check_type(argname="argument access_log_enabled", value=access_log_enabled, expected_type=type_hints["access_log_enabled"])
            check_type(argname="argument access_log_file", value=access_log_file, expected_type=type_hints["access_log_file"])
            check_type(argname="argument access_log_format", value=access_log_format, expected_type=type_hints["access_log_format"])
            check_type(argname="argument access_log_project", value=access_log_project, expected_type=type_hints["access_log_project"])
            check_type(argname="argument access_log_service_enabled", value=access_log_service_enabled, expected_type=type_hints["access_log_service_enabled"])
            check_type(argname="argument access_log_service_host", value=access_log_service_host, expected_type=type_hints["access_log_service_host"])
            check_type(argname="argument access_log_service_port", value=access_log_service_port, expected_type=type_hints["access_log_service_port"])
            check_type(argname="argument api_server_load_balancer_spec", value=api_server_load_balancer_spec, expected_type=type_hints["api_server_load_balancer_spec"])
            check_type(argname="argument api_server_public_eip", value=api_server_public_eip, expected_type=type_hints["api_server_public_eip"])
            check_type(argname="argument audit_project", value=audit_project, expected_type=type_hints["audit_project"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cert_chain", value=cert_chain, expected_type=type_hints["cert_chain"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument cluster_spec", value=cluster_spec, expected_type=type_hints["cluster_spec"])
            check_type(argname="argument config_source_enabled", value=config_source_enabled, expected_type=type_hints["config_source_enabled"])
            check_type(argname="argument config_source_nacos_id", value=config_source_nacos_id, expected_type=type_hints["config_source_nacos_id"])
            check_type(argname="argument control_plane_log_enabled", value=control_plane_log_enabled, expected_type=type_hints["control_plane_log_enabled"])
            check_type(argname="argument control_plane_log_project", value=control_plane_log_project, expected_type=type_hints["control_plane_log_project"])
            check_type(argname="argument cr_aggregation_enabled", value=cr_aggregation_enabled, expected_type=type_hints["cr_aggregation_enabled"])
            check_type(argname="argument customized_prometheus", value=customized_prometheus, expected_type=type_hints["customized_prometheus"])
            check_type(argname="argument customized_zipkin", value=customized_zipkin, expected_type=type_hints["customized_zipkin"])
            check_type(argname="argument dns_proxying_enabled", value=dns_proxying_enabled, expected_type=type_hints["dns_proxying_enabled"])
            check_type(argname="argument dubbo_filter_enabled", value=dubbo_filter_enabled, expected_type=type_hints["dubbo_filter_enabled"])
            check_type(argname="argument edition", value=edition, expected_type=type_hints["edition"])
            check_type(argname="argument enable_acmg", value=enable_acmg, expected_type=type_hints["enable_acmg"])
            check_type(argname="argument enable_ambient", value=enable_ambient, expected_type=type_hints["enable_ambient"])
            check_type(argname="argument enable_audit", value=enable_audit, expected_type=type_hints["enable_audit"])
            check_type(argname="argument enable_cr_history", value=enable_cr_history, expected_type=type_hints["enable_cr_history"])
            check_type(argname="argument enable_sds_server", value=enable_sds_server, expected_type=type_hints["enable_sds_server"])
            check_type(argname="argument exclude_inbound_ports", value=exclude_inbound_ports, expected_type=type_hints["exclude_inbound_ports"])
            check_type(argname="argument exclude_ip_ranges", value=exclude_ip_ranges, expected_type=type_hints["exclude_ip_ranges"])
            check_type(argname="argument exclude_outbound_ports", value=exclude_outbound_ports, expected_type=type_hints["exclude_outbound_ports"])
            check_type(argname="argument existing_ca_cert", value=existing_ca_cert, expected_type=type_hints["existing_ca_cert"])
            check_type(argname="argument existing_ca_key", value=existing_ca_key, expected_type=type_hints["existing_ca_key"])
            check_type(argname="argument existing_ca_type", value=existing_ca_type, expected_type=type_hints["existing_ca_type"])
            check_type(argname="argument existing_root_ca_cert", value=existing_root_ca_cert, expected_type=type_hints["existing_root_ca_cert"])
            check_type(argname="argument existing_root_ca_key", value=existing_root_ca_key, expected_type=type_hints["existing_root_ca_key"])
            check_type(argname="argument filter_gateway_cluster_config", value=filter_gateway_cluster_config, expected_type=type_hints["filter_gateway_cluster_config"])
            check_type(argname="argument gateway_api_enabled", value=gateway_api_enabled, expected_type=type_hints["gateway_api_enabled"])
            check_type(argname="argument guest_cluster", value=guest_cluster, expected_type=type_hints["guest_cluster"])
            check_type(argname="argument include_ip_ranges", value=include_ip_ranges, expected_type=type_hints["include_ip_ranges"])
            check_type(argname="argument istio_version", value=istio_version, expected_type=type_hints["istio_version"])
            check_type(argname="argument kiali_enabled", value=kiali_enabled, expected_type=type_hints["kiali_enabled"])
            check_type(argname="argument locality_lb_conf", value=locality_lb_conf, expected_type=type_hints["locality_lb_conf"])
            check_type(argname="argument locality_load_balancing", value=locality_load_balancing, expected_type=type_hints["locality_load_balancing"])
            check_type(argname="argument mse_enabled", value=mse_enabled, expected_type=type_hints["mse_enabled"])
            check_type(argname="argument multi_buffer_enabled", value=multi_buffer_enabled, expected_type=type_hints["multi_buffer_enabled"])
            check_type(argname="argument multi_buffer_poll_delay", value=multi_buffer_poll_delay, expected_type=type_hints["multi_buffer_poll_delay"])
            check_type(argname="argument mysql_filter_enabled", value=mysql_filter_enabled, expected_type=type_hints["mysql_filter_enabled"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument opa", value=opa, expected_type=type_hints["opa"])
            check_type(argname="argument opa_enabled", value=opa_enabled, expected_type=type_hints["opa_enabled"])
            check_type(argname="argument outbound_traffic_policy", value=outbound_traffic_policy, expected_type=type_hints["outbound_traffic_policy"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument pilot_load_balancer_spec", value=pilot_load_balancer_spec, expected_type=type_hints["pilot_load_balancer_spec"])
            check_type(argname="argument pilot_public_eip", value=pilot_public_eip, expected_type=type_hints["pilot_public_eip"])
            check_type(argname="argument playground_scene", value=playground_scene, expected_type=type_hints["playground_scene"])
            check_type(argname="argument prometheus_url", value=prometheus_url, expected_type=type_hints["prometheus_url"])
            check_type(argname="argument proxy", value=proxy, expected_type=type_hints["proxy"])
            check_type(argname="argument telemetry", value=telemetry, expected_type=type_hints["telemetry"])
            check_type(argname="argument trace_sampling", value=trace_sampling, expected_type=type_hints["trace_sampling"])
            check_type(argname="argument tracing", value=tracing, expected_type=type_hints["tracing"])
            check_type(argname="argument use_existing_ca", value=use_existing_ca, expected_type=type_hints["use_existing_ca"])
            check_type(argname="argument web_assembly_filter_enabled", value=web_assembly_filter_enabled, expected_type=type_hints["web_assembly_filter_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switches": v_switches,
        }
        if access_log_enabled is not None:
            self._values["access_log_enabled"] = access_log_enabled
        if access_log_file is not None:
            self._values["access_log_file"] = access_log_file
        if access_log_format is not None:
            self._values["access_log_format"] = access_log_format
        if access_log_project is not None:
            self._values["access_log_project"] = access_log_project
        if access_log_service_enabled is not None:
            self._values["access_log_service_enabled"] = access_log_service_enabled
        if access_log_service_host is not None:
            self._values["access_log_service_host"] = access_log_service_host
        if access_log_service_port is not None:
            self._values["access_log_service_port"] = access_log_service_port
        if api_server_load_balancer_spec is not None:
            self._values["api_server_load_balancer_spec"] = api_server_load_balancer_spec
        if api_server_public_eip is not None:
            self._values["api_server_public_eip"] = api_server_public_eip
        if audit_project is not None:
            self._values["audit_project"] = audit_project
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cert_chain is not None:
            self._values["cert_chain"] = cert_chain
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if cluster_spec is not None:
            self._values["cluster_spec"] = cluster_spec
        if config_source_enabled is not None:
            self._values["config_source_enabled"] = config_source_enabled
        if config_source_nacos_id is not None:
            self._values["config_source_nacos_id"] = config_source_nacos_id
        if control_plane_log_enabled is not None:
            self._values["control_plane_log_enabled"] = control_plane_log_enabled
        if control_plane_log_project is not None:
            self._values["control_plane_log_project"] = control_plane_log_project
        if cr_aggregation_enabled is not None:
            self._values["cr_aggregation_enabled"] = cr_aggregation_enabled
        if customized_prometheus is not None:
            self._values["customized_prometheus"] = customized_prometheus
        if customized_zipkin is not None:
            self._values["customized_zipkin"] = customized_zipkin
        if dns_proxying_enabled is not None:
            self._values["dns_proxying_enabled"] = dns_proxying_enabled
        if dubbo_filter_enabled is not None:
            self._values["dubbo_filter_enabled"] = dubbo_filter_enabled
        if edition is not None:
            self._values["edition"] = edition
        if enable_acmg is not None:
            self._values["enable_acmg"] = enable_acmg
        if enable_ambient is not None:
            self._values["enable_ambient"] = enable_ambient
        if enable_audit is not None:
            self._values["enable_audit"] = enable_audit
        if enable_cr_history is not None:
            self._values["enable_cr_history"] = enable_cr_history
        if enable_sds_server is not None:
            self._values["enable_sds_server"] = enable_sds_server
        if exclude_inbound_ports is not None:
            self._values["exclude_inbound_ports"] = exclude_inbound_ports
        if exclude_ip_ranges is not None:
            self._values["exclude_ip_ranges"] = exclude_ip_ranges
        if exclude_outbound_ports is not None:
            self._values["exclude_outbound_ports"] = exclude_outbound_ports
        if existing_ca_cert is not None:
            self._values["existing_ca_cert"] = existing_ca_cert
        if existing_ca_key is not None:
            self._values["existing_ca_key"] = existing_ca_key
        if existing_ca_type is not None:
            self._values["existing_ca_type"] = existing_ca_type
        if existing_root_ca_cert is not None:
            self._values["existing_root_ca_cert"] = existing_root_ca_cert
        if existing_root_ca_key is not None:
            self._values["existing_root_ca_key"] = existing_root_ca_key
        if filter_gateway_cluster_config is not None:
            self._values["filter_gateway_cluster_config"] = filter_gateway_cluster_config
        if gateway_api_enabled is not None:
            self._values["gateway_api_enabled"] = gateway_api_enabled
        if guest_cluster is not None:
            self._values["guest_cluster"] = guest_cluster
        if include_ip_ranges is not None:
            self._values["include_ip_ranges"] = include_ip_ranges
        if istio_version is not None:
            self._values["istio_version"] = istio_version
        if kiali_enabled is not None:
            self._values["kiali_enabled"] = kiali_enabled
        if locality_lb_conf is not None:
            self._values["locality_lb_conf"] = locality_lb_conf
        if locality_load_balancing is not None:
            self._values["locality_load_balancing"] = locality_load_balancing
        if mse_enabled is not None:
            self._values["mse_enabled"] = mse_enabled
        if multi_buffer_enabled is not None:
            self._values["multi_buffer_enabled"] = multi_buffer_enabled
        if multi_buffer_poll_delay is not None:
            self._values["multi_buffer_poll_delay"] = multi_buffer_poll_delay
        if mysql_filter_enabled is not None:
            self._values["mysql_filter_enabled"] = mysql_filter_enabled
        if name is not None:
            self._values["name"] = name
        if opa is not None:
            self._values["opa"] = opa
        if opa_enabled is not None:
            self._values["opa_enabled"] = opa_enabled
        if outbound_traffic_policy is not None:
            self._values["outbound_traffic_policy"] = outbound_traffic_policy
        if period is not None:
            self._values["period"] = period
        if pilot_load_balancer_spec is not None:
            self._values["pilot_load_balancer_spec"] = pilot_load_balancer_spec
        if pilot_public_eip is not None:
            self._values["pilot_public_eip"] = pilot_public_eip
        if playground_scene is not None:
            self._values["playground_scene"] = playground_scene
        if prometheus_url is not None:
            self._values["prometheus_url"] = prometheus_url
        if proxy is not None:
            self._values["proxy"] = proxy
        if telemetry is not None:
            self._values["telemetry"] = telemetry
        if trace_sampling is not None:
            self._values["trace_sampling"] = trace_sampling
        if tracing is not None:
            self._values["tracing"] = tracing
        if use_existing_ca is not None:
            self._values["use_existing_ca"] = use_existing_ca
        if web_assembly_filter_enabled is not None:
            self._values["web_assembly_filter_enabled"] = web_assembly_filter_enabled

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
    def access_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogEnabled: Specifies whether to enable access logging.'''
        result = self._values.get("access_log_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_file(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogFile: Enable and disable access logs.

        Value:

        - "" : Turn off access logs.
        - /dev/stdout: Enables access logging
        '''
        result = self._values.get("access_log_file")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_format(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogFormat: The format of access logs.'''
        result = self._values.get("access_log_format")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogProject: The Log Service project for access logs.'''
        result = self._values.get("access_log_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogServiceEnabled: Whether Envoy's gRPC logging service (ALS) is enabled.

        Value:

        - true: Enables Envoy's gRPC logging service.
        - false: Envoy's gRPC logging service is not enabled.
          Default value: false
        '''
        result = self._values.get("access_log_service_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_host(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogServiceHost: Address where Envoy's gRPC logging service (ALS) is enabled.'''
        result = self._values.get("access_log_service_host")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def access_log_service_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accessLogServicePort: Port on which Envoy's gRPC logging service (ALS) is enabled.'''
        result = self._values.get("access_log_service_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def api_server_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiServerLoadBalancerSpec: CLB specification for the APIServer binding.

        Value: Compact type I (slb.s1.small), Standard type I (slb.s2.small), Standard Type II (slb.s2.medium), high-order type I (slb.s3.small), high-order type II (slb.s3.medium), Super type I (slb.s3.large).
        '''
        result = self._values.get("api_server_load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: If CLB is annual and monthly, whether it will be automatically renewed.

        Value:

        - true: Automatic renewal.
        - false: No automatic renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: ChargeType is a PrePay.

        Indicates the automatic renewal time when purchasing a CLB of the year and month type. If the purchase is less than 1 year old, this parameter indicates how many months the auto-renewal will take. If the purchase is longer than 1 year, this parameter indicates how many years the automatic renewal will be made.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_chain(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certChain: The certificate chain from CaCert to RootCert contains at least two certificates.'''
        result = self._values.get("cert_chain")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: CLB payment type.

        Value:

        - PayOnDemand: pay-as-you-go type
        - PrePay: Annual and monthly.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterSpec: Service grid instance specification, value: - standard: The standard version.

        - enterprise: Enterprise Edition
        - ultimate: ultimate.
        '''
        result = self._values.get("cluster_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_source_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configSourceEnabled: Whether to enable an external service registry.

        Value:

        - true: Enables the external service registry.
        - false: The external service registry is not enabled.
          Default value: false
        '''
        result = self._values.get("config_source_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config_source_nacos_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configSourceNacosId: The Nacos ID for config source.'''
        result = self._values.get("config_source_nacos_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def control_plane_log_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property controlPlaneLogEnabled: Specifies whether to enable control plane logging.'''
        result = self._values.get("control_plane_log_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def control_plane_log_project(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property controlPlaneLogProject: The Log Service project for control plane logs.'''
        result = self._values.get("control_plane_log_project")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cr_aggregation_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crAggregationEnabled: Whether to enable Kubernetes API for data plane cluster to access Istio resources (ASM instance v1.9.7.93 or later). Value: - true: Enable data plane cluster Kubernetes API to access Istio resources. - false: Data plane cluster Kubernetes API is not enabled to access Istio resources. Default value: false.'''
        result = self._values.get("cr_aggregation_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def customized_prometheus(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property customizedPrometheus: Specifies whether to use a customized Prometheus system.'''
        result = self._values.get("customized_prometheus")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def customized_zipkin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property customizedZipkin: Specifies whether to use a user-created Zipkin system.'''
        result = self._values.get("customized_zipkin")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dns_proxying_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dnsProxyingEnabled: Specifies whether to enable DNS proxying.'''
        result = self._values.get("dns_proxying_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dubbo_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dubboFilterEnabled: Specifies whether to enable Dubbo filter.'''
        result = self._values.get("dubbo_filter_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def edition(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property edition: The edition of the ASM instance.'''
        result = self._values.get("edition")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_acmg(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAcmg: Specifies whether to enable ACMG.'''
        result = self._values.get("enable_acmg")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_ambient(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAmbient: Specifies whether to enable ambient mode.'''
        result = self._values.get("enable_ambient")
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
    def enable_cr_history(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableCrHistory: Specifies whether to enable CR history.'''
        result = self._values.get("enable_cr_history")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_sds_server(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableSdsServer: Specifies whether to enable SDS server.'''
        result = self._values.get("enable_sds_server")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_inbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeInboundPorts: The inbound ports to exclude from traffic management.'''
        result = self._values.get("exclude_inbound_ports")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_ip_ranges(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeIpRanges: The IP ranges to exclude from traffic management.'''
        result = self._values.get("exclude_ip_ranges")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclude_outbound_ports(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property excludeOutboundPorts: The outbound ports to exclude from traffic management.'''
        result = self._values.get("exclude_outbound_ports")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property existingCaCert: The existing CA certificate.'''
        result = self._values.get("existing_ca_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property existingCaKey: The existing CA key.'''
        result = self._values.get("existing_ca_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_ca_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property existingCaType: The type of existing CA.'''
        result = self._values.get("existing_ca_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_root_ca_cert(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property existingRootCaCert: The existing root CA certificate.'''
        result = self._values.get("existing_root_ca_cert")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def existing_root_ca_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property existingRootCaKey: The existing root CA key.'''
        result = self._values.get("existing_root_ca_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filter_gateway_cluster_config(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filterGatewayClusterConfig: Specifies whether to filter gateway cluster configuration.'''
        result = self._values.get("filter_gateway_cluster_config")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def gateway_api_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property gatewayApiEnabled: Specifies whether to enable Gateway API.'''
        result = self._values.get("gateway_api_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def guest_cluster(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property guestCluster: The guest cluster configuration.'''
        result = self._values.get("guest_cluster")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def kiali_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kialiEnabled: Specifies whether to enable Kiali.'''
        result = self._values.get("kiali_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def locality_lb_conf(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localityLbConf: The locality load balancing configuration.'''
        result = self._values.get("locality_lb_conf")
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
    def mse_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mseEnabled: Specifies whether to enable MSE.'''
        result = self._values.get("mse_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_buffer_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiBufferEnabled: Specifies whether to enable multi-buffer.'''
        result = self._values.get("multi_buffer_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_buffer_poll_delay(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiBufferPollDelay: The poll delay for multi-buffer.'''
        result = self._values.get("multi_buffer_poll_delay")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mysql_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mysqlFilterEnabled: Specifies whether to enable MySQL filter.'''
        result = self._values.get("mysql_filter_enabled")
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
    def opa_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property opaEnabled: Specifies whether to enable OPA.'''
        result = self._values.get("opa_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def outbound_traffic_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property outboundTrafficPolicy: The outbound traffic policy of the ASM instance.'''
        result = self._values.get("outbound_traffic_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pilot_load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pilotLoadBalancerSpec: The specification for the pilot load balancer.'''
        result = self._values.get("pilot_load_balancer_spec")
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
    def playground_scene(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property playgroundScene: The playground scene configuration.'''
        result = self._values.get("playground_scene")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property prometheusUrl: The URL for Prometheus.'''
        result = self._values.get("prometheus_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

    @builtins.property
    def use_existing_ca(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property useExistingCa: Specifies whether to use an existing CA.'''
        result = self._values.get("use_existing_ca")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def web_assembly_filter_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property webAssemblyFilterEnabled: Specifies whether to enable WebAssembly filter.'''
        result = self._values.get("web_assembly_filter_enabled")
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
    "IServiceMesh",
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

def _typecheckingstub__d4ff8a3c2d24a38cc30b66c2e17d3f1f86a0591523c5a35b95256ca29338033f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f162ae1c0286294030b1de2c175caa9908b096dd7f6e6ad52f1b3c40e741153(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e47f02149b8b20431b11eaceef2b2cf6ae27c8c1603d6095c2e695f7b49ac9f6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39124dd9fe1d4f8578730273edaf05cceb4b6264d6f50067dd3555d31435fe7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e25b3e78542a552bbccef16db9e316689d3d89e4b6b0df7c9c38b3f9963fed5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2edc46036eb5a13bae0836358d6e0f9b9bd768290832aa87d4a78128e82b557(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c68fd792c8c128a98a550229575a107f1895925c9347d70a737aadf85de451c1(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8042ce60766b7bbd60bf41fdfc02152ce9c254a270018b5d99019850d4683b65(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__6226650956f130ae1ddd4fdcadfa9eca325a1ff8bd7d50fdfe9c30ec1b9352f9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d834d076cbeffcf0e8c857c8ed95935b3913ae088c8422139bce96afe917d47(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dccc464107e55ec9352946c14971bc492ea7f2cc2d3a955e7e278986ed921f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d78569d9c51e44a3574a9b907a6509330fbfa69018a86e8b83a390bc516ae8b4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a1b82ad12d95653d41bd43f05e7b30824d0ccb7a76e7e177de01e0106d2e3b5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__881abf3fd4a23925f3c8cca73d5a0a6dea3d04ff21c47472fcfe1bff5b0ebc88(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__193782ddb61ef722247770ee518d235108135201bb0c35c3e4047e65fc7d2106(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edeb228d340dbd69c3a1090d5095ce1adb2c8fadced8ea0a91149e19157bf708(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2362834716d728b68e034371672524765b166961e7d2110b33ebd28682cd88e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08c8a90cdd61e0feaf85c18ca52cf7948b2ca406453fd6f47aeda7c730b24fc7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a89aec6a9c9b18c18e826fd75ed97d379752a4df12e4f3added75ddb96d3210b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1ece318baee321d850a185a0489ecdde7710ff53d54c4ef3ff15eaac63eaa60(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a5c6128202dba57219c717e363a03862f5db1756f171b9b25859e1376ddfce1e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6283ed99dbdb1587ca9b4afa8b66a06f7031359953a1dd18741e2f314d5982e9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b46491bfb979527c5986c1955a369ee307b5893d6298cb48fa9e44bcb9ca0a1d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5d411c8a4357b7bc64176b8ca8b6d478779282972ebe2de7ad1a16ced6f3a34(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a52e713864f1e3ae9bc925d4c4009b0a88c479ee66861fa0531f8d94ddae3384(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0dffad68eb690dc5b760ad154d5784fcc03eb8bc0a3b7d99270e10f52ce39f8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e50765b7bf5eb0476b3b098810cf2324a1f9e9a11c3517670f76075bd2f95f38(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29d29d82213d419e45d0b08e1a9c67a181ee53a6b6d9081354616f4fb994c0b2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__801cc0cceefe0dda805d3e23c2aeecb658955a17449b5f7f1d4f0d3f4e04d2ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b808729bed64a51dded1f8f8623ecba42b55fc04eda26a5e21fe535e023a401(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c98a7abad55ca5cc57b57d6ef85614a884b879c6a0dfde4d334116c829fb987a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50471b23c40a55b5c46abde9a442dc8f1511d86754389806e2f354e640024fd1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91b717b621972be064082c9fb39d1078d09ed06a39552119ca71066c9df01d3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be793f3b8e4202e36b11828acbdade9a42d0fbc31b4dc01696a4fa1b7f4fccfc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52bef52663ff971766d76cd6ca46de9db1f036b0286ed6e09c0208191acfa003(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4a261461fcfc23a58e8dead1d0aa0348247a060a872b2e797483977a0c9af6f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6cc065ba7cf64ef37e4bffde6ba0b81a9bd4849ea0ac4ec84536bab6a65da23(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9466c5267890890214e560c7669405de74e705e5e87ce244b563acf9b02d8133(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9cb95a3c80903dba8f45b2620d4ef691b42c4126e3e07b52b6c8339f5868737f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__fc4ad981d5eca39f1f4abe1bd0bf6d9f2da459f13a3aa075652337038dd9fc1e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60162bcc46d1add12b79d424a03ea25d9aa8078c443cd72fcca0c47f2bc1ef62(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc953c7bf3b7477b608bd0b3775b9b58e9fab00e01b4150c4433da3dbebb890(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba736c4301c06605830cc0387d25a73d911e63c5149280bed3de20fa667830b1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eb7fe02927af1e6885b4f7a21c572908d26e954a0a0954cffa18d7d7088c72e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cd39fccf408c3cda2cc1a0ee8c3f54431586aa81875d654975e6629fc0e84bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1749ab28b16180e6a2204100a15fb62ef92b794cd2ecdf3661019e3f3eda5a11(
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

def _typecheckingstub__622f6b766d89410bd3e3678a2f74ab56b2e42dbad3aeee9ae9d2674d6ad99cb7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d76119bdece07a8eaea5f816b8ae7af0ef092ca32fb8cd2277d3b5ce13de55a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b23c505a08bafe0d3a88a4306fc5c10ca027ace6069be0f9c547d426136a5e7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3481336e804edc16f235fdc2c8d38d0c013113cf2f95cb9263057652fa741a01(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba2964577de6f9dddb93446044c6516b47acfe426755e02c0749cbee9455f5af(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0877a7b40e5f931830a46f98d14cefd3e4da21c09865f40aadc82b04f515c407(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acb2acb89912b599d73c840a85fe40236b37118030d6073862d718a9c5a4bbc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
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

def _typecheckingstub__58b33e49d90a3c1dc0687f8cf8cf9f08edfeb8f2ece5562fc3af728706960af8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea7a3ad6a94094e0d3e85450dfadca3dd78c5c5ac8ee1fc2011617b514aee627(
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
    access_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_server_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_chain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_source_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_source_nacos_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    control_plane_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    control_plane_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cr_aggregation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_proxying_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dubbo_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_acmg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_ambient: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_cr_history: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sds_server: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_inbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_outbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_root_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_root_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_gateway_cluster_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_api_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    guest_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kiali_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_lb_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_buffer_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_buffer_poll_delay: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mysql_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    opa_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    playground_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    use_existing_ca: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_assembly_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__dd4ee0d53d99bfad9adf102b1fb5bae3419710d1105bdce7b3c781916af858bf(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34809437f20cfaf1d558347202dc8cd22b89cf37038e77146c53b8ef502a410e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77eef398dad75e7a19032fc8e4c857e40275be000f9b6c377cb889c68eb6e51c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed14ee0f0c3faeeb7237cc647a355ce5d2f8d14160c9af19b533701c843495f0(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switches: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    access_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_format: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_host: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    access_log_service_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_server_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_server_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    audit_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_chain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_source_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config_source_nacos_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    control_plane_log_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    control_plane_log_project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cr_aggregation_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_prometheus: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    customized_zipkin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dns_proxying_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dubbo_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    edition: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_acmg: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_ambient: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_audit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_cr_history: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_sds_server: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_inbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclude_outbound_ports: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_ca_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_root_ca_cert: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    existing_root_ca_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filter_gateway_cluster_config: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gateway_api_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    guest_cluster: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    include_ip_ranges: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    istio_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kiali_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_lb_conf: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    locality_load_balancing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mse_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_buffer_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_buffer_poll_delay: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mysql_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    opa: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.OPAProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    opa_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    outbound_traffic_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pilot_public_eip: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    playground_scene: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServiceMesh.ProxyProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    telemetry: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    trace_sampling: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    use_existing_ca: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    web_assembly_filter_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
