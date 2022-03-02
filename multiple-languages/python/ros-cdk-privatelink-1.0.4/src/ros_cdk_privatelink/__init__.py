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
        props: "RosVpcEndpointProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointDomain")
    def attr_endpoint_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointDomain: The domain name of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointId: The ID of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointName")
    def attr_endpoint_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndpointName: The name of the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The ID of endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The name of endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The vpc ID of endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneDomains")
    def attr_zone_domains(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneDomains: The zone domains.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneDomains"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "securityGroupId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "endpointDescription", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "endpointName", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "serviceId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "zone", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class ZoneProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchId: The switch of the endpoint network interface in the given zone.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: zoneId: The zone of the associated endpoint service.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        "service_id": "serviceId",
        "service_name": "serviceName",
        "zone": "zone",
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
        service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param security_group_id: 
        :param vpc_id: 
        :param endpoint_description: 
        :param endpoint_name: 
        :param service_id: 
        :param service_name: 
        :param zone: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
        }
        if endpoint_description is not None:
            self._values["endpoint_description"] = endpoint_description
        if endpoint_name is not None:
            self._values["endpoint_name"] = endpoint_name
        if service_id is not None:
            self._values["service_id"] = service_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if zone is not None:
            self._values["zone"] = zone

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
        props: "RosVpcEndpointServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxBandwidth")
    def attr_max_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MaxBandwidth: The maximum bandwidth of the endpoint connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMinBandwidth")
    def attr_min_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MinBandwidth: The minimum bandwidth of the endpoint connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMinBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceDescription")
    def attr_service_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceDescription: The description of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceDomain")
    def attr_service_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceDomain: The domain name of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The ID of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The name of the endpoint service.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "autoAcceptEnabled", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "connectBandwidth", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "payer", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "resource", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "serviceDescription", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "user", value)

    @builtins.property # type: ignore[misc]
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
            :Property:

            resourceType: The type of service resource. Set the value to slb (SLB instances that support PrivateLink and are deployed in a VPC).
            Note Only Server Load Balancer (SLB) instances that support PrivateLink can serve as service
            resources for endpoint services.
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
        props: "RosVpcEndpointServiceAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PrivateLink::VpcEndpointServiceAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceId: The resource id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: The resource type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The endpoint service that is associated with the endpoint.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "resourceId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "resourceType", value)

    @builtins.property # type: ignore[misc]
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
        resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]] = None,
        service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param auto_accept_enabled: 
        :param connect_bandwidth: 
        :param payer: 
        :param resource: 
        :param service_description: 
        :param user: 
        :param zone_affinity_enabled: 
        '''
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
        props: "VpcEndpointProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointDomain")
    def attr_endpoint_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointDomain: The domain name of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointId: The ID of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpointName")
    def attr_endpoint_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndpointName: The name of the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpointName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The ID of endpoint service that is associated with the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The name of endpoint service that is associated with the endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The vpc ID of endpoint.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
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
        "service_id": "serviceId",
        "service_name": "serviceName",
        "zone": "zone",
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
        service_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpoint.ZoneProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpoint``.

        :param security_group_id: Property securityGroupId: The security group associated with the endpoint network interface. The security group can control the data communication from the VPC to the endpoint network interface.
        :param vpc_id: Property vpcId: The VPC to which the endpoint belongs.
        :param endpoint_description: Property endpointDescription: The description of the endpoint. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        :param endpoint_name: Property endpointName: The name of the endpoint. The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). The name must start with a letter.
        :param service_id: Property serviceId: The endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        :param service_name: Property serviceName: The name of the endpoint service that is associated with the endpoint. One of ServiceId and ServiceName is required.
        :param zone: Property zone:.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
        }
        if endpoint_description is not None:
            self._values["endpoint_description"] = endpoint_description
        if endpoint_name is not None:
            self._values["endpoint_name"] = endpoint_name
        if service_id is not None:
            self._values["service_id"] = service_id
        if service_name is not None:
            self._values["service_name"] = service_name
        if zone is not None:
            self._values["zone"] = zone

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
        props: typing.Optional["VpcEndpointServiceProps"] = None,
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMaxBandwidth")
    def attr_max_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute MaxBandwidth: The maximum bandwidth of the endpoint connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMaxBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMinBandwidth")
    def attr_min_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute MinBandwidth: The minimum bandwidth of the endpoint connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMinBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceDescription")
    def attr_service_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceDescription: The description of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceDomain")
    def attr_service_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceDomain: The domain name of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The ID of the endpoint service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
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
        props: "VpcEndpointServiceAttachmentProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceId: The resource id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: The resource type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
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
        resource: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVpcEndpointService.ResourceProperty]]]] = None,
        service_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        zone_affinity_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PrivateLink::VpcEndpointService``.

        :param auto_accept_enabled: Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests. Valid values: true: automatically accepts endpoint connection requests. false: does not automatically accept endpoint connection requests.
        :param connect_bandwidth: Property connectBandwidth: The default maximum bandwidth of the endpoint connection. Valid values: 100 to 1024. Unit: Mbit/s.
        :param payer: Property payer: The payer of the endpoint service. Valid values: Endpoint: the service consumer. EndpointService: the service provider.
        :param resource: Property resource:.
        :param service_description: Property serviceDescription: The description for the endpoint service.
        :param user: Property user: Account IDs to the whitelist of an endpoint service.
        :param zone_affinity_enabled: Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone. true: yes. false (default): no
        '''
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
