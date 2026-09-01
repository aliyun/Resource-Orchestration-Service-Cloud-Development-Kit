'''
## Aliyun ROS ELASTICSEARCHSERVERLESS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ELASTICSEARCHSERVERLESS from '@alicloud/ros-cdk-elasticsearchserverless';
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
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.AppProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "authentication": "authentication",
        "quota_info": "quotaInfo",
        "app_version": "appVersion",
        "description": "description",
        "log_pro_configuration": "logProConfiguration",
        "network": "network",
        "private_network": "privateNetwork",
        "scenario": "scenario",
    },
)
class AppProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        authentication: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.AuthenticationProperty", typing.Dict[builtins.str, typing.Any]]],
        quota_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.QuotaInfoProperty", typing.Dict[builtins.str, typing.Any]]],
        app_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_pro_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.LogProConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.NetworkProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        private_network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.PrivateNetworkProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        scenario: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``App``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app

        :param app_name: Property appName: The name of the elastic search serverless version app.
        :param authentication: Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
        :param quota_info: Property quotaInfo: The quota info of the app.
        :param app_version: Property appVersion: The version of the app.
        :param description: Property description: The description of the app.
        :param log_pro_configuration: Property logProConfiguration: The log pro configuration of the app.
        :param network: Property network: The public network of the app.
        :param private_network: Property privateNetwork: The private network of the app.
        :param scenario: Property scenario: The scenario of the app.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65211bcc0a270be0bf402843d0d3f364334fd4b6effd3771418157fced31fd0e)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument authentication", value=authentication, expected_type=type_hints["authentication"])
            check_type(argname="argument quota_info", value=quota_info, expected_type=type_hints["quota_info"])
            check_type(argname="argument app_version", value=app_version, expected_type=type_hints["app_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument log_pro_configuration", value=log_pro_configuration, expected_type=type_hints["log_pro_configuration"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument private_network", value=private_network, expected_type=type_hints["private_network"])
            check_type(argname="argument scenario", value=scenario, expected_type=type_hints["scenario"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "authentication": authentication,
            "quota_info": quota_info,
        }
        if app_version is not None:
            self._values["app_version"] = app_version
        if description is not None:
            self._values["description"] = description
        if log_pro_configuration is not None:
            self._values["log_pro_configuration"] = log_pro_configuration
        if network is not None:
            self._values["network"] = network
        if private_network is not None:
            self._values["private_network"] = private_network
        if scenario is not None:
            self._values["scenario"] = scenario

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property appName: The name of the elastic search serverless version app.'''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def authentication(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.AuthenticationProperty"]:
        '''Property authentication: The authentication of the app.

        Currently only supports specifying passwords for initial users
        '''
        result = self._values.get("authentication")
        assert result is not None, "Required property 'authentication' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.AuthenticationProperty"], result)

    @builtins.property
    def quota_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.QuotaInfoProperty"]:
        '''Property quotaInfo: The quota info of the app.'''
        result = self._values.get("quota_info")
        assert result is not None, "Required property 'quota_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.QuotaInfoProperty"], result)

    @builtins.property
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property appVersion: The version of the app.'''
        result = self._values.get("app_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the app.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_pro_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.LogProConfigurationProperty"]]:
        '''Property logProConfiguration: The log pro configuration of the app.'''
        result = self._values.get("log_pro_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.LogProConfigurationProperty"]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.NetworkProperty"]]]]:
        '''Property network: The public network of the app.'''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.NetworkProperty"]]]], result)

    @builtins.property
    def private_network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkProperty"]]]]:
        '''Property privateNetwork: The private network of the app.'''
        result = self._values.get("private_network")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkProperty"]]]], result)

    @builtins.property
    def scenario(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scenario: The scenario of the app.'''
        result = self._values.get("scenario")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.EndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint_zones": "endpointZones",
        "name": "name",
        "security_group_ids": "securityGroupIds",
        "type": "type",
        "vpc_id": "vpcId",
    },
)
class EndpointProps:
    def __init__(
        self,
        *,
        endpoint_zones: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosEndpoint.EndpointZonesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Endpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint

        :param endpoint_zones: Property endpointZones: The zone configurations of the endpoint.
        :param name: Property name: The name of the endpoint.
        :param security_group_ids: Property securityGroupIds: A list of security groups.
        :param type: Property type: Endpoint type, default value: VPC.
        :param vpc_id: Property vpcId: The vpc id of the endpoint.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8273b85aeba964f81791deec4e1b1bab6a01a06616e79cf32cd42bd59bad7be)
            check_type(argname="argument endpoint_zones", value=endpoint_zones, expected_type=type_hints["endpoint_zones"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint_zones": endpoint_zones,
        }
        if name is not None:
            self._values["name"] = name
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if type is not None:
            self._values["type"] = type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def endpoint_zones(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpoint.EndpointZonesProperty"]]]:
        '''Property endpointZones: The zone configurations of the endpoint.'''
        result = self._values.get("endpoint_zones")
        assert result is not None, "Required property 'endpoint_zones' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpoint.EndpointZonesProperty"]]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property name: The name of the endpoint.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityGroupIds: A list of security groups.'''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property type: Endpoint type, default value: VPC.'''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The vpc id of the endpoint.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-elasticsearchserverless.IApp")
