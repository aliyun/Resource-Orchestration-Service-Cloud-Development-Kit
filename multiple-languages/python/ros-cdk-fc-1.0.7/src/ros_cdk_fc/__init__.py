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

from ._jsii import *

import ros_cdk_core


class Alias(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Alias",
):
    '''A ROS resource type:  ``ALIYUN::FC::Alias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AliasProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute AliasName: The alias name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliasName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VersionId: The version ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersionId"))


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
        alias_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        additional_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        additional_weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        version_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: Property aliasName: Alias name.
        :param service_name: Property serviceName: Service name.
        :param additional_version: Property additionalVersion: Additional version.
        :param additional_weight: Property additionalWeight: Traffic weight of additional version. From 0 to 100.
        :param description: Property description: Version description.
        :param version_id: Property versionId: Version ID.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aliasName: Alias name.'''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property additionalVersion: Additional version.'''
        result = self._values.get("additional_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property additionalWeight: Traffic weight of additional version.

        From 0 to 100.
        '''
        result = self._values.get("additional_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Version description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property versionId: Version ID.'''
        result = self._values.get("version_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomDomain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.CustomDomain",
):
    '''A ROS resource type:  ``ALIYUN::FC::CustomDomain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomDomainProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute Domain: The domain with protocol.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainName: The domain name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))


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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cert_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]] = None,
        route_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: Property domainName: domain name.
        :param protocol: Property protocol: HTTP or HTTP,HTTPS.
        :param api_version: Property apiVersion: api version.
        :param cert_config: Property certConfig: certificate info.
        :param route_config: Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domainName: domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property protocol: HTTP or HTTP,HTTPS.'''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property apiVersion: api version.'''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''Property certConfig: certificate info.'''
        result = self._values.get("cert_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]], result)

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        '''Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.'''
        result = self._values.get("route_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Function(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Function",
):
    '''A ROS resource type:  ``ALIYUN::FC::Function``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FunctionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute FunctionId: The function ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The service ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))


class FunctionInvoker(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.FunctionInvoker",
):
    '''A ROS resource type:  ``ALIYUN::FC::FunctionInvoker``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FunctionInvokerProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> ros_cdk_core.IResolvable:
        '''Attribute Result: Depends on result type: NoResult: Async invoke has no result.

        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResult"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResultType: Result type: NoResult: Async invoke has no result.

        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResultType"))


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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        async_: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property async: Invocation type, Sync or Async.

        Defaults to Sync.
        '''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property checkError: Whether check error for function invocation result.

        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        result = self._values.get("check_error")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.'''
        result = self._values.get("event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property executeVersion: If the property is not specified for creation and update, the function will not be invoked.

        The change of the property leads to the invoke of the function.
        '''
        result = self._values.get("execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property qualifier: service version, can be versionId or aliasName.'''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceRegionId: Which region service belongs to.'''
        result = self._values.get("service_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        handler: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        runtime: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        async_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]] = None,
        ca_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]] = None,
        custom_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        initializer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        :param timeout: Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property handler: The function execution entry point.'''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property runtime: The function runtime environment.

        Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        '''Property asyncConfiguration: Configuration of asynchronous function calls.'''
        result = self._values.get("async_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]], result)

    @builtins.property
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.

        The default value is 9000
        '''
        result = self._values.get("ca_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]]:
        '''Property code: The code that contains the function implementation.'''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''Property customContainerConfig: Custom container runtime related configuration.

        After configuration, the function can be replaced with a custom container to execute the function
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Function description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.'''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property initializationTimeout: the max execution time of the initializer, in second.'''
        result = self._values.get("initialization_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property initializer: the entry point of the initializer.'''
        result = self._values.get("initializer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property instanceConcurrency: Function instance concurrency.

        Value can be between 1 to 100.
        '''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceType: Instance type.

        Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property memorySize: The amount of memory that’s used to run function, in MB.

        Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property timeout: The maximum time duration a function can run, in seconds.

        After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Layer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Layer",
):
    '''A ROS resource type:  ``ALIYUN::FC::Layer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LayerProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute Arn: The name of the layer resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLayerName")
    def attr_layer_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LayerName: The name of layer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLayerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute Version: The version of the layer resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))


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
        code: typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"],
        compatible_runtime: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        layer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Layer``.

        :param code: Property code: The code of layer.
        :param compatible_runtime: Property compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        :param layer_name: Property layerName: The name of layer.
        :param description: Property description: The description of the layer.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "code": code,
            "compatible_runtime": compatible_runtime,
            "layer_name": layer_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def code(self) -> typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"]:
        '''Property code: The code of layer.'''
        result = self._values.get("code")
        assert result is not None, "Required property 'code' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"], result)

    @builtins.property
    def compatible_runtime(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property compatibleRuntime: The runtime environment supported by the layer.

        For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        result = self._values.get("compatible_runtime")
        assert result is not None, "Required property 'compatible_runtime' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def layer_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property layerName: The name of layer.'''
        result = self._values.get("layer_name")
        assert result is not None, "Required property 'layer_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the layer.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LayerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProvisionConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.ProvisionConfig",
):
    '''A ROS resource type:  ``ALIYUN::FC::ProvisionConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProvisionConfigProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> ros_cdk_core.IResolvable:
        '''Attribute Qualifier: The service alias.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQualifier"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> ros_cdk_core.IResolvable:
        '''Attribute Resource: The resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> ros_cdk_core.IResolvable:
        '''Attribute Target: Number of provision.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTarget"))


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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        qualifier: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: Property functionName: Function name.
        :param qualifier: Property qualifier: Service's alias. Example : "LATEST"
        :param service_name: Property serviceName: Service name.
        :param target: Property target: Number of provision.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qualifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property qualifier: Service's alias.

        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property target: Number of provision.'''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlias(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosAlias",
):
    '''A ROS template type:  ``ALIYUN::FC::Alias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAliasProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AliasName: The alias name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAliasName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VersionId: The version ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aliasName")
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aliasName: Alias name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aliasName"))

    @alias_name.setter
    def alias_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aliasName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="additionalVersion")
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: additionalVersion: Additional version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "additionalVersion"))

    @additional_version.setter
    def additional_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "additionalVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="additionalWeight")
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "additionalWeight"))

    @additional_weight.setter
    def additional_weight(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "additionalWeight", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="versionId")
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: versionId: Version ID
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "versionId"))

    @version_id.setter
    def version_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        alias_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        additional_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        additional_weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        version_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: 
        :param service_name: 
        :param additional_version: 
        :param additional_weight: 
        :param description: 
        :param version_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aliasName: Alias name
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def additional_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: additionalVersion: Additional version
        '''
        result = self._values.get("additional_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def additional_weight(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        '''
        result = self._values.get("additional_weight")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: versionId: Version ID
        '''
        result = self._values.get("version_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomDomain(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosCustomDomain",
):
    '''A ROS template type:  ``ALIYUN::FC::CustomDomain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Domain: The domain with protocol.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainName: The domain name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: domain name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protocol")
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocol: HTTP or HTTP,HTTPS
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "protocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="apiVersion")
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: apiVersion: api version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "apiVersion"))

    @api_version.setter
    def api_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "apiVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certConfig")
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''
        :Property: certConfig: certificate info
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]], jsii.get(self, "certConfig"))

    @cert_config.setter
    def cert_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]],
    ) -> None:
        jsii.set(self, "certConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeConfig")
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        '''
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]], jsii.get(self, "routeConfig"))

    @route_config.setter
    def route_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]],
    ) -> None:
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
            certificate: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            cert_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            private_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param certificate: 
            :param cert_name: 
            :param private_key: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "certificate": certificate,
                "cert_name": cert_name,
                "private_key": private_key,
            }

        @builtins.property
        def certificate(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: certificate: certificate
            '''
            result = self._values.get("certificate")
            assert result is not None, "Required property 'certificate' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def cert_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: certName: custom certificate name
            '''
            result = self._values.get("cert_name")
            assert result is not None, "Required property 'cert_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def private_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: privateKey: private key
            '''
            result = self._values.get("private_key")
            assert result is not None, "Required property 'private_key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            routes: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RoutesProperty"]]],
        ) -> None:
            '''
            :param routes: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "routes": routes,
            }

        @builtins.property
        def routes(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RoutesProperty"]]]:
            '''
            :Property: routes: PathConfig Array
            '''
            result = self._values.get("routes")
            assert result is not None, "Required property 'routes' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RoutesProperty"]]], result)

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
            function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            path: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param function_name: 
            :param path: 
            :param service_name: 
            :param qualifier: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "function_name": function_name,
                "path": path,
                "service_name": service_name,
            }
            if qualifier is not None:
                self._values["qualifier"] = qualifier

        @builtins.property
        def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: functionName: Path to the function, for example: "login"
            '''
            result = self._values.get("function_name")
            assert result is not None, "Required property 'function_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def path(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
            '''
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serviceName: Path to the service, for example: "blogService"
            '''
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def qualifier(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: qualifier: Service version or alias
            '''
            result = self._values.get("qualifier")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        api_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cert_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.CertConfigProperty]] = None,
        route_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.RouteConfigProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: 
        :param protocol: 
        :param api_version: 
        :param cert_config: 
        :param route_config: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocol: HTTP or HTTP,HTTPS
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def api_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: apiVersion: api version
        '''
        result = self._values.get("api_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.CertConfigProperty]]:
        '''
        :Property: certConfig: certificate info
        '''
        result = self._values.get("cert_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.CertConfigProperty]], result)

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.RouteConfigProperty]]:
        '''
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        '''
        result = self._values.get("route_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.RouteConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFunction(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosFunction",
):
    '''A ROS template type:  ``ALIYUN::FC::Function``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFunctionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Function``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ARN: The ARN for ALIYUN::ROS::CustomResource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FunctionId: The function ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FunctionName: The function name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The service ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="handler")
    def handler(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: handler: The function execution entry point.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "handler"))

    @handler.setter
    def handler(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "handler", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="runtime")
    def runtime(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "runtime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="asyncConfiguration")
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        '''
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]], jsii.get(self, "asyncConfiguration"))

    @async_configuration.setter
    def async_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "asyncConfiguration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="caPort")
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "caPort"))

    @ca_port.setter
    def ca_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "caPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="code")
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]]:
        '''
        :Property: code: The code that contains the function implementation.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]], jsii.get(self, "code"))

    @code.setter
    def code(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]],
    ) -> None:
        jsii.set(self, "code", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="customContainerConfig")
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]], jsii.get(self, "customContainerConfig"))

    @custom_container_config.setter
    def custom_container_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]],
    ) -> None:
        jsii.set(self, "customContainerConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Function description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "environmentVariables"))

    @environment_variables.setter
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "environmentVariables", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="initializationTimeout")
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: initializationTimeout: the max execution time of the initializer, in second
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "initializationTimeout"))

    @initialization_timeout.setter
    def initialization_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "initializationTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="initializer")
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: initializer: the entry point of the initializer
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "initializer"))

    @initializer.setter
    def initializer(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "initializer", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceConcurrency")
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "instanceConcurrency"))

    @instance_concurrency.setter
    def instance_concurrency(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceConcurrency", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="memorySize")
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "memorySize"))

    @memory_size.setter
    def memory_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "memorySize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
            destination: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.DestinationProperty"]] = None,
            max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            stateful_invocation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param destination: 
            :param max_async_event_age_in_seconds: 
            :param max_async_retry_attempts: 
            :param stateful_invocation: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.DestinationProperty"]]:
            '''
            :Property: destination: Set destination of asynchronous function calls
            '''
            result = self._values.get("destination")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.DestinationProperty"]], result)

        @builtins.property
        def max_async_event_age_in_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
            '''
            result = self._values.get("max_async_event_age_in_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def max_async_retry_attempts(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: maxAsyncRetryAttempts: Configure the number of retries
            '''
            result = self._values.get("max_async_retry_attempts")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def stateful_invocation(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: statefulInvocation: Whether enable stateful invocation
            '''
            result = self._values.get("stateful_invocation")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

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
            oss_bucket_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            oss_object_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            source_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            zip_file: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param source_code: 
            :param zip_file: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            ossBucketName: OSS bucket name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_object_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            ossObjectName: OSS object name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_object_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def source_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
            Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("source_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def zip_file(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            zipFile: Base64 encoded zip file content.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            '''
            result = self._values.get("zip_file")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            image: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            acceleration_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            args: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            command: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param image: 
            :param acceleration_type: 
            :param args: 
            :param command: 
            :param instance_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def image(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
            '''
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def acceleration_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            accelerationType: Whether to enable image acceleration. Valid Values:
            Default: Indicates that image acceleration is enabled.
            None: Indicates that image acceleration is disabled.
            '''
            result = self._values.get("acceleration_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: args: Container startup parameters. For example: ["-arg1", "value1"]
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: command: Container start command. For example: ["/code/myserver"]
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: instanceId: The ID of the Container Registry Enterprise Edition instance. If you use an Enterprise Edition instance for the container image, you must add the instance ID. The default resolution IP address of the instance must be the IP address of the virtual private cloud (VPC) that the instance belongs. Alibaba Cloud DNS PrivateZone cannot be used for domain name resolution.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            on_failure: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            on_success: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param on_failure: 
            :param on_success: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if on_failure is not None:
                self._values["on_failure"] = on_failure
            if on_success is not None:
                self._values["on_success"] = on_success

        @builtins.property
        def on_failure(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
            '''
            result = self._values.get("on_failure")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def on_success(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
            '''
            result = self._values.get("on_success")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosFunctionInvoker(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosFunctionInvoker",
):
    '''A ROS template type:  ``ALIYUN::FC::FunctionInvoker``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFunctionInvokerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::FunctionInvoker``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        Result: Depends on result type:
        NoResult: Async invoke has no result.
        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResult"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        ResultType: Result type:
        NoResult: Async invoke has no result.
        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResultType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="async")
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "async"))

    @async_.setter
    def async_(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "async", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="checkError")
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "checkError"))

    @check_error.setter
    def check_error(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "checkError", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="event")
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "event"))

    @event.setter
    def event(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "event", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="executeVersion")
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "executeVersion"))

    @execute_version.setter
    def execute_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "executeVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: qualifier: service version, can be versionId or aliasName
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceRegionId")
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceRegionId: Which region service belongs to.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceRegionId"))

    @service_region_id.setter
    def service_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        async_: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        '''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        '''
        result = self._values.get("check_error")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def event(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        '''
        result = self._values.get("event")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def execute_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        '''
        result = self._values.get("execute_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: qualifier: service version, can be versionId or aliasName
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceRegionId: Which region service belongs to.
        '''
        result = self._values.get("service_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        handler: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        runtime: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        async_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.AsyncConfigurationProperty]] = None,
        ca_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CodeProperty]] = None,
        custom_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CustomContainerConfigProperty]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        initializer: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: handler: The function execution entry point.
        '''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        '''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.AsyncConfigurationProperty]]:
        '''
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        '''
        result = self._values.get("async_configuration")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.AsyncConfigurationProperty]], result)

    @builtins.property
    def ca_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        '''
        result = self._values.get("ca_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CodeProperty]]:
        '''
        :Property: code: The code that contains the function implementation.
        '''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CodeProperty]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CustomContainerConfigProperty]]:
        '''
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CustomContainerConfigProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Function description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        '''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def initialization_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: initializationTimeout: the max execution time of the initializer, in second
        '''
        result = self._values.get("initialization_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def initializer(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: initializer: the entry point of the initializer
        '''
        result = self._values.get("initializer")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        '''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        '''
        result = self._values.get("instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        '''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLayer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosLayer",
):
    '''A ROS template type:  ``ALIYUN::FC::Layer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLayerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Layer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Arn: The name of the layer resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLayerName")
    def attr_layer_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LayerName: The name of layer
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLayerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Version: The version of the layer resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="code")
    def code(self) -> typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"]:
        '''
        :Property: code: The code of layer.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"], jsii.get(self, "code"))

    @code.setter
    def code(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosLayer.CodeProperty"],
    ) -> None:
        jsii.set(self, "code", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compatibleRuntime")
    def compatible_runtime(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "compatibleRuntime"))

    @compatible_runtime.setter
    def compatible_runtime(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "compatibleRuntime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="layerName")
    def layer_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: layerName: The name of layer
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "layerName"))

    @layer_name.setter
    def layer_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "layerName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the layer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            oss_bucket_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            oss_object_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            zip_file: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param zip_file: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if oss_bucket_name is not None:
                self._values["oss_bucket_name"] = oss_bucket_name
            if oss_object_name is not None:
                self._values["oss_object_name"] = oss_object_name
            if zip_file is not None:
                self._values["zip_file"] = zip_file

        @builtins.property
        def oss_bucket_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            ossBucketName: The name of the Object Storage Service (OSS) bucket that
            stores the ZIP package of the function code.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def oss_object_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            ossObjectName: The name of the OSS object that stores the ZIP package of the function code.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("oss_object_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def zip_file(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            zipFile: The function code that is encoded in Base64.
            Priority: ZipFile > OssBucketName&OssObjectName.
            '''
            result = self._values.get("zip_file")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        code: typing.Union[ros_cdk_core.IResolvable, RosLayer.CodeProperty],
        compatible_runtime: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        layer_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Layer``.

        :param code: 
        :param compatible_runtime: 
        :param layer_name: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "code": code,
            "compatible_runtime": compatible_runtime,
            "layer_name": layer_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def code(self) -> typing.Union[ros_cdk_core.IResolvable, RosLayer.CodeProperty]:
        '''
        :Property: code: The code of layer.
        '''
        result = self._values.get("code")
        assert result is not None, "Required property 'code' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosLayer.CodeProperty], result)

    @builtins.property
    def compatible_runtime(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        '''
        result = self._values.get("compatible_runtime")
        assert result is not None, "Required property 'compatible_runtime' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def layer_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: layerName: The name of layer
        '''
        result = self._values.get("layer_name")
        assert result is not None, "Required property 'layer_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the layer.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLayerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProvisionConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosProvisionConfig",
):
    '''A ROS template type:  ``ALIYUN::FC::ProvisionConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProvisionConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::ProvisionConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FunctionName: The function name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Qualifier: The service alias
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQualifier"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Resource: The resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Target: Number of provision
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTarget"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="qualifier")
    def qualifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="target")
    def target(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: target: Number of provision
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "target"))

    @target.setter
    def target(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        qualifier: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: 
        :param qualifier: 
        :param service_name: 
        :param target: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qualifier(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: target: Number of provision
        '''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosService(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosService",
):
    '''A ROS template type:  ``ALIYUN::FC::Service``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Service``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetAccess")
    def attr_internet_access(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetAccess: Whether enable Internet access
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetAccess"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogProject")
    def attr_log_project(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogProject: Log project of service
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogProject"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Logstore: Log store of service
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstore"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Role: Role of service
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceId: The service ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Tags: Tags of service
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: VPC ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Service description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetAccess")
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetAccess: Set it to true to enable Internet access.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "internetAccess"))

    @internet_access.setter
    def internet_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetAccess", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logConfig")
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.LogConfigProperty"]]:
        '''
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.LogConfigProperty"]], jsii.get(self, "logConfig"))

    @log_config.setter
    def log_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.LogConfigProperty"]],
    ) -> None:
        jsii.set(self, "logConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nasConfig")
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.NasConfigProperty"]]:
        '''
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.NasConfigProperty"]], jsii.get(self, "nasConfig"))

    @nas_config.setter
    def nas_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.NasConfigProperty"]],
    ) -> None:
        jsii.set(self, "nasConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "role", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tracingConfig")
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.TracingConfigProperty"]]:
        '''
        :Property: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.TracingConfigProperty"]], jsii.get(self, "tracingConfig"))

    @tracing_config.setter
    def tracing_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.TracingConfigProperty"]],
    ) -> None:
        jsii.set(self, "tracingConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcBindings")
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        vpcBindings: Function Invocation only by Specified VPCs.
        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "vpcBindings"))

    @vpc_bindings.setter
    def vpc_bindings(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "vpcBindings", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcConfig")
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.VpcConfigProperty"]]:
        '''
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.VpcConfigProperty"]], jsii.get(self, "vpcConfig"))

    @vpc_config.setter
    def vpc_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.VpcConfigProperty"]],
    ) -> None:
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
            enable_request_metrics: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            log_begin_rule: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            logstore: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_request_metrics: 
            :param log_begin_rule: 
            :param logstore: 
            :param project: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            enableRequestMetrics: Specifies whether to enable the request-level metrics. If you enable this feature, you can view the time and memory that are consumed for a specific invocation of each function in the service. Valid values:
            false: disables request-level metrics.
            true: enables request-level metrics. Default value: true.
            '''
            result = self._values.get("enable_request_metrics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def log_begin_rule(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            logBeginRule: The log rotation rule. Log are split based on the rule. The log blocks obtained after the splitting are written to Log Service. Valid values:
            None: disables the log splitting rule. This is the default value.
            DefaultRegex: sets the log splitting rule to the default regular expression. If you set this parameter to DefaultRegex, logs are split based on the data in a log. For example, the line that contains 2021-10-10 in the log is considered as the first line of a log block. The first line and the following consecutive lines that do not contain dates in the log are written to Log Service as a whole.
            '''
            result = self._values.get("log_begin_rule")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def logstore(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: logstore: The log store name of Logs service
            '''
            result = self._values.get("logstore")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: project: The project name of Logs service
            '''
            result = self._values.get("project")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            mount_dir: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            server_addr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param mount_dir: 
            :param server_addr: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "mount_dir": mount_dir,
                "server_addr": server_addr,
            }

        @builtins.property
        def mount_dir(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: mountDir: A local mount point.
            '''
            result = self._values.get("mount_dir")
            assert result is not None, "Required property 'mount_dir' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_addr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverAddr: The address of NAS instance.
            '''
            result = self._values.get("server_addr")
            assert result is not None, "Required property 'server_addr' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
            group_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            mount_points: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosService.MountPointsProperty"]]],
            user_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param group_id: 
            :param mount_points: 
            :param user_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "group_id": group_id,
                "mount_points": mount_points,
                "user_id": user_id,
            }

        @builtins.property
        def group_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: groupId: Group ID
            '''
            result = self._values.get("group_id")
            assert result is not None, "Required property 'group_id' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosService.MountPointsProperty"]]]:
            '''
            :Property: mountPoints: Mount points
            '''
            result = self._values.get("mount_points")
            assert result is not None, "Required property 'mount_points' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosService.MountPointsProperty"]]], result)

        @builtins.property
        def user_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: userId: User ID
            '''
            result = self._values.get("user_id")
            assert result is not None, "Required property 'user_id' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            params: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param params: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if params is not None:
                self._values["params"] = params
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def params(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: params: The tracing analysis parameters.
            '''
            result = self._values.get("params")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: The type of the tracing analysis system.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            security_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_ids: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "security_group_id": security_group_id,
                "vpc_id": vpc_id,
                "v_switch_ids": v_switch_ids,
            }

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: securityGroupId: Security group ID
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vpcId: VPC ID
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchIds: List of VSwitch IDs
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

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
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]] = None,
        nas_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]] = None,
        role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosService.TagsProperty]] = None,
        tracing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]] = None,
        vpc_bindings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Service description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetAccess: Set it to true to enable Internet access.
        '''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]]:
        '''
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]]:
        '''
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]]:
        '''
        :Property: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]], result)

    @builtins.property
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        vpcBindings: Function Invocation only by Specified VPCs.
        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        result = self._values.get("vpc_bindings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]]:
        '''
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        '''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrigger(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosTrigger",
):
    '''A ROS template type:  ``ALIYUN::FC::Trigger``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTriggerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Trigger``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FunctionName: Function name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: Service name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TriggerId: The trigger ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTriggerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TriggerName: Trigger name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTriggerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="triggerConfig")
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "triggerConfig"))

    @trigger_config.setter
    def trigger_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "triggerConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="triggerName")
    def trigger_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "triggerName"))

    @trigger_name.setter
    def trigger_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "triggerName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="triggerType")
    def trigger_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "triggerType"))

    @trigger_type.setter
    def trigger_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "triggerType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="invocationRole")
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "invocationRole"))

    @invocation_role.setter
    def invocation_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "invocationRole", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceArn")
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sourceArn"))

    @source_arn.setter
    def source_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        trigger_config: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        trigger_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        invocation_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: functionName: Function name.
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name.
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        '''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        '''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def trigger_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        '''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        result = self._values.get("source_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTriggerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVersion(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosVersion",
):
    '''A ROS template type:  ``ALIYUN::FC::Version``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVersionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FC::Version``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ServiceName: The service name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VersionId: The version ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serviceName"))

    @service_name.setter
    def service_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serviceName: Service name
        '''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Version description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVersionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Service(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Service",
):
    '''A ROS resource type:  ``ALIYUN::FC::Service``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ServiceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetAccess")
    def attr_internet_access(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetAccess: Whether enable Internet access.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetAccess"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogProject")
    def attr_log_project(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogProject: Log project of service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogProject"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogstore")
    def attr_logstore(self) -> ros_cdk_core.IResolvable:
        '''Attribute Logstore: Log store of service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogstore"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRole")
    def attr_role(self) -> ros_cdk_core.IResolvable:
        '''Attribute Role: Role of service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRole"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceId: The service ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> ros_cdk_core.IResolvable:
        '''Attribute Tags: Tags of service.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))


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
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]] = None,
        nas_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]] = None,
        role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosService.TagsProperty]] = None,
        tracing_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]] = None,
        vpc_bindings: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Service description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property internetAccess: Set it to true to enable Internet access.'''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]]:
        '''Property logConfig: Log configuration.

        Function Compute pushes function execution logs to the configured log store.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]]:
        '''Property nasConfig: NAS configuration.

        Function Compute uses a specified NAS configured on the service.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.

        The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]]:
        '''Property tracingConfig: The Tracing Analysis configuration.

        After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        '''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.TracingConfigProperty]], result)

    @builtins.property
    def vpc_bindings(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property vpcBindings: Function Invocation only by Specified VPCs.

        By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        '''
        result = self._values.get("vpc_bindings")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]]:
        '''Property vpcConfig: VPC configuration.

        Function Compute uses the config to setup ENI in the specific VPC.
        '''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Trigger(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Trigger",
):
    '''A ROS resource type:  ``ALIYUN::FC::Trigger``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TriggerProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FunctionName: Function name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFunctionName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: Service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TriggerId: The trigger ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTriggerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute TriggerName: Trigger name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTriggerName"))


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
        function_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        trigger_config: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        trigger_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        invocation_role: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def function_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property triggerConfig: Event source specific trigger configuration.

        The value is different according to trigger type.
        '''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property triggerName: Trigger name.

        Example : "image_resize"
        '''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def trigger_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".'''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property invocationRole: The role grants event source the permission to run function on behalf of user.

        This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        '''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property qualifier: service version or alias.

        Example : "LATEST"
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sourceArn: The Aliyun Resource Name (ARN) of event source.

        This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        '''
        result = self._values.get("source_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TriggerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Version(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.Version",
):
    '''A ROS resource type:  ``ALIYUN::FC::Version``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VersionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ServiceName: The service name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrServiceName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VersionId: The version ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.VersionProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "description": "description"},
)
class VersionProps:
    def __init__(
        self,
        *,
        service_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: Property serviceName: Service name.
        :param description: Property description: Version description.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serviceName: Service name.'''
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Version description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
