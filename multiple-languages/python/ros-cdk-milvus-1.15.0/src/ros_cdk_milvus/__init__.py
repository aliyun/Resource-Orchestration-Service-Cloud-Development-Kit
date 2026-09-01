'''
## Aliyun ROS MILVUS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MILVUS from '@alicloud/ros-cdk-milvus';
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


@jsii.interface(jsii_type="@alicloud/ros-cdk-milvus.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-milvus.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-milvus.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::Milvus::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__8d0ba863c50bb8930f380248f7229e66d5a26f7549091cedfa39a4fc62464099)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7e63eca915fdd4ee090475041594ca928b91997fe2ac93f5f9a83613196257cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0dd60c3757a5c1081955f4b69574ac5c366e063aac60fdc8031242db529b5878)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9a7d6a00d8a42f9ce9d0fed2af97f40310aad93349a6f3b077f99c6c0c55aa8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-milvus.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "components": "components",
        "db_admin_password": "dbAdminPassword",
        "db_version": "dbVersion",
        "instance_name": "instanceName",
        "payment_type": "paymentType",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
        "ai_function": "aiFunction",
        "auto_backup": "autoBackup",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "backup_restore_info": "backupRestoreInfo",
        "configuration": "configuration",
        "encrypted": "encrypted",
        "ha": "ha",
        "is_multi_az_storage": "isMultiAzStorage",
        "kms_key_id": "kmsKeyId",
        "load_replicas": "loadReplicas",
        "multi_zone_mode": "multiZoneMode",
        "payment_duration": "paymentDuration",
        "payment_duration_unit": "paymentDurationUnit",
        "promotion_no": "promotionNo",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        components: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union["RosInstance.ComponentsProperty", typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
        db_admin_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.VSwitchIdsProperty", typing.Dict[builtins.str, typing.Any]]]]],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ai_function: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_backup: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_restore_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.BackupRestoreInfoProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        configuration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_multi_az_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance

        :param components: Property components: The component specifications of the instance.
        :param db_admin_password: Property dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
        :param db_version: Property dbVersion: The database engine version.
        :param instance_name: Property instanceName: The name of the instance.
        :param payment_type: Property paymentType: The billing method of the instance.
        :param vpc_id: Property vpcId: The VPC ID.
        :param v_switch_ids: Property vSwitchIds: The vSwitch configurations.
        :param zone_id: Property zoneId: The primary zone ID of the instance.
        :param ai_function: Property aiFunction: Whether the AI function is enabled.
        :param auto_backup: Property autoBackup: Whether automatic backup is enabled.
        :param auto_pay: Property autoPay: Whether the order is automatically paid.
        :param auto_renew: Property autoRenew: Whether the subscription is automatically renewed.
        :param backup_restore_info: Property backupRestoreInfo: The backup restore information.
        :param configuration: Property configuration: The instance configuration in YAML format.
        :param encrypted: Property encrypted: Whether OSS encryption is enabled.
        :param ha: Property ha: Whether high availability is enabled.
        :param is_multi_az_storage: Property isMultiAzStorage: Whether multi-zone storage is enabled.
        :param kms_key_id: Property kmsKeyId: The ID of the KMS key used for encryption.
        :param load_replicas: Property loadReplicas: The number of load replicas.
        :param multi_zone_mode: Property multiZoneMode: The multi-zone deployment mode.
        :param payment_duration: Property paymentDuration: The subscription duration.
        :param payment_duration_unit: Property paymentDurationUnit: The unit of the subscription duration.
        :param promotion_no: Property promotionNo: The promotion number.
        :param resource_group_id: Property resourceGroupId: The resource group ID.
        :param tags: Property tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1565b52de27c3bf9f6eaa46a354259743e9272b9e2555fdd89ebd561ad6394ee)
            check_type(argname="argument components", value=components, expected_type=type_hints["components"])
            check_type(argname="argument db_admin_password", value=db_admin_password, expected_type=type_hints["db_admin_password"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument ai_function", value=ai_function, expected_type=type_hints["ai_function"])
            check_type(argname="argument auto_backup", value=auto_backup, expected_type=type_hints["auto_backup"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument backup_restore_info", value=backup_restore_info, expected_type=type_hints["backup_restore_info"])
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument ha", value=ha, expected_type=type_hints["ha"])
            check_type(argname="argument is_multi_az_storage", value=is_multi_az_storage, expected_type=type_hints["is_multi_az_storage"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument load_replicas", value=load_replicas, expected_type=type_hints["load_replicas"])
            check_type(argname="argument multi_zone_mode", value=multi_zone_mode, expected_type=type_hints["multi_zone_mode"])
            check_type(argname="argument payment_duration", value=payment_duration, expected_type=type_hints["payment_duration"])
            check_type(argname="argument payment_duration_unit", value=payment_duration_unit, expected_type=type_hints["payment_duration_unit"])
            check_type(argname="argument promotion_no", value=promotion_no, expected_type=type_hints["promotion_no"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "components": components,
            "db_admin_password": db_admin_password,
            "db_version": db_version,
            "instance_name": instance_name,
            "payment_type": payment_type,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "zone_id": zone_id,
        }
        if ai_function is not None:
            self._values["ai_function"] = ai_function
        if auto_backup is not None:
            self._values["auto_backup"] = auto_backup
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_restore_info is not None:
            self._values["backup_restore_info"] = backup_restore_info
        if configuration is not None:
            self._values["configuration"] = configuration
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if ha is not None:
            self._values["ha"] = ha
        if is_multi_az_storage is not None:
            self._values["is_multi_az_storage"] = is_multi_az_storage
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if load_replicas is not None:
            self._values["load_replicas"] = load_replicas
        if multi_zone_mode is not None:
            self._values["multi_zone_mode"] = multi_zone_mode
        if payment_duration is not None:
            self._values["payment_duration"] = payment_duration
        if payment_duration_unit is not None:
            self._values["payment_duration_unit"] = payment_duration_unit
        if promotion_no is not None:
            self._values["promotion_no"] = promotion_no
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def components(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstance.ComponentsProperty", _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property components: The component specifications of the instance.'''
        result = self._values.get("components")
        assert result is not None, "Required property 'components' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstance.ComponentsProperty", _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def db_admin_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbAdminPassword: The database administrator password.

        The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from @#$%^*_+-.
        '''
        result = self._values.get("db_admin_password")
        assert result is not None, "Required property 'db_admin_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dbVersion: The database engine version.'''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the instance.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property paymentType: The billing method of the instance.'''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VSwitchIdsProperty"]]]:
        '''Property vSwitchIds: The vSwitch configurations.'''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VSwitchIdsProperty"]]], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The primary zone ID of the instance.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ai_function(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aiFunction: Whether the AI function is enabled.'''
        result = self._values.get("ai_function")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_backup(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoBackup: Whether automatic backup is enabled.'''
        result = self._values.get("auto_backup")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether the order is automatically paid.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether the subscription is automatically renewed.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_restore_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupRestoreInfoProperty"]]:
        '''Property backupRestoreInfo: The backup restore information.'''
        result = self._values.get("backup_restore_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupRestoreInfoProperty"]], result)

    @builtins.property
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property configuration: The instance configuration in YAML format.'''
        result = self._values.get("configuration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encrypted: Whether OSS encryption is enabled.'''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ha: Whether high availability is enabled.'''
        result = self._values.get("ha")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_multi_az_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isMultiAzStorage: Whether multi-zone storage is enabled.'''
        result = self._values.get("is_multi_az_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property kmsKeyId: The ID of the KMS key used for encryption.'''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadReplicas: The number of load replicas.'''
        result = self._values.get("load_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiZoneMode: The multi-zone deployment mode.'''
        result = self._values.get("multi_zone_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentDuration: The subscription duration.'''
        result = self._values.get("payment_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_duration_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentDurationUnit: The unit of the subscription duration.'''
        result = self._values.get("payment_duration_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property promotionNo: The promotion number.'''
        result = self._values.get("promotion_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The resource group ID.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to Milvus instance.

        Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
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


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-milvus.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::Milvus::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__b154f2c540dd542d07f6774366a2c02281d35d56bdf54a1f0bcfe3a0d9c82ff4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__aa23b3626da823bd4346482fc724101798d8ee0182d45748c6cf1ea547a238f5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="components")
    def components(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstance.ComponentsProperty", _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: components: The component specifications of the instance.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstance.ComponentsProperty", _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "components"))

    @components.setter
    def components(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union["RosInstance.ComponentsProperty", _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a02cf2d2f65c2d653dd9de78ac41ea95815d686c584c790d3c656b21b7739d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "components", value)

    @builtins.property
    @jsii.member(jsii_name="dbAdminPassword")
    def db_admin_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%^*_+-.
        :Property: dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbAdminPassword"))

    @db_admin_password.setter
    def db_admin_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ed7cc4e73f6385eb3eea29be9612b9a25e0ad74c31c77b093faec34b577fdab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbAdminPassword", value)

    @builtins.property
    @jsii.member(jsii_name="dbVersion")
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: The database engine version.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dbVersion"))

    @db_version.setter
    def db_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__04554d757beba33bcfef16cdef081269ceca72375c783563872860bda3f0815f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__947026b96c429095a6b36e3863251aa0a0b9cce1e8a814ccece8faef7fc1ea2d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4c93accffd33e993ca6930316349e3abed6e51b1e53be9d29a205d71c05c511)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The billing method of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0af1926548b799a620facdd873e1ca7482762851126b6ff09381b226d86a09fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4ae6c852075433e20550d8712ded29e572ad52a702c558709d4e06674e65194)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VSwitchIdsProperty"]]]:
        '''
        :Property: vSwitchIds: The vSwitch configurations.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VSwitchIdsProperty"]]], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.VSwitchIdsProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07252dcf3e3bed5449617811f84caa9fae6d0a8a65bad5a2c54452fa6579ca76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The primary zone ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1f09ac445491d4daf0738f8c7fbe38840c3b3da40d7d6bcef33eb4ac0eeabbe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="aiFunction")
    def ai_function(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aiFunction: Whether the AI function is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aiFunction"))

    @ai_function.setter
    def ai_function(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af63a16d3c57421141f0498a7effedf054610e6a57bc681fbd3fd20ff147b851)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aiFunction", value)

    @builtins.property
    @jsii.member(jsii_name="autoBackup")
    def auto_backup(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoBackup: Whether automatic backup is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoBackup"))

    @auto_backup.setter
    def auto_backup(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85aaf70b74c2a96de37890077b5237e3048a8a38ae96221cd75ec12f176b7a4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoBackup", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether the order is automatically paid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__101240f1888f2bb1693100bb63f56a7f2aa0fe2ff3adca3f9e4580fd1c16e9a4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether the subscription is automatically renewed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f5d6e79e276e1ef51099958ed10083047c30098225defa6e71d9fbd18f454c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="backupRestoreInfo")
    def backup_restore_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupRestoreInfoProperty"]]:
        '''
        :Property: backupRestoreInfo: The backup restore information.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupRestoreInfoProperty"]], jsii.get(self, "backupRestoreInfo"))

    @backup_restore_info.setter
    def backup_restore_info(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.BackupRestoreInfoProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6fed85fc00046bedeb907f30ed0eb85fd584b1d01b3ae3623218b5c547e25ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backupRestoreInfo", value)

    @builtins.property
    @jsii.member(jsii_name="configuration")
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configuration: The instance configuration in YAML format.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "configuration"))

    @configuration.setter
    def configuration(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8bce044e68a4f1297360a97ed5a70eae75a6cfb16bdf715408508cc556c4a359)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "configuration", value)

    @builtins.property
    @jsii.member(jsii_name="encrypted")
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Whether OSS encryption is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encrypted"))

    @encrypted.setter
    def encrypted(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9f08ae98ea03d891805e06ef7f187fbbf3cbf6bb6fb4c46611a200c69d66339)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encrypted", value)

    @builtins.property
    @jsii.member(jsii_name="ha")
    def ha(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ha: Whether high availability is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ha"))

    @ha.setter
    def ha(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f48c74033f0ccc250a675e863ffc3f7dfd06de912f53e1f3d1f57697eda1a6f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ha", value)

    @builtins.property
    @jsii.member(jsii_name="isMultiAzStorage")
    def is_multi_az_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isMultiAzStorage: Whether multi-zone storage is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isMultiAzStorage"))

    @is_multi_az_storage.setter
    def is_multi_az_storage(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__febdea5c8d41b41208131cb5b3c577c5eb0b5d98da4afad7905094d9387f2d4f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isMultiAzStorage", value)

    @builtins.property
    @jsii.member(jsii_name="kmsKeyId")
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the KMS key used for encryption.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "kmsKeyId"))

    @kms_key_id.setter
    def kms_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d2e738def4f8aaa8b2ef04493027dc378d4fb506e4cc849644aba82372f05d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "kmsKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="loadReplicas")
    def load_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadReplicas: The number of load replicas.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadReplicas"))

    @load_replicas.setter
    def load_replicas(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fbf2f3874793b80b5f19cf9221077c23daf998516b5ffdf872aae086255ae9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadReplicas", value)

    @builtins.property
    @jsii.member(jsii_name="multiZoneMode")
    def multi_zone_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiZoneMode: The multi-zone deployment mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiZoneMode"))

    @multi_zone_mode.setter
    def multi_zone_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a122591b339d9d7484840c18028a259f459e389497719d515eb726e7fd26a6eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiZoneMode", value)

    @builtins.property
    @jsii.member(jsii_name="paymentDuration")
    def payment_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentDuration: The subscription duration.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentDuration"))

    @payment_duration.setter
    def payment_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__321c53cb279de8088b065952ecb9bde6ab263bff0d32d91c266478f4dc720974)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentDuration", value)

    @builtins.property
    @jsii.member(jsii_name="paymentDurationUnit")
    def payment_duration_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentDurationUnit: The unit of the subscription duration.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentDurationUnit"))

    @payment_duration_unit.setter
    def payment_duration_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee96087d1159d0f34793299703521899e0f09270f1ed5c437b721fac8787eed9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentDurationUnit", value)

    @builtins.property
    @jsii.member(jsii_name="promotionNo")
    def promotion_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionNo: The promotion number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "promotionNo"))

    @promotion_no.setter
    def promotion_no(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7915a0005872f46efa01370d77d9d37a3d651857b6e3ae866b1712e70165e47)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "promotionNo", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e4b3764374f21cfefcd902cb7c9bcc238c9c3454d8042eb5be3b664d598f6790)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__016fc8e892cd93eaa104babae4a30ed2f14d954b4b421a07ce11d5299c7b1453)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-milvus.RosInstance.BackupRestoreInfoProperty",
        jsii_struct_bases=[],
        name_mapping={
            "backup_id": "backupId",
            "backup_name": "backupName",
            "source_cluster_id": "sourceClusterId",
        },
    )
    class BackupRestoreInfoProperty:
        def __init__(
            self,
            *,
            backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            backup_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            source_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param backup_id: 
            :param backup_name: 
            :param source_cluster_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__93ba1cec7b4f189779a56aac143665c86794616d675bf33edb3db123d6790267)
                check_type(argname="argument backup_id", value=backup_id, expected_type=type_hints["backup_id"])
                check_type(argname="argument backup_name", value=backup_name, expected_type=type_hints["backup_name"])
                check_type(argname="argument source_cluster_id", value=source_cluster_id, expected_type=type_hints["source_cluster_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if backup_id is not None:
                self._values["backup_id"] = backup_id
            if backup_name is not None:
                self._values["backup_name"] = backup_name
            if source_cluster_id is not None:
                self._values["source_cluster_id"] = source_cluster_id

        @builtins.property
        def backup_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backupId: The backup ID.
            '''
            result = self._values.get("backup_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def backup_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: backupName: The backup name.
            '''
            result = self._values.get("backup_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def source_cluster_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sourceClusterId: The source cluster ID.
            '''
            result = self._values.get("source_cluster_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupRestoreInfoProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-milvus.RosInstance.ComponentsProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cu_num": "cuNum",
            "replica": "replica",
            "type": "type",
            "cu_type": "cuType",
            "disk_size_type": "diskSizeType",
        },
    )
    class ComponentsProperty:
        def __init__(
            self,
            *,
            cu_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            cu_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            disk_size_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cu_num: 
            :param replica: 
            :param type: 
            :param cu_type: 
            :param disk_size_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__dbe4df9a0a4ab3fa702c5880395f5c1d0d0aea32079cc4824385c50b9dc3e577)
                check_type(argname="argument cu_num", value=cu_num, expected_type=type_hints["cu_num"])
                check_type(argname="argument replica", value=replica, expected_type=type_hints["replica"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument cu_type", value=cu_type, expected_type=type_hints["cu_type"])
                check_type(argname="argument disk_size_type", value=disk_size_type, expected_type=type_hints["disk_size_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "cu_num": cu_num,
                "replica": replica,
                "type": type,
            }
            if cu_type is not None:
                self._values["cu_type"] = cu_type
            if disk_size_type is not None:
                self._values["disk_size_type"] = disk_size_type

        @builtins.property
        def cu_num(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: cuNum: The number of compute units.
            '''
            result = self._values.get("cu_num")
            assert result is not None, "Required property 'cu_num' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def replica(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: replica: The number of component replicas.
            '''
            result = self._values.get("replica")
            assert result is not None, "Required property 'replica' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: The component type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def cu_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cuType: The compute unit type.
            '''
            result = self._values.get("cu_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def disk_size_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: diskSizeType: The disk size type.
            '''
            result = self._values.get("disk_size_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ComponentsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-milvus.RosInstance.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__4d6f4eabf0361fea82ca8f7d158e010da501d080aa93f64966734360e9e0d770)
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
        jsii_type="@alicloud/ros-cdk-milvus.RosInstance.VSwitchIdsProperty",
        jsii_struct_bases=[],
        name_mapping={"vsw_id": "vswId", "zone_id": "zoneId"},
    )
    class VSwitchIdsProperty:
        def __init__(
            self,
            *,
            vsw_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param vsw_id: 
            :param zone_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2d46bcb91981b10e266c8a1a571a5e529157a86374ef88ca09010354688284b4)
                check_type(argname="argument vsw_id", value=vsw_id, expected_type=type_hints["vsw_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vsw_id": vsw_id,
                "zone_id": zone_id,
            }

        @builtins.property
        def vsw_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vswId: The vSwitch ID.
            '''
            result = self._values.get("vsw_id")
            assert result is not None, "Required property 'vsw_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: zoneId: The zone ID of the vSwitch.
            '''
            result = self._values.get("zone_id")
            assert result is not None, "Required property 'zone_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VSwitchIdsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-milvus.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "components": "components",
        "db_admin_password": "dbAdminPassword",
        "db_version": "dbVersion",
        "instance_name": "instanceName",
        "payment_type": "paymentType",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
        "ai_function": "aiFunction",
        "auto_backup": "autoBackup",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "backup_restore_info": "backupRestoreInfo",
        "configuration": "configuration",
        "encrypted": "encrypted",
        "ha": "ha",
        "is_multi_az_storage": "isMultiAzStorage",
        "kms_key_id": "kmsKeyId",
        "load_replicas": "loadReplicas",
        "multi_zone_mode": "multiZoneMode",
        "payment_duration": "paymentDuration",
        "payment_duration_unit": "paymentDurationUnit",
        "promotion_no": "promotionNo",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        components: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstance.ComponentsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
        db_admin_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VSwitchIdsProperty, typing.Dict[builtins.str, typing.Any]]]]],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ai_function: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_backup: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backup_restore_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupRestoreInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        configuration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ha: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_multi_az_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-milvus-instance

        :param components: 
        :param db_admin_password: 
        :param db_version: 
        :param instance_name: 
        :param payment_type: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param zone_id: 
        :param ai_function: 
        :param auto_backup: 
        :param auto_pay: 
        :param auto_renew: 
        :param backup_restore_info: 
        :param configuration: 
        :param encrypted: 
        :param ha: 
        :param is_multi_az_storage: 
        :param kms_key_id: 
        :param load_replicas: 
        :param multi_zone_mode: 
        :param payment_duration: 
        :param payment_duration_unit: 
        :param promotion_no: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e46391fe4565e01bd3cf4f91d26abf24a8df9d6aec1236923d52d160bcfeef34)
            check_type(argname="argument components", value=components, expected_type=type_hints["components"])
            check_type(argname="argument db_admin_password", value=db_admin_password, expected_type=type_hints["db_admin_password"])
            check_type(argname="argument db_version", value=db_version, expected_type=type_hints["db_version"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument ai_function", value=ai_function, expected_type=type_hints["ai_function"])
            check_type(argname="argument auto_backup", value=auto_backup, expected_type=type_hints["auto_backup"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument backup_restore_info", value=backup_restore_info, expected_type=type_hints["backup_restore_info"])
            check_type(argname="argument configuration", value=configuration, expected_type=type_hints["configuration"])
            check_type(argname="argument encrypted", value=encrypted, expected_type=type_hints["encrypted"])
            check_type(argname="argument ha", value=ha, expected_type=type_hints["ha"])
            check_type(argname="argument is_multi_az_storage", value=is_multi_az_storage, expected_type=type_hints["is_multi_az_storage"])
            check_type(argname="argument kms_key_id", value=kms_key_id, expected_type=type_hints["kms_key_id"])
            check_type(argname="argument load_replicas", value=load_replicas, expected_type=type_hints["load_replicas"])
            check_type(argname="argument multi_zone_mode", value=multi_zone_mode, expected_type=type_hints["multi_zone_mode"])
            check_type(argname="argument payment_duration", value=payment_duration, expected_type=type_hints["payment_duration"])
            check_type(argname="argument payment_duration_unit", value=payment_duration_unit, expected_type=type_hints["payment_duration_unit"])
            check_type(argname="argument promotion_no", value=promotion_no, expected_type=type_hints["promotion_no"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "components": components,
            "db_admin_password": db_admin_password,
            "db_version": db_version,
            "instance_name": instance_name,
            "payment_type": payment_type,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "zone_id": zone_id,
        }
        if ai_function is not None:
            self._values["ai_function"] = ai_function
        if auto_backup is not None:
            self._values["auto_backup"] = auto_backup
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_restore_info is not None:
            self._values["backup_restore_info"] = backup_restore_info
        if configuration is not None:
            self._values["configuration"] = configuration
        if encrypted is not None:
            self._values["encrypted"] = encrypted
        if ha is not None:
            self._values["ha"] = ha
        if is_multi_az_storage is not None:
            self._values["is_multi_az_storage"] = is_multi_az_storage
        if kms_key_id is not None:
            self._values["kms_key_id"] = kms_key_id
        if load_replicas is not None:
            self._values["load_replicas"] = load_replicas
        if multi_zone_mode is not None:
            self._values["multi_zone_mode"] = multi_zone_mode
        if payment_duration is not None:
            self._values["payment_duration"] = payment_duration
        if payment_duration_unit is not None:
            self._values["payment_duration_unit"] = payment_duration_unit
        if promotion_no is not None:
            self._values["promotion_no"] = promotion_no
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def components(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstance.ComponentsProperty, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: components: The component specifications of the instance.
        '''
        result = self._values.get("components")
        assert result is not None, "Required property 'components' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstance.ComponentsProperty, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def db_admin_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :: #$%^*_+-.
        :Property: dbAdminPassword: The database administrator password. The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from
        '''
        result = self._values.get("db_admin_password")
        assert result is not None, "Required property 'db_admin_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dbVersion: The database engine version.
        '''
        result = self._values.get("db_version")
        assert result is not None, "Required property 'db_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: paymentType: The billing method of the instance.
        '''
        result = self._values.get("payment_type")
        assert result is not None, "Required property 'payment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VSwitchIdsProperty]]]:
        '''
        :Property: vSwitchIds: The vSwitch configurations.
        '''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VSwitchIdsProperty]]], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The primary zone ID of the instance.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ai_function(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aiFunction: Whether the AI function is enabled.
        '''
        result = self._values.get("ai_function")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_backup(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoBackup: Whether automatic backup is enabled.
        '''
        result = self._values.get("auto_backup")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether the order is automatically paid.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether the subscription is automatically renewed.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backup_restore_info(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupRestoreInfoProperty]]:
        '''
        :Property: backupRestoreInfo: The backup restore information.
        '''
        result = self._values.get("backup_restore_info")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupRestoreInfoProperty]], result)

    @builtins.property
    def configuration(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: configuration: The instance configuration in YAML format.
        '''
        result = self._values.get("configuration")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encrypted(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: encrypted: Whether OSS encryption is enabled.
        '''
        result = self._values.get("encrypted")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ha(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ha: Whether high availability is enabled.
        '''
        result = self._values.get("ha")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_multi_az_storage(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isMultiAzStorage: Whether multi-zone storage is enabled.
        '''
        result = self._values.get("is_multi_az_storage")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def kms_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: kmsKeyId: The ID of the KMS key used for encryption.
        '''
        result = self._values.get("kms_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadReplicas: The number of load replicas.
        '''
        result = self._values.get("load_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiZoneMode: The multi-zone deployment mode.
        '''
        result = self._values.get("multi_zone_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentDuration: The subscription duration.
        '''
        result = self._values.get("payment_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_duration_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentDurationUnit: The unit of the subscription duration.
        '''
        result = self._values.get("payment_duration_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_no(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionNo: The promotion number.
        '''
        result = self._values.get("promotion_no")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The resource group ID.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to Milvus instance. Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
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


__all__ = [
    "IInstance",
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()

def _typecheckingstub__8d0ba863c50bb8930f380248f7229e66d5a26f7549091cedfa39a4fc62464099(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e63eca915fdd4ee090475041594ca928b91997fe2ac93f5f9a83613196257cc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0dd60c3757a5c1081955f4b69574ac5c366e063aac60fdc8031242db529b5878(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9a7d6a00d8a42f9ce9d0fed2af97f40310aad93349a6f3b077f99c6c0c55aa8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1565b52de27c3bf9f6eaa46a354259743e9272b9e2555fdd89ebd561ad6394ee(
    *,
    components: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstance.ComponentsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
    db_admin_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VSwitchIdsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ai_function: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_backup: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_restore_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupRestoreInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    configuration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_multi_az_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b154f2c540dd542d07f6774366a2c02281d35d56bdf54a1f0bcfe3a0d9c82ff4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa23b3626da823bd4346482fc724101798d8ee0182d45748c6cf1ea547a238f5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a02cf2d2f65c2d653dd9de78ac41ea95815d686c584c790d3c656b21b7739d4(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[RosInstance.ComponentsProperty, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ed7cc4e73f6385eb3eea29be9612b9a25e0ad74c31c77b093faec34b577fdab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04554d757beba33bcfef16cdef081269ceca72375c783563872860bda3f0815f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__947026b96c429095a6b36e3863251aa0a0b9cce1e8a814ccece8faef7fc1ea2d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4c93accffd33e993ca6930316349e3abed6e51b1e53be9d29a205d71c05c511(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0af1926548b799a620facdd873e1ca7482762851126b6ff09381b226d86a09fe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4ae6c852075433e20550d8712ded29e572ad52a702c558709d4e06674e65194(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07252dcf3e3bed5449617811f84caa9fae6d0a8a65bad5a2c54452fa6579ca76(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.VSwitchIdsProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1f09ac445491d4daf0738f8c7fbe38840c3b3da40d7d6bcef33eb4ac0eeabbe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af63a16d3c57421141f0498a7effedf054610e6a57bc681fbd3fd20ff147b851(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85aaf70b74c2a96de37890077b5237e3048a8a38ae96221cd75ec12f176b7a4d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__101240f1888f2bb1693100bb63f56a7f2aa0fe2ff3adca3f9e4580fd1c16e9a4(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f5d6e79e276e1ef51099958ed10083047c30098225defa6e71d9fbd18f454c2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6fed85fc00046bedeb907f30ed0eb85fd584b1d01b3ae3623218b5c547e25ea(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.BackupRestoreInfoProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8bce044e68a4f1297360a97ed5a70eae75a6cfb16bdf715408508cc556c4a359(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9f08ae98ea03d891805e06ef7f187fbbf3cbf6bb6fb4c46611a200c69d66339(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f48c74033f0ccc250a675e863ffc3f7dfd06de912f53e1f3d1f57697eda1a6f2(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__febdea5c8d41b41208131cb5b3c577c5eb0b5d98da4afad7905094d9387f2d4f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d2e738def4f8aaa8b2ef04493027dc378d4fb506e4cc849644aba82372f05d9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fbf2f3874793b80b5f19cf9221077c23daf998516b5ffdf872aae086255ae9a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a122591b339d9d7484840c18028a259f459e389497719d515eb726e7fd26a6eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__321c53cb279de8088b065952ecb9bde6ab263bff0d32d91c266478f4dc720974(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee96087d1159d0f34793299703521899e0f09270f1ed5c437b721fac8787eed9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7915a0005872f46efa01370d77d9d37a3d651857b6e3ae866b1712e70165e47(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e4b3764374f21cfefcd902cb7c9bcc238c9c3454d8042eb5be3b664d598f6790(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__016fc8e892cd93eaa104babae4a30ed2f14d954b4b421a07ce11d5299c7b1453(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__93ba1cec7b4f189779a56aac143665c86794616d675bf33edb3db123d6790267(
    *,
    backup_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbe4df9a0a4ab3fa702c5880395f5c1d0d0aea32079cc4824385c50b9dc3e577(
    *,
    cu_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    replica: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cu_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d6f4eabf0361fea82ca8f7d158e010da501d080aa93f64966734360e9e0d770(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d46bcb91981b10e266c8a1a571a5e529157a86374ef88ca09010354688284b4(
    *,
    vsw_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e46391fe4565e01bd3cf4f91d26abf24a8df9d6aec1236923d52d160bcfeef34(
    *,
    components: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[typing.Union[RosInstance.ComponentsProperty, typing.Dict[builtins.str, typing.Any]], _ros_cdk_core_7adfd82f.IResolvable]]],
    db_admin_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    db_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    payment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.VSwitchIdsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ai_function: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_backup: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backup_restore_info: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.BackupRestoreInfoProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    configuration: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encrypted: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ha: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_multi_az_storage: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    kms_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_duration_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_no: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
