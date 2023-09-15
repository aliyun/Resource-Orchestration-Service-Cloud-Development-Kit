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


class Applications(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.datasource.Applications",
):
    '''A ROS resource type:  ``DATASOURCE::SAE::Applications``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ApplicationsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SAE::Applications``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49e4bdef3296bb428c28483753fbbd7dd1293d56f3f1538ada008d4a5ba66df6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApplicationIds")
    def attr_application_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ApplicationIds: The list of application IDs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApplicationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Applications: The list of applications.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApplications"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.datasource.ApplicationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "field_type": "fieldType",
        "field_value": "fieldValue",
        "namespace_id": "namespaceId",
    },
)
class ApplicationsProps:
    def __init__(
        self,
        *,
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        field_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        field_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SAE::Applications``.

        :param app_name: Property appName: The name of application.
        :param field_type: Property fieldType: Set the dimension of the filter application. Valid values: appName: The application name. appIds: App IDs. slbIps: SLB IP address. instanceIps: Instance IP address.
        :param field_value: Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
        :param namespace_id: Property namespaceId: The ID of namespace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29025daf38cb152179805d861e9ccdb1a4c5ee6beb68a52bf71c7a702b88800c)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument field_type", value=field_type, expected_type=type_hints["field_type"])
            check_type(argname="argument field_value", value=field_value, expected_type=type_hints["field_value"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_name is not None:
            self._values["app_name"] = app_name
        if field_type is not None:
            self._values["field_type"] = field_type
        if field_value is not None:
            self._values["field_value"] = field_value
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appName: The name of application.'''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def field_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fieldType: Set the dimension of the filter application.

        Valid values:
        appName: The application name.
        appIds: App IDs.
        slbIps: SLB IP address.
        instanceIps: Instance IP address.
        '''
        result = self._values.get("field_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def field_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.'''
        result = self._values.get("field_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property namespaceId: The ID of namespace.'''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplicationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespaces(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.datasource.Namespaces",
):
    '''A ROS resource type:  ``DATASOURCE::SAE::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["NamespacesProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``DATASOURCE::SAE::Namespaces``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2cbd1d5b6d0e8fc52717b08522ad3e2ae966017a3ad269075ae581656043c67)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrNamespaceIds")
    def attr_namespace_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NamespaceIds: The list of namespace names.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespaces")
    def attr_namespaces(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Namespaces: The list of namespaces.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNamespaces"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.datasource.NamespacesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class NamespacesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::SAE::Namespaces``.'''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespacesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplications(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.datasource.RosApplications",
):
    '''A ROS template type:  ``DATASOURCE::SAE::Applications``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplicationsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SAE::Applications``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f465b1e13341a2c47d6841f4870f0d4f7c0839045cef299109b93f1d9792818)
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
            type_hints = typing.get_type_hints(_typecheckingstub__86262fb439b0807c0cd63bd5bb248bc9b42f3a2ef52389a1a2ea00bd7b75c1fc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApplicationIds")
    def attr_application_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApplicationIds: The list of application IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApplicationIds"))

    @builtins.property
    @jsii.member(jsii_name="attrApplications")
    def attr_applications(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Applications: The list of applications.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApplications"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2778a636f0689727a19a5b1152f8cc9de8e65c2163b547f81f4bfb16aac63c04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The name of application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37990fdbcdd8566b8ea653bf5d4050d35d777f3a64b842822be50a906e0209f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="fieldType")
    def field_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fieldType: Set the dimension of the filter application. Valid values:
        appName: The application name.
        appIds: App IDs.
        slbIps: SLB IP address.
        instanceIps: Instance IP address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fieldType"))

    @field_type.setter
    def field_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03d423a36b1bb2b71f0aeeab4761dbc8e7b2acb14cceeb0c4dd8cbb642b80257)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fieldType", value)

    @builtins.property
    @jsii.member(jsii_name="fieldValue")
    def field_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fieldValue"))

    @field_value.setter
    def field_value(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3aff474fb2c60e61121af14a9b6e5acf26f48dcc76a1f887a2e422b9e843657e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fieldValue", value)

    @builtins.property
    @jsii.member(jsii_name="namespaceId")
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of namespace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "namespaceId"))

    @namespace_id.setter
    def namespace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58f4cd8740096e123558fd63b4ebe41259a802cd919876cdc792162f5312386f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.datasource.RosApplicationsProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "field_type": "fieldType",
        "field_value": "fieldValue",
        "namespace_id": "namespaceId",
    },
)
class RosApplicationsProps:
    def __init__(
        self,
        *,
        app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        field_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        field_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DATASOURCE::SAE::Applications``.

        :param app_name: 
        :param field_type: 
        :param field_value: 
        :param namespace_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41436a3fb9a498c7b477b581d38665f95f2c6a86145c923bf54b9e3e4156d7f8)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument field_type", value=field_type, expected_type=type_hints["field_type"])
            check_type(argname="argument field_value", value=field_value, expected_type=type_hints["field_value"])
            check_type(argname="argument namespace_id", value=namespace_id, expected_type=type_hints["namespace_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if app_name is not None:
            self._values["app_name"] = app_name
        if field_type is not None:
            self._values["field_type"] = field_type
        if field_value is not None:
            self._values["field_value"] = field_value
        if namespace_id is not None:
            self._values["namespace_id"] = namespace_id

    @builtins.property
    def app_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appName: The name of application.
        '''
        result = self._values.get("app_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def field_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        fieldType: Set the dimension of the filter application. Valid values:
        appName: The application name.
        appIds: App IDs.
        slbIps: SLB IP address.
        instanceIps: Instance IP address.
        '''
        result = self._values.get("field_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def field_value(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
        '''
        result = self._values.get("field_value")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def namespace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: namespaceId: The ID of namespace.
        '''
        result = self._values.get("namespace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplicationsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespaces(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-sae.datasource.RosNamespaces",
):
    '''A ROS template type:  ``DATASOURCE::SAE::Namespaces``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespacesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``DATASOURCE::SAE::Namespaces``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c993238fee32dd4ddf8f464c9ea32f62bb53ae5ca387a4d26193cecd55b241a2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__af35a163775e76eb21ea8ce463a52afed71b548a0eb9fe5cf1603519617f0d96)
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
        :Attribute: NamespaceIds: The list of namespace names.
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
            type_hints = typing.get_type_hints(_typecheckingstub__3a45b9fdc90b4fabfa71b2e4844ba30e9352d30429ad655debb1800ff581598d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-sae.datasource.RosNamespacesProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosNamespacesProps:
    def __init__(self) -> None:
        '''Properties for defining a ``DATASOURCE::SAE::Namespaces``.'''
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
    "Applications",
    "ApplicationsProps",
    "Namespaces",
    "NamespacesProps",
    "RosApplications",
    "RosApplicationsProps",
    "RosNamespaces",
    "RosNamespacesProps",
]

