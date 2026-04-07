'''
## Aliyun ROS SWAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SWAS from '@alicloud/ros-cdk-swas';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-swas.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddress: The inner IP address of simple application server.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the simple application server.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddress: The public IP address of simple application server.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-swas.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddress: The inner IP address of simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddress: The public IP address of simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-swas.IInstances")
class IInstances(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instances``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddresses")
    def attr_inner_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddresses: The inner IP addresses of simple application servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The IDs of the simple application servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddresses")
    def attr_public_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddresses: The public IP addresses of simple application servers.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        ...


class _IInstancesProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instances``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-swas.IInstances"

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddresses")
    def attr_inner_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddresses: The inner IP addresses of simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInnerIpAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The IDs of the simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddresses")
    def attr_public_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddresses: The public IP addresses of simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstances).__jsii_proxy_class__ = lambda : _IInstancesProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-swas.IRunCommand")
class IRunCommand(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``RunCommand``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInvokeId")
    def attr_invoke_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeId: The ID of the command execution.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInvokeResult")
    def attr_invoke_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeResult: The result of the command execution.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunCommandProps":
        ...


class _IRunCommandProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``RunCommand``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-swas.IRunCommand"

    @builtins.property
    @jsii.member(jsii_name="attrInvokeId")
    def attr_invoke_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeId: The ID of the command execution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInvokeId"))

    @builtins.property
    @jsii.member(jsii_name="attrInvokeResult")
    def attr_invoke_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeResult: The result of the command execution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInvokeResult"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunCommandProps":
        return typing.cast("RunCommandProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRunCommand).__jsii_proxy_class__ = lambda : _IRunCommandProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SWAS::Instance``, which is used to create a subscription simple application server.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5166ca02dbc9cdb172a578f246a219f0a7dff1a3072a6db35d98d2ffcffb6a5b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddress: The inner IP address of simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddress: The public IP address of simple application server.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e31f5d193c90e01480016b4a08e1eeba9f778b9581dc0bcc01652546ee348e56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85340e7ccf220aaf814cac1b96298bdbf956b9222efc73519f0559fa2d6cbaeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38988241066df72a0548936747501021e084203a163178e35064b379993c451c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-swas.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "period": "period",
        "plan_id": "planId",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "data_disk_size": "dataDiskSize",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance

        :param image_id: Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        :param period: Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        :param plan_id: Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true false Default value: false.
        :param auto_renew_period: Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        :param data_disk_size: Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20. A value of 0 indicates that no data disk is attached. If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size. Default value: 0.
        :param tags: Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3f1ae8c6d4d38b14bb1f5864b8ff8534d2b2e7075dee3a4e7cb4b2b32e6c51e)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument plan_id", value=plan_id, expected_type=type_hints["plan_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
            "period": period,
            "plan_id": plan_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if data_disk_size is not None:
            self._values["data_disk_size"] = data_disk_size
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: The image ID.

        You can call the ListImages operation to query the available images in the specified region.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription period of the servers.

        Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planId: The plan ID.

        You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        result = self._values.get("plan_id")
        assert result is not None, "Required property 'plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: The auto-renewal period.

        This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataDiskSize: The size of the data disk that is attached to the server.

        Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        result = self._values.get("data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to swas.

        Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IInstances)
class Instances(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.Instances",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SWAS::Instances``, which is used to create subscription simple application servers.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstances``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2404902b10d2316d4a2936174a94c44e1b80cb65bf61bfc8c5a3c2c15d5234b0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddresses")
    def attr_inner_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InnerIpAddresses: The inner IP addresses of simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInnerIpAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceIds: The IDs of the simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddresses")
    def attr_public_ip_addresses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PublicIpAddresses: The public IP addresses of simple application servers.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPublicIpAddresses"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstancesProps":
        return typing.cast("InstancesProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f2833d90c33ab0ae7a84a0778506a10808d94f520ec0f1561e56e24ed7d04ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec73a80d54f8dc08c7bbb71df536c12eb5229e0350eeb2ace56d02608a65105b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__638ade72859b7e06721a8cc39f0cc731aa328860dacf0ef2c48be6b2e770f6f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-swas.InstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "period": "period",
        "plan_id": "planId",
        "amount": "amount",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "data_disk_size": "dataDiskSize",
        "tags": "tags",
    },
)
class InstancesProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstances.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Instances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances

        :param image_id: Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        :param period: Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        :param plan_id: Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        :param amount: Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20. Default value: 1.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true false Default value: false.
        :param auto_renew_period: Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        :param data_disk_size: Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20. A value of 0 indicates that no data disk is attached. If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size. Default value: 0.
        :param tags: Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cccddedcf24c55532bdc561b05502727647fef0f10dac1a388eb8455cf042d39)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument plan_id", value=plan_id, expected_type=type_hints["plan_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
            "period": period,
            "plan_id": plan_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if data_disk_size is not None:
            self._values["data_disk_size"] = data_disk_size
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: The image ID.

        You can call the ListImages operation to query the available images in the specified region.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The subscription period of the servers.

        Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property planId: The plan ID.

        You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        result = self._values.get("plan_id")
        assert result is not None, "Required property 'plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property amount: The number of simple application servers that you want to create.

        Valid values: 1 to 20.
        Default value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal.

        Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: The auto-renewal period.

        This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dataDiskSize: The size of the data disk that is attached to the server.

        Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        result = self._values.get("data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''Property tags: Tags to attach to swas.

        Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SWAS::Instance``, which is used to create a subscription simple application server.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__061e457c907f51ad596e6a3d51d9f8a4ba8a6a2b052e2cbda3ce6261be76aed7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__455a9e5cca5aaab7c70ffda272829398b42819460b18f2619d45dd3d86595882)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddress")
    def attr_inner_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerIpAddress: The inner IP address of simple application server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the simple application server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddress")
    def attr_public_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddress: The public IP address of simple application server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddress"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__f45dbf1b0d97cbe12f96a384241ce11a91cd0b1f1aad409894eb62c1aec4f757)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__262eb70afe9170906bd219fdbbe539c987e2aec089d9c91513837f044c6beab7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5ba36057f1502a956cb09738f4303ea92c1df627cbffde5858af519a7f0e027)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="planId")
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planId"))

    @plan_id.setter
    def plan_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d4f76e64bc8e9e43490fe42ab34b64c3aca2644a19d2f3e256fe5918d4d24dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values:
        true
        false
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca5cb95c6d31baac6c711b64340f20bf7f5353d6f0be1a48b697ea1823fed4da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34929382fa1b68ae294952b2f7d26a3ce63645dbf9b3af92d222ecca58955f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="dataDiskSize")
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataDiskSize"))

    @data_disk_size.setter
    def data_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de0bdc12bd7b37ccbfbcea6fe1d5f3983c88acf7ccf212f972d3f6e94e79b81c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd0b86b5dc21c149c52282e945fc8ff61fcab0471c38783c6525fc50c31989c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-swas.RosInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__a277e8a76b7119eaec8c593353d817f5fa6aa3596c594210d877f4eba511b921)
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
    jsii_type="@alicloud/ros-cdk-swas.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "period": "period",
        "plan_id": "planId",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "data_disk_size": "dataDiskSize",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance

        :param image_id: 
        :param period: 
        :param plan_id: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param data_disk_size: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62fb80bdb3c6d49417dc03a0974b67763dd7931b53925d48310df8929205b02a)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument plan_id", value=plan_id, expected_type=type_hints["plan_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
            "period": period,
            "plan_id": plan_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if data_disk_size is not None:
            self._values["data_disk_size"] = data_disk_size
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        result = self._values.get("plan_id")
        assert result is not None, "Required property 'plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        result = self._values.get("data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstances(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.RosInstances",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SWAS::Instances``, which is used to create subscription simple application servers.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instances`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstancesProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20c3fa08cd3fee901cff8c75891efa01589a42ce69c7889a5c941cf814b0337a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__937e7619f185960130f869075ab36096d03e6959847deb408678579505b56c70)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInnerIpAddresses")
    def attr_inner_ip_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InnerIpAddresses: The inner IP addresses of simple application servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInnerIpAddresses"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The IDs of the simple application servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIpAddresses")
    def attr_public_ip_addresses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIpAddresses: The public IP addresses of simple application servers.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIpAddresses"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__eb47c5c160473c96d0a0fbc179617c23e27caeb7fc0f3424e20bd213ed94de2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a81ff6d41b6b471b98af624370ad0a5829064c7d0335b69077b97d1a8651a619)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70a41f01a66b5df01c708ba9fef8c422cec13dd1c201c8e9b34cda812f9de17d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="planId")
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "planId"))

    @plan_id.setter
    def plan_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6219b62848a3050407c5f9424ba207ad873d3e36300a96b8a9d3d5d9d6b7bc2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "planId", value)

    @builtins.property
    @jsii.member(jsii_name="amount")
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
        Default value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3f46c92107ef2a43b7dd6ba4a2ac08b5e5bc73e19bd39be7ec082708927b826a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "amount", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values:
        true
        false
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4958e285b1c13edb17d6fd8fd4db5c7f92e13f98eaef4f8c25cbef7670c45de7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5b6121f5a0868c08da34a5b918f709994bfe6b72d4855e22fb39559a1e5b968)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="dataDiskSize")
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dataDiskSize"))

    @data_disk_size.setter
    def data_disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19fdfcb0e39126ef5aeb0c264d03d2553e7ee86a2aebac9be134007ff4ee9a1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstances.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstances.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstances.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__550298858ebcc84d1800ab75f7512568ecd43b83af0aba3aaeacd0837063f004)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-swas.RosInstances.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__7280fea684cc28e7bdbed6c1edba0cd730e1f7197152c7cfbe89ace2c6c7b0a2)
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
    jsii_type="@alicloud/ros-cdk-swas.RosInstancesProps",
    jsii_struct_bases=[],
    name_mapping={
        "image_id": "imageId",
        "period": "period",
        "plan_id": "planId",
        "amount": "amount",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "data_disk_size": "dataDiskSize",
        "tags": "tags",
    },
)
class RosInstancesProps:
    def __init__(
        self,
        *,
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstances``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances

        :param image_id: 
        :param period: 
        :param plan_id: 
        :param amount: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param data_disk_size: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6173dbe42cdaa079e72d744cfdfce47fd18ebe670f100d1ecbfe928b0806c1ee)
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument plan_id", value=plan_id, expected_type=type_hints["plan_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "image_id": image_id,
            "period": period,
            "plan_id": plan_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if data_disk_size is not None:
            self._values["data_disk_size"] = data_disk_size
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def plan_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
        '''
        result = self._values.get("plan_id")
        assert result is not None, "Required property 'plan_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
        Default value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal. Valid values:
        true
        false
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
        A value of 0 indicates that no data disk is attached.
        If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
        Default value: 0.
        '''
        result = self._values.get("data_disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstances.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstances.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstancesProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRunCommand(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.RosRunCommand",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::SWAS::RunCommand``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RunCommand`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRunCommandProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f62d004cb3927af876ffd391df76e35245a4c6515a615372449ed0c7ef5540d0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5fdabcee3570ebad570c696336b7f544a40be912abd7de18c9f23ecd20137633)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInvokeId")
    def attr_invoke_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InvokeId: The ID of the command execution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInvokeId"))

    @builtins.property
    @jsii.member(jsii_name="attrInvokeResult")
    def attr_invoke_result(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InvokeResult: The result of the command execution.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInvokeResult"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="commandContent")
    def command_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commandContent: The plaintext content of the command to run.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "commandContent"))

    @command_content.setter
    def command_content(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df04711c68ac7d13941e8792abe2e606fda6e163b8a4c2f9da3bb49495b58aba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "commandContent", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b71e69030568b998664487cbf028c3729f115a31f0357477e2d71eb83da734d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18ff2c186d955eba2bdbe1e2e4181b8599471b00889563633ac9ee5733c2d633)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the command to run.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__720ab5964f5a30bc2423fc88fbb5990f41a0f268df0f33dbf626d44d5d5e357f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The language type of the O&M script. Valid values:
        RunShellScript: shell scripts for Linux instances
        RunBatScript: batch scripts for Windows instances
        RunPowerShellScript: PowerShell scripts for Windows instances
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43a904e6ee3cddc8073d2c1c11721bfd25faf2dce2bdbfc88264d02079295d8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="contentEncoding")
    def content_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
        PlainText: The command content is not encoded, and transmitted in plaintext.
        Base64: base64-encoded.
        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "contentEncoding"))

    @content_encoding.setter
    def content_encoding(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__335390aeb265fd298021f68677869fc3df399cc26d1fdc66e14ccb8f3a467d0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contentEncoding", value)

    @builtins.property
    @jsii.member(jsii_name="enableParameter")
    def enable_parameter(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableParameter: Specifies whether the command contains custom parameters.
        Default value: false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableParameter"))

    @enable_parameter.setter
    def enable_parameter(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f11368d9caa8ce1858d90a2bff42dfc20d1758ba6de5262388ef7a2570e97c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableParameter", value)

    @builtins.property
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
        Number of custom parameters: 0 to 20.
        The key cannot be an empty string. It can be up to 64 characters in length.
        The value can be an empty string.
        After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
        The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
        Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "parameters"))

    @parameters.setter
    def parameters(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f26e049d7773a173581091e57e4f57afa6eaec552a05f9a287b92cc509e61f8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parameters", value)

    @builtins.property
    @jsii.member(jsii_name="sync")
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sync: Whether to run the command synchronously.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sync"))

    @sync.setter
    def sync(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6a7d234e3637a104bc584a52f3652f247f8fb49b030c7e23c2964782bd7cf15)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sync", value)

    @builtins.property
    @jsii.member(jsii_name="timeout")
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "timeout"))

    @timeout.setter
    def timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__061372065c6b5630236225575069de6cc495a90a57e75f4f77126bd6b3c0e796)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "timeout", value)

    @builtins.property
    @jsii.member(jsii_name="windowsPasswordName")
    def windows_password_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
        If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "windowsPasswordName"))

    @windows_password_name.setter
    def windows_password_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5d942b45eb46b90c9b0400efc5329265d500736c0e874ab4df46704ddf0e9dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "windowsPasswordName", value)

    @builtins.property
    @jsii.member(jsii_name="workingDir")
    def working_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workingDir: The directory in which to run the command on the instance. Default value:
        Linux instances: /root
        Windows instances: C:\\ProgramData\\aliyun\\assist$(version)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workingDir"))

    @working_dir.setter
    def working_dir(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4583d9fd716b8eebbb373c0cc04ac1cf63f0cc3a3801efd5dac15d2979e10278)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workingDir", value)

    @builtins.property
    @jsii.member(jsii_name="workingUser")
    def working_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "workingUser"))

    @working_user.setter
    def working_user(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74208454c071bf3ed94def0f260edee8d6a9e01b020608b683616a25b384aab6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "workingUser", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-swas.RosRunCommandProps",
    jsii_struct_bases=[],
    name_mapping={
        "command_content": "commandContent",
        "instance_id": "instanceId",
        "name": "name",
        "type": "type",
        "content_encoding": "contentEncoding",
        "enable_parameter": "enableParameter",
        "parameters": "parameters",
        "sync": "sync",
        "timeout": "timeout",
        "windows_password_name": "windowsPasswordName",
        "working_dir": "workingDir",
        "working_user": "workingUser",
    },
)
class RosRunCommandProps:
    def __init__(
        self,
        *,
        command_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        content_encoding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_parameter: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        windows_password_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        working_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRunCommand``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand

        :param command_content: 
        :param instance_id: 
        :param name: 
        :param type: 
        :param content_encoding: 
        :param enable_parameter: 
        :param parameters: 
        :param sync: 
        :param timeout: 
        :param windows_password_name: 
        :param working_dir: 
        :param working_user: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15d9024fea18256b0830da440e8d46f46c8ffd578103f8f81fd4d7e57546aa85)
            check_type(argname="argument command_content", value=command_content, expected_type=type_hints["command_content"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument content_encoding", value=content_encoding, expected_type=type_hints["content_encoding"])
            check_type(argname="argument enable_parameter", value=enable_parameter, expected_type=type_hints["enable_parameter"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument sync", value=sync, expected_type=type_hints["sync"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument windows_password_name", value=windows_password_name, expected_type=type_hints["windows_password_name"])
            check_type(argname="argument working_dir", value=working_dir, expected_type=type_hints["working_dir"])
            check_type(argname="argument working_user", value=working_user, expected_type=type_hints["working_user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "command_content": command_content,
            "instance_id": instance_id,
            "name": name,
            "type": type,
        }
        if content_encoding is not None:
            self._values["content_encoding"] = content_encoding
        if enable_parameter is not None:
            self._values["enable_parameter"] = enable_parameter
        if parameters is not None:
            self._values["parameters"] = parameters
        if sync is not None:
            self._values["sync"] = sync
        if timeout is not None:
            self._values["timeout"] = timeout
        if windows_password_name is not None:
            self._values["windows_password_name"] = windows_password_name
        if working_dir is not None:
            self._values["working_dir"] = working_dir
        if working_user is not None:
            self._values["working_user"] = working_user

    @builtins.property
    def command_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: commandContent: The plaintext content of the command to run.
        '''
        result = self._values.get("command_content")
        assert result is not None, "Required property 'command_content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the command to run.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The language type of the O&M script. Valid values:
        RunShellScript: shell scripts for Linux instances
        RunBatScript: batch scripts for Windows instances
        RunPowerShellScript: PowerShell scripts for Windows instances
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def content_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
        PlainText: The command content is not encoded, and transmitted in plaintext.
        Base64: base64-encoded.
        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
        '''
        result = self._values.get("content_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_parameter(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableParameter: Specifies whether the command contains custom parameters.
        Default value: false
        '''
        result = self._values.get("enable_parameter")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
        Number of custom parameters: 0 to 20.
        The key cannot be an empty string. It can be up to 64 characters in length.
        The value can be an empty string.
        After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
        The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
        Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sync: Whether to run the command synchronously.
        '''
        result = self._values.get("sync")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def windows_password_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
        If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        '''
        result = self._values.get("windows_password_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def working_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        workingDir: The directory in which to run the command on the instance. Default value:
        Linux instances: /root
        Windows instances: C:\\ProgramData\\aliyun\\assist$(version)
        '''
        result = self._values.get("working_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def working_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
        '''
        result = self._values.get("working_user")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRunCommandProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRunCommand)
