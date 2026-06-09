'''
## Aliyun ROS EVENTBRIDGE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EVENTBRIDGE from '@alicloud/ros-cdk-eventbridge';
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

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.ApiDestinationProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_destination_name": "apiDestinationName",
        "connection_name": "connectionName",
        "http_api_parameters": "httpApiParameters",
        "description": "description",
    },
)
class ApiDestinationProps:
    def __init__(
        self,
        *,
        api_destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_api_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApiDestination.HttpApiParametersProperty", typing.Dict[builtins.str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApiDestination``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination

        :param api_destination_name: Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
        :param connection_name: Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters. - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
        :param http_api_parameters: Property httpApiParameters: Configuration information for API endpoints.
        :param description: Property description: The description of the api. It must be no more than 255 characters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__086a1e26017a4cc7698791218c52da9f1df99ef015b02d1a69f9f1ce10b77077)
            check_type(argname="argument api_destination_name", value=api_destination_name, expected_type=type_hints["api_destination_name"])
            check_type(argname="argument connection_name", value=connection_name, expected_type=type_hints["connection_name"])
            check_type(argname="argument http_api_parameters", value=http_api_parameters, expected_type=type_hints["http_api_parameters"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "api_destination_name": api_destination_name,
            "connection_name": connection_name,
            "http_api_parameters": http_api_parameters,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property apiDestinationName: The name of the api.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        result = self._values.get("api_destination_name")
        assert result is not None, "Required property 'api_destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.

        - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
        '''
        result = self._values.get("connection_name")
        assert result is not None, "Required property 'connection_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_api_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiDestination.HttpApiParametersProperty"]:
        '''Property httpApiParameters: Configuration information for API endpoints.'''
        result = self._values.get("http_api_parameters")
        assert result is not None, "Required property 'http_api_parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiDestination.HttpApiParametersProperty"], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the api.

        It must be no more than 255 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApiDestinationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.ConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_name": "connectionName",
        "network_parameters": "networkParameters",
        "auth_parameters": "authParameters",
        "description": "description",
    },
)
class ConnectionProps:
    def __init__(
        self,
        *,
        connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.NetworkParametersProperty", typing.Dict[builtins.str, typing.Any]]],
        auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.AuthParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Connection``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection

        :param connection_name: Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        :param network_parameters: Property networkParameters: Network Configuration Data Structure.
        :param auth_parameters: Property authParameters: Authentication Data Structure.
        :param description: Property description: The connection configuration description. The maximum length is 255 characters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cac7d9f5f6f71850096f00944dea32d9b8be398942c6e510ff288a89531f5a9b)
            check_type(argname="argument connection_name", value=connection_name, expected_type=type_hints["connection_name"])
            check_type(argname="argument network_parameters", value=network_parameters, expected_type=type_hints["network_parameters"])
            check_type(argname="argument auth_parameters", value=auth_parameters, expected_type=type_hints["auth_parameters"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connection_name": connection_name,
            "network_parameters": network_parameters,
        }
        if auth_parameters is not None:
            self._values["auth_parameters"] = auth_parameters
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property connectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        result = self._values.get("connection_name")
        assert result is not None, "Required property 'connection_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.NetworkParametersProperty"]:
        '''Property networkParameters: Network Configuration Data Structure.'''
        result = self._values.get("network_parameters")
        assert result is not None, "Required property 'network_parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.NetworkParametersProperty"], result)

    @builtins.property
    def auth_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.AuthParametersProperty"]]:
        '''Property authParameters: Authentication Data Structure.'''
        result = self._values.get("auth_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.AuthParametersProperty"]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The connection configuration description.

        The maximum length is 255 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-eventbridge.IApiDestination")
