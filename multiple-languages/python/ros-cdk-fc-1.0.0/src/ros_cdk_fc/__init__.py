"""
## Aliyun ROS FC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_fc as FC
```
"""
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
    """A ROS resource type:  ``ALIYUN::FC::Alias``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AliasProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Alias, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> typing.Any:
        """
        :Attribute: AliasName: The alias name
        """
        return jsii.get(self, "attrAliasName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> typing.Any:
        """
        :Attribute: VersionId: The version ID
        """
        return jsii.get(self, "attrVersionId")


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
        alias_name: builtins.str,
        service_name: builtins.str,
        additional_version: typing.Optional[builtins.str] = None,
        additional_weight: typing.Optional[jsii.Number] = None,
        description: typing.Optional[builtins.str] = None,
        version_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: 
        :param service_name: 
        :param additional_version: 
        :param additional_weight: 
        :param description: 
        :param version_id: 
        """
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
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: Alias name
        """
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def additional_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: additionalVersion: Additional version
        """
        result = self._values.get("additional_version")
        return result

    @builtins.property
    def additional_weight(self) -> typing.Optional[jsii.Number]:
        """
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        """
        result = self._values.get("additional_weight")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def version_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: versionId: Version ID
        """
        result = self._values.get("version_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::FC::CustomDomain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomDomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CustomDomain, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> typing.Any:
        """
        :Attribute: Domain: The domain with protocol.
        """
        return jsii.get(self, "attrDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: The domain name
        """
        return jsii.get(self, "attrDomainName")


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
        domain_name: builtins.str,
        protocol: builtins.str,
        api_version: typing.Optional[builtins.str] = None,
        cert_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]] = None,
        route_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: 
        :param protocol: 
        :param api_version: 
        :param cert_config: 
        :param route_config: 
        """
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
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def protocol(self) -> builtins.str:
        """
        :Property: protocol: HTTP or HTTP,HTTPS
        """
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return result

    @builtins.property
    def api_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: apiVersion: api version
        """
        result = self._values.get("api_version")
        return result

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        """
        :Property: certConfig: certificate info
        """
        result = self._values.get("cert_config")
        return result

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        """
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        """
        result = self._values.get("route_config")
        return result

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
    """A ROS resource type:  ``ALIYUN::FC::Function``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FunctionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::Function``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Function, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: ARN: The ARN for ALIYUN::ROS::CustomResource
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> typing.Any:
        """
        :Attribute: FunctionId: The function ID
        """
        return jsii.get(self, "attrFunctionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: The function name
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")


class FunctionInvoker(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.FunctionInvoker",
):
    """A ROS resource type:  ``ALIYUN::FC::FunctionInvoker``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FunctionInvokerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::FunctionInvoker``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(FunctionInvoker, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> typing.Any:
        """
        :Attribute:

        Result: Depends on result type:
        NoResult: Async invoke has no result.
        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        """
        return jsii.get(self, "attrResult")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> typing.Any:
        """
        :Attribute:

        ResultType: Result type:
        NoResult: Async invoke has no result.
        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        """
        return jsii.get(self, "attrResultType")


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
        function_name: builtins.str,
        service_name: builtins.str,
        async_: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        event: typing.Optional[builtins.str] = None,
        execute_version: typing.Optional[jsii.Number] = None,
        qualifier: typing.Optional[builtins.str] = None,
        service_region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::FunctionInvoker``.

        :param function_name: 
        :param service_name: 
        :param async_: 
        :param check_error: 
        :param event: 
        :param execute_version: 
        :param qualifier: 
        :param service_region_id: 
        """
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
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        """
        result = self._values.get("async_")
        return result

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        """
        result = self._values.get("check_error")
        return result

    @builtins.property
    def event(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        """
        result = self._values.get("event")
        return result

    @builtins.property
    def execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        """
        result = self._values.get("execute_version")
        return result

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property: qualifier: service version, can be versionId or aliasName
        """
        result = self._values.get("qualifier")
        return result

    @builtins.property
    def service_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceRegionId: Which region service belongs to.
        """
        result = self._values.get("service_region_id")
        return result

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
        "memory_size": "memorySize",
        "timeout": "timeout",
    },
)
class FunctionProps:
    def __init__(
        self,
        *,
        function_name: builtins.str,
        handler: builtins.str,
        runtime: builtins.str,
        service_name: builtins.str,
        async_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]] = None,
        ca_port: typing.Optional[jsii.Number] = None,
        code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]] = None,
        custom_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]] = None,
        description: typing.Optional[builtins.str] = None,
        environment_variables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[jsii.Number] = None,
        initializer: typing.Optional[builtins.str] = None,
        instance_concurrency: typing.Optional[jsii.Number] = None,
        memory_size: typing.Optional[jsii.Number] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Function``.

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
        :param memory_size: 
        :param timeout: 
        """
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
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def handler(self) -> builtins.str:
        """
        :Property: handler: The function execution entry point.
        """
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return result

    @builtins.property
    def runtime(self) -> builtins.str:
        """
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        """
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        """
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        """
        result = self._values.get("async_configuration")
        return result

    @builtins.property
    def ca_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        """
        result = self._values.get("ca_port")
        return result

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]]:
        """
        :Property: code: The code that contains the function implementation.
        """
        result = self._values.get("code")
        return result

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        """
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        """
        result = self._values.get("custom_container_config")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Function description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        """
        result = self._values.get("environment_variables")
        return result

    @builtins.property
    def initialization_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: initializationTimeout: the max execution time of the initializer, in second
        """
        result = self._values.get("initialization_timeout")
        return result

    @builtins.property
    def initializer(self) -> typing.Optional[builtins.str]:
        """
        :Property: initializer: the entry point of the initializer
        """
        result = self._values.get("initializer")
        return result

    @builtins.property
    def instance_concurrency(self) -> typing.Optional[jsii.Number]:
        """
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        """
        result = self._values.get("instance_concurrency")
        return result

    @builtins.property
    def memory_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        """
        result = self._values.get("memory_size")
        return result

    @builtins.property
    def timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        """
        result = self._values.get("timeout")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ProvisionConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.ProvisionConfig",
):
    """A ROS resource type:  ``ALIYUN::FC::ProvisionConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProvisionConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::ProvisionConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ProvisionConfig, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: The function name
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> typing.Any:
        """
        :Attribute: Qualifier: The service alias
        """
        return jsii.get(self, "attrQualifier")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> typing.Any:
        """
        :Attribute: Resource: The resource
        """
        return jsii.get(self, "attrResource")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> typing.Any:
        """
        :Attribute: Target: Number of provision
        """
        return jsii.get(self, "attrTarget")


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
        function_name: builtins.str,
        qualifier: builtins.str,
        service_name: builtins.str,
        target: jsii.Number,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: 
        :param qualifier: 
        :param service_name: 
        :param target: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def qualifier(self) -> builtins.str:
        """
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        """
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def target(self) -> jsii.Number:
        """
        :Property: target: Number of provision
        """
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::FC::Alias``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAliasProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlias, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAliasName")
    def attr_alias_name(self) -> typing.Any:
        """
        :Attribute: AliasName: The alias name
        """
        return jsii.get(self, "attrAliasName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> typing.Any:
        """
        :Attribute: VersionId: The version ID
        """
        return jsii.get(self, "attrVersionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="aliasName")
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: Alias name
        """
        return jsii.get(self, "aliasName")

    @alias_name.setter # type: ignore
    def alias_name(self, value: builtins.str) -> None:
        jsii.set(self, "aliasName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="additionalVersion")
    def additional_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: additionalVersion: Additional version
        """
        return jsii.get(self, "additionalVersion")

    @additional_version.setter # type: ignore
    def additional_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "additionalVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="additionalWeight")
    def additional_weight(self) -> typing.Optional[jsii.Number]:
        """
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        """
        return jsii.get(self, "additionalWeight")

    @additional_weight.setter # type: ignore
    def additional_weight(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "additionalWeight", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="versionId")
    def version_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: versionId: Version ID
        """
        return jsii.get(self, "versionId")

    @version_id.setter # type: ignore
    def version_id(self, value: typing.Optional[builtins.str]) -> None:
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
        alias_name: builtins.str,
        service_name: builtins.str,
        additional_version: typing.Optional[builtins.str] = None,
        additional_weight: typing.Optional[jsii.Number] = None,
        description: typing.Optional[builtins.str] = None,
        version_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Alias``.

        :param alias_name: 
        :param service_name: 
        :param additional_version: 
        :param additional_weight: 
        :param description: 
        :param version_id: 
        """
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
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: Alias name
        """
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def additional_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: additionalVersion: Additional version
        """
        result = self._values.get("additional_version")
        return result

    @builtins.property
    def additional_weight(self) -> typing.Optional[jsii.Number]:
        """
        :Property: additionalWeight: Traffic weight of additional version. From 0 to 100.
        """
        result = self._values.get("additional_weight")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def version_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: versionId: Version ID
        """
        result = self._values.get("version_id")
        return result

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
    """A ROS template type:  ``ALIYUN::FC::CustomDomain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::CustomDomain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCustomDomain, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> typing.Any:
        """
        :Attribute: Domain: The domain with protocol.
        """
        return jsii.get(self, "attrDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: The domain name
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: domain name
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocol")
    def protocol(self) -> builtins.str:
        """
        :Property: protocol: HTTP or HTTP,HTTPS
        """
        return jsii.get(self, "protocol")

    @protocol.setter # type: ignore
    def protocol(self, value: builtins.str) -> None:
        jsii.set(self, "protocol", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="apiVersion")
    def api_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: apiVersion: api version
        """
        return jsii.get(self, "apiVersion")

    @api_version.setter # type: ignore
    def api_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "apiVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="certConfig")
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        """
        :Property: certConfig: certificate info
        """
        return jsii.get(self, "certConfig")

    @cert_config.setter # type: ignore
    def cert_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.CertConfigProperty"]],
    ) -> None:
        jsii.set(self, "certConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="routeConfig")
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        """
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        """
        return jsii.get(self, "routeConfig")

    @route_config.setter # type: ignore
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
            certificate: builtins.str,
            cert_name: builtins.str,
            private_key: builtins.str,
        ) -> None:
            """
            :param certificate: 
            :param cert_name: 
            :param private_key: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "certificate": certificate,
                "cert_name": cert_name,
                "private_key": private_key,
            }

        @builtins.property
        def certificate(self) -> builtins.str:
            """
            :Property: certificate: certificate
            """
            result = self._values.get("certificate")
            assert result is not None, "Required property 'certificate' is missing"
            return result

        @builtins.property
        def cert_name(self) -> builtins.str:
            """
            :Property: certName: custom certificate name
            """
            result = self._values.get("cert_name")
            assert result is not None, "Required property 'cert_name' is missing"
            return result

        @builtins.property
        def private_key(self) -> builtins.str:
            """
            :Property: privateKey: private key
            """
            result = self._values.get("private_key")
            assert result is not None, "Required property 'private_key' is missing"
            return result

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
            routes: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RoutesProperty"]]],
        ) -> None:
            """
            :param routes: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "routes": routes,
            }

        @builtins.property
        def routes(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCustomDomain.RoutesProperty"]]]:
            """
            :Property: routes: PathConfig Array
            """
            result = self._values.get("routes")
            assert result is not None, "Required property 'routes' is missing"
            return result

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
            function_name: builtins.str,
            path: builtins.str,
            service_name: builtins.str,
            qualifier: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param function_name: 
            :param path: 
            :param service_name: 
            :param qualifier: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "function_name": function_name,
                "path": path,
                "service_name": service_name,
            }
            if qualifier is not None:
                self._values["qualifier"] = qualifier

        @builtins.property
        def function_name(self) -> builtins.str:
            """
            :Property: functionName: Path to the function, for example: "login"
            """
            result = self._values.get("function_name")
            assert result is not None, "Required property 'function_name' is missing"
            return result

        @builtins.property
        def path(self) -> builtins.str:
            """
            :Property: path: HTTP request path when a function is called with a custom domain name, for example: "/login/*"
            """
            result = self._values.get("path")
            assert result is not None, "Required property 'path' is missing"
            return result

        @builtins.property
        def service_name(self) -> builtins.str:
            """
            :Property: serviceName: Path to the service, for example: "blogService"
            """
            result = self._values.get("service_name")
            assert result is not None, "Required property 'service_name' is missing"
            return result

        @builtins.property
        def qualifier(self) -> typing.Optional[builtins.str]:
            """
            :Property: qualifier: Service version or alias
            """
            result = self._values.get("qualifier")
            return result

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
        domain_name: builtins.str,
        protocol: builtins.str,
        api_version: typing.Optional[builtins.str] = None,
        cert_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.CertConfigProperty]] = None,
        route_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.RouteConfigProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::CustomDomain``.

        :param domain_name: 
        :param protocol: 
        :param api_version: 
        :param cert_config: 
        :param route_config: 
        """
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
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def protocol(self) -> builtins.str:
        """
        :Property: protocol: HTTP or HTTP,HTTPS
        """
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return result

    @builtins.property
    def api_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: apiVersion: api version
        """
        result = self._values.get("api_version")
        return result

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.CertConfigProperty]]:
        """
        :Property: certConfig: certificate info
        """
        result = self._values.get("cert_config")
        return result

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosCustomDomain.RouteConfigProperty]]:
        """
        :Property: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        """
        result = self._values.get("route_config")
        return result

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
    """A ROS template type:  ``ALIYUN::FC::Function``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFunctionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::Function``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosFunction, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: ARN: The ARN for ALIYUN::ROS::CustomResource
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(self) -> typing.Any:
        """
        :Attribute: FunctionId: The function ID
        """
        return jsii.get(self, "attrFunctionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: The function name
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        return jsii.get(self, "functionName")

    @function_name.setter # type: ignore
    def function_name(self, value: builtins.str) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="handler")
    def handler(self) -> builtins.str:
        """
        :Property: handler: The function execution entry point.
        """
        return jsii.get(self, "handler")

    @handler.setter # type: ignore
    def handler(self, value: builtins.str) -> None:
        jsii.set(self, "handler", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="runtime")
    def runtime(self) -> builtins.str:
        """
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        """
        return jsii.get(self, "runtime")

    @runtime.setter # type: ignore
    def runtime(self, value: builtins.str) -> None:
        jsii.set(self, "runtime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="asyncConfiguration")
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]]:
        """
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        """
        return jsii.get(self, "asyncConfiguration")

    @async_configuration.setter # type: ignore
    def async_configuration(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.AsyncConfigurationProperty"]],
    ) -> None:
        jsii.set(self, "asyncConfiguration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="caPort")
    def ca_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        """
        return jsii.get(self, "caPort")

    @ca_port.setter # type: ignore
    def ca_port(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "caPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="code")
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]]:
        """
        :Property: code: The code that contains the function implementation.
        """
        return jsii.get(self, "code")

    @code.setter # type: ignore
    def code(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CodeProperty"]],
    ) -> None:
        jsii.set(self, "code", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="customContainerConfig")
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        """
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        """
        return jsii.get(self, "customContainerConfig")

    @custom_container_config.setter # type: ignore
    def custom_container_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.CustomContainerConfigProperty"]],
    ) -> None:
        jsii.set(self, "customContainerConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Function description
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        """
        return jsii.get(self, "environmentVariables")

    @environment_variables.setter # type: ignore
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "environmentVariables", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="initializationTimeout")
    def initialization_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: initializationTimeout: the max execution time of the initializer, in second
        """
        return jsii.get(self, "initializationTimeout")

    @initialization_timeout.setter # type: ignore
    def initialization_timeout(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "initializationTimeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="initializer")
    def initializer(self) -> typing.Optional[builtins.str]:
        """
        :Property: initializer: the entry point of the initializer
        """
        return jsii.get(self, "initializer")

    @initializer.setter # type: ignore
    def initializer(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "initializer", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceConcurrency")
    def instance_concurrency(self) -> typing.Optional[jsii.Number]:
        """
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        """
        return jsii.get(self, "instanceConcurrency")

    @instance_concurrency.setter # type: ignore
    def instance_concurrency(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "instanceConcurrency", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="memorySize")
    def memory_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        """
        return jsii.get(self, "memorySize")

    @memory_size.setter # type: ignore
    def memory_size(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "memorySize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        """
        return jsii.get(self, "timeout")

    @timeout.setter # type: ignore
    def timeout(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeout", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "destination": "destination",
            "max_async_event_age_in_seconds": "maxAsyncEventAgeInSeconds",
            "max_async_retry_attempts": "maxAsyncRetryAttempts",
        },
    )
    class AsyncConfigurationProperty:
        def __init__(
            self,
            *,
            destination: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.DestinationProperty"]] = None,
            max_async_event_age_in_seconds: typing.Optional[jsii.Number] = None,
            max_async_retry_attempts: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param destination: 
            :param max_async_event_age_in_seconds: 
            :param max_async_retry_attempts: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if destination is not None:
                self._values["destination"] = destination
            if max_async_event_age_in_seconds is not None:
                self._values["max_async_event_age_in_seconds"] = max_async_event_age_in_seconds
            if max_async_retry_attempts is not None:
                self._values["max_async_retry_attempts"] = max_async_retry_attempts

        @builtins.property
        def destination(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosFunction.DestinationProperty"]]:
            """
            :Property: destination: Set destination of asynchronous function calls
            """
            result = self._values.get("destination")
            return result

        @builtins.property
        def max_async_event_age_in_seconds(self) -> typing.Optional[jsii.Number]:
            """
            :Property: maxAsyncEventAgeInSeconds: Configure the maximum lifetime of messages. The duration is calculated from the time the asynchronous call is triggered, and ends when the message is dequeued for processing. If this period of time is longer than the setting value of MaxAsyncEventAgeInSeconds, the message will be discarded. The unconsumed messages will be counted in the cloud monitoring AsyncEventExpiredDropped indicator.
            """
            result = self._values.get("max_async_event_age_in_seconds")
            return result

        @builtins.property
        def max_async_retry_attempts(self) -> typing.Optional[jsii.Number]:
            """
            :Property: maxAsyncRetryAttempts: Configure the number of retries
            """
            result = self._values.get("max_async_retry_attempts")
            return result

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
            oss_bucket_name: typing.Optional[builtins.str] = None,
            oss_object_name: typing.Optional[builtins.str] = None,
            source_code: typing.Optional[builtins.str] = None,
            zip_file: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param source_code: 
            :param zip_file: 
            """
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
        def oss_bucket_name(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            ossBucketName: OSS bucket name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            """
            result = self._values.get("oss_bucket_name")
            return result

        @builtins.property
        def oss_object_name(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            ossObjectName: OSS object name.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            """
            result = self._values.get("oss_object_name")
            return result

        @builtins.property
        def source_code(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            sourceCode: (Node.js, PHP and Python) The source code for your FC function. If you include this parameter in a function source inline, ROS places it in a file called index (utf-8 encoded) and then compresses it to create a deployment package. For the Handler property, the first part of the handler identifier must be index. For example: index.handler.
            Your source code can contain up to 4096 characters. For JSON, you must use backslashes to escape quotes and special characters, such as line breaks.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            """
            result = self._values.get("source_code")
            return result

        @builtins.property
        def zip_file(self) -> typing.Optional[builtins.str]:
            """
            :Property:

            zipFile: Base64 encoded zip file content.
            Priority: ZipFile > SourceCode > OssBucketName&OssObjectName.
            """
            result = self._values.get("zip_file")
            return result

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
        name_mapping={"image": "image", "args": "args", "command": "command"},
    )
    class CustomContainerConfigProperty:
        def __init__(
            self,
            *,
            image: builtins.str,
            args: typing.Optional[builtins.str] = None,
            command: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param image: 
            :param args: 
            :param command: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "image": image,
            }
            if args is not None:
                self._values["args"] = args
            if command is not None:
                self._values["command"] = command

        @builtins.property
        def image(self) -> builtins.str:
            """
            :Property: image: Container image address. For example: registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
            """
            result = self._values.get("image")
            assert result is not None, "Required property 'image' is missing"
            return result

        @builtins.property
        def args(self) -> typing.Optional[builtins.str]:
            """
            :Property: args: Container startup parameters. For example: ["-arg1", "value1"]
            """
            result = self._values.get("args")
            return result

        @builtins.property
        def command(self) -> typing.Optional[builtins.str]:
            """
            :Property: command: Container start command. For example: ["/code/myserver"]
            """
            result = self._values.get("command")
            return result

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
            on_failure: typing.Optional[builtins.str] = None,
            on_success: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param on_failure: 
            :param on_success: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if on_failure is not None:
                self._values["on_failure"] = on_failure
            if on_success is not None:
                self._values["on_success"] = on_success

        @builtins.property
        def on_failure(self) -> typing.Optional[builtins.str]:
            """
            :Property: onFailure: When the function is invoked failed (system error or function internal error), FC will call the target corresponding to the configuration
            """
            result = self._values.get("on_failure")
            return result

        @builtins.property
        def on_success(self) -> typing.Optional[builtins.str]:
            """
            :Property: onSuccess: When the function is invoked successfully, FC will call the target corresponding to the configuration
            """
            result = self._values.get("on_success")
            return result

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
    """A ROS template type:  ``ALIYUN::FC::FunctionInvoker``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFunctionInvokerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::FunctionInvoker``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosFunctionInvoker, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResult")
    def attr_result(self) -> typing.Any:
        """
        :Attribute:

        Result: Depends on result type:
        NoResult: Async invoke has no result.
        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        """
        return jsii.get(self, "attrResult")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(self) -> typing.Any:
        """
        :Attribute:

        ResultType: Result type:
        NoResult: Async invoke has no result.
        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        """
        return jsii.get(self, "attrResultType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        return jsii.get(self, "functionName")

    @function_name.setter # type: ignore
    def function_name(self, value: builtins.str) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="async")
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        """
        return jsii.get(self, "async")

    @async_.setter # type: ignore
    def async_(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "async", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="checkError")
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        """
        return jsii.get(self, "checkError")

    @check_error.setter # type: ignore
    def check_error(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "checkError", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="event")
    def event(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        """
        return jsii.get(self, "event")

    @event.setter # type: ignore
    def event(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "event", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="executeVersion")
    def execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        """
        return jsii.get(self, "executeVersion")

    @execute_version.setter # type: ignore
    def execute_version(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "executeVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="qualifier")
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property: qualifier: service version, can be versionId or aliasName
        """
        return jsii.get(self, "qualifier")

    @qualifier.setter # type: ignore
    def qualifier(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceRegionId")
    def service_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceRegionId: Which region service belongs to.
        """
        return jsii.get(self, "serviceRegionId")

    @service_region_id.setter # type: ignore
    def service_region_id(self, value: typing.Optional[builtins.str]) -> None:
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
        function_name: builtins.str,
        service_name: builtins.str,
        async_: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        event: typing.Optional[builtins.str] = None,
        execute_version: typing.Optional[jsii.Number] = None,
        qualifier: typing.Optional[builtins.str] = None,
        service_region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::FunctionInvoker``.

        :param function_name: 
        :param service_name: 
        :param async_: 
        :param check_error: 
        :param event: 
        :param execute_version: 
        :param qualifier: 
        :param service_region_id: 
        """
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
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: async: Invocation type, Sync or Async. Defaults to Sync.
        """
        result = self._values.get("async_")
        return result

    @builtins.property
    def check_error(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        checkError: Whether check error for function invocation result.
        If set true and function invocation result has error, the resource creation will be regard as failed.
        Default is false
        """
        result = self._values.get("check_error")
        return result

    @builtins.property
    def event(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
        If the value needs to be binary, encode it via base64 before passing to this property.
        """
        result = self._values.get("event")
        return result

    @builtins.property
    def execute_version(self) -> typing.Optional[jsii.Number]:
        """
        :Property: executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        """
        result = self._values.get("execute_version")
        return result

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property: qualifier: service version, can be versionId or aliasName
        """
        result = self._values.get("qualifier")
        return result

    @builtins.property
    def service_region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: serviceRegionId: Which region service belongs to.
        """
        result = self._values.get("service_region_id")
        return result

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
        "memory_size": "memorySize",
        "timeout": "timeout",
    },
)
class RosFunctionProps:
    def __init__(
        self,
        *,
        function_name: builtins.str,
        handler: builtins.str,
        runtime: builtins.str,
        service_name: builtins.str,
        async_configuration: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.AsyncConfigurationProperty]] = None,
        ca_port: typing.Optional[jsii.Number] = None,
        code: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CodeProperty]] = None,
        custom_container_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CustomContainerConfigProperty]] = None,
        description: typing.Optional[builtins.str] = None,
        environment_variables: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        initialization_timeout: typing.Optional[jsii.Number] = None,
        initializer: typing.Optional[builtins.str] = None,
        instance_concurrency: typing.Optional[jsii.Number] = None,
        memory_size: typing.Optional[jsii.Number] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Function``.

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
        :param memory_size: 
        :param timeout: 
        """
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
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def handler(self) -> builtins.str:
        """
        :Property: handler: The function execution entry point.
        """
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return result

    @builtins.property
    def runtime(self) -> builtins.str:
        """
        :Property: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        """
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def async_configuration(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.AsyncConfigurationProperty]]:
        """
        :Property: asyncConfiguration: Configuration of asynchronous function calls
        """
        result = self._values.get("async_configuration")
        return result

    @builtins.property
    def ca_port(self) -> typing.Optional[jsii.Number]:
        """
        :Property: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        """
        result = self._values.get("ca_port")
        return result

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CodeProperty]]:
        """
        :Property: code: The code that contains the function implementation.
        """
        result = self._values.get("code")
        return result

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosFunction.CustomContainerConfigProperty]]:
        """
        :Property: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        """
        result = self._values.get("custom_container_config")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Function description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        """
        result = self._values.get("environment_variables")
        return result

    @builtins.property
    def initialization_timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: initializationTimeout: the max execution time of the initializer, in second
        """
        result = self._values.get("initialization_timeout")
        return result

    @builtins.property
    def initializer(self) -> typing.Optional[builtins.str]:
        """
        :Property: initializer: the entry point of the initializer
        """
        result = self._values.get("initializer")
        return result

    @builtins.property
    def instance_concurrency(self) -> typing.Optional[jsii.Number]:
        """
        :Property: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        """
        result = self._values.get("instance_concurrency")
        return result

    @builtins.property
    def memory_size(self) -> typing.Optional[jsii.Number]:
        """
        :Property: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        """
        result = self._values.get("memory_size")
        return result

    @builtins.property
    def timeout(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        """
        result = self._values.get("timeout")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProvisionConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc.RosProvisionConfig",
):
    """A ROS template type:  ``ALIYUN::FC::ProvisionConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProvisionConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::ProvisionConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProvisionConfig, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: The function name
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQualifier")
    def attr_qualifier(self) -> typing.Any:
        """
        :Attribute: Qualifier: The service alias
        """
        return jsii.get(self, "attrQualifier")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResource")
    def attr_resource(self) -> typing.Any:
        """
        :Attribute: Resource: The resource
        """
        return jsii.get(self, "attrResource")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTarget")
    def attr_target(self) -> typing.Any:
        """
        :Attribute: Target: Number of provision
        """
        return jsii.get(self, "attrTarget")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        return jsii.get(self, "functionName")

    @function_name.setter # type: ignore
    def function_name(self, value: builtins.str) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="qualifier")
    def qualifier(self) -> builtins.str:
        """
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        """
        return jsii.get(self, "qualifier")

    @qualifier.setter # type: ignore
    def qualifier(self, value: builtins.str) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="target")
    def target(self) -> jsii.Number:
        """
        :Property: target: Number of provision
        """
        return jsii.get(self, "target")

    @target.setter # type: ignore
    def target(self, value: jsii.Number) -> None:
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
        function_name: builtins.str,
        qualifier: builtins.str,
        service_name: builtins.str,
        target: jsii.Number,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::ProvisionConfig``.

        :param function_name: 
        :param qualifier: 
        :param service_name: 
        :param target: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "function_name": function_name,
            "qualifier": qualifier,
            "service_name": service_name,
            "target": target,
        }

    @builtins.property
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def qualifier(self) -> builtins.str:
        """
        :Property:

        qualifier: Service's alias.
        Example : "LATEST"
        """
        result = self._values.get("qualifier")
        assert result is not None, "Required property 'qualifier' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def target(self) -> jsii.Number:
        """
        :Property: target: Number of provision
        """
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::FC::Service``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::Service``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosService, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> typing.Any:
        """
        :Attribute: ServiceId: The service ID
        """
        return jsii.get(self, "attrServiceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of service
        """
        return jsii.get(self, "attrTags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="tags")
    def tags(self) -> ros_cdk_core.TagManager:
        """
        :Property: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        """
        return jsii.get(self, "tags")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        """
        return jsii.get(self, "deletionForce")

    @deletion_force.setter # type: ignore
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Service description
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetAccess")
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: internetAccess: Set it to true to enable Internet access.
        """
        return jsii.get(self, "internetAccess")

    @internet_access.setter # type: ignore
    def internet_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetAccess", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logConfig")
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.LogConfigProperty"]]:
        """
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        """
        return jsii.get(self, "logConfig")

    @log_config.setter # type: ignore
    def log_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.LogConfigProperty"]],
    ) -> None:
        jsii.set(self, "logConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="nasConfig")
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.NasConfigProperty"]]:
        """
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        """
        return jsii.get(self, "nasConfig")

    @nas_config.setter # type: ignore
    def nas_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.NasConfigProperty"]],
    ) -> None:
        jsii.set(self, "nasConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="role")
    def role(self) -> typing.Optional[builtins.str]:
        """
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        """
        return jsii.get(self, "role")

    @role.setter # type: ignore
    def role(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "role", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcConfig")
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.VpcConfigProperty"]]:
        """
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        """
        return jsii.get(self, "vpcConfig")

    @vpc_config.setter # type: ignore
    def vpc_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosService.VpcConfigProperty"]],
    ) -> None:
        jsii.set(self, "vpcConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc.RosService.LogConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"logstore": "logstore", "project": "project"},
    )
    class LogConfigProperty:
        def __init__(
            self,
            *,
            logstore: typing.Optional[builtins.str] = None,
            project: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param logstore: 
            :param project: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if logstore is not None:
                self._values["logstore"] = logstore
            if project is not None:
                self._values["project"] = project

        @builtins.property
        def logstore(self) -> typing.Optional[builtins.str]:
            """
            :Property: logstore: The log store name of Logs service
            """
            result = self._values.get("logstore")
            return result

        @builtins.property
        def project(self) -> typing.Optional[builtins.str]:
            """
            :Property: project: The project name of Logs service
            """
            result = self._values.get("project")
            return result

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
            mount_dir: builtins.str,
            server_addr: builtins.str,
        ) -> None:
            """
            :param mount_dir: 
            :param server_addr: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "mount_dir": mount_dir,
                "server_addr": server_addr,
            }

        @builtins.property
        def mount_dir(self) -> builtins.str:
            """
            :Property: mountDir: A local mount point.
            """
            result = self._values.get("mount_dir")
            assert result is not None, "Required property 'mount_dir' is missing"
            return result

        @builtins.property
        def server_addr(self) -> builtins.str:
            """
            :Property: serverAddr: The address of NAS instance.
            """
            result = self._values.get("server_addr")
            assert result is not None, "Required property 'server_addr' is missing"
            return result

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
            group_id: jsii.Number,
            mount_points: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosService.MountPointsProperty"]]],
            user_id: jsii.Number,
        ) -> None:
            """
            :param group_id: 
            :param mount_points: 
            :param user_id: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "group_id": group_id,
                "mount_points": mount_points,
                "user_id": user_id,
            }

        @builtins.property
        def group_id(self) -> jsii.Number:
            """
            :Property: groupId: Group ID
            """
            result = self._values.get("group_id")
            assert result is not None, "Required property 'group_id' is missing"
            return result

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosService.MountPointsProperty"]]]:
            """
            :Property: mountPoints: Mount points
            """
            result = self._values.get("mount_points")
            assert result is not None, "Required property 'mount_points' is missing"
            return result

        @builtins.property
        def user_id(self) -> jsii.Number:
            """
            :Property: userId: User ID
            """
            result = self._values.get("user_id")
            assert result is not None, "Required property 'user_id' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NasConfigProperty(%s)" % ", ".join(
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
            security_group_id: builtins.str,
            vpc_id: builtins.str,
            v_switch_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        ) -> None:
            """
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_ids: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "security_group_id": security_group_id,
                "vpc_id": vpc_id,
                "v_switch_ids": v_switch_ids,
            }

        @builtins.property
        def security_group_id(self) -> builtins.str:
            """
            :Property: securityGroupId: Security group ID
            """
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return result

        @builtins.property
        def vpc_id(self) -> builtins.str:
            """
            :Property: vpcId: VPC ID
            """
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return result

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
            """
            :Property: vSwitchIds: List of VSwitch IDs
            """
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return result

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
        "vpc_config": "vpcConfig",
    },
)
class RosServiceProps:
    def __init__(
        self,
        *,
        service_name: builtins.str,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]] = None,
        nas_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]] = None,
        role: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[ros_cdk_core.RosTag]] = None,
        vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Service``.

        :param service_name: 
        :param deletion_force: 
        :param description: 
        :param internet_access: 
        :param log_config: 
        :param nas_config: 
        :param role: 
        :param tags: 
        :param vpc_config: 
        """
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
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Service description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: internetAccess: Set it to true to enable Internet access.
        """
        result = self._values.get("internet_access")
        return result

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]]:
        """
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        """
        result = self._values.get("log_config")
        return result

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]]:
        """
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        """
        result = self._values.get("nas_config")
        return result

    @builtins.property
    def role(self) -> typing.Optional[builtins.str]:
        """
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        """
        result = self._values.get("role")
        return result

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[ros_cdk_core.RosTag]]:
        """
        :Property: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]]:
        """
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        """
        result = self._values.get("vpc_config")
        return result

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
    """A ROS template type:  ``ALIYUN::FC::Trigger``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTriggerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::Trigger``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosTrigger, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: Function name.
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: Service name.
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> typing.Any:
        """
        :Attribute: TriggerId: The trigger ID.
        """
        return jsii.get(self, "attrTriggerId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> typing.Any:
        """
        :Attribute: TriggerName: Trigger name.
        """
        return jsii.get(self, "attrTriggerName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="functionName")
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name.
        """
        return jsii.get(self, "functionName")

    @function_name.setter # type: ignore
    def function_name(self, value: builtins.str) -> None:
        jsii.set(self, "functionName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name.
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="triggerConfig")
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        """
        return jsii.get(self, "triggerConfig")

    @trigger_config.setter # type: ignore
    def trigger_config(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        jsii.set(self, "triggerConfig", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="triggerName")
    def trigger_name(self) -> builtins.str:
        """
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        """
        return jsii.get(self, "triggerName")

    @trigger_name.setter # type: ignore
    def trigger_name(self, value: builtins.str) -> None:
        jsii.set(self, "triggerName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="triggerType")
    def trigger_type(self) -> builtins.str:
        """
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        """
        return jsii.get(self, "triggerType")

    @trigger_type.setter # type: ignore
    def trigger_type(self, value: builtins.str) -> None:
        jsii.set(self, "triggerType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="invocationRole")
    def invocation_role(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        """
        return jsii.get(self, "invocationRole")

    @invocation_role.setter # type: ignore
    def invocation_role(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "invocationRole", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="qualifier")
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        """
        return jsii.get(self, "qualifier")

    @qualifier.setter # type: ignore
    def qualifier(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "qualifier", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceArn")
    def source_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        """
        return jsii.get(self, "sourceArn")

    @source_arn.setter # type: ignore
    def source_arn(self, value: typing.Optional[builtins.str]) -> None:
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
        function_name: builtins.str,
        service_name: builtins.str,
        trigger_config: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: builtins.str,
        trigger_type: builtins.str,
        invocation_role: typing.Optional[builtins.str] = None,
        qualifier: typing.Optional[builtins.str] = None,
        source_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Trigger``.

        :param function_name: 
        :param service_name: 
        :param trigger_config: 
        :param trigger_name: 
        :param trigger_type: 
        :param invocation_role: 
        :param qualifier: 
        :param source_arn: 
        """
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
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name.
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name.
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        """
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return result

    @builtins.property
    def trigger_name(self) -> builtins.str:
        """
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        """
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return result

    @builtins.property
    def trigger_type(self) -> builtins.str:
        """
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        """
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return result

    @builtins.property
    def invocation_role(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        """
        result = self._values.get("invocation_role")
        return result

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        """
        result = self._values.get("qualifier")
        return result

    @builtins.property
    def source_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        """
        result = self._values.get("source_arn")
        return result

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
    """A ROS template type:  ``ALIYUN::FC::Version``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVersionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FC::Version``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosVersion, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> typing.Any:
        """
        :Attribute: VersionId: The version ID
        """
        return jsii.get(self, "attrVersionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
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
        service_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        result = self._values.get("description")
        return result

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
    """A ROS resource type:  ``ALIYUN::FC::Service``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ServiceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::Service``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Service, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceId")
    def attr_service_id(self) -> typing.Any:
        """
        :Attribute: ServiceId: The service ID
        """
        return jsii.get(self, "attrServiceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> typing.Any:
        """
        :Attribute: Tags: Tags of service
        """
        return jsii.get(self, "attrTags")


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
        "vpc_config": "vpcConfig",
    },
)
class ServiceProps:
    def __init__(
        self,
        *,
        service_name: builtins.str,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[builtins.str] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        log_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]] = None,
        nas_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]] = None,
        role: typing.Optional[builtins.str] = None,
        tags: typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]] = None,
        vpc_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Service``.

        :param service_name: 
        :param deletion_force: 
        :param description: 
        :param internet_access: 
        :param log_config: 
        :param nas_config: 
        :param role: 
        :param tags: 
        :param vpc_config: 
        """
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
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        """
        result = self._values.get("deletion_force")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Service description
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: internetAccess: Set it to true to enable Internet access.
        """
        result = self._values.get("internet_access")
        return result

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.LogConfigProperty]]:
        """
        :Property: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        """
        result = self._values.get("log_config")
        return result

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.NasConfigProperty]]:
        """
        :Property: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        """
        result = self._values.get("nas_config")
        return result

    @builtins.property
    def role(self) -> typing.Optional[builtins.str]:
        """
        :Property: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        """
        result = self._values.get("role")
        return result

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        """
        result = self._values.get("tags")
        return result

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosService.VpcConfigProperty]]:
        """
        :Property: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        """
        result = self._values.get("vpc_config")
        return result

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
    """A ROS resource type:  ``ALIYUN::FC::Trigger``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TriggerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::Trigger``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Trigger, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(self) -> typing.Any:
        """
        :Attribute: FunctionName: Function name.
        """
        return jsii.get(self, "attrFunctionName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: Service name.
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(self) -> typing.Any:
        """
        :Attribute: TriggerId: The trigger ID.
        """
        return jsii.get(self, "attrTriggerId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(self) -> typing.Any:
        """
        :Attribute: TriggerName: Trigger name.
        """
        return jsii.get(self, "attrTriggerName")


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
        function_name: builtins.str,
        service_name: builtins.str,
        trigger_config: typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: builtins.str,
        trigger_type: builtins.str,
        invocation_role: typing.Optional[builtins.str] = None,
        qualifier: typing.Optional[builtins.str] = None,
        source_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Trigger``.

        :param function_name: 
        :param service_name: 
        :param trigger_config: 
        :param trigger_name: 
        :param trigger_type: 
        :param invocation_role: 
        :param qualifier: 
        :param source_arn: 
        """
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
    def function_name(self) -> builtins.str:
        """
        :Property: functionName: Function name.
        """
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return result

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name.
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        """
        :Property: triggerConfig: Event source specific trigger configuration. The value is different according to trigger type.
        """
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return result

    @builtins.property
    def trigger_name(self) -> builtins.str:
        """
        :Property:

        triggerName: Trigger name.
        Example : "image_resize"
        """
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return result

    @builtins.property
    def trigger_type(self) -> builtins.str:
        """
        :Property:

        triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted.
        Example : "oss"
        """
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return result

    @builtins.property
    def invocation_role(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        invocationRole: The role grants event source the permission to run function on behalf of user. This is optional for some triggers.
        Example : "acs:ram::1234567890:role/fc-test"
        """
        result = self._values.get("invocation_role")
        return result

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        qualifier: service version or alias.
        Example : "LATEST"
        """
        result = self._values.get("qualifier")
        return result

    @builtins.property
    def source_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        sourceArn: The Aliyun Resource Name (ARN) of event source. This is optional for some triggers.
        Example : "acs:oss:cn-shanghai:12345:mybucket"
        """
        result = self._values.get("source_arn")
        return result

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
    """A ROS resource type:  ``ALIYUN::FC::Version``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VersionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FC::Version``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Version, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrServiceName")
    def attr_service_name(self) -> typing.Any:
        """
        :Attribute: ServiceName: The service name
        """
        return jsii.get(self, "attrServiceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersionId")
    def attr_version_id(self) -> typing.Any:
        """
        :Attribute: VersionId: The version ID
        """
        return jsii.get(self, "attrVersionId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc.VersionProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName", "description": "description"},
)
class VersionProps:
    def __init__(
        self,
        *,
        service_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FC::Version``.

        :param service_name: 
        :param description: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property: serviceName: Service name
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Version description
        """
        result = self._values.get("description")
        return result

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
