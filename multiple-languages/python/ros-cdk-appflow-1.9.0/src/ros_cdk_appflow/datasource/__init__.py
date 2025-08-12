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


@jsii.interface(jsii_type="@alicloud/ros-cdk-appflow.datasource.IUserAuthConfigs")
class IUserAuthConfigs(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``UserAuthConfigs``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigIds")
    def attr_auth_config_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigIds: The list of auth config ids.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigs")
    def attr_auth_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigs: The list of auth configs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigsProps":
        ...


class _IUserAuthConfigsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``UserAuthConfigs``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-appflow.datasource.IUserAuthConfigs"

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigIds")
    def attr_auth_config_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigIds: The list of auth config ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigs")
    def attr_auth_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigs: The list of auth configs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigsProps":
        return typing.cast("UserAuthConfigsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUserAuthConfigs).__jsii_proxy_class__ = lambda : _IUserAuthConfigsProxy


class RosUserAuthConfigs(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.datasource.RosUserAuthConfigs",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::AppFlow::UserAuthConfigs``, which is used to query the configurations of user credentials.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``UserAuthConfigs`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserAuthConfigsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a87687c258424f469cf2dced71660638b87b1a7ed6ecd8747450bcc7361d485)
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
            type_hints = typing.get_type_hints(_typecheckingstub__441425af5253bf40dca8790083737cd5ce86a9ccce106b7e2afab88fb30212b9)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigIds")
    def attr_auth_config_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfigIds: The list of auth config ids.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfigIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigs")
    def attr_auth_configs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthConfigs: The list of auth configs
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthConfigs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="connectorId")
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectorId"))

    @connector_id.setter
    def connector_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1060e48f4344e83c776cda4ea8a4ad7540640aa3b2338af5abf110ac99db9d3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectorId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9d8ddeec1dab6adfb4d0cf89ad6e21110ce2efb2c7310d62b5bcd1d465d1eac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="authConfigNames")
    def auth_config_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: authConfigNames: The names of the config.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "authConfigNames"))

    @auth_config_names.setter
    def auth_config_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6aee9ac2419c090e813be7d5a63cffea1f27d753aa729dfbbcd6fa2dc23d276)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfigNames", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__36828b227878da6b20720e9747ea17be718daa8c1d382eff48bc5287e1344479)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.datasource.RosUserAuthConfigsProps",
    jsii_struct_bases=[],
    name_mapping={
        "connector_id": "connectorId",
        "auth_config_names": "authConfigNames",
        "refresh_options": "refreshOptions",
    },
)
class RosUserAuthConfigsProps:
    def __init__(
        self,
        *,
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auth_config_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUserAuthConfigs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs

        :param connector_id: 
        :param auth_config_names: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3132d9d5ccf08d70b2a0c887f98a14a7500cf858c172cfc585095d8a39fb3d9b)
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
            check_type(argname="argument auth_config_names", value=auth_config_names, expected_type=type_hints["auth_config_names"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connector_id": connector_id,
        }
        if auth_config_names is not None:
            self._values["auth_config_names"] = auth_config_names
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectorId: The id of connector.
        '''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auth_config_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: authConfigNames: The names of the config.
        '''
        result = self._values.get("auth_config_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserAuthConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUserAuthConfigs)
class UserAuthConfigs(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-appflow.datasource.UserAuthConfigs",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::AppFlow::UserAuthConfigs``, which is used to query the configurations of user credentials.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUserAuthConfigs``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserAuthConfigsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__646d0a738e1f03ac1aeac4d1a888a315a64ecc5e33cdb7b340ddd11197c6fe40)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigIds")
    def attr_auth_config_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigIds: The list of auth config ids.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigIds"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthConfigs")
    def attr_auth_configs(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthConfigs: The list of auth configs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthConfigs"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserAuthConfigsProps":
        return typing.cast("UserAuthConfigsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a842eb1addedf8489d31ae67d1ad12383f5e7748306d6252730f18e32d1c3a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15adc4d02ccfa07c78f34629d9930d84420c11d2bd4d3d8179412b2a8920309b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12449963f454eb276f74b322cb5dc02572c87b22bc8d4107e1e41715a6abbbe8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-appflow.datasource.UserAuthConfigsProps",
    jsii_struct_bases=[],
    name_mapping={
        "connector_id": "connectorId",
        "auth_config_names": "authConfigNames",
        "refresh_options": "refreshOptions",
    },
)
class UserAuthConfigsProps:
    def __init__(
        self,
        *,
        connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auth_config_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``UserAuthConfigs``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs

        :param connector_id: Property connectorId: The id of connector.
        :param auth_config_names: Property authConfigNames: The names of the config.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa990d0a68f556f73eb224a9e397dbefa59a75e8a4556d25defdabcec666ed7)
            check_type(argname="argument connector_id", value=connector_id, expected_type=type_hints["connector_id"])
            check_type(argname="argument auth_config_names", value=auth_config_names, expected_type=type_hints["auth_config_names"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connector_id": connector_id,
        }
        if auth_config_names is not None:
            self._values["auth_config_names"] = auth_config_names
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def connector_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectorId: The id of connector.'''
        result = self._values.get("connector_id")
        assert result is not None, "Required property 'connector_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auth_config_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property authConfigNames: The names of the config.'''
        result = self._values.get("auth_config_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserAuthConfigsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IUserAuthConfigs",
    "RosUserAuthConfigs",
    "RosUserAuthConfigsProps",
    "UserAuthConfigs",
    "UserAuthConfigsProps",
]

publication.publish()

def _typecheckingstub__5a87687c258424f469cf2dced71660638b87b1a7ed6ecd8747450bcc7361d485(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserAuthConfigsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__441425af5253bf40dca8790083737cd5ce86a9ccce106b7e2afab88fb30212b9(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1060e48f4344e83c776cda4ea8a4ad7540640aa3b2338af5abf110ac99db9d3d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9d8ddeec1dab6adfb4d0cf89ad6e21110ce2efb2c7310d62b5bcd1d465d1eac(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6aee9ac2419c090e813be7d5a63cffea1f27d753aa729dfbbcd6fa2dc23d276(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36828b227878da6b20720e9747ea17be718daa8c1d382eff48bc5287e1344479(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3132d9d5ccf08d70b2a0c887f98a14a7500cf858c172cfc585095d8a39fb3d9b(
    *,
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auth_config_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__646d0a738e1f03ac1aeac4d1a888a315a64ecc5e33cdb7b340ddd11197c6fe40(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserAuthConfigsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a842eb1addedf8489d31ae67d1ad12383f5e7748306d6252730f18e32d1c3a9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15adc4d02ccfa07c78f34629d9930d84420c11d2bd4d3d8179412b2a8920309b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12449963f454eb276f74b322cb5dc02572c87b22bc8d4107e1e41715a6abbbe8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa990d0a68f556f73eb224a9e397dbefa59a75e8a4556d25defdabcec666ed7(
    *,
    connector_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auth_config_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
