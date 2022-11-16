'''
## Aliyun ROS PRIVATELINK Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PRIVATELINK from '@alicloud/ros-cdk-privatelink';
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


class RosVpcEndpoint(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpoint",
):
    '''A ROS template type:  ``ALIYUN::PrivateLink::VpcEndpoint``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcEndpointProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosVpcEndpointProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointDomain")
    def attr_endpoint_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointDomain: The domain name of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointId: The ID of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointName")
    def attr_endpoint_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointName: The name of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The ID of endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The name of endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The vpc ID of endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneDomains")
    def attr_zone_domains(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneDomains: The zone domains.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneDomains"))

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
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The VPC to which the endpoint belongs.
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
    @jsii.member(jsii_name="endpointDescription")
    def endpoint_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointDescription: The description of the endpoint.
        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "endpointDescription"))

    @endpoint_description.setter
    def endpoint_description(
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
        jsii.set(self, "endpointDescription", value)

    @builtins.property
    @jsii.member(jsii_name="endpointName")
    def endpoint_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointName: The name of the endpoint.
        The name must be 2 to 128 characters in length and can contain digits, underscores
        (_), and hyphens (-). The name must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "endpointName"))

    @endpoint_name.setter
    def endpoint_name(
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
        jsii.set(self, "endpointName", value)

    @builtins.property
    @jsii.member(jsii_name="endpointType")
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: endpointType: Endpoint type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "endpointType"))

    @endpoint_type.setter
    def endpoint_type(
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
        jsii.set(self, "endpointType", value)

    @builtins.property
    @jsii.member(jsii_name="protectedEnabled")
    def protected_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
        true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
        false (default): no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "protectedEnabled"))

    @protected_enabled.setter
    def protected_enabled(
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
        jsii.set(self, "protectedEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="serviceId")
    def service_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceId"))

    @service_id.setter
    def service_id(
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
        jsii.set(self, "serviceId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
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
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="zone")
    def zone(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpoint.ZoneProperty"]]]]:
        '''
        :Property: zone:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpoint.ZoneProperty"]]]], jsii.get(self, "zone"))

    @zone.setter
    def zone(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpoint.ZoneProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zone", value)

    @builtins.property
    @jsii.member(jsii_name="zonePrivateIpAddressCount")
    def zone_private_ip_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "zonePrivateIpAddressCount"))

    @zone_private_ip_address_count.setter
    def zone_private_ip_address_count(
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
        jsii.set(self, "zonePrivateIpAddressCount", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty",
        jsii_struct_bases=[],
        name_mapping={"ip": "ip", "v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class ZoneProperty:
        def __init__(
            self,
            *,
            ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param ip: 
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                    zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[str, typing.Any] = {}
            if ip is not None:
                self._values["ip"] = ip
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id
            if zone_id is not None:
                self._values["zone_id"] = zone_id

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ip: The IP address of the zone in which the endpoint is deployed.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: vSwitchId: The switch of the endpoint network interface in the given zone.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: zoneId: The zone of the associated endpoint service.
            '''
            result = self._values.get("zone_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ZoneProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "endpoint_description": "endpointDescription",
        "endpoint_name": "endpointName",
        "endpoint_type": "endpointType",
        "protected_enabled": "protectedEnabled",
        "service_id": "serviceId",
        "service_name": "serviceName",
        "zone": "zone",
        "zone_private_ip_address_count": "zonePrivateIpAddressCount",
    },
)
class RosVpcEndpointProps:
    def __init__(
        self,
        *,
        security_group_id: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        endpoint_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protected_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpoint.ZoneProperty, typing.Dict[str, typing.Any]]]]]] = None,
        zone_private_ip_address_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param security_group_id: 
        :param vpc_id: 
        :param endpoint_description: 
        :param endpoint_name: 
        :param endpoint_type: 
        :param protected_enabled: 
        :param service_id: 
        :param service_name: 
        :param zone: 
        :param zone_private_ip_address_count: 
        '''
        if __debug__:
            def stub(
                *,
                security_group_id: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                endpoint_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                endpoint_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                protected_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpoint.ZoneProperty, typing.Dict[str, typing.Any]]]]]] = None,
                zone_private_ip_address_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument endpoint_description", value=endpoint_description, expected_type=type_hints["endpoint_description"])
            check_type(argname="argument endpoint_name", value=endpoint_name, expected_type=type_hints["endpoint_name"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument protected_enabled", value=protected_enabled, expected_type=type_hints["protected_enabled"])
            check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument zone", value=zone, expected_type=type_hints["zone"])
            check_type(argname="argument zone_private_ip_address_count", value=zone_private_ip_address_count, expected_type=type_hints["zone_private_ip_address_count"])
        self._values: typing.Dict[str, typing.Any] = {
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
        }
        if endpoint_description is not None:
            self._values["endpoint_description"] = endpoint_description
        if endpoint_name is not None:
            self._values["endpoint_name"] = endpoint_name
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if protected_enabled is not None:
            self._values["protected_enabled"] = protected_enabled
        if service_id is not None:
            self._values["service_id"] = service_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if zone is not None:
            self._values["zone"] = zone
        if zone_private_ip_address_count is not None:
            self._values["zone_private_ip_address_count"] = zone_private_ip_address_count

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The VPC to which the endpoint belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def endpoint_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointDescription: The description of the endpoint.
        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("endpoint_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endpointName: The name of the endpoint.
        The name must be 2 to 128 characters in length and can contain digits, underscores
        (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("endpoint_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: endpointType: Endpoint type.
        '''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protected_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values:
        true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
        false (default): no
        '''
        result = self._values.get("protected_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        '''
        result = self._values.get("service_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]]:
        '''
        :Property: zone:
        '''
        result = self._values.get("zone")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]], result)

    @builtins.property
    def zone_private_ip_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
        '''
        result = self._values.get("zone_private_ip_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcEndpointService(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointService",
):
    '''A ROS template type:  ``ALIYUN::PrivateLink::VpcEndpointService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcEndpointServiceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosVpcEndpointServiceProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrMaxBandwidth")
    def attr_max_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MaxBandwidth: The maximum bandwidth of the endpoint connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrMinBandwidth")
    def attr_min_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MinBandwidth: The minimum bandwidth of the endpoint connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMinBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceDescription")
    def attr_service_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceDescription: The description of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceDomain")
    def attr_service_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceDomain: The domain name of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The ID of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The name of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

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
    @jsii.member(jsii_name="autoAcceptEnabled")
    def auto_accept_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
        true: automatically accepts endpoint connection requests.
        false: does not automatically accept endpoint connection requests.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoAcceptEnabled"))

    @auto_accept_enabled.setter
    def auto_accept_enabled(
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
        jsii.set(self, "autoAcceptEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="connectBandwidth")
    def connect_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "connectBandwidth"))

    @connect_bandwidth.setter
    def connect_bandwidth(
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
        jsii.set(self, "connectBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="payer")
    def payer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payer: The payer of the endpoint service. Valid values:
        Endpoint: the service consumer.
        EndpointService: the service provider.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payer"))

    @payer.setter
    def payer(
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
        jsii.set(self, "payer", value)

    @builtins.property
    @jsii.member(jsii_name="resource")
    def resource(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpointService.ResourceProperty"]]]]:
        '''
        :Property: resource:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpointService.ResourceProperty"]]]], jsii.get(self, "resource"))

    @resource.setter
    def resource(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVpcEndpointService.ResourceProperty"]]]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resource", value)

    @builtins.property
    @jsii.member(jsii_name="serviceDescription")
    def service_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceDescription: The description for the endpoint service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceDescription"))

    @service_description.setter
    def service_description(
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
        jsii.set(self, "serviceDescription", value)

    @builtins.property
    @jsii.member(jsii_name="serviceResourceType")
    def service_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceResourceType: Service resource type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceResourceType"))

    @service_resource_type.setter
    def service_resource_type(
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
        jsii.set(self, "serviceResourceType", value)

    @builtins.property
    @jsii.member(jsii_name="user")
    def user(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: user: Account IDs to the whitelist of an endpoint service.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "user"))

    @user.setter
    def user(
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
        jsii.set(self, "user", value)

    @builtins.property
    @jsii.member(jsii_name="zoneAffinityEnabled")
    def zone_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
        true: yes.
        false (default): no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "zoneAffinityEnabled"))

    @zone_affinity_enabled.setter
    def zone_affinity_enabled(
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
        jsii.set(self, "zoneAffinityEnabled", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "resource_id": "resourceId",
            "resource_type": "resourceType",
            "zone_id": "zoneId",
        },
    )
    class ResourceProperty:
        def __init__(
            self,
            *,
            resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param resource_id: 
            :param resource_type: 
            :param zone_id: 
            '''
            if __debug__:
                def stub(
                    *,
                    resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
                check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[str, typing.Any] = {
                "resource_id": resource_id,
                "resource_type": resource_type,
                "zone_id": zone_id,
            }

        @builtins.property
        def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceId: Service resources added to the endpoint service.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceType: The type of service resource. Supports slb, nlb, vpcNat.
            '''
            result = self._values.get("resource_type")
            assert result is not None, "Required property 'resource_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: The zone to which the service resource belongs.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosVpcEndpointServiceAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachment",
):
    '''A ROS template type:  ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcEndpointServiceAttachmentProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosVpcEndpointServiceAttachmentProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceId: The resource id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: The resource type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

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
    @jsii.member(jsii_name="resourceId")
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceId: The resource id.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
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
        jsii.set(self, "resourceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceType")
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceType: The resource type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
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
        jsii.set(self, "resourceType", value)

    @builtins.property
    @jsii.member(jsii_name="serviceId")
    def service_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceId: The endpoint service that is associated with the endpoint.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceId"))

    @service_id.setter
    def service_id(
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
        jsii.set(self, "serviceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "service_id": "serviceId",
    },
)
class RosVpcEndpointServiceAttachmentProps:
    def __init__(
        self,
        *,
        resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.

        :param resource_id: 
        :param resource_type: 
        :param service_id: 
        '''
        if __debug__:
            def stub(
                *,
                resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "resource_id": resource_id,
            "resource_type": resource_type,
            "service_id": service_id,
        }

    @builtins.property
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceId: The resource id.
        '''
        result = self._values.get("resource_id")
        assert result is not None, "Required property 'resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceType: The resource type.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceId: The endpoint service that is associated with the endpoint.
        '''
        result = self._values.get("service_id")
        assert result is not None, "Required property 'service_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcEndpointServiceAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpointServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_accept_enabled": "autoAcceptEnabled",
        "connect_bandwidth": "connectBandwidth",
        "payer": "payer",
        "resource": "resource",
        "service_description": "serviceDescription",
        "service_resource_type": "serviceResourceType",
        "user": "user",
        "zone_affinity_enabled": "zoneAffinityEnabled",
    },
)
class RosVpcEndpointServiceProps:
    def __init__(
        self,
        *,
        auto_accept_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        connect_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        payer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpointService.ResourceProperty, typing.Dict[str, typing.Any]]]]]] = None,
        service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param auto_accept_enabled: 
        :param connect_bandwidth: 
        :param payer: 
        :param resource: 
        :param service_description: 
        :param service_resource_type: 
        :param user: 
        :param zone_affinity_enabled: 
        '''
        if __debug__:
            def stub(
                *,
                auto_accept_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                connect_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                payer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpointService.ResourceProperty, typing.Dict[str, typing.Any]]]]]] = None,
                service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument auto_accept_enabled", value=auto_accept_enabled, expected_type=type_hints["auto_accept_enabled"])
            check_type(argname="argument connect_bandwidth", value=connect_bandwidth, expected_type=type_hints["connect_bandwidth"])
            check_type(argname="argument payer", value=payer, expected_type=type_hints["payer"])
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            check_type(argname="argument service_description", value=service_description, expected_type=type_hints["service_description"])
            check_type(argname="argument service_resource_type", value=service_resource_type, expected_type=type_hints["service_resource_type"])
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument zone_affinity_enabled", value=zone_affinity_enabled, expected_type=type_hints["zone_affinity_enabled"])
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_accept_enabled is not None:
            self._values["auto_accept_enabled"] = auto_accept_enabled
        if connect_bandwidth is not None:
            self._values["connect_bandwidth"] = connect_bandwidth
        if payer is not None:
            self._values["payer"] = payer
        if resource is not None:
            self._values["resource"] = resource
        if service_description is not None:
            self._values["service_description"] = service_description
        if service_resource_type is not None:
            self._values["service_resource_type"] = service_resource_type
        if user is not None:
            self._values["user"] = user
        if zone_affinity_enabled is not None:
            self._values["zone_affinity_enabled"] = zone_affinity_enabled

    @builtins.property
    def auto_accept_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values:
        true: automatically accepts endpoint connection requests.
        false: does not automatically accept endpoint connection requests.
        '''
        result = self._values.get("auto_accept_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connect_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
        '''
        result = self._values.get("connect_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payer: The payer of the endpoint service. Valid values:
        Endpoint: the service consumer.
        EndpointService: the service provider.
        '''
        result = self._values.get("payer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]]:
        '''
        :Property: resource:
        '''
        result = self._values.get("resource")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]], result)

    @builtins.property
    def service_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceDescription: The description for the endpoint service.
        '''
        result = self._values.get("service_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceResourceType: Service resource type.
        '''
        result = self._values.get("service_resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: user: Account IDs to the whitelist of an endpoint service.
        '''
        result = self._values.get("user")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def zone_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
        true: yes.
        false (default): no
        '''
        result = self._values.get("zone_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcEndpointServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcEndpoint(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpoint",
):
    '''A ROS resource type:  ``ALIYUN::PrivateLink::VpcEndpoint``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["VpcEndpointProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpoint``.

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
                props: typing.Union[VpcEndpointProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointDomain")
    def attr_endpoint_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointDomain: The domain name of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointId: The ID of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointName")
    def attr_endpoint_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointName: The name of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The name of endpoint service that is associated with the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The vpc ID of endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneDomains")
    def attr_zone_domains(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneDomains: The zone domains.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneDomains"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "endpoint_description": "endpointDescription",
        "endpoint_name": "endpointName",
        "endpoint_type": "endpointType",
        "protected_enabled": "protectedEnabled",
        "service_id": "serviceId",
        "service_name": "serviceName",
        "zone": "zone",
        "zone_private_ip_address_count": "zonePrivateIpAddressCount",
    },
)
class VpcEndpointProps:
    def __init__(
        self,
        *,
        security_group_id: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        endpoint_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        protected_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpoint.ZoneProperty, typing.Dict[str, typing.Any]]]]]] = None,
        zone_private_ip_address_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param security_group_id: Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        :param vpc_id: Property vpcId: The VPC to which the endpoint belongs.
        :param endpoint_description: Property endpointDescription: The description of the endpoint. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        :param endpoint_name: Property endpointName: The name of the endpoint. The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). The name must start with a letter.
        :param endpoint_type: Property endpointType: Endpoint type.
        :param protected_enabled: Property protectedEnabled: Specifies whether to enable user authentication. This parameter is available in Security Token Service (STS) mode. Valid values: true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode. false (default): no
        :param service_id: Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        :param service_name: Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        :param zone: Property zone:.
        :param zone_private_ip_address_count: Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone. Set the value to 1.
        '''
        if __debug__:
            def stub(
                *,
                security_group_id: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                endpoint_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                endpoint_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                endpoint_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                protected_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpoint.ZoneProperty, typing.Dict[str, typing.Any]]]]]] = None,
                zone_private_ip_address_count: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument endpoint_description", value=endpoint_description, expected_type=type_hints["endpoint_description"])
            check_type(argname="argument endpoint_name", value=endpoint_name, expected_type=type_hints["endpoint_name"])
            check_type(argname="argument endpoint_type", value=endpoint_type, expected_type=type_hints["endpoint_type"])
            check_type(argname="argument protected_enabled", value=protected_enabled, expected_type=type_hints["protected_enabled"])
            check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument zone", value=zone, expected_type=type_hints["zone"])
            check_type(argname="argument zone_private_ip_address_count", value=zone_private_ip_address_count, expected_type=type_hints["zone_private_ip_address_count"])
        self._values: typing.Dict[str, typing.Any] = {
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
        }
        if endpoint_description is not None:
            self._values["endpoint_description"] = endpoint_description
        if endpoint_name is not None:
            self._values["endpoint_name"] = endpoint_name
        if endpoint_type is not None:
            self._values["endpoint_type"] = endpoint_type
        if protected_enabled is not None:
            self._values["protected_enabled"] = protected_enabled
        if service_id is not None:
            self._values["service_id"] = service_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if zone is not None:
            self._values["zone"] = zone
        if zone_private_ip_address_count is not None:
            self._values["zone_private_ip_address_count"] = zone_private_ip_address_count

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property securityGroupId: The security group associated with the endpoint network interface.

        The security group can control the data communication from the VPC to the endpoint network interface.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The VPC to which the endpoint belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def endpoint_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property endpointDescription: The description of the endpoint.

        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("endpoint_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property endpointName: The name of the endpoint.

        The name must be 2 to 128 characters in length and can contain digits, underscores
        (_), and hyphens (-). The name must start with a letter.
        '''
        result = self._values.get("endpoint_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def endpoint_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property endpointType: Endpoint type.'''
        result = self._values.get("endpoint_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protected_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property protectedEnabled: Specifies whether to enable user authentication.

        This parameter is available in Security Token Service (STS) mode. Valid values:
        true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
        false (default): no
        '''
        result = self._values.get("protected_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceId: The endpoint service that is associated with the endpoint.

        One of ServiceId and ServiceName is required.
        '''
        result = self._values.get("service_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceName: The name of the endpoint service that is associated with the endpoint.

        One of ServiceId and ServiceName is required.
        '''
        result = self._values.get("service_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]]:
        '''Property zone:.'''
        result = self._values.get("zone")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]], result)

    @builtins.property
    def zone_private_ip_address_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.

        Set the value to 1.
        '''
        result = self._values.get("zone_private_ip_address_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcEndpointService(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpointService",
):
    '''A ROS resource type:  ``ALIYUN::PrivateLink::VpcEndpointService``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["VpcEndpointServiceProps", typing.Dict[str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointService``.

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
                props: typing.Optional[typing.Union[VpcEndpointServiceProps, typing.Dict[str, typing.Any]]] = None,
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
    @jsii.member(jsii_name="attrMaxBandwidth")
    def attr_max_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrMinBandwidth")
    def attr_min_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMinBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceDescription")
    def attr_service_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceDescription: The description of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceDomain")
    def attr_service_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceDomain: The domain name of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The ID of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The name of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))


class VpcEndpointServiceAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachment",
):
    '''A ROS resource type:  ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["VpcEndpointServiceAttachmentProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.

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
                props: typing.Union[VpcEndpointServiceAttachmentProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceId: The resource id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: The resource type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The endpoint service that is associated with the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "service_id": "serviceId",
    },
)
class VpcEndpointServiceAttachmentProps:
    def __init__(
        self,
        *,
        resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.

        :param resource_id: Property resourceId: The resource id.
        :param resource_type: Property resourceType: The resource type.
        :param service_id: Property serviceId: The endpoint service that is associated with the endpoint.
        '''
        if __debug__:
            def stub(
                *,
                resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                service_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
            check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            check_type(argname="argument service_id", value=service_id, expected_type=type_hints["service_id"])
        self._values: typing.Dict[str, typing.Any] = {
            "resource_id": resource_id,
            "resource_type": resource_type,
            "service_id": service_id,
        }

    @builtins.property
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceId: The resource id.'''
        result = self._values.get("resource_id")
        assert result is not None, "Required property 'resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceType: The resource type.'''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceId: The endpoint service that is associated with the endpoint.'''
        result = self._values.get("service_id")
        assert result is not None, "Required property 'service_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcEndpointServiceAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_accept_enabled": "autoAcceptEnabled",
        "connect_bandwidth": "connectBandwidth",
        "payer": "payer",
        "resource": "resource",
        "service_description": "serviceDescription",
        "service_resource_type": "serviceResourceType",
        "user": "user",
        "zone_affinity_enabled": "zoneAffinityEnabled",
    },
)
class VpcEndpointServiceProps:
    def __init__(
        self,
        *,
        auto_accept_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        connect_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        payer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpointService.ResourceProperty, typing.Dict[str, typing.Any]]]]]] = None,
        service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param auto_accept_enabled: Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values: true: automatically accepts endpoint connection requests. false: does not automatically accept endpoint connection requests.
        :param connect_bandwidth: Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
        :param payer: Property payer: The payer of the endpoint service. Valid values: Endpoint: the service consumer. EndpointService: the service provider.
        :param resource: Property resource:.
        :param service_description: Property serviceDescription: The description for the endpoint service.
        :param service_resource_type: Property serviceResourceType: Service resource type.
        :param user: Property user: Account IDs to the whitelist of an endpoint service.
        :param zone_affinity_enabled: Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone. true: yes. false (default): no
        '''
        if __debug__:
            def stub(
                *,
                auto_accept_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                connect_bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                payer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosVpcEndpointService.ResourceProperty, typing.Dict[str, typing.Any]]]]]] = None,
                service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                service_resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
                zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument auto_accept_enabled", value=auto_accept_enabled, expected_type=type_hints["auto_accept_enabled"])
            check_type(argname="argument connect_bandwidth", value=connect_bandwidth, expected_type=type_hints["connect_bandwidth"])
            check_type(argname="argument payer", value=payer, expected_type=type_hints["payer"])
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            check_type(argname="argument service_description", value=service_description, expected_type=type_hints["service_description"])
            check_type(argname="argument service_resource_type", value=service_resource_type, expected_type=type_hints["service_resource_type"])
            check_type(argname="argument user", value=user, expected_type=type_hints["user"])
            check_type(argname="argument zone_affinity_enabled", value=zone_affinity_enabled, expected_type=type_hints["zone_affinity_enabled"])
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_accept_enabled is not None:
            self._values["auto_accept_enabled"] = auto_accept_enabled
        if connect_bandwidth is not None:
            self._values["connect_bandwidth"] = connect_bandwidth
        if payer is not None:
            self._values["payer"] = payer
        if resource is not None:
            self._values["resource"] = resource
        if service_description is not None:
            self._values["service_description"] = service_description
        if service_resource_type is not None:
            self._values["service_resource_type"] = service_resource_type
        if user is not None:
            self._values["user"] = user
        if zone_affinity_enabled is not None:
            self._values["zone_affinity_enabled"] = zone_affinity_enabled

    @builtins.property
    def auto_accept_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.

        Valid values:
        true: automatically accepts endpoint connection requests.
        false: does not automatically accept endpoint connection requests.
        '''
        result = self._values.get("auto_accept_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connect_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property connectBandwidth: The default maximum bandwidth of the endpoint connection.

        Valid values: 100 to 1024. Unit: Mbit/s.
        '''
        result = self._values.get("connect_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payer: The payer of the endpoint service.

        Valid values:
        Endpoint: the service consumer.
        EndpointService: the service provider.
        '''
        result = self._values.get("payer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]]:
        '''Property resource:.'''
        result = self._values.get("resource")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]], result)

    @builtins.property
    def service_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceDescription: The description for the endpoint service.'''
        result = self._values.get("service_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_resource_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceResourceType: Service resource type.'''
        result = self._values.get("service_resource_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property user: Account IDs to the whitelist of an endpoint service.'''
        result = self._values.get("user")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def zone_affinity_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.

        true: yes.
        false (default): no
        '''
        result = self._values.get("zone_affinity_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcEndpointServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosVpcEndpoint",
    "RosVpcEndpointProps",
    "RosVpcEndpointService",
    "RosVpcEndpointServiceAttachment",
    "RosVpcEndpointServiceAttachmentProps",
    "RosVpcEndpointServiceProps",
    "VpcEndpoint",
    "VpcEndpointProps",
    "VpcEndpointService",
    "VpcEndpointServiceAttachment",
    "VpcEndpointServiceAttachmentProps",
    "VpcEndpointServiceProps",
]

publication.publish()
