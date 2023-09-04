import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class LoadBalancers(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.datasource.LoadBalancers",
):
    '''A ROS resource type:  ``DATASOURCE::NLB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["LoadBalancersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::NLB::LoadBalancers``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1617752d87790f3cc1bdc882b55767aad0c3f18344f0b659caacecb255595d3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerIds: The list of load balancer IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancers: The list of load balancers.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancers"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-nlb.datasource.LoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "ipv6_address_type": "ipv6AddressType",
        "load_balancer_bussiness_status": "loadBalancerBussinessStatus",
        "load_balancer_ids": "loadBalancerIds",
        "load_balancer_names": "loadBalancerNames",
        "load_balancer_status": "loadBalancerStatus",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_ids": "vpcIds",
        "zone_id": "zoneId",
    },
)
class LoadBalancersProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancers.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NLB::LoadBalancers``.

        :param address_ip_version: Property addressIpVersion: IP version.
        :param address_type: Property addressType: The address type of the load balancing instance.
        :param ipv6_address_type: Property ipv6AddressType: IPv6 address type of network load balancing.
        :param load_balancer_bussiness_status: Property loadBalancerBussinessStatus: Service status of application load balancing.
        :param load_balancer_ids: Property loadBalancerIds: IDs of the load balancer instance.
        :param load_balancer_names: Property loadBalancerNames: Names of the load balancing instance.
        :param load_balancer_status: Property loadBalancerStatus: The status of SLB.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags of Nlb.
        :param vpc_ids: Property vpcIds: VPC IDs.
        :param zone_id: Property zoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d3946ac97b20cb78f028b9afa74c4e835d66c0af9e0de42ee645fda5fd739a0)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument ipv6_address_type", value=ipv6_address_type, expected_type=type_hints["ipv6_address_type"])
            check_type(argname="argument load_balancer_bussiness_status", value=load_balancer_bussiness_status, expected_type=type_hints["load_balancer_bussiness_status"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument load_balancer_names", value=load_balancer_names, expected_type=type_hints["load_balancer_names"])
            check_type(argname="argument load_balancer_status", value=load_balancer_status, expected_type=type_hints["load_balancer_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if ipv6_address_type is not None:
            self._values["ipv6_address_type"] = ipv6_address_type
        if load_balancer_bussiness_status is not None:
            self._values["load_balancer_bussiness_status"] = load_balancer_bussiness_status
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if load_balancer_names is not None:
            self._values["load_balancer_names"] = load_balancer_names
        if load_balancer_status is not None:
            self._values["load_balancer_status"] = load_balancer_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: IP version.'''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: The address type of the load balancing instance.'''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipv6AddressType: IPv6 address type of network load balancing.'''
        result = self._values.get("ipv6_address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_bussiness_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerBussinessStatus: Service status of application load balancing.'''
        result = self._values.get("load_balancer_bussiness_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property loadBalancerIds: IDs of the load balancer instance.'''
        result = self._values.get("load_balancer_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def load_balancer_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property loadBalancerNames: Names of the load balancing instance.'''
        result = self._values.get("load_balancer_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def load_balancer_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerStatus: The status of SLB.'''
        result = self._values.get("load_balancer_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]]:
        '''Property tags: Tags of Nlb.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]], result)

    @builtins.property
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property vpcIds: VPC IDs.'''
        result = self._values.get("vpc_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: ID of the ready-to-use zone of the load balancing instance.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancers(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers",
):
    '''A ROS template type:  ``DATASOURCE::NLB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::NLB::LoadBalancers``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38d0d9021af609777acf468508ff3affcec876b591bcfec99e8a59d93794fe20)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d91e93938900753a5762dd21b692f7bad2e3e058300de6920f86304e7689b7a6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerIds")
    def attr_load_balancer_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerIds: The list of load balancer IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerIds"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancers")
    def attr_load_balancers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancers: The list of load balancers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancers"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__06d6378e123c93dea85fdd26adb73a6bc41489ffecbcc08c92af029db20e939d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be804aac2f877588bcba36942a4ebc814d232f52724f6befda5850e1ea95cebc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The address type of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ca48dc8ff9bd6c9d8eddf834d9270beddf81283f346e5bfbc20dbd87c655046)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="ipv6AddressType")
    def ipv6_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressType: IPv6 address type of network load balancing
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipv6AddressType"))

    @ipv6_address_type.setter
    def ipv6_address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fd15593043505bf9fed0cb314c18db9483447ec491af76d3afcf3639b1ee552)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipv6AddressType", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerBussinessStatus")
    def load_balancer_bussiness_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerBussinessStatus: Service status of application load balancing
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerBussinessStatus"))

    @load_balancer_bussiness_status.setter
    def load_balancer_bussiness_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64782c163c85b397c13f741246a858ab05edea3e38f01e481a44f39a2d0faa06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerBussinessStatus", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerIds")
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: loadBalancerIds: IDs of the load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "loadBalancerIds"))

    @load_balancer_ids.setter
    def load_balancer_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8a44d0ec22117224b7207b6a6d949e992e27c75a28264773245a18db950f8c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerIds", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerNames")
    def load_balancer_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: loadBalancerNames: Names of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "loadBalancerNames"))

    @load_balancer_names.setter
    def load_balancer_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__019cb925d76435666e802229e4463ad35d307fbc878e7d460bedf13f83425143)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerNames", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerStatus")
    def load_balancer_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerStatus: The status of SLB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerStatus"))

    @load_balancer_status.setter
    def load_balancer_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ca6896e7fd6fc79b4f98e71e11d6932c0653478907f52bf868016f941de05bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerStatus", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94e1ce30e8849cd53856d4cf6d75f7d74fd39d31ff395c78a08a3db8f01caa27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]]:
        '''
        :Property: tags: Tags of Nlb.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__323440b3ada6f1ccb1ac15119f325544814fd31b6bf981bd87a648a9483053b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcIds")
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: vpcIds: VPC IDs
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "vpcIds"))

    @vpc_ids.setter
    def vpc_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6da5130352ed23bf171645fd562087ce1d636cbb27c2ef38020eb883ed92cec1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcIds", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3faa660f39067a25834a2cdce5df7ee28d32a16c45c091c5aea52deeb9b606e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-nlb.datasource.RosLoadBalancers.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__981a81d56c0a314cbbe91f6b70053c28c4e7f463473dccd8d5462b295977a112)
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
    jsii_type="@alicloud/ros-cdk-nlb.datasource.RosLoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "ipv6_address_type": "ipv6AddressType",
        "load_balancer_bussiness_status": "loadBalancerBussinessStatus",
        "load_balancer_ids": "loadBalancerIds",
        "load_balancer_names": "loadBalancerNames",
        "load_balancer_status": "loadBalancerStatus",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "vpc_ids": "vpcIds",
        "zone_id": "zoneId",
    },
)
class RosLoadBalancersProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ipv6_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::NLB::LoadBalancers``.

        :param address_ip_version: 
        :param address_type: 
        :param ipv6_address_type: 
        :param load_balancer_bussiness_status: 
        :param load_balancer_ids: 
        :param load_balancer_names: 
        :param load_balancer_status: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_ids: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b11842fc5ab95368f4a0f49d0e8316f8ca6f0e45658950b2b8fb66e496f4380f)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument ipv6_address_type", value=ipv6_address_type, expected_type=type_hints["ipv6_address_type"])
            check_type(argname="argument load_balancer_bussiness_status", value=load_balancer_bussiness_status, expected_type=type_hints["load_balancer_bussiness_status"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument load_balancer_names", value=load_balancer_names, expected_type=type_hints["load_balancer_names"])
            check_type(argname="argument load_balancer_status", value=load_balancer_status, expected_type=type_hints["load_balancer_status"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if ipv6_address_type is not None:
            self._values["ipv6_address_type"] = ipv6_address_type
        if load_balancer_bussiness_status is not None:
            self._values["load_balancer_bussiness_status"] = load_balancer_bussiness_status
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if load_balancer_names is not None:
            self._values["load_balancer_names"] = load_balancer_names
        if load_balancer_status is not None:
            self._values["load_balancer_status"] = load_balancer_status
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: The address type of the load balancing instance.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ipv6_address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipv6AddressType: IPv6 address type of network load balancing
        '''
        result = self._values.get("ipv6_address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_bussiness_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerBussinessStatus: Service status of application load balancing
        '''
        result = self._values.get("load_balancer_bussiness_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: loadBalancerIds: IDs of the load balancer instance.
        '''
        result = self._values.get("load_balancer_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def load_balancer_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: loadBalancerNames: Names of the load balancing instance.
        '''
        result = self._values.get("load_balancer_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def load_balancer_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerStatus: The status of SLB.
        '''
        result = self._values.get("load_balancer_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosLoadBalancers.TagsProperty]]:
        '''
        :Property: tags: Tags of Nlb.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosLoadBalancers.TagsProperty]], result)

    @builtins.property
    def vpc_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: vpcIds: VPC IDs
        '''
        result = self._values.get("vpc_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancersProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "LoadBalancers",
    "LoadBalancersProps",
    "RosLoadBalancers",
    "RosLoadBalancersProps",
]

publication.publish()

def _typecheckingstub__a1617752d87790f3cc1bdc882b55767aad0c3f18344f0b659caacecb255595d3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[LoadBalancersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d3946ac97b20cb78f028b9afa74c4e835d66c0af9e0de42ee645fda5fd739a0(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38d0d9021af609777acf468508ff3affcec876b591bcfec99e8a59d93794fe20(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d91e93938900753a5762dd21b692f7bad2e3e058300de6920f86304e7689b7a6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06d6378e123c93dea85fdd26adb73a6bc41489ffecbcc08c92af029db20e939d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be804aac2f877588bcba36942a4ebc814d232f52724f6befda5850e1ea95cebc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ca48dc8ff9bd6c9d8eddf834d9270beddf81283f346e5bfbc20dbd87c655046(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fd15593043505bf9fed0cb314c18db9483447ec491af76d3afcf3639b1ee552(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64782c163c85b397c13f741246a858ab05edea3e38f01e481a44f39a2d0faa06(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a44d0ec22117224b7207b6a6d949e992e27c75a28264773245a18db950f8c0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__019cb925d76435666e802229e4463ad35d307fbc878e7d460bedf13f83425143(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ca6896e7fd6fc79b4f98e71e11d6932c0653478907f52bf868016f941de05bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94e1ce30e8849cd53856d4cf6d75f7d74fd39d31ff395c78a08a3db8f01caa27(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__323440b3ada6f1ccb1ac15119f325544814fd31b6bf981bd87a648a9483053b3(
    value: typing.Optional[typing.List[RosLoadBalancers.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6da5130352ed23bf171645fd562087ce1d636cbb27c2ef38020eb883ed92cec1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3faa660f39067a25834a2cdce5df7ee28d32a16c45c091c5aea52deeb9b606e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__981a81d56c0a314cbbe91f6b70053c28c4e7f463473dccd8d5462b295977a112(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b11842fc5ab95368f4a0f49d0e8316f8ca6f0e45658950b2b8fb66e496f4380f(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ipv6_address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