class IApiDestination(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ApiDestination``.'''

    @builtins.property
    @jsii.member(jsii_name="attrApiDestinationName")
    def attr_api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiDestinationName: The name of the api.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the api.

        It must be no more than 255 characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiParameters")
    def attr_http_api_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiParameters: Configuration information for API endpoints.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiDestinationProps:
        ...


class _IApiDestinationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ApiDestination``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-eventbridge.IApiDestination"

    @builtins.property
    @jsii.member(jsii_name="attrApiDestinationName")
    def attr_api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiDestinationName: The name of the api.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiDestinationName"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the api.

        It must be no more than 255 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiParameters")
    def attr_http_api_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiParameters: Configuration information for API endpoints.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiDestinationProps:
        return typing.cast(ApiDestinationProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApiDestination).__jsii_proxy_class__ = lambda : _IApiDestinationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-eventbridge.IConnection")
class IConnection(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Connection``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAuthParameters")
    def attr_auth_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthParameters: Authentication Data Structure.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The connection configuration description.

        The maximum length is 255 characters.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNetworkParameters")
    def attr_network_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkParameters: Network Configuration Data Structure.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConnectionProps:
        ...


class _IConnectionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Connection``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-eventbridge.IConnection"

    @builtins.property
    @jsii.member(jsii_name="attrAuthParameters")
    def attr_auth_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthParameters: Authentication Data Structure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The connection configuration description.

        The maximum length is 255 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkParameters")
    def attr_network_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkParameters: Network Configuration Data Structure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConnectionProps:
        return typing.cast(ConnectionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConnection).__jsii_proxy_class__ = lambda : _IConnectionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-eventbridge.IRule")
class IRule(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Rule``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventBusName: The name of the event bus.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.

        The ARN is used for authorization.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the event rule.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        ...


class _IRuleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Rule``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-eventbridge.IRule"

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventBusName: The name of the event bus.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventBusName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.

        The ARN is used for authorization.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the event rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        return typing.cast("RuleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRule).__jsii_proxy_class__ = lambda : _IRuleProxy


class RosApiDestination(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.RosApiDestination",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EventBridge::ApiDestination``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApiDestination`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApiDestinationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89c0c7db2422aaf614510d9d07ce32b8bf4ced2f5d66e03a07d9ed5b91cdc625)
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
            type_hints = typing.get_type_hints(_typecheckingstub__20eb3e1f29fcfa4282003586cea6968adccf16861da673e77c76d9603d61a348)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrApiDestinationName")
    def attr_api_destination_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ApiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrApiDestinationName"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the api. It must be no more than 255 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiParameters")
    def attr_http_api_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpApiParameters: Configuration information for API endpoints.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpApiParameters"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="apiDestinationName")
    def api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "apiDestinationName"))

    @api_destination_name.setter
    def api_destination_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fec0b11ed706a483f5094336fa59a48be7f97d9034b08c4d29a4554689a7a00f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiDestinationName", value)

    @builtins.property
    @jsii.member(jsii_name="connectionName")
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.

        - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectionName"))

    @connection_name.setter
    def connection_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac1b938d45cb5dad389fbf2022473b47a5313525b2d20af75082caf01750de21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b89206e80d233a51848e58a16d5b2edb01f6778af985caaf975fb7858d4267d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="httpApiParameters")
    def http_api_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiDestination.HttpApiParametersProperty"]:
        '''
        :Property: httpApiParameters: Configuration information for API endpoints.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiDestination.HttpApiParametersProperty"], jsii.get(self, "httpApiParameters"))

    @http_api_parameters.setter
    def http_api_parameters(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApiDestination.HttpApiParametersProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb08b43eb795beef3beb26ed8d64e5cc152ab1977274799719ff934913863429)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpApiParameters", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the api. It must be no more than 255 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21bb27484904395b6ef802c440734d9a066135decaabab140b4822c41b21a728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosApiDestination.HttpApiParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"endpoint": "endpoint", "method": "method"},
    )
    class HttpApiParametersProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param endpoint: 
            :param method: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bd5e5d5a3cb4cef73fa3a9561df180f35f8e6abceccfe71f6eb97bfaff5ec030)
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument method", value=method, expected_type=type_hints["method"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint": endpoint,
                "method": method,
            }

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpoint: The access point address of the API endpoint. The maximum length is 127 characters.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def method(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            method: HTTP request method.

            - GET
            - POST
            - HEAD
            - DELETE
            - PUT
            - PATCH.
            '''
            result = self._values.get("method")
            assert result is not None, "Required property 'method' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HttpApiParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RosApiDestinationProps",
    jsii_struct_bases=[],
    name_mapping={
        "api_destination_name": "apiDestinationName",
        "connection_name": "connectionName",
        "http_api_parameters": "httpApiParameters",
        "description": "description",
    },
)
class RosApiDestinationProps:
    def __init__(
        self,
        *,
        api_destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_api_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiDestination.HttpApiParametersProperty, typing.Dict[builtins.str, typing.Any]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApiDestination``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination

        :param api_destination_name: 
        :param connection_name: 
        :param http_api_parameters: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75b477ec69774d6df85be90d8879c839d2897b71803c77b9dcd967108b19e0fe)
            check_type(argname="argument api_destination_name", value=api_destination_name, expected_type=type_hints["api_destination_name"])
            check_type(argname="argument connection_name", value=connection_name, expected_type=type_hints["connection_name"])
            check_type(argname="argument http_api_parameters", value=http_api_parameters, expected_type=type_hints["http_api_parameters"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "api_destination_name": api_destination_name,
            "connection_name": connection_name,
            "http_api_parameters": http_api_parameters,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        result = self._values.get("api_destination_name")
        assert result is not None, "Required property 'api_destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.

        - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
        '''
        result = self._values.get("connection_name")
        assert result is not None, "Required property 'connection_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_api_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiDestination.HttpApiParametersProperty]:
        '''
        :Property: httpApiParameters: Configuration information for API endpoints.
        '''
        result = self._values.get("http_api_parameters")
        assert result is not None, "Required property 'http_api_parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiDestination.HttpApiParametersProperty], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the api. It must be no more than 255 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApiDestinationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConnection(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EventBridge::Connection``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Connection`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConnectionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__351ce76a96c393a1e6eeb74a9c85d1b86bb977a86e5068f0f6b5e6255a9a266a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a76279c93e0702bc11b9ae7b60e45339ed5a1619f98b4a161a6b7f4a7b2acf2e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAuthParameters")
    def attr_auth_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AuthParameters: Authentication Data Structure.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAuthParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The connection configuration description. The maximum length is 255 characters.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkParameters")
    def attr_network_parameters(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkParameters: Network Configuration Data Structure.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkParameters"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="connectionName")
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "connectionName"))

    @connection_name.setter
    def connection_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a8f384f4824f6dc6a71a793b1ce5e8a3417900034f8863b401de07865c53dc2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0fdb341099eef371da46d2dd820f669c25651a1ce97b48b8ac76695f2310adc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="networkParameters")
    def network_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.NetworkParametersProperty"]:
        '''
        :Property: networkParameters: Network Configuration Data Structure.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.NetworkParametersProperty"], jsii.get(self, "networkParameters"))

    @network_parameters.setter
    def network_parameters(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.NetworkParametersProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e58a089970bac48511eb76454d6daa62ee68a215a93be453d14381c42fe2118)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkParameters", value)

    @builtins.property
    @jsii.member(jsii_name="authParameters")
    def auth_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.AuthParametersProperty"]]:
        '''
        :Property: authParameters: Authentication Data Structure.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.AuthParametersProperty"]], jsii.get(self, "authParameters"))

    @auth_parameters.setter
    def auth_parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.AuthParametersProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4c1e9026ea6300b5ef7e60f42bcc8379f4d16ecdf08a2d4709da3711aa23f37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authParameters", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The connection configuration description. The maximum length is 255 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd1787523f8c222abc4f45aeb408c34b39393f02e1e3f082516ef9b80aac9b88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.ApiKeyAuthParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"api_key_name": "apiKeyName", "api_key_value": "apiKeyValue"},
    )
    class ApiKeyAuthParametersProperty:
        def __init__(
            self,
            *,
            api_key_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            api_key_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param api_key_name: 
            :param api_key_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d552d294ebcd5cdd163e210171dd035b9ad7f4c191b535099f2fd5e8c917632d)
                check_type(argname="argument api_key_name", value=api_key_name, expected_type=type_hints["api_key_name"])
                check_type(argname="argument api_key_value", value=api_key_value, expected_type=type_hints["api_key_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if api_key_name is not None:
                self._values["api_key_name"] = api_key_name
            if api_key_value is not None:
                self._values["api_key_value"] = api_key_value

        @builtins.property
        def api_key_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apiKeyName: The key value of Api key.
            '''
            result = self._values.get("api_key_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def api_key_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: apiKeyValue: Value of Api key.
            '''
            result = self._values.get("api_key_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ApiKeyAuthParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.AuthParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "api_key_auth_parameters": "apiKeyAuthParameters",
            "authorization_type": "authorizationType",
            "basic_auth_parameters": "basicAuthParameters",
            "oauth_parameters": "oauthParameters",
        },
    )
    class AuthParametersProperty:
        def __init__(
            self,
            *,
            api_key_auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.ApiKeyAuthParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            authorization_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            basic_auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.BasicAuthParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            oauth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.OauthParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param api_key_auth_parameters: 
            :param authorization_type: 
            :param basic_auth_parameters: 
            :param oauth_parameters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__39a3439f48fce561023355325f29d9dfde02963a0cc9bec71a3277a825cfee12)
                check_type(argname="argument api_key_auth_parameters", value=api_key_auth_parameters, expected_type=type_hints["api_key_auth_parameters"])
                check_type(argname="argument authorization_type", value=authorization_type, expected_type=type_hints["authorization_type"])
                check_type(argname="argument basic_auth_parameters", value=basic_auth_parameters, expected_type=type_hints["basic_auth_parameters"])
                check_type(argname="argument oauth_parameters", value=oauth_parameters, expected_type=type_hints["oauth_parameters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if api_key_auth_parameters is not None:
                self._values["api_key_auth_parameters"] = api_key_auth_parameters
            if authorization_type is not None:
                self._values["authorization_type"] = authorization_type
            if basic_auth_parameters is not None:
                self._values["basic_auth_parameters"] = basic_auth_parameters
            if oauth_parameters is not None:
                self._values["oauth_parameters"] = oauth_parameters

        @builtins.property
        def api_key_auth_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.ApiKeyAuthParametersProperty"]]:
            '''
            :Property: apiKeyAuthParameters: API KEY data structure.
            '''
            result = self._values.get("api_key_auth_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.ApiKeyAuthParametersProperty"]], result)

        @builtins.property
        def authorization_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            authorizationType: Authentication type:
            BASIC:BASIC_AUTH
            Introduction: This authorization method is the basic authorization method implemented by the browser in compliance with the http protocol. In the process of communication with the HTTP protocol, the HTTP protocol defines the method by which the basic authentication allows the HTTP server to carry out user identity cards on the client. In the request header, add Authorization :Basic empty Base64 encryption (user name: password) fixed format.

            1. Username and Password are required
            API KEY :API_KEY_AUTH
            Introduction:
            Fixed format Add Token :Token value in request header

            - ApiKeyName and ApiKeyValue are required
            OAUTH :OAUTH_AUTH
            Introduction:
            OAuth2.0 is an authorization mechanism. Normally, for systems that do not use authorization mechanisms such as OAuth2.0, the client can directly Access the resources of the Resource Server. In order for users to Access data safely, an Access Token mechanism is added in the middle of the Access. Clients need to carry Access tokens to Access protected resources. Therefore, OAuth2.0 ensures that resources are not accessed by malicious clients, thus improving the security of the system.
            - AuthorizationEndpoint, oauthttpparameters, and HttpMethod are required.
            '''
            result = self._values.get("authorization_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def basic_auth_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.BasicAuthParametersProperty"]]:
            '''
            :Property: basicAuthParameters: Basic authentication data structure.
            '''
            result = self._values.get("basic_auth_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.BasicAuthParametersProperty"]], result)

        @builtins.property
        def oauth_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.OauthParametersProperty"]]:
            '''
            :Property: oauthParameters: OAuth Authentication parameter data structure.
            '''
            result = self._values.get("oauth_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.OauthParametersProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.BasicAuthParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"password": "password", "username": "username"},
    )
    class BasicAuthParametersProperty:
        def __init__(
            self,
            *,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param password: 
            :param username: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ceb95535cf6b411a8d509aff18965584f03a3d5503a8b6f1e3399ed7cd3d95a3)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument username", value=username, expected_type=type_hints["username"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if password is not None:
                self._values["password"] = password
            if username is not None:
                self._values["username"] = username

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: Password for basic authentication.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def username(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: username: Username for basic authentication.
            '''
            result = self._values.get("username")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BasicAuthParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.BodyParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "is_value_secret": "isValueSecret",
            "key": "key",
            "value": "value",
        },
    )
    class BodyParametersProperty:
        def __init__(
            self,
            *,
            is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param is_value_secret: 
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0dbf8e97eb775e1f22c5a073d75a21b5cf4f5679f52438c86c7f72218254d756)
                check_type(argname="argument is_value_secret", value=is_value_secret, expected_type=type_hints["is_value_secret"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if is_value_secret is not None:
                self._values["is_value_secret"] = is_value_secret
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def is_value_secret(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: isValueSecret: Whether it is Authentication.
            '''
            result = self._values.get("is_value_secret")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The key of the body request parameter.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the body request parameter.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BodyParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.ClientParametersProperty",
        jsii_struct_bases=[],
        name_mapping={"client_id": "clientId", "client_secret": "clientSecret"},
    )
    class ClientParametersProperty:
        def __init__(
            self,
            *,
            client_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            client_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param client_id: 
            :param client_secret: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__675ce94a4bbedd0b963d3c35c3b57465105c0fc04efe284664b83e02d569225e)
                check_type(argname="argument client_id", value=client_id, expected_type=type_hints["client_id"])
                check_type(argname="argument client_secret", value=client_secret, expected_type=type_hints["client_secret"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if client_id is not None:
                self._values["client_id"] = client_id
            if client_secret is not None:
                self._values["client_secret"] = client_secret

        @builtins.property
        def client_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clientId: The ID of the client.
            '''
            result = self._values.get("client_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def client_secret(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: clientSecret: Application's client key secret.
            '''
            result = self._values.get("client_secret")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ClientParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.HeaderParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "is_value_secret": "isValueSecret",
            "key": "key",
            "value": "value",
        },
    )
    class HeaderParametersProperty:
        def __init__(
            self,
            *,
            is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param is_value_secret: 
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6b517a684cd617e4e6c7c08465a9ceb084e886c27dc8d914cf35b306ee998ea2)
                check_type(argname="argument is_value_secret", value=is_value_secret, expected_type=type_hints["is_value_secret"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if is_value_secret is not None:
                self._values["is_value_secret"] = is_value_secret
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def is_value_secret(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: isValueSecret: Whether it is Authentication.
            '''
            result = self._values.get("is_value_secret")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: The parameter key of the request header.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Request header parameter value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HeaderParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.NetworkParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "network_type": "networkType",
            "security_group_id": "securityGroupId",
            "vpc_id": "vpcId",
            "vswitche_id": "vswitcheId",
        },
    )
    class NetworkParametersProperty:
        def __init__(
            self,
            *,
            network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vswitche_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param network_type: 
            :param security_group_id: 
            :param vpc_id: 
            :param vswitche_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__57608e202346abeb64f0b038d61704e23d8503bed89031f52bde435bbbfc15ec)
                check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument vswitche_id", value=vswitche_id, expected_type=type_hints["vswitche_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "network_type": network_type,
            }
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if vswitche_id is not None:
                self._values["vswitche_id"] = vswitche_id

        @builtins.property
        def network_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            networkType: Public network: PublicNetwork
            Private network: PrivateNetwork

            - Tip: When selecting a VPC, VpcId, VswitcheId, and SecurityGroupId are required.
            '''
            result = self._values.get("network_type")
            assert result is not None, "Required property 'network_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: Security group ID.
            '''
            result = self._values.get("security_group_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: The ID of the VPC.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vswitche_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vswitcheId: Switch ID.
            '''
            result = self._values.get("vswitche_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NetworkParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.OauthHttpParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "body_parameters": "bodyParameters",
            "header_parameters": "headerParameters",
            "query_string_parameters": "queryStringParameters",
        },
    )
    class OauthHttpParametersProperty:
        def __init__(
            self,
            *,
            body_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.BodyParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            header_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.HeaderParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            query_string_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.QueryStringParametersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param body_parameters: 
            :param header_parameters: 
            :param query_string_parameters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ff3504691b8e9bdfd71630005f8b249b5648a92ffadd0f205ab99ce2a0c424d8)
                check_type(argname="argument body_parameters", value=body_parameters, expected_type=type_hints["body_parameters"])
                check_type(argname="argument header_parameters", value=header_parameters, expected_type=type_hints["header_parameters"])
                check_type(argname="argument query_string_parameters", value=query_string_parameters, expected_type=type_hints["query_string_parameters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if body_parameters is not None:
                self._values["body_parameters"] = body_parameters
            if header_parameters is not None:
                self._values["header_parameters"] = header_parameters
            if query_string_parameters is not None:
                self._values["query_string_parameters"] = query_string_parameters

        @builtins.property
        def body_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.BodyParametersProperty"]]]]:
            '''
            :Property: bodyParameters: Body request parameter data structure List.
            '''
            result = self._values.get("body_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.BodyParametersProperty"]]]], result)

        @builtins.property
        def header_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.HeaderParametersProperty"]]]]:
            '''
            :Property: headerParameters: Parameter list of request header.
            '''
            result = self._values.get("header_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.HeaderParametersProperty"]]]], result)

        @builtins.property
        def query_string_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.QueryStringParametersProperty"]]]]:
            '''
            :Property: queryStringParameters: Data structure of request path parameters.
            '''
            result = self._values.get("query_string_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.QueryStringParametersProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OauthHttpParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.OauthParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "authorization_endpoint": "authorizationEndpoint",
            "client_parameters": "clientParameters",
            "http_method": "httpMethod",
            "oauth_http_parameters": "oauthHttpParameters",
        },
    )
    class OauthParametersProperty:
        def __init__(
            self,
            *,
            authorization_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            client_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.ClientParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            http_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oauth_http_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosConnection.OauthHttpParametersProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param authorization_endpoint: 
            :param client_parameters: 
            :param http_method: 
            :param oauth_http_parameters: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8bd9c8f61711baf6f8a738c70c76f428c3f2f71fb07cf86d1cb2c1fa217acd18)
                check_type(argname="argument authorization_endpoint", value=authorization_endpoint, expected_type=type_hints["authorization_endpoint"])
                check_type(argname="argument client_parameters", value=client_parameters, expected_type=type_hints["client_parameters"])
                check_type(argname="argument http_method", value=http_method, expected_type=type_hints["http_method"])
                check_type(argname="argument oauth_http_parameters", value=oauth_http_parameters, expected_type=type_hints["oauth_http_parameters"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if authorization_endpoint is not None:
                self._values["authorization_endpoint"] = authorization_endpoint
            if client_parameters is not None:
                self._values["client_parameters"] = client_parameters
            if http_method is not None:
                self._values["http_method"] = http_method
            if oauth_http_parameters is not None:
                self._values["oauth_http_parameters"] = oauth_http_parameters

        @builtins.property
        def authorization_endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: authorizationEndpoint: Authorized endpoint address. The maximum length is 127 characters.
            '''
            result = self._values.get("authorization_endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def client_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.ClientParametersProperty"]]:
            '''
            :Property: clientParameters: Customer Parameter Data Structure.
            '''
            result = self._values.get("client_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.ClientParametersProperty"]], result)

        @builtins.property
        def http_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            httpMethod: The method of the probe type. Value:

            - GET
            - POST
            - HEAD
            - DELETE
            - PUT
            - PATCH.
            '''
            result = self._values.get("http_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oauth_http_parameters(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.OauthHttpParametersProperty"]]:
            '''
            :Property: oauthHttpParameters: Request parameters for Oauth Authentication.
            '''
            result = self._values.get("oauth_http_parameters")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosConnection.OauthHttpParametersProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OauthParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosConnection.QueryStringParametersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "is_value_secret": "isValueSecret",
            "key": "key",
            "value": "value",
        },
    )
    class QueryStringParametersProperty:
        def __init__(
            self,
            *,
            is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param is_value_secret: 
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a87f528315c0e58ecfc2e444a18452091fdb327e1ec1a5070cf280150e2e15dc)
                check_type(argname="argument is_value_secret", value=is_value_secret, expected_type=type_hints["is_value_secret"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if is_value_secret is not None:
                self._values["is_value_secret"] = is_value_secret
            if key is not None:
                self._values["key"] = key
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def is_value_secret(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: isValueSecret: Whether it is Authentication.
            '''
            result = self._values.get("is_value_secret")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: Request path parameter key.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: Request path parameter value.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QueryStringParametersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RosConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "connection_name": "connectionName",
        "network_parameters": "networkParameters",
        "auth_parameters": "authParameters",
        "description": "description",
    },
)
class RosConnectionProps:
    def __init__(
        self,
        *,
        connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.NetworkParametersProperty, typing.Dict[builtins.str, typing.Any]]],
        auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.AuthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosConnection``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection

        :param connection_name: 
        :param network_parameters: 
        :param auth_parameters: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1f2eeec36146072ab6565d9fa3c2ec44a684bf9bd241d0284cee9c54ef0976d)
            check_type(argname="argument connection_name", value=connection_name, expected_type=type_hints["connection_name"])
            check_type(argname="argument network_parameters", value=network_parameters, expected_type=type_hints["network_parameters"])
            check_type(argname="argument auth_parameters", value=auth_parameters, expected_type=type_hints["auth_parameters"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "connection_name": connection_name,
            "network_parameters": network_parameters,
        }
        if auth_parameters is not None:
            self._values["auth_parameters"] = auth_parameters
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
        '''
        result = self._values.get("connection_name")
        assert result is not None, "Required property 'connection_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_parameters(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.NetworkParametersProperty]:
        '''
        :Property: networkParameters: Network Configuration Data Structure.
        '''
        result = self._values.get("network_parameters")
        assert result is not None, "Required property 'network_parameters' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.NetworkParametersProperty], result)

    @builtins.property
    def auth_parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.AuthParametersProperty]]:
        '''
        :Property: authParameters: Authentication Data Structure.
        '''
        result = self._values.get("auth_parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.AuthParametersProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The connection configuration description. The maximum length is 255 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.RosRule",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EventBridge::Rule``, which is used to create an event rule for an event bus.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Rule`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc13b5639bd7417d66d906b66bf53a370e79ae5abfbccfbb6d326b221b609ff9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7cfcf0319147ca0336db8c550db372460c1f80fc1fd4071512da659855263236)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EventBusName: The name of the event bus.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEventBusName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule. The ARN is used for authorization.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RuleName: The name of the event rule.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRuleName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b51f46e2b323bfc145490bcc9c53066810c6eb94b1ca936f1637dd35eb7136bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="eventBusName")
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "eventBusName"))

    @event_bus_name.setter
    def event_bus_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcfb4d63f64e17fbcba8566bbbcd44263830be7d48f09be9e6d5e934f1b2f23a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventBusName", value)

    @builtins.property
    @jsii.member(jsii_name="filterPattern")
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "filterPattern"))

    @filter_pattern.setter
    def filter_pattern(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d6a3baaa97d488af2065b6672e5da9330c0f52ce3e442098c894bd9a1239da3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filterPattern", value)

    @builtins.property
    @jsii.member(jsii_name="ruleName")
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ruleName"))

    @rule_name.setter
    def rule_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcfdc4667d17b185a7b5da8a1cd14c04140b8c0b46c1c654da743fc282aad728)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleName", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.TargetsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe8926d8ad8cd676209ae47c35bac30496596a713b69c0079e8bc7860ad070ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d0376daf5f660355d9ddf900f67c56ee01ddc539cd49c90e1b97d6d1acf1953)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6f5a7a53031ed2f15c7c0b622d7fb614a3d44890022b95ac84d0f556c8ad0ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.ConcurrentConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"concurrency": "concurrency"},
    )
    class ConcurrentConfigProperty:
        def __init__(
            self,
            *,
            concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param concurrency: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__13df586e6a5ab5fe0583b82e1b0a8e5915c328c7bdb0fd33bbe6548f9b59c801)
                check_type(argname="argument concurrency", value=concurrency, expected_type=type_hints["concurrency"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "concurrency": concurrency,
            }

        @builtins.property
        def concurrency(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: concurrency: Number of concurrent connections.
            '''
            result = self._values.get("concurrency")
            assert result is not None, "Required property 'concurrency' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConcurrentConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.DeadLetterQueueProperty",
        jsii_struct_bases=[],
        name_mapping={"arn": "arn"},
    )
    class DeadLetterQueueProperty:
        def __init__(
            self,
            *,
            arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bdbdfe6e81c8db0184cc9ec7b18cde1886d4462d4bfd9197a0fa65f57ab11c65)
                check_type(argname="argument arn", value=arn, expected_type=type_hints["arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "arn": arn,
            }

        @builtins.property
        def arn(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: arn: The Alibaba Cloud Resource Name (ARN) of the dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The ARN feature is supported by the following queue types: MNS and Message Queue for Apache RocketMQ.
            '''
            result = self._values.get("arn")
            assert result is not None, "Required property 'arn' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeadLetterQueueProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.ParamListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "form": "form",
            "resource_key": "resourceKey",
            "value": "value",
            "template": "template",
        },
    )
    class ParamListProperty:
        def __init__(
            self,
            *,
            form: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            template: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param form: 
            :param resource_key: 
            :param value: 
            :param template: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7cbc44a0ebe784c2fe1a2239f0ddcdff2e89e13812a6e0ed8169e81920a9a77a)
                check_type(argname="argument form", value=form, expected_type=type_hints["form"])
                check_type(argname="argument resource_key", value=resource_key, expected_type=type_hints["resource_key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
                check_type(argname="argument template", value=template, expected_type=type_hints["template"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "form": form,
                "resource_key": resource_key,
                "value": value,
            }
            if template is not None:
                self._values["template"] = template

        @builtins.property
        def form(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: form: The transformation method.For more information, see Event target parameters.
            '''
            result = self._values.get("form")
            assert result is not None, "Required property 'form' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceKey: The resource key of the transformed event.For more information, see Event target parameters.
            '''
            result = self._values.get("resource_key")
            assert result is not None, "Required property 'resource_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: value: The event value to be transformed.
            '''
            result = self._values.get("value")
            assert result is not None, "Required property 'value' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def template(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: template: The format of the template.
            '''
            result = self._values.get("template")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ParamListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "endpoint": "endpoint",
            "identity": "identity",
            "param_list": "paramList",
            "type": "type",
            "concurrent_config": "concurrentConfig",
            "dead_letter_queue": "deadLetterQueue",
            "errors_tolerance": "errorsTolerance",
            "push_retry_strategy": "pushRetryStrategy",
        },
    )
    class TargetsProperty:
        def __init__(
            self,
            *,
            endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            identity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            param_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ParamListProperty", typing.Dict[builtins.str, typing.Any]]]]],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            concurrent_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.ConcurrentConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            dead_letter_queue: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRule.DeadLetterQueueProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            errors_tolerance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            push_retry_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param endpoint: 
            :param identity: 
            :param param_list: 
            :param type: 
            :param concurrent_config: 
            :param dead_letter_queue: 
            :param errors_tolerance: 
            :param push_retry_strategy: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ffe9db6d519139b42455999db067a693a742784850c81b23650b403cf65d918d)
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument identity", value=identity, expected_type=type_hints["identity"])
                check_type(argname="argument param_list", value=param_list, expected_type=type_hints["param_list"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument concurrent_config", value=concurrent_config, expected_type=type_hints["concurrent_config"])
                check_type(argname="argument dead_letter_queue", value=dead_letter_queue, expected_type=type_hints["dead_letter_queue"])
                check_type(argname="argument errors_tolerance", value=errors_tolerance, expected_type=type_hints["errors_tolerance"])
                check_type(argname="argument push_retry_strategy", value=push_retry_strategy, expected_type=type_hints["push_retry_strategy"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "endpoint": endpoint,
                "identity": identity,
                "param_list": param_list,
                "type": type,
            }
            if concurrent_config is not None:
                self._values["concurrent_config"] = concurrent_config
            if dead_letter_queue is not None:
                self._values["dead_letter_queue"] = dead_letter_queue
            if errors_tolerance is not None:
                self._values["errors_tolerance"] = errors_tolerance
            if push_retry_strategy is not None:
                self._values["push_retry_strategy"] = push_retry_strategy

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endpoint: The endpoint of the event target.
            '''
            result = self._values.get("endpoint")
            assert result is not None, "Required property 'endpoint' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def identity(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: identity: The custom ID of the event target.
            '''
            result = self._values.get("identity")
            assert result is not None, "Required property 'identity' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def param_list(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ParamListProperty"]]]:
            '''
            :Property: paramList: The parameters that the event passes.
            '''
            result = self._values.get("param_list")
            assert result is not None, "Required property 'param_list' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ParamListProperty"]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of the event target.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def concurrent_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ConcurrentConfigProperty"]]:
            '''
            :Property: concurrentConfig: Concurrency control configuration.
            '''
            result = self._values.get("concurrent_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.ConcurrentConfigProperty"]], result)

        @builtins.property
        def dead_letter_queue(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.DeadLetterQueueProperty"]]:
            '''
            :Property: deadLetterQueue: The dead-letter queue. Events that are not processed or whose maximum retries are exceeded are written to the dead-letter queue. The dead-letter queue feature is supported by the following queue types: Message Queue for Apache RocketMQ, Message Service (MNS), Message Queue for Apache Kafka, and EventBridge.
            '''
            result = self._values.get("dead_letter_queue")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.DeadLetterQueueProperty"]], result)

        @builtins.property
        def errors_tolerance(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            errorsTolerance: The fault tolerance policy. Valid values:

            - ALL: allows fault tolerance. If an error occurs, the event processing is not blocked. If the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the message is delivered to the dead-letter queue or discarded based on your configurations.
            - NONE: does not allow fault tolerance. If an error occurs and the message fails to be sent after the maximum number of retries specified by the retry policy is reached, the event processing is blocked.
            '''
            result = self._values.get("errors_tolerance")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def push_retry_strategy(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: pushRetryStrategy: The retry policy that is used to push the event. Valid values: BACKOFF_RETRY: backoff retry. The request can be retried up to three times. The interval between two consecutive retries is a random value between 10 and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. The request can be retried up to 176 times. The interval between two consecutive retries exponentially increases to 512 seconds, and the total retry time is one day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 512, ..., and 512 seconds, including a maximum of one hundred and sixty-seven 512 seconds in total.
            '''
            result = self._values.get("push_retry_strategy")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TargetsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_bus_name": "eventBusName",
        "filter_pattern": "filterPattern",
        "rule_name": "ruleName",
        "targets": "targets",
        "description": "description",
        "status": "status",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule

        :param event_bus_name: 
        :param filter_pattern: 
        :param rule_name: 
        :param targets: 
        :param description: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f572b4c98953756f83a5ac0f4132927c35b8bda9e65062da1a3bcaae30a569c)
            check_type(argname="argument event_bus_name", value=event_bus_name, expected_type=type_hints["event_bus_name"])
            check_type(argname="argument filter_pattern", value=filter_pattern, expected_type=type_hints["filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "event_bus_name": event_bus_name,
            "filter_pattern": filter_pattern,
            "rule_name": rule_name,
            "targets": targets,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: eventBusName: The name of the event bus.
        '''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: filterPattern: The event pattern, in the JSON format.
        '''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ruleName: The name of the event rule.
        '''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]]:
        '''
        :Property: targets: The event target to which events are delivered.
        '''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the event rule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the event rule. Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRule)
