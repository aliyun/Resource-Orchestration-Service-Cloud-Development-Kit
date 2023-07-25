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


class Configurations(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.datasource.Configurations",
):
    '''A ROS resource type:  ``DATASOURCE::ACM::Configurations``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ConfigurationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ACM::Configurations``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3041a7f53627c8d1ecb69da2495fea2c9f690e7d3530c4549348a0f62d93755)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfigurations")
    def attr_configurations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Configurations: The list of configurations.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigurations"))

    @builtins.property
    @jsii.member(jsii_name="attrDataIds")
    def attr_data_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DataIds: The list of configuration data IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.datasource.ConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace_id": "namespaceId",
        "app_name": "appName",
        "data_id": "dataId",
        "group": "group",
    },
)
class ConfigurationsProps:
    def __init__(
        self,
        *,
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ACM::Configurations``.

        :param namespace_id: Property namespaceId: The namespace ID of configuration.
        :param app_name: Property appName: The app name of configuration.
        :param data_id: Property dataId: The data ID of configuration.
        :param group: Property group: The group of configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffc1fb33063c2473cbe1972b9b7e1d9df3de6329b83404eeb0d4448005026bb4)
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument data_id", value=data_id, expected_type=type_hints["data_id"])
            check_type(argname="argument group", value=group, expected_type=type_hints["group"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace_id": namespace_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if data_id is not None:
            self._values["data_id"] = data_id
        if group is not None:
            self._values["group"] = group

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property namespaceId: The namespace ID of configuration.'''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appName: The app name of configuration.'''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataId: The data ID of configuration.'''
        result = self._values.get("data_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property group: The group of configuration.'''
        result = self._values.get("group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespaces(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.datasource.Namespaces",
):
    '''A ROS resource type:  ``DATASOURCE::ACM::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NamespacesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::ACM::Namespaces``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53c5873e1def3b2a9cbbd7ebb5ca731cc95a405e4e6bec9b4887ff4fa932f76a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceIds")
    def attr_namespace_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NamespaceIds: The list of namespace IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Namespaces: The list of namespaces.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.datasource.NamespacesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class NamespacesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::ACM::Namespaces``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConfigurations(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.datasource.RosConfigurations",
):
    '''A ROS template type:  ``DATASOURCE::ACM::Configurations``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConfigurationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ACM::Configurations``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dd6805668d6b96aa352e92151fba82bb38b214eb7fe8d0f4a727ad83193a60a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__19c0736a31cabc49371426e7c557e17585aaaeac4b2e4937c2844dc611eda4c6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfigurations")
    def attr_configurations(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Configurations: The list of configurations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfigurations"))

    @builtins.property
    @jsii.member(jsii_name="attrDataIds")
    def attr_data_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DataIds: The list of configuration data IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataIds"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c25b97fbd6f657df4687b8ecd41610a45cba2886843d09a01100b83dc7587874)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The namespace ID of configuration
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8057e33d1f698a9bb9e4a793392a9e36195e216b6069607d25d8a34ad8367a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The app name of configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4fbc1e44ddd8b34ded7ebdb5fc72bbe8e3ffd5b248ccce3402b6473578a06a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="dataId")
    def data_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataId: The data ID of configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataId"))

    @data_id.setter
    def data_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73d1437abe67da9fe74ba842ad72c5bf1d103e4edae509fd862abcb34db1192d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataId", value)

    @builtins.property
    @jsii.member(jsii_name="group")
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: group: The group of configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "group"))

    @group.setter
    def group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__676c2a56bb563b9524ac308bec7177822021526719c60e6a7d7a4e7b4c620e58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "group", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.datasource.RosConfigurationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "namespace_id": "namespaceId",
        "app_name": "appName",
        "data_id": "dataId",
        "group": "group",
    },
)
class RosConfigurationsProps:
    def __init__(
        self,
        *,
        namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::ACM::Configurations``.

        :param namespace_id: 
        :param app_name: 
        :param data_id: 
        :param group: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74500ea7e19f71298c88bb657bd096241aca03595155ea49f157abb8eb8b1802)
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument data_id", value=data_id, expected_type=type_hints["data_id"])
            check_type(argname="argument group", value=group, expected_type=type_hints["group"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "namespace_id": namespace_id,
        }
        if app_name is not None:
            self._values["app_name"] = app_name
        if data_id is not None:
            self._values["data_id"] = data_id
        if group is not None:
            self._values["group"] = group

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: namespaceId: The namespace ID of configuration
        '''
        result = self._values.get("namespace_id")
        assert result is not None, "Required property 'namespace_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The app name of configuration
        '''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dataId: The data ID of configuration
        '''
        result = self._values.get("data_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: group: The group of configuration
        '''
        result = self._values.get("group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConfigurationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespaces(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-acm.datasource.RosNamespaces",
):
    '''A ROS template type:  ``DATASOURCE::ACM::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespacesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::ACM::Namespaces``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26dc32255571d4128904dc9f45e867c4916697672040bdca2c81ed2d17fefc9e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c88da05b829d318a93a3290f03a574eb5c8b1fe61520f4f58c50089f6b4a5a7b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceIds")
    def attr_namespace_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NamespaceIds: The list of namespace IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Namespaces: The list of namespaces.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__63ddb3fc74f749da72716bdc9c686229c483465b3aaf742b8c7329f4237825fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-acm.datasource.RosNamespacesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosNamespacesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::ACM::Namespaces``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Configurations",
    "ConfigurationsProps",
    "Namespaces",
    "NamespacesProps",
    "RosConfigurations",
    "RosConfigurationsProps",
    "RosNamespaces",
    "RosNamespacesProps",
]

publication.publish()

def _typecheckingstub__b3041a7f53627c8d1ecb69da2495fea2c9f690e7d3530c4549348a0f62d93755(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConfigurationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffc1fb33063c2473cbe1972b9b7e1d9df3de6329b83404eeb0d4448005026bb4(
    *,
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53c5873e1def3b2a9cbbd7ebb5ca731cc95a405e4e6bec9b4887ff4fa932f76a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NamespacesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dd6805668d6b96aa352e92151fba82bb38b214eb7fe8d0f4a727ad83193a60a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConfigurationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19c0736a31cabc49371426e7c557e17585aaaeac4b2e4937c2844dc611eda4c6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c25b97fbd6f657df4687b8ecd41610a45cba2886843d09a01100b83dc7587874(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8057e33d1f698a9bb9e4a793392a9e36195e216b6069607d25d8a34ad8367a0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4fbc1e44ddd8b34ded7ebdb5fc72bbe8e3ffd5b248ccce3402b6473578a06a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73d1437abe67da9fe74ba842ad72c5bf1d103e4edae509fd862abcb34db1192d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__676c2a56bb563b9524ac308bec7177822021526719c60e6a7d7a4e7b4c620e58(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74500ea7e19f71298c88bb657bd096241aca03595155ea49f157abb8eb8b1802(
    *,
    namespace_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26dc32255571d4128904dc9f45e867c4916697672040bdca2c81ed2d17fefc9e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespacesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c88da05b829d318a93a3290f03a574eb5c8b1fe61520f4f58c50089f6b4a5a7b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63ddb3fc74f749da72716bdc9c686229c483465b3aaf742b8c7329f4237825fd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass
