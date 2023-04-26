'''
## Aliyun ROS FC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as FC from '@alicloud/ros-cdk-fc';
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


class Alias(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Alias",
):
    '''A ROS resource type:  ``ALIYUN::FC::Alias``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AliasProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Alias``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__772e0d103fffa9da9ade8518d261f118496ba0941a8882e4c15f124d62b11163)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AliasName: The alias name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VersionId: The version ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.AliasProps",
    jsii_struct_bases=[],
    name_mapping={
        "alias_name": "aliasName",
        "service_name": "serviceName",
        "additional_version": "additionalVersion",
        "additional_weight": "additionalWeight",
        "description": "description",
        "version_id": "versionId",
    },
)
class AliasProps:
    def __init__(
        self,
        *,
        alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: Property aliasName: Alias name.
        :param service_name: Property serviceName: Service name.
        :param additional_version: Property additionalVersion: Additional version.
        :param additional_weight: Property additionalWeight: Traffic weight of additional version. From 0 to 100.
        :param description: Property description: Version description.
        :param version_id: Property versionId: Version ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c91ff6c967c6829682d9376b378dc39c92775ece80dc8efcd4432ee1bff772a)
            check_type(argname="argument alias_name", value=alias_name, expected_type=type_hints["alias_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument additional_version", value=additional_version, expected_type=type_hints["additional_version"])
            check_type(argname="argument additional_weight", value=additional_weight, expected_type=type_hints["additional_weight"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument version_id", value=version_id, expected_type=type_hints["version_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alias_name": alias_name,
            "service_name": service_name,
        }
        if additional_version is not None:
            self._values["additional_version"] = additional_version
        if additional_weight is not None:
            self._values["additional_weight"] = additional_weight
        if description is not None:
            self._values["description"] = description
        if version_id is not None:
            self._values["version_id"] = version_id

    @builtins.property
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aliasName: Alias name.'''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property additionalVersion: Additional version.'''
        result = self._values.get("additional_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property additionalWeight: Traffic weight of additional version.

        From 0 to 100.
        '''
        result = self._values.get("additional_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Version description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property versionId: Version ID.'''
        result = self._values.get("version_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomDomain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.CustomDomain",
):
    '''A ROS resource type:  ``ALIYUN::FC::CustomDomain``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CustomDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::CustomDomain``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f58f0113247a03f4642f33f9d0defc95ae23241121b9a53694e9b66f6c0e1768)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domain: The domain with protocol.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: The domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.CustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "protocol": "protocol",
        "api_version": "apiVersion",
        "cert_config": "certConfig",
        "route_config": "routeConfig",
    },
)
class CustomDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.CertConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.RouteConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: Property domainName: domain name.
        :param protocol: Property protocol: HTTP or HTTP,HTTPS.
        :param api_version: Property apiVersion: api version.
        :param cert_config: Property certConfig: certificate info.
        :param route_config: Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c2b9c84231254321bf669d62541147d47b8f3b3471eaf536acd1a317b24da88)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument api_version", value=api_version, expected_type=type_hints["api_version"])
            check_type(argname="argument cert_config", value=cert_config, expected_type=type_hints["cert_config"])
            check_type(argname="argument route_config", value=route_config, expected_type=type_hints["route_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if api_version is not None:
            self._values["api_version"] = api_version
        if cert_config is not None:
            self._values["cert_config"] = cert_config
        if route_config is not None:
            self._values["route_config"] = route_config

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: HTTP or HTTP,HTTPS.'''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property apiVersion: api version.'''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''Property certConfig: certificate info.'''
        result = self._values.get("cert_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]], result)

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        '''Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.'''
        result = self._values.get("route_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Function(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Function",
):
    '''A ROS resource type:  ``ALIYUN::FC::Function``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FunctionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Function``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__947ce5d6071a30cf688985b69d441099ca6622c43f31978df49ebcc0862268d3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FunctionId: The function ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionId"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceId: The service ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))


class FunctionInvoker(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.FunctionInvoker",
):
    '''A ROS resource type:  ``ALIYUN::FC::FunctionInvoker``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FunctionInvokerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::FunctionInvoker``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af70aa1668ff515bb55f139b1374aa061168c048083e6c31b78ffcb7b0267725)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Result: Depends on result type: NoResult: Async invoke has no result.

        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResult"))

    @builtins.property
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResultType: Result type: NoResult: Async invoke has no result.

        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResultType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.FunctionInvokerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "service_name": "serviceName",
        "async_": "async",
        "check_error": "checkError",
        "event": "event",
        "execute_version": "executeVersion",
        "qualifier": "qualifier",
        "service_region_id": "serviceRegionId",
    },
)
class FunctionInvokerProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::FunctionInvoker``.

        :param function_name: Property functionName: Function name.
        :param service_name: Property serviceName: Service name.
        :param async_: Property async: Invocation type, Sync or Async. Defaults to Sync.
        :param check_error: Property checkError: Whether check error for function invocation result. If set true and function invocation result has error, the resource creation will be regard as failed. Default is false
        :param event: Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.
        :param execute_version: Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        :param qualifier: Property qualifier: service version, can be versionId or aliasName.
        :param service_region_id: Property serviceRegionId: Which region service belongs to.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e7a86e7ce9d008070601a9ae21c7284c92ed770345b7a269561736c2800507d)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument async_", value=async_, expected_type=type_hints["async_"])
            check_type(argname="argument check_error", value=check_error, expected_type=type_hints["check_error"])
            check_type(argname="argument event", value=event, expected_type=type_hints["event"])
            check_type(argname="argument execute_version", value=execute_version, expected_type=type_hints["execute_version"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_region_id", value=service_region_id, expected_type=type_hints["service_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "service_name": service_name,
        }
        if async_ is not None:
            self._values["async_"] = async_
        if check_error is not None:
            self._values["check_error"] = check_error
        if event is not None:
            self._values["event"] = event
        if execute_version is not None:
            self._values["execute_version"] = execute_version
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if service_region_id is not None:
            self._values["service_region_id"] = service_region_id

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property async: Invocation type, Sync or Async.

        Defaults to Sync.
        '''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkError: Whether check error for function invocation result.

        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        result = self._values.get("check_error")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.'''
        result = self._values.get("event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.

        The change of the property leads to the invoke of the function.
        '''
        result = self._values.get("execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qualifier: service version, can be versionId or aliasName.'''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serviceRegionId: Which region service belongs to.'''
        result = self._values.get("service_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FunctionInvokerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.FunctionProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "handler": "handler",
        "runtime": "runtime",
        "service_name": "serviceName",
        "async_configuration": "asyncConfiguration",
        "ca_port": "caPort",
        "code": "code",
        "custom_container_config": "customContainerConfig",
        "description": "description",
        "environment_variables": "environmentVariables",
        "initialization_timeout": "initializationTimeout",
        "initializer": "initializer",
        "instance_concurrency": "instanceConcurrency",
        "instance_type": "instanceType",
        "memory_size": "memorySize",
        "timeout": "timeout",
    },
)
class FunctionProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.AsyncConfigurationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ca_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CodeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CustomContainerConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        initializer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Function``.

        :param function_name: Property functionName: Function name.
        :param handler: Property handler: The function execution entry point.
        :param runtime: Property runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        :param service_name: Property serviceName: Service name.
        :param async_configuration: Property asyncConfiguration: Configuration of asynchronous function calls.
        :param ca_port: Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        :param code: Property code: The code that contains the function implementation.
        :param custom_container_config: Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        :param description: Property description: Function description.
        :param environment_variables: Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        :param initialization_timeout: Property initializationTimeout: the max execution time of the initializer, in second.
        :param initializer: Property initializer: the entry point of the initializer.
        :param instance_concurrency: Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        :param instance_type: Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        :param memory_size: Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        :param timeout: Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__419b3d8ce741f435e8d508f9b34c6959f721cc0bfb0ece17f2d3d365c428728c)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument async_configuration", value=async_configuration, expected_type=type_hints["async_configuration"])
            check_type(argname="argument ca_port", value=ca_port, expected_type=type_hints["ca_port"])
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument custom_container_config", value=custom_container_config, expected_type=type_hints["custom_container_config"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument initialization_timeout", value=initialization_timeout, expected_type=type_hints["initialization_timeout"])
            check_type(argname="argument initializer", value=initializer, expected_type=type_hints["initializer"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "handler": handler,
            "runtime": runtime,
            "service_name": service_name,
        }
        if async_configuration is not None:
            self._values["async_configuration"] = async_configuration
        if ca_port is not None:
            self._values["ca_port"] = ca_port
        if code is not None:
            self._values["code"] = code
        if custom_container_config is not None:
            self._values["custom_container_config"] = custom_container_config
        if description is not None:
            self._values["description"] = description
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if initialization_timeout is not None:
            self._values["initialization_timeout"] = initialization_timeout
        if initializer is not None:
            self._values["initializer"] = initializer
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property handler: The function execution entry point.'''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property runtime: The function runtime environment.

        Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        '''Property asyncConfiguration: Configuration of asynchronous function calls.'''
        result = self._values.get("async_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AsyncConfigurationProperty"]], result)

    @builtins.property
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.

        The default value is 9000
        '''
        result = self._values.get("ca_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]]:
        '''Property code: The code that contains the function implementation.'''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''Property customContainerConfig: Custom container runtime related configuration.

        After configuration, the function can be replaced with a custom container to execute the function
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Function description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.'''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property initializationTimeout: the max execution time of the initializer, in second.'''
        result = self._values.get("initialization_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property initializer: the entry point of the initializer.'''
        result = self._values.get("initializer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceConcurrency: Function instance concurrency.

        Value can be between 1 to 100.
        '''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceType: Instance type.

        Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memorySize: The amount of memory that’s used to run function, in MB.

        Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: The maximum time duration a function can run, in seconds.

        After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Layer(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Layer",
):
    '''A ROS resource type:  ``ALIYUN::FC::Layer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LayerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Layer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f17f46fbdc172c35638c46efaa61ee0f7bd5e894f5295193c0fd631c28336040)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Arn: The name of the layer resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrLayerName")
    def attr_layer_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LayerName: The name of layer.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLayerName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Version: The version of the layer resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.LayerProps",
    jsii_struct_bases=[],
    name_mapping={
        "code": "code",
        "compatible_runtime": "compatibleRuntime",
        "layer_name": "layerName",
        "description": "description",
    },
)
class LayerProps:
    def __init__(
        self,
        *,
        code: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLayer.CodeProperty", typing.Dict[builtins.str, typing.Any]]],
        compatible_runtime: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        layer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Layer``.

        :param code: Property code: The code of layer.
        :param compatible_runtime: Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        :param layer_name: Property layerName: The name of layer.
        :param description: Property description: The description of the layer.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d43138895f7a8accd5d0446aa32e7138b23c8055c237d791c31416e3a56899b)
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument compatible_runtime", value=compatible_runtime, expected_type=type_hints["compatible_runtime"])
            check_type(argname="argument layer_name", value=layer_name, expected_type=type_hints["layer_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "code": code,
            "compatible_runtime": compatible_runtime,
            "layer_name": layer_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def code(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLayer.CodeProperty"]:
        '''Property code: The code of layer.'''
        result = self._values.get("code")
        assert result is not None, "Required property 'code' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLayer.CodeProperty"], result)

    @builtins.property
    def compatible_runtime(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property compatibleRuntime: The runtime environment supported by the layer.

        For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        result = self._values.get("compatible_runtime")
        assert result is not None, "Required property 'compatible_runtime' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def layer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property layerName: The name of layer.'''
        result = self._values.get("layer_name")
        assert result is not None, "Required property 'layer_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the layer.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LayerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProvisionConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.ProvisionConfig",
):
    '''A ROS resource type:  ``ALIYUN::FC::ProvisionConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProvisionConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::ProvisionConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4654009d3283fc872e25fa32301161db451b9b157f74e158a828ac4a810d639)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Qualifier: The service alias.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQualifier"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Resource: The resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Target: Number of provision.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTarget"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.ProvisionConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "qualifier": "qualifier",
        "service_name": "serviceName",
        "target": "target",
    },
)
class ProvisionConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: Property functionName: Function name.
        :param qualifier: Property qualifier: Service's alias. Example : "LATEST"
        :param service_name: Property serviceName: Service name.
        :param target: Property target: Number of provision.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f7074ccca992abac7fcc84d55741b553cbc42b9b37e3d765a13ec5207cb6650)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qualifier: Service's alias.

        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property target: Number of provision.'''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlias(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosAlias",
):
    '''A ROS template type:  ``ALIYUN::FC::Alias``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAliasProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbfd979e3e568557a5e19fc85ac8507bb057717bfd14ef7a9abf0cc36b9bf86f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9bd0c31c72e272a505217184f7518bb9eea58f44c66ae33aa1f989d2b7e566b7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AliasName: The alias name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAliasName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionId: The version ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aliasName")
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aliasName: Alias name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aliasName"))

    @alias_name.setter
    def alias_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e680bdc1939decb3c72a0564973a95690a64bef32b4a68d97117c435e1b8006)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliasName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__637a309d9e171f1334e0cb7828877668f31b78990ad9ed50251f74596bf230ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3843cc6edc067cc9ba33ed3886384a756ea4ec2c942df279b0ef575a78f0613d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="additionalVersion")
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalVersion: Additional version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "additionalVersion"))

    @additional_version.setter
    def additional_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d027f60056610ec420cf1e0cc582139f29f50880d3f5b40b4f165c33aabe68c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalVersion", value)

    @builtins.property
    @jsii.member(jsii_name="additionalWeight")
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "additionalWeight"))

    @additional_weight.setter
    def additional_weight(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df4d764d8faeee47973c010993e28b3fa517b95cda30baad2a4cd6a8e40fcc32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "additionalWeight", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb6b929a7d522099757cb06bff7bfaa72587f4179e26084bbefcce31f463e9e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="versionId")
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionId: Version ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "versionId"))

    @version_id.setter
    def version_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8264224084a2264fb210abc0cf1dd5a8d27ce4e7aab3ddb7f208d97188457486)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosAliasProps",
    jsii_struct_bases=[],
    name_mapping={
        "alias_name": "aliasName",
        "service_name": "serviceName",
        "additional_version": "additionalVersion",
        "additional_weight": "additionalWeight",
        "description": "description",
        "version_id": "versionId",
    },
)
class RosAliasProps:
    def __init__(
        self,
        *,
        alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        additional_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        additional_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: 
        :param service_name: 
        :param additional_version: 
        :param additional_weight: 
        :param description: 
        :param version_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55fafbb8f9c3619a221afd066f16c1234c71ddf7671c912f816eee3e760ba81d)
            check_type(argname="argument alias_name", value=alias_name, expected_type=type_hints["alias_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument additional_version", value=additional_version, expected_type=type_hints["additional_version"])
            check_type(argname="argument additional_weight", value=additional_weight, expected_type=type_hints["additional_weight"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument version_id", value=version_id, expected_type=type_hints["version_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alias_name": alias_name,
            "service_name": service_name,
        }
        if additional_version is not None:
            self._values["additional_version"] = additional_version
        if additional_weight is not None:
            self._values["additional_weight"] = additional_weight
        if description is not None:
            self._values["description"] = description
        if version_id is not None:
            self._values["version_id"] = version_id

    @builtins.property
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aliasName: Alias name
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalVersion: Additional version
        '''
        result = self._values.get("additional_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        '''
        result = self._values.get("additional_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: versionId: Version ID
        '''
        result = self._values.get("version_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosCustomDomain",
):
    '''A ROS template type:  ``ALIYUN::FC::CustomDomain``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__971d046c154871887db31ed44aeb64ec8b0252612fcef4e45e6ffbd0f3b644e0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dad1184193ceca19f069db15f612d3251a4fe23405e9f8a91b3e6987f2d5ee64)
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
        :Attribute: Domain: The domain with protocol.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: The domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e834aaab4857dec0f0753188ce6568590ed187ccf5cdc0f42a6b43036499e5c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ea6965f916113bc4a937d2021ce3a2675de0ff5707782ca257cdf82b34767b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: HTTP or HTTP,HTTPS
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__112f108810122c7d232739ec7fd10fb5f1bc70f56389149603177ee7afd9e867)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="apiVersion")
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiVersion: api version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "apiVersion"))

    @api_version.setter
    def api_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20cdb55684463ff6c1b85624aaaaf9b740380a23f1b6725295a1fd4f4db83b01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "apiVersion", value)

    @builtins.property
    @jsii.member(jsii_name="certConfig")
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''
        :Property: certConfig: certificate info
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]], jsii.get(self, "certConfig"))

    @cert_config.setter
    def cert_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ba5509d39e444da9927dfc9ba682825a71f307a6ba6cb305860e1e38f41b6f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certConfig", value)

    @builtins.property
    @jsii.member(jsii_name="routeConfig")
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        '''
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]], jsii.get(self, "routeConfig"))

    @route_config.setter
    def route_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d69d8b02b3fcb7c8aa723f9959d6b376f4fd35a9e6e876d4fa26bb363bc46ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "certificate": "certificate",
            "cert_name": "certName",
            "private_key": "privateKey",
        },
    )
    class CertConfigProperty:
        def __init__(
            self,
            *,
            certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cert_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            private_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param certificate: 
            :param cert_name: 
            :param private_key: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__566d6dc1cbcee3929d7795d69b8fd4c786a285b2f15b4058d053ed547e7b3c9b)
                check_type(argname="argument certificate", value=certificate, expected_type=type_hints["certificate"])
                check_type(argname="argument cert_name", value=cert_name, expected_type=type_hints["cert_name"])
                check_type(argname="argument private_key", value=private_key, expected_type=type_hints["private_key"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "certificate": certificate,
                "cert_name": cert_name,
                "private_key": private_key,
            }

        @builtins.property
        def certificate(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: certificate: certificate
            '''
            result = self._values.get("certificate")
            assert result is not None, "Required property 'certificate' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cert_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: certName: custom certificate name
            '''
            result = self._values.get("cert_name")
            assert result is not None, "Required property 'cert_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def private_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: privateKey: private key
            '''
            result = self._values.get("private_key")
            assert result is not None, "Required property 'private_key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CertConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"routes": "routes"},
    )
    class RouteConfigProperty:
        def __init__(
            self,
            *,
            routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.RoutesProperty", typing.Dict[builtins.str, typing.Any]]]]],
        ) -> None:
            '''
            :param routes: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ff3e0a3f2582683a049d820c4f6bd1c11a4d62672fb5b1a6692ce26d7e7c5b04)
                check_type(argname="argument routes", value=routes, expected_type=type_hints["routes"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "routes": routes,
            }

        @builtins.property
        def routes(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RoutesProperty"]]]:
            '''
            :Property: routes: PathConfig Array
            '''
            result = self._values.get("routes")
            assert result is not None, "Required property 'routes' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RoutesProperty"]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RouteConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosCustomDomain.RoutesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "function_name": "functionName",
            "path": "path",
            "service_name": "serviceName",
            "qualifier": "qualifier",
        },
    )
    class RoutesProperty:
        def __init__(
            self,
            *,
            function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param function_name: 
            :param path: 
            :param service_name: 
            :param qualifier: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__37019fa69514190f4489156cf3ff3a0ebea0df22465e9e150c210e8ed34c0dcf)
                check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
                check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "function_name": function_name,
                "path": path,
                "service_name": service_name,
            }
            if qualifier is not None:
                self._values["qualifier"] = qualifier

        @builtins.property
        def function_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: functionName: Path to the function, for example: "login"
            '''
            result = self._values.get("function_name")
            assert result is not None, "Required property 'function_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def path(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
            '''
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def service_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serviceName: Path to the service, for example: "blogService"
            '''
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def qualifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: qualifier: Service version or alias
            '''
            result = self._values.get("qualifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RoutesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosCustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "protocol": "protocol",
        "api_version": "apiVersion",
        "cert_config": "certConfig",
        "route_config": "routeConfig",
    },
)
class RosCustomDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: 
        :param protocol: 
        :param api_version: 
        :param cert_config: 
        :param route_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__119d2a133da169fdd76e3e6245916ffcdf7a92fcfe3547b96f942ad461c39a0d)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument api_version", value=api_version, expected_type=type_hints["api_version"])
            check_type(argname="argument cert_config", value=cert_config, expected_type=type_hints["cert_config"])
            check_type(argname="argument route_config", value=route_config, expected_type=type_hints["route_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if api_version is not None:
            self._values["api_version"] = api_version
        if cert_config is not None:
            self._values["cert_config"] = cert_config
        if route_config is not None:
            self._values["route_config"] = route_config

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: HTTP or HTTP,HTTPS
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: apiVersion: api version
        '''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.CertConfigProperty]]:
        '''
        :Property: certConfig: certificate info
        '''
        result = self._values.get("cert_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.CertConfigProperty]], result)

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.RouteConfigProperty]]:
        '''
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        '''
        result = self._values.get("route_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.RouteConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFunction(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosFunction",
):
    '''A ROS template type:  ``ALIYUN::FC::Function``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFunctionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Function``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a939ef56cfb3defcf45fe011f04a578f7b68d8e8eae73a73b4071c446fdec46)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bb22d12f0d902e88058f4c4c6e00e98acdd41bd0b3eccc0245315d60d10a4171)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ARN: The ARN for ALIYUN::ROS::CustomResource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FunctionId: The function ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionId"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FunctionName: The function name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceId: The service ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dc0f0cb4f8dc5475efc80cb37fe09a0d66dc8a2f162cfeaedd620272b6b12dc9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b02c834dfbf2c47af2d7223539844dd55f74a0bf8d3de4940d4df0fb66cf65de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="handler")
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: handler: The function execution entry point.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "handler"))

    @handler.setter
    def handler(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e15cc44e2f5da40f83440fc558611d6be2b246f81b2332e81d97818827e2562)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "handler", value)

    @builtins.property
    @jsii.member(jsii_name="runtime")
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9eb863b009d59b505f630661c9bf04791af7489b367937aea1495dd810508b05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runtime", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05d57741bc9b328039211c1781fa25ddae22111d6fe0f25dd7fe8ae423bbe70e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="asyncConfiguration")
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        '''
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AsyncConfigurationProperty"]], jsii.get(self, "asyncConfiguration"))

    @async_configuration.setter
    def async_configuration(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AsyncConfigurationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e53d6bb2df75e6233c45b9a8382eba7512c2328079f66cbb111a2d9bac92142)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "asyncConfiguration", value)

    @builtins.property
    @jsii.member(jsii_name="caPort")
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "caPort"))

    @ca_port.setter
    def ca_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a74e929fac34f9ab10ce3c612fe59c33456c9a19e1aae1ba5bce6f95df093cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caPort", value)

    @builtins.property
    @jsii.member(jsii_name="code")
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]]:
        '''
        :Property: code: The code that contains the function implementation.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]], jsii.get(self, "code"))

    @code.setter
    def code(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f21a959e3c37f8983eeb10da484208d11c0e5d9603385f9d916f35aac4c15700)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "code", value)

    @builtins.property
    @jsii.member(jsii_name="customContainerConfig")
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]], jsii.get(self, "customContainerConfig"))

    @custom_container_config.setter
    def custom_container_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27c5255655d66afd5ae118a4bf10ba75adaee472b4391ffe87969cafa0c449b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customContainerConfig", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Function description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32b84c903f4856551ba56eb9f39817fd65a8f8497f38f0d8ceca54746657f147)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "environmentVariables"))

    @environment_variables.setter
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e461fa531b6d30445d99cd7aea2d0ecc002f8683ee95bc53b799923f34b4e9c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentVariables", value)

    @builtins.property
    @jsii.member(jsii_name="initializationTimeout")
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initializationTimeout: the max execution time of the initializer, in second
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "initializationTimeout"))

    @initialization_timeout.setter
    def initialization_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecd6b6bfaa6bf0e26e443022cb80ef3ce546e7f04a7aa486b063f82f28d07e65)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "initializationTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="initializer")
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initializer: the entry point of the initializer
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "initializer"))

    @initializer.setter
    def initializer(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aebe4a357a128589009cf884a6d5d199e161abc51fb1bd95295b2f65c2aa17f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "initializer", value)

    @builtins.property
    @jsii.member(jsii_name="instanceConcurrency")
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceConcurrency"))

    @instance_concurrency.setter
    def instance_concurrency(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ded4fd8bcb6269dad43c13498e8032be76df43f6fdeef7d0f79c1ee186cc68d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceConcurrency", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8c4f88add70aee6d39b1ab483f9c31d4b82381b93cd9a7d322fdf81d90a7305)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="memorySize")
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memorySize"))

    @memory_size.setter
    def memory_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__721360e2468ac230c1bbb6980380bdd43c996c46a2b80946a037f369be21279f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memorySize", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62e711b31b3dfba999758bd166f92069ee5b7f0db9ab27f7ec165d418d4bb4b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "destination": "destination",
            "max_async_event_age_in_seconds": "maxAsyncEventAgeInSeconds",
            "max_async_retry_attempts": "maxAsyncRetryAttempts",
            "stateful_invocation": "statefulInvocation",
        },
    )
    class AsyncConfigurationProperty:
        def __init__(
            self,
            *,
            destination: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.DestinationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            stateful_invocation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param destination: 
            :param max_async_event_age_in_seconds: 
            :param max_async_retry_attempts: 
            :param stateful_invocation: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f61b7dcc425ad09e2ac8f5b36466f2d04bf91b9f80be1a4ec920b47ea8790b1d)
                check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
                check_type(argname="argument max_async_event_age_in_seconds", value=max_async_event_age_in_seconds, expected_type=type_hints["max_async_event_age_in_seconds"])
                check_type(argname="argument max_async_retry_attempts", value=max_async_retry_attempts, expected_type=type_hints["max_async_retry_attempts"])
                check_type(argname="argument stateful_invocation", value=stateful_invocation, expected_type=type_hints["stateful_invocation"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if destination is not None:
                self._values["destination"] = destination
            if max_async_event_age_in_seconds is not None:
                self._values["max_async_event_age_in_seconds"] = max_async_event_age_in_seconds
            if max_async_retry_attempts is not None:
                self._values["max_async_retry_attempts"] = max_async_retry_attempts
            if stateful_invocation is not None:
                self._values["stateful_invocation"] = stateful_invocation

        @builtins.property
        def destination(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.DestinationProperty"]]:
            '''
            :Property: destination: Set destination of asynchronous function calls
            '''
            result = self._values.get("destination")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.DestinationProperty"]], result)

        @builtins.property
        def max_async_event_age_in_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
            '''
            result = self._values.get("max_async_event_age_in_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def max_async_retry_attempts(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxAsyncRetryAttempts: Configure the number of retries
            '''
            result = self._values.get("max_async_retry_attempts")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def stateful_invocation(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: statefulInvocation: Whether enable stateful invocation
            '''
            result = self._values.get("stateful_invocation")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AsyncConfigurationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosFunction.CodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "oss_bucket_name": "ossBucketName",
            "oss_object_name": "ossObjectName",
            "source_code": "sourceCode",
            "zip_file": "zipFile",
        },
    )
    class CodeProperty:
        def __init__(
            self,
            *,
            oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param source_code: 
            :param zip_file: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0c170db4bada8f559e3f167b7571c7592f539031fcc44ff574d4ab22311944ad)
                check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
                check_type(argname="argument oss_object_name", value=oss_object_name, expected_type=type_hints["oss_object_name"])
                check_type(argname="argument source_code", value=source_code, expected_type=type_hints["source_code"])
                check_type(argname="argument zip_file", value=zip_file, expected_type=type_hints["zip_file"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if oss_bucket_name is not None:
                self._values["oss_bucket_name"] = oss_bucket_name
            if oss_object_name is not None:
                self._values["oss_object_name"] = oss_object_name
            if source_code is not None:
                self._values["source_code"] = source_code
            if zip_file is not None:
                self._values["zip_file"] = zip_file

        @builtins.property
        def oss_bucket_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ossBucketName: OSS bucket name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_object_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ossObjectName: OSS object name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_object_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def source_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
            Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("source_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def zip_file(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            zipFile: Base64 encoded zip file content.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("zip_file")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "image": "image",
            "acceleration_type": "accelerationType",
            "args": "args",
            "command": "command",
            "instance_id": "instanceId",
        },
    )
    class CustomContainerConfigProperty:
        def __init__(
            self,
            *,
            image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            acceleration_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param image: 
            :param acceleration_type: 
            :param args: 
            :param command: 
            :param instance_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a501117936073f2b8dcc8c48039bef68d4e5e1390f7ffa57a0b3431244da4689)
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument acceleration_type", value=acceleration_type, expected_type=type_hints["acceleration_type"])
                check_type(argname="argument args", value=args, expected_type=type_hints["args"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "image": image,
            }
            if acceleration_type is not None:
                self._values["acceleration_type"] = acceleration_type
            if args is not None:
                self._values["args"] = args
            if command is not None:
                self._values["command"] = command
            if instance_id is not None:
                self._values["instance_id"] = instance_id

        @builtins.property
        def image(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
            '''
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def acceleration_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            accelerationType: Whether to enable image acceleration. Valid Values:
            Default: Indicates that image acceleration is enabled.
            None: Indicates that image acceleration is disabled.
            '''
            result = self._values.get("acceleration_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: args: Container startup parameters. For example: ["-arg1", "value1"]
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: command: Container start command. For example: ["/code/myserver"]
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: instanceId: The ID of the Container Registry Enterprise Edition instance. If you use an Enterprise Edition instance for the container image, you must add the instance ID. The default resolution IP address of the instance must be the IP address of the virtual private cloud (VPC) that the instance belongs. Alibaba Cloud DNS PrivateZone cannot be used for domain name resolution.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CustomContainerConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosFunction.DestinationProperty",
        jsii_struct_bases=[],
        name_mapping={"on_failure": "onFailure", "on_success": "onSuccess"},
    )
    class DestinationProperty:
        def __init__(
            self,
            *,
            on_failure: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            on_success: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param on_failure: 
            :param on_success: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__24a87e0189c64e462f213b364b9cf36b6df845d47e90443187ad7b61c66e8cab)
                check_type(argname="argument on_failure", value=on_failure, expected_type=type_hints["on_failure"])
                check_type(argname="argument on_success", value=on_success, expected_type=type_hints["on_success"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if on_failure is not None:
                self._values["on_failure"] = on_failure
            if on_success is not None:
                self._values["on_success"] = on_success

        @builtins.property
        def on_failure(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
            '''
            result = self._values.get("on_failure")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def on_success(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
            '''
            result = self._values.get("on_success")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosFunctionInvoker(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosFunctionInvoker",
):
    '''A ROS template type:  ``ALIYUN::FC::FunctionInvoker``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFunctionInvokerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::FunctionInvoker``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__672ce870ce0441581c7a11bcee59088acafb760ec8b64bfeedd96f54291169a4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e0e12f19b8f2e1d93ec78548a70e2a3c9cafc425647c729d34edcd3041d32f4f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        Result: Depends on result type:
        NoResult: Async invoke has no result.
        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResult"))

    @builtins.property
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ResultType: Result type:
        NoResult: Async invoke has no result.
        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResultType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__9c7e2315793c8308c271178fd4feee2d55e2cd1db9470bbef8b1edba597a45d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff0f0c403e0c25013372f1b7f5ea450b292f8641dfc781538dc93546afe7f255)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4eafaa27d65766712fee9919e756c97c27e100279c412dc1b96268521a758900)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="async")
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "async"))

    @async_.setter
    def async_(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6563787efea2e3d3db144b6f55c864d65fa3e883fa40c62acd92d481b5b38a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "async", value)

    @builtins.property
    @jsii.member(jsii_name="checkError")
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkError"))

    @check_error.setter
    def check_error(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6abe1d1ff95c5ac47469eb84bf870ace0f3ae3cfaf550d200ed5375427889a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkError", value)

    @builtins.property
    @jsii.member(jsii_name="event")
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "event"))

    @event.setter
    def event(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b9eb96a43a010e120e213e2561a4b86cd2bc8cc4e3d963cefc625fa14a5381e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "event", value)

    @builtins.property
    @jsii.member(jsii_name="executeVersion")
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "executeVersion"))

    @execute_version.setter
    def execute_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__717416219bd601ba04c31a553ca42049d5f320d0dee91f9d6a2d32e094aafced)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "executeVersion", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: service version, can be versionId or aliasName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fbe684859c16cb48fdf51f23739609dad129cbe28f59fc2fc2d60d581e004c2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

    @builtins.property
    @jsii.member(jsii_name="serviceRegionId")
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRegionId: Which region service belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serviceRegionId"))

    @service_region_id.setter
    def service_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f1138e386208a1051e2abaf1ba7cbe3c4d8c370887e667c1c3b0d39783921ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceRegionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosFunctionInvokerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "service_name": "serviceName",
        "async_": "async",
        "check_error": "checkError",
        "event": "event",
        "execute_version": "executeVersion",
        "qualifier": "qualifier",
        "service_region_id": "serviceRegionId",
    },
)
class RosFunctionInvokerProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::FunctionInvoker``.

        :param function_name: 
        :param service_name: 
        :param async_: 
        :param check_error: 
        :param event: 
        :param execute_version: 
        :param qualifier: 
        :param service_region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0625b9dee1af3100f4c81b51eca7c539927bd4936c5b4413ac316bc92b67c85)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument async_", value=async_, expected_type=type_hints["async_"])
            check_type(argname="argument check_error", value=check_error, expected_type=type_hints["check_error"])
            check_type(argname="argument event", value=event, expected_type=type_hints["event"])
            check_type(argname="argument execute_version", value=execute_version, expected_type=type_hints["execute_version"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_region_id", value=service_region_id, expected_type=type_hints["service_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "service_name": service_name,
        }
        if async_ is not None:
            self._values["async_"] = async_
        if check_error is not None:
            self._values["check_error"] = check_error
        if event is not None:
            self._values["event"] = event
        if execute_version is not None:
            self._values["execute_version"] = execute_version
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if service_region_id is not None:
            self._values["service_region_id"] = service_region_id

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        '''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        result = self._values.get("check_error")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        '''
        result = self._values.get("event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        '''
        result = self._values.get("execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: service version, can be versionId or aliasName
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serviceRegionId: Which region service belongs to.
        '''
        result = self._values.get("service_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFunctionInvokerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosFunctionProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "handler": "handler",
        "runtime": "runtime",
        "service_name": "serviceName",
        "async_configuration": "asyncConfiguration",
        "ca_port": "caPort",
        "code": "code",
        "custom_container_config": "customContainerConfig",
        "description": "description",
        "environment_variables": "environmentVariables",
        "initialization_timeout": "initializationTimeout",
        "initializer": "initializer",
        "instance_concurrency": "instanceConcurrency",
        "instance_type": "instanceType",
        "memory_size": "memorySize",
        "timeout": "timeout",
    },
)
class RosFunctionProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.AsyncConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        ca_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        initializer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Function``.

        :param function_name: 
        :param handler: 
        :param runtime: 
        :param service_name: 
        :param async_configuration: 
        :param ca_port: 
        :param code: 
        :param custom_container_config: 
        :param description: 
        :param environment_variables: 
        :param initialization_timeout: 
        :param initializer: 
        :param instance_concurrency: 
        :param instance_type: 
        :param memory_size: 
        :param timeout: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76a20e0f02286b7e78526b1ddbc720cc4ee6eb18257a0bee8987db2ccc69f04c)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument async_configuration", value=async_configuration, expected_type=type_hints["async_configuration"])
            check_type(argname="argument ca_port", value=ca_port, expected_type=type_hints["ca_port"])
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument custom_container_config", value=custom_container_config, expected_type=type_hints["custom_container_config"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument initialization_timeout", value=initialization_timeout, expected_type=type_hints["initialization_timeout"])
            check_type(argname="argument initializer", value=initializer, expected_type=type_hints["initializer"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "handler": handler,
            "runtime": runtime,
            "service_name": service_name,
        }
        if async_configuration is not None:
            self._values["async_configuration"] = async_configuration
        if ca_port is not None:
            self._values["ca_port"] = ca_port
        if code is not None:
            self._values["code"] = code
        if custom_container_config is not None:
            self._values["custom_container_config"] = custom_container_config
        if description is not None:
            self._values["description"] = description
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if initialization_timeout is not None:
            self._values["initialization_timeout"] = initialization_timeout
        if initializer is not None:
            self._values["initializer"] = initializer
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
        if instance_type is not None:
            self._values["instance_type"] = instance_type
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: handler: The function execution entry point.
        '''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.AsyncConfigurationProperty]]:
        '''
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        '''
        result = self._values.get("async_configuration")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.AsyncConfigurationProperty]], result)

    @builtins.property
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        '''
        result = self._values.get("ca_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]]:
        '''
        :Property: code: The code that contains the function implementation.
        '''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]]:
        '''
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Function description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        '''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initializationTimeout: the max execution time of the initializer, in second
        '''
        result = self._values.get("initialization_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: initializer: the entry point of the initializer
        '''
        result = self._values.get("initializer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        '''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLayer(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosLayer",
):
    '''A ROS template type:  ``ALIYUN::FC::Layer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLayerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Layer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa4d61cad087d02cb9656fa43c7c322202da7665a4f4920594abdf4fbae9c4b2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5efa7937463ad486164894983fe5fe3dc35b82403362fda32f781582a7da6730)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Arn: The name of the layer resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrLayerName")
    def attr_layer_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LayerName: The name of layer
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLayerName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Version: The version of the layer resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="code")
    def code(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLayer.CodeProperty"]:
        '''
        :Property: code: The code of layer.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLayer.CodeProperty"], jsii.get(self, "code"))

    @code.setter
    def code(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLayer.CodeProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a218bcf8d80ea16c2f049021402de4d3f2f8ceea69948955b7b4ab94704d9783)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "code", value)

    @builtins.property
    @jsii.member(jsii_name="compatibleRuntime")
    def compatible_runtime(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "compatibleRuntime"))

    @compatible_runtime.setter
    def compatible_runtime(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dee07572df26fdb9838668e7d769dae6aa5fbf5a5dfe19de5d998a3f727e7b88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compatibleRuntime", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f432dd0be8a86ecc81c0a87e86e99624221cd3f0155915658396a6f736b0d9b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="layerName")
    def layer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: layerName: The name of layer
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "layerName"))

    @layer_name.setter
    def layer_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd666090889d50d9c93098bc064a8021a4062b0f0843d9c4c125ce5417149d24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "layerName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the layer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4dc7bbb99c4e8edf2c9a9e18de11d4be1138454c75c3b9d44ad629340d171692)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosLayer.CodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "oss_bucket_name": "ossBucketName",
            "oss_object_name": "ossObjectName",
            "zip_file": "zipFile",
        },
    )
    class CodeProperty:
        def __init__(
            self,
            *,
            oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param zip_file: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__33878f2e2791630f36f178fe0017d9eea77fe1bec0e8803bfa6eac934781a7ef)
                check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
                check_type(argname="argument oss_object_name", value=oss_object_name, expected_type=type_hints["oss_object_name"])
                check_type(argname="argument zip_file", value=zip_file, expected_type=type_hints["zip_file"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if oss_bucket_name is not None:
                self._values["oss_bucket_name"] = oss_bucket_name
            if oss_object_name is not None:
                self._values["oss_object_name"] = oss_object_name
            if zip_file is not None:
                self._values["zip_file"] = zip_file

        @builtins.property
        def oss_bucket_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ossBucketName: The name of the Object Storage Service (OSS) bucket that
            stores the ZIP package of the function code.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_object_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ossObjectName: The name of the OSS object that stores the ZIP package of the function code.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_object_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def zip_file(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            zipFile: The function code that is encoded in Base64.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("zip_file")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CodeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosLayerProps",
    jsii_struct_bases=[],
    name_mapping={
        "code": "code",
        "compatible_runtime": "compatibleRuntime",
        "layer_name": "layerName",
        "description": "description",
    },
)
class RosLayerProps:
    def __init__(
        self,
        *,
        code: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLayer.CodeProperty, typing.Dict[builtins.str, typing.Any]]],
        compatible_runtime: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        layer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Layer``.

        :param code: 
        :param compatible_runtime: 
        :param layer_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f2a172ff561a6e7deecc7f2e8db04da3a97254b82d8472508bcecca7b1c04cc)
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument compatible_runtime", value=compatible_runtime, expected_type=type_hints["compatible_runtime"])
            check_type(argname="argument layer_name", value=layer_name, expected_type=type_hints["layer_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "code": code,
            "compatible_runtime": compatible_runtime,
            "layer_name": layer_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def code(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLayer.CodeProperty]:
        '''
        :Property: code: The code of layer.
        '''
        result = self._values.get("code")
        assert result is not None, "Required property 'code' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLayer.CodeProperty], result)

    @builtins.property
    def compatible_runtime(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        result = self._values.get("compatible_runtime")
        assert result is not None, "Required property 'compatible_runtime' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def layer_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: layerName: The name of layer
        '''
        result = self._values.get("layer_name")
        assert result is not None, "Required property 'layer_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the layer.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLayerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProvisionConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosProvisionConfig",
):
    '''A ROS template type:  ``ALIYUN::FC::ProvisionConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProvisionConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::ProvisionConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4a3b43165f3ece8fc03fb6aca471e86f005d8ba33a128a78e7c2720a4ba5b28)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f7afe1aabdd067ef3d130f8600f262d6874d05c93b61a06358af3726777f9e54)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FunctionName: The function name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Qualifier: The service alias
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQualifier"))

    @builtins.property
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Resource: The resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Target: Number of provision
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTarget"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ebdc7d0187d5b62667ed84dfdcb6e607a18dfda696e11b562cf078e7ab438c8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bcbbdf515554558355e53f73124d6c6feeb73a2608349a04b64b3c5044fe60b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__905923bae9bd2fa36bb9b3f74c5d68d74eee1e48bab5c1843a9d754fb62526d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc793593bbce14f6830c695d8adce240ff7f5a7a4126ab8ed236b79f5f55c05b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="target")
    def target(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: target: Number of provision
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "target"))

    @target.setter
    def target(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de612ccb704999bba643e4ab918fd3f352cc7f6d4d475831791dc6162cb70b44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "target", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosProvisionConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "qualifier": "qualifier",
        "service_name": "serviceName",
        "target": "target",
    },
)
class RosProvisionConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: 
        :param qualifier: 
        :param service_name: 
        :param target: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__477df474d79d45de2273292c3b7abf52cc6898ca41b23475201db280642d6627)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: target: Number of provision
        '''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosService(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosService",
):
    '''A ROS template type:  ``ALIYUN::FC::Service``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Service``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__358feb38e9afee44c9d320b485d206ba11e14b1eb19f86ba60822de41e4bf28c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e11a726d7d01e1ba1bd18e983c13c9ec341c96990507f0a101aaf2291fc4dbe8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetAccess")
    def attr_internet_access(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetAccess: Whether enable Internet access
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetAccess"))

    @builtins.property
    @jsii.member(jsii_name="attrLogProject")
    def attr_log_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogProject: Log project of service
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogProject"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Logstore: Log store of service
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstore"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Role: Role of service
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceId: The service ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: Tags of service
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VPC ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dac66ad1b068c52e7091e4f148fe81b83d551ae14a0cf8d7f5ad6569771e784c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64642bc174fa98b4f04008280add6f678211492e8927bcff689d40acaba92c70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d368c4294af5c4d9c3fde891d7d5c8b6e26ff397224d541339088ef549583350)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Service description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1aa7b963299571bc817845f70754f1e64f28b282b65b30922569e4150a0de838)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="internetAccess")
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetAccess: Set it to true to enable Internet access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetAccess"))

    @internet_access.setter
    def internet_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2bd2bddeed2e5f925eb463060311b0661274f63e692e975f034392d10c8e7e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetAccess", value)

    @builtins.property
    @jsii.member(jsii_name="logConfig")
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.LogConfigProperty"]]:
        '''
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.LogConfigProperty"]], jsii.get(self, "logConfig"))

    @log_config.setter
    def log_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.LogConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d5bceb6890edd88073036e50eeb9675026be56f3da2767849acd7c17fcb80be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logConfig", value)

    @builtins.property
    @jsii.member(jsii_name="nasConfig")
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.NasConfigProperty"]]:
        '''
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.NasConfigProperty"]], jsii.get(self, "nasConfig"))

    @nas_config.setter
    def nas_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.NasConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90898fedd84da590ce89d40fbced53bf9e1859dafff472a661225f02e383e563)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nasConfig", value)

    @builtins.property
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d8d6ddddae8f514fce8462955f20ff9dfbf5cd1fe26df201d3ceedd5701fc06)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "role", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosService.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosService.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosService.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b01126be144c83e8412f182c7c6b052697b0f48b04969a7c78a8c166a1137ddc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="tracingConfig")
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.TracingConfigProperty"]]:
        '''
        :Property: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.TracingConfigProperty"]], jsii.get(self, "tracingConfig"))

    @tracing_config.setter
    def tracing_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.TracingConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31d4357619f254ee432d54282d4d69463ab5e64a9fbdb1f35d4dc9d17826162f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tracingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="vpcBindings")
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vpcBindings: Function Invocation only by Specified VPCs.
        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "vpcBindings"))

    @vpc_bindings.setter
    def vpc_bindings(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98dfeb149bb719c8a3c3241cb907e77b233214ffc5e6f1bada832e4e45b4e665)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcBindings", value)

    @builtins.property
    @jsii.member(jsii_name="vpcConfig")
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.VpcConfigProperty"]]:
        '''
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.VpcConfigProperty"]], jsii.get(self, "vpcConfig"))

    @vpc_config.setter
    def vpc_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.VpcConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__910c49247e95468066b2e276f8b50d26416dc72ff8d4e91347774ca270d069e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.LogConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable_request_metrics": "enableRequestMetrics",
            "log_begin_rule": "logBeginRule",
            "logstore": "logstore",
            "project": "project",
        },
    )
    class LogConfigProperty:
        def __init__(
            self,
            *,
            enable_request_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            log_begin_rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            logstore: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_request_metrics: 
            :param log_begin_rule: 
            :param logstore: 
            :param project: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__31f6dbe76fc6276f14ecdb4a59937f17bc24cd7853a1a19d28649a1f47c0f270)
                check_type(argname="argument enable_request_metrics", value=enable_request_metrics, expected_type=type_hints["enable_request_metrics"])
                check_type(argname="argument log_begin_rule", value=log_begin_rule, expected_type=type_hints["log_begin_rule"])
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_request_metrics is not None:
                self._values["enable_request_metrics"] = enable_request_metrics
            if log_begin_rule is not None:
                self._values["log_begin_rule"] = log_begin_rule
            if logstore is not None:
                self._values["logstore"] = logstore
            if project is not None:
                self._values["project"] = project

        @builtins.property
        def enable_request_metrics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
            false: disables request-level metrics.
            true: enables request-level metrics. Default value: true.
            '''
            result = self._values.get("enable_request_metrics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def log_begin_rule(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
            None: disables the log splitting rule. This is the default value.
            DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
            '''
            result = self._values.get("log_begin_rule")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def logstore(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logstore: The log store name of Logs service
            '''
            result = self._values.get("logstore")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: project: The project name of Logs service
            '''
            result = self._values.get("project")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.MountPointsProperty",
        jsii_struct_bases=[],
        name_mapping={"mount_dir": "mountDir", "server_addr": "serverAddr"},
    )
    class MountPointsProperty:
        def __init__(
            self,
            *,
            mount_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            server_addr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param mount_dir: 
            :param server_addr: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3d9c50a9c6616e6f9584bb9d44584e61ab0c37aefa82f77e4528e7368c44c655)
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
                check_type(argname="argument server_addr", value=server_addr, expected_type=type_hints["server_addr"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "mount_dir": mount_dir,
                "server_addr": server_addr,
            }

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: mountDir: A local mount point.
            '''
            result = self._values.get("mount_dir")
            assert result is not None, "Required property 'mount_dir' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_addr(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverAddr: The address of NAS instance.
            '''
            result = self._values.get("server_addr")
            assert result is not None, "Required property 'server_addr' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MountPointsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.NasConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "group_id": "groupId",
            "mount_points": "mountPoints",
            "user_id": "userId",
        },
    )
    class NasConfigProperty:
        def __init__(
            self,
            *,
            group_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            mount_points: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosService.MountPointsProperty", typing.Dict[builtins.str, typing.Any]]]]],
            user_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param group_id: 
            :param mount_points: 
            :param user_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7a5e389c362d85bfe13ab7874222b77e8925c97d3a9a891e7dbe751b83717e88)
                check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
                check_type(argname="argument mount_points", value=mount_points, expected_type=type_hints["mount_points"])
                check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "group_id": group_id,
                "mount_points": mount_points,
                "user_id": user_id,
            }

        @builtins.property
        def group_id(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: groupId: Group ID
            '''
            result = self._values.get("group_id")
            assert result is not None, "Required property 'group_id' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.MountPointsProperty"]]]:
            '''
            :Property: mountPoints: Mount points
            '''
            result = self._values.get("mount_points")
            assert result is not None, "Required property 'mount_points' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosService.MountPointsProperty"]]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userId: User ID
            '''
            result = self._values.get("user_id")
            assert result is not None, "Required property 'user_id' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NasConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__53f87c34bda4b7765204ef93ba02b0941247a11c6c3b8ae6cb4d1478e2eaa6da)
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
        jsii_type="@alicloud/ros-cdk-fc.RosService.TracingConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"params": "params", "type": "type"},
    )
    class TracingConfigProperty:
        def __init__(
            self,
            *,
            params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param params: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3164c2cff65e77270e264a46fccabaccc7bae85d64e09865021772db5c35aa72)
                check_type(argname="argument params", value=params, expected_type=type_hints["params"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if params is not None:
                self._values["params"] = params
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def params(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: params: The tracing analysis parameters.
            '''
            result = self._values.get("params")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The type of the tracing analysis system.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TracingConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.VpcConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_id": "securityGroupId",
            "vpc_id": "vpcId",
            "v_switch_ids": "vSwitchIds",
        },
    )
    class VpcConfigProperty:
        def __init__(
            self,
            *,
            security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bb9ddd9ddbd8b81a4103b4d31427216da48339ebb746694ca4f5087cf1ad4e7e)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_id": security_group_id,
                "vpc_id": vpc_id,
                "v_switch_ids": v_switch_ids,
            }

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: securityGroupId: Security group ID
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: VPC ID
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchIds: List of VSwitch IDs
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_name": "serviceName",
        "deletion_force": "deletionForce",
        "description": "description",
        "internet_access": "internetAccess",
        "log_config": "logConfig",
        "nas_config": "nasConfig",
        "role": "role",
        "tags": "tags",
        "tracing_config": "tracingConfig",
        "vpc_bindings": "vpcBindings",
        "vpc_config": "vpcConfig",
    },
)
class RosServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosService.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_bindings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Service``.

        :param service_name: 
        :param deletion_force: 
        :param description: 
        :param internet_access: 
        :param log_config: 
        :param nas_config: 
        :param role: 
        :param tags: 
        :param tracing_config: 
        :param vpc_bindings: 
        :param vpc_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d316246cfaeec1ab55cbc3ca7525984fc86cdc5141543e9cc32422d2ebf3abcd)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tracing_config", value=tracing_config, expected_type=type_hints["tracing_config"])
            check_type(argname="argument vpc_bindings", value=vpc_bindings, expected_type=type_hints["vpc_bindings"])
            check_type(argname="argument vpc_config", value=vpc_config, expected_type=type_hints["vpc_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if internet_access is not None:
            self._values["internet_access"] = internet_access
        if log_config is not None:
            self._values["log_config"] = log_config
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if role is not None:
            self._values["role"] = role
        if tags is not None:
            self._values["tags"] = tags
        if tracing_config is not None:
            self._values["tracing_config"] = tracing_config
        if vpc_bindings is not None:
            self._values["vpc_bindings"] = vpc_bindings
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Service description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetAccess: Set it to true to enable Internet access.
        '''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.LogConfigProperty]]:
        '''
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.LogConfigProperty]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.NasConfigProperty]]:
        '''
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.NasConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosService.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosService.TagsProperty]], result)

    @builtins.property
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.TracingConfigProperty]]:
        '''
        :Property: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.TracingConfigProperty]], result)

    @builtins.property
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        vpcBindings: Function Invocation only by Specified VPCs.
        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        result = self._values.get("vpc_bindings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.VpcConfigProperty]]:
        '''
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        '''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.VpcConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrigger(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosTrigger",
):
    '''A ROS template type:  ``ALIYUN::FC::Trigger``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTriggerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Trigger``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d178d81357d2fa5320962a3a8ee436866fb1319712d7643608e1a7048101b13e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4d45ff73ed80c59718ac5aed78d83e3daecf0102c90aa5d79c073df8daac1beb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FunctionName: Function name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: Service name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TriggerId: The trigger ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TriggerName: Trigger name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__723a2fa378f6e597091d09bfd98bb2a558b09144539393a0d70e7dd18cd4365c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d2fe98cbadf60ae67a6746947edc7ec6a2c901cacce4f0b61622f4b63f74696)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46c6d91b008ec642e3ebf82e44e94a9710b637b22fbdb18bd6ae497a3509cf43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="triggerConfig")
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "triggerConfig"))

    @trigger_config.setter
    def trigger_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fbae89626cad401d5ce01a0066ec5481f7c9ff3f00f983fdb4e4a719a6de7a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerConfig", value)

    @builtins.property
    @jsii.member(jsii_name="triggerName")
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "triggerName"))

    @trigger_name.setter
    def trigger_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f886d8356c3c1e6aea7953ff0d8781c64d0867b396a4f3c1abe7b0fae81c7996)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerName", value)

    @builtins.property
    @jsii.member(jsii_name="triggerType")
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "triggerType"))

    @trigger_type.setter
    def trigger_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9afd6475eaaa93ea090770d5308a16e88771d1b4b7892d4909f0c925e0339f00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerType", value)

    @builtins.property
    @jsii.member(jsii_name="invocationRole")
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "invocationRole"))

    @invocation_role.setter
    def invocation_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9ba0533d6628d68d1460f8d440ea8cc7edef5acdc24e5708de097e3de0d50b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "invocationRole", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__60df2d7045af4309457f5511dacd90ffd6007233d92ab47f21c7b39c58d1d3d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

    @builtins.property
    @jsii.member(jsii_name="sourceArn")
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceArn"))

    @source_arn.setter
    def source_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f241969997f705406bfe3ad32bdfffbd6e6c2b96c4a99f14f0fd06d02efc2c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceArn", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosTriggerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "service_name": "serviceName",
        "trigger_config": "triggerConfig",
        "trigger_name": "triggerName",
        "trigger_type": "triggerType",
        "invocation_role": "invocationRole",
        "qualifier": "qualifier",
        "source_arn": "sourceArn",
    },
)
class RosTriggerProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Trigger``.

        :param function_name: 
        :param service_name: 
        :param trigger_config: 
        :param trigger_name: 
        :param trigger_type: 
        :param invocation_role: 
        :param qualifier: 
        :param source_arn: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01e6e735090832c291790a06f49b83bc025865ddaaaf8c3680306c293195214f)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument trigger_config", value=trigger_config, expected_type=type_hints["trigger_config"])
            check_type(argname="argument trigger_name", value=trigger_name, expected_type=type_hints["trigger_name"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument invocation_role", value=invocation_role, expected_type=type_hints["invocation_role"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument source_arn", value=source_arn, expected_type=type_hints["source_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "service_name": service_name,
            "trigger_config": trigger_config,
            "trigger_name": trigger_name,
            "trigger_type": trigger_type,
        }
        if invocation_role is not None:
            self._values["invocation_role"] = invocation_role
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if source_arn is not None:
            self._values["source_arn"] = source_arn

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: Function name.
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name.
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        '''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        '''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        '''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        result = self._values.get("source_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTriggerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVersion(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosVersion",
):
    '''A ROS template type:  ``ALIYUN::FC::Version``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Version``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df7608749de4320a251feb478329ee86efdf8c2d890f2833d9ce4663fa8d8fca)
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
            type_hints = typing.get_type_hints(_typecheckingstub__458d69044af6f367e7187f87d8fc7281910dde590edbc161571dc86c0a36cc50)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VersionId: The version ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__ca193dbc8bb4aee5c722e6079672cad028ed3231d8802a78069812bcaea19245)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="serviceName")
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fddbf9ba87d6ce3159a22d6970bba088b7580561ba36447e819650820eb3fac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9620343fa81833d44b24801a41c55d12f034922c1811a17c768781bec2ae026e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.RosVersionProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "description": "description"},
)
class RosVersionProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__653b2d3e0f5b5dad7c796632de3d4b67b3e1f1558c5fbb6e7f692a3792d92595)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Service(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Service",
):
    '''A ROS resource type:  ``ALIYUN::FC::Service``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ServiceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Service``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb8194f81638125638f7dda6a99cc1c7cc1f29b8f33832f742934b5f0323ad0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInternetAccess")
    def attr_internet_access(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetAccess: Whether enable Internet access.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetAccess"))

    @builtins.property
    @jsii.member(jsii_name="attrLogProject")
    def attr_log_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogProject: Log project of service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogProject"))

    @builtins.property
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Logstore: Log store of service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogstore"))

    @builtins.property
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Role: Role of service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceId: The service ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: Tags of service.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.ServiceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_name": "serviceName",
        "deletion_force": "deletionForce",
        "description": "description",
        "internet_access": "internetAccess",
        "log_config": "logConfig",
        "nas_config": "nasConfig",
        "role": "role",
        "tags": "tags",
        "tracing_config": "tracingConfig",
        "vpc_bindings": "vpcBindings",
        "vpc_config": "vpcConfig",
    },
)
class ServiceProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosService.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_bindings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Service``.

        :param service_name: Property serviceName: Service name.
        :param deletion_force: Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        :param description: Property description: Service description.
        :param internet_access: Property internetAccess: Set it to true to enable Internet access.
        :param log_config: Property logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        :param nas_config: Property nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        :param role: Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        :param tags: Property tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        :param tracing_config: Property tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        :param vpc_bindings: Property vpcBindings: Function Invocation only by Specified VPCs. By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        :param vpc_config: Property vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7300a9fdc77179a9c4b0f6b9bd4f9de65d14203b82b7f8cd3415ad00d4cc26c0)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tracing_config", value=tracing_config, expected_type=type_hints["tracing_config"])
            check_type(argname="argument vpc_bindings", value=vpc_bindings, expected_type=type_hints["vpc_bindings"])
            check_type(argname="argument vpc_config", value=vpc_config, expected_type=type_hints["vpc_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if internet_access is not None:
            self._values["internet_access"] = internet_access
        if log_config is not None:
            self._values["log_config"] = log_config
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if role is not None:
            self._values["role"] = role
        if tags is not None:
            self._values["tags"] = tags
        if tracing_config is not None:
            self._values["tracing_config"] = tracing_config
        if vpc_bindings is not None:
            self._values["vpc_bindings"] = vpc_bindings
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Service description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetAccess: Set it to true to enable Internet access.'''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.LogConfigProperty]]:
        '''Property logConfig: Log configuration.

        Function Compute pushes function execution logs to the configured log store.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.LogConfigProperty]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.NasConfigProperty]]:
        '''Property nasConfig: NAS configuration.

        Function Compute uses a specified NAS configured on the service.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.NasConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.

        The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosService.TagsProperty]]:
        '''Property tags: Tags to attach to service.

        Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosService.TagsProperty]], result)

    @builtins.property
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.TracingConfigProperty]]:
        '''Property tracingConfig: The Tracing Analysis configuration.

        After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.TracingConfigProperty]], result)

    @builtins.property
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property vpcBindings: Function Invocation only by Specified VPCs.

        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        result = self._values.get("vpc_bindings")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.VpcConfigProperty]]:
        '''Property vpcConfig: VPC configuration.

        Function Compute uses the config to setup ENI in the specific VPC.
        '''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.VpcConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Trigger(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Trigger",
):
    '''A ROS resource type:  ``ALIYUN::FC::Trigger``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TriggerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Trigger``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcd49763e31e26993366c1874568402516c2eb200873ba037718ce7a76fd0bf4)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FunctionName: Function name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: Service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TriggerId: The trigger ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TriggerName: Trigger name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTriggerName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.TriggerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "service_name": "serviceName",
        "trigger_config": "triggerConfig",
        "trigger_name": "triggerName",
        "trigger_type": "triggerType",
        "invocation_role": "invocationRole",
        "qualifier": "qualifier",
        "source_arn": "sourceArn",
    },
)
class TriggerProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Trigger``.

        :param function_name: Property functionName: Function name.
        :param service_name: Property serviceName: Service name.
        :param trigger_config: Property triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        :param trigger_name: Property triggerName: Trigger name. Example : "image_resize"
        :param trigger_type: Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".
        :param invocation_role: Property invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers. Example : "acs:ram::1234567890:role/fc-test"
        :param qualifier: Property qualifier: service version or alias. Example : "LATEST"
        :param source_arn: Property sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers. Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67e6f2d4d3f5b9bcbc6ddadc8d47cfe59b27f68c1075c51017bc2d34ae3a62b0)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument trigger_config", value=trigger_config, expected_type=type_hints["trigger_config"])
            check_type(argname="argument trigger_name", value=trigger_name, expected_type=type_hints["trigger_name"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument invocation_role", value=invocation_role, expected_type=type_hints["invocation_role"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument source_arn", value=source_arn, expected_type=type_hints["source_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "service_name": service_name,
            "trigger_config": trigger_config,
            "trigger_name": trigger_name,
            "trigger_type": trigger_type,
        }
        if invocation_role is not None:
            self._values["invocation_role"] = invocation_role
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if source_arn is not None:
            self._values["source_arn"] = source_arn

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property triggerConfig: Event source specific trigger configuration.

        The value is different according to trigger type.
        '''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property triggerName: Trigger name.

        Example : "image_resize"
        '''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".'''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property invocationRole: The role grants event source the permission to run function on behalf of user.

        This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qualifier: service version or alias.

        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceArn: The Aliyun Resource Name (ARN) of event source.

        This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        result = self._values.get("source_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TriggerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Version(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Version",
):
    '''A ROS resource type:  ``ALIYUN::FC::Version``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VersionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Version``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd2997f5e6569914b463c1f79b73a6c88752ec83cf145e43f9168983c80de67d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VersionId: The version ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.VersionProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "description": "description"},
)
class VersionProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: Property serviceName: Service name.
        :param description: Property description: Version description.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13ec4255182745d3fc106aa5f63745e584e3f9efe34e463eb7b2d3e8030d61f0)
            check_type(argname="argument service_name", value=service_name, expected_type=type_hints["service_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Version description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Alias",
    "AliasProps",
    "CustomDomain",
    "CustomDomainProps",
    "Function",
    "FunctionInvoker",
    "FunctionInvokerProps",
    "FunctionProps",
    "Layer",
    "LayerProps",
    "ProvisionConfig",
    "ProvisionConfigProps",
    "RosAlias",
    "RosAliasProps",
    "RosCustomDomain",
    "RosCustomDomainProps",
    "RosFunction",
    "RosFunctionInvoker",
    "RosFunctionInvokerProps",
    "RosFunctionProps",
    "RosLayer",
    "RosLayerProps",
    "RosProvisionConfig",
    "RosProvisionConfigProps",
    "RosService",
    "RosServiceProps",
    "RosTrigger",
    "RosTriggerProps",
    "RosVersion",
    "RosVersionProps",
    "Service",
    "ServiceProps",
    "Trigger",
    "TriggerProps",
    "Version",
    "VersionProps",
]

publication.publish()

def _typecheckingstub__772e0d103fffa9da9ade8518d261f118496ba0941a8882e4c15f124d62b11163(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c91ff6c967c6829682d9376b378dc39c92775ece80dc8efcd4432ee1bff772a(
    *,
    alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f58f0113247a03f4642f33f9d0defc95ae23241121b9a53694e9b66f6c0e1768(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c2b9c84231254321bf669d62541147d47b8f3b3471eaf536acd1a317b24da88(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__947ce5d6071a30cf688985b69d441099ca6622c43f31978df49ebcc0862268d3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FunctionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af70aa1668ff515bb55f139b1374aa061168c048083e6c31b78ffcb7b0267725(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FunctionInvokerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e7a86e7ce9d008070601a9ae21c7284c92ed770345b7a269561736c2800507d(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__419b3d8ce741f435e8d508f9b34c6959f721cc0bfb0ece17f2d3d365c428728c(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.AsyncConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ca_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    initialization_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initializer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f17f46fbdc172c35638c46efaa61ee0f7bd5e894f5295193c0fd631c28336040(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LayerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d43138895f7a8accd5d0446aa32e7138b23c8055c237d791c31416e3a56899b(
    *,
    code: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLayer.CodeProperty, typing.Dict[builtins.str, typing.Any]]],
    compatible_runtime: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    layer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4654009d3283fc872e25fa32301161db451b9b157f74e158a828ac4a810d639(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProvisionConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f7074ccca992abac7fcc84d55741b553cbc42b9b37e3d765a13ec5207cb6650(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbfd979e3e568557a5e19fc85ac8507bb057717bfd14ef7a9abf0cc36b9bf86f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bd0c31c72e272a505217184f7518bb9eea58f44c66ae33aa1f989d2b7e566b7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e680bdc1939decb3c72a0564973a95690a64bef32b4a68d97117c435e1b8006(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__637a309d9e171f1334e0cb7828877668f31b78990ad9ed50251f74596bf230ca(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3843cc6edc067cc9ba33ed3886384a756ea4ec2c942df279b0ef575a78f0613d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d027f60056610ec420cf1e0cc582139f29f50880d3f5b40b4f165c33aabe68c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df4d764d8faeee47973c010993e28b3fa517b95cda30baad2a4cd6a8e40fcc32(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb6b929a7d522099757cb06bff7bfaa72587f4179e26084bbefcce31f463e9e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8264224084a2264fb210abc0cf1dd5a8d27ce4e7aab3ddb7f208d97188457486(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55fafbb8f9c3619a221afd066f16c1234c71ddf7671c912f816eee3e760ba81d(
    *,
    alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    additional_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    additional_weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__971d046c154871887db31ed44aeb64ec8b0252612fcef4e45e6ffbd0f3b644e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dad1184193ceca19f069db15f612d3251a4fe23405e9f8a91b3e6987f2d5ee64(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e834aaab4857dec0f0753188ce6568590ed187ccf5cdc0f42a6b43036499e5c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ea6965f916113bc4a937d2021ce3a2675de0ff5707782ca257cdf82b34767b6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__112f108810122c7d232739ec7fd10fb5f1bc70f56389149603177ee7afd9e867(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20cdb55684463ff6c1b85624aaaaf9b740380a23f1b6725295a1fd4f4db83b01(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ba5509d39e444da9927dfc9ba682825a71f307a6ba6cb305860e1e38f41b6f5(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.CertConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d69d8b02b3fcb7c8aa723f9959d6b376f4fd35a9e6e876d4fa26bb363bc46ec(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.RouteConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__566d6dc1cbcee3929d7795d69b8fd4c786a285b2f15b4058d053ed547e7b3c9b(
    *,
    certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff3e0a3f2582683a049d820c4f6bd1c11a4d62672fb5b1a6692ce26d7e7c5b04(
    *,
    routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37019fa69514190f4489156cf3ff3a0ebea0df22465e9e150c210e8ed34c0dcf(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__119d2a133da169fdd76e3e6245916ffcdf7a92fcfe3547b96f942ad461c39a0d(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    api_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a939ef56cfb3defcf45fe011f04a578f7b68d8e8eae73a73b4071c446fdec46(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFunctionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb22d12f0d902e88058f4c4c6e00e98acdd41bd0b3eccc0245315d60d10a4171(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc0f0cb4f8dc5475efc80cb37fe09a0d66dc8a2f162cfeaedd620272b6b12dc9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b02c834dfbf2c47af2d7223539844dd55f74a0bf8d3de4940d4df0fb66cf65de(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e15cc44e2f5da40f83440fc558611d6be2b246f81b2332e81d97818827e2562(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eb863b009d59b505f630661c9bf04791af7489b367937aea1495dd810508b05(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05d57741bc9b328039211c1781fa25ddae22111d6fe0f25dd7fe8ae423bbe70e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e53d6bb2df75e6233c45b9a8382eba7512c2328079f66cbb111a2d9bac92142(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.AsyncConfigurationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a74e929fac34f9ab10ce3c612fe59c33456c9a19e1aae1ba5bce6f95df093cd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f21a959e3c37f8983eeb10da484208d11c0e5d9603385f9d916f35aac4c15700(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27c5255655d66afd5ae118a4bf10ba75adaee472b4391ffe87969cafa0c449b6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32b84c903f4856551ba56eb9f39817fd65a8f8497f38f0d8ceca54746657f147(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e461fa531b6d30445d99cd7aea2d0ecc002f8683ee95bc53b799923f34b4e9c2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecd6b6bfaa6bf0e26e443022cb80ef3ce546e7f04a7aa486b063f82f28d07e65(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aebe4a357a128589009cf884a6d5d199e161abc51fb1bd95295b2f65c2aa17f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ded4fd8bcb6269dad43c13498e8032be76df43f6fdeef7d0f79c1ee186cc68d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8c4f88add70aee6d39b1ab483f9c31d4b82381b93cd9a7d322fdf81d90a7305(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721360e2468ac230c1bbb6980380bdd43c996c46a2b80946a037f369be21279f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62e711b31b3dfba999758bd166f92069ee5b7f0db9ab27f7ec165d418d4bb4b6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f61b7dcc425ad09e2ac8f5b36466f2d04bf91b9f80be1a4ec920b47ea8790b1d(
    *,
    destination: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.DestinationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    stateful_invocation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c170db4bada8f559e3f167b7571c7592f539031fcc44ff574d4ab22311944ad(
    *,
    oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a501117936073f2b8dcc8c48039bef68d4e5e1390f7ffa57a0b3431244da4689(
    *,
    image: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acceleration_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    args: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24a87e0189c64e462f213b364b9cf36b6df845d47e90443187ad7b61c66e8cab(
    *,
    on_failure: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    on_success: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__672ce870ce0441581c7a11bcee59088acafb760ec8b64bfeedd96f54291169a4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFunctionInvokerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0e12f19b8f2e1d93ec78548a70e2a3c9cafc425647c729d34edcd3041d32f4f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c7e2315793c8308c271178fd4feee2d55e2cd1db9470bbef8b1edba597a45d7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff0f0c403e0c25013372f1b7f5ea450b292f8641dfc781538dc93546afe7f255(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eafaa27d65766712fee9919e756c97c27e100279c412dc1b96268521a758900(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6563787efea2e3d3db144b6f55c864d65fa3e883fa40c62acd92d481b5b38a1d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6abe1d1ff95c5ac47469eb84bf870ace0f3ae3cfaf550d200ed5375427889a0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b9eb96a43a010e120e213e2561a4b86cd2bc8cc4e3d963cefc625fa14a5381e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__717416219bd601ba04c31a553ca42049d5f320d0dee91f9d6a2d32e094aafced(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbe684859c16cb48fdf51f23739609dad129cbe28f59fc2fc2d60d581e004c2a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f1138e386208a1051e2abaf1ba7cbe3c4d8c370887e667c1c3b0d39783921ef(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0625b9dee1af3100f4c81b51eca7c539927bd4936c5b4413ac316bc92b67c85(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76a20e0f02286b7e78526b1ddbc720cc4ee6eb18257a0bee8987db2ccc69f04c(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_configuration: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.AsyncConfigurationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ca_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    initialization_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initializer: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa4d61cad087d02cb9656fa43c7c322202da7665a4f4920594abdf4fbae9c4b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLayerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5efa7937463ad486164894983fe5fe3dc35b82403362fda32f781582a7da6730(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a218bcf8d80ea16c2f049021402de4d3f2f8ceea69948955b7b4ab94704d9783(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLayer.CodeProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dee07572df26fdb9838668e7d769dae6aa5fbf5a5dfe19de5d998a3f727e7b88(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f432dd0be8a86ecc81c0a87e86e99624221cd3f0155915658396a6f736b0d9b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd666090889d50d9c93098bc064a8021a4062b0f0843d9c4c125ce5417149d24(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4dc7bbb99c4e8edf2c9a9e18de11d4be1138454c75c3b9d44ad629340d171692(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33878f2e2791630f36f178fe0017d9eea77fe1bec0e8803bfa6eac934781a7ef(
    *,
    oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f2a172ff561a6e7deecc7f2e8db04da3a97254b82d8472508bcecca7b1c04cc(
    *,
    code: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLayer.CodeProperty, typing.Dict[builtins.str, typing.Any]]],
    compatible_runtime: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    layer_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4a3b43165f3ece8fc03fb6aca471e86f005d8ba33a128a78e7c2720a4ba5b28(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProvisionConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7afe1aabdd067ef3d130f8600f262d6874d05c93b61a06358af3726777f9e54(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebdc7d0187d5b62667ed84dfdcb6e607a18dfda696e11b562cf078e7ab438c8f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bcbbdf515554558355e53f73124d6c6feeb73a2608349a04b64b3c5044fe60b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__905923bae9bd2fa36bb9b3f74c5d68d74eee1e48bab5c1843a9d754fb62526d1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc793593bbce14f6830c695d8adce240ff7f5a7a4126ab8ed236b79f5f55c05b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de612ccb704999bba643e4ab918fd3f352cc7f6d4d475831791dc6162cb70b44(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__477df474d79d45de2273292c3b7abf52cc6898ca41b23475201db280642d6627(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__358feb38e9afee44c9d320b485d206ba11e14b1eb19f86ba60822de41e4bf28c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e11a726d7d01e1ba1bd18e983c13c9ec341c96990507f0a101aaf2291fc4dbe8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dac66ad1b068c52e7091e4f148fe81b83d551ae14a0cf8d7f5ad6569771e784c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64642bc174fa98b4f04008280add6f678211492e8927bcff689d40acaba92c70(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d368c4294af5c4d9c3fde891d7d5c8b6e26ff397224d541339088ef549583350(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1aa7b963299571bc817845f70754f1e64f28b282b65b30922569e4150a0de838(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2bd2bddeed2e5f925eb463060311b0661274f63e692e975f034392d10c8e7e6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d5bceb6890edd88073036e50eeb9675026be56f3da2767849acd7c17fcb80be(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.LogConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90898fedd84da590ce89d40fbced53bf9e1859dafff472a661225f02e383e563(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.NasConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d8d6ddddae8f514fce8462955f20ff9dfbf5cd1fe26df201d3ceedd5701fc06(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b01126be144c83e8412f182c7c6b052697b0f48b04969a7c78a8c166a1137ddc(
    value: typing.Optional[typing.List[RosService.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31d4357619f254ee432d54282d4d69463ab5e64a9fbdb1f35d4dc9d17826162f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.TracingConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98dfeb149bb719c8a3c3241cb907e77b233214ffc5e6f1bada832e4e45b4e665(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__910c49247e95468066b2e276f8b50d26416dc72ff8d4e91347774ca270d069e1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosService.VpcConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31f6dbe76fc6276f14ecdb4a59937f17bc24cd7853a1a19d28649a1f47c0f270(
    *,
    enable_request_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_begin_rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logstore: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d9c50a9c6616e6f9584bb9d44584e61ab0c37aefa82f77e4528e7368c44c655(
    *,
    mount_dir: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_addr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a5e389c362d85bfe13ab7874222b77e8925c97d3a9a891e7dbe751b83717e88(
    *,
    group_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    mount_points: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.MountPointsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    user_id: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53f87c34bda4b7765204ef93ba02b0941247a11c6c3b8ae6cb4d1478e2eaa6da(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3164c2cff65e77270e264a46fccabaccc7bae85d64e09865021772db5c35aa72(
    *,
    params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb9ddd9ddbd8b81a4103b4d31427216da48339ebb746694ca4f5087cf1ad4e7e(
    *,
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d316246cfaeec1ab55cbc3ca7525984fc86cdc5141543e9cc32422d2ebf3abcd(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosService.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_bindings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d178d81357d2fa5320962a3a8ee436866fb1319712d7643608e1a7048101b13e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTriggerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d45ff73ed80c59718ac5aed78d83e3daecf0102c90aa5d79c073df8daac1beb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__723a2fa378f6e597091d09bfd98bb2a558b09144539393a0d70e7dd18cd4365c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d2fe98cbadf60ae67a6746947edc7ec6a2c901cacce4f0b61622f4b63f74696(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46c6d91b008ec642e3ebf82e44e94a9710b637b22fbdb18bd6ae497a3509cf43(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fbae89626cad401d5ce01a0066ec5481f7c9ff3f00f983fdb4e4a719a6de7a7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f886d8356c3c1e6aea7953ff0d8781c64d0867b396a4f3c1abe7b0fae81c7996(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9afd6475eaaa93ea090770d5308a16e88771d1b4b7892d4909f0c925e0339f00(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9ba0533d6628d68d1460f8d440ea8cc7edef5acdc24e5708de097e3de0d50b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__60df2d7045af4309457f5511dacd90ffd6007233d92ab47f21c7b39c58d1d3d4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f241969997f705406bfe3ad32bdfffbd6e6c2b96c4a99f14f0fd06d02efc2c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01e6e735090832c291790a06f49b83bc025865ddaaaf8c3680306c293195214f(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df7608749de4320a251feb478329ee86efdf8c2d890f2833d9ce4663fa8d8fca(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__458d69044af6f367e7187f87d8fc7281910dde590edbc161571dc86c0a36cc50(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca193dbc8bb4aee5c722e6079672cad028ed3231d8802a78069812bcaea19245(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fddbf9ba87d6ce3159a22d6970bba088b7580561ba36447e819650820eb3fac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9620343fa81833d44b24801a41c55d12f034922c1811a17c768781bec2ae026e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__653b2d3e0f5b5dad7c796632de3d4b67b3e1f1558c5fbb6e7f692a3792d92595(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb8194f81638125638f7dda6a99cc1c7cc1f29b8f33832f742934b5f0323ad0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ServiceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7300a9fdc77179a9c4b0f6b9bd4f9de65d14203b82b7f8cd3415ad00d4cc26c0(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosService.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_bindings: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosService.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcd49763e31e26993366c1874568402516c2eb200873ba037718ce7a76fd0bf4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TriggerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67e6f2d4d3f5b9bcbc6ddadc8d47cfe59b27f68c1075c51017bc2d34ae3a62b0(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd2997f5e6569914b463c1f79b73a6c88752ec83cf145e43f9168983c80de67d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VersionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13ec4255182745d3fc106aa5f63745e584e3f9efe34e463eb7b2d3e8030d61f0(
    *,
    service_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