publication.publish()

def _typecheckingstub__49e4bdef3296bb428c28483753fbbd7dd1293d56f3f1538ada008d4a5ba66df6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApplicationsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29025daf38cb152179805d861e9ccdb1a4c5ee6beb68a52bf71c7a702b88800c(
    *,
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    field_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    field_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2cbd1d5b6d0e8fc52717b08522ad3e2ae966017a3ad269075ae581656043c67(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[NamespacesProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f465b1e13341a2c47d6841f4870f0d4f7c0839045cef299109b93f1d9792818(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplicationsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86262fb439b0807c0cd63bd5bb248bc9b42f3a2ef52389a1a2ea00bd7b75c1fc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2778a636f0689727a19a5b1152f8cc9de8e65c2163b547f81f4bfb16aac63c04(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37990fdbcdd8566b8ea653bf5d4050d35d777f3a64b842822be50a906e0209f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03d423a36b1bb2b71f0aeeab4761dbc8e7b2acb14cceeb0c4dd8cbb642b80257(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3aff474fb2c60e61121af14a9b6e5acf26f48dcc76a1f887a2e422b9e843657e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58f4cd8740096e123558fd63b4ebe41259a802cd919876cdc792162f5312386f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41436a3fb9a498c7b477b581d38665f95f2c6a86145c923bf54b9e3e4156d7f8(
    *,
    app_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    field_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    field_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    namespace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c993238fee32dd4ddf8f464c9ea32f62bb53ae5ca387a4d26193cecd55b241a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNamespacesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af35a163775e76eb21ea8ce463a52afed71b548a0eb9fe5cf1603519617f0d96(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a45b9fdc90b4fabfa71b2e4844ba30e9352d30429ad655debb1800ff581598d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass
