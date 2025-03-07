'''
## Aliyun ROS NLB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as NLB from '@alicloud/ros-cdk-nlb';
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.BackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"server_group_id": "serverGroupId", "servers": "servers"},
)
class BackendServerAttachmentProps:
    def __init__(
        self,
        *,
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBackendServerAttachment.ServersProperty", typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``BackendServerAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment

        :param server_group_id: Property serverGroupId: The ID of the server group.
        :param servers: Property servers: The backend servers that you want to add to the server group. You can specify up to 200 servers in each call.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__508c6c8175ebe41c0e37f3ce6e413145a5ae2dd124538f58145504594c497c64)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverGroupId: The ID of the server group.'''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''Property servers: The backend servers that you want to add to the server group.

        You can specify up to
        200 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.IBackendServerAttachment")
class IBackendServerAttachment(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``BackendServerAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: The ID of the server group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackendServerAttachmentProps:
        ...


class _IBackendServerAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BackendServerAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.IBackendServerAttachment"

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackendServerAttachmentProps:
        return typing.cast(BackendServerAttachmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBackendServerAttachment).__jsii_proxy_class__ = lambda : _IBackendServerAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.IListener")
class IListener(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Listener``.'''

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerId: Id of created Listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: ListenerPort of created Listener.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ListenerProps":
        ...


class _IListenerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Listener``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.IListener"

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerId: Id of created Listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: ListenerPort of created Listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ListenerProps":
        return typing.cast("ListenerProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IListener).__jsii_proxy_class__ = lambda : _IListenerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.ILoadBalancer")
class ILoadBalancer(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``LoadBalancer``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The type of IP address that the NLB instance uses to provide services.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DNSName: The domain name of the NLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the NLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerType: The type of the NLB instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        ...


class _ILoadBalancerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``LoadBalancer``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.ILoadBalancer"

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The type of IP address that the NLB instance uses to provide services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DNSName: The domain name of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerType: The type of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        return typing.cast("LoadBalancerProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ILoadBalancer).__jsii_proxy_class__ = lambda : _ILoadBalancerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.ISecurityGroupAttachment")
class ISecurityGroupAttachment(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``SecurityGroupAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityGroupAttachmentProps":
        ...


class _ISecurityGroupAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SecurityGroupAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.ISecurityGroupAttachment"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityGroupAttachmentProps":
        return typing.cast("SecurityGroupAttachmentProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISecurityGroupAttachment).__jsii_proxy_class__ = lambda : _ISecurityGroupAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.ISecurityPolicy")
class ISecurityPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SecurityPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityPolicyId: The ID of the security policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityPolicyProps":
        ...


class _ISecurityPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SecurityPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.ISecurityPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityPolicyId: The ID of the security policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityPolicyProps":
        return typing.cast("SecurityPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISecurityPolicy).__jsii_proxy_class__ = lambda : _ISecurityPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-nlb.IServerGroup")
class IServerGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ServerGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: ID of ServerGroup.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServerGroupProps":
        ...


class _IServerGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ServerGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-nlb.IServerGroup"

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: ID of ServerGroup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServerGroupProps":
        return typing.cast("ServerGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IServerGroup).__jsii_proxy_class__ = lambda : _IServerGroupProxy


@jsii.implements(IListener)
class Listener(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.Listener",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::Listener``, which is used to create a listener.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosListener``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c3b95ddf963d32a0ad8d75f827efb171a3c488a5222b17a4ccbc953e0643e5a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerId: Id of created Listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ListenerPort: ListenerPort of created Listener.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ListenerProps":
        return typing.cast("ListenerProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46a78ff69c111f7c4d022d54ed1a80774119310bc8ae5e6f19e5ce6bd6fcbe49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ef52e46178e719e30dc45389b94d33df7aab97be2cf767fd36d75e0e37ee36e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddcf6b7e599f849a5a756dd694f1b6cb382d7a4a974ff1d0be1ba57a4b613a5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_protocol": "listenerProtocol",
        "load_balancer_id": "loadBalancerId",
        "server_group_id": "serverGroupId",
        "alpn_enabled": "alpnEnabled",
        "alpn_policy": "alpnPolicy",
        "ca_certificate_ids": "caCertificateIds",
        "ca_enabled": "caEnabled",
        "certificate_ids": "certificateIds",
        "cps": "cps",
        "enable": "enable",
        "end_port": "endPort",
        "idle_timeout": "idleTimeout",
        "listener_description": "listenerDescription",
        "listener_port": "listenerPort",
        "mss": "mss",
        "proxy_protocol_enabled": "proxyProtocolEnabled",
        "proxy_protocol_v2_config": "proxyProtocolV2Config",
        "sec_sensor_enabled": "secSensorEnabled",
        "security_policy_id": "securityPolicyId",
        "start_port": "startPort",
        "tags": "tags",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alpn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alpn_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        cps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mss: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol_v2_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.ProxyProtocolV2ConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosListener.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Listener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener

        :param listener_protocol: Property listenerProtocol: undefined.
        :param load_balancer_id: Property loadBalancerId: ID of the LoadBalancer.
        :param server_group_id: Property serverGroupId: ID of the ServerGroup.
        :param alpn_enabled: Property alpnEnabled: undefined.
        :param alpn_policy: Property alpnPolicy: Proxy of alpn.
        :param ca_certificate_ids: Property caCertificateIds: List of the ca certificate ids.
        :param ca_enabled: Property caEnabled: Whether to open CA.
        :param certificate_ids: Property certificateIds: List of the certificate ids.
        :param cps: Property cps: New connection rate limit of Instance.
        :param enable: Property enable: Whether to start listener or not. Default True.
        :param end_port: Property endPort: EndPort of the portRange.
        :param idle_timeout: Property idleTimeout: Specifies the connection idle timeout.
        :param listener_description: Property listenerDescription: Description of the listener, [2, 256] characters.
        :param listener_port: Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.
        :param mss: Property mss: Max length of the TCP packet.
        :param proxy_protocol_enabled: Property proxyProtocolEnabled: Whether to enable ppv2 function.
        :param proxy_protocol_v2_config: Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener.
        :param sec_sensor_enabled: Property secSensorEnabled: Whether to enable the second-level monitoring function.
        :param security_policy_id: Property securityPolicyId: Only valid for TcpSSL protocol monitoring.
        :param start_port: Property startPort: StartPort of the portRange.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66eece6d77d62c5e1d23326abca0d11321228029eaad1477d06a98b4a9fd5093)
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument alpn_enabled", value=alpn_enabled, expected_type=type_hints["alpn_enabled"])
            check_type(argname="argument alpn_policy", value=alpn_policy, expected_type=type_hints["alpn_policy"])
            check_type(argname="argument ca_certificate_ids", value=ca_certificate_ids, expected_type=type_hints["ca_certificate_ids"])
            check_type(argname="argument ca_enabled", value=ca_enabled, expected_type=type_hints["ca_enabled"])
            check_type(argname="argument certificate_ids", value=certificate_ids, expected_type=type_hints["certificate_ids"])
            check_type(argname="argument cps", value=cps, expected_type=type_hints["cps"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument end_port", value=end_port, expected_type=type_hints["end_port"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument listener_description", value=listener_description, expected_type=type_hints["listener_description"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument mss", value=mss, expected_type=type_hints["mss"])
            check_type(argname="argument proxy_protocol_enabled", value=proxy_protocol_enabled, expected_type=type_hints["proxy_protocol_enabled"])
            check_type(argname="argument proxy_protocol_v2_config", value=proxy_protocol_v2_config, expected_type=type_hints["proxy_protocol_v2_config"])
            check_type(argname="argument sec_sensor_enabled", value=sec_sensor_enabled, expected_type=type_hints["sec_sensor_enabled"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_protocol": listener_protocol,
            "load_balancer_id": load_balancer_id,
            "server_group_id": server_group_id,
        }
        if alpn_enabled is not None:
            self._values["alpn_enabled"] = alpn_enabled
        if alpn_policy is not None:
            self._values["alpn_policy"] = alpn_policy
        if ca_certificate_ids is not None:
            self._values["ca_certificate_ids"] = ca_certificate_ids
        if ca_enabled is not None:
            self._values["ca_enabled"] = ca_enabled
        if certificate_ids is not None:
            self._values["certificate_ids"] = certificate_ids
        if cps is not None:
            self._values["cps"] = cps
        if enable is not None:
            self._values["enable"] = enable
        if end_port is not None:
            self._values["end_port"] = end_port
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if listener_description is not None:
            self._values["listener_description"] = listener_description
        if listener_port is not None:
            self._values["listener_port"] = listener_port
        if mss is not None:
            self._values["mss"] = mss
        if proxy_protocol_enabled is not None:
            self._values["proxy_protocol_enabled"] = proxy_protocol_enabled
        if proxy_protocol_v2_config is not None:
            self._values["proxy_protocol_v2_config"] = proxy_protocol_v2_config
        if sec_sensor_enabled is not None:
            self._values["sec_sensor_enabled"] = sec_sensor_enabled
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if start_port is not None:
            self._values["start_port"] = start_port
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerProtocol: undefined.'''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: ID of the LoadBalancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverGroupId: ID of the ServerGroup.'''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alpnEnabled: undefined.'''
        result = self._values.get("alpn_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alpnPolicy: Proxy of alpn.'''
        result = self._values.get("alpn_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property caCertificateIds: List of the ca certificate ids.'''
        result = self._values.get("ca_certificate_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property caEnabled: Whether to open CA.'''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property certificateIds: List of the certificate ids.'''
        result = self._values.get("certificate_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cps: New connection rate limit of Instance.'''
        result = self._values.get("cps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Whether to start listener or not.

        Default True.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endPort: EndPort of the portRange.'''
        result = self._values.get("end_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property idleTimeout: Specifies the connection idle timeout.'''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property listenerDescription: Description of the listener, [2, 256] characters.'''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.'''
        result = self._values.get("listener_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mss: Max length of the TCP packet.'''
        result = self._values.get("mss")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyProtocolEnabled: Whether to enable ppv2 function.'''
        result = self._values.get("proxy_protocol_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol_v2_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ProxyProtocolV2ConfigProperty"]]:
        '''Property proxyProtocolV2Config: ProxyProtocolV2Config of the listener.'''
        result = self._values.get("proxy_protocol_v2_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ProxyProtocolV2ConfigProperty"]], result)

    @builtins.property
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secSensorEnabled: Whether to enable the second-level monitoring function.'''
        result = self._values.get("sec_sensor_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityPolicyId: Only valid for TcpSSL protocol monitoring.'''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startPort: StartPort of the portRange.'''
        result = self._values.get("start_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosListener.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosListener.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ILoadBalancer)
class LoadBalancer(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.LoadBalancer",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::LoadBalancer``, which is used to create a Network Load Balancer (NLB) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosLoadBalancer``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d960e7ff3c7b6bebd72789115185ba61704d970e6822020f9f3b32d36e1e9a2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AddressType: The type of IP address that the NLB instance uses to provide services.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DNSName: The domain name of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerId: The ID of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LoadBalancerType: The type of the NLB instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLoadBalancerType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "LoadBalancerProps":
        return typing.cast("LoadBalancerProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__796456936cba122bdacf44a201171c1e9e8cc70f1849dd92eeb7ec044b6b3351)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02ae6f760c0a70ba91bf1b86a67e8ff723bb3da7dab38ae6822f1d09eb445f26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9d5e71dc242cc03027fbff8d6b0eccfa8635ad353998fedcea6c816f275ad3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.LoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "address_ip_version": "addressIpVersion",
        "bandwidth_package_id": "bandwidthPackageId",
        "cross_zone_enabled": "crossZoneEnabled",
        "deletion_protection_config": "deletionProtectionConfig",
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_type": "loadBalancerType",
        "modification_protection_config": "modificationProtectionConfig",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "traffic_affinity_enabled": "trafficAffinityEnabled",
    },
)
class LoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.ZoneMappingsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.DeletionProtectionConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        load_balancer_billing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.LoadBalancerBillingConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.ModificationProtectionConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancer.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``LoadBalancer``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer

        :param address_type: Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values: Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet. Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        :param zone_mappings: Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        :param address_ip_version: Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        :param bandwidth_package_id: Property bandwidthPackageId: Attach common bandwidth package to load balancer.
        :param cross_zone_enabled: Property crossZoneEnabled: Whether enable cross zone. Default: true
        :param deletion_protection_config: Property deletionProtectionConfig: The configuration of the deletion protection feature.
        :param load_balancer_billing_config: Property loadBalancerBillingConfig: The configuration of the billing method.
        :param load_balancer_name: Property loadBalancerName: The name of the NLB instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        :param load_balancer_type: Property loadBalancerType: The type of the NLB instance.
        :param modification_protection_config: Property modificationProtectionConfig: The configuration of the configuration read-only mode.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param traffic_affinity_enabled: Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a99234faf4880821ea0d08457356773cc3c216e6fe50932b6701bbea8a4034a4)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument cross_zone_enabled", value=cross_zone_enabled, expected_type=type_hints["cross_zone_enabled"])
            check_type(argname="argument deletion_protection_config", value=deletion_protection_config, expected_type=type_hints["deletion_protection_config"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_type", value=load_balancer_type, expected_type=type_hints["load_balancer_type"])
            check_type(argname="argument modification_protection_config", value=modification_protection_config, expected_type=type_hints["modification_protection_config"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument traffic_affinity_enabled", value=traffic_affinity_enabled, expected_type=type_hints["traffic_affinity_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_type": address_type,
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if cross_zone_enabled is not None:
            self._values["cross_zone_enabled"] = cross_zone_enabled
        if deletion_protection_config is not None:
            self._values["deletion_protection_config"] = deletion_protection_config
        if load_balancer_billing_config is not None:
            self._values["load_balancer_billing_config"] = load_balancer_billing_config
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_type is not None:
            self._values["load_balancer_type"] = load_balancer_type
        if modification_protection_config is not None:
            self._values["modification_protection_config"] = modification_protection_config
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if traffic_affinity_enabled is not None:
            self._values["traffic_affinity_enabled"] = traffic_affinity_enabled

    @builtins.property
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addressType: The type of IP address that the NLB instance uses to provide services.

        Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''Property zoneMappings: The zones and the vSwitches in the zones.

        You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidthPackageId: Attach common bandwidth package to load balancer.'''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property crossZoneEnabled: Whether enable cross zone.

        Default: true
        '''
        result = self._values.get("cross_zone_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.DeletionProtectionConfigProperty"]]:
        '''Property deletionProtectionConfig: The configuration of the deletion protection feature.'''
        result = self._values.get("deletion_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.DeletionProtectionConfigProperty"]], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]]:
        '''Property loadBalancerBillingConfig: The configuration of the billing method.'''
        result = self._values.get("load_balancer_billing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerName: The name of the NLB instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerType: The type of the NLB instance.'''
        result = self._values.get("load_balancer_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''Property modificationProtectionConfig: The configuration of the configuration read-only mode.'''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], result)

    @builtins.property
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trafficAffinityEnabled: Whether enable traffic affinity.

        Default: false
        '''
        result = self._values.get("traffic_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosBackendServerAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::BackendServerAttachment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BackendServerAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackendServerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c8155cfe2ecc175fe7643c42490562caa8f5f1436783475dcb7ae643ee7e87)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ccd72620dd9fede9cdb90a88c6d21e5a9dbefefb0e9f2435dce4ade4203bc0d7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerGroupId: The ID of the server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1d2ceb8f0f2eccb1f33ccb69221dda892cfae399bc7fe1c60bccbf93ccd4c227)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupId")
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverGroupId"))

    @server_group_id.setter
    def server_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5451a79aff81fe4c555ed6d075e1faf8d1b4246aad91bd7114be5cfc6c4be106)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="servers")
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        200 servers in each call.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]], jsii.get(self, "servers"))

    @servers.setter
    def servers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.ServersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a04bf7ca716dce9a3752a2d77ff60eb8883c05d8d6bdc09f772fb4227d85c92a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servers", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosBackendServerAttachment.ServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_id": "serverId",
            "server_type": "serverType",
            "description": "description",
            "port": "port",
            "server_ip": "serverIp",
            "weight": "weight",
        },
    )
    class ServersProperty:
        def __init__(
            self,
            *,
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param server_type: 
            :param description: 
            :param port: 
            :param server_ip: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c65b44fe881a6572b4f1d8d1eccc367548248a05b0fc626777f1b79853be2a57)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_id": server_id,
                "server_type": server_type,
            }
            if description is not None:
                self._values["description"] = description
            if port is not None:
                self._values["port"] = port
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: The ID of the server.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            serverType: The type of the backend server. Valid values:
            Ecs: an ECS instance
            Eni: an ENI
            Eci: an elastic container instance
            Ip: an IP address
            '''
            result = self._values.get("server_type")
            assert result is not None, "Required property 'server_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: ), underscores (_), and hyphens (-).
            :Property: description:  The description of the servers. The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port used by the backend server. Valid values: 0 to 65535.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP address of the server. If the server group type is Ip, set the ServerId parameter to an IP address.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100. If the weight of a backend server is set to 0, no requests are forwarded to the backend server.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosBackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"server_group_id": "serverGroupId", "servers": "servers"},
)
class RosBackendServerAttachmentProps:
    def __init__(
        self,
        *,
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``RosBackendServerAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment

        :param server_group_id: 
        :param servers: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec887e7e7d424f195705c001541efdb52557897918fab5358f9da4aa95568c01)
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_id": server_group_id,
            "servers": servers,
        }

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: The ID of the server group.
        '''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]]:
        '''
        :Property:

        servers: The backend servers that you want to add to the server group. You can specify up to
        200 servers in each call.
        '''
        result = self._values.get("servers")
        assert result is not None, "Required property 'servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosListener",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::Listener``, which is used to create a listener.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Listener`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__327e09201f6a5ad749c315d704f7307f6c155182ff1f4f6ddaffc17b388c6aca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b951177986212f6aee2b1b8cd99bace62e7cd29ae449a7ea2a1a7201987f879e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerId: Id of created Listener
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPort: ListenerPort of created Listener
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c6f22be737cfc90e7c55ec57a7ca6b1732a791d2a1356d1be102eb810b0a6775)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerProtocol: undefined
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e61097baec47b6848775444d60aadabfc4f5215d2309786e544584875b25150a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: ID of the LoadBalancer
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4af1db9fd7a612502274b15f1200871494365e35fc0c240eb6e819622812799d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupId")
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: ID of the ServerGroup
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverGroupId"))

    @server_group_id.setter
    def server_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__edb9ef4e76101c5b6873d0681cd21009a86b82beffdd2b7e55a62f6cf153ee47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="alpnEnabled")
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alpnEnabled: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alpnEnabled"))

    @alpn_enabled.setter
    def alpn_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0f05dedd6302ef3061700b5ef51d2c6ff471e18d4ef14b1b7f961ae746e5069)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alpnEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="alpnPolicy")
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alpnPolicy: Proxy of alpn
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alpnPolicy"))

    @alpn_policy.setter
    def alpn_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38e693d9c4267fdd5d45ea293a2799dced0b64529017d420e3bff463ce0946f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alpnPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="caCertificateIds")
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: caCertificateIds: List of the ca certificate ids
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "caCertificateIds"))

    @ca_certificate_ids.setter
    def ca_certificate_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cf1bfaa5f69f23a754bd0a555881e8c54141f389465804fefa5e1be590bbcf8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caCertificateIds", value)

    @builtins.property
    @jsii.member(jsii_name="caEnabled")
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caEnabled: Whether to open CA
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "caEnabled"))

    @ca_enabled.setter
    def ca_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bccdfca7089edc322a5471b8ab8f600097e497dabc215ced7385eec1251c7d84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="certificateIds")
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: certificateIds: List of the certificate ids
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "certificateIds"))

    @certificate_ids.setter
    def certificate_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8343ded91b027ff6a5ba8f0ae0635678b598f3463403b705e9768b8523bcedb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificateIds", value)

    @builtins.property
    @jsii.member(jsii_name="cps")
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cps: New connection rate limit of Instance
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cps"))

    @cps.setter
    def cps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__814d6ce3419bb34af5cfbc5f3e7831330f57afed82ef6c56507e205b77f4d3b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cps", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Whether to start listener or not. Default True.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce283bfc59bddf9d02c682bef07f3a9a3d6f3103a60c58f6e6fe57fa1152d350)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="endPort")
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endPort: EndPort of the portRange
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endPort"))

    @end_port.setter
    def end_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfd894a94a666d8ff3121211c9ec24611dc41b58eee0cbaaf50d11f596ab6456)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endPort", value)

    @builtins.property
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: idleTimeout: Specifies the connection idle timeout
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16c6ae0f725385fc2d32cf16cc782b4016011b2c36beb8a40cd325dedbcaff2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "idleTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="listenerDescription")
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerDescription: Description of the listener, [2, 256] characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "listenerDescription"))

    @listener_description.setter
    def listener_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__604aacb305e52dee0cfd362b95a0b78847d54f74b30135c47cf193fd80d2c133)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerDescription", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ef5dfd2ad63660e61fc9f91a6761679a069d2d2f45345660be3e7cea7b27451)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="mss")
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mss: Max length of the TCP packet
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mss"))

    @mss.setter
    def mss(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd271dd6269aae065ce8d0915734df8249afbde2813d13b2435cabe262b2b4d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mss", value)

    @builtins.property
    @jsii.member(jsii_name="proxyProtocolEnabled")
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyProtocolEnabled: Whether to enable ppv2 function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyProtocolEnabled"))

    @proxy_protocol_enabled.setter
    def proxy_protocol_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__966fc65bbf74a919e9a2bb023748af456b3e46548f6c935965147ded717fd61c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyProtocolEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="proxyProtocolV2Config")
    def proxy_protocol_v2_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ProxyProtocolV2ConfigProperty"]]:
        '''
        :Property: proxyProtocolV2Config: ProxyProtocolV2Config of the listener
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ProxyProtocolV2ConfigProperty"]], jsii.get(self, "proxyProtocolV2Config"))

    @proxy_protocol_v2_config.setter
    def proxy_protocol_v2_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.ProxyProtocolV2ConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2610531133215bf86eaefd33a242a7b8ed9b35ac0041786646b95aaf0fcc8d0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyProtocolV2Config", value)

    @builtins.property
    @jsii.member(jsii_name="secSensorEnabled")
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secSensorEnabled: Whether to enable the second-level monitoring function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secSensorEnabled"))

    @sec_sensor_enabled.setter
    def sec_sensor_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a58d4e83d90b00bdb3edb1768b32738716ca9cc761808ab3e1d7d8f80b1c5c4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secSensorEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyId")
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityPolicyId: Only valid for TcpSSL protocol monitoring
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityPolicyId"))

    @security_policy_id.setter
    def security_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ed6e5207a1bafedd1d2fc8c1178433d88b6df95cc4641bd0964b44259881969)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="startPort")
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startPort: StartPort of the portRange
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startPort"))

    @start_port.setter
    def start_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d75a8f33e71b3e35214692dcc04fa08ddc76d8d8a41225638bc31a93736d1251)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startPort", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosListener.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosListener.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosListener.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54875f49f17460b281c1518b96ae81ae6b158cd2501e283f88a5967962bae678)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosListener.ProxyProtocolV2ConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ppv2_private_link_ep_id_enabled": "ppv2PrivateLinkEpIdEnabled",
            "ppv2_private_link_eps_id_enabled": "ppv2PrivateLinkEpsIdEnabled",
            "ppv2_vpc_id_enabled": "ppv2VpcIdEnabled",
        },
    )
    class ProxyProtocolV2ConfigProperty:
        def __init__(
            self,
            *,
            ppv2_private_link_ep_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ppv2_private_link_eps_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ppv2_vpc_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ppv2_private_link_ep_id_enabled: 
            :param ppv2_private_link_eps_id_enabled: 
            :param ppv2_vpc_id_enabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5b1aa33cbc3352c4026cb6110e94974f20668fc145721529e39c854985fe91b7)
                check_type(argname="argument ppv2_private_link_ep_id_enabled", value=ppv2_private_link_ep_id_enabled, expected_type=type_hints["ppv2_private_link_ep_id_enabled"])
                check_type(argname="argument ppv2_private_link_eps_id_enabled", value=ppv2_private_link_eps_id_enabled, expected_type=type_hints["ppv2_private_link_eps_id_enabled"])
                check_type(argname="argument ppv2_vpc_id_enabled", value=ppv2_vpc_id_enabled, expected_type=type_hints["ppv2_vpc_id_enabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ppv2_private_link_ep_id_enabled is not None:
                self._values["ppv2_private_link_ep_id_enabled"] = ppv2_private_link_ep_id_enabled
            if ppv2_private_link_eps_id_enabled is not None:
                self._values["ppv2_private_link_eps_id_enabled"] = ppv2_private_link_eps_id_enabled
            if ppv2_vpc_id_enabled is not None:
                self._values["ppv2_vpc_id_enabled"] = ppv2_vpc_id_enabled

        @builtins.property
        def ppv2_private_link_ep_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ppv2PrivateLinkEpIdEnabled: Whether to enable Proxy Protocol to carry Ppv2PrivateLinkEpId to the back-end server. Default False.
            '''
            result = self._values.get("ppv2_private_link_ep_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ppv2_private_link_eps_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ppv2PrivateLinkEpsIdEnabled: Whether to enable Proxy Protocol to carry PrivateLinkEpsId to the back-end server. Default: False.
            '''
            result = self._values.get("ppv2_private_link_eps_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ppv2_vpc_id_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ppv2VpcIdEnabled: Whether to enable Proxy Protocol to carry VpcId to the back-end server. Default False.
            '''
            result = self._values.get("ppv2_vpc_id_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ProxyProtocolV2ConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosListener.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__67084821bc33dedf99c5339497697f53f8797d5f56e045906e431ca88f425048)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_protocol": "listenerProtocol",
        "load_balancer_id": "loadBalancerId",
        "server_group_id": "serverGroupId",
        "alpn_enabled": "alpnEnabled",
        "alpn_policy": "alpnPolicy",
        "ca_certificate_ids": "caCertificateIds",
        "ca_enabled": "caEnabled",
        "certificate_ids": "certificateIds",
        "cps": "cps",
        "enable": "enable",
        "end_port": "endPort",
        "idle_timeout": "idleTimeout",
        "listener_description": "listenerDescription",
        "listener_port": "listenerPort",
        "mss": "mss",
        "proxy_protocol_enabled": "proxyProtocolEnabled",
        "proxy_protocol_v2_config": "proxyProtocolV2Config",
        "sec_sensor_enabled": "secSensorEnabled",
        "security_policy_id": "securityPolicyId",
        "start_port": "startPort",
        "tags": "tags",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alpn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        alpn_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        cps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        listener_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mss: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_protocol_v2_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.ProxyProtocolV2ConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosListener.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosListener``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-listener

        :param listener_protocol: 
        :param load_balancer_id: 
        :param server_group_id: 
        :param alpn_enabled: 
        :param alpn_policy: 
        :param ca_certificate_ids: 
        :param ca_enabled: 
        :param certificate_ids: 
        :param cps: 
        :param enable: 
        :param end_port: 
        :param idle_timeout: 
        :param listener_description: 
        :param listener_port: 
        :param mss: 
        :param proxy_protocol_enabled: 
        :param proxy_protocol_v2_config: 
        :param sec_sensor_enabled: 
        :param security_policy_id: 
        :param start_port: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c750dcdd5b31ff5857458a1d610562d6a48485ac329a444e5fa062e9ca33caf)
            check_type(argname="argument listener_protocol", value=listener_protocol, expected_type=type_hints["listener_protocol"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument server_group_id", value=server_group_id, expected_type=type_hints["server_group_id"])
            check_type(argname="argument alpn_enabled", value=alpn_enabled, expected_type=type_hints["alpn_enabled"])
            check_type(argname="argument alpn_policy", value=alpn_policy, expected_type=type_hints["alpn_policy"])
            check_type(argname="argument ca_certificate_ids", value=ca_certificate_ids, expected_type=type_hints["ca_certificate_ids"])
            check_type(argname="argument ca_enabled", value=ca_enabled, expected_type=type_hints["ca_enabled"])
            check_type(argname="argument certificate_ids", value=certificate_ids, expected_type=type_hints["certificate_ids"])
            check_type(argname="argument cps", value=cps, expected_type=type_hints["cps"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument end_port", value=end_port, expected_type=type_hints["end_port"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument listener_description", value=listener_description, expected_type=type_hints["listener_description"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument mss", value=mss, expected_type=type_hints["mss"])
            check_type(argname="argument proxy_protocol_enabled", value=proxy_protocol_enabled, expected_type=type_hints["proxy_protocol_enabled"])
            check_type(argname="argument proxy_protocol_v2_config", value=proxy_protocol_v2_config, expected_type=type_hints["proxy_protocol_v2_config"])
            check_type(argname="argument sec_sensor_enabled", value=sec_sensor_enabled, expected_type=type_hints["sec_sensor_enabled"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_protocol": listener_protocol,
            "load_balancer_id": load_balancer_id,
            "server_group_id": server_group_id,
        }
        if alpn_enabled is not None:
            self._values["alpn_enabled"] = alpn_enabled
        if alpn_policy is not None:
            self._values["alpn_policy"] = alpn_policy
        if ca_certificate_ids is not None:
            self._values["ca_certificate_ids"] = ca_certificate_ids
        if ca_enabled is not None:
            self._values["ca_enabled"] = ca_enabled
        if certificate_ids is not None:
            self._values["certificate_ids"] = certificate_ids
        if cps is not None:
            self._values["cps"] = cps
        if enable is not None:
            self._values["enable"] = enable
        if end_port is not None:
            self._values["end_port"] = end_port
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if listener_description is not None:
            self._values["listener_description"] = listener_description
        if listener_port is not None:
            self._values["listener_port"] = listener_port
        if mss is not None:
            self._values["mss"] = mss
        if proxy_protocol_enabled is not None:
            self._values["proxy_protocol_enabled"] = proxy_protocol_enabled
        if proxy_protocol_v2_config is not None:
            self._values["proxy_protocol_v2_config"] = proxy_protocol_v2_config
        if sec_sensor_enabled is not None:
            self._values["sec_sensor_enabled"] = sec_sensor_enabled
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if start_port is not None:
            self._values["start_port"] = start_port
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def listener_protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerProtocol: undefined
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: ID of the LoadBalancer
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupId: ID of the ServerGroup
        '''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alpnEnabled: undefined
        '''
        result = self._values.get("alpn_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alpnPolicy: Proxy of alpn
        '''
        result = self._values.get("alpn_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: caCertificateIds: List of the ca certificate ids
        '''
        result = self._values.get("ca_certificate_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caEnabled: Whether to open CA
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: certificateIds: List of the certificate ids
        '''
        result = self._values.get("certificate_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cps: New connection rate limit of Instance
        '''
        result = self._values.get("cps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Whether to start listener or not. Default True.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endPort: EndPort of the portRange
        '''
        result = self._values.get("end_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: idleTimeout: Specifies the connection idle timeout
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerDescription: Description of the listener, [2, 256] characters.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
        '''
        result = self._values.get("listener_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mss: Max length of the TCP packet
        '''
        result = self._values.get("mss")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyProtocolEnabled: Whether to enable ppv2 function
        '''
        result = self._values.get("proxy_protocol_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_protocol_v2_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.ProxyProtocolV2ConfigProperty]]:
        '''
        :Property: proxyProtocolV2Config: ProxyProtocolV2Config of the listener
        '''
        result = self._values.get("proxy_protocol_v2_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.ProxyProtocolV2ConfigProperty]], result)

    @builtins.property
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secSensorEnabled: Whether to enable the second-level monitoring function
        '''
        result = self._values.get("sec_sensor_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityPolicyId: Only valid for TcpSSL protocol monitoring
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startPort: StartPort of the portRange
        '''
        result = self._values.get("start_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosListener.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosListener.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::LoadBalancer``, which is used to create a Network Load Balancer (NLB) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``LoadBalancer`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fed3256d59721b8735cc56dc6fe8599c1b99963769eaa25fd11e6d244c002e1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__79f52a73cadd8aa9a1b58e89cdf12fabaaac61d6e684ff35cb6389d070508475)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressType: The type of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DNSName: The domain name of the NLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the NLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerType: The type of the NLB instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe74a4aacf85d46b5262d66a319ef49d15b4b18e5df071a48838af0b46cb2488)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e114c8af81294230dc0611c354a81acf16bf3a2b8f7d02917d92ae8b23436f8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf1cb70781688ab227bd0c882f050c762529a29057c25a176a56c57a8cbfae19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2602105210bd8d8a60f9535e14344a5ebe83152548de25d061afc259634e0c33)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMappings", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b41099ff0db2b72d8ec60444eae53b81921a12cf14eaa7d117666d039e61cb76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0313cda77413cade89f0edce753ab41aba648b2f912013179c27419d732eafb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="crossZoneEnabled")
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossZoneEnabled: Whether enable cross zone. Default: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "crossZoneEnabled"))

    @cross_zone_enabled.setter
    def cross_zone_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47709e80c810fb87847ae61251622d6f9534eef1e86345123362837816d4c2c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossZoneEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtectionConfig")
    def deletion_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.DeletionProtectionConfigProperty"]]:
        '''
        :Property: deletionProtectionConfig: The configuration of the deletion protection feature.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.DeletionProtectionConfigProperty"]], jsii.get(self, "deletionProtectionConfig"))

    @deletion_protection_config.setter
    def deletion_protection_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.DeletionProtectionConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93191faa14406146125eb3e7acb18181e8cca2c0a393f47dcd70653c894af92e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtectionConfig", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerBillingConfig")
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]], jsii.get(self, "loadBalancerBillingConfig"))

    @load_balancer_billing_config.setter
    def load_balancer_billing_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3829b3088aff59371c3c41a106ca05c22505f3a25827ab12a4a6b5473614819)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerBillingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerName: The name of the NLB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f680caf8c509ed2acb544981f18594ad7c734e6c56b589f4006b14c27ee151b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerType")
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerType: The type of the NLB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerType"))

    @load_balancer_type.setter
    def load_balancer_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7619ebcba5122e0d18ad7776926aaad4e1f33692f1b368aeb1ee9d11abb319b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerType", value)

    @builtins.property
    @jsii.member(jsii_name="modificationProtectionConfig")
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]]:
        '''
        :Property: modificationProtectionConfig: The configuration of the configuration read-only mode.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]], jsii.get(self, "modificationProtectionConfig"))

    @modification_protection_config.setter
    def modification_protection_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.ModificationProtectionConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b451b32b07dd08fb457483a5a397e2c916d884e3282aef6b52951dd0b0a82dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modificationProtectionConfig", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980195d437734dbec78ea65c60853a5746e45785400a00ff4bd472785c5bc5e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__161e7547c9eb494917b36e258059c2f9c0dc74370dd4307b6f35d1eb22d2efc1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="trafficAffinityEnabled")
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trafficAffinityEnabled"))

    @traffic_affinity_enabled.setter
    def traffic_affinity_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ab0f24006d3e391cf2746cadd199b59dcbb48381f4b120ebf0bf04ea995d2a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficAffinityEnabled", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.DeletionProtectionConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"enabled": "enabled", "reason": "reason"},
    )
    class DeletionProtectionConfigProperty:
        def __init__(
            self,
            *,
            enabled: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enabled: 
            :param reason: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ed42beffe26b0bb86b36071f6f87669f788b7fdd1dae5d4d01a523eb4c86abb7)
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
                check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enabled": enabled,
            }
            if reason is not None:
                self._values["reason"] = reason

        @builtins.property
        def enabled(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            enabled: Specifies whether to enable deletion protection. Valid values:
            true: yes
            false (default): no
            '''
            result = self._values.get("enabled")
            assert result is not None, "Required property 'enabled' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def reason(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: reason: The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
            '''
            result = self._values.get("reason")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeletionProtectionConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerAddressesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allocation_id": "allocationId",
            "private_i_pv4_address": "privateIPv4Address",
        },
    )
    class LoadBalancerAddressesProperty:
        def __init__(
            self,
            *,
            allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            private_i_pv4_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allocation_id: 
            :param private_i_pv4_address: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e3b93246de6f8b4e2384ce5fc927a85b7352112748ac4a6f3708b3d7756226d0)
                check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
                check_type(argname="argument private_i_pv4_address", value=private_i_pv4_address, expected_type=type_hints["private_i_pv4_address"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "allocation_id": allocation_id,
            }
            if private_i_pv4_address is not None:
                self._values["private_i_pv4_address"] = private_i_pv4_address

        @builtins.property
        def allocation_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
            '''
            result = self._values.get("allocation_id")
            assert result is not None, "Required property 'allocation_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def private_i_pv4_address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: privateIPv4Address: The private IP address.
            '''
            result = self._values.get("private_i_pv4_address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoadBalancerAddressesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"pay_type": "payType"},
    )
    class LoadBalancerBillingConfigProperty:
        def __init__(
            self,
            *,
            pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param pay_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__321b588c75a90a85411485356be0ae1be6b7eb5382944fe7c0949f20c0f8362d)
                check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if pay_type is not None:
                self._values["pay_type"] = pay_type

        @builtins.property
        def pay_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: payType: The billing method of the NLB instance.
            '''
            result = self._values.get("pay_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoadBalancerBillingConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.ModificationProtectionConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"status": "status", "reason": "reason"},
    )
    class ModificationProtectionConfigProperty:
        def __init__(
            self,
            *,
            status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param status: 
            :param reason: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2b16f285658a298083d5d1c9ad83c6066694dcc8d3a69e63178b79198ff2219f)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
                check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "status": status,
            }
            if reason is not None:
                self._values["reason"] = reason

        @builtins.property
        def status(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            status: Specifies whether to enable the configuration read-only mode. Valid values:
            NonProtection: does not enable the configuration read-only mode. You cannot set the Reason parameter. If the Reason parameter is set, the value is cleared.
            ConsoleProtection: enables the configuration read-only mode. You can set the Reason parameter.
            '''
            result = self._values.get("status")
            assert result is not None, "Required property 'status' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def reason(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: reason: The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
            '''
            result = self._values.get("reason")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ModificationProtectionConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1b60efa6880d9f8973cbdcbad2b864b95c34087d551fc0708907ce7ffd93c617)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "v_switch_id": "vSwitchId",
            "zone_id": "zoneId",
            "allocation_id": "allocationId",
            "eip_type": "eipType",
            "load_balancer_addresses": "loadBalancerAddresses",
            "private_i_pv4_address": "privateIPv4Address",
        },
    )
    class ZoneMappingsProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            eip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            load_balancer_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancer.LoadBalancerAddressesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            private_i_pv4_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            :param allocation_id: 
            :param eip_type: 
            :param load_balancer_addresses: 
            :param private_i_pv4_address: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__038d690ea920dcfb4399ec8b44a33c06be030b0bc275876e4c8875f50aa3986e)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
                check_type(argname="argument eip_type", value=eip_type, expected_type=type_hints["eip_type"])
                check_type(argname="argument load_balancer_addresses", value=load_balancer_addresses, expected_type=type_hints["load_balancer_addresses"])
                check_type(argname="argument private_i_pv4_address", value=private_i_pv4_address, expected_type=type_hints["private_i_pv4_address"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }
            if allocation_id is not None:
                self._values["allocation_id"] = allocation_id
            if eip_type is not None:
                self._values["eip_type"] = eip_type
            if load_balancer_addresses is not None:
                self._values["load_balancer_addresses"] = load_balancer_addresses
            if private_i_pv4_address is not None:
                self._values["private_i_pv4_address"] = private_i_pv4_address

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The ID of the zone to which the NLB instance belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def allocation_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: allocationId: The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance.
            '''
            result = self._values.get("allocation_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def eip_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            eipType: The type of the EIP. Valid values:

            - **Common**
            - **Anycast**
            **Note**: Only NLB instances in Hong Kong, China, support binding Anycast EIP.
            '''
            result = self._values.get("eip_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def load_balancer_addresses(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerAddressesProperty"]]]]:
            '''
            :Property: loadBalancerAddresses: Load balancer addresses. This property has higher priority than AllocationId and EipType in ZoneMappings.
            '''
            result = self._values.get("load_balancer_addresses")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancer.LoadBalancerAddressesProperty"]]]], result)

        @builtins.property
        def private_i_pv4_address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: privateIPv4Address: The private IP address.
            '''
            result = self._values.get("private_i_pv4_address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneMappingsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "vpc_id": "vpcId",
        "zone_mappings": "zoneMappings",
        "address_ip_version": "addressIpVersion",
        "bandwidth_package_id": "bandwidthPackageId",
        "cross_zone_enabled": "crossZoneEnabled",
        "deletion_protection_config": "deletionProtectionConfig",
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_type": "loadBalancerType",
        "modification_protection_config": "modificationProtectionConfig",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "traffic_affinity_enabled": "trafficAffinityEnabled",
    },
)
class RosLoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.DeletionProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        load_balancer_billing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosLoadBalancer``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer

        :param address_type: 
        :param vpc_id: 
        :param zone_mappings: 
        :param address_ip_version: 
        :param bandwidth_package_id: 
        :param cross_zone_enabled: 
        :param deletion_protection_config: 
        :param load_balancer_billing_config: 
        :param load_balancer_name: 
        :param load_balancer_type: 
        :param modification_protection_config: 
        :param resource_group_id: 
        :param tags: 
        :param traffic_affinity_enabled: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81ca2c41418ed554dd3ba024cd9ba42082191241b7b4cd2cf9cad2a56b78a777)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument cross_zone_enabled", value=cross_zone_enabled, expected_type=type_hints["cross_zone_enabled"])
            check_type(argname="argument deletion_protection_config", value=deletion_protection_config, expected_type=type_hints["deletion_protection_config"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_type", value=load_balancer_type, expected_type=type_hints["load_balancer_type"])
            check_type(argname="argument modification_protection_config", value=modification_protection_config, expected_type=type_hints["modification_protection_config"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument traffic_affinity_enabled", value=traffic_affinity_enabled, expected_type=type_hints["traffic_affinity_enabled"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "address_type": address_type,
            "vpc_id": vpc_id,
            "zone_mappings": zone_mappings,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if bandwidth_package_id is not None:
            self._values["bandwidth_package_id"] = bandwidth_package_id
        if cross_zone_enabled is not None:
            self._values["cross_zone_enabled"] = cross_zone_enabled
        if deletion_protection_config is not None:
            self._values["deletion_protection_config"] = deletion_protection_config
        if load_balancer_billing_config is not None:
            self._values["load_balancer_billing_config"] = load_balancer_billing_config
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_type is not None:
            self._values["load_balancer_type"] = load_balancer_type
        if modification_protection_config is not None:
            self._values["modification_protection_config"] = modification_protection_config
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if traffic_affinity_enabled is not None:
            self._values["traffic_affinity_enabled"] = traffic_affinity_enabled

    @builtins.property
    def address_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: crossZoneEnabled: Whether enable cross zone. Default: true
        '''
        result = self._values.get("cross_zone_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.DeletionProtectionConfigProperty]]:
        '''
        :Property: deletionProtectionConfig: The configuration of the deletion protection feature.
        '''
        result = self._values.get("deletion_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.DeletionProtectionConfigProperty]], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        result = self._values.get("load_balancer_billing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerName: The name of the NLB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerType: The type of the NLB instance.
        '''
        result = self._values.get("load_balancer_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]]:
        '''
        :Property: modificationProtectionConfig: The configuration of the configuration read-only mode.
        '''
        result = self._values.get("modification_protection_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosLoadBalancer.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosLoadBalancer.TagsProperty]], result)

    @builtins.property
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        result = self._values.get("traffic_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityGroupAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosSecurityGroupAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::SecurityGroupAttachment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SecurityGroupAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityGroupAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d12d9cb9c420272e715c7bff6cd4d2c3fa27aa1b637d96a755d229fec02506e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a0a416091d1ef3f07010e97ac5acfb1395805da03fa87212a4e8d87950ca076d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5947157b6af8377a7728d30ce1ef999ed78e73ef38c249fa00751f50155366ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ef35a0ef64a64cbec952d6b051766b2dee12139a935f79eff2b77656f946263)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupIds")
    def security_group_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupIds: List of security group id.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupIds"))

    @security_group_ids.setter
    def security_group_ids(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__660c89592bc68102fed62ae6ba3b7c0ea16dd9365ae1b0515d4236807ad5f48e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosSecurityGroupAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "security_group_ids": "securityGroupIds",
    },
)
class RosSecurityGroupAttachmentProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosSecurityGroupAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment

        :param load_balancer_id: 
        :param security_group_ids: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dd67d05f7d342d3b9594f8787de150dc35a4a3d7e039b0a0cd65bea4952c025)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "security_group_ids": security_group_ids,
        }

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupIds: List of security group id.
        '''
        result = self._values.get("security_group_ids")
        assert result is not None, "Required property 'security_group_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityGroupAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosSecurityPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::SecurityPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SecurityPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cd33e6c4c6f2cbe774c1986e7b491e8e742bf7af7cf63a5d07ac0dc04f7a401)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7317d433b1772f5db71e1574e43cfffde79d138b211c56ee6b77368a7072f822)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityPolicyId: The ID of the security policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ciphers")
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "ciphers"))

    @ciphers.setter
    def ciphers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71ebdc318c13b5bb1372dc327fbcc84c266410a966ce22a9b501ec358b2f7ac7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ciphers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2282ef0d73dcb24f64078a4d5ada798c3a2b1e5232a98192397ce55ebdbcd965)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="tlsVersions")
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "tlsVersions"))

    @tls_versions.setter
    def tls_versions(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcc3941d35d36dcd1ac7c463bab39e264befb2577a9d84eb5695dba71bd941e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsVersions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36d0e3b87c34e27b8634642a337ae9fda2f0852db4d5e7fcac3410d8f62010ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyName")
    def security_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityPolicyName"))

    @security_policy_name.setter
    def security_policy_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a7c2c465303b43023c5350defdc966cebaa059aec92b0bb959242106df1c0b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosSecurityPolicy.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosSecurityPolicy.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosSecurityPolicy.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__072dae22b619d82fc7bae238f4fa9f83f78f553f8d259f40d01559339d474a5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosSecurityPolicy.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e396cdb730ece0d302bbb5b2775388a48c831805a9b492ce05b7766e57778b62)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosSecurityPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "ciphers": "ciphers",
        "tls_versions": "tlsVersions",
        "resource_group_id": "resourceGroupId",
        "security_policy_name": "securityPolicyName",
        "tags": "tags",
    },
)
class RosSecurityPolicyProps:
    def __init__(
        self,
        *,
        ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecurityPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy

        :param ciphers: 
        :param tls_versions: 
        :param resource_group_id: 
        :param security_policy_name: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8dbc3ef4d07546a72f8753279b481be732228e0794e81c6c1b89ad82319d2d09)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ciphers": ciphers,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_policy_name is not None:
            self._values["security_policy_name"] = security_policy_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityPolicyName: The name of the security policy.
        The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("security_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecurityPolicy.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecurityPolicy.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosServerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::NLB::ServerGroup``, which is used to create a server group for a Network Load Balancer (NLB) instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ServerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0e474a19bcd49e0fb85b09e660dc9cc467923f0543fcab5f675fbd7ff5073c0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7706734852c24dd21222255cdc9b8c6757b14c2a2a2c470451a2b6759ef11ebf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServerGroupId: ID of ServerGroup
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__3bbe94cdf863ec3667cd977faefb05e9356758314a587bee508a4c3845710918)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupName")
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupName: Name of ServerGroup
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverGroupName"))

    @server_group_name.setter
    def server_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfc219591f9404972b308e67dda93def7f79a5f75cc25fd6e41c9286e4813029)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: ID of VPC
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12f2d05acfedfe2bce8e1f788292b52b513783b9007121434335f3040c74f456)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version of address
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b12c89da7d44ac14d2b80b8699f067043e81fd931a03b6cc278b9e23a7e307a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="anyPortEnabled")
    def any_port_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values:
        true
        false (default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "anyPortEnabled"))

    @any_port_enabled.setter
    def any_port_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7812e2080baa314264d0d8441686256b9e84d37db2f13b0ec91098ec88ad26a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "anyPortEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDrainEnabled")
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDrainEnabled: Whether to enable graceful connection interruption
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionDrainEnabled"))

    @connection_drain_enabled.setter
    def connection_drain_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e48bab59c48c64a891d6390d6dc9a40876c437c802932befb875b82559161beb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDrainEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDrainTimeout")
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDrainTimeout: Time of graceful connection interruption
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionDrainTimeout"))

    @connection_drain_timeout.setter
    def connection_drain_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c0c62cdb6e980b9bf95f532f7f4c75845a00ea6f8caf28021498249dd34ab0b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDrainTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]]:
        '''
        :Property: healthCheckConfig: Health Check Config
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]], jsii.get(self, "healthCheckConfig"))

    @health_check_config.setter
    def health_check_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2cc0b4f170d95f1fa6b8c6e0c70091ed432fcf2277a06674c379d1aa3f282917)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property
    @jsii.member(jsii_name="persistenceEnabled")
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: persistenceEnabled: Whether to enable session persistence
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "persistenceEnabled"))

    @persistence_enabled.setter
    def persistence_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2589178c15e64464a51315578aff9b99487874379bb81b47649985f003c451f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "persistenceEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="persistenceTimeout")
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: persistenceTimeout: Time of session persistence
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "persistenceTimeout"))

    @persistence_timeout.setter
    def persistence_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2c45f5d5903eded38d0444766b73f8255049c44431c228c86393fe540a66e4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "persistenceTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="preserveClientIpEnabled")
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preserveClientIpEnabled: Whether to enable the client address retention function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "preserveClientIpEnabled"))

    @preserve_client_ip_enabled.setter
    def preserve_client_ip_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71eed6065cc7611c0119dddb38c556561c7e1a8d82f2b36dd39aec67b439f2c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveClientIpEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocol: Protocol of ServerGroup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f854da007786aab628ecb493393dab67ddeb05faa77c5bb23dde987c62113fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a477dffa4c5564b4c23c48edf0b6793bf4b8446d73520a63539d05b1a776059b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduler: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ea34f31928e9227830233ff0460a6fcaf7438c2786318aa897696ec1c41cbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupType")
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverGroupType: Type of ServerGroup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serverGroupType"))

    @server_group_type.setter
    def server_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87b533ad6717025ce4d67099f3e7fb5d0de528b6f3ff4a0ec1cd3b224977c0fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="servers")
    def servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.ServersProperty"]]]]:
        '''
        :Property: servers: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.ServersProperty"]]]], jsii.get(self, "servers"))

    @servers.setter
    def servers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosServerGroup.ServersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a86417faf6b5dd37f6068bf4c1aa3b2902b71d183fe0228d3d53a2709883a0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servers", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosServerGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosServerGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosServerGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbf7c626acbcd0884cf4bd18d0434bee650cc5fd16d25295f58db61df43a9822)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosServerGroup.HealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "http_check_method": "httpCheckMethod",
            "health_check_connect_port": "healthCheckConnectPort",
            "health_check_connect_timeout": "healthCheckConnectTimeout",
            "health_check_domain": "healthCheckDomain",
            "health_check_enabled": "healthCheckEnabled",
            "health_check_http_code": "healthCheckHttpCode",
            "health_check_interval": "healthCheckInterval",
            "health_check_type": "healthCheckType",
            "health_check_url": "healthCheckUrl",
            "healthy_threshold": "healthyThreshold",
            "unhealthy_threshold": "unhealthyThreshold",
        },
    )
    class HealthCheckConfigProperty:
        def __init__(
            self,
            *,
            http_check_method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_connect_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_http_code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param http_check_method: 
            :param health_check_connect_port: 
            :param health_check_connect_timeout: 
            :param health_check_domain: 
            :param health_check_enabled: 
            :param health_check_http_code: 
            :param health_check_interval: 
            :param health_check_type: 
            :param health_check_url: 
            :param healthy_threshold: 
            :param unhealthy_threshold: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c7c90e43e8f427cb496f36f79fbb13b17ee210eaf52e2c5eba939f6887bab76d)
                check_type(argname="argument http_check_method", value=http_check_method, expected_type=type_hints["http_check_method"])
                check_type(argname="argument health_check_connect_port", value=health_check_connect_port, expected_type=type_hints["health_check_connect_port"])
                check_type(argname="argument health_check_connect_timeout", value=health_check_connect_timeout, expected_type=type_hints["health_check_connect_timeout"])
                check_type(argname="argument health_check_domain", value=health_check_domain, expected_type=type_hints["health_check_domain"])
                check_type(argname="argument health_check_enabled", value=health_check_enabled, expected_type=type_hints["health_check_enabled"])
                check_type(argname="argument health_check_http_code", value=health_check_http_code, expected_type=type_hints["health_check_http_code"])
                check_type(argname="argument health_check_interval", value=health_check_interval, expected_type=type_hints["health_check_interval"])
                check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
                check_type(argname="argument health_check_url", value=health_check_url, expected_type=type_hints["health_check_url"])
                check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
                check_type(argname="argument unhealthy_threshold", value=unhealthy_threshold, expected_type=type_hints["unhealthy_threshold"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "http_check_method": http_check_method,
            }
            if health_check_connect_port is not None:
                self._values["health_check_connect_port"] = health_check_connect_port
            if health_check_connect_timeout is not None:
                self._values["health_check_connect_timeout"] = health_check_connect_timeout
            if health_check_domain is not None:
                self._values["health_check_domain"] = health_check_domain
            if health_check_enabled is not None:
                self._values["health_check_enabled"] = health_check_enabled
            if health_check_http_code is not None:
                self._values["health_check_http_code"] = health_check_http_code
            if health_check_interval is not None:
                self._values["health_check_interval"] = health_check_interval
            if health_check_type is not None:
                self._values["health_check_type"] = health_check_type
            if health_check_url is not None:
                self._values["health_check_url"] = health_check_url
            if healthy_threshold is not None:
                self._values["healthy_threshold"] = healthy_threshold
            if unhealthy_threshold is not None:
                self._values["unhealthy_threshold"] = unhealthy_threshold

        @builtins.property
        def http_check_method(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: httpCheckMethod: When the health check protocol is http or https type, the selected health check detection method
            '''
            result = self._values.get("http_check_method")
            assert result is not None, "Required property 'http_check_method' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def health_check_connect_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckConnectPort: Port of health check
            '''
            result = self._values.get("health_check_connect_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_connect_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckConnectTimeout: Maximum timeout for each health check response
            '''
            result = self._values.get("health_check_connect_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckDomain: Domain name for health check
            '''
            result = self._values.get("health_check_domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckEnabled: Whether to open health check
            '''
            result = self._values.get("health_check_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_http_code(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: healthCheckHttpCode: undefined
            '''
            result = self._values.get("health_check_http_code")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def health_check_interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckInterval: Health check interval
            '''
            result = self._values.get("health_check_interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckType: Type of health check
            '''
            result = self._values.get("health_check_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckUrl: Url for health check
            '''
            result = self._values.get("health_check_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthyThreshold: Determine the health check status of the backend server from fail to success.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: unhealthyThreshold: Determine the health check status of the backend server from success to fail.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosServerGroup.ServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_id": "serverId",
            "server_type": "serverType",
            "description": "description",
            "port": "port",
            "server_ip": "serverIp",
            "weight": "weight",
        },
    )
    class ServersProperty:
        def __init__(
            self,
            *,
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param server_type: 
            :param description: 
            :param port: 
            :param server_ip: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__440f1f2472dde94776c516595d1546ab2cb881bb8a48513dbb28ad5eb7f3a064)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_id": server_id,
                "server_type": server_type,
            }
            if description is not None:
                self._values["description"] = description
            if port is not None:
                self._values["port"] = port
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            serverId: The ID of the server. You can specify at most 40 server IDs in each call.
            If the server group type is **Instance**, set the ServerId parameter to the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. These backend servers are specified by **Ecs**, **Eni**, or **Eci**.
            If the server group type is **Ip**, set the ServerId parameter to an IP address.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            serverType: The type of the backend server. Valid values:

            - **Ecs**: an ECS instance.
            - **Eni**: an ENI.
            - **Eci**: an elastic container instance.
            - **Ip**: an IP address.
            '''
            result = self._values.get("server_type")
            assert result is not None, "Required property 'server_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :: ), underscores (_), and hyphens (-).
            :Property: description: The description of the servers. The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port used by the backend server. Valid values: 0 to 65535. Default value is 0.
            When the server group enables full port forwarding, there is no need to specify a port when adding a backend server (0 is entered by default). NLB will forward traffic to the back-end server according to the frontend request port.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP address of the server. If the server group type is **Ip**, ServerId is taken as the value of this parameter.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            weight: The weight of the backend server. Valid values: 0 to 100. Default value: 100.
            If the weight of a backend server is set to 0, no requests are forwarded to the backend server.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosServerGroup.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dbb608ae56facd8034d7d24b0bc03e9bca34756979b5b9702fb6d900109a6f36)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "address_ip_version": "addressIpVersion",
        "any_port_enabled": "anyPortEnabled",
        "connection_drain_enabled": "connectionDrainEnabled",
        "connection_drain_timeout": "connectionDrainTimeout",
        "health_check_config": "healthCheckConfig",
        "persistence_enabled": "persistenceEnabled",
        "persistence_timeout": "persistenceTimeout",
        "preserve_client_ip_enabled": "preserveClientIpEnabled",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "servers": "servers",
        "tags": "tags",
    },
)
class RosServerGroupProps:
    def __init__(
        self,
        *,
        server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        any_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        persistence_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosServerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup

        :param server_group_name: 
        :param vpc_id: 
        :param address_ip_version: 
        :param any_port_enabled: 
        :param connection_drain_enabled: 
        :param connection_drain_timeout: 
        :param health_check_config: 
        :param persistence_enabled: 
        :param persistence_timeout: 
        :param preserve_client_ip_enabled: 
        :param protocol: 
        :param resource_group_id: 
        :param scheduler: 
        :param server_group_type: 
        :param servers: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b100a33a0bba5ffd8556ae0afde0ca3ca9f868d07910d4b73be050fce93d5ab6)
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument any_port_enabled", value=any_port_enabled, expected_type=type_hints["any_port_enabled"])
            check_type(argname="argument connection_drain_enabled", value=connection_drain_enabled, expected_type=type_hints["connection_drain_enabled"])
            check_type(argname="argument connection_drain_timeout", value=connection_drain_timeout, expected_type=type_hints["connection_drain_timeout"])
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument persistence_enabled", value=persistence_enabled, expected_type=type_hints["persistence_enabled"])
            check_type(argname="argument persistence_timeout", value=persistence_timeout, expected_type=type_hints["persistence_timeout"])
            check_type(argname="argument preserve_client_ip_enabled", value=preserve_client_ip_enabled, expected_type=type_hints["preserve_client_ip_enabled"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if any_port_enabled is not None:
            self._values["any_port_enabled"] = any_port_enabled
        if connection_drain_enabled is not None:
            self._values["connection_drain_enabled"] = connection_drain_enabled
        if connection_drain_timeout is not None:
            self._values["connection_drain_timeout"] = connection_drain_timeout
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if persistence_enabled is not None:
            self._values["persistence_enabled"] = persistence_enabled
        if persistence_timeout is not None:
            self._values["persistence_timeout"] = persistence_timeout
        if preserve_client_ip_enabled is not None:
            self._values["preserve_client_ip_enabled"] = preserve_client_ip_enabled
        if protocol is not None:
            self._values["protocol"] = protocol
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_group_type is not None:
            self._values["server_group_type"] = server_group_type
        if servers is not None:
            self._values["servers"] = servers
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverGroupName: Name of ServerGroup
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: ID of VPC
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version of address
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def any_port_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values:
        true
        false (default)
        '''
        result = self._values.get("any_port_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDrainEnabled: Whether to enable graceful connection interruption
        '''
        result = self._values.get("connection_drain_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionDrainTimeout: Time of graceful connection interruption
        '''
        result = self._values.get("connection_drain_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]]:
        '''
        :Property: healthCheckConfig: Health Check Config
        '''
        result = self._values.get("health_check_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]], result)

    @builtins.property
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: persistenceEnabled: Whether to enable session persistence
        '''
        result = self._values.get("persistence_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: persistenceTimeout: Time of session persistence
        '''
        result = self._values.get("persistence_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: preserveClientIpEnabled: Whether to enable the client address retention function
        '''
        result = self._values.get("preserve_client_ip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: protocol: Protocol of ServerGroup
        '''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: undefined
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scheduler: undefined
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverGroupType: Type of ServerGroup
        '''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.ServersProperty]]]]:
        '''
        :Property: servers: undefined
        '''
        result = self._values.get("servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.ServersProperty]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServerGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISecurityGroupAttachment)
class SecurityGroupAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.SecurityGroupAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::SecurityGroupAttachment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecurityGroupAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecurityGroupAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1639cc11b1125aaf5a901ca7e4e63a96ff086b45040e43f4808a6f0dfb521277)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityGroupAttachmentProps":
        return typing.cast("SecurityGroupAttachmentProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe20250327ad536c4d967c1709d09f4dd236cf49af29048a2392d54542a81df7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad31ed9ceecce836d4b249d89787756bf305fba2c5a352783789584222cc533c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3357ca8410077fd22750ecd6c711627bce2bcaab9004b2325bcd7c24d498b723)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.SecurityGroupAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "security_group_ids": "securityGroupIds",
    },
)
class SecurityGroupAttachmentProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``SecurityGroupAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitygroupattachment

        :param load_balancer_id: Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.
        :param security_group_ids: Property securityGroupIds: List of security group id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a98988e36c0ab059eb8cdab881ecab9dfc6084fc79eada1fe5aa56213f204a5a)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "security_group_ids": security_group_ids,
        }

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the network-based server load balancer instance to be bound to the security group.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupIds: List of security group id.'''
        result = self._values.get("security_group_ids")
        assert result is not None, "Required property 'security_group_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityGroupAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISecurityPolicy)
class SecurityPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.SecurityPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::SecurityPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecurityPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecurityPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d78fc5faf807f16329828bde64835053dcd0d49fc519604c3623da0a0d2600e9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityPolicyId")
    def attr_security_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SecurityPolicyId: The ID of the security policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSecurityPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SecurityPolicyProps":
        return typing.cast("SecurityPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e207b0e9325b2d777de751e9aade5bcf13fcc0866a6277367ae898e01bdeb0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1f68e06c1d9a70f5e416c67a4f55bd75d3e1eccac8ee32a3fbb1f22a47209e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__252b361d819bd8938e2bc6573481399436791cd3075bdf5c40a453e135be1a23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.SecurityPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "ciphers": "ciphers",
        "tls_versions": "tlsVersions",
        "resource_group_id": "resourceGroupId",
        "security_policy_name": "securityPolicyName",
        "tags": "tags",
    },
)
class SecurityPolicyProps:
    def __init__(
        self,
        *,
        ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``SecurityPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-securitypolicy

        :param ciphers: Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
        :param tls_versions: Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param security_policy_name: Property securityPolicyName: The name of the security policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3b36bc742fdc7c4d2e88749922273f5ee447bf9dc3fda4411be70ed82cd50bc)
            check_type(argname="argument ciphers", value=ciphers, expected_type=type_hints["ciphers"])
            check_type(argname="argument tls_versions", value=tls_versions, expected_type=type_hints["tls_versions"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_policy_name", value=security_policy_name, expected_type=type_hints["security_policy_name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ciphers": ciphers,
            "tls_versions": tls_versions,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_policy_name is not None:
            self._values["security_policy_name"] = security_policy_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def ciphers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version.

        You can specify at most 32 cipher suites.
        '''
        result = self._values.get("ciphers")
        assert result is not None, "Required property 'ciphers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def tls_versions(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.

        Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
        '''
        result = self._values.get("tls_versions")
        assert result is not None, "Required property 'tls_versions' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_policy_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityPolicyName: The name of the security policy.

        The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("security_policy_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosSecurityPolicy.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosSecurityPolicy.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IServerGroup)
class ServerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.ServerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::ServerGroup``, which is used to create a server group for a Network Load Balancer (NLB) instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosServerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48b82b3a3fc1fa8af4336a602bedb25300313fd37f9eebf0b3bc96cbc6e52a63)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: ID of ServerGroup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ServerGroupProps":
        return typing.cast("ServerGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__153ef73e4b7cee883f29631e899df914cd3d372649182b19eb2aa4cc7a818449)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a3e6f1df93f0726f471660fef2605a442d52399e10fed1b197b7d33edb4c0fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69df44fe0c0ea45d056e7073275e5943e4177be327c7ce48f0cd767b6d935de5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.ServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "address_ip_version": "addressIpVersion",
        "any_port_enabled": "anyPortEnabled",
        "connection_drain_enabled": "connectionDrainEnabled",
        "connection_drain_timeout": "connectionDrainTimeout",
        "health_check_config": "healthCheckConfig",
        "persistence_enabled": "persistenceEnabled",
        "persistence_timeout": "persistenceTimeout",
        "preserve_client_ip_enabled": "preserveClientIpEnabled",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "servers": "servers",
        "tags": "tags",
    },
)
class ServerGroupProps:
    def __init__(
        self,
        *,
        server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        any_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        persistence_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ServerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-servergroup

        :param server_group_name: Property serverGroupName: Name of ServerGroup.
        :param vpc_id: Property vpcId: ID of VPC.
        :param address_ip_version: Property addressIpVersion: IP version of address.
        :param any_port_enabled: Property anyPortEnabled: Specifies whether to enable all-port forwarding. Valid values: true false (default)
        :param connection_drain_enabled: Property connectionDrainEnabled: Whether to enable graceful connection interruption.
        :param connection_drain_timeout: Property connectionDrainTimeout: Time of graceful connection interruption.
        :param health_check_config: Property healthCheckConfig: Health Check Config.
        :param persistence_enabled: Property persistenceEnabled: Whether to enable session persistence.
        :param persistence_timeout: Property persistenceTimeout: Time of session persistence.
        :param preserve_client_ip_enabled: Property preserveClientIpEnabled: Whether to enable the client address retention function.
        :param protocol: Property protocol: Protocol of ServerGroup.
        :param resource_group_id: Property resourceGroupId: undefined.
        :param scheduler: Property scheduler: undefined.
        :param server_group_type: Property serverGroupType: Type of ServerGroup.
        :param servers: Property servers: undefined.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d3c92e6135a2a39fdb87a57fe3517fe9dd6dcef23ceed0b2c2947d683c7ba91)
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument any_port_enabled", value=any_port_enabled, expected_type=type_hints["any_port_enabled"])
            check_type(argname="argument connection_drain_enabled", value=connection_drain_enabled, expected_type=type_hints["connection_drain_enabled"])
            check_type(argname="argument connection_drain_timeout", value=connection_drain_timeout, expected_type=type_hints["connection_drain_timeout"])
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument persistence_enabled", value=persistence_enabled, expected_type=type_hints["persistence_enabled"])
            check_type(argname="argument persistence_timeout", value=persistence_timeout, expected_type=type_hints["persistence_timeout"])
            check_type(argname="argument preserve_client_ip_enabled", value=preserve_client_ip_enabled, expected_type=type_hints["preserve_client_ip_enabled"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if any_port_enabled is not None:
            self._values["any_port_enabled"] = any_port_enabled
        if connection_drain_enabled is not None:
            self._values["connection_drain_enabled"] = connection_drain_enabled
        if connection_drain_timeout is not None:
            self._values["connection_drain_timeout"] = connection_drain_timeout
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if persistence_enabled is not None:
            self._values["persistence_enabled"] = persistence_enabled
        if persistence_timeout is not None:
            self._values["persistence_timeout"] = persistence_timeout
        if preserve_client_ip_enabled is not None:
            self._values["preserve_client_ip_enabled"] = preserve_client_ip_enabled
        if protocol is not None:
            self._values["protocol"] = protocol
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_group_type is not None:
            self._values["server_group_type"] = server_group_type
        if servers is not None:
            self._values["servers"] = servers
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverGroupName: Name of ServerGroup.'''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: ID of VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: IP version of address.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def any_port_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property anyPortEnabled: Specifies whether to enable all-port forwarding.

        Valid values:
        true
        false (default)
        '''
        result = self._values.get("any_port_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionDrainEnabled: Whether to enable graceful connection interruption.'''
        result = self._values.get("connection_drain_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionDrainTimeout: Time of graceful connection interruption.'''
        result = self._values.get("connection_drain_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]]:
        '''Property healthCheckConfig: Health Check Config.'''
        result = self._values.get("health_check_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]], result)

    @builtins.property
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property persistenceEnabled: Whether to enable session persistence.'''
        result = self._values.get("persistence_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property persistenceTimeout: Time of session persistence.'''
        result = self._values.get("persistence_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property preserveClientIpEnabled: Whether to enable the client address retention function.'''
        result = self._values.get("preserve_client_ip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protocol: Protocol of ServerGroup.'''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: undefined.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduler: undefined.'''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serverGroupType: Type of ServerGroup.'''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.ServersProperty]]]]:
        '''Property servers: undefined.'''
        result = self._values.get("servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.ServersProperty]]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosServerGroup.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosServerGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IBackendServerAttachment)
class BackendServerAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.BackendServerAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::NLB::BackendServerAttachment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBackendServerAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67cfe68055c877f48ba2d2624e029493e33c5688e16756544f3ef04e2881473b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServerGroupId: The ID of the server group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackendServerAttachmentProps:
        return typing.cast(BackendServerAttachmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8ed4d49b6d9f432a46fda8d4d7b69edb655d5077e3d6c69377ef268deafe40c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aaa79effbc0173dc4f5319478dcc8914287319bbf0a96046fb0ce1e737db3e76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ad4d98ab8135477ded29c309de6e4f41d85ca97fc28956f2be8cc311168a4ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "BackendServerAttachment",
    "BackendServerAttachmentProps",
    "IBackendServerAttachment",
    "IListener",
    "ILoadBalancer",
    "ISecurityGroupAttachment",
    "ISecurityPolicy",
    "IServerGroup",
    "Listener",
    "ListenerProps",
    "LoadBalancer",
    "LoadBalancerProps",
    "RosBackendServerAttachment",
    "RosBackendServerAttachmentProps",
    "RosListener",
    "RosListenerProps",
    "RosLoadBalancer",
    "RosLoadBalancerProps",
    "RosSecurityGroupAttachment",
    "RosSecurityGroupAttachmentProps",
    "RosSecurityPolicy",
    "RosSecurityPolicyProps",
    "RosServerGroup",
    "RosServerGroupProps",
    "SecurityGroupAttachment",
    "SecurityGroupAttachmentProps",
    "SecurityPolicy",
    "SecurityPolicyProps",
    "ServerGroup",
    "ServerGroupProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__508c6c8175ebe41c0e37f3ce6e413145a5ae2dd124538f58145504594c497c64(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c3b95ddf963d32a0ad8d75f827efb171a3c488a5222b17a4ccbc953e0643e5a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46a78ff69c111f7c4d022d54ed1a80774119310bc8ae5e6f19e5ce6bd6fcbe49(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ef52e46178e719e30dc45389b94d33df7aab97be2cf767fd36d75e0e37ee36e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddcf6b7e599f849a5a756dd694f1b6cb382d7a4a974ff1d0be1ba57a4b613a5c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66eece6d77d62c5e1d23326abca0d11321228029eaad1477d06a98b4a9fd5093(
    *,
    listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alpn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alpn_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mss: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol_v2_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.ProxyProtocolV2ConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosListener.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d960e7ff3c7b6bebd72789115185ba61704d970e6822020f9f3b32d36e1e9a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__796456936cba122bdacf44a201171c1e9e8cc70f1849dd92eeb7ec044b6b3351(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02ae6f760c0a70ba91bf1b86a67e8ff723bb3da7dab38ae6822f1d09eb445f26(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9d5e71dc242cc03027fbff8d6b0eccfa8635ad353998fedcea6c816f275ad3b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a99234faf4880821ea0d08457356773cc3c216e6fe50932b6701bbea8a4034a4(
    *,
    address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.DeletionProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    load_balancer_billing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c8155cfe2ecc175fe7643c42490562caa8f5f1436783475dcb7ae643ee7e87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccd72620dd9fede9cdb90a88c6d21e5a9dbefefb0e9f2435dce4ade4203bc0d7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d2ceb8f0f2eccb1f33ccb69221dda892cfae399bc7fe1c60bccbf93ccd4c227(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5451a79aff81fe4c555ed6d075e1faf8d1b4246aad91bd7114be5cfc6c4be106(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a04bf7ca716dce9a3752a2d77ff60eb8883c05d8d6bdc09f772fb4227d85c92a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.ServersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c65b44fe881a6572b4f1d8d1eccc367548248a05b0fc626777f1b79853be2a57(
    *,
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec887e7e7d424f195705c001541efdb52557897918fab5358f9da4aa95568c01(
    *,
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__327e09201f6a5ad749c315d704f7307f6c155182ff1f4f6ddaffc17b388c6aca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b951177986212f6aee2b1b8cd99bace62e7cd29ae449a7ea2a1a7201987f879e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f22be737cfc90e7c55ec57a7ca6b1732a791d2a1356d1be102eb810b0a6775(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e61097baec47b6848775444d60aadabfc4f5215d2309786e544584875b25150a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4af1db9fd7a612502274b15f1200871494365e35fc0c240eb6e819622812799d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__edb9ef4e76101c5b6873d0681cd21009a86b82beffdd2b7e55a62f6cf153ee47(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0f05dedd6302ef3061700b5ef51d2c6ff471e18d4ef14b1b7f961ae746e5069(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38e693d9c4267fdd5d45ea293a2799dced0b64529017d420e3bff463ce0946f0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cf1bfaa5f69f23a754bd0a555881e8c54141f389465804fefa5e1be590bbcf8(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bccdfca7089edc322a5471b8ab8f600097e497dabc215ced7385eec1251c7d84(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8343ded91b027ff6a5ba8f0ae0635678b598f3463403b705e9768b8523bcedb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__814d6ce3419bb34af5cfbc5f3e7831330f57afed82ef6c56507e205b77f4d3b4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce283bfc59bddf9d02c682bef07f3a9a3d6f3103a60c58f6e6fe57fa1152d350(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfd894a94a666d8ff3121211c9ec24611dc41b58eee0cbaaf50d11f596ab6456(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16c6ae0f725385fc2d32cf16cc782b4016011b2c36beb8a40cd325dedbcaff2c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__604aacb305e52dee0cfd362b95a0b78847d54f74b30135c47cf193fd80d2c133(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ef5dfd2ad63660e61fc9f91a6761679a069d2d2f45345660be3e7cea7b27451(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd271dd6269aae065ce8d0915734df8249afbde2813d13b2435cabe262b2b4d2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__966fc65bbf74a919e9a2bb023748af456b3e46548f6c935965147ded717fd61c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2610531133215bf86eaefd33a242a7b8ed9b35ac0041786646b95aaf0fcc8d0f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.ProxyProtocolV2ConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a58d4e83d90b00bdb3edb1768b32738716ca9cc761808ab3e1d7d8f80b1c5c4a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ed6e5207a1bafedd1d2fc8c1178433d88b6df95cc4641bd0964b44259881969(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d75a8f33e71b3e35214692dcc04fa08ddc76d8d8a41225638bc31a93736d1251(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54875f49f17460b281c1518b96ae81ae6b158cd2501e283f88a5967962bae678(
    value: typing.Optional[typing.List[RosListener.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b1aa33cbc3352c4026cb6110e94974f20668fc145721529e39c854985fe91b7(
    *,
    ppv2_private_link_ep_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ppv2_private_link_eps_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ppv2_vpc_id_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67084821bc33dedf99c5339497697f53f8797d5f56e045906e431ca88f425048(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c750dcdd5b31ff5857458a1d610562d6a48485ac329a444e5fa062e9ca33caf(
    *,
    listener_protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alpn_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    alpn_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ca_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    cps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mss: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_protocol_v2_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.ProxyProtocolV2ConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosListener.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fed3256d59721b8735cc56dc6fe8599c1b99963769eaa25fd11e6d244c002e1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79f52a73cadd8aa9a1b58e89cdf12fabaaac61d6e684ff35cb6389d070508475(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe74a4aacf85d46b5262d66a319ef49d15b4b18e5df071a48838af0b46cb2488(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e114c8af81294230dc0611c354a81acf16bf3a2b8f7d02917d92ae8b23436f8f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf1cb70781688ab227bd0c882f050c762529a29057c25a176a56c57a8cbfae19(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2602105210bd8d8a60f9535e14344a5ebe83152548de25d061afc259634e0c33(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b41099ff0db2b72d8ec60444eae53b81921a12cf14eaa7d117666d039e61cb76(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0313cda77413cade89f0edce753ab41aba648b2f912013179c27419d732eafb3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47709e80c810fb87847ae61251622d6f9534eef1e86345123362837816d4c2c9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93191faa14406146125eb3e7acb18181e8cca2c0a393f47dcd70653c894af92e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.DeletionProtectionConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3829b3088aff59371c3c41a106ca05c22505f3a25827ab12a4a6b5473614819(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f680caf8c509ed2acb544981f18594ad7c734e6c56b589f4006b14c27ee151b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7619ebcba5122e0d18ad7776926aaad4e1f33692f1b368aeb1ee9d11abb319b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b451b32b07dd08fb457483a5a397e2c916d884e3282aef6b52951dd0b0a82dd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancer.ModificationProtectionConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980195d437734dbec78ea65c60853a5746e45785400a00ff4bd472785c5bc5e8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__161e7547c9eb494917b36e258059c2f9c0dc74370dd4307b6f35d1eb22d2efc1(
    value: typing.Optional[typing.List[RosLoadBalancer.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ab0f24006d3e391cf2746cadd199b59dcbb48381f4b120ebf0bf04ea995d2a2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed42beffe26b0bb86b36071f6f87669f788b7fdd1dae5d4d01a523eb4c86abb7(
    *,
    enabled: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3b93246de6f8b4e2384ce5fc927a85b7352112748ac4a6f3708b3d7756226d0(
    *,
    allocation_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_i_pv4_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__321b588c75a90a85411485356be0ae1be6b7eb5382944fe7c0949f20c0f8362d(
    *,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b16f285658a298083d5d1c9ad83c6066694dcc8d3a69e63178b79198ff2219f(
    *,
    status: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b60efa6880d9f8973cbdcbad2b864b95c34087d551fc0708907ce7ffd93c617(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__038d690ea920dcfb4399ec8b44a33c06be030b0bc275876e4c8875f50aa3986e(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocation_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    eip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_addresses: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerAddressesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    private_i_pv4_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81ca2c41418ed554dd3ba024cd9ba42082191241b7b4cd2cf9cad2a56b78a777(
    *,
    address_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_mappings: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth_package_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.DeletionProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    load_balancer_billing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancer.ModificationProtectionConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d12d9cb9c420272e715c7bff6cd4d2c3fa27aa1b637d96a755d229fec02506e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecurityGroupAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0a416091d1ef3f07010e97ac5acfb1395805da03fa87212a4e8d87950ca076d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5947157b6af8377a7728d30ce1ef999ed78e73ef38c249fa00751f50155366ef(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ef35a0ef64a64cbec952d6b051766b2dee12139a935f79eff2b77656f946263(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__660c89592bc68102fed62ae6ba3b7c0ea16dd9365ae1b0515d4236807ad5f48e(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dd67d05f7d342d3b9594f8787de150dc35a4a3d7e039b0a0cd65bea4952c025(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cd33e6c4c6f2cbe774c1986e7b491e8e742bf7af7cf63a5d07ac0dc04f7a401(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecurityPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7317d433b1772f5db71e1574e43cfffde79d138b211c56ee6b77368a7072f822(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71ebdc318c13b5bb1372dc327fbcc84c266410a966ce22a9b501ec358b2f7ac7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2282ef0d73dcb24f64078a4d5ada798c3a2b1e5232a98192397ce55ebdbcd965(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcc3941d35d36dcd1ac7c463bab39e264befb2577a9d84eb5695dba71bd941e9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36d0e3b87c34e27b8634642a337ae9fda2f0852db4d5e7fcac3410d8f62010ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a7c2c465303b43023c5350defdc966cebaa059aec92b0bb959242106df1c0b8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__072dae22b619d82fc7bae238f4fa9f83f78f553f8d259f40d01559339d474a5f(
    value: typing.Optional[typing.List[RosSecurityPolicy.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e396cdb730ece0d302bbb5b2775388a48c831805a9b492ce05b7766e57778b62(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dbc3ef4d07546a72f8753279b481be732228e0794e81c6c1b89ad82319d2d09(
    *,
    ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0e474a19bcd49e0fb85b09e660dc9cc467923f0543fcab5f675fbd7ff5073c0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7706734852c24dd21222255cdc9b8c6757b14c2a2a2c470451a2b6759ef11ebf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bbe94cdf863ec3667cd977faefb05e9356758314a587bee508a4c3845710918(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfc219591f9404972b308e67dda93def7f79a5f75cc25fd6e41c9286e4813029(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12f2d05acfedfe2bce8e1f788292b52b513783b9007121434335f3040c74f456(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b12c89da7d44ac14d2b80b8699f067043e81fd931a03b6cc278b9e23a7e307a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7812e2080baa314264d0d8441686256b9e84d37db2f13b0ec91098ec88ad26a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e48bab59c48c64a891d6390d6dc9a40876c437c802932befb875b82559161beb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c0c62cdb6e980b9bf95f532f7f4c75845a00ea6f8caf28021498249dd34ab0b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cc0b4f170d95f1fa6b8c6e0c70091ed432fcf2277a06674c379d1aa3f282917(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.HealthCheckConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2589178c15e64464a51315578aff9b99487874379bb81b47649985f003c451f3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2c45f5d5903eded38d0444766b73f8255049c44431c228c86393fe540a66e4a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71eed6065cc7611c0119dddb38c556561c7e1a8d82f2b36dd39aec67b439f2c0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f854da007786aab628ecb493393dab67ddeb05faa77c5bb23dde987c62113fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a477dffa4c5564b4c23c48edf0b6793bf4b8446d73520a63539d05b1a776059b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ea34f31928e9227830233ff0460a6fcaf7438c2786318aa897696ec1c41cbd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87b533ad6717025ce4d67099f3e7fb5d0de528b6f3ff4a0ec1cd3b224977c0fe(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a86417faf6b5dd37f6068bf4c1aa3b2902b71d183fe0228d3d53a2709883a0d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosServerGroup.ServersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbf7c626acbcd0884cf4bd18d0434bee650cc5fd16d25295f58db61df43a9822(
    value: typing.Optional[typing.List[RosServerGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7c90e43e8f427cb496f36f79fbb13b17ee210eaf52e2c5eba939f6887bab76d(
    *,
    http_check_method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_connect_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_http_code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__440f1f2472dde94776c516595d1546ab2cb881bb8a48513dbb28ad5eb7f3a064(
    *,
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbb608ae56facd8034d7d24b0bc03e9bca34756979b5b9702fb6d900109a6f36(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b100a33a0bba5ffd8556ae0afde0ca3ca9f868d07910d4b73be050fce93d5ab6(
    *,
    server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    any_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    persistence_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1639cc11b1125aaf5a901ca7e4e63a96ff086b45040e43f4808a6f0dfb521277(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecurityGroupAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe20250327ad536c4d967c1709d09f4dd236cf49af29048a2392d54542a81df7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad31ed9ceecce836d4b249d89787756bf305fba2c5a352783789584222cc533c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3357ca8410077fd22750ecd6c711627bce2bcaab9004b2325bcd7c24d498b723(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a98988e36c0ab059eb8cdab881ecab9dfc6084fc79eada1fe5aa56213f204a5a(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d78fc5faf807f16329828bde64835053dcd0d49fc519604c3623da0a0d2600e9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecurityPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e207b0e9325b2d777de751e9aade5bcf13fcc0866a6277367ae898e01bdeb0e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1f68e06c1d9a70f5e416c67a4f55bd75d3e1eccac8ee32a3fbb1f22a47209e8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__252b361d819bd8938e2bc6573481399436791cd3075bdf5c40a453e135be1a23(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3b36bc742fdc7c4d2e88749922273f5ee447bf9dc3fda4411be70ed82cd50bc(
    *,
    ciphers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    tls_versions: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_policy_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosSecurityPolicy.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48b82b3a3fc1fa8af4336a602bedb25300313fd37f9eebf0b3bc96cbc6e52a63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__153ef73e4b7cee883f29631e899df914cd3d372649182b19eb2aa4cc7a818449(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a3e6f1df93f0726f471660fef2605a442d52399e10fed1b197b7d33edb4c0fd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69df44fe0c0ea45d056e7073275e5943e4177be327c7ce48f0cd767b6d935de5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d3c92e6135a2a39fdb87a57fe3517fe9dd6dcef23ceed0b2c2947d683c7ba91(
    *,
    server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    any_port_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    persistence_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    protocol: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosServerGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67cfe68055c877f48ba2d2624e029493e33c5688e16756544f3ef04e2881473b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8ed4d49b6d9f432a46fda8d4d7b69edb655d5077e3d6c69377ef268deafe40c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aaa79effbc0173dc4f5319478dcc8914287319bbf0a96046fb0ce1e737db3e76(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ad4d98ab8135477ded29c309de6e4f41d85ca97fc28956f2be8cc311168a4ad(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
