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


class RosRules(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.RosRules",
):
    '''A ROS template type:  ``DATASOURCE::PVTZ::Rules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRulesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::PVTZ::Rules``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eb232575e1a1535b7b430a72734ddb69f0608c724c13541b4f12a4a7ea25ffa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ebb9300fb4c75c1f7c7b5e609e328092c8e962d02afbc6c0799b8936547f3ab6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleIds: The list of rule IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rules: The list of rules.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__16ddc5983a241a853d856720bd25dee2b273f6bdd33c96be62e5264d781919bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointId")
    def endpoint_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointId: EndpointId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endpointId"))

    @endpoint_id.setter
    def endpoint_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f65e4ae79da24d0ad0a66f480b6ccc33576c419bb7ff016d7184820484d6eb02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.RosRulesProps",
    jsii_struct_bases=[],
    name_mapping={"endpoint_id": "endpointId"},
)
class RosRulesProps:
    def __init__(
        self,
        *,
        endpoint_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PVTZ::Rules``.

        :param endpoint_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2cf582c5a025c58d8fbde718ae5a43b28bf167925e2331f05a70b20c4d55ae0)
            check_type(argname="argument endpoint_id", value=endpoint_id, expected_type=type_hints["endpoint_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if endpoint_id is not None:
            self._values["endpoint_id"] = endpoint_id

    @builtins.property
    def endpoint_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endpointId: EndpointId
        '''
        result = self._values.get("endpoint_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZones(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.RosZones",
):
    '''A ROS template type:  ``DATASOURCE::PVTZ::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosZonesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::PVTZ::Zones``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__187ac7c90086012f201092d5315dc76fd4536bd65d684daa319dff8780623151)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3ad3666d76e9e4acba756629933b989882e74b58c111390506221c803fe85eb7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIds: The list of zone IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Zones: The list of zones.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ad9bb8a3eb9d1fa8ff6437acc09600d1583f4cb369c25794a08e64ef03c5ed52)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: ResourceGroupId
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fede0e4732f016a5ea27fcc1d264604fd4ccbe339fdad020e53ceadd207e0263)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.RosZonesProps",
    jsii_struct_bases=[],
    name_mapping={"resource_group_id": "resourceGroupId"},
)
class RosZonesProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PVTZ::Zones``.

        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cdc77d31e64e80f26b1f30064266e84feaa18b4ea09ed634acbccca4c6b24644)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: ResourceGroupId
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rules(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.Rules",
):
    '''A ROS resource type:  ``DATASOURCE::PVTZ::Rules``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["RulesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::PVTZ::Rules``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__794d41ba4f315f705bd16f2c2193b0f354139c0359bf2eef8097172d5f1095ad)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRuleIds")
    def attr_rule_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RuleIds: The list of rule IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleIds"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Rules: The list of rules.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.RulesProps",
    jsii_struct_bases=[],
    name_mapping={"endpoint_id": "endpointId"},
)
class RulesProps:
    def __init__(
        self,
        *,
        endpoint_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PVTZ::Rules``.

        :param endpoint_id: Property endpointId: EndpointId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4681dcc30d21eb15fdc6ccd884ed9cca9b015eee5a3abdd5f61ae4f97f946ad5)
            check_type(argname="argument endpoint_id", value=endpoint_id, expected_type=type_hints["endpoint_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if endpoint_id is not None:
            self._values["endpoint_id"] = endpoint_id

    @builtins.property
    def endpoint_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endpointId: EndpointId.'''
        result = self._values.get("endpoint_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RulesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zones(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.Zones",
):
    '''A ROS resource type:  ``DATASOURCE::PVTZ::Zones``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ZonesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::PVTZ::Zones``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03092c6a592ad0747bbf40c71f0fbebb60e567faeb257040abf259e54b070f0d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrZoneIds")
    def attr_zone_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneIds: The list of zone IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIds"))

    @builtins.property
    @jsii.member(jsii_name="attrZones")
    def attr_zones(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Zones: The list of zones.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZones"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.datasource.ZonesProps",
    jsii_struct_bases=[],
    name_mapping={"resource_group_id": "resourceGroupId"},
)
class ZonesProps:
    def __init__(
        self,
        *,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::PVTZ::Zones``.

        :param resource_group_id: Property resourceGroupId: ResourceGroupId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a71ef3a88d24fb5ca41d6cd3ae5d6128829dc84b231e1fe328474675fa153042)
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: ResourceGroupId.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZonesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosRules",
    "RosRulesProps",
    "RosZones",
    "RosZonesProps",
    "Rules",
    "RulesProps",
    "Zones",
    "ZonesProps",
]

publication.publish()

def _typecheckingstub__2eb232575e1a1535b7b430a72734ddb69f0608c724c13541b4f12a4a7ea25ffa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRulesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebb9300fb4c75c1f7c7b5e609e328092c8e962d02afbc6c0799b8936547f3ab6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16ddc5983a241a853d856720bd25dee2b273f6bdd33c96be62e5264d781919bd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f65e4ae79da24d0ad0a66f480b6ccc33576c419bb7ff016d7184820484d6eb02(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2cf582c5a025c58d8fbde718ae5a43b28bf167925e2331f05a70b20c4d55ae0(
    *,
    endpoint_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__187ac7c90086012f201092d5315dc76fd4536bd65d684daa319dff8780623151(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosZonesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ad3666d76e9e4acba756629933b989882e74b58c111390506221c803fe85eb7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad9bb8a3eb9d1fa8ff6437acc09600d1583f4cb369c25794a08e64ef03c5ed52(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fede0e4732f016a5ea27fcc1d264604fd4ccbe339fdad020e53ceadd207e0263(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cdc77d31e64e80f26b1f30064266e84feaa18b4ea09ed634acbccca4c6b24644(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__794d41ba4f315f705bd16f2c2193b0f354139c0359bf2eef8097172d5f1095ad(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[RulesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4681dcc30d21eb15fdc6ccd884ed9cca9b015eee5a3abdd5f61ae4f97f946ad5(
    *,
    endpoint_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03092c6a592ad0747bbf40c71f0fbebb60e567faeb257040abf259e54b070f0d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ZonesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a71ef3a88d24fb5ca41d6cd3ae5d6128829dc84b231e1fe328474675fa153042(
    *,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