class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.Rule",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EventBridge::Rule``, which is used to create an event rule for an event bus.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRule``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93838a325cf693f07463452ecd5b11c0782f604814b02977069320acb6c2f991)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEventBusName")
    def attr_event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EventBusName: The name of the event bus.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEventBusName"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleArn")
    def attr_rule_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleARN: The Alibaba Cloud Resource Name (ARN) of the event rule.

        The ARN is used for authorization.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRuleName")
    def attr_rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RuleName: The name of the event rule.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRuleName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RuleProps":
        return typing.cast("RuleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ee73fb94ddd0bdaeb81da6362e278ad71fafb1cfe61c528aa309f545bbba102)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8674ae5d40ca19dc18bfea603b5f8e7f05fbcec80b580f9eaccdaa9e53347da2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e119c668a387068c98ed3662b1550182105795dc6fc0bef9dd5c5b152453667d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-eventbridge.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "event_bus_name": "eventBusName",
        "filter_pattern": "filterPattern",
        "rule_name": "ruleName",
        "targets": "targets",
        "description": "description",
        "status": "status",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Rule``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-rule

        :param event_bus_name: Property eventBusName: The name of the event bus.
        :param filter_pattern: Property filterPattern: The event pattern, in the JSON format.
        :param rule_name: Property ruleName: The name of the event rule.
        :param targets: Property targets: The event target to which events are delivered.
        :param description: Property description: The description of the event rule.
        :param status: Property status: The status of the event rule. Valid values: ENABLE: The event rule is enabled. It is the default state of the event rule. DISABLE: The event rule is disabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e9b073799151a79aa1e3f05a76f86c2922740ef2ab3b3846a33f1a2e39d381d)
            check_type(argname="argument event_bus_name", value=event_bus_name, expected_type=type_hints["event_bus_name"])
            check_type(argname="argument filter_pattern", value=filter_pattern, expected_type=type_hints["filter_pattern"])
            check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "event_bus_name": event_bus_name,
            "filter_pattern": filter_pattern,
            "rule_name": rule_name,
            "targets": targets,
        }
        if description is not None:
            self._values["description"] = description
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def event_bus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property eventBusName: The name of the event bus.'''
        result = self._values.get("event_bus_name")
        assert result is not None, "Required property 'event_bus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def filter_pattern(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property filterPattern: The event pattern, in the JSON format.'''
        result = self._values.get("filter_pattern")
        assert result is not None, "Required property 'filter_pattern' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def rule_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ruleName: The name of the event rule.'''
        result = self._values.get("rule_name")
        assert result is not None, "Required property 'rule_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]]:
        '''Property targets: The event target to which events are delivered.'''
        result = self._values.get("targets")
        assert result is not None, "Required property 'targets' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the event rule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the event rule.

        Valid values:
        ENABLE: The event rule is enabled. It is the default state of the event rule.
        DISABLE: The event rule is disabled.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApiDestination)