class IApp(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``App``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The Id of the ElasticSearch serverless instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEsDomain")
    def attr_private_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateESDomain: The private network domain of the app.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrivateKibanaDomain")
    def attr_private_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateKibanaDomain: The private network kibana domain of the app.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicEsDomain")
    def attr_public_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicESDomain: The public network domain of the app.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicKibanaDomain")
    def attr_public_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicKibanaDomain: The public network kibana domain of the app.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the app.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        ...


class _IAppProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``App``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-elasticsearchserverless.IApp"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The Id of the ElasticSearch serverless instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEsDomain")
    def attr_private_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateESDomain: The private network domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateKibanaDomain")
    def attr_private_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateKibanaDomain: The private network kibana domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicEsDomain")
    def attr_public_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicESDomain: The public network domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicKibanaDomain")
    def attr_public_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicKibanaDomain: The public network kibana domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        return typing.cast(AppProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IApp).__jsii_proxy_class__ = lambda : _IAppProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-elasticsearchserverless.IEndpoint")
class IEndpoint(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Endpoint``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain of the endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndpointId: The Id of the endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPvlEndpointId")
    def attr_pvl_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PvlEndpointId: The Id of the private link endpoint.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EndpointProps:
        ...


class _IEndpointProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Endpoint``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-elasticsearchserverless.IEndpoint"

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain of the endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndpointId: The Id of the endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPvlEndpointId")
    def attr_pvl_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PvlEndpointId: The Id of the private link endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPvlEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EndpointProps:
        return typing.cast(EndpointProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IEndpoint).__jsii_proxy_class__ = lambda : _IEndpointProxy


class RosApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ElasticSearchServerless::App``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``App`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08868368f38f5c419f15d02c0b18c2bc4398f0292acabfef6e904630614a04b9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__01c165dcd19cf1cc87722b6ba8782082a9c7e00eb23f299cb83faeed4325524e)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The Id of the ElasticSearch serverless instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEsDomain")
    def attr_private_es_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateESDomain: The private network domain of the app.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateKibanaDomain")
    def attr_private_kibana_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateKibanaDomain: The private network kibana domain of the app.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicEsDomain")
    def attr_public_es_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicESDomain: The public network domain of the app.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicKibanaDomain")
    def attr_public_kibana_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicKibanaDomain: The public network kibana domain of the app.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Username: The username of the app.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="appName")
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: The name of the elastic search serverless version app.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "appName"))

    @app_name.setter
    def app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26bd7bdcf634d384facf0f26b22017e19dada7931ec22145af7774c13122acfb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appName", value)

    @builtins.property
    @jsii.member(jsii_name="authentication")
    def authentication(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.AuthenticationProperty"]:
        '''
        :Property: authentication: The authentication of the app. Currently only supports specifying passwords for initial users
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.AuthenticationProperty"], jsii.get(self, "authentication"))

    @authentication.setter
    def authentication(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.AuthenticationProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51bb57800bb36ed13f331a66f26408e5f5ebc07709e89635ee6af6deb8ce86d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authentication", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb4d54685c8c71011a238719c0536d016df89814e8caf8c2afcc3fd6c116192b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="quotaInfo")
    def quota_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.QuotaInfoProperty"]:
        '''
        :Property: quotaInfo: The quota info of the app.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.QuotaInfoProperty"], jsii.get(self, "quotaInfo"))

    @quota_info.setter
    def quota_info(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.QuotaInfoProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74eb4afa243e7cbda28389e58676f594d2640144e00f5ff7d3ed27eae6f53ab6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quotaInfo", value)

    @builtins.property
    @jsii.member(jsii_name="appVersion")
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appVersion: The version of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "appVersion"))

    @app_version.setter
    def app_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea1d0a8b3e682eb6ab1589daf0685d2ecb6b51a754011112751f74d7f9d94744)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "appVersion", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a98874a690a1c75bef50bb4a8bf380d83ff6799d236050c31bb54a1eab590c3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="logProConfiguration")
    def log_pro_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.LogProConfigurationProperty"]]:
        '''
        :Property: logProConfiguration: The log pro configuration of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.LogProConfigurationProperty"]], jsii.get(self, "logProConfiguration"))

    @log_pro_configuration.setter
    def log_pro_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.LogProConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac762d9322106d6b2b97d30eac16a812d8a84826243a4273e72a8ffebb469f54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logProConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="network")
    def network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.NetworkProperty"]]]]:
        '''
        :Property: network: The public network of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.NetworkProperty"]]]], jsii.get(self, "network"))

    @network.setter
    def network(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.NetworkProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52735610ac8d6f4c6da36c52c75fc688cba9f2111a79c1c3a366aeea5d4fe37a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "network", value)

    @builtins.property
    @jsii.member(jsii_name="privateNetwork")
    def private_network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkProperty"]]]]:
        '''
        :Property: privateNetwork: The private network of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkProperty"]]]], jsii.get(self, "privateNetwork"))

    @private_network.setter
    def private_network(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4f354252e5fb1d3dfe78c9ad8b8e542a5a5c3fca420791df260fed8aa70ea83)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateNetwork", value)

    @builtins.property
    @jsii.member(jsii_name="scenario")
    def scenario(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scenario: The scenario of the app.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scenario"))

    @scenario.setter
    def scenario(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a03cb10d7ba5ff975d9ee6229b7fd7054fc420bb52a5d81ad3950b7fa7150936)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scenario", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.AuthenticationProperty",
        jsii_struct_bases=[],
        name_mapping={"basic_auth": "basicAuth"},
    )
    class AuthenticationProperty:
        def __init__(
            self,
            *,
            basic_auth: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.BasicAuthProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param basic_auth: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dea805a6351a0aa94388c7a5dca17d49805e78e738ea44810bb44e4b4f40d8c5)
                check_type(argname="argument basic_auth", value=basic_auth, expected_type=type_hints["basic_auth"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "basic_auth": basic_auth,
            }

        @builtins.property
        def basic_auth(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.BasicAuthProperty"]]]:
            '''
            :Property: basicAuth: The basic authentication of the app.
            '''
            result = self._values.get("basic_auth")
            assert result is not None, "Required property 'basic_auth' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.BasicAuthProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthenticationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.BasicAuthProperty",
        jsii_struct_bases=[],
        name_mapping={"password": "password"},
    )
    class BasicAuthProperty:
        def __init__(
            self,
            *,
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param password: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__de22fcae2d65dfea4bb3803dcc67a58af47f7a77498652524623ab8038e18f07)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "password": password,
            }

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: The password of the user.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BasicAuthProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.LogProConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "advanced_indexing_optimization": "advancedIndexingOptimization",
            "auto_data_organization": "autoDataOrganization",
            "expiration_days": "expirationDays",
            "log_pro_dynamic_field_config_type": "logProDynamicFieldConfigType",
            "write_with_primary_key": "writeWithPrimaryKey",
        },
    )
    class LogProConfigurationProperty:
        def __init__(
            self,
            *,
            advanced_indexing_optimization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            auto_data_organization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            expiration_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            log_pro_dynamic_field_config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            write_with_primary_key: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param advanced_indexing_optimization: 
            :param auto_data_organization: 
            :param expiration_days: 
            :param log_pro_dynamic_field_config_type: 
            :param write_with_primary_key: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b597ad011df4e3ddd76da9ced8f42f1ccaaba96117e270e971968112cc25794c)
                check_type(argname="argument advanced_indexing_optimization", value=advanced_indexing_optimization, expected_type=type_hints["advanced_indexing_optimization"])
                check_type(argname="argument auto_data_organization", value=auto_data_organization, expected_type=type_hints["auto_data_organization"])
                check_type(argname="argument expiration_days", value=expiration_days, expected_type=type_hints["expiration_days"])
                check_type(argname="argument log_pro_dynamic_field_config_type", value=log_pro_dynamic_field_config_type, expected_type=type_hints["log_pro_dynamic_field_config_type"])
                check_type(argname="argument write_with_primary_key", value=write_with_primary_key, expected_type=type_hints["write_with_primary_key"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "advanced_indexing_optimization": advanced_indexing_optimization,
                "auto_data_organization": auto_data_organization,
                "expiration_days": expiration_days,
                "log_pro_dynamic_field_config_type": log_pro_dynamic_field_config_type,
                "write_with_primary_key": write_with_primary_key,
            }

        @builtins.property
        def advanced_indexing_optimization(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: advancedIndexingOptimization: Whether to enable advanced indexing optimization.
            '''
            result = self._values.get("advanced_indexing_optimization")
            assert result is not None, "Required property 'advanced_indexing_optimization' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auto_data_organization(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: autoDataOrganization: Whether to enable auto data organization.
            '''
            result = self._values.get("auto_data_organization")
            assert result is not None, "Required property 'auto_data_organization' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def expiration_days(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: expirationDays: The expiration days of the app.
            '''
            result = self._values.get("expiration_days")
            assert result is not None, "Required property 'expiration_days' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def log_pro_dynamic_field_config_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: logProDynamicFieldConfigType: The log pro dynamic field config type of the app.
            '''
            result = self._values.get("log_pro_dynamic_field_config_type")
            assert result is not None, "Required property 'log_pro_dynamic_field_config_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def write_with_primary_key(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: writeWithPrimaryKey: Whether to enable write with primary key.
            '''
            result = self._values.get("write_with_primary_key")
            assert result is not None, "Required property 'write_with_primary_key' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogProConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.NetworkProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enabled": "enabled",
            "type": "type",
            "white_ip_group": "whiteIpGroup",
        },
    )
    class NetworkProperty:
        def __init__(
            self,
            *,
            enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            white_ip_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.WhiteIpGroupProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param enabled: 
            :param type: 
            :param white_ip_group: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3d82bbeca31639a6f499f941c7672e59819c433de509cf500773b7a0490d9331)
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument white_ip_group", value=white_ip_group, expected_type=type_hints["white_ip_group"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enabled": enabled,
                "type": type,
            }
            if white_ip_group is not None:
                self._values["white_ip_group"] = white_ip_group

        @builtins.property
        def enabled(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enabled: Whether to enable public network access.
            '''
            result = self._values.get("enabled")
            assert result is not None, "Required property 'enabled' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of the network.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def white_ip_group(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.WhiteIpGroupProperty"]]]]:
            '''
            :Property: whiteIpGroup: The white ip group of the app.
            '''
            result = self._values.get("white_ip_group")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.WhiteIpGroupProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NetworkProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enabled": "enabled",
            "pvl_endpoint_id": "pvlEndpointId",
            "type": "type",
            "vpc_id": "vpcId",
            "white_ip_group": "whiteIpGroup",
        },
    )
    class PrivateNetworkProperty:
        def __init__(
            self,
            *,
            enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            pvl_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            white_ip_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosApp.PrivateNetworkWhiteIpGroupProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param enabled: 
            :param pvl_endpoint_id: 
            :param type: 
            :param vpc_id: 
            :param white_ip_group: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__aae4196972c05f936acd103970cf494873decc26f394203bc55cbbb45ed82549)
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
                check_type(argname="argument pvl_endpoint_id", value=pvl_endpoint_id, expected_type=type_hints["pvl_endpoint_id"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument white_ip_group", value=white_ip_group, expected_type=type_hints["white_ip_group"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "enabled": enabled,
                "pvl_endpoint_id": pvl_endpoint_id,
                "type": type,
                "vpc_id": vpc_id,
            }
            if white_ip_group is not None:
                self._values["white_ip_group"] = white_ip_group

        @builtins.property
        def enabled(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: enabled: Whether to enable private network access.
            '''
            result = self._values.get("enabled")
            assert result is not None, "Required property 'enabled' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def pvl_endpoint_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: pvlEndpointId: The pvl endpoint id of the app.
            '''
            result = self._values.get("pvl_endpoint_id")
            assert result is not None, "Required property 'pvl_endpoint_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The type of the network.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: The vpc id of the app.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def white_ip_group(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkWhiteIpGroupProperty"]]]]:
            '''
            :Property: whiteIpGroup: The white ip group of the app.
            '''
            result = self._values.get("white_ip_group")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosApp.PrivateNetworkWhiteIpGroupProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrivateNetworkProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.PrivateNetworkWhiteIpGroupProperty",
        jsii_struct_bases=[],
        name_mapping={"group_name": "groupName", "ips": "ips"},
    )
    class PrivateNetworkWhiteIpGroupProperty:
        def __init__(
            self,
            *,
            group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            ips: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param group_name: 
            :param ips: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7117812471e74c6a03da7695babd0f571b3a5ab6d3b0be8221099fecf9722c17)
                check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
                check_type(argname="argument ips", value=ips, expected_type=type_hints["ips"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "group_name": group_name,
            }
            if ips is not None:
                self._values["ips"] = ips

        @builtins.property
        def group_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: groupName: The name of the white ip group.
            '''
            result = self._values.get("group_name")
            assert result is not None, "Required property 'group_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def ips(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ips: The ips of the white ip group.
            '''
            result = self._values.get("ips")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrivateNetworkWhiteIpGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.QuotaInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "app_type": "appType",
            "elastic": "elastic",
            "max_cu": "maxCu",
            "min_cu": "minCu",
            "read_cu": "readCu",
            "write_cu": "writeCu",
        },
    )
    class QuotaInfoProperty:
        def __init__(
            self,
            *,
            app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            elastic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            min_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            read_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            write_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param app_type: 
            :param elastic: 
            :param max_cu: 
            :param min_cu: 
            :param read_cu: 
            :param write_cu: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__92657409ed1e3d7e8b8d91af0d19ccf42a8e51f92075419e625c2acd6fbe6557)
                check_type(argname="argument app_type", value=app_type, expected_type=type_hints["app_type"])
                check_type(argname="argument elastic", value=elastic, expected_type=type_hints["elastic"])
                check_type(argname="argument max_cu", value=max_cu, expected_type=type_hints["max_cu"])
                check_type(argname="argument min_cu", value=min_cu, expected_type=type_hints["min_cu"])
                check_type(argname="argument read_cu", value=read_cu, expected_type=type_hints["read_cu"])
                check_type(argname="argument write_cu", value=write_cu, expected_type=type_hints["write_cu"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "app_type": app_type,
            }
            if elastic is not None:
                self._values["elastic"] = elastic
            if max_cu is not None:
                self._values["max_cu"] = max_cu
            if min_cu is not None:
                self._values["min_cu"] = min_cu
            if read_cu is not None:
                self._values["read_cu"] = read_cu
            if write_cu is not None:
                self._values["write_cu"] = write_cu

        @builtins.property
        def app_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: appType: The type of the app.
            '''
            result = self._values.get("app_type")
            assert result is not None, "Required property 'app_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def elastic(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: elastic: Whether the app is elastic.
            '''
            result = self._values.get("elastic")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_cu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxCu: The max cu of the app.
            '''
            result = self._values.get("max_cu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def min_cu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: minCu: The min cu of the app.
            '''
            result = self._values.get("min_cu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def read_cu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readCu: The read cu of the app.
            '''
            result = self._values.get("read_cu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def write_cu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: writeCu: The write cu of the app.
            '''
            result = self._values.get("write_cu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "QuotaInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosApp.WhiteIpGroupProperty",
        jsii_struct_bases=[],
        name_mapping={"group_name": "groupName", "ips": "ips"},
    )
    class WhiteIpGroupProperty:
        def __init__(
            self,
            *,
            group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            ips: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param group_name: 
            :param ips: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__31d9986cb59e2a5e03fa5437d4512b428066cee8f0fcdaa66028f016beb5bdb9)
                check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
                check_type(argname="argument ips", value=ips, expected_type=type_hints["ips"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "group_name": group_name,
            }
            if ips is not None:
                self._values["ips"] = ips

        @builtins.property
        def group_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: groupName: The name of the white ip group.
            '''
            result = self._values.get("group_name")
            assert result is not None, "Required property 'group_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def ips(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ips: The ips of the white ip group.
            '''
            result = self._values.get("ips")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WhiteIpGroupProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "app_name": "appName",
        "authentication": "authentication",
        "quota_info": "quotaInfo",
        "app_version": "appVersion",
        "description": "description",
        "log_pro_configuration": "logProConfiguration",
        "network": "network",
        "private_network": "privateNetwork",
        "scenario": "scenario",
    },
)
class RosAppProps:
    def __init__(
        self,
        *,
        app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        authentication: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.AuthenticationProperty, typing.Dict[builtins.str, typing.Any]]],
        quota_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.QuotaInfoProperty, typing.Dict[builtins.str, typing.Any]]],
        app_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_pro_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.LogProConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.NetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        private_network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.PrivateNetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        scenario: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app

        :param app_name: 
        :param authentication: 
        :param quota_info: 
        :param app_version: 
        :param description: 
        :param log_pro_configuration: 
        :param network: 
        :param private_network: 
        :param scenario: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e95a1b08353312c803d25edee983ce01230d80e1b63f07350920fe471d96b6f7)
            check_type(argname="argument app_name", value=app_name, expected_type=type_hints["app_name"])
            check_type(argname="argument authentication", value=authentication, expected_type=type_hints["authentication"])
            check_type(argname="argument quota_info", value=quota_info, expected_type=type_hints["quota_info"])
            check_type(argname="argument app_version", value=app_version, expected_type=type_hints["app_version"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument log_pro_configuration", value=log_pro_configuration, expected_type=type_hints["log_pro_configuration"])
            check_type(argname="argument network", value=network, expected_type=type_hints["network"])
            check_type(argname="argument private_network", value=private_network, expected_type=type_hints["private_network"])
            check_type(argname="argument scenario", value=scenario, expected_type=type_hints["scenario"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "app_name": app_name,
            "authentication": authentication,
            "quota_info": quota_info,
        }
        if app_version is not None:
            self._values["app_version"] = app_version
        if description is not None:
            self._values["description"] = description
        if log_pro_configuration is not None:
            self._values["log_pro_configuration"] = log_pro_configuration
        if network is not None:
            self._values["network"] = network
        if private_network is not None:
            self._values["private_network"] = private_network
        if scenario is not None:
            self._values["scenario"] = scenario

    @builtins.property
    def app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: appName: The name of the elastic search serverless version app.
        '''
        result = self._values.get("app_name")
        assert result is not None, "Required property 'app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def authentication(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.AuthenticationProperty]:
        '''
        :Property: authentication: The authentication of the app. Currently only supports specifying passwords for initial users
        '''
        result = self._values.get("authentication")
        assert result is not None, "Required property 'authentication' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.AuthenticationProperty], result)

    @builtins.property
    def quota_info(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.QuotaInfoProperty]:
        '''
        :Property: quotaInfo: The quota info of the app.
        '''
        result = self._values.get("quota_info")
        assert result is not None, "Required property 'quota_info' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.QuotaInfoProperty], result)

    @builtins.property
    def app_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: appVersion: The version of the app.
        '''
        result = self._values.get("app_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the app.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_pro_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.LogProConfigurationProperty]]:
        '''
        :Property: logProConfiguration: The log pro configuration of the app.
        '''
        result = self._values.get("log_pro_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.LogProConfigurationProperty]], result)

    @builtins.property
    def network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.NetworkProperty]]]]:
        '''
        :Property: network: The public network of the app.
        '''
        result = self._values.get("network")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.NetworkProperty]]]], result)

    @builtins.property
    def private_network(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.PrivateNetworkProperty]]]]:
        '''
        :Property: privateNetwork: The private network of the app.
        '''
        result = self._values.get("private_network")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.PrivateNetworkProperty]]]], result)

    @builtins.property
    def scenario(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: scenario: The scenario of the app.
        '''
        result = self._values.get("scenario")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEndpoint(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosEndpoint",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ElasticSearchServerless::Endpoint``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Endpoint`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEndpointProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31842095e62277980570e19d70e76a24c020696faf80adc1ba324b2e3fe4178c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__419f18244bcfe60528ba3d8c235b29670770ee3d25e4e4efbab6b0fc36e02cae)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domain: The domain of the endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndpointId: The Id of the endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPvlEndpointId")
    def attr_pvl_endpoint_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PvlEndpointId: The Id of the private link endpoint.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPvlEndpointId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a778b3cf143cfb45171d83961d35e307cb00e849b898105fe888e43b64c6fe64)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endpointZones")
    def endpoint_zones(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpoint.EndpointZonesProperty"]]]:
        '''
        :Property: endpointZones: The zone configurations of the endpoint.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpoint.EndpointZonesProperty"]]], jsii.get(self, "endpointZones"))

    @endpoint_zones.setter
    def endpoint_zones(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosEndpoint.EndpointZonesProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8907a5493de7127c954991f75287dfbbb776df0577d9c96187485538a8b9d411)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endpointZones", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d57b3f89d34d4486833004b6a04a5cc2635d5b9ccb6de2658d408f452b1aef8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupIds")
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupIds: A list of security groups.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityGroupIds"))

    @security_group_ids.setter
    def security_group_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05cf4c88e0b1f53a9efc1e0042beebdf6031305c895642b798046df8d2d39e02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupIds", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: Endpoint type, default value: VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84b5a25e848a1fb4ebcc3cdc451edf7abb9011ba85480b4b70988da9163ac880)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The vpc id of the endpoint.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2edec5163fe38e8433037fd9eb84265a7ed8539a6a103fe7d32d5c9262cc760a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosEndpoint.EndpointZonesProperty",
        jsii_struct_bases=[],
        name_mapping={"v_switch_id": "vSwitchId", "zone_id": "zoneId"},
    )
    class EndpointZonesProperty:
        def __init__(
            self,
            *,
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param v_switch_id: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d0398de2eb2afaef75146e4eea92255b2a13a061c3ba0f1d6eeea2cbfc13f83a)
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "v_switch_id": v_switch_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: Virtual switch ID.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: Availability zone ID.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EndpointZonesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.RosEndpointProps",
    jsii_struct_bases=[],
    name_mapping={
        "endpoint_zones": "endpointZones",
        "name": "name",
        "security_group_ids": "securityGroupIds",
        "type": "type",
        "vpc_id": "vpcId",
    },
)
class RosEndpointProps:
    def __init__(
        self,
        *,
        endpoint_zones: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpoint.EndpointZonesProperty, typing.Dict[builtins.str, typing.Any]]]]],
        name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosEndpoint``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint

        :param endpoint_zones: 
        :param name: 
        :param security_group_ids: 
        :param type: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a19ec1b5ea809a4fa0ebbc1760bbc27fd7631be841032894ea758ca049e47320)
            check_type(argname="argument endpoint_zones", value=endpoint_zones, expected_type=type_hints["endpoint_zones"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument security_group_ids", value=security_group_ids, expected_type=type_hints["security_group_ids"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "endpoint_zones": endpoint_zones,
        }
        if name is not None:
            self._values["name"] = name
        if security_group_ids is not None:
            self._values["security_group_ids"] = security_group_ids
        if type is not None:
            self._values["type"] = type
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def endpoint_zones(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpoint.EndpointZonesProperty]]]:
        '''
        :Property: endpointZones: The zone configurations of the endpoint.
        '''
        result = self._values.get("endpoint_zones")
        assert result is not None, "Required property 'endpoint_zones' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpoint.EndpointZonesProperty]]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: name: The name of the endpoint.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityGroupIds: A list of security groups.
        '''
        result = self._values.get("security_group_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: type: Endpoint type, default value: VPC.
        '''
        result = self._values.get("type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The vpc id of the endpoint.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEndpointProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IApp)
class App(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.App",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ElasticSearchServerless::App``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AppProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b17ae71d61ca449247a9d18c950044cecf6e2ad6ca6bdb770f01dd4da4cd324b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The Id of the ElasticSearch serverless instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateEsDomain")
    def attr_private_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateESDomain: The private network domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateKibanaDomain")
    def attr_private_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrivateKibanaDomain: The private network kibana domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrivateKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicEsDomain")
    def attr_public_es_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicESDomain: The public network domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicEsDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicKibanaDomain")
    def attr_public_kibana_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicKibanaDomain: The public network kibana domain of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicKibanaDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrUsername")
    def attr_username(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Username: The username of the app.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUsername"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AppProps:
        return typing.cast(AppProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__497849999e1a1c4934662c021b0b19530731c99bf4a8eabbf787ecf6f4b13cb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df953a64d2c0f620db957e7c67c5c4315b9f4df2add415e8f2f8aa3112d7e2e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c95c4f5e5c715d75b918131fa84aa4472b2b7ab2fa494a822486608fc5084a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IEndpoint)
class Endpoint(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-elasticsearchserverless.Endpoint",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ElasticSearchServerless::Endpoint``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEndpoint``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[EndpointProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd36feba5f6f7fee22b5ec7b29d7aa6f1d7e343f143d5d276102a74de104d207)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Domain: The domain of the endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpointId")
    def attr_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndpointId: The Id of the endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="attrPvlEndpointId")
    def attr_pvl_endpoint_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PvlEndpointId: The Id of the private link endpoint.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPvlEndpointId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> EndpointProps:
        return typing.cast(EndpointProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df1afe1e49c7e03029aaba1eb3ea42849f19447342ff5b839725e4c492332b6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__072e5cccb8073409861b91778dbdfffe91fb3dee9c2335a3f1c2ba169823f47e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dc046ad5a7c410a488c571dacce09836fe2093eaf636b1a582b8b31b036315a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "App",
    "AppProps",
    "Endpoint",
    "EndpointProps",
    "IApp",
    "IEndpoint",
    "RosApp",
    "RosAppProps",
    "RosEndpoint",
    "RosEndpointProps",
]

publication.publish()

def _typecheckingstub__65211bcc0a270be0bf402843d0d3f364334fd4b6effd3771418157fced31fd0e(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    authentication: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.AuthenticationProperty, typing.Dict[builtins.str, typing.Any]]],
    quota_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.QuotaInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    app_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_pro_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.LogProConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.NetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    private_network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.PrivateNetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    scenario: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8273b85aeba964f81791deec4e1b1bab6a01a06616e79cf32cd42bd59bad7be(
    *,
    endpoint_zones: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpoint.EndpointZonesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08868368f38f5c419f15d02c0b18c2bc4398f0292acabfef6e904630614a04b9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01c165dcd19cf1cc87722b6ba8782082a9c7e00eb23f299cb83faeed4325524e(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26bd7bdcf634d384facf0f26b22017e19dada7931ec22145af7774c13122acfb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51bb57800bb36ed13f331a66f26408e5f5ebc07709e89635ee6af6deb8ce86d0(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.AuthenticationProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb4d54685c8c71011a238719c0536d016df89814e8caf8c2afcc3fd6c116192b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74eb4afa243e7cbda28389e58676f594d2640144e00f5ff7d3ed27eae6f53ab6(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.QuotaInfoProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea1d0a8b3e682eb6ab1589daf0685d2ecb6b51a754011112751f74d7f9d94744(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a98874a690a1c75bef50bb4a8bf380d83ff6799d236050c31bb54a1eab590c3b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac762d9322106d6b2b97d30eac16a812d8a84826243a4273e72a8ffebb469f54(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.LogProConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52735610ac8d6f4c6da36c52c75fc688cba9f2111a79c1c3a366aeea5d4fe37a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.NetworkProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4f354252e5fb1d3dfe78c9ad8b8e542a5a5c3fca420791df260fed8aa70ea83(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosApp.PrivateNetworkProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a03cb10d7ba5ff975d9ee6229b7fd7054fc420bb52a5d81ad3950b7fa7150936(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dea805a6351a0aa94388c7a5dca17d49805e78e738ea44810bb44e4b4f40d8c5(
    *,
    basic_auth: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.BasicAuthProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de22fcae2d65dfea4bb3803dcc67a58af47f7a77498652524623ab8038e18f07(
    *,
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b597ad011df4e3ddd76da9ced8f42f1ccaaba96117e270e971968112cc25794c(
    *,
    advanced_indexing_optimization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    auto_data_organization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    expiration_days: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    log_pro_dynamic_field_config_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    write_with_primary_key: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d82bbeca31639a6f499f941c7672e59819c433de509cf500773b7a0490d9331(
    *,
    enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    white_ip_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.WhiteIpGroupProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aae4196972c05f936acd103970cf494873decc26f394203bc55cbbb45ed82549(
    *,
    enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    pvl_endpoint_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    white_ip_group: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.PrivateNetworkWhiteIpGroupProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7117812471e74c6a03da7695babd0f571b3a5ab6d3b0be8221099fecf9722c17(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ips: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92657409ed1e3d7e8b8d91af0d19ccf42a8e51f92075419e625c2acd6fbe6557(
    *,
    app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    elastic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    write_cu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31d9986cb59e2a5e03fa5437d4512b428066cee8f0fcdaa66028f016beb5bdb9(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ips: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e95a1b08353312c803d25edee983ce01230d80e1b63f07350920fe471d96b6f7(
    *,
    app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    authentication: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.AuthenticationProperty, typing.Dict[builtins.str, typing.Any]]],
    quota_info: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.QuotaInfoProperty, typing.Dict[builtins.str, typing.Any]]],
    app_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_pro_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.LogProConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.NetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    private_network: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosApp.PrivateNetworkProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    scenario: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31842095e62277980570e19d70e76a24c020696faf80adc1ba324b2e3fe4178c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__419f18244bcfe60528ba3d8c235b29670770ee3d25e4e4efbab6b0fc36e02cae(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a778b3cf143cfb45171d83961d35e307cb00e849b898105fe888e43b64c6fe64(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8907a5493de7127c954991f75287dfbbb776df0577d9c96187485538a8b9d411(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosEndpoint.EndpointZonesProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d57b3f89d34d4486833004b6a04a5cc2635d5b9ccb6de2658d408f452b1aef8e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05cf4c88e0b1f53a9efc1e0042beebdf6031305c895642b798046df8d2d39e02(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84b5a25e848a1fb4ebcc3cdc451edf7abb9011ba85480b4b70988da9163ac880(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2edec5163fe38e8433037fd9eb84265a7ed8539a6a103fe7d32d5c9262cc760a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0398de2eb2afaef75146e4eea92255b2a13a061c3ba0f1d6eeea2cbfc13f83a(
    *,
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19ec1b5ea809a4fa0ebbc1760bbc27fd7631be841032894ea758ca049e47320(
    *,
    endpoint_zones: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosEndpoint.EndpointZonesProperty, typing.Dict[builtins.str, typing.Any]]]]],
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b17ae71d61ca449247a9d18c950044cecf6e2ad6ca6bdb770f01dd4da4cd324b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__497849999e1a1c4934662c021b0b19530731c99bf4a8eabbf787ecf6f4b13cb2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df953a64d2c0f620db957e7c67c5c4315b9f4df2add415e8f2f8aa3112d7e2e3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c95c4f5e5c715d75b918131fa84aa4472b2b7ab2fa494a822486608fc5084a6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd36feba5f6f7fee22b5ec7b29d7aa6f1d7e343f143d5d276102a74de104d207(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EndpointProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df1afe1e49c7e03029aaba1eb3ea42849f19447342ff5b839725e4c492332b6f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__072e5cccb8073409861b91778dbdfffe91fb3dee9c2335a3f1c2ba169823f47e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dc046ad5a7c410a488c571dacce09836fe2093eaf636b1a582b8b31b036315a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