class RunCommand(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-swas.RunCommand",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::SWAS::RunCommand``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRunCommand``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RunCommandProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce0ae8aad9230384c4695fc6f90cf90b16341ed3ba418738ed0c60f93896055a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInvokeId")
    def attr_invoke_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeId: The ID of the command execution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInvokeId"))

    @builtins.property
    @jsii.member(jsii_name="attrInvokeResult")
    def attr_invoke_result(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InvokeResult: The result of the command execution.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInvokeResult"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RunCommandProps":
        return typing.cast("RunCommandProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d798cb8f8b869a063b8c75434a50ea5f345b8be9b7a443ae9d992ecad6ace1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc41a48586b067fc5ab3dafcc98165ccc91b6a0146684011af6f211db2671a13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f190f73931c769a5143cbdbbcd208c69d81cdea3afffec10791960e22279239f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-swas.RunCommandProps",
    jsii_struct_bases=[],
    name_mapping={
        "command_content": "commandContent",
        "instance_id": "instanceId",
        "name": "name",
        "type": "type",
        "content_encoding": "contentEncoding",
        "enable_parameter": "enableParameter",
        "parameters": "parameters",
        "sync": "sync",
        "timeout": "timeout",
        "windows_password_name": "windowsPasswordName",
        "working_dir": "workingDir",
        "working_user": "workingUser",
    },
)
class RunCommandProps:
    def __init__(
        self,
        *,
        command_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        content_encoding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_parameter: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        windows_password_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        working_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RunCommand``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand

        :param command_content: Property commandContent: The plaintext content of the command to run.
        :param instance_id: Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
        :param name: Property name: The name of the command to run.
        :param type: Property type: The language type of the O&M script. Valid values: RunShellScript: shell scripts for Linux instances RunBatScript: batch scripts for Windows instances RunPowerShellScript: PowerShell scripts for Windows instances
        :param content_encoding: Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive): PlainText: The command content is not encoded, and transmitted in plaintext. Base64: base64-encoded. Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
        :param enable_parameter: Property enableParameter: Specifies whether the command contains custom parameters. Default value: false
        :param parameters: Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters. Number of custom parameters: 0 to 20. The key cannot be an empty string. It can be up to 64 characters in length. The value can be an empty string. After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB. The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in. Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        :param sync: Property sync: Whether to run the command synchronously.
        :param timeout: Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
        :param windows_password_name: Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length. If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        :param working_dir: Property workingDir: The directory in which to run the command on the instance. Default value: Linux instances: /root Windows instances: C:\\ProgramData\\aliyun\\assist$(version)
        :param working_user: Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b3cca87e7a2fdd66d648ced7f76256dbbc370e2c522b7d2df9813291e1b924b)
            check_type(argname="argument command_content", value=command_content, expected_type=type_hints["command_content"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument content_encoding", value=content_encoding, expected_type=type_hints["content_encoding"])
            check_type(argname="argument enable_parameter", value=enable_parameter, expected_type=type_hints["enable_parameter"])
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument sync", value=sync, expected_type=type_hints["sync"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
            check_type(argname="argument windows_password_name", value=windows_password_name, expected_type=type_hints["windows_password_name"])
            check_type(argname="argument working_dir", value=working_dir, expected_type=type_hints["working_dir"])
            check_type(argname="argument working_user", value=working_user, expected_type=type_hints["working_user"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "command_content": command_content,
            "instance_id": instance_id,
            "name": name,
            "type": type,
        }
        if content_encoding is not None:
            self._values["content_encoding"] = content_encoding
        if enable_parameter is not None:
            self._values["enable_parameter"] = enable_parameter
        if parameters is not None:
            self._values["parameters"] = parameters
        if sync is not None:
            self._values["sync"] = sync
        if timeout is not None:
            self._values["timeout"] = timeout
        if windows_password_name is not None:
            self._values["windows_password_name"] = windows_password_name
        if working_dir is not None:
            self._values["working_dir"] = working_dir
        if working_user is not None:
            self._values["working_user"] = working_user

    @builtins.property
    def command_content(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property commandContent: The plaintext content of the command to run.'''
        result = self._values.get("command_content")
        assert result is not None, "Required property 'command_content' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the SWAS instance on which to run the command.

        The instance must be in 'Running' status.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the command to run.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The language type of the O&M script.

        Valid values:
        RunShellScript: shell scripts for Linux instances
        RunBatScript: batch scripts for Windows instances
        RunPowerShellScript: PowerShell scripts for Windows instances
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def content_encoding(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property contentEncoding: The encoding mode of command content (CommandContent).

        Valid values (case insensitive):
        PlainText: The command content is not encoded, and transmitted in plaintext.
        Base64: base64-encoded.
        Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
        '''
        result = self._values.get("content_encoding")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_parameter(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableParameter: Specifies whether the command contains custom parameters.

        Default value: false
        '''
        result = self._values.get("enable_parameter")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.

        Number of custom parameters: 0 to 20.
        The key cannot be an empty string. It can be up to 64 characters in length.
        The value can be an empty string.
        After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
        The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
        Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        '''
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def sync(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sync: Whether to run the command synchronously.'''
        result = self._values.get("sync")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property timeout: The timeout period for command execution.

        Unit: seconds. Valid values: 10 to 86400. Default value: 60.
        '''
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def windows_password_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property windowsPasswordName: The name of the password to use to run the command on Windows instances.

        The name can be up to 255 characters in length.
        If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        '''
        result = self._values.get("windows_password_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def working_dir(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workingDir: The directory in which to run the command on the instance.

        Default value:
        Linux instances: /root
        Windows instances: C:\\ProgramData\\aliyun\\assist$(version)
        '''
        result = self._values.get("working_dir")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def working_user(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property workingUser: The user with which to run the command on the instance.

        Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
        '''
        result = self._values.get("working_user")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RunCommandProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IInstance",
    "IInstances",
    "IRunCommand",
    "Instance",
    "InstanceProps",
    "Instances",
    "InstancesProps",
    "RosInstance",
    "RosInstanceProps",
    "RosInstances",
    "RosInstancesProps",
    "RosRunCommand",
    "RosRunCommandProps",
    "RunCommand",
    "RunCommandProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__5166ca02dbc9cdb172a578f246a219f0a7dff1a3072a6db35d98d2ffcffb6a5b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e31f5d193c90e01480016b4a08e1eeba9f778b9581dc0bcc01652546ee348e56(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85340e7ccf220aaf814cac1b96298bdbf956b9222efc73519f0559fa2d6cbaeb(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38988241066df72a0548936747501021e084203a163178e35064b379993c451c(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3f1ae8c6d4d38b14bb1f5864b8ff8534d2b2e7075dee3a4e7cb4b2b32e6c51e(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2404902b10d2316d4a2936174a94c44e1b80cb65bf61bfc8c5a3c2c15d5234b0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f2833d90c33ab0ae7a84a0778506a10808d94f520ec0f1561e56e24ed7d04ee(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec73a80d54f8dc08c7bbb71df536c12eb5229e0350eeb2ace56d02608a65105b(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__638ade72859b7e06721a8cc39f0cc731aa328860dacf0ef2c48be6b2e770f6f3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cccddedcf24c55532bdc561b05502727647fef0f10dac1a388eb8455cf042d39(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__061e457c907f51ad596e6a3d51d9f8a4ba8a6a2b052e2cbda3ce6261be76aed7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__455a9e5cca5aaab7c70ffda272829398b42819460b18f2619d45dd3d86595882(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f45dbf1b0d97cbe12f96a384241ce11a91cd0b1f1aad409894eb62c1aec4f757(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__262eb70afe9170906bd219fdbbe539c987e2aec089d9c91513837f044c6beab7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5ba36057f1502a956cb09738f4303ea92c1df627cbffde5858af519a7f0e027(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d4f76e64bc8e9e43490fe42ab34b64c3aca2644a19d2f3e256fe5918d4d24dd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca5cb95c6d31baac6c711b64340f20bf7f5353d6f0be1a48b697ea1823fed4da(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34929382fa1b68ae294952b2f7d26a3ce63645dbf9b3af92d222ecca58955f2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de0bdc12bd7b37ccbfbcea6fe1d5f3983c88acf7ccf212f972d3f6e94e79b81c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd0b86b5dc21c149c52282e945fc8ff61fcab0471c38783c6525fc50c31989c1(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a277e8a76b7119eaec8c593353d817f5fa6aa3596c594210d877f4eba511b921(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62fb80bdb3c6d49417dc03a0974b67763dd7931b53925d48310df8929205b02a(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20c3fa08cd3fee901cff8c75891efa01589a42ce69c7889a5c941cf814b0337a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstancesProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__937e7619f185960130f869075ab36096d03e6959847deb408678579505b56c70(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb47c5c160473c96d0a0fbc179617c23e27caeb7fc0f3424e20bd213ed94de2d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a81ff6d41b6b471b98af624370ad0a5829064c7d0335b69077b97d1a8651a619(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70a41f01a66b5df01c708ba9fef8c422cec13dd1c201c8e9b34cda812f9de17d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6219b62848a3050407c5f9424ba207ad873d3e36300a96b8a9d3d5d9d6b7bc2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3f46c92107ef2a43b7dd6ba4a2ac08b5e5bc73e19bd39be7ec082708927b826a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4958e285b1c13edb17d6fd8fd4db5c7f92e13f98eaef4f8c25cbef7670c45de7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5b6121f5a0868c08da34a5b918f709994bfe6b72d4855e22fb39559a1e5b968(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19fdfcb0e39126ef5aeb0c264d03d2553e7ee86a2aebac9be134007ff4ee9a1f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__550298858ebcc84d1800ab75f7512568ecd43b83af0aba3aaeacd0837063f004(
    value: typing.Optional[typing.List[RosInstances.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7280fea684cc28e7bdbed6c1edba0cd730e1f7197152c7cfbe89ace2c6c7b0a2(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6173dbe42cdaa079e72d744cfdfce47fd18ebe670f100d1ecbfe928b0806c1ee(
    *,
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstances.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f62d004cb3927af876ffd391df76e35245a4c6515a615372449ed0c7ef5540d0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRunCommandProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fdabcee3570ebad570c696336b7f544a40be912abd7de18c9f23ecd20137633(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df04711c68ac7d13941e8792abe2e606fda6e163b8a4c2f9da3bb49495b58aba(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b71e69030568b998664487cbf028c3729f115a31f0357477e2d71eb83da734d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18ff2c186d955eba2bdbe1e2e4181b8599471b00889563633ac9ee5733c2d633(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__720ab5964f5a30bc2423fc88fbb5990f41a0f268df0f33dbf626d44d5d5e357f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43a904e6ee3cddc8073d2c1c11721bfd25faf2dce2bdbfc88264d02079295d8e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__335390aeb265fd298021f68677869fc3df399cc26d1fdc66e14ccb8f3a467d0f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f11368d9caa8ce1858d90a2bff42dfc20d1758ba6de5262388ef7a2570e97c6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f26e049d7773a173581091e57e4f57afa6eaec552a05f9a287b92cc509e61f8d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6a7d234e3637a104bc584a52f3652f247f8fb49b030c7e23c2964782bd7cf15(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__061372065c6b5630236225575069de6cc495a90a57e75f4f77126bd6b3c0e796(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5d942b45eb46b90c9b0400efc5329265d500736c0e874ab4df46704ddf0e9dc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4583d9fd716b8eebbb373c0cc04ac1cf63f0cc3a3801efd5dac15d2979e10278(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74208454c071bf3ed94def0f260edee8d6a9e01b020608b683616a25b384aab6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15d9024fea18256b0830da440e8d46f46c8ffd578103f8f81fd4d7e57546aa85(
    *,
    command_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    content_encoding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_parameter: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    windows_password_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    working_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce0ae8aad9230384c4695fc6f90cf90b16341ed3ba418738ed0c60f93896055a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RunCommandProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d798cb8f8b869a063b8c75434a50ea5f345b8be9b7a443ae9d992ecad6ace1d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc41a48586b067fc5ab3dafcc98165ccc91b6a0146684011af6f211db2671a13(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f190f73931c769a5143cbdbbcd208c69d81cdea3afffec10791960e22279239f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b3cca87e7a2fdd66d648ced7f76256dbbc370e2c522b7d2df9813291e1b924b(
    *,
    command_content: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    content_encoding: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_parameter: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    parameters: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    sync: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    windows_password_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    working_dir: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    working_user: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
