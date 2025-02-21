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
    jsii_type="@alicloud/ros-cdk-dbs.datasource.BackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "refresh_options": "refreshOptions",
    },
)
class BackupPlanProps:
    def __init__(
        self,
        *,
        backup_plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan

        :param backup_plan_id: Property backupPlanId: The ID of the backup plan.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eefb16152faaa9284d55e6c205d06c0e3be46f5aa7d9da05d4c5539bcb9fcd32)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_plan_id": backup_plan_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property backupPlanId: The ID of the backup plan.'''
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
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
        return "BackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dbs.datasource.BackupPlansProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "backup_plan_name": "backupPlanName",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class BackupPlansProps:
    def __init__(
        self,
        *,
        backup_plan_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_plan_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``BackupPlans``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans

        :param backup_plan_id: Property backupPlanId: The ID of the backup schedule.
        :param backup_plan_name: Property backupPlanName: The name of the backup schedule.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc185b35b464b66e7862464bf5d2087bedb399e166719b478b258df08e0c8844)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument backup_plan_name", value=backup_plan_name, expected_type=type_hints["backup_plan_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if backup_plan_id is not None:
            self._values["backup_plan_id"] = backup_plan_id
        if backup_plan_name is not None:
            self._values["backup_plan_name"] = backup_plan_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def backup_plan_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupPlanId: The ID of the backup schedule.'''
        result = self._values.get("backup_plan_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_plan_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backupPlanName: The name of the backup schedule.'''
        result = self._values.get("backup_plan_name")
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

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackupPlansProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-dbs.datasource.IBackupPlan")
class IBackupPlan(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``BackupPlan``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupGatewayId")
    def attr_backup_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupGatewayId: The ID of the backup gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupMethod")
    def attr_backup_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupMethod: Backup method.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupObjects")
    def attr_backup_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupObjects: The backup object.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupPeriod")
    def attr_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPeriod: Full backup cycle.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanId")
    def attr_backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanId: The ID of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanName")
    def attr_backup_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanName: The name of the backup plan.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention time of backup data.

        Valid values: 0 to 1825. Default value: 730 days.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupStartTime")
    def attr_backup_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStartTime: The start time of full Backup.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupStorageType")
    def attr_backup_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStorageType: Built-in storage type:.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup plans.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCrossAliyunId")
    def attr_cross_aliyun_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCrossRoleName")
    def attr_cross_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseType")
    def attr_database_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseType: Database type.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationArchivePeriod")
    def attr_duplication_archive_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationInfrequentAccessPeriod")
    def attr_duplication_infrequent_access_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.

        The default time is 180 days.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Whether to enable incremental log Backup.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClass: Instance class.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrOssBucketName")
    def attr_oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OssBucketName: OSS Bucket name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointDatabaseName")
    def attr_source_endpoint_database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointDatabaseName: The name of the database.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceId")
    def attr_source_endpoint_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceId: The ID of the database instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceType")
    def attr_source_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceType: The location of the database.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointRegion")
    def attr_source_endpoint_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointRegion: The region of the database.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointSid")
    def attr_source_endpoint_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointSid: Oracle SID name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointUserName")
    def attr_source_endpoint_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointUserName: Database account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlanProps:
        ...


class _IBackupPlanProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BackupPlan``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dbs.datasource.IBackupPlan"

    @builtins.property
    @jsii.member(jsii_name="attrBackupGatewayId")
    def attr_backup_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupGatewayId: The ID of the backup gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupMethod")
    def attr_backup_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupMethod: Backup method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupObjects")
    def attr_backup_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupObjects: The backup object.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPeriod")
    def attr_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPeriod: Full backup cycle.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanId")
    def attr_backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanName")
    def attr_backup_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanName: The name of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention time of backup data.

        Valid values: 0 to 1825. Default value: 730 days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStartTime")
    def attr_backup_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStartTime: The start time of full Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStorageType")
    def attr_backup_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStorageType: Built-in storage type:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup plans.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossAliyunId")
    def attr_cross_aliyun_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCrossAliyunId"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossRoleName")
    def attr_cross_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCrossRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseType")
    def attr_database_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseType: Database type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatabaseType"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationArchivePeriod")
    def attr_duplication_archive_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDuplicationArchivePeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationInfrequentAccessPeriod")
    def attr_duplication_infrequent_access_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.

        The default time is 180 days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDuplicationInfrequentAccessPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Whether to enable incremental log Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClass: Instance class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrOssBucketName")
    def attr_oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OssBucketName: OSS Bucket name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOssBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointDatabaseName")
    def attr_source_endpoint_database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointDatabaseName: The name of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointDatabaseName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceId")
    def attr_source_endpoint_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceId: The ID of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceType")
    def attr_source_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceType: The location of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointRegion")
    def attr_source_endpoint_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointRegion: The region of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointSid")
    def attr_source_endpoint_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointSid: Oracle SID name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointSid"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointUserName")
    def attr_source_endpoint_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointUserName: Database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointUserName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlanProps:
        return typing.cast(BackupPlanProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBackupPlan).__jsii_proxy_class__ = lambda : _IBackupPlanProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-dbs.datasource.IBackupPlans")
