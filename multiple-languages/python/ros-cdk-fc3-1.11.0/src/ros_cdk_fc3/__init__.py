'''
## Aliyun ROS FC3 Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as FC3 from '@alicloud/ros-cdk-fc3';
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
    jsii_type="@alicloud/ros-cdk-fc3.AsyncInvokeConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "async_task": "asyncTask",
        "destination_config": "destinationConfig",
        "max_async_event_age_in_seconds": "maxAsyncEventAgeInSeconds",
        "max_async_retry_attempts": "maxAsyncRetryAttempts",
    },
)
class AsyncInvokeConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_task: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAsyncInvokeConfig.DestinationConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AsyncInvokeConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig

        :param function_name: Property functionName: Function name.
        :param async_task: Property asyncTask: Whether to enable asynchronous tasks (optional).
        :param destination_config: Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
        :param max_async_event_age_in_seconds: Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
        :param max_async_retry_attempts: Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__611405d7630de1185832dde34f4fa450b42b1560a8e2c9652798aa150095cd52)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument async_task", value=async_task, expected_type=type_hints["async_task"])
            check_type(argname="argument destination_config", value=destination_config, expected_type=type_hints["destination_config"])
            check_type(argname="argument max_async_event_age_in_seconds", value=max_async_event_age_in_seconds, expected_type=type_hints["max_async_event_age_in_seconds"])
            check_type(argname="argument max_async_retry_attempts", value=max_async_retry_attempts, expected_type=type_hints["max_async_retry_attempts"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
        }
        if async_task is not None:
            self._values["async_task"] = async_task
        if destination_config is not None:
            self._values["destination_config"] = destination_config
        if max_async_event_age_in_seconds is not None:
            self._values["max_async_event_age_in_seconds"] = max_async_event_age_in_seconds
        if max_async_retry_attempts is not None:
            self._values["max_async_retry_attempts"] = max_async_retry_attempts

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property asyncTask: Whether to enable asynchronous tasks (optional).'''
        result = self._values.get("async_task")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.DestinationConfigProperty"]]:
        '''Property destinationConfig: Configuration structure of asynchronous invocation target (optional).'''
        result = self._values.get("destination_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.DestinationConfigProperty"]], result)

    @builtins.property
    def max_async_event_age_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.'''
        result = self._values.get("max_async_event_age_in_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_async_retry_attempts(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional.

        Value range [0,8]. When not configured, the default number of retries is 3.
        '''
        result = self._values.get("max_async_retry_attempts")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AsyncInvokeConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.ConcurrencyConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "reserved_concurrency": "reservedConcurrency",
    },
)
class ConcurrencyConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        reserved_concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ConcurrencyConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig

        :param function_name: Property functionName: Function name.
        :param reserved_concurrency: Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f828ef99c16de8d9273711d025088c5c5bd3eab8286559b031dfe0dc0bd08a28)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument reserved_concurrency", value=reserved_concurrency, expected_type=type_hints["reserved_concurrency"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "reserved_concurrency": reserved_concurrency,
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
    def reserved_concurrency(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions.

        Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
        '''
        result = self._values.get("reserved_concurrency")
        assert result is not None, "Required property 'reserved_concurrency' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConcurrencyConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.CustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "domain_name": "domainName",
        "protocol": "protocol",
        "cert_config": "certConfig",
        "route_config": "routeConfig",
        "tls_config": "tlsConfig",
        "waf_config": "wafConfig",
    },
)
class CustomDomainProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.AuthConfigProperty", typing.Dict[builtins.str, typing.Any]]],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.CertConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.RouteConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.TlsConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        waf_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.WafConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``CustomDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain

        :param auth_config: Property authConfig: Permission authentication configuration.
        :param domain_name: Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        :param protocol: Property protocol: Protocol types supported by the domain name. Valid values: - HTTP: Only HTTP protocol is supported. - HTTPS: HTTPS only is supported. - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
        :param cert_config: Property certConfig: HTTPS certificate information.
        :param route_config: Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
        :param tls_config: Property tlsConfig: TLS config.
        :param waf_config: Property wafConfig: Web application firewall configuration information.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcca3638983dac414fb0280d9520d8f013d4b8ae4ca23dc4fb0f4a16c590bb70)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_config", value=cert_config, expected_type=type_hints["cert_config"])
            check_type(argname="argument route_config", value=route_config, expected_type=type_hints["route_config"])
            check_type(argname="argument tls_config", value=tls_config, expected_type=type_hints["tls_config"])
            check_type(argname="argument waf_config", value=waf_config, expected_type=type_hints["waf_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if cert_config is not None:
            self._values["cert_config"] = cert_config
        if route_config is not None:
            self._values["route_config"] = route_config
        if tls_config is not None:
            self._values["tls_config"] = tls_config
        if waf_config is not None:
            self._values["waf_config"] = waf_config

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.AuthConfigProperty"]:
        '''Property authConfig: Permission authentication configuration.'''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.AuthConfigProperty"], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.

        Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: Protocol types supported by the domain name.

        Valid values:

        - HTTP: Only HTTP protocol is supported.
        - HTTPS: HTTPS only is supported.
        - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''Property certConfig: HTTPS certificate information.'''
        result = self._values.get("cert_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]], result)

    @builtins.property
    def route_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]]:
        '''Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.'''
        result = self._values.get("route_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RouteConfigProperty"]], result)

    @builtins.property
    def tls_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.TlsConfigProperty"]]:
        '''Property tlsConfig: TLS config.'''
        result = self._values.get("tls_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.TlsConfigProperty"]], result)

    @builtins.property
    def waf_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WafConfigProperty"]]:
        '''Property wafConfig: Web application firewall configuration information.'''
        result = self._values.get("waf_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WafConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.FunctionInvokerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "async_": "async",
        "check_async_invocation": "checkAsyncInvocation",
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
        async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        check_async_invocation: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunctionInvoker.CheckAsyncInvocationProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``FunctionInvoker``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker

        :param function_name: Property functionName: The name of the function.
        :param async_: Property async: Whether to invoke the function asynchronously.
        :param check_async_invocation: Property checkAsyncInvocation: Check async invocation setting.
        :param check_error: Property checkError: Whether check error for function invocation result. If set true and function invocation result has error, the resource creation will be regard as failed. Default is false
        :param event: Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value. If the value needs to be binary, encode it via base64 before passing to this property.
        :param execute_version: Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
        :param qualifier: Property qualifier: service version, can be versionId or aliasName.
        :param service_region_id: Property serviceRegionId: Which region service belongs to.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6229de627f2e9607f23d71e8d11c45452656b7b7a477f6c1676bb226132315d0)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument async_", value=async_, expected_type=type_hints["async_"])
            check_type(argname="argument check_async_invocation", value=check_async_invocation, expected_type=type_hints["check_async_invocation"])
            check_type(argname="argument check_error", value=check_error, expected_type=type_hints["check_error"])
            check_type(argname="argument event", value=event, expected_type=type_hints["event"])
            check_type(argname="argument execute_version", value=execute_version, expected_type=type_hints["execute_version"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_region_id", value=service_region_id, expected_type=type_hints["service_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
        }
        if async_ is not None:
            self._values["async_"] = async_
        if check_async_invocation is not None:
            self._values["check_async_invocation"] = check_async_invocation
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
        '''Property functionName: The name of the function.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property async: Whether to invoke the function asynchronously.'''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def check_async_invocation(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunctionInvoker.CheckAsyncInvocationProperty"]]:
        '''Property checkAsyncInvocation: Check async invocation setting.'''
        result = self._values.get("check_async_invocation")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunctionInvoker.CheckAsyncInvocationProperty"]], result)

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
    jsii_type="@alicloud/ros-cdk-fc3.FunctionProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "handler": "handler",
        "runtime": "runtime",
        "code": "code",
        "cpu": "cpu",
        "custom_container_config": "customContainerConfig",
        "custom_dns": "customDns",
        "custom_runtime_config": "customRuntimeConfig",
        "description": "description",
        "disable_ondemand": "disableOndemand",
        "disk_size": "diskSize",
        "environment_variables": "environmentVariables",
        "gpu_config": "gpuConfig",
        "instance_concurrency": "instanceConcurrency",
        "instance_isolation_mode": "instanceIsolationMode",
        "instance_lifecycle_config": "instanceLifecycleConfig",
        "internet_access": "internetAccess",
        "layers": "layers",
        "log_config": "logConfig",
        "memory_size": "memorySize",
        "nas_config": "nasConfig",
        "oss_mount_config": "ossMountConfig",
        "role": "role",
        "session_affinity": "sessionAffinity",
        "session_affinity_config": "sessionAffinityConfig",
        "tags": "tags",
        "timeout": "timeout",
        "tracing_config": "tracingConfig",
        "vpc_config": "vpcConfig",
    },
)
class FunctionProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CodeProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CustomContainerConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CustomDnsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_runtime_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CustomRuntimeConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_ondemand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.GpuConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_isolation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.InstanceLifecycleConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.LogConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.NasConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.OssMountConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_affinity_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosFunction.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.TracingConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.VpcConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Function``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function

        :param function_name: Property functionName: The name of the function.
        :param handler: Property handler: The handler of the function.
        :param runtime: Property runtime: The programming language of the function.
        :param code: Property code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
        :param cpu: Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
        :param custom_container_config: Property customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
        :param custom_dns: Property customDns: Custom DNS configuration.
        :param custom_runtime_config: Property customRuntimeConfig: Custom runtime configuration.
        :param description: Property description: Function description.
        :param disable_ondemand: Property disableOndemand: Whether to disable the creation of on-demand instances. When enabled, on-demand instances will not be created, and only reserved instances can be used.
        :param disk_size: Property diskSize: The disk size of the function, in MB.
        :param environment_variables: Property environmentVariables: The environment variables of the function.
        :param gpu_config: Property gpuConfig: The GPU configuration of the function.
        :param instance_concurrency: Property instanceConcurrency: The maximum number of concurrent instances of the function.
        :param instance_isolation_mode: Property instanceIsolationMode: Instance isolation mode.
        :param instance_lifecycle_config: Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
        :param internet_access: Property internetAccess: Whether the function can access the Internet.
        :param layers: Property layers: The layers of the function.
        :param log_config: Property logConfig: The log configuration of the function.
        :param memory_size: Property memorySize: The memory size of the function, in MB.
        :param nas_config: Property nasConfig: The NAS configuration of the function.
        :param oss_mount_config: Property ossMountConfig: The OSS mount configuration of the function.
        :param role: Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
        :param session_affinity: Property sessionAffinity: The session affinity policy for Function Compute requests. Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
        :param session_affinity_config: Property sessionAffinityConfig: Session affinity configuration.
        :param tags: Property tags: Tags to attach to function. Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
        :param timeout: Property timeout: The timeout of the function.
        :param tracing_config: Property tracingConfig: The tracing configuration of the function.
        :param vpc_config: Property vpcConfig: The VPC configuration of the function.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3816c8101e1f9be487624f2fc12a10c98bf276b66f691201f771522858fceea9)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument custom_container_config", value=custom_container_config, expected_type=type_hints["custom_container_config"])
            check_type(argname="argument custom_dns", value=custom_dns, expected_type=type_hints["custom_dns"])
            check_type(argname="argument custom_runtime_config", value=custom_runtime_config, expected_type=type_hints["custom_runtime_config"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disable_ondemand", value=disable_ondemand, expected_type=type_hints["disable_ondemand"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument gpu_config", value=gpu_config, expected_type=type_hints["gpu_config"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_isolation_mode", value=instance_isolation_mode, expected_type=type_hints["instance_isolation_mode"])
            check_type(argname="argument instance_lifecycle_config", value=instance_lifecycle_config, expected_type=type_hints["instance_lifecycle_config"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument layers", value=layers, expected_type=type_hints["layers"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument oss_mount_config", value=oss_mount_config, expected_type=type_hints["oss_mount_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument session_affinity", value=session_affinity, expected_type=type_hints["session_affinity"])
            check_type(argname="argument session_affinity_config", value=session_affinity_config, expected_type=type_hints["session_affinity_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument tracing_config", value=tracing_config, expected_type=type_hints["tracing_config"])
            check_type(argname="argument vpc_config", value=vpc_config, expected_type=type_hints["vpc_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "handler": handler,
            "runtime": runtime,
        }
        if code is not None:
            self._values["code"] = code
        if cpu is not None:
            self._values["cpu"] = cpu
        if custom_container_config is not None:
            self._values["custom_container_config"] = custom_container_config
        if custom_dns is not None:
            self._values["custom_dns"] = custom_dns
        if custom_runtime_config is not None:
            self._values["custom_runtime_config"] = custom_runtime_config
        if description is not None:
            self._values["description"] = description
        if disable_ondemand is not None:
            self._values["disable_ondemand"] = disable_ondemand
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if gpu_config is not None:
            self._values["gpu_config"] = gpu_config
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
        if instance_isolation_mode is not None:
            self._values["instance_isolation_mode"] = instance_isolation_mode
        if instance_lifecycle_config is not None:
            self._values["instance_lifecycle_config"] = instance_lifecycle_config
        if internet_access is not None:
            self._values["internet_access"] = internet_access
        if layers is not None:
            self._values["layers"] = layers
        if log_config is not None:
            self._values["log_config"] = log_config
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if oss_mount_config is not None:
            self._values["oss_mount_config"] = oss_mount_config
        if role is not None:
            self._values["role"] = role
        if session_affinity is not None:
            self._values["session_affinity"] = session_affinity
        if session_affinity_config is not None:
            self._values["session_affinity_config"] = session_affinity_config
        if tags is not None:
            self._values["tags"] = tags
        if timeout is not None:
            self._values["timeout"] = timeout
        if tracing_config is not None:
            self._values["tracing_config"] = tracing_config
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: The name of the function.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property handler: The handler of the function.'''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property runtime: The programming language of the function.'''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]]:
        '''Property code: Function code ZIP package.

        Choose one of Code and CustomContainerConfig.
        '''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.'''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''Property customContainerConfig: Custom container configuration.

        Choose one of Code and CustomContainerConfig.
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]], result)

    @builtins.property
    def custom_dns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomDnsProperty"]]:
        '''Property customDns: Custom DNS configuration.'''
        result = self._values.get("custom_dns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomDnsProperty"]], result)

    @builtins.property
    def custom_runtime_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigProperty"]]:
        '''Property customRuntimeConfig: Custom runtime configuration.'''
        result = self._values.get("custom_runtime_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigProperty"]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Function description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_ondemand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disableOndemand: Whether to disable the creation of on-demand instances.

        When enabled, on-demand instances will not be created, and only reserved instances can be used.
        '''
        result = self._values.get("disable_ondemand")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskSize: The disk size of the function, in MB.'''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property environmentVariables: The environment variables of the function.'''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def gpu_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.GpuConfigProperty"]]:
        '''Property gpuConfig: The GPU configuration of the function.'''
        result = self._values.get("gpu_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.GpuConfigProperty"]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceConcurrency: The maximum number of concurrent instances of the function.'''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_isolation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceIsolationMode: Instance isolation mode.'''
        result = self._values.get("instance_isolation_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_lifecycle_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InstanceLifecycleConfigProperty"]]:
        '''Property instanceLifecycleConfig: The instance lifecycle configuration of the function.'''
        result = self._values.get("instance_lifecycle_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InstanceLifecycleConfigProperty"]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetAccess: Whether the function can access the Internet.'''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def layers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property layers: The layers of the function.'''
        result = self._values.get("layers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.LogConfigProperty"]]:
        '''Property logConfig: The log configuration of the function.'''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.LogConfigProperty"]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memorySize: The memory size of the function, in MB.'''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NasConfigProperty"]]:
        '''Property nasConfig: The NAS configuration of the function.'''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NasConfigProperty"]], result)

    @builtins.property
    def oss_mount_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigProperty"]]:
        '''Property ossMountConfig: The OSS mount configuration of the function.'''
        result = self._values.get("oss_mount_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigProperty"]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property role: The user is authorized to the RAM role of Function Compute.

        After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sessionAffinity: The session affinity policy for Function Compute requests.

        Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
        '''
        result = self._values.get("session_affinity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_affinity_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property sessionAffinityConfig: Session affinity configuration.'''
        result = self._values.get("session_affinity_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosFunction.TagsProperty"]]:
        '''Property tags: Tags to attach to function.

        Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosFunction.TagsProperty"]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: The timeout of the function.'''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.TracingConfigProperty"]]:
        '''Property tracingConfig: The tracing configuration of the function.'''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.TracingConfigProperty"]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.VpcConfigProperty"]]:
        '''Property vpcConfig: The VPC configuration of the function.'''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.VpcConfigProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.IAsyncInvokeConfig")
class IAsyncInvokeConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AsyncInvokeConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AsyncInvokeConfigProps:
        ...


class _IAsyncInvokeConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AsyncInvokeConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.IAsyncInvokeConfig"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AsyncInvokeConfigProps:
        return typing.cast(AsyncInvokeConfigProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAsyncInvokeConfig).__jsii_proxy_class__ = lambda : _IAsyncInvokeConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.IConcurrencyConfig")
class IConcurrencyConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ConcurrencyConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConcurrencyConfigProps:
        ...


class _IConcurrencyConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ConcurrencyConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.IConcurrencyConfig"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConcurrencyConfigProps:
        return typing.cast(ConcurrencyConfigProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConcurrencyConfig).__jsii_proxy_class__ = lambda : _IConcurrencyConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.ICustomDomain")
