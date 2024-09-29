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
        props: typing.Union["FunctionProps", typing.Dict[builtins.str, typing.Any]],
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
    @jsii.member(jsii_name="props")
    def _props(self) -> "FunctionProps":
        return typing.cast("FunctionProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FunctionProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__760d6c946669527c0cc501d1fe1b5a6ecb47cab05efe34d76e426b945b0bb752)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        "disk_size": "diskSize",
        "environment_variables": "environmentVariables",
        "gpu_config": "gpuConfig",
        "instance_concurrency": "instanceConcurrency",
        "instance_lifecycle_config": "instanceLifecycleConfig",
        "internet_access": "internetAccess",
        "layers": "layers",
        "log_config": "logConfig",
        "memory_size": "memorySize",
        "nas_config": "nasConfig",
        "oss_mount_config": "ossMountConfig",
        "role": "role",
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
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.GpuConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.InstanceLifecycleConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.LogConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.NasConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosFunction.OssMountConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param disk_size: Property diskSize: The disk size of the function, in MB.
        :param environment_variables: Property environmentVariables: The environment variables of the function.
        :param gpu_config: Property gpuConfig: The GPU configuration of the function.
        :param instance_concurrency: Property instanceConcurrency: The maximum number of concurrent instances of the function.
        :param instance_lifecycle_config: Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
        :param internet_access: Property internetAccess: Whether the function can access the Internet.
        :param layers: Property layers: The layers of the function.
        :param log_config: Property logConfig: The log configuration of the function.
        :param memory_size: Property memorySize: The memory size of the function, in MB.
        :param nas_config: Property nasConfig: The NAS configuration of the function.
        :param oss_mount_config: Property ossMountConfig: The OSS mount configuration of the function.
        :param role: Property role: The user is authorized to the RAM role of Function Compute. After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
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
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument gpu_config", value=gpu_config, expected_type=type_hints["gpu_config"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_lifecycle_config", value=instance_lifecycle_config, expected_type=type_hints["instance_lifecycle_config"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument layers", value=layers, expected_type=type_hints["layers"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument oss_mount_config", value=oss_mount_config, expected_type=type_hints["oss_mount_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
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
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if gpu_config is not None:
            self._values["gpu_config"] = gpu_config
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
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
        "disk_size": "diskSize",
        "environment_variables": "environmentVariables",
        "gpu_config": "gpuConfig",
        "instance_concurrency": "instanceConcurrency",
        "instance_lifecycle_config": "instanceLifecycleConfig",
        "internet_access": "internetAccess",
        "layers": "layers",
        "log_config": "logConfig",
        "memory_size": "memorySize",
        "nas_config": "nasConfig",
        "oss_mount_config": "ossMountConfig",
        "role": "role",
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
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        :param disk_size: 
        :param environment_variables: 
        :param gpu_config: 
        :param instance_concurrency: 
        :param instance_lifecycle_config: 
        :param internet_access: 
        :param layers: 
        :param log_config: 
        :param memory_size: 
        :param nas_config: 
        :param oss_mount_config: 
        :param role: 
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
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument environment_variables", value=environment_variables, expected_type=type_hints["environment_variables"])
            check_type(argname="argument gpu_config", value=gpu_config, expected_type=type_hints["gpu_config"])
            check_type(argname="argument instance_concurrency", value=instance_concurrency, expected_type=type_hints["instance_concurrency"])
            check_type(argname="argument instance_lifecycle_config", value=instance_lifecycle_config, expected_type=type_hints["instance_lifecycle_config"])
            check_type(argname="argument internet_access", value=internet_access, expected_type=type_hints["internet_access"])
            check_type(argname="argument layers", value=layers, expected_type=type_hints["layers"])
            check_type(argname="argument log_config", value=log_config, expected_type=type_hints["log_config"])
            check_type(argname="argument memory_size", value=memory_size, expected_type=type_hints["memory_size"])
            check_type(argname="argument nas_config", value=nas_config, expected_type=type_hints["nas_config"])
            check_type(argname="argument oss_mount_config", value=oss_mount_config, expected_type=type_hints["oss_mount_config"])
            check_type(argname="argument role", value=role, expected_type=type_hints["role"])
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
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if environment_variables is not None:
            self._values["environment_variables"] = environment_variables
        if gpu_config is not None:
            self._values["gpu_config"] = gpu_config
        if instance_concurrency is not None:
            self._values["instance_concurrency"] = instance_concurrency
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
    def attr_function_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FunctionName: Function name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFunctionName"))

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

    @builtins.property
    @jsii.member(jsii_name="attrUrlInternet")
    def attr_url_internet(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UrlInternet: The public domain address.

        You can access HTTP triggers over the Internet by using HTTP or HTTPS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrlInternet"))

    @builtins.property
    @jsii.member(jsii_name="attrUrlIntranet")
    def attr_url_intranet(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UrlIntranet: The private endpoint.

        In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUrlIntranet"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "TriggerProps":
        return typing.cast("TriggerProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TriggerProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__279a4162c6d54773bf2412ead7de0b96b87d0cec99f2bf95a65f3f2c0d2c524e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


__all__ = [
    "Function",
    "FunctionProps",
    "RosFunction",
    "RosFunctionProps",
    "RosTrigger",
    "RosTriggerProps",
    "Trigger",
    "TriggerProps",
]

publication.publish()

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

def _typecheckingstub__760d6c946669527c0cc501d1fe1b5a6ecb47cab05efe34d76e426b945b0bb752(
    value: FunctionProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99ff1a1b9a57d341affe00af5319878f70d400f69e177cc2540d47b744644ff2(
    value: _ros_cdk_core_7adfd82f.Construct,
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
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    environment_variables: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    gpu_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.GpuConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_concurrency: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_lifecycle_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.InstanceLifecycleConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    layers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    log_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.LogConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    memory_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nas_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.NasConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    oss_mount_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.OssMountConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.TracingConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosFunction.VpcConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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

def _typecheckingstub__279a4162c6d54773bf2412ead7de0b96b87d0cec99f2bf95a65f3f2c0d2c524e(
    value: TriggerProps,
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
