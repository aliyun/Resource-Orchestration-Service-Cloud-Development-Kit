import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "refresh_options": "refreshOptions",
    },
)
class DedicatedHostGroupProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedHostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup

        :param dedicated_host_group_id: Property dedicatedHostGroupId: Dedicated Host Group ID.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c746a32017ffa1e233a3f72fd5fce5c4735c591b100be86aa6ff1f45d0728b1)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dedicated_host_group_id": dedicated_host_group_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dedicatedHostGroupId: Dedicated Host Group ID.'''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
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
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "engine": "engine",
        "refresh_options": "refreshOptions",
    },
)
class DedicatedHostGroupsProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``DedicatedHostGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups

        :param dedicated_host_group_id: Property dedicatedHostGroupId: Dedicated Host Group ID.
        :param engine: Property engine: Database Engine Type.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__758c461525466b5fc446f6a9a50ce817c95b94b6f357b80c3c6a67d90d037f7d)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if engine is not None:
            self._values["engine"] = engine
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedHostGroupId: Dedicated Host Group ID.'''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property engine: Database Engine Type.'''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DedicatedHostGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroup")
class IDedicatedHostGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DedicatedHostGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllocationPolicy: Allocation Policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BastionInstanceId: BastionInstanceId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The dedicated cluster family to which the host belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocatedAmount: CpuAllocatedAmount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocateRation: CpuAllocateRation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocationRatio: Cpu Allocation Ratio.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create Time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostCountGroupByHostType")
    def attr_dedicated_host_count_group_by_host_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeployType: DeployType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocatedAmount: DiskAllocatedAmount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocateRation: DiskAllocateRation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUsedAmount: DiskUsedAmount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUtility: DiskUtility.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Database Engine Type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostNumber: Total Host Number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostReplacePolicy: Host Replace Policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNumber: Total Instance Number.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocatedAmount: MemAllocatedAmount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocateRation: MemAllocateRation.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUsedAmount: MemUsedAmount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUtility: MemUtility.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Text: Text.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrZoneIdList")
    def attr_zone_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIdList: ZoneIDList.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupProps:
        ...


class _IDedicatedHostGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DedicatedHostGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroup"

    @builtins.property
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllocationPolicy: Allocation Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAllocationPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BastionInstanceId: BastionInstanceId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBastionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The dedicated cluster family to which the host belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocatedAmount: CpuAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocateRation: CpuAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocationRatio: Cpu Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create Time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostCountGroupByHostType")
    def attr_dedicated_host_count_group_by_host_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostCountGroupByHostType"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeployType: DeployType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeployType"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocatedAmount: DiskAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocateRation: DiskAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUsedAmount: DiskUsedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUtility: DiskUtility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Database Engine Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostNumber: Total Host Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostReplacePolicy: Host Replace Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNumber: Total Instance Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocatedAmount: MemAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocateRation: MemAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUsedAmount: MemUsedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUtility: MemUtility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Text: Text.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrText"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIdList")
    def attr_zone_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIdList: ZoneIDList.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneIdList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupProps:
        return typing.cast(DedicatedHostGroupProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDedicatedHostGroup).__jsii_proxy_class__ = lambda : _IDedicatedHostGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroups")