class IBackupPlans(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``BackupPlans``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanIds")
    def attr_backup_plan_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanIds: The list of backup plan IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlans")
    def attr_backup_plans(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlans: The list of backup plans.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlansProps:
        ...


class _IBackupPlansProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``BackupPlans``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-dbs.datasource.IBackupPlans"

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanIds")
    def attr_backup_plan_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanIds: The list of backup plan IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanIds"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlans")
    def attr_backup_plans(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlans: The list of backup plans.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlans"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlansProps:
        return typing.cast(BackupPlansProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IBackupPlans).__jsii_proxy_class__ = lambda : _IBackupPlansProxy


class RosBackupPlan(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.datasource.RosBackupPlan",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::DBS::BackupPlan``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BackupPlan`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackupPlanProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2831da78286eef82a223881ac801d0084b013f251d10eaa5e1c4b6bc976bc4b2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7fde8ebe701e11bd832e131d17e3b16a6818957d473e2a7a9c06cf6c1b37ffe4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupGatewayId")
    def attr_backup_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupGatewayId: The ID of the backup gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupMethod")
    def attr_backup_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupMethod: Backup method.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupObjects")
    def attr_backup_objects(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupObjects: The backup object.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPeriod")
    def attr_backup_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPeriod: Full backup cycle.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanId")
    def attr_backup_plan_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlanId: The ID of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanName")
    def attr_backup_plan_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlanName: The name of the backup plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupRetentionPeriod: The retention time of backup data. Valid values: 0 to 1825. Default value: 730 days.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStartTime")
    def attr_backup_start_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupStartTime: The start time of full Backup.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStorageType")
    def attr_backup_storage_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupStorageType: Built-in storage type:.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the backup plans.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossAliyunId")
    def attr_cross_aliyun_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCrossAliyunId"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossRoleName")
    def attr_cross_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCrossRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseType")
    def attr_database_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DatabaseType: Database type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDatabaseType"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationArchivePeriod")
    def attr_duplication_archive_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDuplicationArchivePeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationInfrequentAccessPeriod")
    def attr_duplication_infrequent_access_period(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access. The default time is 180 days.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDuplicationInfrequentAccessPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnableBackupLog: Whether to enable incremental log Backup.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceClass: Instance class.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrOssBucketName")
    def attr_oss_bucket_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OssBucketName: OSS Bucket name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOssBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointDatabaseName")
    def attr_source_endpoint_database_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointDatabaseName: The name of the database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointDatabaseName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceId")
    def attr_source_endpoint_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointInstanceId: The ID of the database instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceType")
    def attr_source_endpoint_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointInstanceType: The location of the database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointRegion")
    def attr_source_endpoint_region(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointRegion: The region of the database.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointSid")
    def attr_source_endpoint_sid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointSid: Oracle SID name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointSid"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointUserName")
    def attr_source_endpoint_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceEndpointUserName: Database account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceEndpointUserName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backupPlanId")
    def backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupPlanId: The ID of the backup plan.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "backupPlanId"))

    @backup_plan_id.setter
    def backup_plan_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f39766274c691d22ca9c4b034f20407cb7a8fd4ae1ddf53f8b8602e670a1b2a1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPlanId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22d2d93dc3bd29acb2482e126edb03e3357920e8a350c6b8dedccbe0ad2e7529)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d8b2e9358d234244398b4386cec2cc6f8e076889965d65c78353b2f04ab0ff7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dbs.datasource.RosBackupPlanProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "refresh_options": "refreshOptions",
    },
)
class RosBackupPlanProps:
    def __init__(
        self,
        *,
        backup_plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBackupPlan``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan

        :param backup_plan_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e3371bf5dff5086f00b52bce586e96c8232dca858612ec3be13bbac27cd3764)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backup_plan_id": backup_plan_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: backupPlanId: The ID of the backup plan.
        '''
        result = self._values.get("backup_plan_id")
        assert result is not None, "Required property 'backup_plan_id' is missing"
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
        return "RosBackupPlanProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackupPlans(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.datasource.RosBackupPlans",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::DBS::BackupPlans``, which is used to query the information about backup schedules.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``BackupPlans`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackupPlansProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__721c70d0df46032327267ac707e6760593b36b3d51e1976c0e697dbf86549888)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a25dd378be01a7e5e7829d72c79bc0770ffb69c8bf44567ecda1d21118c6b380)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanIds")
    def attr_backup_plan_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlanIds: The list of backup plan IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlanIds"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlans")
    def attr_backup_plans(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlans: The list of backup plans.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlans"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5f1c42866de9aeaab68e094e5527a6d9e3530e23d7a628c9d57a33280a76ec35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="backupPlanId")
    def backup_plan_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupPlanId: The ID of the backup schedule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupPlanId"))

    @backup_plan_id.setter
    def backup_plan_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d731638a8a53be24d421630ea3a8a0471a3f68cabb30cb858aef26b0e7858ed1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPlanId", value)

    @builtins.property
    @jsii.member(jsii_name="backupPlanName")
    def backup_plan_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupPlanName: The name of the backup schedule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backupPlanName"))

    @backup_plan_name.setter
    def backup_plan_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5ad6aa36fd3c5fe7a85a324e68c24117005a43bd4a77cef5b522f99f046e717)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupPlanName", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__ad567ef89371acfb507e91d854d604253b282bd13cfadbf197b04a9587155520)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c009e0594ae55bac6ebb969b5f1fe42e861e04f8ff7b44628d0fa4c095ed64d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dbs.datasource.RosBackupPlansProps",
    jsii_struct_bases=[],
    name_mapping={
        "backup_plan_id": "backupPlanId",
        "backup_plan_name": "backupPlanName",
        "refresh_options": "refreshOptions",
        "resource_group_id": "resourceGroupId",
    },
)
class RosBackupPlansProps:
    def __init__(
        self,
        *,
        backup_plan_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_plan_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosBackupPlans``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans

        :param backup_plan_id: 
        :param backup_plan_name: 
        :param refresh_options: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb2d4e8555902495dbd734e97a0915976031efe94a33d36c4eb2a744531aa47a)
            check_type(argname="argument backup_plan_id", value=backup_plan_id, expected_type=type_hints["backup_plan_id"])
            check_type(argname="argument backup_plan_name", value=backup_plan_name, expected_type=type_hints["backup_plan_name"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if backup_plan_id is not None:
            self._values["backup_plan_id"] = backup_plan_id
        if backup_plan_name is not None:
            self._values["backup_plan_name"] = backup_plan_name
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def backup_plan_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupPlanId: The ID of the backup schedule.
        '''
        result = self._values.get("backup_plan_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_plan_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backupPlanName: The name of the backup schedule.
        '''
        result = self._values.get("backup_plan_name")
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

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackupPlansProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IBackupPlan)
class BackupPlan(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.datasource.BackupPlan",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::DBS::BackupPlan``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBackupPlan``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplan
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[BackupPlanProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25044d3c29317a3053f35e2d23b26e7011df14782f3d329fe09fe72b8673f160)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupGatewayId")
    def attr_backup_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupGatewayId: The ID of the backup gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupMethod")
    def attr_backup_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupMethod: Backup method.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupObjects")
    def attr_backup_objects(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupObjects: The backup object.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupObjects"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPeriod")
    def attr_backup_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPeriod: Full backup cycle.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanId")
    def attr_backup_plan_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanId: The ID of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanId"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanName")
    def attr_backup_plan_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanName: The name of the backup plan.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanName"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupRetentionPeriod")
    def attr_backup_retention_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupRetentionPeriod: The retention time of backup data.

        Valid values: 0 to 1825. Default value: 730 days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupRetentionPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStartTime")
    def attr_backup_start_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStartTime: The start time of full Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupStartTime"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupStorageType")
    def attr_backup_storage_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupStorageType: Built-in storage type:.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupStorageType"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup plans.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossAliyunId")
    def attr_cross_aliyun_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossAliyunId: The UID that is backed up across Alibaba cloud accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCrossAliyunId"))

    @builtins.property
    @jsii.member(jsii_name="attrCrossRoleName")
    def attr_cross_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CrossRoleName: The name of the RAM role that is backed up across Alibaba cloud accounts.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCrossRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrDatabaseType")
    def attr_database_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DatabaseType: Database type.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDatabaseType"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationArchivePeriod")
    def attr_duplication_archive_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationArchivePeriod: The storage time for conversion to archive cold standby is 365 days by default.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDuplicationArchivePeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrDuplicationInfrequentAccessPeriod")
    def attr_duplication_infrequent_access_period(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DuplicationInfrequentAccessPeriod: The storage time is converted to low-frequency access.

        The default time is 180 days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDuplicationInfrequentAccessPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableBackupLog")
    def attr_enable_backup_log(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EnableBackupLog: Whether to enable incremental log Backup.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEnableBackupLog"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceClass")
    def attr_instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceClass: Instance class.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceClass"))

    @builtins.property
    @jsii.member(jsii_name="attrOssBucketName")
    def attr_oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute OssBucketName: OSS Bucket name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrOssBucketName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the resource.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointDatabaseName")
    def attr_source_endpoint_database_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointDatabaseName: The name of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointDatabaseName"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceId")
    def attr_source_endpoint_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceId: The ID of the database instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointInstanceType")
    def attr_source_endpoint_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointInstanceType: The location of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointRegion")
    def attr_source_endpoint_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointRegion: The region of the database.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointRegion"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointSid")
    def attr_source_endpoint_sid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointSid: Oracle SID name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointSid"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceEndpointUserName")
    def attr_source_endpoint_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceEndpointUserName: Database account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceEndpointUserName"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlanProps:
        return typing.cast(BackupPlanProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c0c81f42c86d4286d78569723705631ea1aeb9a1bd77a0c54e378ea38053e24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce4bf7c14957900313074c04e99ac3c3418f16f79d58528e73c565027a583df9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7781168d581b3fa5c314e4418e5e38b9f75651f7584baed7737f79888b6405e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IBackupPlans)
class BackupPlans(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dbs.datasource.BackupPlans",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::DBS::BackupPlans``, which is used to query the information about backup schedules.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosBackupPlans``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[BackupPlansProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fa40261da2e9129520639e9671ffd0c00c41b34f12b1902f3df27279e89ca42)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanIds")
    def attr_backup_plan_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanIds: The list of backup plan IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanIds"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlans")
    def attr_backup_plans(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlans: The list of backup plans.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlans"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> BackupPlansProps:
        return typing.cast(BackupPlansProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2811ce00efe7d9e75fb9a00c2973a39547aa9e8f5067e2eab5cc8478f887450)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5daaf38e7e9a2e1fa3ed7aad9c18d079d67efb0037f7d8be19b82d30d3ecd9a2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__caf9263997cd6483c49439de921b7fc1c57579c1fd7b2d2d8f6fba67bc5902f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "BackupPlan",
    "BackupPlanProps",
    "BackupPlans",
    "BackupPlansProps",
    "IBackupPlan",
    "IBackupPlans",
    "RosBackupPlan",
    "RosBackupPlanProps",
    "RosBackupPlans",
    "RosBackupPlansProps",
]

publication.publish()

def _typecheckingstub__eefb16152faaa9284d55e6c205d06c0e3be46f5aa7d9da05d4c5539bcb9fcd32(
    *,
    backup_plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc185b35b464b66e7862464bf5d2087bedb399e166719b478b258df08e0c8844(
    *,
    backup_plan_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_plan_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2831da78286eef82a223881ac801d0084b013f251d10eaa5e1c4b6bc976bc4b2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fde8ebe701e11bd832e131d17e3b16a6818957d473e2a7a9c06cf6c1b37ffe4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f39766274c691d22ca9c4b034f20407cb7a8fd4ae1ddf53f8b8602e670a1b2a1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22d2d93dc3bd29acb2482e126edb03e3357920e8a350c6b8dedccbe0ad2e7529(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8b2e9358d234244398b4386cec2cc6f8e076889965d65c78353b2f04ab0ff7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e3371bf5dff5086f00b52bce586e96c8232dca858612ec3be13bbac27cd3764(
    *,
    backup_plan_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__721c70d0df46032327267ac707e6760593b36b3d51e1976c0e697dbf86549888(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackupPlansProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a25dd378be01a7e5e7829d72c79bc0770ffb69c8bf44567ecda1d21118c6b380(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f1c42866de9aeaab68e094e5527a6d9e3530e23d7a628c9d57a33280a76ec35(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d731638a8a53be24d421630ea3a8a0471a3f68cabb30cb858aef26b0e7858ed1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5ad6aa36fd3c5fe7a85a324e68c24117005a43bd4a77cef5b522f99f046e717(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad567ef89371acfb507e91d854d604253b282bd13cfadbf197b04a9587155520(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c009e0594ae55bac6ebb969b5f1fe42e861e04f8ff7b44628d0fa4c095ed64d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb2d4e8555902495dbd734e97a0915976031efe94a33d36c4eb2a744531aa47a(
    *,
    backup_plan_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_plan_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25044d3c29317a3053f35e2d23b26e7011df14782f3d329fe09fe72b8673f160(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackupPlanProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c0c81f42c86d4286d78569723705631ea1aeb9a1bd77a0c54e378ea38053e24(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce4bf7c14957900313074c04e99ac3c3418f16f79d58528e73c565027a583df9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7781168d581b3fa5c314e4418e5e38b9f75651f7584baed7737f79888b6405e2(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fa40261da2e9129520639e9671ffd0c00c41b34f12b1902f3df27279e89ca42(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[BackupPlansProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2811ce00efe7d9e75fb9a00c2973a39547aa9e8f5067e2eab5cc8478f887450(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5daaf38e7e9a2e1fa3ed7aad9c18d079d67efb0037f7d8be19b82d30d3ecd9a2(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__caf9263997cd6483c49439de921b7fc1c57579c1fd7b2d2d8f6fba67bc5902f9(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
