'''
## Aliyun ROS CDDC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CDDC from '@alicloud/ros-cdk-cddc';
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


class DedicatedHost(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHost",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDDC::DedicatedHost``, which is used to create a host in a dedicated cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedHost``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DedicatedHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__018ba11c308c91ba0194ff6646e12e822f0d66f57a5d14ffedce94d553526bea)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoRenew: Whether Auto Renew.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CpuAllocationRatio: CPU Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuUsed")
    def attr_cpu_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CpuUsed: CPU Used.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostId")
    def attr_dedicated_host_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostId: The first ID of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsClassCode")
    def attr_ecs_class_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EcsClassCode: ECS Class Code.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsClassCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHostClass")
    def attr_host_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostClass: Host Class.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostClass"))

    @builtins.property
    @jsii.member(jsii_name="attrHostCpu")
    def attr_host_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostCpu: Host CPU.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrHostMem")
    def attr_host_mem(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostMem: Host Memory.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostMem"))

    @builtins.property
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostName: Host Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property
    @jsii.member(jsii_name="attrHostStorage")
    def attr_host_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostStorage: Host Storage.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrHostType")
    def attr_host_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostType: Host Storage Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostType"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageCategory: Host Image Category.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: Host IP Address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryUsed")
    def attr_memory_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemoryUsed: Host Memory Used.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemoryUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: Payment Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageUsed")
    def attr_storage_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StorageUsed: Storage Used.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: VSwitch ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZoneId: Zone ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__016fcfe172a7b887f2b548c2a72315b658a425f6b031e14cfa9930873e77e4de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__877b232fe60f5aba2b16521a85998128fc03c8c6ff6f7fe4cf70ec300fbb551c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DedicatedHostProps":
        return typing.cast("DedicatedHostProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DedicatedHostProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a174e74e77e8558ad4339ac533c86f1e7d881c713cc095a90f3ae313db2d8b62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86e2ae5abfc1591c81a337887c113b0156442f382698317640e8ca265225ddb6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class DedicatedHostGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHostGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDDC::DedicatedHostGroup``, which is used to create a dedicated cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedHostGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DedicatedHostGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc0e8cd9c0e9e7bdfb036ce53eebc89989fbe288bd952c43363c670d7f804388)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllocationPolicy: Allocation Policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BastionInstanceId: BastionInstanceId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBastionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CpuAllocatedAmount: CpuAllocatedAmount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CpuAllocateRation: CpuAllocateRation.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CpuAllocationRatio: Cpu Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DeployType: DeployType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeployType"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskAllocatedAmount: DiskAllocatedAmount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskAllocateRation: DiskAllocateRation.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskUsedAmount: DiskUsedAmount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DiskUtility: DiskUtility.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Engine: Database Engine Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostNumber: Total Host Number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostReplacePolicy: Host Replace Policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceNumber: Total Instance Number.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemAllocatedAmount: MemAllocatedAmount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemAllocateRation: MemAllocateRation.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemUsedAmount: MemUsedAmount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MemUtility: MemUtility.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Text: Text.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrText"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b907d6f9bed4c45a024e1619c7c0b25cb27584792ab23fe17ce6e53dcb208010)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a61244305a6cb25b797f62bff419582e5d647affb8c6595004dc375d02a895)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "DedicatedHostGroupProps":
        return typing.cast("DedicatedHostGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "DedicatedHostGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db160e19635e2b75444ccf925b04db9b1c293fc25d5467767e19519253a28824)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01690de1747eb75bcbf72438070798914e0acc301f9a401cd2908dfa821df4c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "vpc_id": "vpcId",
        "allocation_policy": "allocationPolicy",
        "cpu_allocation_ratio": "cpuAllocationRatio",
        "dedicated_host_group_desc": "dedicatedHostGroupDesc",
        "disk_allocation_ratio": "diskAllocationRatio",
        "host_replace_policy": "hostReplacePolicy",
        "mem_allocation_ratio": "memAllocationRatio",
        "open_permission": "openPermission",
    },
)
class DedicatedHostGroupProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocation_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_replace_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_permission: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedHostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup

        :param engine: Property engine: Database Engine Type.
        :param vpc_id: Property vpcId: VPC ID.
        :param allocation_policy: Property allocationPolicy: Allocation Policy.
        :param cpu_allocation_ratio: Property cpuAllocationRatio: Cpu Allocation Ratio.
        :param dedicated_host_group_desc: Property dedicatedHostGroupDesc: Dedicated Host Group Description.
        :param disk_allocation_ratio: Property diskAllocationRatio: Disk Allocation Ratio.
        :param host_replace_policy: Property hostReplacePolicy: Host Replace Policy.
        :param mem_allocation_ratio: Property memAllocationRatio: Memory Allocation Ratio.
        :param open_permission: Property openPermission: Whether Open OS Permission.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99714a5ea14bb73e137d15ae0fa8559ddc8199d8f199c3c1963a00601cb23476)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument allocation_policy", value=allocation_policy, expected_type=type_hints["allocation_policy"])
            check_type(argname="argument cpu_allocation_ratio", value=cpu_allocation_ratio, expected_type=type_hints["cpu_allocation_ratio"])
            check_type(argname="argument dedicated_host_group_desc", value=dedicated_host_group_desc, expected_type=type_hints["dedicated_host_group_desc"])
            check_type(argname="argument disk_allocation_ratio", value=disk_allocation_ratio, expected_type=type_hints["disk_allocation_ratio"])
            check_type(argname="argument host_replace_policy", value=host_replace_policy, expected_type=type_hints["host_replace_policy"])
            check_type(argname="argument mem_allocation_ratio", value=mem_allocation_ratio, expected_type=type_hints["mem_allocation_ratio"])
            check_type(argname="argument open_permission", value=open_permission, expected_type=type_hints["open_permission"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
            "vpc_id": vpc_id,
        }
        if allocation_policy is not None:
            self._values["allocation_policy"] = allocation_policy
        if cpu_allocation_ratio is not None:
            self._values["cpu_allocation_ratio"] = cpu_allocation_ratio
        if dedicated_host_group_desc is not None:
            self._values["dedicated_host_group_desc"] = dedicated_host_group_desc
        if disk_allocation_ratio is not None:
            self._values["disk_allocation_ratio"] = disk_allocation_ratio
        if host_replace_policy is not None:
            self._values["host_replace_policy"] = host_replace_policy
        if mem_allocation_ratio is not None:
            self._values["mem_allocation_ratio"] = mem_allocation_ratio
        if open_permission is not None:
            self._values["open_permission"] = open_permission

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: Database Engine Type.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allocationPolicy: Allocation Policy.'''
        result = self._values.get("allocation_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cpuAllocationRatio: Cpu Allocation Ratio.'''
        result = self._values.get("cpu_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupDesc: Dedicated Host Group Description.'''
        result = self._values.get("dedicated_host_group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskAllocationRatio: Disk Allocation Ratio.'''
        result = self._values.get("disk_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostReplacePolicy: Host Replace Policy.'''
        result = self._values.get("host_replace_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memAllocationRatio: Memory Allocation Ratio.'''
        result = self._values.get("mem_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property openPermission: Whether Open OS Permission.'''
        result = self._values.get("open_permission")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHostProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "host_class": "hostClass",
        "payment_type": "paymentType",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "host_name": "hostName",
        "image_category": "imageCategory",
        "os_password": "osPassword",
        "period": "period",
        "tags": "tags",
        "used_time": "usedTime",
    },
)
class DedicatedHostProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDedicatedHost.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedHost``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost

        :param dedicated_host_group_id: Property dedicatedHostGroupId: Dedicated Host Group ID.
        :param host_class: Property hostClass: Host Class.
        :param payment_type: Property paymentType: Payment Type.
        :param v_switch_id: Property vSwitchId: VSwitch ID.
        :param zone_id: Property zoneId: Zone ID.
        :param auto_renew: Property autoRenew: Whether Auto Renew.
        :param host_name: Property hostName: Host Name.
        :param image_category: Property imageCategory: Host Image Category.
        :param os_password: Property osPassword:.
        :param period: Property period:.
        :param tags: Property tags: The tag of the resource.
        :param used_time: Property usedTime:.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__768a9d2335773fe10d2da8a40d0aa3a4e3db4c14b39b78e6c3c4beda186766cc)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument host_class", value=host_class, expected_type=type_hints["host_class"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument image_category", value=image_category, expected_type=type_hints["image_category"])
            check_type(argname="argument os_password", value=os_password, expected_type=type_hints["os_password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dedicated_host_group_id": dedicated_host_group_id,
            "host_class": host_class,
            "payment_type": payment_type,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if host_name is not None:
            self._values["host_name"] = host_name
        if image_category is not None:
            self._values["image_category"] = image_category
        if os_password is not None:
            self._values["os_password"] = os_password
        if period is not None:
            self._values["period"] = period
        if tags is not None:
            self._values["tags"] = tags
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dedicatedHostGroupId: Dedicated Host Group ID.'''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property hostClass: Host Class.'''
        result = self._values.get("host_class")
        assert result is not None, "Required property 'host_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: Payment Type.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: Zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether Auto Renew.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostName: Host Name.'''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageCategory: Host Image Category.'''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osPassword:.'''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period:.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]]:
        '''Property tags: The tag of the resource.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime:.'''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MyBase(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.MyBase",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CDDC::MyBase``, which is used to create hosts in a dedicated cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMyBase``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MyBaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62b8c65d101fed047144a983220b76976f697f988ee22de07a7a4a9406fc98c9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceIds: The instance id list of created ecs instances.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderIds: The order id list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderIds"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5957f77390750080d7ce95cfedef6cda4e82a2180c3f0121ff4cb0fc47cd690)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cf9a9bfdf5e61272c9b0718cf497e9e7ad35f3e0b858bda82ccac344a25ffbe8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "MyBaseProps":
        return typing.cast("MyBaseProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "MyBaseProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0bc43a320f4f54d6d8e5e8377d9fc05e6d1f14865f072ae86341c2cfd9b597c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5fe8ec2e88af46d031642b04b7ccbe509e585cf510ed4f7dfb30dc3faf366c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.MyBaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_class_list": "ecsClassList",
        "engine": "engine",
        "pay_type": "payType",
        "period": "period",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "dedicated_host_group_description": "dedicatedHostGroupDescription",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "ecs_deployment_set_id": "ecsDeploymentSetId",
        "ecs_host_name": "ecsHostName",
        "ecs_instance_name": "ecsInstanceName",
        "ecs_unique_suffix": "ecsUniqueSuffix",
        "image_id": "imageId",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "key_pair_name": "keyPairName",
        "os_password": "osPassword",
        "password_inherit": "passwordInherit",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "user_data": "userData",
        "user_data_in_base64": "userDataInBase64",
    },
)
class MyBaseProps:
    def __init__(
        self,
        *,
        ecs_class_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data_in_base64: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MyBase``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase

        :param ecs_class_list: Property ecsClassList: ECS Class List.
        :param engine: Property engine: Database type.
        :param pay_type: Property payType: Payment type, currently only supports PrePaid.
        :param period: Property period: The period of the subscription in months.
        :param security_group_id: Property securityGroupId: The ID of the security group.
        :param vpc_id: Property vpcId: The ID of the VPC.
        :param v_switch_id: Property vSwitchId: Virtual switch ID.
        :param zone_id: Property zoneId: Availability Zone ID.
        :param auto_renew: Property autoRenew: Whether to enable auto renew.
        :param dedicated_host_group_description: Property dedicatedHostGroupDescription: The name of the dedicated cluster.
        :param dedicated_host_group_id: Property dedicatedHostGroupId: The ID of the dedicated cluster.
        :param ecs_deployment_set_id: Property ecsDeploymentSetId: The ID of the deployment set.
        :param ecs_host_name: Property ecsHostName: The host name of the ECS instance.
        :param ecs_instance_name: Property ecsInstanceName: The name of the ECS instance.
        :param ecs_unique_suffix: Property ecsUniqueSuffix: The unique suffix of the ECS instance.
        :param image_id: Property imageId: The image ID.
        :param internet_charge_type: Property internetChargeType: Network billing type. Value range: PayByBandwidth: billed based on fixed bandwidth. PayByTraffic: Pay by traffic usage.
        :param internet_max_bandwidth_out: Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1. While the property is not 0, public ip will be assigned for instance.
        :param key_pair_name: Property keyPairName: The name of the key pair.
        :param os_password: Property osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        :param password_inherit: Property passwordInherit: Whether to inherit the password from the parent cluster.
        :param period_type: Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param user_data: Property userData: User-defined script data, the original data is up to 16KB.
        :param user_data_in_base64: Property userDataInBase64: The user data of the ECS instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__786176d355eef11eed8e52f88d6b31f428dbce05145aa9191fac9985457eec34)
            check_type(argname="argument ecs_class_list", value=ecs_class_list, expected_type=type_hints["ecs_class_list"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument dedicated_host_group_description", value=dedicated_host_group_description, expected_type=type_hints["dedicated_host_group_description"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument ecs_deployment_set_id", value=ecs_deployment_set_id, expected_type=type_hints["ecs_deployment_set_id"])
            check_type(argname="argument ecs_host_name", value=ecs_host_name, expected_type=type_hints["ecs_host_name"])
            check_type(argname="argument ecs_instance_name", value=ecs_instance_name, expected_type=type_hints["ecs_instance_name"])
            check_type(argname="argument ecs_unique_suffix", value=ecs_unique_suffix, expected_type=type_hints["ecs_unique_suffix"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument os_password", value=os_password, expected_type=type_hints["os_password"])
            check_type(argname="argument password_inherit", value=password_inherit, expected_type=type_hints["password_inherit"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument user_data_in_base64", value=user_data_in_base64, expected_type=type_hints["user_data_in_base64"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_class_list": ecs_class_list,
            "engine": engine,
            "pay_type": pay_type,
            "period": period,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if dedicated_host_group_description is not None:
            self._values["dedicated_host_group_description"] = dedicated_host_group_description
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if ecs_deployment_set_id is not None:
            self._values["ecs_deployment_set_id"] = ecs_deployment_set_id
        if ecs_host_name is not None:
            self._values["ecs_host_name"] = ecs_host_name
        if ecs_instance_name is not None:
            self._values["ecs_instance_name"] = ecs_instance_name
        if ecs_unique_suffix is not None:
            self._values["ecs_unique_suffix"] = ecs_unique_suffix
        if image_id is not None:
            self._values["image_id"] = image_id
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if os_password is not None:
            self._values["os_password"] = os_password
        if password_inherit is not None:
            self._values["password_inherit"] = password_inherit
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if user_data is not None:
            self._values["user_data"] = user_data
        if user_data_in_base64 is not None:
            self._values["user_data_in_base64"] = user_data_in_base64

    @builtins.property
    def ecs_class_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''Property ecsClassList: ECS Class List.'''
        result = self._values.get("ecs_class_list")
        assert result is not None, "Required property 'ecs_class_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: Database type.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: Payment type, currently only supports PrePaid.'''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: The period of the subscription in months.'''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: The ID of the security group.'''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: Virtual switch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: Availability Zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to enable auto renew.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupDescription: The name of the dedicated cluster.'''
        result = self._values.get("dedicated_host_group_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: The ID of the dedicated cluster.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsDeploymentSetId: The ID of the deployment set.'''
        result = self._values.get("ecs_deployment_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsHostName: The host name of the ECS instance.'''
        result = self._values.get("ecs_host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsInstanceName: The name of the ECS instance.'''
        result = self._values.get("ecs_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ecsUniqueSuffix: The unique suffix of the ECS instance.'''
        result = self._values.get("ecs_unique_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property imageId: The image ID.'''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: Network billing type.

        Value range:
        PayByBandwidth: billed based on fixed bandwidth.
        PayByTraffic: Pay by traffic usage.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetMaxBandwidthOut: Set internet output bandwidth of instance.

        Unit is Mbps(Mega bit per second).
        Range is [0,200]. Default is 1.
        While the property is not 0, public ip will be assigned for instance.
        '''
        result = self._values.get("internet_max_bandwidth_out")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: The name of the key pair.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property osPassword: Password of created ecs instance.

        Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property passwordInherit: Whether to inherit the password from the parent cluster.'''
        result = self._values.get("password_inherit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).'''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userData: User-defined script data, the original data is up to 16KB.'''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data_in_base64(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userDataInBase64: The user data of the ECS instance.'''
        result = self._values.get("user_data_in_base64")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MyBaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHost(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHost",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDDC::DedicatedHost``, which is used to create a host in a dedicated cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedHost`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67ebee5527098728a50a9dcdbbbabc8f42edec001b4a64436fd4577a10c87e60)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cac07586de7b13b59d01c1a3f42ad996f41ec79d6ae31e642ce95f922caef9d4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenew: Whether Auto Renew
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocationRatio: CPU Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuUsed")
    def attr_cpu_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuUsed: CPU Used
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostId")
    def attr_dedicated_host_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostId: The first ID of the resource
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostId"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrEcsClassCode")
    def attr_ecs_class_code(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EcsClassCode: ECS Class Code
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEcsClassCode"))

    @builtins.property
    @jsii.member(jsii_name="attrHostClass")
    def attr_host_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostClass: Host Class
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostClass"))

    @builtins.property
    @jsii.member(jsii_name="attrHostCpu")
    def attr_host_cpu(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostCpu: Host CPU
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostCpu"))

    @builtins.property
    @jsii.member(jsii_name="attrHostMem")
    def attr_host_mem(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostMem: Host Memory
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostMem"))

    @builtins.property
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostName: Host Name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property
    @jsii.member(jsii_name="attrHostStorage")
    def attr_host_storage(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostStorage: Host Storage
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostStorage"))

    @builtins.property
    @jsii.member(jsii_name="attrHostType")
    def attr_host_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostType: Host Storage Type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostType"))

    @builtins.property
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageCategory: Host Image Category
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: Host IP Address
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemoryUsed")
    def attr_memory_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemoryUsed: Host Memory Used
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemoryUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OpenPermission: Whether Open OS Permission
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Payment Type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageUsed")
    def attr_storage_used(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageUsed: Storage Used
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageUsed"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VPC ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitch ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneId: Zone ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1316908c50b9f2d4870c3015fa96db3f0ea02c9fdd87c47e782ce71fd864a1bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b5575cfffcc5e8f401505956a651fc2418064bac391991df86b8f106ff77bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="hostClass")
    def host_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostClass: Host Class
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "hostClass"))

    @host_class.setter
    def host_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c6060cff897d13d9178a46bf1f17fb0d08ce1df07a3bf007e910ce197c7d2be)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostClass", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: Payment Type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aa2d15d06f01e7ac30ea99fe7351962b853cc73543c4dd57581e030d6e3233e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e20a8b907ac4fec1577f6eef8d8be2f11960b2caab20320d4c0b18ece4c8a0f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Zone ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91fe63daf207636e0c571fe6aa33ddba34992a8cd9e048aa7b6bd06ae01ddc2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether Auto Renew
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41ed9d127f5b25ae05a7b26d45dafbbffd172df6a3e1d4195eb47933f14ac68b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: Host Name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91feda79df0c120761072fc0dff54d71c61d838a1e0e018ffe8f27ae3ac51e6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="imageCategory")
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCategory: Host Image Category
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageCategory"))

    @image_category.setter
    def image_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d17d63f1adc6f1ed96719cdfbaddad9789f4daf12d01fdfa269df40d49896c59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageCategory", value)

    @builtins.property
    @jsii.member(jsii_name="osPassword")
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osPassword:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osPassword"))

    @os_password.setter
    def os_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e0364689c1320244f85be1449054709487f113171d00d1db0da893d0681197a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osPassword", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__446d9cedeb4b0dbf3a00873c58eabff77686f24dcaa58e62d7438a40fbda1897)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]]:
        '''
        :Property: tags: The tag of the resource
        '''
        return typing.cast(typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f3a72b7231def0b13ee7d88c60544aa6e31682826fbc3acceed4f54f4a6c8fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cc3d56a2ba8560e83fe92cc1553a2b286125a737fea01fd6f8c0a7093b1ddb2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHost.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"tag_key": "tagKey", "tag_value": "tagValue"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            tag_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tag_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param tag_key: 
            :param tag_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ae740ce77364fb6628c8c04fbad61f6a82ed81cad77db6866934fdfcf04c7c05)
                check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
                check_type(argname="argument tag_value", value=tag_value, expected_type=type_hints["tag_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if tag_key is not None:
                self._values["tag_key"] = tag_key
            if tag_value is not None:
                self._values["tag_value"] = tag_value

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tagKey: The key of the tags
            '''
            result = self._values.get("tag_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tag_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tagValue: The value of the tags
            '''
            result = self._values.get("tag_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDedicatedHostGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDDC::DedicatedHostGroup``, which is used to create a dedicated cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedHostGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aabe5e0643a091fc5a4ac5f5536dfc0932e422591b56facc1f3ed374dd6d4c7f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6b2bef8ae361e2bfa45493e0d2daa9d699e561953a980b3a49554c394325d1ac)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllocationPolicy: Allocation Policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BastionInstanceId: BastionInstanceId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBastionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocatedAmount: CpuAllocatedAmount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocateRation: CpuAllocateRation
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocationRatio: Cpu Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeployType: DeployType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeployType"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocatedAmount: DiskAllocatedAmount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocateRation: DiskAllocateRation
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskUsedAmount: DiskUsedAmount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskUtility: DiskUtility
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: Database Engine Type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostNumber: Total Host Number
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostReplacePolicy: Host Replace Policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceNumber: Total Instance Number
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocatedAmount: MemAllocatedAmount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocateRation: MemAllocateRation
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemUsedAmount: MemUsedAmount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemUtility: MemUtility
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OpenPermission: Whether Open OS Permission
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Text: Text
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrText"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d928246ee9d2f5c9708abfb40990d29a3eb89b8f9613deb8b1adf71b64403b97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database Engine Type
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3dadbe1a6364d7a6a568ac92a547dd363fa2c2ebe9354dead03f418e06400ea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da2d4cd9c2110d8615acb57f6cbd8865fdcbc825d2dcdbf118bf2c03a54b4747)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="allocationPolicy")
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocationPolicy: Allocation Policy
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allocationPolicy"))

    @allocation_policy.setter
    def allocation_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69387199bfbe0bebf6118ca18cebd92f8fde445a4901e56939860ae5235dfb08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allocationPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="cpuAllocationRatio")
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpuAllocationRatio: Cpu Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cpuAllocationRatio"))

    @cpu_allocation_ratio.setter
    def cpu_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deacdc9c99a2acc908b3ecd60888a4b1306cbf5cad220b9a59a14385427c2ad5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cpuAllocationRatio", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupDesc")
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupDesc"))

    @dedicated_host_group_desc.setter
    def dedicated_host_group_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67330b0975cfafe533795b6ca8936291e2bd906156d08293dc77614f79120e2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupDesc", value)

    @builtins.property
    @jsii.member(jsii_name="diskAllocationRatio")
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskAllocationRatio"))

    @disk_allocation_ratio.setter
    def disk_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b0e5f5429546f8b105c9f34873ef19e32d8a9e15560e86b21852d783a075693)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskAllocationRatio", value)

    @builtins.property
    @jsii.member(jsii_name="hostReplacePolicy")
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostReplacePolicy: Host Replace Policy
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostReplacePolicy"))

    @host_replace_policy.setter
    def host_replace_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d48766aa68b005b071c2afa8323015a65c26bd858f286f927061e6bd87f5460f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostReplacePolicy", value)

    @builtins.property
    @jsii.member(jsii_name="memAllocationRatio")
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memAllocationRatio"))

    @mem_allocation_ratio.setter
    def mem_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0670e626c561ca15fbde130444cf60f8761366633e8e30152c1343b350579d31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memAllocationRatio", value)

    @builtins.property
    @jsii.member(jsii_name="openPermission")
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openPermission: Whether Open OS Permission
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "openPermission"))

    @open_permission.setter
    def open_permission(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf68ee75a864584dc08637054d0b2dbb003def08f983665aceb9414765d89358)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "openPermission", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "engine": "engine",
        "vpc_id": "vpcId",
        "allocation_policy": "allocationPolicy",
        "cpu_allocation_ratio": "cpuAllocationRatio",
        "dedicated_host_group_desc": "dedicatedHostGroupDesc",
        "disk_allocation_ratio": "diskAllocationRatio",
        "host_replace_policy": "hostReplacePolicy",
        "mem_allocation_ratio": "memAllocationRatio",
        "open_permission": "openPermission",
    },
)
class RosDedicatedHostGroupProps:
    def __init__(
        self,
        *,
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allocation_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_replace_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_permission: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedHostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup

        :param engine: 
        :param vpc_id: 
        :param allocation_policy: 
        :param cpu_allocation_ratio: 
        :param dedicated_host_group_desc: 
        :param disk_allocation_ratio: 
        :param host_replace_policy: 
        :param mem_allocation_ratio: 
        :param open_permission: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2efc1492bd89c80864f595c7339ab3f2c53e5ecdcc851b1f480341531915dd8)
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument allocation_policy", value=allocation_policy, expected_type=type_hints["allocation_policy"])
            check_type(argname="argument cpu_allocation_ratio", value=cpu_allocation_ratio, expected_type=type_hints["cpu_allocation_ratio"])
            check_type(argname="argument dedicated_host_group_desc", value=dedicated_host_group_desc, expected_type=type_hints["dedicated_host_group_desc"])
            check_type(argname="argument disk_allocation_ratio", value=disk_allocation_ratio, expected_type=type_hints["disk_allocation_ratio"])
            check_type(argname="argument host_replace_policy", value=host_replace_policy, expected_type=type_hints["host_replace_policy"])
            check_type(argname="argument mem_allocation_ratio", value=mem_allocation_ratio, expected_type=type_hints["mem_allocation_ratio"])
            check_type(argname="argument open_permission", value=open_permission, expected_type=type_hints["open_permission"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "engine": engine,
            "vpc_id": vpc_id,
        }
        if allocation_policy is not None:
            self._values["allocation_policy"] = allocation_policy
        if cpu_allocation_ratio is not None:
            self._values["cpu_allocation_ratio"] = cpu_allocation_ratio
        if dedicated_host_group_desc is not None:
            self._values["dedicated_host_group_desc"] = dedicated_host_group_desc
        if disk_allocation_ratio is not None:
            self._values["disk_allocation_ratio"] = disk_allocation_ratio
        if host_replace_policy is not None:
            self._values["host_replace_policy"] = host_replace_policy
        if mem_allocation_ratio is not None:
            self._values["mem_allocation_ratio"] = mem_allocation_ratio
        if open_permission is not None:
            self._values["open_permission"] = open_permission

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database Engine Type
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: VPC ID
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: allocationPolicy: Allocation Policy
        '''
        result = self._values.get("allocation_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cpuAllocationRatio: Cpu Allocation Ratio
        '''
        result = self._values.get("cpu_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        result = self._values.get("dedicated_host_group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: diskAllocationRatio: Disk Allocation Ratio
        '''
        result = self._values.get("disk_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostReplacePolicy: Host Replace Policy
        '''
        result = self._values.get("host_replace_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memAllocationRatio: Memory Allocation Ratio
        '''
        result = self._values.get("mem_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openPermission: Whether Open OS Permission
        '''
        result = self._values.get("open_permission")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHostProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "host_class": "hostClass",
        "payment_type": "paymentType",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "host_name": "hostName",
        "image_category": "imageCategory",
        "os_password": "osPassword",
        "period": "period",
        "tags": "tags",
        "used_time": "usedTime",
    },
)
class RosDedicatedHostProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        host_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHost.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedHost``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost

        :param dedicated_host_group_id: 
        :param host_class: 
        :param payment_type: 
        :param v_switch_id: 
        :param zone_id: 
        :param auto_renew: 
        :param host_name: 
        :param image_category: 
        :param os_password: 
        :param period: 
        :param tags: 
        :param used_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abb6b287a14b36135672b8f7379723e2d643421aea19bad7aea7f4654a2246c9)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument host_class", value=host_class, expected_type=type_hints["host_class"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument image_category", value=image_category, expected_type=type_hints["image_category"])
            check_type(argname="argument os_password", value=os_password, expected_type=type_hints["os_password"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dedicated_host_group_id": dedicated_host_group_id,
            "host_class": host_class,
            "payment_type": payment_type,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if host_name is not None:
            self._values["host_name"] = host_name
        if image_category is not None:
            self._values["image_category"] = image_category
        if os_password is not None:
            self._values["os_password"] = os_password
        if period is not None:
            self._values["period"] = period
        if tags is not None:
            self._values["tags"] = tags
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID
        '''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def host_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: hostClass: Host Class
        '''
        result = self._values.get("host_class")
        assert result is not None, "Required property 'host_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: Payment Type
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Zone ID
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether Auto Renew
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: Host Name
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageCategory: Host Image Category
        '''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osPassword:
        '''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period:
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDedicatedHost.TagsProperty]]:
        '''
        :Property: tags: The tag of the resource
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDedicatedHost.TagsProperty]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: usedTime:
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMyBase(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.RosMyBase",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CDDC::MyBase``, which is used to create hosts in a dedicated cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MyBase`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMyBaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7331750d1a5a7430cd54bbd8124a22f13184329ce7218b2a591fbcb46567d1fb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__404ab2b78140ff03a4a02cb513e18f1131bdcf82d4fbcce0953bc2f9b7a9caaa)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceIds")
    def attr_instance_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceIds: The instance id list of created ecs instances
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceIds"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderIds")
    def attr_order_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderIds: The order id list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderIds"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="ecsClassList")
    def ecs_class_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: ecsClassList: ECS Class List.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "ecsClassList"))

    @ecs_class_list.setter
    def ecs_class_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b08958f38f1fb0e2a536c030ecb259c456ee8f7811db02a8fcce6a5498d49ccf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsClassList", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb05b74547a42a124b29210921c4c60cc3a81461f9dbbe8f6a41a06b0b161d3b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90eccc3ca77ba50dbf83c7b972ab19cef798083bdbde77248fa1b1001e84bc96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: Payment type, currently only supports PrePaid.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd7a93dedf0ca52c708c7f3f51ba881abad1766ffca0bd00068b8fe4ed3d34da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The period of the subscription in months.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ac42c70fecb1feb547e7122bd4b2eb3666c951d5f5b1bb016c59b46cf766c22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The ID of the security group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8be28962fbf09f6347f9a8ecd8d4877a922ea52aaeb3a879abf821707f5cac53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fac57bd8a7d672e72dad359ca08de8cf488911cad00e1fc18a62a27c012e82a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: Virtual switch ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1609a416fab71fe295e79ce6d90b903381ad061605dec149eda59fe3a949f3aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Availability Zone ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ea75ab776b573edb34669fdde56eba6607bd7d48d6a625187185c6bbbeaa9f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to enable auto renew.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56d4065ac7b5934753128a63cbd0eae3466a46f4476c843e9c741faa88e3a483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupDescription")
    def dedicated_host_group_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDescription: The name of the dedicated cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupDescription"))

    @dedicated_host_group_description.setter
    def dedicated_host_group_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f782fb5b8b2c0c0a55ec2bda521d21a1f4d5bf29ac5bbfa34f824c457f8f3fc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupDescription", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f32dc320fca15a1acb471d750790701bba89f236e7b038bc7057a2a2c493009a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="ecsDeploymentSetId")
    def ecs_deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsDeploymentSetId: The ID of the deployment set.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsDeploymentSetId"))

    @ecs_deployment_set_id.setter
    def ecs_deployment_set_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f628f98b6f9994a4bff919162f41f630a3b31190f0c77157ff78315387f348b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsDeploymentSetId", value)

    @builtins.property
    @jsii.member(jsii_name="ecsHostName")
    def ecs_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsHostName: The host name of the ECS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsHostName"))

    @ecs_host_name.setter
    def ecs_host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8c3ac1689973d73a28455a46afc857098127183b20277f4b3f4a40397fdb0b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsHostName", value)

    @builtins.property
    @jsii.member(jsii_name="ecsInstanceName")
    def ecs_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsInstanceName: The name of the ECS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsInstanceName"))

    @ecs_instance_name.setter
    def ecs_instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95a686eafe83d4d3390fa7593f37b9f20e8b787e3cefe3c2425560db0062a5ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsInstanceName", value)

    @builtins.property
    @jsii.member(jsii_name="ecsUniqueSuffix")
    def ecs_unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsUniqueSuffix: The unique suffix of the ECS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ecsUniqueSuffix"))

    @ecs_unique_suffix.setter
    def ecs_unique_suffix(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6eb9d5c361363d7cc5fb04a5405160ac2f0c039989079b9fb3e64a689823f1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ecsUniqueSuffix", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The image ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca0cf8d6904f5f25e8c58732325755cd075a9c650c7b58afb43730e1a51bfd17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetChargeType: Network billing type. Value range:
        PayByBandwidth: billed based on fixed bandwidth.
        PayByTraffic: Pay by traffic usage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35e4dd97d631ca8f39cfae752dd0956248a23eec163f9f780a3fdf9d20a3227e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="internetMaxBandwidthOut")
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second).
        Range is [0,200]. Default is 1.
        While the property is not 0, public ip will be assigned for instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetMaxBandwidthOut"))

    @internet_max_bandwidth_out.setter
    def internet_max_bandwidth_out(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ee35423c07c2d2e62f7db7d9b726ee6a4530e80d3a3fda716eacfc67b8fbe55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetMaxBandwidthOut", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb6671a91cb827258a54261fe2286a787413658b9817b745b336f6f61b528997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="osPassword")
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "osPassword"))

    @os_password.setter
    def os_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58d556bf587f0e3e0c376974afed128f988d8ed55d70e8529e3f22962e0cf9ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "osPassword", value)

    @builtins.property
    @jsii.member(jsii_name="passwordInherit")
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordInherit: Whether to inherit the password from the parent cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "passwordInherit"))

    @password_inherit.setter
    def password_inherit(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1c2374bf7a2b6966efea82ba5ab9ccb5b97fd75286bbbdec0d2ae4a6b38d0eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passwordInherit", value)

    @builtins.property
    @jsii.member(jsii_name="periodType")
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Prepaid type, currently only supports Monthly (monthly subscription).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodType"))

    @period_type.setter
    def period_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2aae099b199c77372b0f5c889b3bfe6ec977d5b896e7c972795dba509db9bcd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b44c438bcda2fc6dbd0e06e81da3b153ec090dcb4bf7db254af652a3f3ea5f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User-defined script data, the original data is up to 16KB.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2de6d10d10ed53f2df3814ac7eb8954501e4b5f8c2c5d1cefe1c9248677312c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)

    @builtins.property
    @jsii.member(jsii_name="userDataInBase64")
    def user_data_in_base64(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userDataInBase64: The user data of the ECS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userDataInBase64"))

    @user_data_in_base64.setter
    def user_data_in_base64(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d73751147ef2769324e21c7a439c87bd5c85df8d87e85bb1372407503662526)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userDataInBase64", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.RosMyBaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "ecs_class_list": "ecsClassList",
        "engine": "engine",
        "pay_type": "payType",
        "period": "period",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "dedicated_host_group_description": "dedicatedHostGroupDescription",
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "ecs_deployment_set_id": "ecsDeploymentSetId",
        "ecs_host_name": "ecsHostName",
        "ecs_instance_name": "ecsInstanceName",
        "ecs_unique_suffix": "ecsUniqueSuffix",
        "image_id": "imageId",
        "internet_charge_type": "internetChargeType",
        "internet_max_bandwidth_out": "internetMaxBandwidthOut",
        "key_pair_name": "keyPairName",
        "os_password": "osPassword",
        "password_inherit": "passwordInherit",
        "period_type": "periodType",
        "resource_group_id": "resourceGroupId",
        "user_data": "userData",
        "user_data_in_base64": "userDataInBase64",
    },
)
class RosMyBaseProps:
    def __init__(
        self,
        *,
        ecs_class_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ecs_unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data_in_base64: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMyBase``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase

        :param ecs_class_list: 
        :param engine: 
        :param pay_type: 
        :param period: 
        :param security_group_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        :param auto_renew: 
        :param dedicated_host_group_description: 
        :param dedicated_host_group_id: 
        :param ecs_deployment_set_id: 
        :param ecs_host_name: 
        :param ecs_instance_name: 
        :param ecs_unique_suffix: 
        :param image_id: 
        :param internet_charge_type: 
        :param internet_max_bandwidth_out: 
        :param key_pair_name: 
        :param os_password: 
        :param password_inherit: 
        :param period_type: 
        :param resource_group_id: 
        :param user_data: 
        :param user_data_in_base64: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__faacceac6a3972efe1662789ae0b2bca4f1c32c1a433023dabe7f532b0d80f03)
            check_type(argname="argument ecs_class_list", value=ecs_class_list, expected_type=type_hints["ecs_class_list"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument dedicated_host_group_description", value=dedicated_host_group_description, expected_type=type_hints["dedicated_host_group_description"])
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument ecs_deployment_set_id", value=ecs_deployment_set_id, expected_type=type_hints["ecs_deployment_set_id"])
            check_type(argname="argument ecs_host_name", value=ecs_host_name, expected_type=type_hints["ecs_host_name"])
            check_type(argname="argument ecs_instance_name", value=ecs_instance_name, expected_type=type_hints["ecs_instance_name"])
            check_type(argname="argument ecs_unique_suffix", value=ecs_unique_suffix, expected_type=type_hints["ecs_unique_suffix"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument internet_max_bandwidth_out", value=internet_max_bandwidth_out, expected_type=type_hints["internet_max_bandwidth_out"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument os_password", value=os_password, expected_type=type_hints["os_password"])
            check_type(argname="argument password_inherit", value=password_inherit, expected_type=type_hints["password_inherit"])
            check_type(argname="argument period_type", value=period_type, expected_type=type_hints["period_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument user_data_in_base64", value=user_data_in_base64, expected_type=type_hints["user_data_in_base64"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "ecs_class_list": ecs_class_list,
            "engine": engine,
            "pay_type": pay_type,
            "period": period,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if dedicated_host_group_description is not None:
            self._values["dedicated_host_group_description"] = dedicated_host_group_description
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if ecs_deployment_set_id is not None:
            self._values["ecs_deployment_set_id"] = ecs_deployment_set_id
        if ecs_host_name is not None:
            self._values["ecs_host_name"] = ecs_host_name
        if ecs_instance_name is not None:
            self._values["ecs_instance_name"] = ecs_instance_name
        if ecs_unique_suffix is not None:
            self._values["ecs_unique_suffix"] = ecs_unique_suffix
        if image_id is not None:
            self._values["image_id"] = image_id
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if internet_max_bandwidth_out is not None:
            self._values["internet_max_bandwidth_out"] = internet_max_bandwidth_out
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if os_password is not None:
            self._values["os_password"] = os_password
        if password_inherit is not None:
            self._values["password_inherit"] = password_inherit
        if period_type is not None:
            self._values["period_type"] = period_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if user_data is not None:
            self._values["user_data"] = user_data
        if user_data_in_base64 is not None:
            self._values["user_data_in_base64"] = user_data_in_base64

    @builtins.property
    def ecs_class_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: ecsClassList: ECS Class List.
        '''
        result = self._values.get("ecs_class_list")
        assert result is not None, "Required property 'ecs_class_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Database type.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: payType: Payment type, currently only supports PrePaid.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: The period of the subscription in months.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The ID of the security group.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: Availability Zone ID.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to enable auto renew.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDescription: The name of the dedicated cluster.
        '''
        result = self._values.get("dedicated_host_group_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: The ID of the dedicated cluster.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_deployment_set_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsDeploymentSetId: The ID of the deployment set.
        '''
        result = self._values.get("ecs_deployment_set_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsHostName: The host name of the ECS instance.
        '''
        result = self._values.get("ecs_host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsInstanceName: The name of the ECS instance.
        '''
        result = self._values.get("ecs_instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ecs_unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ecsUniqueSuffix: The unique suffix of the ECS instance.
        '''
        result = self._values.get("ecs_unique_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: imageId: The image ID.
        '''
        result = self._values.get("image_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetChargeType: Network billing type. Value range:
        PayByBandwidth: billed based on fixed bandwidth.
        PayByTraffic: Pay by traffic usage.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_max_bandwidth_out(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second).
        Range is [0,200]. Default is 1.
        While the property is not 0, public ip will be assigned for instance.
        '''
        result = self._values.get("internet_max_bandwidth_out")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: The name of the key pair.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_inherit(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: passwordInherit: Whether to inherit the password from the parent cluster.
        '''
        result = self._values.get("password_inherit")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: periodType: Prepaid type, currently only supports Monthly (monthly subscription).
        '''
        result = self._values.get("period_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User-defined script data, the original data is up to 16KB.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data_in_base64(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userDataInBase64: The user data of the ECS instance.
        '''
        result = self._values.get("user_data_in_base64")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMyBaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DedicatedHost",
    "DedicatedHostGroup",
    "DedicatedHostGroupProps",
    "DedicatedHostProps",
    "MyBase",
    "MyBaseProps",
    "RosDedicatedHost",
    "RosDedicatedHostGroup",
    "RosDedicatedHostGroupProps",
    "RosDedicatedHostProps",
    "RosMyBase",
    "RosMyBaseProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__018ba11c308c91ba0194ff6646e12e822f0d66f57a5d14ffedce94d553526bea(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DedicatedHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__016fcfe172a7b887f2b548c2a72315b658a425f6b031e14cfa9930873e77e4de(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__877b232fe60f5aba2b16521a85998128fc03c8c6ff6f7fe4cf70ec300fbb551c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a174e74e77e8558ad4339ac533c86f1e7d881c713cc095a90f3ae313db2d8b62(
    value: DedicatedHostProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86e2ae5abfc1591c81a337887c113b0156442f382698317640e8ca265225ddb6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc0e8cd9c0e9e7bdfb036ce53eebc89989fbe288bd952c43363c670d7f804388(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DedicatedHostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b907d6f9bed4c45a024e1619c7c0b25cb27584792ab23fe17ce6e53dcb208010(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a61244305a6cb25b797f62bff419582e5d647affb8c6595004dc375d02a895(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db160e19635e2b75444ccf925b04db9b1c293fc25d5467767e19519253a28824(
    value: DedicatedHostGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01690de1747eb75bcbf72438070798914e0acc301f9a401cd2908dfa821df4c4(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99714a5ea14bb73e137d15ae0fa8559ddc8199d8f199c3c1963a00601cb23476(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocation_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_replace_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_permission: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__768a9d2335773fe10d2da8a40d0aa3a4e3db4c14b39b78e6c3c4beda186766cc(
    *,
    dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHost.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    used_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62b8c65d101fed047144a983220b76976f697f988ee22de07a7a4a9406fc98c9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MyBaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5957f77390750080d7ce95cfedef6cda4e82a2180c3f0121ff4cb0fc47cd690(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cf9a9bfdf5e61272c9b0718cf497e9e7ad35f3e0b858bda82ccac344a25ffbe8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0bc43a320f4f54d6d8e5e8377d9fc05e6d1f14865f072ae86341c2cfd9b597c(
    value: MyBaseProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5fe8ec2e88af46d031642b04b7ccbe509e585cf510ed4f7dfb30dc3faf366c0(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__786176d355eef11eed8e52f88d6b31f428dbce05145aa9191fac9985457eec34(
    *,
    ecs_class_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data_in_base64: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67ebee5527098728a50a9dcdbbbabc8f42edec001b4a64436fd4577a10c87e60(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cac07586de7b13b59d01c1a3f42ad996f41ec79d6ae31e642ce95f922caef9d4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1316908c50b9f2d4870c3015fa96db3f0ea02c9fdd87c47e782ce71fd864a1bc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b5575cfffcc5e8f401505956a651fc2418064bac391991df86b8f106ff77bb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c6060cff897d13d9178a46bf1f17fb0d08ce1df07a3bf007e910ce197c7d2be(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aa2d15d06f01e7ac30ea99fe7351962b853cc73543c4dd57581e030d6e3233e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e20a8b907ac4fec1577f6eef8d8be2f11960b2caab20320d4c0b18ece4c8a0f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91fe63daf207636e0c571fe6aa33ddba34992a8cd9e048aa7b6bd06ae01ddc2b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41ed9d127f5b25ae05a7b26d45dafbbffd172df6a3e1d4195eb47933f14ac68b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91feda79df0c120761072fc0dff54d71c61d838a1e0e018ffe8f27ae3ac51e6e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d17d63f1adc6f1ed96719cdfbaddad9789f4daf12d01fdfa269df40d49896c59(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e0364689c1320244f85be1449054709487f113171d00d1db0da893d0681197a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__446d9cedeb4b0dbf3a00873c58eabff77686f24dcaa58e62d7438a40fbda1897(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f3a72b7231def0b13ee7d88c60544aa6e31682826fbc3acceed4f54f4a6c8fe(
    value: typing.Optional[typing.List[RosDedicatedHost.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cc3d56a2ba8560e83fe92cc1553a2b286125a737fea01fd6f8c0a7093b1ddb2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae740ce77364fb6628c8c04fbad61f6a82ed81cad77db6866934fdfcf04c7c05(
    *,
    tag_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aabe5e0643a091fc5a4ac5f5536dfc0932e422591b56facc1f3ed374dd6d4c7f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b2bef8ae361e2bfa45493e0d2daa9d699e561953a980b3a49554c394325d1ac(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d928246ee9d2f5c9708abfb40990d29a3eb89b8f9613deb8b1adf71b64403b97(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3dadbe1a6364d7a6a568ac92a547dd363fa2c2ebe9354dead03f418e06400ea2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da2d4cd9c2110d8615acb57f6cbd8865fdcbc825d2dcdbf118bf2c03a54b4747(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69387199bfbe0bebf6118ca18cebd92f8fde445a4901e56939860ae5235dfb08(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deacdc9c99a2acc908b3ecd60888a4b1306cbf5cad220b9a59a14385427c2ad5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67330b0975cfafe533795b6ca8936291e2bd906156d08293dc77614f79120e2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b0e5f5429546f8b105c9f34873ef19e32d8a9e15560e86b21852d783a075693(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d48766aa68b005b071c2afa8323015a65c26bd858f286f927061e6bd87f5460f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0670e626c561ca15fbde130444cf60f8761366633e8e30152c1343b350579d31(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf68ee75a864584dc08637054d0b2dbb003def08f983665aceb9414765d89358(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2efc1492bd89c80864f595c7339ab3f2c53e5ecdcc851b1f480341531915dd8(
    *,
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allocation_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_replace_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_permission: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abb6b287a14b36135672b8f7379723e2d643421aea19bad7aea7f4654a2246c9(
    *,
    dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    host_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDedicatedHost.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    used_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7331750d1a5a7430cd54bbd8124a22f13184329ce7218b2a591fbcb46567d1fb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMyBaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__404ab2b78140ff03a4a02cb513e18f1131bdcf82d4fbcce0953bc2f9b7a9caaa(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b08958f38f1fb0e2a536c030ecb259c456ee8f7811db02a8fcce6a5498d49ccf(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb05b74547a42a124b29210921c4c60cc3a81461f9dbbe8f6a41a06b0b161d3b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90eccc3ca77ba50dbf83c7b972ab19cef798083bdbde77248fa1b1001e84bc96(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd7a93dedf0ca52c708c7f3f51ba881abad1766ffca0bd00068b8fe4ed3d34da(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ac42c70fecb1feb547e7122bd4b2eb3666c951d5f5b1bb016c59b46cf766c22(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8be28962fbf09f6347f9a8ecd8d4877a922ea52aaeb3a879abf821707f5cac53(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fac57bd8a7d672e72dad359ca08de8cf488911cad00e1fc18a62a27c012e82a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1609a416fab71fe295e79ce6d90b903381ad061605dec149eda59fe3a949f3aa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ea75ab776b573edb34669fdde56eba6607bd7d48d6a625187185c6bbbeaa9f6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56d4065ac7b5934753128a63cbd0eae3466a46f4476c843e9c741faa88e3a483(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f782fb5b8b2c0c0a55ec2bda521d21a1f4d5bf29ac5bbfa34f824c457f8f3fc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f32dc320fca15a1acb471d750790701bba89f236e7b038bc7057a2a2c493009a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f628f98b6f9994a4bff919162f41f630a3b31190f0c77157ff78315387f348b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8c3ac1689973d73a28455a46afc857098127183b20277f4b3f4a40397fdb0b3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95a686eafe83d4d3390fa7593f37b9f20e8b787e3cefe3c2425560db0062a5ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6eb9d5c361363d7cc5fb04a5405160ac2f0c039989079b9fb3e64a689823f1c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca0cf8d6904f5f25e8c58732325755cd075a9c650c7b58afb43730e1a51bfd17(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35e4dd97d631ca8f39cfae752dd0956248a23eec163f9f780a3fdf9d20a3227e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ee35423c07c2d2e62f7db7d9b726ee6a4530e80d3a3fda716eacfc67b8fbe55(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb6671a91cb827258a54261fe2286a787413658b9817b745b336f6f61b528997(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58d556bf587f0e3e0c376974afed128f988d8ed55d70e8529e3f22962e0cf9ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1c2374bf7a2b6966efea82ba5ab9ccb5b97fd75286bbbdec0d2ae4a6b38d0eb(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2aae099b199c77372b0f5c889b3bfe6ec977d5b896e7c972795dba509db9bcd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b44c438bcda2fc6dbd0e06e81da3b153ec090dcb4bf7db254af652a3f3ea5f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2de6d10d10ed53f2df3814ac7eb8954501e4b5f8c2c5d1cefe1c9248677312c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d73751147ef2769324e21c7a439c87bd5c85df8d87e85bb1372407503662526(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__faacceac6a3972efe1662789ae0b2bca4f1c32c1a433023dabe7f532b0d80f03(
    *,
    ecs_class_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Mapping[builtins.str, typing.Any]]],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_deployment_set_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ecs_unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    image_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_max_bandwidth_out: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    os_password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_inherit: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data_in_base64: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
