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
    jsii_type="@alicloud/ros-cdk-alb.datasource.LoadBalancers",
):
    '''A ROS resource type:  ``DATASOURCE::ALB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["LoadBalancersProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ALB::LoadBalancers``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52747b6be70e8c718be7f4f0884b503a6a9f1c58b00c97cbb1050e620b78723c)
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
    jsii_type="@alicloud/ros-cdk-alb.datasource.LoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "load_balancer_bussiness_status": "loadBalancerBussinessStatus",
        "load_balancer_ids": "loadBalancerIds",
        "load_balancer_names": "loadBalancerNames",
        "load_balancer_status": "loadBalancerStatus",
        "pay_type": "payType",
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
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancers.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ALB::LoadBalancers``.

        :param address_type: Property addressType: The address type of the load balancing instance.
        :param load_balancer_bussiness_status: Property loadBalancerBussinessStatus: Service status of application load balancing.
        :param load_balancer_ids: Property loadBalancerIds: IDs of the load balancer instance.
        :param load_balancer_names: Property loadBalancerNames: Names of the load balancing instance.
        :param load_balancer_status: Property loadBalancerStatus: The status of SLB.
        :param pay_type: Property payType: Load balancing instance payment type.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags of Alb.
        :param vpc_ids: Property vpcIds: VPC IDs.
        :param zone_id: Property zoneId: ID of the ready-to-use zone of the load balancing instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cbaf914d09ed2ffb8f213e787b6d0485cc24be350cb6bf091036d5ad546b4de)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument load_balancer_bussiness_status", value=load_balancer_bussiness_status, expected_type=type_hints["load_balancer_bussiness_status"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument load_balancer_names", value=load_balancer_names, expected_type=type_hints["load_balancer_names"])
            check_type(argname="argument load_balancer_status", value=load_balancer_status, expected_type=type_hints["load_balancer_status"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_type is not None:
            self._values["address_type"] = address_type
        if load_balancer_bussiness_status is not None:
            self._values["load_balancer_bussiness_status"] = load_balancer_bussiness_status
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if load_balancer_names is not None:
            self._values["load_balancer_names"] = load_balancer_names
        if load_balancer_status is not None:
            self._values["load_balancer_status"] = load_balancer_status
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: The address type of the load balancing instance.'''
        result = self._values.get("address_type")
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
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Load balancing instance payment type.'''
        result = self._values.get("pay_type")
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
        '''Property tags: Tags of Alb.'''
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
    jsii_type="@alicloud/ros-cdk-alb.datasource.RosLoadBalancers",
):
    '''A ROS template type:  ``DATASOURCE::ALB::LoadBalancers``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancersProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ALB::LoadBalancers``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbdb942cee10b45d32e2c23af3dcac909a456800d077639285e20c1ae6cd5e5f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3e11370677450121641becdf5cd758469255426d1ae462412d35b37ac49a020a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fe70ea322c68c553b1a8d123a1eceb31345ad5f897adc396e18bed0b725d7bac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__1b6b74f57a07da5c84716abe1407fa9f1f7e685813a956833b216d26a1385c0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__27d52eddf62b272b57a119129fc8421861b6cc48c7fb3df4859c6dd423faf352)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7c8cf8ba37614cd0921d274cd17e7d655d4c9b3e342c4e30fc852fb5b09c8c2a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__40cad7c0f045d7c6cca635fde016d1001a523b184b8e1b6e8de4f4a8cd2ff620)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ff10fa09b406f0c742e9ea805ac820b764edbbf0c84ae7a94b6d07dd4f73645a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerStatus", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Load balancing instance payment type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2688cc167d072148495023e06f0669a93d65e54141fc5d22dd3eff35d2e93857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__20ecef1e159141a7607e1d5dc6ef2a8141b8e44e0962e8aafee50d40b16faefd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]]:
        '''
        :Property: tags: Tags of Alb.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancers.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c03a02b877d152d2c42abe4899ea23a3d2e349cd74ea2a898fe73d4d9bb8d79)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c5a9c357836329c9b88869f82770b7fe9348d563adf8b68e660bbb083f962079)
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
            type_hints = typing.get_type_hints(_typecheckingstub__13cff2f3d3944a739dde314555760b529ec2c2e18dce26bb026580497fb3a565)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-alb.datasource.RosLoadBalancers.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__8065a218af56b6bd52383a34b4aaf65a78876dc3b7f9e1b60a2cd39937789858)
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
    jsii_type="@alicloud/ros-cdk-alb.datasource.RosLoadBalancersProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_type": "addressType",
        "load_balancer_bussiness_status": "loadBalancerBussinessStatus",
        "load_balancer_ids": "loadBalancerIds",
        "load_balancer_names": "loadBalancerNames",
        "load_balancer_status": "loadBalancerStatus",
        "pay_type": "payType",
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
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ALB::LoadBalancers``.

        :param address_type: 
        :param load_balancer_bussiness_status: 
        :param load_balancer_ids: 
        :param load_balancer_names: 
        :param load_balancer_status: 
        :param pay_type: 
        :param resource_group_id: 
        :param tags: 
        :param vpc_ids: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5af95ef1331f5a2ed849e25cc041bfd2a058f595cabf378936e441e82117011)
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument load_balancer_bussiness_status", value=load_balancer_bussiness_status, expected_type=type_hints["load_balancer_bussiness_status"])
            check_type(argname="argument load_balancer_ids", value=load_balancer_ids, expected_type=type_hints["load_balancer_ids"])
            check_type(argname="argument load_balancer_names", value=load_balancer_names, expected_type=type_hints["load_balancer_names"])
            check_type(argname="argument load_balancer_status", value=load_balancer_status, expected_type=type_hints["load_balancer_status"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_ids", value=vpc_ids, expected_type=type_hints["vpc_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_type is not None:
            self._values["address_type"] = address_type
        if load_balancer_bussiness_status is not None:
            self._values["load_balancer_bussiness_status"] = load_balancer_bussiness_status
        if load_balancer_ids is not None:
            self._values["load_balancer_ids"] = load_balancer_ids
        if load_balancer_names is not None:
            self._values["load_balancer_names"] = load_balancer_names
        if load_balancer_status is not None:
            self._values["load_balancer_status"] = load_balancer_status
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_ids is not None:
            self._values["vpc_ids"] = vpc_ids
        if zone_id is not None:
            self._values["zone_id"] = zone_id

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
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Load balancing instance payment type
        '''
        result = self._values.get("pay_type")
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
        :Property: tags: Tags of Alb.
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