class IDedicatedHostGroups(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DedicatedHostGroups``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroups: The list of dedicated host groups.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupsProps:
        ...


class _IDedicatedHostGroupsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DedicatedHostGroups``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cddc.datasource.IDedicatedHostGroups"

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroups: The list of dedicated host groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupsProps:
        return typing.cast(DedicatedHostGroupsProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDedicatedHostGroups).__jsii_proxy_class__ = lambda : _IDedicatedHostGroupsProxy


class RosDedicatedHostGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedHostGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
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
            type_hints = typing.get_type_hints(_typecheckingstub__c640b531dbb3530c0ba5f40588e0b137c2a8b866c352a09103433270a0ec4b98)
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
            type_hints = typing.get_type_hints(_typecheckingstub__efba8d86e5601e32a00b025ab9828a95a3db69d027c93733de3ecfb4f882428d)
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
        :Attribute: AllocationPolicy: Allocation Policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllocationPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BastionInstanceId: BastionInstanceId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBastionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Category: The dedicated cluster family to which the host belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocatedAmount: CpuAllocatedAmount.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocateRation: CpuAllocateRation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CpuAllocationRatio: Cpu Allocation Ratio.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Create Time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostCountGroupByHostType")
    def attr_dedicated_host_count_group_by_host_type(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostCountGroupByHostType"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupDesc: Dedicated Host Group Description.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupId: Dedicated Host Group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeployType: DeployType.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeployType"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocatedAmount: DiskAllocatedAmount.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocateRation: DiskAllocateRation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskAllocationRatio: Disk Allocation Ratio.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskUsedAmount: DiskUsedAmount.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DiskUtility: DiskUtility.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDiskUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Engine: Database Engine Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostNumber: Total Host Number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostReplacePolicy: Host Replace Policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceNumber: Total Instance Number.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocatedAmount: MemAllocatedAmount.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocateRation: MemAllocateRation.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemAllocationRatio: Memory Allocation Ratio.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemUsedAmount: MemUsedAmount.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MemUtility: MemUtility.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMemUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OpenPermission: Whether Open OS Permission.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Text: Text.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrText"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: VPC ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIdList")
    def attr_zone_id_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZoneIdList: ZoneIDList.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZoneIdList"))

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
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9f075b868e90fefa652d59c51b1ed97f74e4353226938a358e2ff582bf039ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5dcbe0af0c64bb74e6f08769848647730940c9d626fda1b9093d6b09733849d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0385799b0756b57ea0f069258a6f19a831814735234430f312cb29d7d5c611b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "refresh_options": "refreshOptions",
    },
)
class RosDedicatedHostGroupProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedHostGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup

        :param dedicated_host_group_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a4a2af96d6c5f4a7973f7e9dd291ef331a2d2a36b08488152663e14b8d5059d)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "dedicated_host_group_id": dedicated_host_group_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        result = self._values.get("dedicated_host_group_id")
        assert result is not None, "Required property 'dedicated_host_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDedicatedHostGroups(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroups",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroups``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DedicatedHostGroups`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDedicatedHostGroupsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__383555982d785d2ee7c6b776136266f139f83fe32c9645e2ae82595df0eb03ee)
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
            type_hints = typing.get_type_hints(_typecheckingstub__40fcc884ed3ba27da5b39f8e0414f316ce5eea838131d0ac137b307ee83eb209)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroupIds: The list of dedicated host group IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DedicatedHostGroups: The list of dedicated host groups.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedicatedHostGroups"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__88cf79842fec51c21e191e56c085589e19e876073f6247633b133c887bd63916)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedHostGroupId")
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedHostGroupId"))

    @dedicated_host_group_id.setter
    def dedicated_host_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3316a202639af10e03bb7c787bdbedac3b8d15ecb0f93c61086b3186fd317f3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedHostGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: Database Engine Type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b1dc1bc1b27e5d6113fcb299ebc9a47cc5e12be5d8cd742874694f53a5b1eab5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66f0a2e09663a410078dd9f4d67a34f2c4f58ca0942e0b82e8031d3f6b149c3a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupsProps",
    jsii_struct_bases=[],
    name_mapping={
        "dedicated_host_group_id": "dedicatedHostGroupId",
        "engine": "engine",
        "refresh_options": "refreshOptions",
    },
)
class RosDedicatedHostGroupsProps:
    def __init__(
        self,
        *,
        dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosDedicatedHostGroups``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups

        :param dedicated_host_group_id: 
        :param engine: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b80fff2bd1114d64a80513bf5e7ab8d2dd07a9aa7f203cb42301db7fcc211448)
            check_type(argname="argument dedicated_host_group_id", value=dedicated_host_group_id, expected_type=type_hints["dedicated_host_group_id"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if dedicated_host_group_id is not None:
            self._values["dedicated_host_group_id"] = dedicated_host_group_id
        if engine is not None:
            self._values["engine"] = engine
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def dedicated_host_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedHostGroupId: Dedicated Host Group ID.
        '''
        result = self._values.get("dedicated_host_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def engine(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: engine: Database Engine Type.
        '''
        result = self._values.get("engine")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDedicatedHostGroupsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IDedicatedHostGroup)
class DedicatedHostGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroup",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedHostGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DedicatedHostGroupProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3649e170d12b2e36edbbb65500eee3a2e314ef8bb64e77b8ddaa1c7b593ad141)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAllocationPolicy")
    def attr_allocation_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AllocationPolicy: Allocation Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAllocationPolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrBastionInstanceId")
    def attr_bastion_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BastionInstanceId: BastionInstanceId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBastionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrCategory")
    def attr_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Category: The dedicated cluster family to which the host belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCategory"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocatedAmount")
    def attr_cpu_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocatedAmount: CpuAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocateRation")
    def attr_cpu_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocateRation: CpuAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrCpuAllocationRatio")
    def attr_cpu_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CpuAllocationRatio: Cpu Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCpuAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create Time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostCountGroupByHostType")
    def attr_dedicated_host_count_group_by_host_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostCountGroupByHostType"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupDesc")
    def attr_dedicated_host_group_desc(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupDesc"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupId")
    def attr_dedicated_host_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupId: Dedicated Host Group ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeployType")
    def attr_deploy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeployType: DeployType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeployType"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocatedAmount")
    def attr_disk_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocatedAmount: DiskAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocateRation")
    def attr_disk_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocateRation: DiskAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskAllocationRatio")
    def attr_disk_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskAllocationRatio: Disk Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUsedAmount")
    def attr_disk_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUsedAmount: DiskUsedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrDiskUtility")
    def attr_disk_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DiskUtility: DiskUtility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDiskUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrEngine")
    def attr_engine(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Engine: Database Engine Type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEngine"))

    @builtins.property
    @jsii.member(jsii_name="attrHostNumber")
    def attr_host_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostNumber: Total Host Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrHostReplacePolicy")
    def attr_host_replace_policy(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HostReplacePolicy: Host Replace Policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHostReplacePolicy"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceNumber")
    def attr_instance_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceNumber: Total Instance Number.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocatedAmount")
    def attr_mem_allocated_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocatedAmount: MemAllocatedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocatedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocateRation")
    def attr_mem_allocate_ration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocateRation: MemAllocateRation.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocateRation"))

    @builtins.property
    @jsii.member(jsii_name="attrMemAllocationRatio")
    def attr_mem_allocation_ratio(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemAllocationRatio: Memory Allocation Ratio.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemAllocationRatio"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUsedAmount")
    def attr_mem_used_amount(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUsedAmount: MemUsedAmount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemUsedAmount"))

    @builtins.property
    @jsii.member(jsii_name="attrMemUtility")
    def attr_mem_utility(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MemUtility: MemUtility.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMemUtility"))

    @builtins.property
    @jsii.member(jsii_name="attrOpenPermission")
    def attr_open_permission(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OpenPermission: Whether Open OS Permission.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOpenPermission"))

    @builtins.property
    @jsii.member(jsii_name="attrText")
    def attr_text(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Text: Text.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrText"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcId: VPC ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrZoneIdList")
    def attr_zone_id_list(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ZoneIdList: ZoneIDList.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrZoneIdList"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupProps:
        return typing.cast(DedicatedHostGroupProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7880b22e802c16ad22015c94075cba8402b3c2c87bf659317641d5f02a85057c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b8bd6878527336801d955348943d0e9ca06e04a5b662ac810f2e3cbaaab32a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d4928f03de5e1a689f3a0719df23ab6c6165c2e3d56cbbd3b078995cadfbc36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDedicatedHostGroups)
class DedicatedHostGroups(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroups",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::CDDC::DedicatedHostGroups``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDedicatedHostGroups``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[DedicatedHostGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd8a5d9027f5e849723c41ab45966c72bea2d216d92a6742c4fc5330c04a9c4d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroupIds")
    def attr_dedicated_host_group_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroupIds"))

    @builtins.property
    @jsii.member(jsii_name="attrDedicatedHostGroups")
    def attr_dedicated_host_groups(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DedicatedHostGroups: The list of dedicated host groups.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedicatedHostGroups"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DedicatedHostGroupsProps:
        return typing.cast(DedicatedHostGroupsProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39aacd6e2fdb187ad7840216c53b0dd32e426cf5238902fe795ea81b620c3a1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d72cc38cffa71a4e218b5b284853e80fee10b81ced1a3bc26cef55f19021e96)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c59af67a74301cb5945a7a9f5310ceb712fd06bc52d4f729e578b61f30ff3ba8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "DedicatedHostGroup",
    "DedicatedHostGroupProps",
    "DedicatedHostGroups",
    "DedicatedHostGroupsProps",
    "IDedicatedHostGroup",
    "IDedicatedHostGroups",
    "RosDedicatedHostGroup",
    "RosDedicatedHostGroupProps",
    "RosDedicatedHostGroups",
    "RosDedicatedHostGroupsProps",
]

publication.publish()

def _typecheckingstub__4c746a32017ffa1e233a3f72fd5fce5c4735c591b100be86aa6ff1f45d0728b1(
    *,
    dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__758c461525466b5fc446f6a9a50ce817c95b94b6f357b80c3c6a67d90d037f7d(
    *,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c640b531dbb3530c0ba5f40588e0b137c2a8b866c352a09103433270a0ec4b98(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efba8d86e5601e32a00b025ab9828a95a3db69d027c93733de3ecfb4f882428d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9f075b868e90fefa652d59c51b1ed97f74e4353226938a358e2ff582bf039ae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5dcbe0af0c64bb74e6f08769848647730940c9d626fda1b9093d6b09733849d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0385799b0756b57ea0f069258a6f19a831814735234430f312cb29d7d5c611b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a4a2af96d6c5f4a7973f7e9dd291ef331a2d2a36b08488152663e14b8d5059d(
    *,
    dedicated_host_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__383555982d785d2ee7c6b776136266f139f83fe32c9645e2ae82595df0eb03ee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDedicatedHostGroupsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40fcc884ed3ba27da5b39f8e0414f316ce5eea838131d0ac137b307ee83eb209(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88cf79842fec51c21e191e56c085589e19e876073f6247633b133c887bd63916(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3316a202639af10e03bb7c787bdbedac3b8d15ecb0f93c61086b3186fd317f3d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1dc1bc1b27e5d6113fcb299ebc9a47cc5e12be5d8cd742874694f53a5b1eab5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66f0a2e09663a410078dd9f4d67a34f2c4f58ca0942e0b82e8031d3f6b149c3a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b80fff2bd1114d64a80513bf5e7ab8d2dd07a9aa7f203cb42301db7fcc211448(
    *,
    dedicated_host_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3649e170d12b2e36edbbb65500eee3a2e314ef8bb64e77b8ddaa1c7b593ad141(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DedicatedHostGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7880b22e802c16ad22015c94075cba8402b3c2c87bf659317641d5f02a85057c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b8bd6878527336801d955348943d0e9ca06e04a5b662ac810f2e3cbaaab32a2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d4928f03de5e1a689f3a0719df23ab6c6165c2e3d56cbbd3b078995cadfbc36(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd8a5d9027f5e849723c41ab45966c72bea2d216d92a6742c4fc5330c04a9c4d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[DedicatedHostGroupsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39aacd6e2fdb187ad7840216c53b0dd32e426cf5238902fe795ea81b620c3a1d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d72cc38cffa71a4e218b5b284853e80fee10b81ced1a3bc26cef55f19021e96(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c59af67a74301cb5945a7a9f5310ceb712fd06bc52d4f729e578b61f30ff3ba8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
