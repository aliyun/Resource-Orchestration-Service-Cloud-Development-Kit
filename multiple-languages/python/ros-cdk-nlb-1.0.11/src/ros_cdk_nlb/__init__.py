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

import ros_cdk_core


class Listener(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.Listener",
):
    '''A ROS resource type:  ``ALIYUN::NLB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::Listener``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ListenerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerId: Id of created Listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerPort: ListenerPort of created Listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPort"))


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
        "sec_sensor_enabled": "secSensorEnabled",
        "security_policy_id": "securityPolicyId",
        "start_port": "startPort",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        alpn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        alpn_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ca_certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        cps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        end_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        listener_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        mss: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::Listener``.

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
        :param sec_sensor_enabled: Property secSensorEnabled: Whether to enable the second-level monitoring function.
        :param security_policy_id: Property securityPolicyId: Only valid for TcpSSL protocol monitoring.
        :param start_port: Property startPort: StartPort of the portRange.
        '''
        if __debug__:
            def stub(
                *,
                listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                alpn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                alpn_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ca_certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                cps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                end_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                listener_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                mss: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                start_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            check_type(argname="argument sec_sensor_enabled", value=sec_sensor_enabled, expected_type=type_hints["sec_sensor_enabled"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
        self._values: typing.Dict[str, typing.Any] = {
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
        if sec_sensor_enabled is not None:
            self._values["sec_sensor_enabled"] = sec_sensor_enabled
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if start_port is not None:
            self._values["start_port"] = start_port

    @builtins.property
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property listenerProtocol: undefined.'''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: ID of the LoadBalancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serverGroupId: ID of the ServerGroup.'''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property alpnEnabled: undefined.'''
        result = self._values.get("alpn_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property alpnPolicy: Proxy of alpn.'''
        result = self._values.get("alpn_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property caCertificateIds: List of the ca certificate ids.'''
        result = self._values.get("ca_certificate_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property caEnabled: Whether to open CA.'''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property certificateIds: List of the certificate ids.'''
        result = self._values.get("certificate_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property cps: New connection rate limit of Instance.'''
        result = self._values.get("cps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enable: Whether to start listener or not.

        Default True.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property endPort: EndPort of the portRange.'''
        result = self._values.get("end_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property idleTimeout: Specifies the connection idle timeout.'''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property listenerDescription: Description of the listener, [2, 256] characters.'''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property listenerPort: Port of the listener,[0, 65535] the portRange setting need 0.'''
        result = self._values.get("listener_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property mss: Max length of the TCP packet.'''
        result = self._values.get("mss")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property proxyProtocolEnabled: Whether to enable ppv2 function.'''
        result = self._values.get("proxy_protocol_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property secSensorEnabled: Whether to enable the second-level monitoring function.'''
        result = self._values.get("sec_sensor_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property securityPolicyId: Only valid for TcpSSL protocol monitoring.'''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property startPort: StartPort of the portRange.'''
        result = self._values.get("start_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.LoadBalancer",
):
    '''A ROS resource type:  ``ALIYUN::NLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::LoadBalancer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[LoadBalancerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute AddressType: The type of IP address that the NLB instance uses to provide services.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DNSName: The domain name of the NLB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The ID of the NLB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerType: The type of the NLB instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneMappings"))


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
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_type": "loadBalancerType",
        "resource_group_id": "resourceGroupId",
        "traffic_affinity_enabled": "trafficAffinityEnabled",
    },
)
class LoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.ZoneMappingsProperty", typing.Dict[str, typing.Any]]]]],
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        load_balancer_billing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosLoadBalancer.LoadBalancerBillingConfigProperty", typing.Dict[str, typing.Any]]]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::LoadBalancer``.

        :param address_type: Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values: Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet. Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        :param zone_mappings: Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        :param address_ip_version: Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        :param bandwidth_package_id: Property bandwidthPackageId: Attach common bandwidth package to load balancer.
        :param cross_zone_enabled: Property crossZoneEnabled: Whether enable cross zone. Default: true
        :param load_balancer_billing_config: Property loadBalancerBillingConfig: The configuration of the billing method.
        :param load_balancer_name: Property loadBalancerName: The name of the NLB instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        :param load_balancer_type: Property loadBalancerType: The type of the NLB instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param traffic_affinity_enabled: Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        if __debug__:
            def stub(
                *,
                address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                load_balancer_billing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                load_balancer_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument cross_zone_enabled", value=cross_zone_enabled, expected_type=type_hints["cross_zone_enabled"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_type", value=load_balancer_type, expected_type=type_hints["load_balancer_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument traffic_affinity_enabled", value=traffic_affinity_enabled, expected_type=type_hints["traffic_affinity_enabled"])
        self._values: typing.Dict[str, typing.Any] = {
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
        if load_balancer_billing_config is not None:
            self._values["load_balancer_billing_config"] = load_balancer_billing_config
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_type is not None:
            self._values["load_balancer_type"] = load_balancer_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if traffic_affinity_enabled is not None:
            self._values["traffic_affinity_enabled"] = traffic_affinity_enabled

    @builtins.property
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property addressType: The type of IP address that the NLB instance uses to provide services.

        Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''Property zoneMappings: The zones and the vSwitches in the zones.

        You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property bandwidthPackageId: Attach common bandwidth package to load balancer.'''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property crossZoneEnabled: Whether enable cross zone.

        Default: true
        '''
        result = self._values.get("cross_zone_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]]:
        '''Property loadBalancerBillingConfig: The configuration of the billing method.'''
        result = self._values.get("load_balancer_billing_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerName: The name of the NLB instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerType: The type of the NLB instance.'''
        result = self._values.get("load_balancer_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property trafficAffinityEnabled: Whether enable traffic affinity.

        Default: false
        '''
        result = self._values.get("traffic_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosListener",
):
    '''A ROS template type:  ``ALIYUN::NLB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosListenerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerId")
    def attr_listener_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerId: Id of created Listener
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerPort: ListenerPort of created Listener
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPort"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerProtocol")
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerProtocol: undefined
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "listenerProtocol"))

    @listener_protocol.setter
    def listener_protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerProtocol", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: ID of the LoadBalancer
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupId")
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupId: ID of the ServerGroup
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serverGroupId"))

    @server_group_id.setter
    def server_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="alpnEnabled")
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: alpnEnabled: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "alpnEnabled"))

    @alpn_enabled.setter
    def alpn_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alpnEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="alpnPolicy")
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: alpnPolicy: Proxy of alpn
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "alpnPolicy"))

    @alpn_policy.setter
    def alpn_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alpnPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="caCertificateIds")
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: caCertificateIds: List of the ca certificate ids
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "caCertificateIds"))

    @ca_certificate_ids.setter
    def ca_certificate_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caCertificateIds", value)

    @builtins.property
    @jsii.member(jsii_name="caEnabled")
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: caEnabled: Whether to open CA
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "caEnabled"))

    @ca_enabled.setter
    def ca_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="certificateIds")
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: certificateIds: List of the certificate ids
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "certificateIds"))

    @certificate_ids.setter
    def certificate_ids(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificateIds", value)

    @builtins.property
    @jsii.member(jsii_name="cps")
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: cps: New connection rate limit of Instance
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "cps"))

    @cps.setter
    def cps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cps", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Whether to start listener or not. Default True.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="endPort")
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: endPort: EndPort of the portRange
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "endPort"))

    @end_port.setter
    def end_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endPort", value)

    @builtins.property
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: idleTimeout: Specifies the connection idle timeout
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "idleTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="listenerDescription")
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: listenerDescription: Description of the listener, [2, 256] characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "listenerDescription"))

    @listener_description.setter
    def listener_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerDescription", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="mss")
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: mss: Max length of the TCP packet
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "mss"))

    @mss.setter
    def mss(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mss", value)

    @builtins.property
    @jsii.member(jsii_name="proxyProtocolEnabled")
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyProtocolEnabled: Whether to enable ppv2 function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "proxyProtocolEnabled"))

    @proxy_protocol_enabled.setter
    def proxy_protocol_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyProtocolEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="secSensorEnabled")
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: secSensorEnabled: Whether to enable the second-level monitoring function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "secSensorEnabled"))

    @sec_sensor_enabled.setter
    def sec_sensor_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secSensorEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="securityPolicyId")
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityPolicyId: Only valid for TcpSSL protocol monitoring
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "securityPolicyId"))

    @security_policy_id.setter
    def security_policy_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityPolicyId", value)

    @builtins.property
    @jsii.member(jsii_name="startPort")
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: startPort: StartPort of the portRange
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "startPort"))

    @start_port.setter
    def start_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startPort", value)


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
        "sec_sensor_enabled": "secSensorEnabled",
        "security_policy_id": "securityPolicyId",
        "start_port": "startPort",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        alpn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        alpn_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ca_certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        cps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        end_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        listener_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        mss: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::Listener``.

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
        :param sec_sensor_enabled: 
        :param security_policy_id: 
        :param start_port: 
        '''
        if __debug__:
            def stub(
                *,
                listener_protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                alpn_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                alpn_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ca_certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                ca_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                certificate_ids: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                cps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                end_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                listener_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                listener_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                mss: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                proxy_protocol_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                sec_sensor_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                security_policy_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                start_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            check_type(argname="argument sec_sensor_enabled", value=sec_sensor_enabled, expected_type=type_hints["sec_sensor_enabled"])
            check_type(argname="argument security_policy_id", value=security_policy_id, expected_type=type_hints["security_policy_id"])
            check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
        self._values: typing.Dict[str, typing.Any] = {
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
        if sec_sensor_enabled is not None:
            self._values["sec_sensor_enabled"] = sec_sensor_enabled
        if security_policy_id is not None:
            self._values["security_policy_id"] = security_policy_id
        if start_port is not None:
            self._values["start_port"] = start_port

    @builtins.property
    def listener_protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerProtocol: undefined
        '''
        result = self._values.get("listener_protocol")
        assert result is not None, "Required property 'listener_protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: ID of the LoadBalancer
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupId: ID of the ServerGroup
        '''
        result = self._values.get("server_group_id")
        assert result is not None, "Required property 'server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def alpn_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: alpnEnabled: undefined
        '''
        result = self._values.get("alpn_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def alpn_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: alpnPolicy: Proxy of alpn
        '''
        result = self._values.get("alpn_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ca_certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: caCertificateIds: List of the ca certificate ids
        '''
        result = self._values.get("ca_certificate_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def ca_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: caEnabled: Whether to open CA
        '''
        result = self._values.get("ca_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_ids(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: certificateIds: List of the certificate ids
        '''
        result = self._values.get("certificate_ids")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def cps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: cps: New connection rate limit of Instance
        '''
        result = self._values.get("cps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Whether to start listener or not. Default True.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def end_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: endPort: EndPort of the portRange
        '''
        result = self._values.get("end_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: idleTimeout: Specifies the connection idle timeout
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: listenerDescription: Description of the listener, [2, 256] characters.
        '''
        result = self._values.get("listener_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: listenerPort: Port of the listener,[0, 65535] the portRange setting need 0
        '''
        result = self._values.get("listener_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mss(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: mss: Max length of the TCP packet
        '''
        result = self._values.get("mss")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proxy_protocol_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: proxyProtocolEnabled: Whether to enable ppv2 function
        '''
        result = self._values.get("proxy_protocol_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def sec_sensor_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: secSensorEnabled: Whether to enable the second-level monitoring function
        '''
        result = self._values.get("sec_sensor_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def security_policy_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: securityPolicyId: Only valid for TcpSSL protocol monitoring
        '''
        result = self._values.get("security_policy_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: startPort: StartPort of the portRange
        '''
        result = self._values.get("start_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer",
):
    '''A ROS template type:  ``ALIYUN::NLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::LoadBalancer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosLoadBalancerProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AddressType: The type of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrDnsName")
    def attr_dns_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DNSName: The domain name of the NLB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDnsName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The ID of the NLB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerType")
    def attr_load_balancer_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerType: The type of the NLB instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneMappings")
    def attr_zone_mappings(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneMappings"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneMappings")
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]], jsii.get(self, "zoneMappings"))

    @zone_mappings.setter
    def zone_mappings(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.ZoneMappingsProperty"]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneMappings", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property
    @jsii.member(jsii_name="crossZoneEnabled")
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: crossZoneEnabled: Whether enable cross zone. Default: true
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "crossZoneEnabled"))

    @cross_zone_enabled.setter
    def cross_zone_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "crossZoneEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerBillingConfig")
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]], jsii.get(self, "loadBalancerBillingConfig"))

    @load_balancer_billing_config.setter
    def load_balancer_billing_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancer.LoadBalancerBillingConfigProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerBillingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loadBalancerName: The name of the NLB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerType")
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerType: The type of the NLB instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerType"))

    @load_balancer_type.setter
    def load_balancer_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="trafficAffinityEnabled")
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "trafficAffinityEnabled"))

    @traffic_affinity_enabled.setter
    def traffic_affinity_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trafficAffinityEnabled", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.LoadBalancerBillingConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"pay_type": "payType"},
    )
    class LoadBalancerBillingConfigProperty:
        def __init__(
            self,
            *,
            pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param pay_type: 
            '''
            if __debug__:
                def stub(
                    *,
                    pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            self._values: typing.Dict[str, typing.Any] = {}
            if pay_type is not None:
                self._values["pay_type"] = pay_type

        @builtins.property
        def pay_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: payType: The billing method of the NLB instance.
            '''
            result = self._values.get("pay_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoadBalancerBillingConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.RosLoadBalancer.ZoneMappingsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "v_switch_id": "vSwitchId",
            "zone_id": "zoneId",
            "allocation_id": "allocationId",
            "private_i_pv4_address": "privateIPv4Address",
        },
    )
    class ZoneMappingsProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            allocation_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            private_i_pv4_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            :param allocation_id: 
            :param private_i_pv4_address: 
            '''
            if __debug__:
                def stub(
                    *,
                    v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    allocation_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    private_i_pv4_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
                check_type(argname="argument allocation_id", value=allocation_id, expected_type=type_hints["allocation_id"])
                check_type(argname="argument private_i_pv4_address", value=private_i_pv4_address, expected_type=type_hints["private_i_pv4_address"])
            self._values: typing.Dict[str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }
            if allocation_id is not None:
                self._values["allocation_id"] = allocation_id
            if private_i_pv4_address is not None:
                self._values["private_i_pv4_address"] = private_i_pv4_address

        @builtins.property
        def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: The ID of the zone to which the NLB instance belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def allocation_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: allocationId:
            '''
            result = self._values.get("allocation_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def private_i_pv4_address(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: privateIPv4Address:
            '''
            result = self._values.get("private_i_pv4_address")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        "load_balancer_billing_config": "loadBalancerBillingConfig",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_type": "loadBalancerType",
        "resource_group_id": "resourceGroupId",
        "traffic_affinity_enabled": "trafficAffinityEnabled",
    },
)
class RosLoadBalancerProps:
    def __init__(
        self,
        *,
        address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        load_balancer_billing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::LoadBalancer``.

        :param address_type: 
        :param vpc_id: 
        :param zone_mappings: 
        :param address_ip_version: 
        :param bandwidth_package_id: 
        :param cross_zone_enabled: 
        :param load_balancer_billing_config: 
        :param load_balancer_name: 
        :param load_balancer_type: 
        :param resource_group_id: 
        :param traffic_affinity_enabled: 
        '''
        if __debug__:
            def stub(
                *,
                address_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                zone_mappings: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.ZoneMappingsProperty, typing.Dict[str, typing.Any]]]]],
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                bandwidth_package_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                cross_zone_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                load_balancer_billing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosLoadBalancer.LoadBalancerBillingConfigProperty, typing.Dict[str, typing.Any]]]] = None,
                load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                load_balancer_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                traffic_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument zone_mappings", value=zone_mappings, expected_type=type_hints["zone_mappings"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument bandwidth_package_id", value=bandwidth_package_id, expected_type=type_hints["bandwidth_package_id"])
            check_type(argname="argument cross_zone_enabled", value=cross_zone_enabled, expected_type=type_hints["cross_zone_enabled"])
            check_type(argname="argument load_balancer_billing_config", value=load_balancer_billing_config, expected_type=type_hints["load_balancer_billing_config"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_type", value=load_balancer_type, expected_type=type_hints["load_balancer_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument traffic_affinity_enabled", value=traffic_affinity_enabled, expected_type=type_hints["traffic_affinity_enabled"])
        self._values: typing.Dict[str, typing.Any] = {
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
        if load_balancer_billing_config is not None:
            self._values["load_balancer_billing_config"] = load_balancer_billing_config
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_type is not None:
            self._values["load_balancer_type"] = load_balancer_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if traffic_affinity_enabled is not None:
            self._values["traffic_affinity_enabled"] = traffic_affinity_enabled

    @builtins.property
    def address_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
        Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
        Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
        '''
        result = self._values.get("address_type")
        assert result is not None, "Required property 'address_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_mappings(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]]:
        '''
        :Property: zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
        '''
        result = self._values.get("zone_mappings")
        assert result is not None, "Required property 'zone_mappings' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.ZoneMappingsProperty]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: The version of IP address that the NLB instance uses to provide services.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidthPackageId: Attach common bandwidth package to load balancer.
        '''
        result = self._values.get("bandwidth_package_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cross_zone_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: crossZoneEnabled: Whether enable cross zone. Default: true
        '''
        result = self._values.get("cross_zone_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_billing_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]]:
        '''
        :Property: loadBalancerBillingConfig: The configuration of the billing method.
        '''
        result = self._values.get("load_balancer_billing_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancer.LoadBalancerBillingConfigProperty]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loadBalancerName: The name of the NLB instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerType: The type of the NLB instance.
        '''
        result = self._values.get("load_balancer_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def traffic_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: trafficAffinityEnabled: Whether enable traffic affinity. Default: false
        '''
        result = self._values.get("traffic_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosServerGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.RosServerGroup",
):
    '''A ROS template type:  ``ALIYUN::NLB::ServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosServerGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::ServerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosServerGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServerGroupId: ID of ServerGroup
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"]:
        '''
        :Property: healthCheckConfig: Health Check Config
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"], jsii.get(self, "healthCheckConfig"))

    @health_check_config.setter
    def health_check_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.HealthCheckConfigProperty"],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupName")
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupName: Name of ServerGroup
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serverGroupName"))

    @server_group_name.setter
    def server_group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: ID of VPC
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version of address
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDrainEnabled")
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionDrainEnabled: Whether to enable graceful connection interruption
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "connectionDrainEnabled"))

    @connection_drain_enabled.setter
    def connection_drain_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDrainEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="connectionDrainTimeout")
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionDrainTimeout: Time of graceful connection interruption
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "connectionDrainTimeout"))

    @connection_drain_timeout.setter
    def connection_drain_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionDrainTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="persistenceEnabled")
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: persistenceEnabled: Whether to enable session persistence
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "persistenceEnabled"))

    @persistence_enabled.setter
    def persistence_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "persistenceEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="persistenceTimeout")
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: persistenceTimeout: Time of session persistence
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "persistenceTimeout"))

    @persistence_timeout.setter
    def persistence_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "persistenceTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="preserveClientIpEnabled")
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: preserveClientIpEnabled: Whether to enable the client address retention function
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "preserveClientIpEnabled"))

    @preserve_client_ip_enabled.setter
    def preserve_client_ip_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "preserveClientIpEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: protocol: Protocol of ServerGroup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: scheduler: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="serverGroupType")
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serverGroupType: Type of ServerGroup
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serverGroupType"))

    @server_group_type.setter
    def server_group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverGroupType", value)

    @builtins.property
    @jsii.member(jsii_name="servers")
    def servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.ServersProperty"]]]]:
        '''
        :Property: servers: undefined
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.ServersProperty"]]]], jsii.get(self, "servers"))

    @servers.setter
    def servers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosServerGroup.ServersProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.ServersProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servers", value)

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
            http_check_method: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            health_check_connect_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            health_check_domain: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            health_check_http_code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            health_check_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
                def stub(
                    *,
                    http_check_method: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    health_check_connect_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    health_check_connect_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    health_check_domain: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                    health_check_http_code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                    health_check_interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    health_check_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    health_check_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
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
            self._values: typing.Dict[str, typing.Any] = {
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
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: httpCheckMethod: When the health check protocol is http or https type, the selected health check detection method
            '''
            result = self._values.get("http_check_method")
            assert result is not None, "Required property 'http_check_method' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def health_check_connect_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckConnectPort: Port of health check
            '''
            result = self._values.get("health_check_connect_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_connect_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckConnectTimeout: Maximum timeout for each health check response
            '''
            result = self._values.get("health_check_connect_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckDomain: Domain name for health check
            '''
            result = self._values.get("health_check_domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_enabled(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckEnabled: Whether to open health check
            '''
            result = self._values.get("health_check_enabled")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_http_code(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: healthCheckHttpCode: undefined
            '''
            result = self._values.get("health_check_http_code")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def health_check_interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckInterval: Health check interval
            '''
            result = self._values.get("health_check_interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckType: Type of health check
            '''
            result = self._values.get("health_check_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckUrl: Url for health check
            '''
            result = self._values.get("health_check_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthyThreshold: Determine the health check status of the backend server from fail to success.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: unhealthyThreshold: Determine the health check status of the backend server from success to fail.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
            "port": "port",
            "server_id": "serverId",
            "server_type": "serverType",
            "description": "description",
            "server_ip": "serverIp",
            "weight": "weight",
        },
    )
    class ServersProperty:
        def __init__(
            self,
            *,
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            server_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param server_type: 
            :param description: 
            :param server_ip: 
            :param weight: 
            '''
            if __debug__:
                def stub(
                    *,
                    port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                    server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    server_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[str, typing.Any] = {
                "port": port,
                "server_id": server_id,
                "server_type": server_type,
            }
            if description is not None:
                self._values["description"] = description
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: Port used by the backend server
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: Id of server
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverType: Type of backend server
            '''
            result = self._values.get("server_type")
            assert result is not None, "Required property 'server_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: undefined
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: undefined
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: weight: Weight of the backend server
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.RosServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_config": "healthCheckConfig",
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "address_ip_version": "addressIpVersion",
        "connection_drain_enabled": "connectionDrainEnabled",
        "connection_drain_timeout": "connectionDrainTimeout",
        "persistence_enabled": "persistenceEnabled",
        "persistence_timeout": "persistenceTimeout",
        "preserve_client_ip_enabled": "preserveClientIpEnabled",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "servers": "servers",
    },
)
class RosServerGroupProps:
    def __init__(
        self,
        *,
        health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        persistence_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        persistence_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::ServerGroup``.

        :param health_check_config: 
        :param server_group_name: 
        :param vpc_id: 
        :param address_ip_version: 
        :param connection_drain_enabled: 
        :param connection_drain_timeout: 
        :param persistence_enabled: 
        :param persistence_timeout: 
        :param preserve_client_ip_enabled: 
        :param protocol: 
        :param resource_group_id: 
        :param scheduler: 
        :param server_group_type: 
        :param servers: 
        '''
        if __debug__:
            def stub(
                *,
                health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
                server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                persistence_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                persistence_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[str, typing.Any]]]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument connection_drain_enabled", value=connection_drain_enabled, expected_type=type_hints["connection_drain_enabled"])
            check_type(argname="argument connection_drain_timeout", value=connection_drain_timeout, expected_type=type_hints["connection_drain_timeout"])
            check_type(argname="argument persistence_enabled", value=persistence_enabled, expected_type=type_hints["persistence_enabled"])
            check_type(argname="argument persistence_timeout", value=persistence_timeout, expected_type=type_hints["persistence_timeout"])
            check_type(argname="argument preserve_client_ip_enabled", value=preserve_client_ip_enabled, expected_type=type_hints["preserve_client_ip_enabled"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[str, typing.Any] = {
            "health_check_config": health_check_config,
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if connection_drain_enabled is not None:
            self._values["connection_drain_enabled"] = connection_drain_enabled
        if connection_drain_timeout is not None:
            self._values["connection_drain_timeout"] = connection_drain_timeout
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

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''
        :Property: healthCheckConfig: Health Check Config
        '''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverGroupName: Name of ServerGroup
        '''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: ID of VPC
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version of address
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionDrainEnabled: Whether to enable graceful connection interruption
        '''
        result = self._values.get("connection_drain_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionDrainTimeout: Time of graceful connection interruption
        '''
        result = self._values.get("connection_drain_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: persistenceEnabled: Whether to enable session persistence
        '''
        result = self._values.get("persistence_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: persistenceTimeout: Time of session persistence
        '''
        result = self._values.get("persistence_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: preserveClientIpEnabled: Whether to enable the client address retention function
        '''
        result = self._values.get("preserve_client_ip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: protocol: Protocol of ServerGroup
        '''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: undefined
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: scheduler: undefined
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serverGroupType: Type of ServerGroup
        '''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.ServersProperty]]]]:
        '''
        :Property: servers: undefined
        '''
        result = self._values.get("servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.ServersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServerGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.ServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::NLB::ServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ServerGroupProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::NLB::ServerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ServerGroupProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServerGroupId")
    def attr_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServerGroupId: ID of ServerGroup.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.ServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "health_check_config": "healthCheckConfig",
        "server_group_name": "serverGroupName",
        "vpc_id": "vpcId",
        "address_ip_version": "addressIpVersion",
        "connection_drain_enabled": "connectionDrainEnabled",
        "connection_drain_timeout": "connectionDrainTimeout",
        "persistence_enabled": "persistenceEnabled",
        "persistence_timeout": "persistenceTimeout",
        "preserve_client_ip_enabled": "preserveClientIpEnabled",
        "protocol": "protocol",
        "resource_group_id": "resourceGroupId",
        "scheduler": "scheduler",
        "server_group_type": "serverGroupType",
        "servers": "servers",
    },
)
class ServerGroupProps:
    def __init__(
        self,
        *,
        health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
        server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        persistence_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        persistence_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::NLB::ServerGroup``.

        :param health_check_config: Property healthCheckConfig: Health Check Config.
        :param server_group_name: Property serverGroupName: Name of ServerGroup.
        :param vpc_id: Property vpcId: ID of VPC.
        :param address_ip_version: Property addressIpVersion: IP version of address.
        :param connection_drain_enabled: Property connectionDrainEnabled: Whether to enable graceful connection interruption.
        :param connection_drain_timeout: Property connectionDrainTimeout: Time of graceful connection interruption.
        :param persistence_enabled: Property persistenceEnabled: Whether to enable session persistence.
        :param persistence_timeout: Property persistenceTimeout: Time of session persistence.
        :param preserve_client_ip_enabled: Property preserveClientIpEnabled: Whether to enable the client address retention function.
        :param protocol: Property protocol: Protocol of ServerGroup.
        :param resource_group_id: Property resourceGroupId: undefined.
        :param scheduler: Property scheduler: undefined.
        :param server_group_type: Property serverGroupType: Type of ServerGroup.
        :param servers: Property servers: undefined.
        '''
        if __debug__:
            def stub(
                *,
                health_check_config: typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.HealthCheckConfigProperty, typing.Dict[str, typing.Any]]],
                server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                connection_drain_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                connection_drain_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                persistence_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                persistence_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                preserve_client_ip_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                protocol: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                server_group_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosServerGroup.ServersProperty, typing.Dict[str, typing.Any]]]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
            check_type(argname="argument server_group_name", value=server_group_name, expected_type=type_hints["server_group_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument connection_drain_enabled", value=connection_drain_enabled, expected_type=type_hints["connection_drain_enabled"])
            check_type(argname="argument connection_drain_timeout", value=connection_drain_timeout, expected_type=type_hints["connection_drain_timeout"])
            check_type(argname="argument persistence_enabled", value=persistence_enabled, expected_type=type_hints["persistence_enabled"])
            check_type(argname="argument persistence_timeout", value=persistence_timeout, expected_type=type_hints["persistence_timeout"])
            check_type(argname="argument preserve_client_ip_enabled", value=preserve_client_ip_enabled, expected_type=type_hints["preserve_client_ip_enabled"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_group_type", value=server_group_type, expected_type=type_hints["server_group_type"])
            check_type(argname="argument servers", value=servers, expected_type=type_hints["servers"])
        self._values: typing.Dict[str, typing.Any] = {
            "health_check_config": health_check_config,
            "server_group_name": server_group_name,
            "vpc_id": vpc_id,
        }
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if connection_drain_enabled is not None:
            self._values["connection_drain_enabled"] = connection_drain_enabled
        if connection_drain_timeout is not None:
            self._values["connection_drain_timeout"] = connection_drain_timeout
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

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty]:
        '''Property healthCheckConfig: Health Check Config.'''
        result = self._values.get("health_check_config")
        assert result is not None, "Required property 'health_check_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosServerGroup.HealthCheckConfigProperty], result)

    @builtins.property
    def server_group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serverGroupName: Name of ServerGroup.'''
        result = self._values.get("server_group_name")
        assert result is not None, "Required property 'server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: ID of VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressIpVersion: IP version of address.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_drain_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property connectionDrainEnabled: Whether to enable graceful connection interruption.'''
        result = self._values.get("connection_drain_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_drain_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property connectionDrainTimeout: Time of graceful connection interruption.'''
        result = self._values.get("connection_drain_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property persistenceEnabled: Whether to enable session persistence.'''
        result = self._values.get("persistence_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property persistenceTimeout: Time of session persistence.'''
        result = self._values.get("persistence_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def preserve_client_ip_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property preserveClientIpEnabled: Whether to enable the client address retention function.'''
        result = self._values.get("preserve_client_ip_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property protocol: Protocol of ServerGroup.'''
        result = self._values.get("protocol")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: undefined.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property scheduler: undefined.'''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serverGroupType: Type of ServerGroup.'''
        result = self._values.get("server_group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.ServersProperty]]]]:
        '''Property servers: undefined.'''
        result = self._values.get("servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosServerGroup.ServersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Listener",
    "ListenerProps",
    "LoadBalancer",
    "LoadBalancerProps",
    "RosListener",
    "RosListenerProps",
    "RosLoadBalancer",
    "RosLoadBalancerProps",
    "RosServerGroup",
    "RosServerGroupProps",
    "ServerGroup",
    "ServerGroupProps",
]

publication.publish()