def _typecheckingstub__52747b6be70e8c718be7f4f0884b503a6a9f1c58b00c97cbb1050e620b78723c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[LoadBalancersProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cbaf914d09ed2ffb8f213e787b6d0485cc24be350cb6bf091036d5ad546b4de(
    *,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbdb942cee10b45d32e2c23af3dcac909a456800d077639285e20c1ae6cd5e5f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancersProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e11370677450121641becdf5cd758469255426d1ae462412d35b37ac49a020a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe70ea322c68c553b1a8d123a1eceb31345ad5f897adc396e18bed0b725d7bac(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b6b74f57a07da5c84716abe1407fa9f1f7e685813a956833b216d26a1385c0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27d52eddf62b272b57a119129fc8421861b6cc48c7fb3df4859c6dd423faf352(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c8cf8ba37614cd0921d274cd17e7d655d4c9b3e342c4e30fc852fb5b09c8c2a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40cad7c0f045d7c6cca635fde016d1001a523b184b8e1b6e8de4f4a8cd2ff620(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff10fa09b406f0c742e9ea805ac820b764edbbf0c84ae7a94b6d07dd4f73645a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2688cc167d072148495023e06f0669a93d65e54141fc5d22dd3eff35d2e93857(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20ecef1e159141a7607e1d5dc6ef2a8141b8e44e0962e8aafee50d40b16faefd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c03a02b877d152d2c42abe4899ea23a3d2e349cd74ea2a898fe73d4d9bb8d79(
    value: typing.Optional[typing.List[RosLoadBalancers.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5a9c357836329c9b88869f82770b7fe9348d563adf8b68e660bbb083f962079(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13cff2f3d3944a739dde314555760b529ec2c2e18dce26bb026580497fb3a565(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8065a218af56b6bd52383a34b4aaf65a78876dc3b7f9e1b60a2cd39937789858(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5af95ef1331f5a2ed849e25cc041bfd2a058f595cabf378936e441e82117011(
    *,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_bussiness_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    load_balancer_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancers.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