class ApiDestination(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.ApiDestination",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EventBridge::ApiDestination``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApiDestination``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ApiDestinationProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76204729390e69a9553c1272c1756a458e2a4318a713e53b65630c98c32228e8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrApiDestinationName")
    def attr_api_destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ApiDestinationName: The name of the api.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrApiDestinationName"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the api.

        It must be no more than 255 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpApiParameters")
    def attr_http_api_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HttpApiParameters: Configuration information for API endpoints.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHttpApiParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ApiDestinationProps:
        return typing.cast(ApiDestinationProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38e35dc8daaa89de79710b7c38a3f6d9f65fe1748dea81d993a40c02fa51bc9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__065f6ac4291fa1c76e51dd83aa01ba823e7d9a58aa47a312ef6c3278c1aab734)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3d78a88837a811e062cb81214068adb76c11cd6bcc5805691027ddd9e9906f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IConnection)
class Connection(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-eventbridge.Connection",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EventBridge::Connection``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConnection``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ConnectionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d680268bfbee4dc6608da5a57aeabac15202ab33abe92614016a7903b692957)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAuthParameters")
    def attr_auth_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AuthParameters: Authentication Data Structure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAuthParameters"))

    @builtins.property
    @jsii.member(jsii_name="attrConnectionName")
    def attr_connection_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ConnectionName: The connection configuration name.

        The maximum length is 127 characters. Minimum length 2 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrConnectionName"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The connection configuration description.

        The maximum length is 255 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkParameters")
    def attr_network_parameters(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NetworkParameters: Network Configuration Data Structure.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNetworkParameters"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConnectionProps:
        return typing.cast(ConnectionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c0ef5aa087a49e776e8cb9d95c5ee7858533ed395c78c3dbf2686ffc612cb3e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__707ef586e2d47db99612297d656db61877061c491a2ad7880e165ab537b41811)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__640aba0a3016cef0f2af0bc025fc4a7215b389b0bcb2f74ad85d5402743c9927)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "ApiDestination",
    "ApiDestinationProps",
    "Connection",
    "ConnectionProps",
    "IApiDestination",
    "IConnection",
    "IRule",
    "RosApiDestination",
    "RosApiDestinationProps",
    "RosConnection",
    "RosConnectionProps",
    "RosRule",
    "RosRuleProps",
    "Rule",
    "RuleProps",
]