class ICustomDomain(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``CustomDomain``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomDomainProps:
        ...


class _ICustomDomainProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``CustomDomain``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.ICustomDomain"

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomDomainProps:
        return typing.cast(CustomDomainProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ICustomDomain).__jsii_proxy_class__ = lambda : _ICustomDomainProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.IFunction")
class IFunction(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Function``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionId: The function ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: The function name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionProps:
        ...


class _IFunctionProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Function``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.IFunction"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionId: The function ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionId"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionProps:
        return typing.cast(FunctionProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFunction).__jsii_proxy_class__ = lambda : _IFunctionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.IFunctionInvoker")
class IFunctionInvoker(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``FunctionInvoker``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Events: Events for async invocation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResult")
    def attr_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Result: Depends on result type: NoResult: Async invoke has no result.

        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResultType: Result type: NoResult: Async invoke has no result.

        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task id for async invocation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionInvokerProps:
        ...


class _IFunctionInvokerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``FunctionInvoker``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.IFunctionInvoker"

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Events: Events for async invocation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEvents"))

    @builtins.property
    @jsii.member(jsii_name="attrResult")
    def attr_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Result: Depends on result type: NoResult: Async invoke has no result.

        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResult"))

    @builtins.property
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResultType: Result type: NoResult: Async invoke has no result.

        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResultType"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task id for async invocation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionInvokerProps:
        return typing.cast(FunctionInvokerProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFunctionInvoker).__jsii_proxy_class__ = lambda : _IFunctionInvokerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.IProvisionConfig")
class IProvisionConfig(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ProvisionConfig``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProvisionConfigProps":
        ...


class _IProvisionConfigProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ProvisionConfig``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.IProvisionConfig"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProvisionConfigProps":
        return typing.cast("ProvisionConfigProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IProvisionConfig).__jsii_proxy_class__ = lambda : _IProvisionConfigProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-fc3.ITrigger")
class ITrigger(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Trigger``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: Function name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerId: The trigger ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerName: Trigger name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUrlInternet")
    def attr_url_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlInternet: The public domain address.

        You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUrlIntranet")
    def attr_url_intranet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlIntranet: The private endpoint.

        In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TriggerProps":
        ...


class _ITriggerProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Trigger``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-fc3.ITrigger"

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: Function name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerId: The trigger ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerName: Trigger name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerName"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlInternet")
    def attr_url_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlInternet: The public domain address.

        You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrlInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlIntranet")
    def attr_url_intranet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlIntranet: The private endpoint.

        In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrlIntranet"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TriggerProps":
        return typing.cast("TriggerProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITrigger).__jsii_proxy_class__ = lambda : _ITriggerProxy


@jsii.implements(IProvisionConfig)
class ProvisionConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.ProvisionConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::ProvisionConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProvisionConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProvisionConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4a49919909ab62107e710478a2c3450a5662beefd6690695cec6df447fecf36)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ProvisionConfigProps":
        return typing.cast("ProvisionConfigProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b1a7d7c39be1456de532a4403386d84164ec87286e894110f027015dc90449a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86b69bbf4d904bf878b613e45995874d173d4958dd41ccd690ff3b6c69e05246)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__044172337830799e93255c0249229a1122caf40690a4da01a6b619be95167f82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.ProvisionConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_target": "defaultTarget",
        "function_name": "functionName",
        "always_allocate_cpu": "alwaysAllocateCpu",
        "always_allocate_gpu": "alwaysAllocateGpu",
        "qualifier": "qualifier",
        "scheduled_actions": "scheduledActions",
        "target_tracking_policies": "targetTrackingPolicies",
    },
)
class ProvisionConfigProps:
    def __init__(
        self,
        *,
        default_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        always_allocate_cpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        always_allocate_gpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduled_actions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosProvisionConfig.ScheduledActionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        target_tracking_policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosProvisionConfig.TargetTrackingPoliciesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ProvisionConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig

        :param default_target: Property defaultTarget: The number of target resources to reserve.
        :param function_name: Property functionName: Function name.
        :param always_allocate_cpu: Property alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
        :param always_allocate_gpu: Property alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
        :param qualifier: Property qualifier: Function alias or LATEST.
        :param scheduled_actions: Property scheduledActions: Timing policy configuration.
        :param target_tracking_policies: Property targetTrackingPolicies: Target tracking policy configuration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e107f44293eb3cc37db6fe040149117081467a89ca987568d9c6d3689a1f2ff9)
            check_type(argname="argument default_target", value=default_target, expected_type=type_hints["default_target"])
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument always_allocate_cpu", value=always_allocate_cpu, expected_type=type_hints["always_allocate_cpu"])
            check_type(argname="argument always_allocate_gpu", value=always_allocate_gpu, expected_type=type_hints["always_allocate_gpu"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument scheduled_actions", value=scheduled_actions, expected_type=type_hints["scheduled_actions"])
            check_type(argname="argument target_tracking_policies", value=target_tracking_policies, expected_type=type_hints["target_tracking_policies"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_target": default_target,
            "function_name": function_name,
        }
        if always_allocate_cpu is not None:
            self._values["always_allocate_cpu"] = always_allocate_cpu
        if always_allocate_gpu is not None:
            self._values["always_allocate_gpu"] = always_allocate_gpu
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if scheduled_actions is not None:
            self._values["scheduled_actions"] = scheduled_actions
        if target_tracking_policies is not None:
            self._values["target_tracking_policies"] = target_tracking_policies

    @builtins.property
    def default_target(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property defaultTarget: The number of target resources to reserve.'''
        result = self._values.get("default_target")
        assert result is not None, "Required property 'default_target' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property functionName: Function name.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def always_allocate_cpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alwaysAllocateCpu: Whether CPU should always be allocated;

        defaults to true.
        '''
        result = self._values.get("always_allocate_cpu")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def always_allocate_gpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alwaysAllocateGpu: Whether GPU should always be allocated;

        defaults to true.
        '''
        result = self._values.get("always_allocate_gpu")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qualifier: Function alias or LATEST.'''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduled_actions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.ScheduledActionsProperty"]]]]:
        '''Property scheduledActions: Timing policy configuration.'''
        result = self._values.get("scheduled_actions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.ScheduledActionsProperty"]]]], result)

    @builtins.property
    def target_tracking_policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.TargetTrackingPoliciesProperty"]]]]:
        '''Property targetTrackingPolicies: Target tracking policy configuration.'''
        result = self._values.get("target_tracking_policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.TargetTrackingPoliciesProperty"]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAsyncInvokeConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::AsyncInvokeConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AsyncInvokeConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAsyncInvokeConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51a172ddd410f025059968007ba44603072a60d28262a015bba5fb47ca6badde)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c46854fe448b3d81adb5ec6de30b1518973bd7f240b7035baaaa857eb60c8f43)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4f99d52518b5443e49f3975a74b49c87fb09d194f33b6ddff6057fde1e5bb812)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4b5daaf6c21a2c501739508d6ff2995efc03a143406bdf9c49466320ccc0d2ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="asyncTask")
    def async_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: asyncTask: Whether to enable asynchronous tasks (optional).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "asyncTask"))

    @async_task.setter
    def async_task(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8100fc219cccc44e2b3eb4f890346a139d672f10b5a804152680b5d7d7d49b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "asyncTask", value)

    @builtins.property
    @jsii.member(jsii_name="destinationConfig")
    def destination_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.DestinationConfigProperty"]]:
        '''
        :Property: destinationConfig: Configuration structure of asynchronous invocation target (optional).
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.DestinationConfigProperty"]], jsii.get(self, "destinationConfig"))

    @destination_config.setter
    def destination_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.DestinationConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afcb84dbae68ee558a2420d889d03d1373b521653077ad068031d607b2089d48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationConfig", value)

    @builtins.property
    @jsii.member(jsii_name="maxAsyncEventAgeInSeconds")
    def max_async_event_age_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxAsyncEventAgeInSeconds"))

    @max_async_event_age_in_seconds.setter
    def max_async_event_age_in_seconds(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d0a022a5f50409c00ef77c31598130f65f2a066d41383cb48c65aa0e4d17c92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxAsyncEventAgeInSeconds", value)

    @builtins.property
    @jsii.member(jsii_name="maxAsyncRetryAttempts")
    def max_async_retry_attempts(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxAsyncRetryAttempts"))

    @max_async_retry_attempts.setter
    def max_async_retry_attempts(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7cd961efde70ce570796ab30413f98f5fcdd151a71a86d306f9a1faef1d9f19c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxAsyncRetryAttempts", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.DestinationConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"on_failure": "onFailure", "on_success": "onSuccess"},
    )
    class DestinationConfigProperty:
        def __init__(
            self,
            *,
            on_failure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAsyncInvokeConfig.OnFailureProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            on_success: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAsyncInvokeConfig.OnSuccessProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param on_failure: 
            :param on_success: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f0017414c979fe90cfff2862d9eb0899b1ad394e163c9a6be5498f49592315fd)
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
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.OnFailureProperty"]]:
            '''
            :Property: onFailure: Failed callback target structure.
            '''
            result = self._values.get("on_failure")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.OnFailureProperty"]], result)

        @builtins.property
        def on_success(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.OnSuccessProperty"]]:
            '''
            :Property: onSuccess: Successful callback target structure.
            '''
            result = self._values.get("on_success")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAsyncInvokeConfig.OnSuccessProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnFailureProperty",
        jsii_struct_bases=[],
        name_mapping={"destination": "destination"},
    )
    class OnFailureProperty:
        def __init__(
            self,
            *,
            destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param destination: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__433472a21c8541d76e7fccba0162d47e3872ad600b01116f38633e40f86638bb)
                check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "destination": destination,
            }

        @builtins.property
        def destination(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: destination: Asynchronous invocation target resource descriptor.
            '''
            result = self._values.get("destination")
            assert result is not None, "Required property 'destination' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OnFailureProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosAsyncInvokeConfig.OnSuccessProperty",
        jsii_struct_bases=[],
        name_mapping={"destination": "destination"},
    )
    class OnSuccessProperty:
        def __init__(
            self,
            *,
            destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param destination: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fb153b7076b7e607397b85f0782a3749e1cc38a2d59f18410270f15279256413)
                check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "destination": destination,
            }

        @builtins.property
        def destination(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: destination: Asynchronous invocation target resource descriptor.
            '''
            result = self._values.get("destination")
            assert result is not None, "Required property 'destination' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OnSuccessProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosAsyncInvokeConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "async_task": "asyncTask",
        "destination_config": "destinationConfig",
        "max_async_event_age_in_seconds": "maxAsyncEventAgeInSeconds",
        "max_async_retry_attempts": "maxAsyncRetryAttempts",
    },
)
class RosAsyncInvokeConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        async_task: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAsyncInvokeConfig.DestinationConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAsyncInvokeConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig

        :param function_name: 
        :param async_task: 
        :param destination_config: 
        :param max_async_event_age_in_seconds: 
        :param max_async_retry_attempts: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2aa38bff1428bd3bdc953457203969045b245a896692b6f878f33558cf1e93e)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument async_task", value=async_task, expected_type=type_hints["async_task"])
            check_type(argname="argument destination_config", value=destination_config, expected_type=type_hints["destination_config"])
            check_type(argname="argument max_async_event_age_in_seconds", value=max_async_event_age_in_seconds, expected_type=type_hints["max_async_event_age_in_seconds"])
            check_type(argname="argument max_async_retry_attempts", value=max_async_retry_attempts, expected_type=type_hints["max_async_retry_attempts"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
        }
        if async_task is not None:
            self._values["async_task"] = async_task
        if destination_config is not None:
            self._values["destination_config"] = destination_config
        if max_async_event_age_in_seconds is not None:
            self._values["max_async_event_age_in_seconds"] = max_async_event_age_in_seconds
        if max_async_retry_attempts is not None:
            self._values["max_async_retry_attempts"] = max_async_retry_attempts

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
    def async_task(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: asyncTask: Whether to enable asynchronous tasks (optional).
        '''
        result = self._values.get("async_task")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAsyncInvokeConfig.DestinationConfigProperty]]:
        '''
        :Property: destinationConfig: Configuration structure of asynchronous invocation target (optional).
        '''
        result = self._values.get("destination_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAsyncInvokeConfig.DestinationConfigProperty]], result)

    @builtins.property
    def max_async_event_age_in_seconds(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
        '''
        result = self._values.get("max_async_event_age_in_seconds")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_async_retry_attempts(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
        '''
        result = self._values.get("max_async_retry_attempts")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAsyncInvokeConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConcurrencyConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosConcurrencyConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::ConcurrencyConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConcurrencyConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConcurrencyConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c5179ae100dfc36b7a7e2b66952c39ae135d9d6fd6f4ae1eec91d673210277c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0e59a997349bbbfd953486cdba4a9d175ac876986e458efd2107900b75f4baa2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c772ba90c4793434faf42f721ef6a7ee80926d1171fab2b5e0191559a37f1e32)
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
            type_hints = typing.get_type_hints(_typecheckingstub__723bf3d99b0df16ed17d79899d039ad34eccd98f6b6f2318849241b14e765aed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="reservedConcurrency")
    def reserved_concurrency(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "reservedConcurrency"))

    @reserved_concurrency.setter
    def reserved_concurrency(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90c2a0fe301eaa520986b2fb7592f15e6709354c4b342b4ef7679fdead38a0c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reservedConcurrency", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosConcurrencyConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "reserved_concurrency": "reservedConcurrency",
    },
)
class RosConcurrencyConfigProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        reserved_concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosConcurrencyConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig

        :param function_name: 
        :param reserved_concurrency: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d1cf0c9ce86ade6ab7d601e0614a61d73b51c14bfc49ad59cf8c36f3d0710fd)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument reserved_concurrency", value=reserved_concurrency, expected_type=type_hints["reserved_concurrency"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "reserved_concurrency": reserved_concurrency,
        }

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
    def reserved_concurrency(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: reservedConcurrency: To RESERVE concurrency, FUNCTIONS RESERVE a portion OF ACCOUNT concurrency that cannot be used by other functions. Reserved concurrency includes the total concurrency of reserved instances and instances by volume.
        '''
        result = self._values.get("reserved_concurrency")
        assert result is not None, "Required property 'reserved_concurrency' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConcurrencyConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::CustomDomain``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``CustomDomain`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCustomDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef02d10401c7c98543cdba5ae35ea3eb3a40fd5a4c1bfd9f6b47834fc71d9898)
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
            type_hints = typing.get_type_hints(_typecheckingstub__52910bc91667d299b9136fda22d2b538444b26775b2dbc549c5805458c78b009)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
    @jsii.member(jsii_name="authConfig")
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.AuthConfigProperty"]:
        '''
        :Property: authConfig: Permission authentication configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.AuthConfigProperty"], jsii.get(self, "authConfig"))

    @auth_config.setter
    def auth_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.AuthConfigProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2b2df0a7f01cfa75386dbd5bc94a20818399dd0dac126ab3bb3a2055b299f19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "authConfig", value)

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76697e5a79e0336eb5a57cf8d8d702cb23cf2d6244fee67f9737a48abd49cbc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44426283d9e709bf23efea225a7b56b5376dc36295465a1444721945f496aaae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: Protocol types supported by the domain name. Valid values:

        - HTTP: Only HTTP protocol is supported.
        - HTTPS: HTTPS only is supported.
        - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd341e8badcf1663c9ffe46dff9d502abea134595b069c4a5a3fe858b8987532)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="certConfig")
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]]:
        '''
        :Property: certConfig: HTTPS certificate information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]], jsii.get(self, "certConfig"))

    @cert_config.setter
    def cert_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.CertConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4b69f0423691318cbc9b80ee0e5ffb1f8369d096cff4d0d6f73bedb370814ce)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f29f0ba1dc7f84f21b9b750697aeb0705df65402938902742f77d7ed5ffafb29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tlsConfig")
    def tls_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.TlsConfigProperty"]]:
        '''
        :Property: tlsConfig: TLS config.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.TlsConfigProperty"]], jsii.get(self, "tlsConfig"))

    @tls_config.setter
    def tls_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.TlsConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7105d0b0861fefcdefe74c35af4d93a789be0b77afdbced16227de6599d840b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tlsConfig", value)

    @builtins.property
    @jsii.member(jsii_name="wafConfig")
    def waf_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WafConfigProperty"]]:
        '''
        :Property: wafConfig: Web application firewall configuration information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WafConfigProperty"]], jsii.get(self, "wafConfig"))

    @waf_config.setter
    def waf_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WafConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6a3ec0d860084dc389e99624ba9bdf7dd3ea614ca101868ac22c8f51afcc99f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wafConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.AuthConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"auth_type": "authType", "auth_info": "authInfo"},
    )
    class AuthConfigProperty:
        def __init__(
            self,
            *,
            auth_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            auth_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param auth_type: 
            :param auth_info: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3d32a54132bc95c59cc294aabc3adf8980bdf8c5b5c21475b919228cd41b67a7)
                check_type(argname="argument auth_type", value=auth_type, expected_type=type_hints["auth_type"])
                check_type(argname="argument auth_info", value=auth_info, expected_type=type_hints["auth_info"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "auth_type": auth_type,
            }
            if auth_info is not None:
                self._values["auth_info"] = auth_info

        @builtins.property
        def auth_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: authType: Authentication type.
            '''
            result = self._values.get("auth_type")
            assert result is not None, "Required property 'auth_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def auth_info(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: authInfo: Authentication information.
            '''
            result = self._values.get("auth_info")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.CertConfigProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__7198cc8450217fe06633d752f1165da07ac487e2118e3b641a85a60b5f8be735)
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
            :Property: certificate: Certificates in PEM format.
            '''
            result = self._values.get("certificate")
            assert result is not None, "Required property 'certificate' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cert_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: certName: Certificate name.
            '''
            result = self._values.get("cert_name")
            assert result is not None, "Required property 'cert_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def private_key(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: privateKey: Private key in PEM format.
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
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.EqualRulesProperty",
        jsii_struct_bases=[],
        name_mapping={"match": "match", "replacement": "replacement"},
    )
    class EqualRulesProperty:
        def __init__(
            self,
            *,
            match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param match: 
            :param replacement: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__83476e80adb0d0ccb6b03e898176f9004c4b809b33f434390dfd2175d89dd0dd)
                check_type(argname="argument match", value=match, expected_type=type_hints["match"])
                check_type(argname="argument replacement", value=replacement, expected_type=type_hints["replacement"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "match": match,
                "replacement": replacement,
            }

        @builtins.property
        def match(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: match: Match.
            '''
            result = self._values.get("match")
            assert result is not None, "Required property 'match' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def replacement(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: replacement: Replacement.
            '''
            result = self._values.get("replacement")
            assert result is not None, "Required property 'replacement' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EqualRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.RegexRulesProperty",
        jsii_struct_bases=[],
        name_mapping={"match": "match", "replacement": "replacement"},
    )
    class RegexRulesProperty:
        def __init__(
            self,
            *,
            match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param match: 
            :param replacement: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2cf4a8c85422664995da35e6367f160a3907604b5fc2e12cdff0fd4c28225741)
                check_type(argname="argument match", value=match, expected_type=type_hints["match"])
                check_type(argname="argument replacement", value=replacement, expected_type=type_hints["replacement"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "match": match,
                "replacement": replacement,
            }

        @builtins.property
        def match(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: match: Match.
            '''
            result = self._values.get("match")
            assert result is not None, "Required property 'match' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def replacement(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: replacement: Replacement.
            '''
            result = self._values.get("replacement")
            assert result is not None, "Required property 'replacement' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RegexRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.RewriteConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "equal_rules": "equalRules",
            "regex_rules": "regexRules",
            "wildcard_rules": "wildcardRules",
        },
    )
    class RewriteConfigProperty:
        def __init__(
            self,
            *,
            equal_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.EqualRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            regex_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.RegexRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            wildcard_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.WildcardRulesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param equal_rules: 
            :param regex_rules: 
            :param wildcard_rules: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f2f21264aed87be18e7530c2824334b4afdb545f6f1d1a974e42612cca1d0b34)
                check_type(argname="argument equal_rules", value=equal_rules, expected_type=type_hints["equal_rules"])
                check_type(argname="argument regex_rules", value=regex_rules, expected_type=type_hints["regex_rules"])
                check_type(argname="argument wildcard_rules", value=wildcard_rules, expected_type=type_hints["wildcard_rules"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if equal_rules is not None:
                self._values["equal_rules"] = equal_rules
            if regex_rules is not None:
                self._values["regex_rules"] = regex_rules
            if wildcard_rules is not None:
                self._values["wildcard_rules"] = wildcard_rules

        @builtins.property
        def equal_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.EqualRulesProperty"]]]]:
            '''
            :Property: equalRules: Exact matching rules.
            '''
            result = self._values.get("equal_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.EqualRulesProperty"]]]], result)

        @builtins.property
        def regex_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RegexRulesProperty"]]]]:
            '''
            :Property: regexRules: Regular matching rules.
            '''
            result = self._values.get("regex_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RegexRulesProperty"]]]], result)

        @builtins.property
        def wildcard_rules(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WildcardRulesProperty"]]]]:
            '''
            :Property: wildcardRules: Wildcard matching rules.
            '''
            result = self._values.get("wildcard_rules")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.WildcardRulesProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RewriteConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.RouteConfigProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__0708d5bf7cd5b8a2fcc63b0b47000bb65659575f3b8f131de865cfbf9c95899b)
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
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.RoutesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "function_name": "functionName",
            "path": "path",
            "qualifier": "qualifier",
            "methods": "methods",
            "rewrite_config": "rewriteConfig",
        },
    )
    class RoutesProperty:
        def __init__(
            self,
            *,
            function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            methods: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            rewrite_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosCustomDomain.RewriteConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param function_name: 
            :param path: 
            :param qualifier: 
            :param methods: 
            :param rewrite_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5e235c3892ccb2a5d23d98dee463310e677b035b3188b6b2b89eea33b80c4e16)
                check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
                check_type(argname="argument path", value=path, expected_type=type_hints["path"])
                check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
                check_type(argname="argument methods", value=methods, expected_type=type_hints["methods"])
                check_type(argname="argument rewrite_config", value=rewrite_config, expected_type=type_hints["rewrite_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "function_name": function_name,
                "path": path,
                "qualifier": qualifier,
            }
            if methods is not None:
                self._values["methods"] = methods
            if rewrite_config is not None:
                self._values["rewrite_config"] = rewrite_config

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
        def qualifier(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: qualifier: Service version or alias
            '''
            result = self._values.get("qualifier")
            assert result is not None, "Required property 'qualifier' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def methods(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: methods: HTTP request methods. Valid values: HEAD, GET, POST, PUT, DELETE, PATCH, OPTIONS
            '''
            result = self._values.get("methods")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def rewrite_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RewriteConfigProperty"]]:
            '''
            :Property: rewriteConfig: Rewrite configuration.
            '''
            result = self._values.get("rewrite_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosCustomDomain.RewriteConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RoutesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.TlsConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cipher_suites": "cipherSuites",
            "min_version": "minVersion",
            "max_version": "maxVersion",
        },
    )
    class TlsConfigProperty:
        def __init__(
            self,
            *,
            cipher_suites: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            min_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            max_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cipher_suites: 
            :param min_version: 
            :param max_version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7bb8629d9631da97e9a2e9176addc8fd182679e6220c32eaeb90d9b3c3b2d4a9)
                check_type(argname="argument cipher_suites", value=cipher_suites, expected_type=type_hints["cipher_suites"])
                check_type(argname="argument min_version", value=min_version, expected_type=type_hints["min_version"])
                check_type(argname="argument max_version", value=max_version, expected_type=type_hints["max_version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "cipher_suites": cipher_suites,
                "min_version": min_version,
            }
            if max_version is not None:
                self._values["max_version"] = max_version

        @builtins.property
        def cipher_suites(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: cipherSuites: TLS cipher suites.
            '''
            result = self._values.get("cipher_suites")
            assert result is not None, "Required property 'cipher_suites' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def min_version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: minVersion: Minimum supported TLS version.
            '''
            result = self._values.get("min_version")
            assert result is not None, "Required property 'min_version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def max_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: maxVersion: Maximum supported TLS version.
            '''
            result = self._values.get("max_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TlsConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.WafConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"enable_waf": "enableWaf"},
    )
    class WafConfigProperty:
        def __init__(
            self,
            *,
            enable_waf: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_waf: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8b83c06e8e467b93d9156c9b2c1931c84f04bece6ea0e0593715228c27902ea2)
                check_type(argname="argument enable_waf", value=enable_waf, expected_type=type_hints["enable_waf"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_waf is not None:
                self._values["enable_waf"] = enable_waf

        @builtins.property
        def enable_waf(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableWaf: Whether to enable WAF.
            '''
            result = self._values.get("enable_waf")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WafConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomain.WildcardRulesProperty",
        jsii_struct_bases=[],
        name_mapping={"match": "match", "replacement": "replacement"},
    )
    class WildcardRulesProperty:
        def __init__(
            self,
            *,
            match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param match: 
            :param replacement: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bd55523fd72fb21521cc0f028e6591944af856ca8715b32e7dc15c82edd62ba3)
                check_type(argname="argument match", value=match, expected_type=type_hints["match"])
                check_type(argname="argument replacement", value=replacement, expected_type=type_hints["replacement"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "match": match,
                "replacement": replacement,
            }

        @builtins.property
        def match(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: match: Match.
            '''
            result = self._values.get("match")
            assert result is not None, "Required property 'match' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def replacement(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: replacement: Replacement.
            '''
            result = self._values.get("replacement")
            assert result is not None, "Required property 'replacement' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "WildcardRulesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosCustomDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "auth_config": "authConfig",
        "domain_name": "domainName",
        "protocol": "protocol",
        "cert_config": "certConfig",
        "route_config": "routeConfig",
        "tls_config": "tlsConfig",
        "waf_config": "wafConfig",
    },
)
class RosCustomDomainProps:
    def __init__(
        self,
        *,
        auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.AuthConfigProperty, typing.Dict[builtins.str, typing.Any]]],
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tls_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.TlsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        waf_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.WafConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosCustomDomain``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain

        :param auth_config: 
        :param domain_name: 
        :param protocol: 
        :param cert_config: 
        :param route_config: 
        :param tls_config: 
        :param waf_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__205230a4923db1e5eb8162cbe3eda7b9d628dda010fe96c1bb21209d116b28bb)
            check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument cert_config", value=cert_config, expected_type=type_hints["cert_config"])
            check_type(argname="argument route_config", value=route_config, expected_type=type_hints["route_config"])
            check_type(argname="argument tls_config", value=tls_config, expected_type=type_hints["tls_config"])
            check_type(argname="argument waf_config", value=waf_config, expected_type=type_hints["waf_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auth_config": auth_config,
            "domain_name": domain_name,
            "protocol": protocol,
        }
        if cert_config is not None:
            self._values["cert_config"] = cert_config
        if route_config is not None:
            self._values["route_config"] = route_config
        if tls_config is not None:
            self._values["tls_config"] = tls_config
        if waf_config is not None:
            self._values["waf_config"] = waf_config

    @builtins.property
    def auth_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.AuthConfigProperty]:
        '''
        :Property: authConfig: Permission authentication configuration.
        '''
        result = self._values.get("auth_config")
        assert result is not None, "Required property 'auth_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.AuthConfigProperty], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocol: Protocol types supported by the domain name. Valid values:

        - HTTP: Only HTTP protocol is supported.
        - HTTPS: HTTPS only is supported.
        - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cert_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.CertConfigProperty]]:
        '''
        :Property: certConfig: HTTPS certificate information.
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

    @builtins.property
    def tls_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.TlsConfigProperty]]:
        '''
        :Property: tlsConfig: TLS config.
        '''
        result = self._values.get("tls_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.TlsConfigProperty]], result)

    @builtins.property
    def waf_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.WafConfigProperty]]:
        '''
        :Property: wafConfig: Web application firewall configuration information.
        '''
        result = self._values.get("waf_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.WafConfigProperty]], result)

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
    jsii_type="@alicloud/ros-cdk-fc3.RosFunction",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::Function``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Function`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFunctionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25ff8ca9bb13da2390eb1a711b5542609b91dbb093797ce8ef5bfb48c77a84e9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7282cf107bfba61e684933cd20d061f20568b03306d0812b483918b522b68d6d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__23daab1d20c01e628a365cc08658b789eef5efae17f4b802cdb92a6dd3d4fce5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: The name of the function.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f40ff0937e73e98b32453c5ec3458c1948c5ca69acfd41cef5209d7a715c097)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="handler")
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: handler: The handler of the function.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "handler"))

    @handler.setter
    def handler(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a73f61b4f6fe63306b1c9bda5741563d2d2b88dd2e30ec5443068e700a89b19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "handler", value)

    @builtins.property
    @jsii.member(jsii_name="runtime")
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: runtime: The programming language of the function.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "runtime"))

    @runtime.setter
    def runtime(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a0b3d5448df4fa8b7e2dc09b9990063697028cec6b99687d7425119b7e8ad20)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "runtime", value)

    @builtins.property
    @jsii.member(jsii_name="code")
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]]:
        '''
        :Property: code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]], jsii.get(self, "code"))

    @code.setter
    def code(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CodeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ca21a5df3ed5d476e25ca63fc395e56a2ae0771756f2f8a7994dd6c1fbeecb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "code", value)

    @builtins.property
    @jsii.member(jsii_name="cpu")
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpu"))

    @cpu.setter
    def cpu(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__250fac48276f4f240977aec6afbfee9c3d564e64de34a66385e7690c03749ebb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpu", value)

    @builtins.property
    @jsii.member(jsii_name="customContainerConfig")
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]]:
        '''
        :Property: customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]], jsii.get(self, "customContainerConfig"))

    @custom_container_config.setter
    def custom_container_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomContainerConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe534237fe2fa2e80ed16d331074e851722584952fc1364298bebd310940413d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customContainerConfig", value)

    @builtins.property
    @jsii.member(jsii_name="customDns")
    def custom_dns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomDnsProperty"]]:
        '''
        :Property: customDns: Custom DNS configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomDnsProperty"]], jsii.get(self, "customDns"))

    @custom_dns.setter
    def custom_dns(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomDnsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9de5296796ce5390896d09fdfe0673d25103c12a43840523d6c323bee81d526e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customDns", value)

    @builtins.property
    @jsii.member(jsii_name="customRuntimeConfig")
    def custom_runtime_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigProperty"]]:
        '''
        :Property: customRuntimeConfig: Custom runtime configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigProperty"]], jsii.get(self, "customRuntimeConfig"))

    @custom_runtime_config.setter
    def custom_runtime_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__93ea5b4f832fb9b69321977e56ac7761ffbd5f88a55453e44896780a4ca8148e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "customRuntimeConfig", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Function description.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bab45e3fd48d51762e979f23b1110eda0c78db5b71edb9cf2b172c2d0f17253f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="disableOndemand")
    def disable_ondemand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disableOndemand: Whether to disable the creation of on-demand instances. When enabled, on-demand instances will not be created, and only reserved instances can be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disableOndemand"))

    @disable_ondemand.setter
    def disable_ondemand(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8795387fd37f6fcb023ebac7a26795bc60f1e34932fe692caee6569024490543)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disableOndemand", value)

    @builtins.property
    @jsii.member(jsii_name="diskSize")
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The disk size of the function, in MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d82c138826f43d9d14b7134530716c1ef0ff95989cdcb13f2cd7da20cdd027a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskSize", value)

    @builtins.property
    @jsii.member(jsii_name="environmentVariables")
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variables of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "environmentVariables"))

    @environment_variables.setter
    def environment_variables(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f98b2cafe8b91194ec2f6cea1597b3b662d961b04ba560c6b9dbe83dbb31628b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentVariables", value)

    @builtins.property
    @jsii.member(jsii_name="gpuConfig")
    def gpu_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.GpuConfigProperty"]]:
        '''
        :Property: gpuConfig: The GPU configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.GpuConfigProperty"]], jsii.get(self, "gpuConfig"))

    @gpu_config.setter
    def gpu_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.GpuConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49bd1e08ba0c0646b05831f17cefdc05b98cabafca0b4f92b9255f5014b0bb1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "gpuConfig", value)

    @builtins.property
    @jsii.member(jsii_name="instanceConcurrency")
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceConcurrency: The maximum number of concurrent instances of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceConcurrency"))

    @instance_concurrency.setter
    def instance_concurrency(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d51cb97a1a134c32b5c8f6650344518aa10ff4c3755197ddf2afe49e6fe0c8c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceConcurrency", value)

    @builtins.property
    @jsii.member(jsii_name="instanceIsolationMode")
    def instance_isolation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIsolationMode: Instance isolation mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceIsolationMode"))

    @instance_isolation_mode.setter
    def instance_isolation_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f22cd005a2eb63b487c3fbf76db68cb7a35110c94689d9cb0948a3b70655322)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceIsolationMode", value)

    @builtins.property
    @jsii.member(jsii_name="instanceLifecycleConfig")
    def instance_lifecycle_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InstanceLifecycleConfigProperty"]]:
        '''
        :Property: instanceLifecycleConfig: The instance lifecycle configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InstanceLifecycleConfigProperty"]], jsii.get(self, "instanceLifecycleConfig"))

    @instance_lifecycle_config.setter
    def instance_lifecycle_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InstanceLifecycleConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c118ae12b3c9065d7bef50e653baebe61b7e3ffe885578232717bd4b71caeceb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceLifecycleConfig", value)

    @builtins.property
    @jsii.member(jsii_name="internetAccess")
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetAccess: Whether the function can access the Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetAccess"))

    @internet_access.setter
    def internet_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e962854c0ecee9d4b6601586b6ac6185af0fe8edd4a60da0336a109d2f53971c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetAccess", value)

    @builtins.property
    @jsii.member(jsii_name="layers")
    def layers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: layers: The layers of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "layers"))

    @layers.setter
    def layers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd09c76fde184cbb5efdc4db4a837ead554ea53fb4f96ce34a7d5ed5a7062c53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "layers", value)

    @builtins.property
    @jsii.member(jsii_name="logConfig")
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.LogConfigProperty"]]:
        '''
        :Property: logConfig: The log configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.LogConfigProperty"]], jsii.get(self, "logConfig"))

    @log_config.setter
    def log_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.LogConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d7db13744e2a7348be0b5be142898e353f86e0492016d911833be8d5e7796fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logConfig", value)

    @builtins.property
    @jsii.member(jsii_name="memorySize")
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memorySize: The memory size of the function, in MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memorySize"))

    @memory_size.setter
    def memory_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__831f91fe23801c150ace769191d9f561d15ebfdaad8f162c68c4a49706748c01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memorySize", value)

    @builtins.property
    @jsii.member(jsii_name="nasConfig")
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NasConfigProperty"]]:
        '''
        :Property: nasConfig: The NAS configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NasConfigProperty"]], jsii.get(self, "nasConfig"))

    @nas_config.setter
    def nas_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NasConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a034424b3fc84257ddb34ae906319a15bb2b3f000068dd06f620d68dfb0b360)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nasConfig", value)

    @builtins.property
    @jsii.member(jsii_name="ossMountConfig")
    def oss_mount_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigProperty"]]:
        '''
        :Property: ossMountConfig: The OSS mount configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigProperty"]], jsii.get(self, "ossMountConfig"))

    @oss_mount_config.setter
    def oss_mount_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__091a61aade226fcb6ec39544281c987f4777c698ebb8cf6c7adfa22622f30896)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossMountConfig", value)

    @builtins.property
    @jsii.member(jsii_name="role")
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "role"))

    @role.setter
    def role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1245759606cffd05509ea4adbd54435b65b569ddf4a1f34897466037a4228383)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "role", value)

    @builtins.property
    @jsii.member(jsii_name="sessionAffinity")
    def session_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sessionAffinity: The session affinity policy for Function Compute requests. Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sessionAffinity"))

    @session_affinity.setter
    def session_affinity(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7eb614634ea2c54a49ff410e3147d3b49f59983c93e3c5f3cb40706d9fb32ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sessionAffinity", value)

    @builtins.property
    @jsii.member(jsii_name="sessionAffinityConfig")
    def session_affinity_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: sessionAffinityConfig: Session affinity configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "sessionAffinityConfig"))

    @session_affinity_config.setter
    def session_affinity_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4704324876b6fe544be3dd1c6edd7a492d34e84ea793a1e7f00c9ab064aa014c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sessionAffinityConfig", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosFunction.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to function. Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosFunction.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosFunction.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2af5fa68c0f85b67bce4adbd8338dc2f80e253cea938fa872f6bd5d997aff28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9461ad59cdefb0cb7f8bbfc413d08aa59a96f0c3554d75b0e8d526e9ebbf429f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @builtins.property
    @jsii.member(jsii_name="tracingConfig")
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.TracingConfigProperty"]]:
        '''
        :Property: tracingConfig: The tracing configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.TracingConfigProperty"]], jsii.get(self, "tracingConfig"))

    @tracing_config.setter
    def tracing_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.TracingConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6f13e5c000c133fa35cbbfb69bd78b8300b5068732335fee04cdd30daec7fdd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tracingConfig", value)

    @builtins.property
    @jsii.member(jsii_name="vpcConfig")
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.VpcConfigProperty"]]:
        '''
        :Property: vpcConfig: The VPC configuration of the function.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.VpcConfigProperty"]], jsii.get(self, "vpcConfig"))

    @vpc_config.setter
    def vpc_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.VpcConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c8da177cf185920a238337085c742bb6ed1726a1d9748c184834fbdc0c15e19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcConfig", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.AccelerationInfoProperty",
        jsii_struct_bases=[],
        name_mapping={"status": "status"},
    )
    class AccelerationInfoProperty:
        def __init__(
            self,
            *,
            status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param status: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1e900fe4ad6cc34bd53b7b7cfd387f92ba609ea9badeac76be3c6eea770c6108)
                check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if status is not None:
                self._values["status"] = status

        @builtins.property
        def status(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: status: Acceleration status.
            '''
            result = self._values.get("status")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AccelerationInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.AuthConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"password": "password", "user_name": "userName"},
    )
    class AuthConfigProperty:
        def __init__(
            self,
            *,
            password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param password: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__194c2e5b6cd2dc744c52f77766d421dee99a238b1bca433eb845eb16f7f40aaf)
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "password": password,
                "user_name": user_name,
            }

        @builtins.property
        def password(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: password: The password of the username that is used to log on to the image repository.
            '''
            result = self._values.get("password")
            assert result is not None, "Required property 'password' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: userName: The username that is used to log on to the image repository.
            '''
            result = self._values.get("user_name")
            assert result is not None, "Required property 'user_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AuthConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CertConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "insecure": "insecure",
            "root_ca_cert_base64": "rootCaCertBase64",
        },
    )
    class CertConfigProperty:
        def __init__(
            self,
            *,
            insecure: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
            root_ca_cert_base64: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param insecure: 
            :param root_ca_cert_base64: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__feb92e3e48729d5de0f5ace384309a3f208e830399653d5e7e07706ca961d648)
                check_type(argname="argument insecure", value=insecure, expected_type=type_hints["insecure"])
                check_type(argname="argument root_ca_cert_base64", value=root_ca_cert_base64, expected_type=type_hints["root_ca_cert_base64"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "insecure": insecure,
            }
            if root_ca_cert_base64 is not None:
                self._values["root_ca_cert_base64"] = root_ca_cert_base64

        @builtins.property
        def insecure(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: insecure: Whether to skip certificate verification. Default value is false.
            '''
            result = self._values.get("insecure")
            assert result is not None, "Required property 'insecure' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def root_ca_cert_base64(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: rootCaCertBase64: The certificate authority (CA) certificate of the image repository.
            '''
            result = self._values.get("root_ca_cert_base64")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CertConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CodeProperty",
        jsii_struct_bases=[],
        name_mapping={
            "checksum": "checksum",
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
            checksum: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param checksum: 
            :param oss_bucket_name: 
            :param oss_object_name: 
            :param source_code: 
            :param zip_file: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__53e905e0004011ebf968ab2afaab16bdc48c27a876cca0b508f9bf593fc581e1)
                check_type(argname="argument checksum", value=checksum, expected_type=type_hints["checksum"])
                check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
                check_type(argname="argument oss_object_name", value=oss_object_name, expected_type=type_hints["oss_object_name"])
                check_type(argname="argument source_code", value=source_code, expected_type=type_hints["source_code"])
                check_type(argname="argument zip_file", value=zip_file, expected_type=type_hints["zip_file"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if checksum is not None:
                self._values["checksum"] = checksum
            if oss_bucket_name is not None:
                self._values["oss_bucket_name"] = oss_bucket_name
            if oss_object_name is not None:
                self._values["oss_object_name"] = oss_object_name
            if source_code is not None:
                self._values["source_code"] = source_code
            if zip_file is not None:
                self._values["zip_file"] = zip_file

        @builtins.property
        def checksum(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: checksum: CRC-64 value of the function code package. If a checksum is provided, Function Compute will verify whether the checksum of the code package is consistent with the provided checksum.
            '''
            result = self._values.get("checksum")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_bucket_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossBucketName: The name of the OSS bucket where the code package is stored.
            '''
            result = self._values.get("oss_bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oss_object_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ossObjectName: The name of the OSS object where the code package is stored.
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
            :Property: zipFile: Function code Base 64 encoding of the ZIP package.
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
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CustomContainerConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "acceleration_info": "accelerationInfo",
            "acceleration_type": "accelerationType",
            "acr_instance_id": "acrInstanceId",
            "command": "command",
            "entrypoint": "entrypoint",
            "health_check_config": "healthCheckConfig",
            "image": "image",
            "port": "port",
            "registry_config": "registryConfig",
            "resolved_image_uri": "resolvedImageUri",
        },
    )
    class CustomContainerConfigProperty:
        def __init__(
            self,
            *,
            acceleration_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.AccelerationInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            acceleration_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            entrypoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.HealthCheckConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            registry_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.RegistryConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            resolved_image_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param acceleration_info: 
            :param acceleration_type: 
            :param acr_instance_id: 
            :param command: 
            :param entrypoint: 
            :param health_check_config: 
            :param image: 
            :param port: 
            :param registry_config: 
            :param resolved_image_uri: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__45f634030396484b51df188b5653198d0e60d30cd82244de2143fe369ed73f4a)
                check_type(argname="argument acceleration_info", value=acceleration_info, expected_type=type_hints["acceleration_info"])
                check_type(argname="argument acceleration_type", value=acceleration_type, expected_type=type_hints["acceleration_type"])
                check_type(argname="argument acr_instance_id", value=acr_instance_id, expected_type=type_hints["acr_instance_id"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument entrypoint", value=entrypoint, expected_type=type_hints["entrypoint"])
                check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
                check_type(argname="argument image", value=image, expected_type=type_hints["image"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument registry_config", value=registry_config, expected_type=type_hints["registry_config"])
                check_type(argname="argument resolved_image_uri", value=resolved_image_uri, expected_type=type_hints["resolved_image_uri"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if acceleration_info is not None:
                self._values["acceleration_info"] = acceleration_info
            if acceleration_type is not None:
                self._values["acceleration_type"] = acceleration_type
            if acr_instance_id is not None:
                self._values["acr_instance_id"] = acr_instance_id
            if command is not None:
                self._values["command"] = command
            if entrypoint is not None:
                self._values["entrypoint"] = entrypoint
            if health_check_config is not None:
                self._values["health_check_config"] = health_check_config
            if image is not None:
                self._values["image"] = image
            if port is not None:
                self._values["port"] = port
            if registry_config is not None:
                self._values["registry_config"] = registry_config
            if resolved_image_uri is not None:
                self._values["resolved_image_uri"] = resolved_image_uri

        @builtins.property
        def acceleration_info(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AccelerationInfoProperty"]]:
            '''
            :Property: accelerationInfo: Acceleration configuration.
            '''
            result = self._values.get("acceleration_info")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AccelerationInfoProperty"]], result)

        @builtins.property
        def acceleration_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: accelerationType: Whether to enable mirror acceleration. Default means to turn on mirror acceleration, and None means to turn off mirror acceleration.
            '''
            result = self._values.get("acceleration_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def acr_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: acrInstanceId: The ID of the ACR instance.
            '''
            result = self._values.get("acr_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: command: The commands to run in the container.
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def entrypoint(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: entrypoint: The entrypoints to run in the container.
            '''
            result = self._values.get("entrypoint")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def health_check_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.HealthCheckConfigProperty"]]:
            '''
            :Property: healthCheckConfig: Health check configuration.
            '''
            result = self._values.get("health_check_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.HealthCheckConfigProperty"]], result)

        @builtins.property
        def image(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: image: The image address.
            '''
            result = self._values.get("image")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port number of the container.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def registry_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.RegistryConfigProperty"]]:
            '''
            :Property: registryConfig: The configurations of the image repository.
            '''
            result = self._values.get("registry_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.RegistryConfigProperty"]], result)

        @builtins.property
        def resolved_image_uri(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resolvedImageUri: The actual digest version of the deployed image. The code version specified by this digest is actually used when the function is started.
            '''
            result = self._values.get("resolved_image_uri")
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
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CustomDnsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dns_options": "dnsOptions",
            "name_servers": "nameServers",
            "searches": "searches",
        },
    )
    class CustomDnsProperty:
        def __init__(
            self,
            *,
            dns_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.DnsOptionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            name_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            searches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param dns_options: 
            :param name_servers: 
            :param searches: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__26cef31d30e2d1b7a2f366577267e03efa39238c4935a56bc6b4b0129b06815b)
                check_type(argname="argument dns_options", value=dns_options, expected_type=type_hints["dns_options"])
                check_type(argname="argument name_servers", value=name_servers, expected_type=type_hints["name_servers"])
                check_type(argname="argument searches", value=searches, expected_type=type_hints["searches"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if dns_options is not None:
                self._values["dns_options"] = dns_options
            if name_servers is not None:
                self._values["name_servers"] = name_servers
            if searches is not None:
                self._values["searches"] = searches

        @builtins.property
        def dns_options(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.DnsOptionsProperty"]]]]:
            '''
            :Property: dnsOptions: List of DNS resolution configurations in the resolv.conf file.
            '''
            result = self._values.get("dns_options")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.DnsOptionsProperty"]]]], result)

        @builtins.property
        def name_servers(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: nameServers: List of DNS servers.
            '''
            result = self._values.get("name_servers")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def searches(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: searches: List of DNS search domains.
            '''
            result = self._values.get("searches")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CustomDnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigHealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "failure_threshold": "failureThreshold",
            "http_get_url": "httpGetUrl",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class CustomRuntimeConfigHealthCheckConfigProperty:
        def __init__(
            self,
            *,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param failure_threshold: 
            :param http_get_url: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param timeout_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0426ee9c11ad00300eb0d9b1399b81566d41470dd546b98a323f74d16193897b)
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get_url", value=http_get_url, expected_type=type_hints["http_get_url"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_url is not None:
                self._values["http_get_url"] = http_get_url
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
            '''
            result = self._values.get("http_get_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeoutSeconds: The timeout for the health check.
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CustomRuntimeConfigHealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "args": "args",
            "command": "command",
            "health_check_config": "healthCheckConfig",
            "port": "port",
        },
    )
    class CustomRuntimeConfigProperty:
        def __init__(
            self,
            *,
            args: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CustomRuntimeConfigHealthCheckConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param args: 
            :param command: 
            :param health_check_config: 
            :param port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6af18cd07c316aedb23b9b533cfb564a855adf544f79ae0c074f2ba962dcb7eb)
                check_type(argname="argument args", value=args, expected_type=type_hints["args"])
                check_type(argname="argument command", value=command, expected_type=type_hints["command"])
                check_type(argname="argument health_check_config", value=health_check_config, expected_type=type_hints["health_check_config"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if args is not None:
                self._values["args"] = args
            if command is not None:
                self._values["command"] = command
            if health_check_config is not None:
                self._values["health_check_config"] = health_check_config
            if port is not None:
                self._values["port"] = port

        @builtins.property
        def args(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: args: Instance startup parameters.
            '''
            result = self._values.get("args")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def command(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: command: Instance startup commands.
            '''
            result = self._values.get("command")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def health_check_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigHealthCheckConfigProperty"]]:
            '''
            :Property: healthCheckConfig: Health check configuration.
            '''
            result = self._values.get("health_check_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CustomRuntimeConfigHealthCheckConfigProperty"]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The listening port of the HTTP Server.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CustomRuntimeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.DnsOptionsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "value": "value"},
    )
    class DnsOptionsProperty:
        def __init__(
            self,
            *,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fc3413e7132b65545620ccf9d9a19318d1cfa8670ca08e9c85afcc7344af01bd)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if name is not None:
                self._values["name"] = name
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The name of the DNS resolution configuration.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the DNS resolution configuration.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DnsOptionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.GpuConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"gpu_memory_size": "gpuMemorySize", "gpu_type": "gpuType"},
    )
    class GpuConfigProperty:
        def __init__(
            self,
            *,
            gpu_memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            gpu_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param gpu_memory_size: 
            :param gpu_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6911a7b9b84811c37f010da3572de0e4cb5cd67f78957ab37ca21dda3cc3c2a0)
                check_type(argname="argument gpu_memory_size", value=gpu_memory_size, expected_type=type_hints["gpu_memory_size"])
                check_type(argname="argument gpu_type", value=gpu_type, expected_type=type_hints["gpu_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if gpu_memory_size is not None:
                self._values["gpu_memory_size"] = gpu_memory_size
            if gpu_type is not None:
                self._values["gpu_type"] = gpu_type

        @builtins.property
        def gpu_memory_size(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: gpuMemorySize: GPU memory specifications in MB, multiples of 1024MB.
            '''
            result = self._values.get("gpu_memory_size")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def gpu_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: gpuType: GPU instance type.
            '''
            result = self._values.get("gpu_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "GpuConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.HealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "failure_threshold": "failureThreshold",
            "http_get_url": "httpGetUrl",
            "initial_delay_seconds": "initialDelaySeconds",
            "period_seconds": "periodSeconds",
            "success_threshold": "successThreshold",
            "timeout_seconds": "timeoutSeconds",
        },
    )
    class HealthCheckConfigProperty:
        def __init__(
            self,
            *,
            failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_get_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param failure_threshold: 
            :param http_get_url: 
            :param initial_delay_seconds: 
            :param period_seconds: 
            :param success_threshold: 
            :param timeout_seconds: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6cf834d0e1120c5af01a03e188f8f9769ec01718bb10c6d054ae3452f1677a71)
                check_type(argname="argument failure_threshold", value=failure_threshold, expected_type=type_hints["failure_threshold"])
                check_type(argname="argument http_get_url", value=http_get_url, expected_type=type_hints["http_get_url"])
                check_type(argname="argument initial_delay_seconds", value=initial_delay_seconds, expected_type=type_hints["initial_delay_seconds"])
                check_type(argname="argument period_seconds", value=period_seconds, expected_type=type_hints["period_seconds"])
                check_type(argname="argument success_threshold", value=success_threshold, expected_type=type_hints["success_threshold"])
                check_type(argname="argument timeout_seconds", value=timeout_seconds, expected_type=type_hints["timeout_seconds"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if failure_threshold is not None:
                self._values["failure_threshold"] = failure_threshold
            if http_get_url is not None:
                self._values["http_get_url"] = http_get_url
            if initial_delay_seconds is not None:
                self._values["initial_delay_seconds"] = initial_delay_seconds
            if period_seconds is not None:
                self._values["period_seconds"] = period_seconds
            if success_threshold is not None:
                self._values["success_threshold"] = success_threshold
            if timeout_seconds is not None:
                self._values["timeout_seconds"] = timeout_seconds

        @builtins.property
        def failure_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: failureThreshold: The threshold for the number of health check failures. When this value is reached, the system considers the check to have failed. The value range is 1~120. The default value is 3.
            '''
            result = self._values.get("failure_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_get_url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpGetUrl: Container custom health check URL address. Length cannot exceed 2048 characters.
            '''
            result = self._values.get("http_get_url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def initial_delay_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: initialDelaySeconds: The initial delay for the health check. The value range is 0~120. The default value is 0.
            '''
            result = self._values.get("initial_delay_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def period_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: periodSeconds: The interval for the health check. The value range is 1~120. The default value is 3.
            '''
            result = self._values.get("period_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def success_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: successThreshold: The threshold for the number of successful health checks. When this value is reached, the system considers the check to have succeeded. The value range is 1~120. The default value is 1.
            '''
            result = self._values.get("success_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout_seconds(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeoutSeconds: The timeout for the health check.
            '''
            result = self._values.get("timeout_seconds")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.InitializerProperty",
        jsii_struct_bases=[],
        name_mapping={"handler": "handler", "timeout": "timeout"},
    )
    class InitializerProperty:
        def __init__(
            self,
            *,
            handler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param handler: 
            :param timeout: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dfd365ed18d32b591480781a62390be51b3acd6706564c4e148e482038c93620)
                check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if handler is not None:
                self._values["handler"] = handler
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def handler(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: handler: The execution entry of the callback method has a similar meaning to the request handler.
            '''
            result = self._values.get("handler")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeout: The timeout for the callback method.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InitializerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.InstanceLifecycleConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"initializer": "initializer", "pre_stop": "preStop"},
    )
    class InstanceLifecycleConfigProperty:
        def __init__(
            self,
            *,
            initializer: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.InitializerProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            pre_stop: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.PreStopProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param initializer: 
            :param pre_stop: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8eb2425600f2378bba4647fa7009575f7436f7ac3ccf5c88d44a4aa79168c897)
                check_type(argname="argument initializer", value=initializer, expected_type=type_hints["initializer"])
                check_type(argname="argument pre_stop", value=pre_stop, expected_type=type_hints["pre_stop"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if initializer is not None:
                self._values["initializer"] = initializer
            if pre_stop is not None:
                self._values["pre_stop"] = pre_stop

        @builtins.property
        def initializer(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InitializerProperty"]]:
            '''
            :Property: initializer: Instance lifecycle callback method configuration.
            '''
            result = self._values.get("initializer")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.InitializerProperty"]], result)

        @builtins.property
        def pre_stop(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.PreStopProperty"]]:
            '''
            :Property: preStop: Instance lifecycle callback method configuration.
            '''
            result = self._values.get("pre_stop")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.PreStopProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "InstanceLifecycleConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.LogConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable_instance_metrics": "enableInstanceMetrics",
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
            enable_instance_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_request_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            log_begin_rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            logstore: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_instance_metrics: 
            :param enable_request_metrics: 
            :param log_begin_rule: 
            :param logstore: 
            :param project: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c70611aa68a9507d97c96031de7f55171ba6b1cb9ac9b2ccf901bd8f7b102175)
                check_type(argname="argument enable_instance_metrics", value=enable_instance_metrics, expected_type=type_hints["enable_instance_metrics"])
                check_type(argname="argument enable_request_metrics", value=enable_request_metrics, expected_type=type_hints["enable_request_metrics"])
                check_type(argname="argument log_begin_rule", value=log_begin_rule, expected_type=type_hints["log_begin_rule"])
                check_type(argname="argument logstore", value=logstore, expected_type=type_hints["logstore"])
                check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_instance_metrics is not None:
                self._values["enable_instance_metrics"] = enable_instance_metrics
            if enable_request_metrics is not None:
                self._values["enable_request_metrics"] = enable_request_metrics
            if log_begin_rule is not None:
                self._values["log_begin_rule"] = log_begin_rule
            if logstore is not None:
                self._values["logstore"] = logstore
            if project is not None:
                self._values["project"] = project

        @builtins.property
        def enable_instance_metrics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableInstanceMetrics: Whether to enable the instance metrics.
            '''
            result = self._values.get("enable_instance_metrics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_request_metrics(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableRequestMetrics: Whether to enable the request metrics.
            '''
            result = self._values.get("enable_request_metrics")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def log_begin_rule(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logBeginRule: The log begin rule.
            '''
            result = self._values.get("log_begin_rule")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def logstore(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: logstore: The logstore of the function.
            '''
            result = self._values.get("logstore")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def project(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: project: The project of the function.
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
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.MountPointsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "enable_tls": "enableTls",
            "mount_dir": "mountDir",
            "server_addr": "serverAddr",
        },
    )
    class MountPointsProperty:
        def __init__(
            self,
            *,
            enable_tls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_addr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param enable_tls: 
            :param mount_dir: 
            :param server_addr: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7d3c5a152ee5027ae03335bc45d7bf4f70ae5da851973da2ac990268daa7896b)
                check_type(argname="argument enable_tls", value=enable_tls, expected_type=type_hints["enable_tls"])
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
                check_type(argname="argument server_addr", value=server_addr, expected_type=type_hints["server_addr"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if enable_tls is not None:
                self._values["enable_tls"] = enable_tls
            if mount_dir is not None:
                self._values["mount_dir"] = mount_dir
            if server_addr is not None:
                self._values["server_addr"] = server_addr

        @builtins.property
        def enable_tls(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableTls: Mount using transport encryption. Note: Only general-purpose NAS supports transmission encryption.
            '''
            result = self._values.get("enable_tls")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDir: The mount directory of the function.
            '''
            result = self._values.get("mount_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_addr(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverAddr: NAS server address.
            '''
            result = self._values.get("server_addr")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MountPointsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.NasConfigProperty",
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
            group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.MountPointsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
            user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param group_id: 
            :param mount_points: 
            :param user_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__e4d06a96878d5f7a3762470b4f50b93228ab765883133a0b2758f4ab5ee5f99d)
                check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
                check_type(argname="argument mount_points", value=mount_points, expected_type=type_hints["mount_points"])
                check_type(argname="argument user_id", value=user_id, expected_type=type_hints["user_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if group_id is not None:
                self._values["group_id"] = group_id
            if mount_points is not None:
                self._values["mount_points"] = mount_points
            if user_id is not None:
                self._values["user_id"] = user_id

        @builtins.property
        def group_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: groupId: The group ID of the function.
            '''
            result = self._values.get("group_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.MountPointsProperty"]]]]:
            '''
            :Property: mountPoints: The mount points of the function.
            '''
            result = self._values.get("mount_points")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.MountPointsProperty"]]]], result)

        @builtins.property
        def user_id(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: userId: The user ID of the function.
            '''
            result = self._values.get("user_id")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NasConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.NetworkConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "security_group_id": "securityGroupId",
            "vpc_id": "vpcId",
            "v_switch_id": "vSwitchId",
        },
    )
    class NetworkConfigProperty:
        def __init__(
            self,
            *,
            security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3788c5dc7178089de5c9adc6a22bde3e3db7bfba9f73b0aa81c50c0fbf2171e6)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "security_group_id": security_group_id,
                "vpc_id": vpc_id,
                "v_switch_id": v_switch_id,
            }

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: securityGroupId: The ID of the security group that can be used to connect to the image repository.
            '''
            result = self._values.get("security_group_id")
            assert result is not None, "Required property 'security_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: The ID of the virtual private cloud (VPC) that can be used to connect to the image repository.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch that can be used to connect to the image repository.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "NetworkConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigMountPointsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bucket_name": "bucketName",
            "bucket_path": "bucketPath",
            "endpoint": "endpoint",
            "mount_dir": "mountDir",
            "read_only": "readOnly",
        },
    )
    class OssMountConfigMountPointsProperty:
        def __init__(
            self,
            *,
            bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            bucket_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param bucket_name: 
            :param bucket_path: 
            :param endpoint: 
            :param mount_dir: 
            :param read_only: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__99f70dd50f5d39d4091aea8527f9085537bc22840aaf212b70771df6499c1f9d)
                check_type(argname="argument bucket_name", value=bucket_name, expected_type=type_hints["bucket_name"])
                check_type(argname="argument bucket_path", value=bucket_path, expected_type=type_hints["bucket_path"])
                check_type(argname="argument endpoint", value=endpoint, expected_type=type_hints["endpoint"])
                check_type(argname="argument mount_dir", value=mount_dir, expected_type=type_hints["mount_dir"])
                check_type(argname="argument read_only", value=read_only, expected_type=type_hints["read_only"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if bucket_name is not None:
                self._values["bucket_name"] = bucket_name
            if bucket_path is not None:
                self._values["bucket_path"] = bucket_path
            if endpoint is not None:
                self._values["endpoint"] = endpoint
            if mount_dir is not None:
                self._values["mount_dir"] = mount_dir
            if read_only is not None:
                self._values["read_only"] = read_only

        @builtins.property
        def bucket_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bucketName: Mounted OSS Bucket.
            '''
            result = self._values.get("bucket_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def bucket_path(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: bucketPath: Mounted OSS Bucket path.
            '''
            result = self._values.get("bucket_path")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endpoint: The endpoint of the bucket.
            '''
            result = self._values.get("endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def mount_dir(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mountDir: The mount directory of the function.
            '''
            result = self._values.get("mount_dir")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def read_only(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: readOnly: Mounted OSS Bucket read-only.
            '''
            result = self._values.get("read_only")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OssMountConfigMountPointsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigProperty",
        jsii_struct_bases=[],
        name_mapping={"mount_points": "mountPoints"},
    )
    class OssMountConfigProperty:
        def __init__(
            self,
            *,
            mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.OssMountConfigMountPointsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param mount_points: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__39d4240a489145b54ff34eac8ee7f3b8605866bfbd15033d65dd8f041f020e2d)
                check_type(argname="argument mount_points", value=mount_points, expected_type=type_hints["mount_points"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if mount_points is not None:
                self._values["mount_points"] = mount_points

        @builtins.property
        def mount_points(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigMountPointsProperty"]]]]:
            '''
            :Property: mountPoints: The mount points of the function.
            '''
            result = self._values.get("mount_points")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.OssMountConfigMountPointsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OssMountConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.PreStopProperty",
        jsii_struct_bases=[],
        name_mapping={"handler": "handler", "timeout": "timeout"},
    )
    class PreStopProperty:
        def __init__(
            self,
            *,
            handler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param handler: 
            :param timeout: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__99f926c002263f0c52c0c368ee599961df2736d9368698dc11538358c722d735)
                check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if handler is not None:
                self._values["handler"] = handler
            if timeout is not None:
                self._values["timeout"] = timeout

        @builtins.property
        def handler(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: handler: The execution entry of the callback method has a similar meaning to the request handler.
            '''
            result = self._values.get("handler")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeout: The timeout for the callback method.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PreStopProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.RegistryConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cert_config": "certConfig",
            "auth_config": "authConfig",
            "network_config": "networkConfig",
        },
    )
    class RegistryConfigProperty:
        def __init__(
            self,
            *,
            cert_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.CertConfigProperty", typing.Dict[builtins.str, typing.Any]]],
            auth_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.AuthConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            network_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.NetworkConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param cert_config: 
            :param auth_config: 
            :param network_config: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__df846861abac315d155ad746532c7df082bf1f9f54bbb32938d67f11dfb8f4de)
                check_type(argname="argument cert_config", value=cert_config, expected_type=type_hints["cert_config"])
                check_type(argname="argument auth_config", value=auth_config, expected_type=type_hints["auth_config"])
                check_type(argname="argument network_config", value=network_config, expected_type=type_hints["network_config"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "cert_config": cert_config,
            }
            if auth_config is not None:
                self._values["auth_config"] = auth_config
            if network_config is not None:
                self._values["network_config"] = network_config

        @builtins.property
        def cert_config(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CertConfigProperty"]:
            '''
            :Property: certConfig: The certificate configurations.
            '''
            result = self._values.get("cert_config")
            assert result is not None, "Required property 'cert_config' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.CertConfigProperty"], result)

        @builtins.property
        def auth_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AuthConfigProperty"]]:
            '''
            :Property: authConfig: The authentication information of the image repository.
            '''
            result = self._values.get("auth_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.AuthConfigProperty"]], result)

        @builtins.property
        def network_config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NetworkConfigProperty"]]:
            '''
            :Property: networkConfig: The network information of the image repository.
            '''
            result = self._values.get("network_config")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunction.NetworkConfigProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RegistryConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__2c8e87e841e300586881f3c11dd751e1bee084ec069e748002fd84dd8ae8b3a6)
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
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.TracingConfigProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__2d99946d38db0471d13b26f4c25c3c15bfa133853e5a28d250a474a999170dba)
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
            :Property: params: Link tracking parameters.
            '''
            result = self._values.get("params")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The type of the function.
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
        jsii_type="@alicloud/ros-cdk-fc3.RosFunction.VpcConfigProperty",
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
            security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param security_group_id: 
            :param vpc_id: 
            :param v_switch_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__a8a32da1dae8108d023af926d66389cc9bd54407875e2aff7ad7ccd8e0a9d6c8)
                check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if security_group_id is not None:
                self._values["security_group_id"] = security_group_id
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if v_switch_ids is not None:
                self._values["v_switch_ids"] = v_switch_ids

        @builtins.property
        def security_group_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: securityGroupId: The ID of the security group.
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
        def v_switch_ids(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: vSwitchIds: The IDs of the VSwitch.
            '''
            result = self._values.get("v_switch_ids")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosFunctionInvoker(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosFunctionInvoker",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::FunctionInvoker``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FunctionInvoker`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFunctionInvokerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de5569233a264aae8df7316f9ff8dfe97d5bf679988ea512ff19ef745e9ed5e7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d10082ee917f14f37f58662ea22038acffb8c1f2c968b90a47d6d6b551b282b3)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Events: Events for async invocation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEvents"))

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
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TaskId: Task id for async invocation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTaskId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__12cd90e33e24cc470b6e18bef60dc086c0c7e0a4a9d34d170004f21e7077877c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: The name of the function.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77478432e0488cff2f26c0f526feb9e975718c90be88e9cefc08d1108d2c0d54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="async")
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: async: Whether to invoke the function asynchronously.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "async"))

    @async_.setter
    def async_(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ae2a828c8b9e1fb27cd5188e962b4f2126b1c86b83082e49d26acbc4feba2ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "async", value)

    @builtins.property
    @jsii.member(jsii_name="checkAsyncInvocation")
    def check_async_invocation(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunctionInvoker.CheckAsyncInvocationProperty"]]:
        '''
        :Property: checkAsyncInvocation: Check async invocation setting.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunctionInvoker.CheckAsyncInvocationProperty"]], jsii.get(self, "checkAsyncInvocation"))

    @check_async_invocation.setter
    def check_async_invocation(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosFunctionInvoker.CheckAsyncInvocationProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f114308e9a6317e78c6fcbd60378d5e8cabf2ec13fc37b1554e06822745661ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkAsyncInvocation", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__8727204a31a6bdd3f7587c470d50e25569cc3ae919005cc3828c041abc6a0b55)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9a9b6221557b0fc9851dd4c46ebce89faf0980eaf4b7aadf3d9efbc56b9146ce)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e18c62db89ac0d4b57c2d68b1358f839175d764f0e3847f02b5363b19a2da3b4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f2e2f2ede4829c32aef3033375dcb54c172fe2adca0a6c79bf139199f33ba86b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__58a8edcb42cfa20db7be879a097c7c0cf890bed4f468ca04e27a08990041f0a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceRegionId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosFunctionInvoker.CheckAsyncInvocationProperty",
        jsii_struct_bases=[],
        name_mapping={
            "check_interval": "checkInterval",
            "check_times": "checkTimes",
            "enabled": "enabled",
        },
    )
    class CheckAsyncInvocationProperty:
        def __init__(
            self,
            *,
            check_interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            check_times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param check_interval: 
            :param check_times: 
            :param enabled: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8c687d1a064356423de9359ed503cdf5eb12ddd4253bf7519f68d4ca141776d3)
                check_type(argname="argument check_interval", value=check_interval, expected_type=type_hints["check_interval"])
                check_type(argname="argument check_times", value=check_times, expected_type=type_hints["check_times"])
                check_type(argname="argument enabled", value=enabled, expected_type=type_hints["enabled"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "check_interval": check_interval,
                "check_times": check_times,
                "enabled": enabled,
            }

        @builtins.property
        def check_interval(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            checkInterval: Check interval for async invocation result.
            Default is 10 seconds. Unit is second
            '''
            result = self._values.get("check_interval")
            assert result is not None, "Required property 'check_interval' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def check_times(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            checkTimes: Check times for async invocation result.
            Default is 10 times.
            '''
            result = self._values.get("check_times")
            assert result is not None, "Required property 'check_times' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def enabled(
            self,
        ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            enabled: Whether check async invocation result.
            If set true and function invocation type is async, the resource creation will wait until invocation finish and check result.
            Default is false
            '''
            result = self._values.get("enabled")
            assert result is not None, "Required property 'enabled' is missing"
            return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "CheckAsyncInvocationProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosFunctionInvokerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "async_": "async",
        "check_async_invocation": "checkAsyncInvocation",
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
        async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        check_async_invocation: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunctionInvoker.CheckAsyncInvocationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFunctionInvoker``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker

        :param function_name: 
        :param async_: 
        :param check_async_invocation: 
        :param check_error: 
        :param event: 
        :param execute_version: 
        :param qualifier: 
        :param service_region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a1e79a2258b3cc7ab34e4c76a4ee7aaf45e2d61337ccd3cd33fe3434c6969cb0)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument async_", value=async_, expected_type=type_hints["async_"])
            check_type(argname="argument check_async_invocation", value=check_async_invocation, expected_type=type_hints["check_async_invocation"])
            check_type(argname="argument check_error", value=check_error, expected_type=type_hints["check_error"])
            check_type(argname="argument event", value=event, expected_type=type_hints["event"])
            check_type(argname="argument execute_version", value=execute_version, expected_type=type_hints["execute_version"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument service_region_id", value=service_region_id, expected_type=type_hints["service_region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
        }
        if async_ is not None:
            self._values["async_"] = async_
        if check_async_invocation is not None:
            self._values["check_async_invocation"] = check_async_invocation
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
        :Property: functionName: The name of the function.
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def async_(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: async: Whether to invoke the function asynchronously.
        '''
        result = self._values.get("async_")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def check_async_invocation(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunctionInvoker.CheckAsyncInvocationProperty]]:
        '''
        :Property: checkAsyncInvocation: Check async invocation setting.
        '''
        result = self._values.get("check_async_invocation")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunctionInvoker.CheckAsyncInvocationProperty]], result)

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
    jsii_type="@alicloud/ros-cdk-fc3.RosFunctionProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "handler": "handler",
        "runtime": "runtime",
        "code": "code",
        "cpu": "cpu",
        "custom_container_config": "customContainerConfig",
        "custom_dns": "customDns",
        "custom_runtime_config": "customRuntimeConfig",
        "description": "description",
        "disable_ondemand": "disableOndemand",
        "disk_size": "diskSize",
        "environment_variables": "environmentVariables",
        "gpu_config": "gpuConfig",
        "instance_concurrency": "instanceConcurrency",
        "instance_isolation_mode": "instanceIsolationMode",
        "instance_lifecycle_config": "instanceLifecycleConfig",
        "internet_access": "internetAccess",
        "layers": "layers",
        "log_config": "logConfig",
        "memory_size": "memorySize",
        "nas_config": "nasConfig",
        "oss_mount_config": "ossMountConfig",
        "role": "role",
        "session_affinity": "sessionAffinity",
        "session_affinity_config": "sessionAffinityConfig",
        "tags": "tags",
        "timeout": "timeout",
        "tracing_config": "tracingConfig",
        "vpc_config": "vpcConfig",
    },
)
class RosFunctionProps:
    def __init__(
        self,
        *,
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomDnsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        custom_runtime_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomRuntimeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disable_ondemand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_isolation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        session_affinity_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosFunction.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosFunction``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function

        :param function_name: 
        :param handler: 
        :param runtime: 
        :param code: 
        :param cpu: 
        :param custom_container_config: 
        :param custom_dns: 
        :param custom_runtime_config: 
        :param description: 
        :param disable_ondemand: 
        :param disk_size: 
        :param environment_variables: 
        :param gpu_config: 
        :param instance_concurrency: 
        :param instance_isolation_mode: 
        :param instance_lifecycle_config: 
        :param internet_access: 
        :param layers: 
        :param log_config: 
        :param memory_size: 
        :param nas_config: 
        :param oss_mount_config: 
        :param role: 
        :param session_affinity: 
        :param session_affinity_config: 
        :param tags: 
        :param timeout: 
        :param tracing_config: 
        :param vpc_config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7e76e0e05566c11022d1be6cc1b711d169b1f42b40f4611bb494f19eac7aa6f)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument handler", value=handler, expected_type=type_hints["handler"])
            check_type(argname="argument runtime", value=runtime, expected_type=type_hints["runtime"])
            check_type(argname="argument code", value=code, expected_type=type_hints["code"])
            check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
            check_type(argname="argument custom_container_config", value=custom_container_config, expected_type=type_hints["custom_container_config"])
            check_type(argname="argument custom_dns", value=custom_dns, expected_type=type_hints["custom_dns"])
            check_type(argname="argument custom_runtime_config", value=custom_runtime_config, expected_type=type_hints["custom_runtime_config"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument disable_ondemand", value=disable_ondemand, expected_type=type_hints["disable_ondemand"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument gpu_config", value=gpu_config, expected_type=type_hints["gpu_config"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_isolation_mode", value=instance_isolation_mode, expected_type=type_hints["instance_isolation_mode"])
            check_type(argname="argument instance_lifecycle_config", value=instance_lifecycle_config, expected_type=type_hints["instance_lifecycle_config"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument layers", value=layers, expected_type=type_hints["layers"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument oss_mount_config", value=oss_mount_config, expected_type=type_hints["oss_mount_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
            check_type(argname="argument session_affinity", value=session_affinity, expected_type=type_hints["session_affinity"])
            check_type(argname="argument session_affinity_config", value=session_affinity_config, expected_type=type_hints["session_affinity_config"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument tracing_config", value=tracing_config, expected_type=type_hints["tracing_config"])
            check_type(argname="argument vpc_config", value=vpc_config, expected_type=type_hints["vpc_config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "handler": handler,
            "runtime": runtime,
        }
        if code is not None:
            self._values["code"] = code
        if cpu is not None:
            self._values["cpu"] = cpu
        if custom_container_config is not None:
            self._values["custom_container_config"] = custom_container_config
        if custom_dns is not None:
            self._values["custom_dns"] = custom_dns
        if custom_runtime_config is not None:
            self._values["custom_runtime_config"] = custom_runtime_config
        if description is not None:
            self._values["description"] = description
        if disable_ondemand is not None:
            self._values["disable_ondemand"] = disable_ondemand
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if gpu_config is not None:
            self._values["gpu_config"] = gpu_config
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
        if instance_isolation_mode is not None:
            self._values["instance_isolation_mode"] = instance_isolation_mode
        if instance_lifecycle_config is not None:
            self._values["instance_lifecycle_config"] = instance_lifecycle_config
        if internet_access is not None:
            self._values["internet_access"] = internet_access
        if layers is not None:
            self._values["layers"] = layers
        if log_config is not None:
            self._values["log_config"] = log_config
        if memory_size is not None:
            self._values["memory_size"] = memory_size
        if nas_config is not None:
            self._values["nas_config"] = nas_config
        if oss_mount_config is not None:
            self._values["oss_mount_config"] = oss_mount_config
        if role is not None:
            self._values["role"] = role
        if session_affinity is not None:
            self._values["session_affinity"] = session_affinity
        if session_affinity_config is not None:
            self._values["session_affinity_config"] = session_affinity_config
        if tags is not None:
            self._values["tags"] = tags
        if timeout is not None:
            self._values["timeout"] = timeout
        if tracing_config is not None:
            self._values["tracing_config"] = tracing_config
        if vpc_config is not None:
            self._values["vpc_config"] = vpc_config

    @builtins.property
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: The name of the function.
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def handler(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: handler: The handler of the function.
        '''
        result = self._values.get("handler")
        assert result is not None, "Required property 'handler' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def runtime(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: runtime: The programming language of the function.
        '''
        result = self._values.get("runtime")
        assert result is not None, "Required property 'runtime' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def code(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]]:
        '''
        :Property: code: Function code ZIP package. Choose one of Code and CustomContainerConfig.
        '''
        result = self._values.get("code")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]], result)

    @builtins.property
    def cpu(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
        '''
        result = self._values.get("cpu")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def custom_container_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]]:
        '''
        :Property: customContainerConfig: Custom container configuration. Choose one of Code and CustomContainerConfig.
        '''
        result = self._values.get("custom_container_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]], result)

    @builtins.property
    def custom_dns(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomDnsProperty]]:
        '''
        :Property: customDns: Custom DNS configuration.
        '''
        result = self._values.get("custom_dns")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomDnsProperty]], result)

    @builtins.property
    def custom_runtime_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomRuntimeConfigProperty]]:
        '''
        :Property: customRuntimeConfig: Custom runtime configuration.
        '''
        result = self._values.get("custom_runtime_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomRuntimeConfigProperty]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Function description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disable_ondemand(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disableOndemand: Whether to disable the creation of on-demand instances. When enabled, on-demand instances will not be created, and only reserved instances can be used.
        '''
        result = self._values.get("disable_ondemand")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskSize: The disk size of the function, in MB.
        '''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def environment_variables(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: environmentVariables: The environment variables of the function.
        '''
        result = self._values.get("environment_variables")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def gpu_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.GpuConfigProperty]]:
        '''
        :Property: gpuConfig: The GPU configuration of the function.
        '''
        result = self._values.get("gpu_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.GpuConfigProperty]], result)

    @builtins.property
    def instance_concurrency(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceConcurrency: The maximum number of concurrent instances of the function.
        '''
        result = self._values.get("instance_concurrency")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_isolation_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceIsolationMode: Instance isolation mode.
        '''
        result = self._values.get("instance_isolation_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_lifecycle_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.InstanceLifecycleConfigProperty]]:
        '''
        :Property: instanceLifecycleConfig: The instance lifecycle configuration of the function.
        '''
        result = self._values.get("instance_lifecycle_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.InstanceLifecycleConfigProperty]], result)

    @builtins.property
    def internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetAccess: Whether the function can access the Internet.
        '''
        result = self._values.get("internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def layers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: layers: The layers of the function.
        '''
        result = self._values.get("layers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def log_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.LogConfigProperty]]:
        '''
        :Property: logConfig: The log configuration of the function.
        '''
        result = self._values.get("log_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.LogConfigProperty]], result)

    @builtins.property
    def memory_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memorySize: The memory size of the function, in MB.
        '''
        result = self._values.get("memory_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nas_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.NasConfigProperty]]:
        '''
        :Property: nasConfig: The NAS configuration of the function.
        '''
        result = self._values.get("nas_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.NasConfigProperty]], result)

    @builtins.property
    def oss_mount_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.OssMountConfigProperty]]:
        '''
        :Property: ossMountConfig: The OSS mount configuration of the function.
        '''
        result = self._values.get("oss_mount_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.OssMountConfigProperty]], result)

    @builtins.property
    def role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
        '''
        result = self._values.get("role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_affinity(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sessionAffinity: The session affinity policy for Function Compute requests. Set to MCP_SSE to implement MCP SSE protocol request affinity. Set to GENERATED_COOKIE for cookie-based affinity. Set to HEADER_FIELD for header-based affinity. If not set or set to NONE, there is no affinity effect, and requests are routed according to the default scheduling policy of Function Compute.
        '''
        result = self._values.get("session_affinity")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def session_affinity_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: sessionAffinityConfig: Session affinity configuration.
        '''
        result = self._values.get("session_affinity_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosFunction.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to function. Max support 20 tags to add during create function. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosFunction.TagsProperty]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout of the function.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.TracingConfigProperty]]:
        '''
        :Property: tracingConfig: The tracing configuration of the function.
        '''
        result = self._values.get("tracing_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.TracingConfigProperty]], result)

    @builtins.property
    def vpc_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.VpcConfigProperty]]:
        '''
        :Property: vpcConfig: The VPC configuration of the function.
        '''
        result = self._values.get("vpc_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.VpcConfigProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFunctionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProvisionConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosProvisionConfig",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::ProvisionConfig``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ProvisionConfig`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProvisionConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__262f46a576ffdd33571045fa24670bb20213ce5861b6c189f3a77c0b07287f97)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e18bac0f4bf22498379f7eb7f7cea5f3e48680ede32e23244597192cf02c5c87)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="defaultTarget")
    def default_target(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultTarget: The number of target resources to reserve.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "defaultTarget"))

    @default_target.setter
    def default_target(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4127856263ab2fbd59055f2c7e38e6201da5be5ee21f4db9ad9062b21e29341d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultTarget", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20289b8fd02a0b17c551bdab01f3fc103748b46cc8b365842d7b21fdca907df0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__465935a8bbd137e040cf4fba718332322f387ce6daa0ca7488a5da4f08f79309)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="alwaysAllocateCpu")
    def always_allocate_cpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alwaysAllocateCpu"))

    @always_allocate_cpu.setter
    def always_allocate_cpu(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6140e22fd3a6ebc265ad36d5051acf372ccea4414885da11e1821a1023a60da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alwaysAllocateCpu", value)

    @builtins.property
    @jsii.member(jsii_name="alwaysAllocateGpu")
    def always_allocate_gpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alwaysAllocateGpu"))

    @always_allocate_gpu.setter
    def always_allocate_gpu(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55579aaa2ff90965d1275a905a87ee20035d2d9b4751efef4b61a72bba3f75e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alwaysAllocateGpu", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: Function alias or LATEST.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b251a252cdea429736384c7d0f1a91ce0012dae2cc84cf8a14e49b874413612b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

    @builtins.property
    @jsii.member(jsii_name="scheduledActions")
    def scheduled_actions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.ScheduledActionsProperty"]]]]:
        '''
        :Property: scheduledActions: Timing policy configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.ScheduledActionsProperty"]]]], jsii.get(self, "scheduledActions"))

    @scheduled_actions.setter
    def scheduled_actions(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.ScheduledActionsProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94a5c0c08edd60d366044e9599eacc31d81916263f817c8bacfcdcb34cbb8732)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduledActions", value)

    @builtins.property
    @jsii.member(jsii_name="targetTrackingPolicies")
    def target_tracking_policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.TargetTrackingPoliciesProperty"]]]]:
        '''
        :Property: targetTrackingPolicies: Target tracking policy configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.TargetTrackingPoliciesProperty"]]]], jsii.get(self, "targetTrackingPolicies"))

    @target_tracking_policies.setter
    def target_tracking_policies(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProvisionConfig.TargetTrackingPoliciesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__354af516ec65b9bfbb84d1817bf5dc7decd39a8740c5d9d88ff77e3562968dfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetTrackingPolicies", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosProvisionConfig.ScheduledActionsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "name": "name",
            "target": "target",
            "end_time": "endTime",
            "schedule_expression": "scheduleExpression",
            "start_time": "startTime",
            "time_zone": "timeZone",
        },
    )
    class ScheduledActionsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            schedule_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param target: 
            :param end_time: 
            :param schedule_expression: 
            :param start_time: 
            :param time_zone: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f747530699cf7d2f70c46856557a44be9252ede1781615b9d7923aceaa41369a)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument target", value=target, expected_type=type_hints["target"])
                check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
                check_type(argname="argument schedule_expression", value=schedule_expression, expected_type=type_hints["schedule_expression"])
                check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
                check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "target": target,
            }
            if end_time is not None:
                self._values["end_time"] = end_time
            if schedule_expression is not None:
                self._values["schedule_expression"] = schedule_expression
            if start_time is not None:
                self._values["start_time"] = start_time
            if time_zone is not None:
                self._values["time_zone"] = time_zone

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Policy name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def target(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: target: The number of target resources to reserve.
            '''
            result = self._values.get("target")
            assert result is not None, "Required property 'target' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endTime: Policy expiration time.
            '''
            result = self._values.get("end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def schedule_expression(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: scheduleExpression: Cron expression.
            '''
            result = self._values.get("schedule_expression")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: startTime: Policy start time.
            '''
            result = self._values.get("start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def time_zone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
            '''
            result = self._values.get("time_zone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ScheduledActionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-fc3.RosProvisionConfig.TargetTrackingPoliciesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "max_capacity": "maxCapacity",
            "metric_target": "metricTarget",
            "metric_type": "metricType",
            "min_capacity": "minCapacity",
            "name": "name",
            "end_time": "endTime",
            "start_time": "startTime",
            "time_zone": "timeZone",
        },
    )
    class TargetTrackingPoliciesProperty:
        def __init__(
            self,
            *,
            max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            metric_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            metric_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param max_capacity: 
            :param metric_target: 
            :param metric_type: 
            :param min_capacity: 
            :param name: 
            :param end_time: 
            :param start_time: 
            :param time_zone: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5faf75734739f455bcfc0fea4ce0a3e4a3f4627b06c6a4a6041169335d750785)
                check_type(argname="argument max_capacity", value=max_capacity, expected_type=type_hints["max_capacity"])
                check_type(argname="argument metric_target", value=metric_target, expected_type=type_hints["metric_target"])
                check_type(argname="argument metric_type", value=metric_type, expected_type=type_hints["metric_type"])
                check_type(argname="argument min_capacity", value=min_capacity, expected_type=type_hints["min_capacity"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
                check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
                check_type(argname="argument time_zone", value=time_zone, expected_type=type_hints["time_zone"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "max_capacity": max_capacity,
                "metric_target": metric_target,
                "metric_type": metric_type,
                "min_capacity": min_capacity,
                "name": name,
            }
            if end_time is not None:
                self._values["end_time"] = end_time
            if start_time is not None:
                self._values["start_time"] = start_time
            if time_zone is not None:
                self._values["time_zone"] = time_zone

        @builtins.property
        def max_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: maxCapacity: The maximum of the expansion.
            '''
            result = self._values.get("max_capacity")
            assert result is not None, "Required property 'max_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def metric_target(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: metricTarget: Tracking values for metrics.
            '''
            result = self._values.get("metric_target")
            assert result is not None, "Required property 'metric_target' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def metric_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            metricType: Tracking target type. Valid values:

            - ProvisionedConcurrencyUtilization: reserve a pattern instance concurrent degree of utilization.
            - CPUUtilization: CPU utilization.
            - GPUMemUtilization: GPU utilization.
            '''
            result = self._values.get("metric_type")
            assert result is not None, "Required property 'metric_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def min_capacity(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: minCapacity: The minimum of the shrinkage.
            '''
            result = self._values.get("min_capacity")
            assert result is not None, "Required property 'min_capacity' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Policy name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def end_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: endTime: Policy end time (UTC).
            '''
            result = self._values.get("end_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def start_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: startTime: Policy start time (UTC).
            '''
            result = self._values.get("start_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def time_zone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeZone: Time zones. startTime, endTime, and scheduleExpression times need to be in UTC when the timezone argument is empty.
            '''
            result = self._values.get("time_zone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TargetTrackingPoliciesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosProvisionConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "default_target": "defaultTarget",
        "function_name": "functionName",
        "always_allocate_cpu": "alwaysAllocateCpu",
        "always_allocate_gpu": "alwaysAllocateGpu",
        "qualifier": "qualifier",
        "scheduled_actions": "scheduledActions",
        "target_tracking_policies": "targetTrackingPolicies",
    },
)
class RosProvisionConfigProps:
    def __init__(
        self,
        *,
        default_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        always_allocate_cpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        always_allocate_gpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduled_actions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.ScheduledActionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        target_tracking_policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.TargetTrackingPoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosProvisionConfig``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig

        :param default_target: 
        :param function_name: 
        :param always_allocate_cpu: 
        :param always_allocate_gpu: 
        :param qualifier: 
        :param scheduled_actions: 
        :param target_tracking_policies: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97ac094a17a4f508fcd639be10b36af59c5fdcac28eaa3d26e7d0c0d1c981513)
            check_type(argname="argument default_target", value=default_target, expected_type=type_hints["default_target"])
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument always_allocate_cpu", value=always_allocate_cpu, expected_type=type_hints["always_allocate_cpu"])
            check_type(argname="argument always_allocate_gpu", value=always_allocate_gpu, expected_type=type_hints["always_allocate_gpu"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument scheduled_actions", value=scheduled_actions, expected_type=type_hints["scheduled_actions"])
            check_type(argname="argument target_tracking_policies", value=target_tracking_policies, expected_type=type_hints["target_tracking_policies"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "default_target": default_target,
            "function_name": function_name,
        }
        if always_allocate_cpu is not None:
            self._values["always_allocate_cpu"] = always_allocate_cpu
        if always_allocate_gpu is not None:
            self._values["always_allocate_gpu"] = always_allocate_gpu
        if qualifier is not None:
            self._values["qualifier"] = qualifier
        if scheduled_actions is not None:
            self._values["scheduled_actions"] = scheduled_actions
        if target_tracking_policies is not None:
            self._values["target_tracking_policies"] = target_tracking_policies

    @builtins.property
    def default_target(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: defaultTarget: The number of target resources to reserve.
        '''
        result = self._values.get("default_target")
        assert result is not None, "Required property 'default_target' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def always_allocate_cpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alwaysAllocateCpu: Whether CPU should always be allocated; defaults to true.
        '''
        result = self._values.get("always_allocate_cpu")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def always_allocate_gpu(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alwaysAllocateGpu: Whether GPU should always be allocated; defaults to true.
        '''
        result = self._values.get("always_allocate_gpu")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: Function alias or LATEST.
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduled_actions(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.ScheduledActionsProperty]]]]:
        '''
        :Property: scheduledActions: Timing policy configuration.
        '''
        result = self._values.get("scheduled_actions")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.ScheduledActionsProperty]]]], result)

    @builtins.property
    def target_tracking_policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.TargetTrackingPoliciesProperty]]]]:
        '''
        :Property: targetTrackingPolicies: Target tracking policy configuration.
        '''
        result = self._values.get("target_tracking_policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.TargetTrackingPoliciesProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProvisionConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrigger(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.RosTrigger",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::FC3::Trigger``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Trigger`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTriggerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a46e0f2ca8cdff7c1c1debb3f67f3abf3bf0d08e9b660f25471604ed6856e472)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b1643f701c7bf190a757a2bdea8007a7732722e63dc6044816410b0d7f8e2b80)
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
    @jsii.member(jsii_name="attrUrlInternet")
    def attr_url_internet(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrlInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlIntranet")
    def attr_url_intranet(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrlIntranet"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d657aab8c6ebcc443498ce221bb77bd028c7e4b88529b6a035f36288320c184c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="functionName")
    def function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: functionName: The name of the function.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "functionName"))

    @function_name.setter
    def function_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1d23fba408a9dabcacca675456312ebe6f26400dfede977a37c4cc7d2692537)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "functionName", value)

    @builtins.property
    @jsii.member(jsii_name="triggerConfig")
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Trigger config.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "triggerConfig"))

    @trigger_config.setter
    def trigger_config(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7862aa1c2226be70cf225a16c65f45ceab1f5f40bba178859a4c082ff498ab82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerConfig", value)

    @builtins.property
    @jsii.member(jsii_name="triggerName")
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: triggerName: Name of the trigger.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "triggerName"))

    @trigger_name.setter
    def trigger_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__338cc8e29cc80e8c70219a6fe0f7cceea95bafe4d655614fe3c5c45a0cd3b6a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerName", value)

    @builtins.property
    @jsii.member(jsii_name="triggerType")
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: triggerType: Type of the trigger.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "triggerType"))

    @trigger_type.setter
    def trigger_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1035d9400b4d9183c4a6d918b6778a37480aab2d2293a40e66922548265fde0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "triggerType", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the trigger.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2faba898e8006954729e6f2f9c7daebf9da69a287e8056e81188edf752daaeb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="invocationRole")
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: invocationRole: Invocation role.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "invocationRole"))

    @invocation_role.setter
    def invocation_role(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e601894885506fe13580c29598fe22042f1de515ae955177b72b6f5d10f64ed1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "invocationRole", value)

    @builtins.property
    @jsii.member(jsii_name="qualifier")
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: Qualifier of the trigger.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "qualifier"))

    @qualifier.setter
    def qualifier(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2344d80d3ff2497f976b53bbbc64f5ccd3b7520f4f042bcadee10a3e84bfb4f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qualifier", value)

    @builtins.property
    @jsii.member(jsii_name="sourceArn")
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceArn: Source ARN of the trigger.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceArn"))

    @source_arn.setter
    def source_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd58cf9e36b426c9735e6eaa3ff4998bea58a37ebd528ded0d53d6264e6b025b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceArn", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.RosTriggerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "trigger_config": "triggerConfig",
        "trigger_name": "triggerName",
        "trigger_type": "triggerType",
        "description": "description",
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
        trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrigger``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger

        :param function_name: 
        :param trigger_config: 
        :param trigger_name: 
        :param trigger_type: 
        :param description: 
        :param invocation_role: 
        :param qualifier: 
        :param source_arn: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__802a040978b933a09969687b5d24a6f52844613ca2c02bfb37a8ef9e7a3a5cc4)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument trigger_config", value=trigger_config, expected_type=type_hints["trigger_config"])
            check_type(argname="argument trigger_name", value=trigger_name, expected_type=type_hints["trigger_name"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument invocation_role", value=invocation_role, expected_type=type_hints["invocation_role"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument source_arn", value=source_arn, expected_type=type_hints["source_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "trigger_config": trigger_config,
            "trigger_name": trigger_name,
            "trigger_type": trigger_type,
        }
        if description is not None:
            self._values["description"] = description
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
        :Property: functionName: The name of the function.
        '''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: triggerConfig: Trigger config.
        '''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: triggerName: Name of the trigger.
        '''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: triggerType: Type of the trigger.
        '''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description of the trigger.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: invocationRole: Invocation role.
        '''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: qualifier: Qualifier of the trigger.
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceArn: Source ARN of the trigger.
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


@jsii.implements(ITrigger)
class Trigger(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.Trigger",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::Trigger``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrigger``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TriggerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4aa7ccc78bd3aa471c165fefec55c973ff6e8db1917f7b9d8a2886602dbeeee6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: Function name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerId")
    def attr_trigger_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerId: The trigger ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerId"))

    @builtins.property
    @jsii.member(jsii_name="attrTriggerName")
    def attr_trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TriggerName: Trigger name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTriggerName"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlInternet")
    def attr_url_internet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlInternet: The public domain address.

        You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrlInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlIntranet")
    def attr_url_intranet(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UrlIntranet: The private endpoint.

        In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUrlIntranet"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TriggerProps":
        return typing.cast("TriggerProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63a2cdc30e3bc653f043901e84d8068b64fc29fe55e966850f28d7c4b12d5925)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac7890a5ba27345c0d18c087a66ededae09ca95ba11f7237bd694bf77877fcd5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5caa6172449a27c6f7ad5ba2e0512106ef1951be3aabd93bbb1f6bacae91bb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fc3.TriggerProps",
    jsii_struct_bases=[],
    name_mapping={
        "function_name": "functionName",
        "trigger_config": "triggerConfig",
        "trigger_name": "triggerName",
        "trigger_type": "triggerType",
        "description": "description",
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
        trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Trigger``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger

        :param function_name: Property functionName: The name of the function.
        :param trigger_config: Property triggerConfig: Trigger config.
        :param trigger_name: Property triggerName: Name of the trigger.
        :param trigger_type: Property triggerType: Type of the trigger.
        :param description: Property description: Description of the trigger.
        :param invocation_role: Property invocationRole: Invocation role.
        :param qualifier: Property qualifier: Qualifier of the trigger.
        :param source_arn: Property sourceArn: Source ARN of the trigger.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19258a36410886d6b6e7899a1738591699c5e6655283b97c1175188f43cf87e4)
            check_type(argname="argument function_name", value=function_name, expected_type=type_hints["function_name"])
            check_type(argname="argument trigger_config", value=trigger_config, expected_type=type_hints["trigger_config"])
            check_type(argname="argument trigger_name", value=trigger_name, expected_type=type_hints["trigger_name"])
            check_type(argname="argument trigger_type", value=trigger_type, expected_type=type_hints["trigger_type"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument invocation_role", value=invocation_role, expected_type=type_hints["invocation_role"])
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
            check_type(argname="argument source_arn", value=source_arn, expected_type=type_hints["source_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "function_name": function_name,
            "trigger_config": trigger_config,
            "trigger_name": trigger_name,
            "trigger_type": trigger_type,
        }
        if description is not None:
            self._values["description"] = description
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
        '''Property functionName: The name of the function.'''
        result = self._values.get("function_name")
        assert result is not None, "Required property 'function_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_config(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property triggerConfig: Trigger config.'''
        result = self._values.get("trigger_config")
        assert result is not None, "Required property 'trigger_config' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def trigger_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property triggerName: Name of the trigger.'''
        result = self._values.get("trigger_name")
        assert result is not None, "Required property 'trigger_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def trigger_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property triggerType: Type of the trigger.'''
        result = self._values.get("trigger_type")
        assert result is not None, "Required property 'trigger_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description of the trigger.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def invocation_role(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property invocationRole: Invocation role.'''
        result = self._values.get("invocation_role")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def qualifier(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property qualifier: Qualifier of the trigger.'''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceArn: Source ARN of the trigger.'''
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


@jsii.implements(IAsyncInvokeConfig)
class AsyncInvokeConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.AsyncInvokeConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::AsyncInvokeConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAsyncInvokeConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AsyncInvokeConfigProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61df9562baca9ebf017c1e451aba8fb1b5bd6ae5b53aad0f0825c29f61fd9ba1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AsyncInvokeConfigProps:
        return typing.cast(AsyncInvokeConfigProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28375d7ded930c0a674e924f41b906822de5154aaf583502242fcd2597c9ce76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2cdfde1874eba9317883c11f2dae802a1d76dba9cc57ec75063b88b6094434a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a907f46bf04138aeecd89ed83988081ae5382a39e08ead1291b985296d78b07b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IConcurrencyConfig)
class ConcurrencyConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.ConcurrencyConfig",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::ConcurrencyConfig``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConcurrencyConfig``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-concurrencyconfig
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ConcurrencyConfigProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2054a2323160a74e275acc14d17dfdd96079997d69fabc03f431ab7e84dd5cd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ConcurrencyConfigProps:
        return typing.cast(ConcurrencyConfigProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e1ad73be90eef3a437f94c96236bd4d28972ca9f25d42eed44db4ab1b838dbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__292df0cf438c86ed6c2706ebb9b3cacd754bace94f84da46e109071c118688d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71ce039a61e6d8194b8195558558e1edfea56cf51def10103d83eb09a16d07e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(ICustomDomain)
class CustomDomain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.CustomDomain",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::CustomDomain``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCustomDomain``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[CustomDomainProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d494171ed1c74d16e06328835405fe92f0151e74850d692dbbd008a0a2ffa2f2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DomainName: The domain name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> CustomDomainProps:
        return typing.cast(CustomDomainProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc9d3b8bdfdedc2bebd780ba5a4a56f0c811b7ece52a2df023d5b3fba9bd8417)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__380ef2ba024b0ec513189671a3a224c409c36f961aa48d1bb6069d22d75ebb91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1988929eec3a5fcb35b219754320cf1259e7276e916912ad02d08cef004ebf47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IFunction)
class Function(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.Function",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::Function``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFunction``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[FunctionProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e494bdbe685e2a022442d715b4b6c023f785d66de7b72448dbf62407286a251e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionId")
    def attr_function_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionId: The function ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionId"))

    @builtins.property
    @jsii.member(jsii_name="attrFunctionName")
    def attr_function_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FunctionName: The function name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFunctionName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionProps:
        return typing.cast(FunctionProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed9214ee720f98d6a21b9ba3db0a24759a47371f392a319e29efc37d83a8ec91)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e0c131bb8062e7e471f3ec0e03d558449f1b83a7c5f2a3b871b807d5d7791d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99ff1a1b9a57d341affe00af5319878f70d400f69e177cc2540d47b744644ff2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IFunctionInvoker)
class FunctionInvoker(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fc3.FunctionInvoker",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::FC3::FunctionInvoker``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFunctionInvoker``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functioninvoker
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[FunctionInvokerProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__638f30647bf3743f5b520f3d6a02ed62270617f97cc2f20c76cf6c523bcec04b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEvents")
    def attr_events(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Events: Events for async invocation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEvents"))

    @builtins.property
    @jsii.member(jsii_name="attrResult")
    def attr_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Result: Depends on result type: NoResult: Async invoke has no result.

        Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
        Failure: Error Message.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResult"))

    @builtins.property
    @jsii.member(jsii_name="attrResultType")
    def attr_result_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResultType: Result type: NoResult: Async invoke has no result.

        Success: Sync invoke succeeds.
        Failure: Sync invoke fails.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResultType"))

    @builtins.property
    @jsii.member(jsii_name="attrTaskId")
    def attr_task_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TaskId: Task id for async invocation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTaskId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FunctionInvokerProps:
        return typing.cast(FunctionInvokerProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7ed9a3e9ec4eb45507e4543d47e6ab730cb0647aff96d8159c7beb4860d6620)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16755bc96b74cb8bc0ec93e3acf618beceda41be99adc05f385614d8d385b7d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b85824b6bc895e40163783b4770d9609f3bc9d8051cf171257d794d06fc019cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AsyncInvokeConfig",
    "AsyncInvokeConfigProps",
    "ConcurrencyConfig",
    "ConcurrencyConfigProps",
    "CustomDomain",
    "CustomDomainProps",
    "Function",
    "FunctionInvoker",
    "FunctionInvokerProps",
    "FunctionProps",
    "IAsyncInvokeConfig",
    "IConcurrencyConfig",
    "ICustomDomain",
    "IFunction",
    "IFunctionInvoker",
    "IProvisionConfig",
    "ITrigger",
    "ProvisionConfig",
    "ProvisionConfigProps",
    "RosAsyncInvokeConfig",
    "RosAsyncInvokeConfigProps",
    "RosConcurrencyConfig",
    "RosConcurrencyConfigProps",
    "RosCustomDomain",
    "RosCustomDomainProps",
    "RosFunction",
    "RosFunctionInvoker",
    "RosFunctionInvokerProps",
    "RosFunctionProps",
    "RosProvisionConfig",
    "RosProvisionConfigProps",
    "RosTrigger",
    "RosTriggerProps",
    "Trigger",
    "TriggerProps",
]

publication.publish()

def _typecheckingstub__611405d7630de1185832dde34f4fa450b42b1560a8e2c9652798aa150095cd52(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_task: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAsyncInvokeConfig.DestinationConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f828ef99c16de8d9273711d025088c5c5bd3eab8286559b031dfe0dc0bd08a28(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    reserved_concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcca3638983dac414fb0280d9520d8f013d4b8ae4ca23dc4fb0f4a16c590bb70(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.AuthConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.TlsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    waf_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.WafConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6229de627f2e9607f23d71e8d11c45452656b7b7a477f6c1676bb226132315d0(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_async_invocation: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunctionInvoker.CheckAsyncInvocationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3816c8101e1f9be487624f2fc12a10c98bf276b66f691201f771522858fceea9(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomDnsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_runtime_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomRuntimeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_ondemand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_isolation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_affinity_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosFunction.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4a49919909ab62107e710478a2c3450a5662beefd6690695cec6df447fecf36(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProvisionConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b1a7d7c39be1456de532a4403386d84164ec87286e894110f027015dc90449a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86b69bbf4d904bf878b613e45995874d173d4958dd41ccd690ff3b6c69e05246(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__044172337830799e93255c0249229a1122caf40690a4da01a6b619be95167f82(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e107f44293eb3cc37db6fe040149117081467a89ca987568d9c6d3689a1f2ff9(
    *,
    default_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    always_allocate_cpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    always_allocate_gpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduled_actions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.ScheduledActionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    target_tracking_policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.TargetTrackingPoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51a172ddd410f025059968007ba44603072a60d28262a015bba5fb47ca6badde(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAsyncInvokeConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c46854fe448b3d81adb5ec6de30b1518973bd7f240b7035baaaa857eb60c8f43(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f99d52518b5443e49f3975a74b49c87fb09d194f33b6ddff6057fde1e5bb812(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b5daaf6c21a2c501739508d6ff2995efc03a143406bdf9c49466320ccc0d2ab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8100fc219cccc44e2b3eb4f890346a139d672f10b5a804152680b5d7d7d49b3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afcb84dbae68ee558a2420d889d03d1373b521653077ad068031d607b2089d48(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAsyncInvokeConfig.DestinationConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d0a022a5f50409c00ef77c31598130f65f2a066d41383cb48c65aa0e4d17c92(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cd961efde70ce570796ab30413f98f5fcdd151a71a86d306f9a1faef1d9f19c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0017414c979fe90cfff2862d9eb0899b1ad394e163c9a6be5498f49592315fd(
    *,
    on_failure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAsyncInvokeConfig.OnFailureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    on_success: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAsyncInvokeConfig.OnSuccessProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__433472a21c8541d76e7fccba0162d47e3872ad600b01116f38633e40f86638bb(
    *,
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb153b7076b7e607397b85f0782a3749e1cc38a2d59f18410270f15279256413(
    *,
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2aa38bff1428bd3bdc953457203969045b245a896692b6f878f33558cf1e93e(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_task: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAsyncInvokeConfig.DestinationConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    max_async_event_age_in_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_async_retry_attempts: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c5179ae100dfc36b7a7e2b66952c39ae135d9d6fd6f4ae1eec91d673210277c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConcurrencyConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e59a997349bbbfd953486cdba4a9d175ac876986e458efd2107900b75f4baa2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c772ba90c4793434faf42f721ef6a7ee80926d1171fab2b5e0191559a37f1e32(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__723bf3d99b0df16ed17d79899d039ad34eccd98f6b6f2318849241b14e765aed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90c2a0fe301eaa520986b2fb7592f15e6709354c4b342b4ef7679fdead38a0c3(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d1cf0c9ce86ade6ab7d601e0614a61d73b51c14bfc49ad59cf8c36f3d0710fd(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    reserved_concurrency: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef02d10401c7c98543cdba5ae35ea3eb3a40fd5a4c1bfd9f6b47834fc71d9898(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCustomDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52910bc91667d299b9136fda22d2b538444b26775b2dbc549c5805458c78b009(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2b2df0a7f01cfa75386dbd5bc94a20818399dd0dac126ab3bb3a2055b299f19(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.AuthConfigProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76697e5a79e0336eb5a57cf8d8d702cb23cf2d6244fee67f9737a48abd49cbc3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44426283d9e709bf23efea225a7b56b5376dc36295465a1444721945f496aaae(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd341e8badcf1663c9ffe46dff9d502abea134595b069c4a5a3fe858b8987532(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4b69f0423691318cbc9b80ee0e5ffb1f8369d096cff4d0d6f73bedb370814ce(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.CertConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f29f0ba1dc7f84f21b9b750697aeb0705df65402938902742f77d7ed5ffafb29(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.RouteConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7105d0b0861fefcdefe74c35af4d93a789be0b77afdbced16227de6599d840b3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.TlsConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6a3ec0d860084dc389e99624ba9bdf7dd3ea614ca101868ac22c8f51afcc99f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosCustomDomain.WafConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d32a54132bc95c59cc294aabc3adf8980bdf8c5b5c21475b919228cd41b67a7(
    *,
    auth_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auth_info: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7198cc8450217fe06633d752f1165da07ac487e2118e3b641a85a60b5f8be735(
    *,
    certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    private_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83476e80adb0d0ccb6b03e898176f9004c4b809b33f434390dfd2175d89dd0dd(
    *,
    match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cf4a8c85422664995da35e6367f160a3907604b5fc2e12cdff0fd4c28225741(
    *,
    match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2f21264aed87be18e7530c2824334b4afdb545f6f1d1a974e42612cca1d0b34(
    *,
    equal_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.EqualRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    regex_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RegexRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    wildcard_rules: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.WildcardRulesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0708d5bf7cd5b8a2fcc63b0b47000bb65659575f3b8f131de865cfbf9c95899b(
    *,
    routes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RoutesProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e235c3892ccb2a5d23d98dee463310e677b035b3188b6b2b89eea33b80c4e16(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    path: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qualifier: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    methods: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    rewrite_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RewriteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bb8629d9631da97e9a2e9176addc8fd182679e6220c32eaeb90d9b3c3b2d4a9(
    *,
    cipher_suites: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    min_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b83c06e8e467b93d9156c9b2c1931c84f04bece6ea0e0593715228c27902ea2(
    *,
    enable_waf: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd55523fd72fb21521cc0f028e6591944af856ca8715b32e7dc15c82edd62ba3(
    *,
    match: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    replacement: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__205230a4923db1e5eb8162cbe3eda7b9d628dda010fe96c1bb21209d116b28bb(
    *,
    auth_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.AuthConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cert_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    route_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.RouteConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tls_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.TlsConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    waf_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosCustomDomain.WafConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25ff8ca9bb13da2390eb1a711b5542609b91dbb093797ce8ef5bfb48c77a84e9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFunctionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7282cf107bfba61e684933cd20d061f20568b03306d0812b483918b522b68d6d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23daab1d20c01e628a365cc08658b789eef5efae17f4b802cdb92a6dd3d4fce5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f40ff0937e73e98b32453c5ec3458c1948c5ca69acfd41cef5209d7a715c097(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a73f61b4f6fe63306b1c9bda5741563d2d2b88dd2e30ec5443068e700a89b19(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a0b3d5448df4fa8b7e2dc09b9990063697028cec6b99687d7425119b7e8ad20(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ca21a5df3ed5d476e25ca63fc395e56a2ae0771756f2f8a7994dd6c1fbeecb9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CodeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__250fac48276f4f240977aec6afbfee9c3d564e64de34a66385e7690c03749ebb(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe534237fe2fa2e80ed16d331074e851722584952fc1364298bebd310940413d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomContainerConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9de5296796ce5390896d09fdfe0673d25103c12a43840523d6c323bee81d526e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomDnsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93ea5b4f832fb9b69321977e56ac7761ffbd5f88a55453e44896780a4ca8148e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.CustomRuntimeConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bab45e3fd48d51762e979f23b1110eda0c78db5b71edb9cf2b172c2d0f17253f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8795387fd37f6fcb023ebac7a26795bc60f1e34932fe692caee6569024490543(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d82c138826f43d9d14b7134530716c1ef0ff95989cdcb13f2cd7da20cdd027a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f98b2cafe8b91194ec2f6cea1597b3b662d961b04ba560c6b9dbe83dbb31628b(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49bd1e08ba0c0646b05831f17cefdc05b98cabafca0b4f92b9255f5014b0bb1e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.GpuConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d51cb97a1a134c32b5c8f6650344518aa10ff4c3755197ddf2afe49e6fe0c8c4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f22cd005a2eb63b487c3fbf76db68cb7a35110c94689d9cb0948a3b70655322(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c118ae12b3c9065d7bef50e653baebe61b7e3ffe885578232717bd4b71caeceb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.InstanceLifecycleConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e962854c0ecee9d4b6601586b6ac6185af0fe8edd4a60da0336a109d2f53971c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd09c76fde184cbb5efdc4db4a837ead554ea53fb4f96ce34a7d5ed5a7062c53(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d7db13744e2a7348be0b5be142898e353f86e0492016d911833be8d5e7796fe(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.LogConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__831f91fe23801c150ace769191d9f561d15ebfdaad8f162c68c4a49706748c01(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a034424b3fc84257ddb34ae906319a15bb2b3f000068dd06f620d68dfb0b360(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.NasConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__091a61aade226fcb6ec39544281c987f4777c698ebb8cf6c7adfa22622f30896(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.OssMountConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1245759606cffd05509ea4adbd54435b65b569ddf4a1f34897466037a4228383(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7eb614634ea2c54a49ff410e3147d3b49f59983c93e3c5f3cb40706d9fb32ae(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4704324876b6fe544be3dd1c6edd7a492d34e84ea793a1e7f00c9ab064aa014c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2af5fa68c0f85b67bce4adbd8338dc2f80e253cea938fa872f6bd5d997aff28(
    value: typing.Optional[typing.List[RosFunction.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9461ad59cdefb0cb7f8bbfc413d08aa59a96f0c3554d75b0e8d526e9ebbf429f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6f13e5c000c133fa35cbbfb69bd78b8300b5068732335fee04cdd30daec7fdd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.TracingConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c8da177cf185920a238337085c742bb6ed1726a1d9748c184834fbdc0c15e19(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunction.VpcConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e900fe4ad6cc34bd53b7b7cfd387f92ba609ea9badeac76be3c6eea770c6108(
    *,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__194c2e5b6cd2dc744c52f77766d421dee99a238b1bca433eb845eb16f7f40aaf(
    *,
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__feb92e3e48729d5de0f5ace384309a3f208e830399653d5e7e07706ca961d648(
    *,
    insecure: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    root_ca_cert_base64: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53e905e0004011ebf968ab2afaab16bdc48c27a876cca0b508f9bf593fc581e1(
    *,
    checksum: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_object_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zip_file: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45f634030396484b51df188b5653198d0e60d30cd82244de2143fe369ed73f4a(
    *,
    acceleration_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.AccelerationInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    acceleration_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acr_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    entrypoint: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.HealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    image: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    registry_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.RegistryConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resolved_image_uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26cef31d30e2d1b7a2f366577267e03efa39238c4935a56bc6b4b0129b06815b(
    *,
    dns_options: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.DnsOptionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    name_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    searches: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0426ee9c11ad00300eb0d9b1399b81566d41470dd546b98a323f74d16193897b(
    *,
    failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6af18cd07c316aedb23b9b533cfb564a855adf544f79ae0c074f2ba962dcb7eb(
    *,
    args: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    command: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    health_check_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomRuntimeConfigHealthCheckConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc3413e7132b65545620ccf9d9a19318d1cfa8670ca08e9c85afcc7344af01bd(
    *,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6911a7b9b84811c37f010da3572de0e4cb5cd67f78957ab37ca21dda3cc3c2a0(
    *,
    gpu_memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    gpu_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cf834d0e1120c5af01a03e188f8f9769ec01718bb10c6d054ae3452f1677a71(
    *,
    failure_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_get_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    initial_delay_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    success_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout_seconds: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfd365ed18d32b591480781a62390be51b3acd6706564c4e148e482038c93620(
    *,
    handler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb2425600f2378bba4647fa7009575f7436f7ac3ccf5c88d44a4aa79168c897(
    *,
    initializer: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InitializerProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    pre_stop: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.PreStopProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c70611aa68a9507d97c96031de7f55171ba6b1cb9ac9b2ccf901bd8f7b102175(
    *,
    enable_instance_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_request_metrics: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_begin_rule: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    logstore: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    project: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d3c5a152ee5027ae03335bc45d7bf4f70ae5da851973da2ac990268daa7896b(
    *,
    enable_tls: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_addr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4d06a96878d5f7a3762470b4f50b93228ab765883133a0b2758f4ab5ee5f99d(
    *,
    group_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.MountPointsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    user_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3788c5dc7178089de5c9adc6a22bde3e3db7bfba9f73b0aa81c50c0fbf2171e6(
    *,
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99f70dd50f5d39d4091aea8527f9085537bc22840aaf212b70771df6499c1f9d(
    *,
    bucket_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bucket_path: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mount_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    read_only: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d4240a489145b54ff34eac8ee7f3b8605866bfbd15033d65dd8f041f020e2d(
    *,
    mount_points: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigMountPointsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99f926c002263f0c52c0c368ee599961df2736d9368698dc11538358c722d735(
    *,
    handler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df846861abac315d155ad746532c7df082bf1f9f54bbb32938d67f11dfb8f4de(
    *,
    cert_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CertConfigProperty, typing.Dict[builtins.str, typing.Any]]],
    auth_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.AuthConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    network_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NetworkConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c8e87e841e300586881f3c11dd751e1bee084ec069e748002fd84dd8ae8b3a6(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d99946d38db0471d13b26f4c25c3c15bfa133853e5a28d250a474a999170dba(
    *,
    params: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8a32da1dae8108d023af926d66389cc9bd54407875e2aff7ad7ccd8e0a9d6c8(
    *,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de5569233a264aae8df7316f9ff8dfe97d5bf679988ea512ff19ef745e9ed5e7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFunctionInvokerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d10082ee917f14f37f58662ea22038acffb8c1f2c968b90a47d6d6b551b282b3(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12cd90e33e24cc470b6e18bef60dc086c0c7e0a4a9d34d170004f21e7077877c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77478432e0488cff2f26c0f526feb9e975718c90be88e9cefc08d1108d2c0d54(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ae2a828c8b9e1fb27cd5188e962b4f2126b1c86b83082e49d26acbc4feba2ce(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f114308e9a6317e78c6fcbd60378d5e8cabf2ec13fc37b1554e06822745661ed(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosFunctionInvoker.CheckAsyncInvocationProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8727204a31a6bdd3f7587c470d50e25569cc3ae919005cc3828c041abc6a0b55(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a9b6221557b0fc9851dd4c46ebce89faf0980eaf4b7aadf3d9efbc56b9146ce(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e18c62db89ac0d4b57c2d68b1358f839175d764f0e3847f02b5363b19a2da3b4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2e2f2ede4829c32aef3033375dcb54c172fe2adca0a6c79bf139199f33ba86b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58a8edcb42cfa20db7be879a097c7c0cf890bed4f468ca04e27a08990041f0a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c687d1a064356423de9359ed503cdf5eb12ddd4253bf7519f68d4ca141776d3(
    *,
    check_interval: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    check_times: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    enabled: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a1e79a2258b3cc7ab34e4c76a4ee7aaf45e2d61337ccd3cd33fe3434c6969cb0(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    async_: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_async_invocation: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunctionInvoker.CheckAsyncInvocationProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    check_error: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    event: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    execute_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7e76e0e05566c11022d1be6cc1b711d169b1f42b40f4611bb494f19eac7aa6f(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    handler: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    runtime: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    code: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CodeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    cpu: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    custom_container_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomContainerConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_dns: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomDnsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    custom_runtime_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.CustomRuntimeConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disable_ondemand: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_isolation_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_affinity: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    session_affinity_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosFunction.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__262f46a576ffdd33571045fa24670bb20213ce5861b6c189f3a77c0b07287f97(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProvisionConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e18bac0f4bf22498379f7eb7f7cea5f3e48680ede32e23244597192cf02c5c87(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4127856263ab2fbd59055f2c7e38e6201da5be5ee21f4db9ad9062b21e29341d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20289b8fd02a0b17c551bdab01f3fc103748b46cc8b365842d7b21fdca907df0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__465935a8bbd137e040cf4fba718332322f387ce6daa0ca7488a5da4f08f79309(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6140e22fd3a6ebc265ad36d5051acf372ccea4414885da11e1821a1023a60da(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55579aaa2ff90965d1275a905a87ee20035d2d9b4751efef4b61a72bba3f75e3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b251a252cdea429736384c7d0f1a91ce0012dae2cc84cf8a14e49b874413612b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94a5c0c08edd60d366044e9599eacc31d81916263f817c8bacfcdcb34cbb8732(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.ScheduledActionsProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__354af516ec65b9bfbb84d1817bf5dc7decd39a8740c5d9d88ff77e3562968dfa(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProvisionConfig.TargetTrackingPoliciesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f747530699cf7d2f70c46856557a44be9252ede1781615b9d7923aceaa41369a(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schedule_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5faf75734739f455bcfc0fea4ce0a3e4a3f4627b06c6a4a6041169335d750785(
    *,
    max_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    metric_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    metric_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    min_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    time_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97ac094a17a4f508fcd639be10b36af59c5fdcac28eaa3d26e7d0c0d1c981513(
    *,
    default_target: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    always_allocate_cpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    always_allocate_gpu: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduled_actions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.ScheduledActionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    target_tracking_policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProvisionConfig.TargetTrackingPoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a46e0f2ca8cdff7c1c1debb3f67f3abf3bf0d08e9b660f25471604ed6856e472(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTriggerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1643f701c7bf190a757a2bdea8007a7732722e63dc6044816410b0d7f8e2b80(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d657aab8c6ebcc443498ce221bb77bd028c7e4b88529b6a035f36288320c184c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1d23fba408a9dabcacca675456312ebe6f26400dfede977a37c4cc7d2692537(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7862aa1c2226be70cf225a16c65f45ceab1f5f40bba178859a4c082ff498ab82(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__338cc8e29cc80e8c70219a6fe0f7cceea95bafe4d655614fe3c5c45a0cd3b6a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1035d9400b4d9183c4a6d918b6778a37480aab2d2293a40e66922548265fde0d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2faba898e8006954729e6f2f9c7daebf9da69a287e8056e81188edf752daaeb8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e601894885506fe13580c29598fe22042f1de515ae955177b72b6f5d10f64ed1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2344d80d3ff2497f976b53bbbc64f5ccd3b7520f4f042bcadee10a3e84bfb4f8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd58cf9e36b426c9735e6eaa3ff4998bea58a37ebd528ded0d53d6264e6b025b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__802a040978b933a09969687b5d24a6f52844613ca2c02bfb37a8ef9e7a3a5cc4(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4aa7ccc78bd3aa471c165fefec55c973ff6e8db1917f7b9d8a2886602dbeeee6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TriggerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63a2cdc30e3bc653f043901e84d8068b64fc29fe55e966850f28d7c4b12d5925(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac7890a5ba27345c0d18c087a66ededae09ca95ba11f7237bd694bf77877fcd5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5caa6172449a27c6f7ad5ba2e0512106ef1951be3aabd93bbb1f6bacae91bb9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19258a36410886d6b6e7899a1738591699c5e6655283b97c1175188f43cf87e4(
    *,
    function_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_config: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    trigger_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    trigger_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    invocation_role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    qualifier: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61df9562baca9ebf017c1e451aba8fb1b5bd6ae5b53aad0f0825c29f61fd9ba1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AsyncInvokeConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28375d7ded930c0a674e924f41b906822de5154aaf583502242fcd2597c9ce76(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2cdfde1874eba9317883c11f2dae802a1d76dba9cc57ec75063b88b6094434a(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a907f46bf04138aeecd89ed83988081ae5382a39e08ead1291b985296d78b07b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2054a2323160a74e275acc14d17dfdd96079997d69fabc03f431ab7e84dd5cd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConcurrencyConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e1ad73be90eef3a437f94c96236bd4d28972ca9f25d42eed44db4ab1b838dbe(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__292df0cf438c86ed6c2706ebb9b3cacd754bace94f84da46e109071c118688d4(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71ce039a61e6d8194b8195558558e1edfea56cf51def10103d83eb09a16d07e0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d494171ed1c74d16e06328835405fe92f0151e74850d692dbbd008a0a2ffa2f2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CustomDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc9d3b8bdfdedc2bebd780ba5a4a56f0c811b7ece52a2df023d5b3fba9bd8417(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__380ef2ba024b0ec513189671a3a224c409c36f961aa48d1bb6069d22d75ebb91(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1988929eec3a5fcb35b219754320cf1259e7276e916912ad02d08cef004ebf47(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e494bdbe685e2a022442d715b4b6c023f785d66de7b72448dbf62407286a251e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FunctionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed9214ee720f98d6a21b9ba3db0a24759a47371f392a319e29efc37d83a8ec91(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e0c131bb8062e7e471f3ec0e03d558449f1b83a7c5f2a3b871b807d5d7791d3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99ff1a1b9a57d341affe00af5319878f70d400f69e177cc2540d47b744644ff2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__638f30647bf3743f5b520f3d6a02ed62270617f97cc2f20c76cf6c523bcec04b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FunctionInvokerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7ed9a3e9ec4eb45507e4543d47e6ab730cb0647aff96d8159c7beb4860d6620(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16755bc96b74cb8bc0ec93e3acf618beceda41be99adc05f385614d8d385b7d9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b85824b6bc895e40163783b4770d9609f3bc9d8051cf171257d794d06fc019cb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
