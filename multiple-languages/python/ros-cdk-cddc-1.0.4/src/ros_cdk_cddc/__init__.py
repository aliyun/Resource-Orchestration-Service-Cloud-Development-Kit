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

from ._jsii import *

import ros_cdk_core


class DedicatedHost(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHost",
):
    '''A ROS resource type:  ``ALIYUN::CDDC::DedicatedHost``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DedicatedHostProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CDDC::DedicatedHost``.

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
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> ros_cdk_core.IResolvable:
        '''Attribute AutoRenew: Whether Auto Renew.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute CpuAllocationRatio: CPU Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuUsed")
    def attr_cpu_used(self) -> ros_cdk_core.IResolvable:
        '''Attribute CpuUsed: CPU Used.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostId")
    def attr_dedicated_host_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DedicatedHostId: The first ID of the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEcsClassCode")
    def attr_ecs_class_code(self) -> ros_cdk_core.IResolvable:
        '''Attribute EcsClassCode: ECS Class Code.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEcsClassCode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostClass")
    def attr_host_class(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostClass: Host Class.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostCpu")
    def attr_host_cpu(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostCpu: Host CPU.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostCpu"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostMem")
    def attr_host_mem(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostMem: Host Memory.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostMem"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostName: Host Name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostStorage")
    def attr_host_storage(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostStorage: Host Storage.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostStorage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostType")
    def attr_host_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostType: Host Storage Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> ros_cdk_core.IResolvable:
        '''Attribute ImageCategory: Host Image Category.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpAddress: Host IP Address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemoryUsed")
    def attr_memory_used(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemoryUsed: Host Memory Used.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemoryUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> ros_cdk_core.IResolvable:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PaymentType: Payment Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStorageUsed")
    def attr_storage_used(self) -> ros_cdk_core.IResolvable:
        '''Attribute StorageUsed: Storage Used.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStorageUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: VSwitch ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: Zone ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


class DedicatedHostGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.DedicatedHostGroup",
):
    '''A ROS resource type:  ``ALIYUN::CDDC::DedicatedHostGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DedicatedHostGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CDDC::DedicatedHostGroup``.

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
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllocationPolicy: Allocation Policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationPolicy"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BastionInstanceId: BastionInstanceId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBastionInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''Attribute CpuAllocatedAmount: CpuAllocatedAmount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''Attribute CpuAllocateRation: CpuAllocateRation.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute CpuAllocationRatio: Cpu Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(self) -> ros_cdk_core.IResolvable:
        '''Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute DeployType: DeployType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeployType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskAllocatedAmount: DiskAllocatedAmount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskAllocateRation: DiskAllocateRation.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskUsedAmount: DiskUsedAmount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(self) -> ros_cdk_core.IResolvable:
        '''Attribute DiskUtility: DiskUtility.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskUtility"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> ros_cdk_core.IResolvable:
        '''Attribute Engine: Database Engine Type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostNumber: Total Host Number.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostNumber"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(self) -> ros_cdk_core.IResolvable:
        '''Attribute HostReplacePolicy: Host Replace Policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceNumber: Total Instance Number.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceNumber"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemAllocatedAmount: MemAllocatedAmount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemAllocateRation: MemAllocateRation.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemUsedAmount: MemUsedAmount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemUsedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(self) -> ros_cdk_core.IResolvable:
        '''Attribute MemUtility: MemUtility.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemUtility"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> ros_cdk_core.IResolvable:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrText")
    def attr_text(self) -> ros_cdk_core.IResolvable:
        '''Attribute Text: Text.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrText"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))


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
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocation_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        host_replace_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        open_permission: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CDDC::DedicatedHostGroup``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property engine: Database Engine Type.'''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property allocationPolicy: Allocation Policy.'''
        result = self._values.get("allocation_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property cpuAllocationRatio: Cpu Allocation Ratio.'''
        result = self._values.get("cpu_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dedicatedHostGroupDesc: Dedicated Host Group Description.'''
        result = self._values.get("dedicated_host_group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property diskAllocationRatio: Disk Allocation Ratio.'''
        result = self._values.get("disk_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property hostReplacePolicy: Host Replace Policy.'''
        result = self._values.get("host_replace_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property memAllocationRatio: Memory Allocation Ratio.'''
        result = self._values.get("mem_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property openPermission: Whether Open OS Permission.'''
        result = self._values.get("open_permission")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        dedicated_host_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        payment_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        image_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosDedicatedHost.TagsProperty"]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CDDC::DedicatedHost``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dedicatedHostGroupId: Dedicated Host Group ID.'''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property hostClass: Host Class.'''
        result = self._values.get("host_class")
        assert result is not None, "Required property 'host_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property paymentType: Payment Type.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: VSwitch ID.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: Zone ID.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Whether Auto Renew.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property hostName: Host Name.'''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property imageCategory: Host Image Category.'''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property osPassword:.'''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property period:.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]]:
        '''Property tags: The tag of the resource.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDedicatedHost.TagsProperty"]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property usedTime:.'''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHost(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHost",
):
    '''A ROS template type:  ``ALIYUN::CDDC::DedicatedHost``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDedicatedHostProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CDDC::DedicatedHost``.

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
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AutoRenew: Whether Auto Renew
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CpuAllocationRatio: CPU Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuUsed")
    def attr_cpu_used(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CpuUsed: CPU Used
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostId")
    def attr_dedicated_host_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DedicatedHostId: The first ID of the resource
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEcsClassCode")
    def attr_ecs_class_code(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EcsClassCode: ECS Class Code
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEcsClassCode"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostClass")
    def attr_host_class(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostClass: Host Class
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostClass"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostCpu")
    def attr_host_cpu(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostCpu: Host CPU
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostCpu"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostMem")
    def attr_host_mem(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostMem: Host Memory
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostMem"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostName: Host Name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostStorage")
    def attr_host_storage(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostStorage: Host Storage
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostStorage"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostType")
    def attr_host_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostType: Host Storage Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrImageCategory")
    def attr_image_category(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ImageCategory: Host Image Category
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrImageCategory"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpAddress: Host IP Address
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemoryUsed")
    def attr_memory_used(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemoryUsed: Host Memory Used
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemoryUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OpenPermission: Whether Open OS Permission
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PaymentType: Payment Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStorageUsed")
    def attr_storage_used(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: StorageUsed: Storage Used
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStorageUsed"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: VPC ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitch ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: Zone ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostClass")
    def host_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostClass: Host Class
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "hostClass"))

    @host_class.setter
    def host_class(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "hostClass", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="paymentType")
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: paymentType: Payment Type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "paymentType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Whether Auto Renew
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: hostName: Host Name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "hostName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="imageCategory")
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageCategory: Host Image Category
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "imageCategory"))

    @image_category.setter
    def image_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "imageCategory", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="osPassword")
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: osPassword:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "osPassword"))

    @os_password.setter
    def os_password(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "osPassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: usedTime:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            tag_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            tag_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param tag_key: 
            :param tag_value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if tag_key is not None:
                self._values["tag_key"] = tag_key
            if tag_value is not None:
                self._values["tag_value"] = tag_value

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: tagKey: The key of the tags
            '''
            result = self._values.get("tag_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tag_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: tagValue: The value of the tags
            '''
            result = self._values.get("tag_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDedicatedHostGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.RosDedicatedHostGroup",
):
    '''A ROS template type:  ``ALIYUN::CDDC::DedicatedHostGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDedicatedHostGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CDDC::DedicatedHostGroup``.

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
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllocationPolicy: Allocation Policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationPolicy"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BastionInstanceId: BastionInstanceId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBastionInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CpuAllocatedAmount: CpuAllocatedAmount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CpuAllocateRation: CpuAllocateRation
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CpuAllocationRatio: Cpu Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: Dedicated Host Group ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DeployType: DeployType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDeployType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskAllocatedAmount: DiskAllocatedAmount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskAllocateRation: DiskAllocateRation
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskUsedAmount: DiskUsedAmount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DiskUtility: DiskUtility
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDiskUtility"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Engine: Database Engine Type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostNumber: Total Host Number
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostNumber"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HostReplacePolicy: Host Replace Policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceNumber: Total Instance Number
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceNumber"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemAllocatedAmount: MemAllocatedAmount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemAllocateRation: MemAllocateRation
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocateRation"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemUsedAmount: MemUsedAmount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemUsedAmount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MemUtility: MemUtility
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMemUtility"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OpenPermission: Whether Open OS Permission
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrText")
    def attr_text(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Text: Text
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrText"))

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
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database Engine Type
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "engine", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allocationPolicy")
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocationPolicy: Allocation Policy
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "allocationPolicy"))

    @allocation_policy.setter
    def allocation_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allocationPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cpuAllocationRatio")
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: cpuAllocationRatio: Cpu Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "cpuAllocationRatio"))

    @cpu_allocation_ratio.setter
    def cpu_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cpuAllocationRatio", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dedicatedHostGroupDesc")
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dedicatedHostGroupDesc"))

    @dedicated_host_group_desc.setter
    def dedicated_host_group_desc(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dedicatedHostGroupDesc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskAllocationRatio")
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskAllocationRatio: Disk Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "diskAllocationRatio"))

    @disk_allocation_ratio.setter
    def disk_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "diskAllocationRatio", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="hostReplacePolicy")
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: hostReplacePolicy: Host Replace Policy
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "hostReplacePolicy"))

    @host_replace_policy.setter
    def host_replace_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "hostReplacePolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="memAllocationRatio")
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: memAllocationRatio: Memory Allocation Ratio
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "memAllocationRatio"))

    @mem_allocation_ratio.setter
    def mem_allocation_ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "memAllocationRatio", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="openPermission")
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: openPermission: Whether Open OS Permission
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "openPermission"))

    @open_permission.setter
    def open_permission(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        engine: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        allocation_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        cpu_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        dedicated_host_group_desc: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        disk_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        host_replace_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        mem_allocation_ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        open_permission: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CDDC::DedicatedHostGroup``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    def engine(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: engine: Database Engine Type
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
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
    def allocation_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: allocationPolicy: Allocation Policy
        '''
        result = self._values.get("allocation_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def cpu_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: cpuAllocationRatio: Cpu Allocation Ratio
        '''
        result = self._values.get("cpu_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dedicated_host_group_desc(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: dedicatedHostGroupDesc: Dedicated Host Group Description
        '''
        result = self._values.get("dedicated_host_group_desc")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def disk_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: diskAllocationRatio: Disk Allocation Ratio
        '''
        result = self._values.get("disk_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_replace_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: hostReplacePolicy: Host Replace Policy
        '''
        result = self._values.get("host_replace_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def mem_allocation_ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: memAllocationRatio: Memory Allocation Ratio
        '''
        result = self._values.get("mem_allocation_ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_permission(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: openPermission: Whether Open OS Permission
        '''
        result = self._values.get("open_permission")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        dedicated_host_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        host_class: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        payment_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        image_category: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        os_password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosDedicatedHost.TagsProperty]] = None,
        used_time: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CDDC::DedicatedHost``.

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
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID
        '''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def host_class(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: hostClass: Host Class
        '''
        result = self._values.get("host_class")
        assert result is not None, "Required property 'host_class' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def payment_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: paymentType: Payment Type
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: VSwitch ID
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone ID
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Whether Auto Renew
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: hostName: Host Name
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def image_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: imageCategory: Host Image Category
        '''
        result = self._values.get("image_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def os_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: osPassword:
        '''
        result = self._values.get("os_password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period:
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: usedTime:
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "DedicatedHost",
    "DedicatedHostGroup",
    "DedicatedHostGroupProps",
    "DedicatedHostProps",
    "RosDedicatedHost",
    "RosDedicatedHostGroup",
    "RosDedicatedHostGroupProps",
    "RosDedicatedHostProps",
]

publication.publish()
