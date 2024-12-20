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


class EditingProjects(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.datasource.EditingProjects",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::VOD::EditingProjects``, which is used to query the basic information about online editing projects.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEditingProjects``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["EditingProjectsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e512ca868973a6b756bb1430af5e300bdbeb562a909319c130b570f4265bf7f2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectIds")
    def attr_editing_project_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjectIds: The list of editing project IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectIds"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjects")
    def attr_editing_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EditingProjects: The list of editing projects.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjects"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb55406618af2eda0260c74c62663dd498a11c7c97f79aefa75955399545ae25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd47f46278ba0cb778acded017438ce71e91aeb2a54031438b3b9425589068a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "EditingProjectsProps":
        return typing.cast("EditingProjectsProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "EditingProjectsProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f08c6dc023c7007f146c55d38618f658e928fe1971d016bebf2716798b4647d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ddbb4ef599f47eec60d9d099a44577e86f56414c5d1c3bf423e8f0edaad9b0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.datasource.EditingProjectsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions", "title": "title"},
)
class EditingProjectsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``EditingProjects``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param title: Property title: The title of the online editing project.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980a569ed489c1d26ab9d0f1db4b91e659ea03efe8d93735b961cd49196cdf0c)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if title is not None:
            self._values["title"] = title

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property title: The title of the online editing project.'''
        result = self._values.get("title")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EditingProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEditingProjects(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vod.datasource.RosEditingProjects",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::VOD::EditingProjects``, which is used to query the basic information about online editing projects.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EditingProjects`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEditingProjectsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f12fdb15a78117ed4078d9528b2ca8bca50b8bb363d5c376cc60dcb628ea49c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__da9bd3a31e2908977f9a9d4b0f3bac583c72a8ef81ad38997083d4da3ab8873c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjectIds")
    def attr_editing_project_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjectIds: The list of editing project IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjectIds"))

    @builtins.property
    @jsii.member(jsii_name="attrEditingProjects")
    def attr_editing_projects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EditingProjects: The list of editing projects.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEditingProjects"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__98c1d13c6b54b4e05c08f9bd6e08869168b8b1481a98afbeb32b0f7e3a78281b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2f80a35c771436cbb2f428dbb0883c05217935341e51c903aa8ce9dc3066234)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="title")
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: title: The title of the online editing project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "title"))

    @title.setter
    def title(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ce76b9962985f7ab1bf77e1b5c391387e3b6a79d2983f69c3eda4f9cf957250)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "title", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps",
    jsii_struct_bases=[],
    name_mapping={"refresh_options": "refreshOptions", "title": "title"},
)
class RosEditingProjectsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEditingProjects``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects

        :param refresh_options: 
        :param title: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2e686f29e118d007023782aa9fb6b61c8e6d45ff74b3b4f01ad1e352f5331ad)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if title is not None:
            self._values["title"] = title

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def title(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: title: The title of the online editing project.
        '''
        result = self._values.get("title")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEditingProjectsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "EditingProjects",
    "EditingProjectsProps",
    "RosEditingProjects",
    "RosEditingProjectsProps",
]

publication.publish()

def _typecheckingstub__e512ca868973a6b756bb1430af5e300bdbeb562a909319c130b570f4265bf7f2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[EditingProjectsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb55406618af2eda0260c74c62663dd498a11c7c97f79aefa75955399545ae25(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd47f46278ba0cb778acded017438ce71e91aeb2a54031438b3b9425589068a7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f08c6dc023c7007f146c55d38618f658e928fe1971d016bebf2716798b4647d(
    value: EditingProjectsProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ddbb4ef599f47eec60d9d099a44577e86f56414c5d1c3bf423e8f0edaad9b0e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980a569ed489c1d26ab9d0f1db4b91e659ea03efe8d93735b961cd49196cdf0c(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f12fdb15a78117ed4078d9528b2ca8bca50b8bb363d5c376cc60dcb628ea49c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEditingProjectsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da9bd3a31e2908977f9a9d4b0f3bac583c72a8ef81ad38997083d4da3ab8873c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c1d13c6b54b4e05c08f9bd6e08869168b8b1481a98afbeb32b0f7e3a78281b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2f80a35c771436cbb2f428dbb0883c05217935341e51c903aa8ce9dc3066234(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ce76b9962985f7ab1bf77e1b5c391387e3b6a79d2983f69c3eda4f9cf957250(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2e686f29e118d007023782aa9fb6b61c8e6d45ff74b3b4f01ad1e352f5331ad(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    title: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
