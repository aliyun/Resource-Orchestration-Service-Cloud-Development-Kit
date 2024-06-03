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


class RosScalingConfigurations(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingConfigurations",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingConfigurations``, which is used to query the details of scaling configurations.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingConfigurations`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingConfigurationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30442118c43da20c8f60be524e8c6d012cf474cd16d80089d2e13d265197ff16)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3e304cad4b4abd21f5abebd163ea97d4e8f98ec65a7c047812c2db4818ce5dae)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurationIds: The list of scaling configuration IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingConfigurations: The list of scaling configurations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurations"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0a7df10b084e9f06fbfe39a0f253661b8ca7788cceab89f9228c5ca87cd94fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationIds")
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingConfigurationIds"))

    @scaling_configuration_ids.setter
    def scaling_configuration_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5a3bca47e68f75c02704a552e936004be213ed7b9c9bb57c66cbb5f34bfbf65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingConfigurationNames")
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingConfigurationNames"))

    @scaling_configuration_names.setter
    def scaling_configuration_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ebdc6209cb2175634d3053fcd3ccf149c141d1b6ebc056c6556cbcd08c1461)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingConfigurationNames", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupId")
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scalingGroupId"))

    @scaling_group_id.setter
    def scaling_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ddb8c2c880b0195b06c6cbfda754a713ea6f61a4556be05cb0dd39b82e87d75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_configuration_ids": "scalingConfigurationIds",
        "scaling_configuration_names": "scalingConfigurationNames",
        "scaling_group_id": "scalingGroupId",
    },
)
class RosScalingConfigurationsProps:
    def __init__(
        self,
        *,
        scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingConfigurations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations

        :param scaling_configuration_ids: 
        :param scaling_configuration_names: 
        :param scaling_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a097b23d93fbfee9b34991a7b50886cc3335ad5d96370486950d45e61294c06)
            check_type(argname="argument scaling_configuration_ids", value=scaling_configuration_ids, expected_type=type_hints["scaling_configuration_ids"])
            check_type(argname="argument scaling_configuration_names", value=scaling_configuration_names, expected_type=type_hints["scaling_configuration_names"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if scaling_configuration_ids is not None:
            self._values["scaling_configuration_ids"] = scaling_configuration_ids
        if scaling_configuration_names is not None:
            self._values["scaling_configuration_names"] = scaling_configuration_names
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id

    @builtins.property
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        result = self._values.get("scaling_configuration_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_configuration_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosScalingGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::ESS::ScalingGroups``, which is used to query scaling groups.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ScalingGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosScalingGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eb0a2d8c9f304d6bb27ddaffd3cf94a1e0ad5166edd44c4ceb90ff7f9914c02)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b75ea6c902c777ed58ef11908c9f86fc94132f50a42412085f0a0910b0c34e79)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroupIds: The list of scaling group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ScalingGroups: The list of scaling groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fc8293008c3bd0fb46b4528e574736dff8e1b16b10ac39fb790545ab60d69c75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81965a2ce1ab806d915647865fa6a7e0090e34b0fa5d8624034a36201c13d2af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupIds")
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingGroupIds"))

    @scaling_group_ids.setter
    def scaling_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__696ad33dca0ca20cbbe7c4584de0b3fd2ee991de7212875d76740d370957a484)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="scalingGroupNames")
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "scalingGroupNames"))

    @scaling_group_names.setter
    def scaling_group_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b784c506dc1d3935578dcdd30cb88fa8839e6366fc76d1b630a2826411aacea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scalingGroupNames", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.RosScalingGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_type": "groupType",
        "scaling_group_ids": "scalingGroupIds",
        "scaling_group_names": "scalingGroupNames",
    },
)
class RosScalingGroupsProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosScalingGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups

        :param group_type: 
        :param scaling_group_ids: 
        :param scaling_group_names: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6304951bcd440b722b1b51ce1d39e0132ffcafd3d42be70c65d3ac830e49958)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument scaling_group_ids", value=scaling_group_ids, expected_type=type_hints["scaling_group_ids"])
            check_type(argname="argument scaling_group_names", value=scaling_group_names, expected_type=type_hints["scaling_group_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if scaling_group_ids is not None:
            self._values["scaling_group_ids"] = scaling_group_ids
        if scaling_group_names is not None:
            self._values["scaling_group_names"] = scaling_group_names

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupType: The type of instances that are managed by the scaling group. Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScalingGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingConfigurations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingConfigurations",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingConfigurations``, which is used to query the details of scaling configurations.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingConfigurations``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ScalingConfigurationsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ea03e374413b94b67d210ae82fdc443f0432b8485b89516983ecfc0896d534e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurationIds")
    def attr_scaling_configuration_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurationIds: The list of scaling configuration IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingConfigurations")
    def attr_scaling_configurations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingConfigurations: The list of scaling configurations.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingConfigurations"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a42ac094949b10a12f98d17145f55f02874e1ebaf01ba0762754d1dfe3811773)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7548503a95df9f65e11582fb6f90c0b312daa44ed5e6fffca10b838f6c7fb20d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ScalingConfigurationsProps":
        return typing.cast("ScalingConfigurationsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ScalingConfigurationsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb58c5ae06a9447962cdf03409bb25b0152493cca1d15caa58310a151b3b7f22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10b01b1af5f0832beff00b9602462c8de3b5f9f704edeca6ba3ceb88928c564a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "scaling_configuration_ids": "scalingConfigurationIds",
        "scaling_configuration_names": "scalingConfigurationNames",
        "scaling_group_id": "scalingGroupId",
    },
)
class ScalingConfigurationsProps:
    def __init__(
        self,
        *,
        scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingConfigurations``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations

        :param scaling_configuration_ids: Property scalingConfigurationIds: The ID of scaling configuration that you want to query. Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        :param scaling_configuration_names: Property scalingConfigurationNames: The name of scaling configuration that you want to query. Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        :param scaling_group_id: Property scalingGroupId: The ID of the scaling group. You can use the ID to query all scaling configurations in the scaling group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad4a16abfc5ed68792327bf166a78e3708aca4e54269765563c88160d9ac828c)
            check_type(argname="argument scaling_configuration_ids", value=scaling_configuration_ids, expected_type=type_hints["scaling_configuration_ids"])
            check_type(argname="argument scaling_configuration_names", value=scaling_configuration_names, expected_type=type_hints["scaling_configuration_names"])
            check_type(argname="argument scaling_group_id", value=scaling_group_id, expected_type=type_hints["scaling_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if scaling_configuration_ids is not None:
            self._values["scaling_configuration_ids"] = scaling_configuration_ids
        if scaling_configuration_names is not None:
            self._values["scaling_configuration_names"] = scaling_configuration_names
        if scaling_group_id is not None:
            self._values["scaling_group_id"] = scaling_group_id

    @builtins.property
    def scaling_configuration_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingConfigurationIds: The ID of scaling configuration that you want to query.

        Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
        '''
        result = self._values.get("scaling_configuration_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_configuration_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingConfigurationNames: The name of scaling configuration that you want to query.

        Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_configuration_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scalingGroupId: The ID of the scaling group.

        You can use the ID to query all scaling configurations in the scaling group.
        '''
        result = self._values.get("scaling_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ScalingGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::ESS::ScalingGroups``, which is used to query scaling groups.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosScalingGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ScalingGroupsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__400e0a988a72bb13a5174c5bbfccae9dada9ddc1e819ac197318d69151118626)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroupIds")
    def attr_scaling_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroupIds: The list of scaling group IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrScalingGroups")
    def attr_scaling_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ScalingGroups: The list of scaling groups.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrScalingGroups"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__388dd6affebe1f2e86f8332c2acf9e5e47b58f447afbdecf56ec6cc8871961fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12a9605217a2df7ed8c347b39bb501a7fb9637d3b32e421f0473876317a51d5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ScalingGroupsProps":
        return typing.cast("ScalingGroupsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ScalingGroupsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8df3fc0c3d2135f8dc5fdf6aa02d7d33f1ea0f046ca17ffcca26a279d99cde84)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e557f02e2a627699dbcbd556b6a14306048db48cc5f5d0d6fadc191d4d1f5f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ess.datasource.ScalingGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_type": "groupType",
        "scaling_group_ids": "scalingGroupIds",
        "scaling_group_names": "scalingGroupNames",
    },
)
class ScalingGroupsProps:
    def __init__(
        self,
        *,
        group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ScalingGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalinggroups

        :param group_type: Property groupType: The type of instances that are managed by the scaling group. Valid values: ECS: the Elastic Compute Service (ECS) instances ECI: the elastic container instances Default value: ECS.
        :param scaling_group_ids: Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.
        :param scaling_group_names: Property scalingGroupNames: The name of scaling group that you want to query. Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fb5a30bbf5e6ee3a770175f7cf2e8a334e6ba29edf585151e42c2af185bd1b6)
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument scaling_group_ids", value=scaling_group_ids, expected_type=type_hints["scaling_group_ids"])
            check_type(argname="argument scaling_group_names", value=scaling_group_names, expected_type=type_hints["scaling_group_names"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if group_type is not None:
            self._values["group_type"] = group_type
        if scaling_group_ids is not None:
            self._values["scaling_group_ids"] = scaling_group_ids
        if scaling_group_names is not None:
            self._values["scaling_group_names"] = scaling_group_names

    @builtins.property
    def group_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupType: The type of instances that are managed by the scaling group.

        Valid values:
        ECS: the Elastic Compute Service (ECS) instances
        ECI: the elastic container instances
        Default value: ECS.
        '''
        result = self._values.get("group_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scaling_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingGroupIds: The ID of scaling group that you want to query.Valid values: 1 to 20. The IDs of inactive scaling groups are not displayed in the query results, and no error is reported.'''
        result = self._values.get("scaling_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def scaling_group_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property scalingGroupNames: The name of scaling group that you want to query.

        Valid values: 1 to 20. The names of inactive scaling groups are not displayed in the query results, and no error is reported.
        '''
        result = self._values.get("scaling_group_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScalingGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosScalingConfigurations",
    "RosScalingConfigurationsProps",
    "RosScalingGroups",
    "RosScalingGroupsProps",
    "ScalingConfigurations",
    "ScalingConfigurationsProps",
    "ScalingGroups",
    "ScalingGroupsProps",
]

publication.publish()

def _typecheckingstub__30442118c43da20c8f60be524e8c6d012cf474cd16d80089d2e13d265197ff16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingConfigurationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e304cad4b4abd21f5abebd163ea97d4e8f98ec65a7c047812c2db4818ce5dae(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a7df10b084e9f06fbfe39a0f253661b8ca7788cceab89f9228c5ca87cd94fbb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5a3bca47e68f75c02704a552e936004be213ed7b9c9bb57c66cbb5f34bfbf65(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0ebdc6209cb2175634d3053fcd3ccf149c141d1b6ebc056c6556cbcd08c1461(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ddb8c2c880b0195b06c6cbfda754a713ea6f61a4556be05cb0dd39b82e87d75(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a097b23d93fbfee9b34991a7b50886cc3335ad5d96370486950d45e61294c06(
    *,
    scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eb0a2d8c9f304d6bb27ddaffd3cf94a1e0ad5166edd44c4ceb90ff7f9914c02(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosScalingGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b75ea6c902c777ed58ef11908c9f86fc94132f50a42412085f0a0910b0c34e79(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8293008c3bd0fb46b4528e574736dff8e1b16b10ac39fb790545ab60d69c75(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81965a2ce1ab806d915647865fa6a7e0090e34b0fa5d8624034a36201c13d2af(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__696ad33dca0ca20cbbe7c4584de0b3fd2ee991de7212875d76740d370957a484(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b784c506dc1d3935578dcdd30cb88fa8839e6366fc76d1b630a2826411aacea(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6304951bcd440b722b1b51ce1d39e0132ffcafd3d42be70c65d3ac830e49958(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea03e374413b94b67d210ae82fdc443f0432b8485b89516983ecfc0896d534e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ScalingConfigurationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a42ac094949b10a12f98d17145f55f02874e1ebaf01ba0762754d1dfe3811773(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7548503a95df9f65e11582fb6f90c0b312daa44ed5e6fffca10b838f6c7fb20d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb58c5ae06a9447962cdf03409bb25b0152493cca1d15caa58310a151b3b7f22(
    value: ScalingConfigurationsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10b01b1af5f0832beff00b9602462c8de3b5f9f704edeca6ba3ceb88928c564a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad4a16abfc5ed68792327bf166a78e3708aca4e54269765563c88160d9ac828c(
    *,
    scaling_configuration_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_configuration_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__400e0a988a72bb13a5174c5bbfccae9dada9ddc1e819ac197318d69151118626(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ScalingGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__388dd6affebe1f2e86f8332c2acf9e5e47b58f447afbdecf56ec6cc8871961fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12a9605217a2df7ed8c347b39bb501a7fb9637d3b32e421f0473876317a51d5e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8df3fc0c3d2135f8dc5fdf6aa02d7d33f1ea0f046ca17ffcca26a279d99cde84(
    value: ScalingGroupsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e557f02e2a627699dbcbd556b6a14306048db48cc5f5d0d6fadc191d4d1f5f2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fb5a30bbf5e6ee3a770175f7cf2e8a334e6ba29edf585151e42c2af185bd1b6(
    *,
    group_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scaling_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    scaling_group_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