publication.publish()

def _typecheckingstub__086a1e26017a4cc7698791218c52da9f1df99ef015b02d1a69f9f1ce10b77077(
    *,
    api_destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_api_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiDestination.HttpApiParametersProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cac7d9f5f6f71850096f00944dea32d9b8be398942c6e510ff288a89531f5a9b(
    *,
    connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.NetworkParametersProperty, typing.Dict[builtins.str, typing.Any]]],
    auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.AuthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89c0c7db2422aaf614510d9d07ce32b8bf4ced2f5d66e03a07d9ed5b91cdc625(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApiDestinationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20eb3e1f29fcfa4282003586cea6968adccf16861da673e77c76d9603d61a348(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fec0b11ed706a483f5094336fa59a48be7f97d9034b08c4d29a4554689a7a00f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac1b938d45cb5dad389fbf2022473b47a5313525b2d20af75082caf01750de21(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b89206e80d233a51848e58a16d5b2edb01f6778af985caaf975fb7858d4267d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb08b43eb795beef3beb26ed8d64e5cc152ab1977274799719ff934913863429(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApiDestination.HttpApiParametersProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21bb27484904395b6ef802c440734d9a066135decaabab140b4822c41b21a728(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd5e5d5a3cb4cef73fa3a9561df180f35f8e6abceccfe71f6eb97bfaff5ec030(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    method: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75b477ec69774d6df85be90d8879c839d2897b71803c77b9dcd967108b19e0fe(
    *,
    api_destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_api_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApiDestination.HttpApiParametersProperty, typing.Dict[builtins.str, typing.Any]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__351ce76a96c393a1e6eeb74a9c85d1b86bb977a86e5068f0f6b5e6255a9a266a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConnectionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a76279c93e0702bc11b9ae7b60e45339ed5a1619f98b4a161a6b7f4a7b2acf2e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a8f384f4824f6dc6a71a793b1ce5e8a3417900034f8863b401de07865c53dc2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0fdb341099eef371da46d2dd820f669c25651a1ce97b48b8ac76695f2310adc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e58a089970bac48511eb76454d6daa62ee68a215a93be453d14381c42fe2118(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.NetworkParametersProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4c1e9026ea6300b5ef7e60f42bcc8379f4d16ecdf08a2d4709da3711aa23f37(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosConnection.AuthParametersProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd1787523f8c222abc4f45aeb408c34b39393f02e1e3f082516ef9b80aac9b88(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d552d294ebcd5cdd163e210171dd035b9ad7f4c191b535099f2fd5e8c917632d(
    *,
    api_key_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    api_key_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39a3439f48fce561023355325f29d9dfde02963a0cc9bec71a3277a825cfee12(
    *,
    api_key_auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.ApiKeyAuthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    authorization_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    basic_auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.BasicAuthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oauth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.OauthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ceb95535cf6b411a8d509aff18965584f03a3d5503a8b6f1e3399ed7cd3d95a3(
    *,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dbf8e97eb775e1f22c5a073d75a21b5cf4f5679f52438c86c7f72218254d756(
    *,
    is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__675ce94a4bbedd0b963d3c35c3b57465105c0fc04efe284664b83e02d569225e(
    *,
    client_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_secret: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b517a684cd617e4e6c7c08465a9ceb084e886c27dc8d914cf35b306ee998ea2(
    *,
    is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57608e202346abeb64f0b038d61704e23d8503bed89031f52bde435bbbfc15ec(
    *,
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vswitche_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff3504691b8e9bdfd71630005f8b249b5648a92ffadd0f205ab99ce2a0c424d8(
    *,
    body_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.BodyParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    header_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.HeaderParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    query_string_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.QueryStringParametersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bd9c8f61711baf6f8a738c70c76f428c3f2f71fb07cf86d1cb2c1fa217acd18(
    *,
    authorization_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    client_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.ClientParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    http_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oauth_http_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.OauthHttpParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a87f528315c0e58ecfc2e444a18452091fdb327e1ec1a5070cf280150e2e15dc(
    *,
    is_value_secret: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1f2eeec36146072ab6565d9fa3c2ec44a684bf9bd241d0284cee9c54ef0976d(
    *,
    connection_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_parameters: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.NetworkParametersProperty, typing.Dict[builtins.str, typing.Any]]],
    auth_parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosConnection.AuthParametersProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc13b5639bd7417d66d906b66bf53a370e79ae5abfbccfbb6d326b221b609ff9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cfcf0319147ca0336db8c550db372460c1f80fc1fd4071512da659855263236(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b51f46e2b323bfc145490bcc9c53066810c6eb94b1ca936f1637dd35eb7136bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcfb4d63f64e17fbcba8566bbbcd44263830be7d48f09be9e6d5e934f1b2f23a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d6a3baaa97d488af2065b6672e5da9330c0f52ce3e442098c894bd9a1239da3(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcfdc4667d17b185a7b5da8a1cd14c04140b8c0b46c1c654da743fc282aad728(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe8926d8ad8cd676209ae47c35bac30496596a713b69c0079e8bc7860ad070ec(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.TargetsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d0376daf5f660355d9ddf900f67c56ee01ddc539cd49c90e1b97d6d1acf1953(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6f5a7a53031ed2f15c7c0b622d7fb614a3d44890022b95ac84d0f556c8ad0ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13df586e6a5ab5fe0583b82e1b0a8e5915c328c7bdb0fd33bbe6548f9b59c801(
    *,
    concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdbdfe6e81c8db0184cc9ec7b18cde1886d4462d4bfd9197a0fa65f57ab11c65(
    *,
    arn: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cbc44a0ebe784c2fe1a2239f0ddcdff2e89e13812a6e0ed8169e81920a9a77a(
    *,
    form: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    template: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffe9db6d519139b42455999db067a693a742784850c81b23650b403cf65d918d(
    *,
    endpoint: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    identity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    param_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ParamListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    concurrent_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.ConcurrentConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dead_letter_queue: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.DeadLetterQueueProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    errors_tolerance: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    push_retry_strategy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f572b4c98953756f83a5ac0f4132927c35b8bda9e65062da1a3bcaae30a569c(
    *,
    event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93838a325cf693f07463452ecd5b11c0782f604814b02977069320acb6c2f991(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ee73fb94ddd0bdaeb81da6362e278ad71fafb1cfe61c528aa309f545bbba102(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8674ae5d40ca19dc18bfea603b5f8e7f05fbcec80b580f9eaccdaa9e53347da2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e119c668a387068c98ed3662b1550182105795dc6fc0bef9dd5c5b152453667d(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e9b073799151a79aa1e3f05a76f86c2922740ef2ab3b3846a33f1a2e39d381d(
    *,
    event_bus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    filter_pattern: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    targets: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.TargetsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76204729390e69a9553c1272c1756a458e2a4318a713e53b65630c98c32228e8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ApiDestinationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38e35dc8daaa89de79710b7c38a3f6d9f65fe1748dea81d993a40c02fa51bc9c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__065f6ac4291fa1c76e51dd83aa01ba823e7d9a58aa47a312ef6c3278c1aab734(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3d78a88837a811e062cb81214068adb76c11cd6bcc5805691027ddd9e9906f7(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d680268bfbee4dc6608da5a57aeabac15202ab33abe92614016a7903b692957(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConnectionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c0ef5aa087a49e776e8cb9d95c5ee7858533ed395c78c3dbf2686ffc612cb3e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__707ef586e2d47db99612297d656db61877061c491a2ad7880e165ab537b41811(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__640aba0a3016cef0f2af0bc025fc4a7215b389b0bcb2f74ad85d5402743c9927(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
