'''
## Aliyun ROS ECD Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ECD from '@alicloud/ros-cdk-ecd';
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


class Bundle(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.Bundle",
):
    '''A ROS resource type:  ``ALIYUN::ECD::Bundle``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BundleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::Bundle``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7e80e1b81f1fd047b29ae7c024484f98a49e69ef413a9abd25a78068aa0ab7c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBundleId")
    def attr_bundle_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BundleId: Desktop bundle ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBundleId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecd.BundleProps",
    jsii_struct_bases=[],
    name_mapping={
        "desktop_type": "desktopType",
        "image_id": "imageId",
        "root_disk_size_gib": "rootDiskSizeGib",
        "user_disk_size_gib": "userDiskSizeGib",
        "bundle_name": "bundleName",
        "description": "description",
        "language": "language",
        "root_disk_performance_level": "rootDiskPerformanceLevel",
        "user_disk_performance_level": "userDiskPerformanceLevel",
    },
)
class BundleProps:
    def __init__(
        self,
        *,
        desktop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        root_disk_size_gib: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        user_disk_size_gib: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        bundle_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        root_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::Bundle``.

        :param desktop_type: Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
        :param image_id: Property imageId: The ID of the image.
        :param root_disk_size_gib: Property rootDiskSizeGib: The root disk size gib.
        :param user_disk_size_gib: Property userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB. - The size of the data disk that supports the setting corresponds to the specification. - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
        :param bundle_name: Property bundleName: The name of the bundle.
        :param description: Property description: The description of the bundle.
        :param language: Property language: The language. Valid values: zh-CN: Simplified Chinese zh-HK: Traditional Chinese (Hong Kong) en-US: English ja-JP: Japanese
        :param root_disk_performance_level: Property rootDiskPerformanceLevel: The root disk performance level. Valid values: PL0 PL1 PL2 PL3
        :param user_disk_performance_level: Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__114b9b049c9cbb3602e7a2c7c7718684aed354e1a582f7c86ebcfb7003d7e6fd)
            check_type(argname="argument desktop_type", value=desktop_type, expected_type=type_hints["desktop_type"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument root_disk_size_gib", value=root_disk_size_gib, expected_type=type_hints["root_disk_size_gib"])
            check_type(argname="argument user_disk_size_gib", value=user_disk_size_gib, expected_type=type_hints["user_disk_size_gib"])
            check_type(argname="argument bundle_name", value=bundle_name, expected_type=type_hints["bundle_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument root_disk_performance_level", value=root_disk_performance_level, expected_type=type_hints["root_disk_performance_level"])
            check_type(argname="argument user_disk_performance_level", value=user_disk_performance_level, expected_type=type_hints["user_disk_performance_level"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "desktop_type": desktop_type,
            "image_id": image_id,
            "root_disk_size_gib": root_disk_size_gib,
            "user_disk_size_gib": user_disk_size_gib,
        }
        if bundle_name is not None:
            self._values["bundle_name"] = bundle_name
        if description is not None:
            self._values["description"] = description
        if language is not None:
            self._values["language"] = language
        if root_disk_performance_level is not None:
            self._values["root_disk_performance_level"] = root_disk_performance_level
        if user_disk_performance_level is not None:
            self._values["user_disk_performance_level"] = user_disk_performance_level

    @builtins.property
    def desktop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType. Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.'''
        result = self._values.get("desktop_type")
        assert result is not None, "Required property 'desktop_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: The ID of the image.'''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def root_disk_size_gib(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rootDiskSizeGib: The root disk size gib.'''
        result = self._values.get("root_disk_size_gib")
        assert result is not None, "Required property 'root_disk_size_gib' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_disk_size_gib(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property userDiskSizeGib: The size of the data disk.

        Currently, only one data disk can be set. Unit: GiB.

        - The size of the data disk that supports the setting corresponds to the specification.
        - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
        '''
        result = self._values.get("user_disk_size_gib")
        assert result is not None, "Required property 'user_disk_size_gib' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def bundle_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bundleName: The name of the bundle.'''
        result = self._values.get("bundle_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the bundle.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property language: The language.

        Valid values:
        zh-CN: Simplified Chinese
        zh-HK: Traditional Chinese (Hong Kong)
        en-US: English
        ja-JP: Japanese
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def root_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rootDiskPerformanceLevel: The root disk performance level.

        Valid values:
        PL0
        PL1
        PL2
        PL3
        '''
        result = self._values.get("root_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userDiskPerformanceLevel: The user disk performance level.Valid values: PL0 PL1 PL2 PL3.'''
        result = self._values.get("user_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BundleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Desktops(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.Desktops",
):
    '''A ROS resource type:  ``ALIYUN::ECD::Desktops``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DesktopsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::Desktops``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec37c66f272ac3085a407b8d35ffcaba92b80787d8d0d51b5c7359202f24a177)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDesktopId")
    def attr_desktop_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DesktopId: The ID of the cloud desktop.

        If multiple cloud desktops are created in a call, the
        IDs of the cloud desktops are returned.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDesktopId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The ID of the order.

        Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecd.DesktopsProps",
    jsii_struct_bases=[],
    name_mapping={
        "bundle_id": "bundleId",
        "office_site_id": "officeSiteId",
        "policy_group_id": "policyGroupId",
        "amount": "amount",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "desktop_name": "desktopName",
        "desktop_name_suffix": "desktopNameSuffix",
        "directory_id": "directoryId",
        "end_user_id": "endUserId",
        "group_id": "groupId",
        "hostname": "hostname",
        "period": "period",
        "period_unit": "periodUnit",
        "promotion_id": "promotionId",
        "tags": "tags",
        "user_assign_mode": "userAssignMode",
        "user_name": "userName",
        "volume_encryption_enabled": "volumeEncryptionEnabled",
        "volume_encryption_key": "volumeEncryptionKey",
        "vpc_id": "vpcId",
    },
)
class DesktopsProps:
    def __init__(
        self,
        *,
        bundle_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        office_site_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        directory_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hostname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDesktops.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        user_assign_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::Desktops``.

        :param bundle_id: Property bundleId: The ID of the cloud desktop template.
        :param office_site_id: Property officeSiteId: The ID of the workspace.
        :param policy_group_id: Property policyGroupId: The ID of the policy.
        :param amount: Property amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default value: 1.
        :param auto_pay: Property autoPay: Specifies whether to enable automatic payment. Valid values: true: enables automatic payment. You must make sure that your Alibaba Cloud account has sufficient balance. If your Alibaba Cloud account does not have sufficient balance, abnormal orders are generated. false: disables automatic payment. In this case, an order is generated, and no payment is automatically made. You can log on to the EDS console and complete the payment based on the order ID on the Orders page. Default value: true.
        :param auto_renew: Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes effect only when the ChargeType parameter is set to PrePaid. Valid values: true: enables auto-renewal. The renewal duration is the same as the subscription duration that you specified for the Period parameter when you purchased the cloud desktop. false: does not enable auto-renewal. Default value: false.
        :param charge_type: Property chargeType: The billing method of the cloud desktop. Valid values: PostPaid: pay-as-you-go PrePaid: subscription Default value: PostPaid.
        :param desktop_name: Property desktopName: The name of the cloud desktop.
        :param desktop_name_suffix: Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time. True: automatically adds a suffix. False: does not add a suffix.
        :param directory_id: Property directoryId: This parameter is not open for use.
        :param end_user_id: Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set. During the same period, only one user can use the desktop. If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        :param group_id: Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test. If you want to experience it, please submit a work order application.
        :param hostname: Property hostname: The custom hostname that you specify for the cloud desktop. You can only specify the hostname of a Windows cloud desktop in the workspace of the enterprise AD account type. The hostname must meet the following requirements: The hostname must be 2 to 15 characters in length. The hostname can contain letters, digits, and hyphens (-). It cannot start or end with a hyphen (-), contain consecutive hyphens (-), or contain only digits. If you create multiple cloud desktops, you can specify the names of the cloud desktops in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy. name_prefix: the prefix of the hostname. [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values: 0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value: 6. name_suffix: the suffix of the hostname.
        :param period: Property period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid. If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60 If periodUnit is year, the valid range is 1 to 5
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param promotion_id: Property promotionId: promotion id.
        :param tags: Property tags: The list of desktops tags in the form of key/value pairs. You can define a maximum of 20 tags for each desktops.
        :param user_assign_mode: Property userAssignMode: The assignment mode of the cloud desktop. Default value: ALL. ALL: If you specify the EndUserId parameter, the cloud desktops that you create are assigned to each regular user that you specify. PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create are evenly assigned to all regular users that you specify. In this case, you must make sure that the value of the Amount parameter can be divided by the N value of the EndUserId.N parameter that you specify. Note If you do not specify the EndUserId parameter, the cloud desktop that you create is not assigned to regular users.
        :param user_name: Property userName: This parameter is not open for use.
        :param volume_encryption_enabled: Property volumeEncryptionEnabled: Whether to enable disk encryption.
        :param volume_encryption_key: Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        :param vpc_id: Property vpcId: This parameter is not open for use.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5332608fe20f2b15df3518e820c058e964555fd1f537a8c2ee1a652ea3eccf1f)
            check_type(argname="argument bundle_id", value=bundle_id, expected_type=type_hints["bundle_id"])
            check_type(argname="argument office_site_id", value=office_site_id, expected_type=type_hints["office_site_id"])
            check_type(argname="argument policy_group_id", value=policy_group_id, expected_type=type_hints["policy_group_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument desktop_name", value=desktop_name, expected_type=type_hints["desktop_name"])
            check_type(argname="argument desktop_name_suffix", value=desktop_name_suffix, expected_type=type_hints["desktop_name_suffix"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument end_user_id", value=end_user_id, expected_type=type_hints["end_user_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument hostname", value=hostname, expected_type=type_hints["hostname"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument promotion_id", value=promotion_id, expected_type=type_hints["promotion_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument user_assign_mode", value=user_assign_mode, expected_type=type_hints["user_assign_mode"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument volume_encryption_enabled", value=volume_encryption_enabled, expected_type=type_hints["volume_encryption_enabled"])
            check_type(argname="argument volume_encryption_key", value=volume_encryption_key, expected_type=type_hints["volume_encryption_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bundle_id": bundle_id,
            "office_site_id": office_site_id,
            "policy_group_id": policy_group_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if desktop_name is not None:
            self._values["desktop_name"] = desktop_name
        if desktop_name_suffix is not None:
            self._values["desktop_name_suffix"] = desktop_name_suffix
        if directory_id is not None:
            self._values["directory_id"] = directory_id
        if end_user_id is not None:
            self._values["end_user_id"] = end_user_id
        if group_id is not None:
            self._values["group_id"] = group_id
        if hostname is not None:
            self._values["hostname"] = hostname
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if promotion_id is not None:
            self._values["promotion_id"] = promotion_id
        if tags is not None:
            self._values["tags"] = tags
        if user_assign_mode is not None:
            self._values["user_assign_mode"] = user_assign_mode
        if user_name is not None:
            self._values["user_name"] = user_name
        if volume_encryption_enabled is not None:
            self._values["volume_encryption_enabled"] = volume_encryption_enabled
        if volume_encryption_key is not None:
            self._values["volume_encryption_key"] = volume_encryption_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bundleId: The ID of the cloud desktop template.'''
        result = self._values.get("bundle_id")
        assert result is not None, "Required property 'bundle_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def office_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property officeSiteId: The ID of the workspace.'''
        result = self._values.get("office_site_id")
        assert result is not None, "Required property 'office_site_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyGroupId: The ID of the policy.'''
        result = self._values.get("policy_group_id")
        assert result is not None, "Required property 'policy_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property amount: The number of cloud desktops that you want to create.

        Valid values: 1 to 300. Default
        value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Specifies whether to enable automatic payment.

        Valid values:
        true: enables automatic payment. You must make sure that your Alibaba Cloud account
        has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
        abnormal orders are generated.
        false: disables automatic payment. In this case, an order is generated, and no payment
        is automatically made. You can log on to the EDS console and complete the payment
        based on the order ID on the Orders page.
        Default value: true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Specifies whether to enable auto-renewal for the cloud desktop.

        This parameter takes
        effect only when the ChargeType parameter is set to PrePaid.
        Valid values:
        true: enables auto-renewal. The renewal duration is the same as the subscription duration
        that you specified for the Period parameter when you purchased the cloud desktop.
        false: does not enable auto-renewal.
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: The billing method of the cloud desktop.

        Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desktopName: The name of the cloud desktop.'''
        result = self._values.get("desktop_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.

        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        result = self._values.get("desktop_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property directoryId: This parameter is not open for use.'''
        result = self._values.get("directory_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.

        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        result = self._values.get("end_user_id")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.

        If you want to experience it, please submit a work order application.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostname: The custom hostname that you specify for the cloud desktop.

        You can only specify the
        hostname of a Windows cloud desktop in the workspace of the enterprise AD account
        type.
        The hostname must meet the following requirements:
        The hostname must be 2 to 15 characters in length.
        The hostname can contain letters, digits, and hyphens (-). It cannot start or end
        with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
        If you create multiple cloud desktops, you can specify the names of the cloud desktops
        in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
        the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
        name_prefix: the prefix of the hostname.
        [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
        0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
        6.
        name_suffix: the suffix of the hostname.
        '''
        result = self._values.get("hostname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration.

        The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property promotionId: promotion id.'''
        result = self._values.get("promotion_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosDesktops.TagsProperty"]]:
        '''Property tags: The list of desktops tags in the form of key/value pairs.

        You can define a maximum of 20 tags for each desktops.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosDesktops.TagsProperty"]], result)

    @builtins.property
    def user_assign_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userAssignMode: The assignment mode of the cloud desktop.

        Default value: ALL.
        ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
        assigned to each regular user that you specify.
        PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
        are evenly assigned to all regular users that you specify. In this case, you must
        make sure that the value of the Amount parameter can be divided by the N value of
        the EndUserId.N parameter that you specify.
        Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
        not assigned to regular users.
        '''
        result = self._values.get("user_assign_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userName: This parameter is not open for use.'''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeEncryptionEnabled: Whether to enable disk encryption.'''
        result = self._values.get("volume_encryption_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.

        It can be obtained through the ListKeys interface.
        '''
        result = self._values.get("volume_encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: This parameter is not open for use.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DesktopsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBundle(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.RosBundle",
):
    '''A ROS template type:  ``ALIYUN::ECD::Bundle``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBundleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::Bundle``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f470c7a3c4ef53ed26f0e3494b0d07ca5823e057918c4b090db8290da22e9570)
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
            type_hints = typing.get_type_hints(_typecheckingstub__292383bd053de5b29ffc6f936090cd4519563f38e96549abf0b0117019bc23a5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBundleId")
    def attr_bundle_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BundleId: Desktop bundle ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBundleId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="desktopType")
    def desktop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
        Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "desktopType"))

    @desktop_type.setter
    def desktop_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62e56efc2f8e9a9161e382e9781800af7fcfe29c8121f6af556aa4394ee8c790)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e0d83c634d9a908270e8cf4bf7ddc82e389d4a85dd34e72d545596c2dc484db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The ID of the image.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f614c5af36eff654b3994a6d7e7dbd6c339897b816df7bfcd72e45dbb48be23b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="rootDiskSizeGib")
    def root_disk_size_gib(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rootDiskSizeGib: The root disk size gib.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rootDiskSizeGib"))

    @root_disk_size_gib.setter
    def root_disk_size_gib(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d53b61318006aa494c0ff7cc82427891da85d4692faeaee1f711f3261f78c35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rootDiskSizeGib", value)

    @builtins.property
    @jsii.member(jsii_name="userDiskSizeGib")
    def user_disk_size_gib(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.

        - The size of the data disk that supports the setting corresponds to the specification.
        - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "userDiskSizeGib"))

    @user_disk_size_gib.setter
    def user_disk_size_gib(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d861c0d3ffd1a5ee56442ac01bb2906226f420e5d1efafa829c3ebb337352f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userDiskSizeGib", value)

    @builtins.property
    @jsii.member(jsii_name="bundleName")
    def bundle_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bundleName: The name of the bundle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bundleName"))

    @bundle_name.setter
    def bundle_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac2d501a48f52dffb9de68ded24d0e87f6fe4860f42a7da289fcd14658dfbecf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bundleName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the bundle.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19ca7668c012461c3a1bd04f1d003104cfa47fdec78b3572d7074b4d4a372330)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="language")
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        language: The language. Valid values:
        zh-CN: Simplified Chinese
        zh-HK: Traditional Chinese (Hong Kong)
        en-US: English
        ja-JP: Japanese
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "language"))

    @language.setter
    def language(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c2261b5d1e27ae08281ae9ca065d110eeb0eca9975078b5d7cb7f3c2831edf2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "language", value)

    @builtins.property
    @jsii.member(jsii_name="rootDiskPerformanceLevel")
    def root_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rootDiskPerformanceLevel: The root disk performance level. Valid values:
        PL0
        PL1
        PL2
        PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rootDiskPerformanceLevel"))

    @root_disk_performance_level.setter
    def root_disk_performance_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__962f7950363699b2033be70bd8e1c8dd4ff68d01b929f010dd472eec127e037f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rootDiskPerformanceLevel", value)

    @builtins.property
    @jsii.member(jsii_name="userDiskPerformanceLevel")
    def user_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userDiskPerformanceLevel: The user disk performance level.Valid values:
        PL0
        PL1
        PL2
        PL3
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userDiskPerformanceLevel"))

    @user_disk_performance_level.setter
    def user_disk_performance_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc7b0aceb83b65e1cc489fa95216119b1d8bcab747a257e3e28d64afdf9dc89a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userDiskPerformanceLevel", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecd.RosBundleProps",
    jsii_struct_bases=[],
    name_mapping={
        "desktop_type": "desktopType",
        "image_id": "imageId",
        "root_disk_size_gib": "rootDiskSizeGib",
        "user_disk_size_gib": "userDiskSizeGib",
        "bundle_name": "bundleName",
        "description": "description",
        "language": "language",
        "root_disk_performance_level": "rootDiskPerformanceLevel",
        "user_disk_performance_level": "userDiskPerformanceLevel",
    },
)
class RosBundleProps:
    def __init__(
        self,
        *,
        desktop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        root_disk_size_gib: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        user_disk_size_gib: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        bundle_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        root_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::Bundle``.

        :param desktop_type: 
        :param image_id: 
        :param root_disk_size_gib: 
        :param user_disk_size_gib: 
        :param bundle_name: 
        :param description: 
        :param language: 
        :param root_disk_performance_level: 
        :param user_disk_performance_level: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f41325946e25a33fcd47ca2fdee3d7bc2855e2142dc2f4536db5967c3a306651)
            check_type(argname="argument desktop_type", value=desktop_type, expected_type=type_hints["desktop_type"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument root_disk_size_gib", value=root_disk_size_gib, expected_type=type_hints["root_disk_size_gib"])
            check_type(argname="argument user_disk_size_gib", value=user_disk_size_gib, expected_type=type_hints["user_disk_size_gib"])
            check_type(argname="argument bundle_name", value=bundle_name, expected_type=type_hints["bundle_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument language", value=language, expected_type=type_hints["language"])
            check_type(argname="argument root_disk_performance_level", value=root_disk_performance_level, expected_type=type_hints["root_disk_performance_level"])
            check_type(argname="argument user_disk_performance_level", value=user_disk_performance_level, expected_type=type_hints["user_disk_performance_level"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "desktop_type": desktop_type,
            "image_id": image_id,
            "root_disk_size_gib": root_disk_size_gib,
            "user_disk_size_gib": user_disk_size_gib,
        }
        if bundle_name is not None:
            self._values["bundle_name"] = bundle_name
        if description is not None:
            self._values["description"] = description
        if language is not None:
            self._values["language"] = language
        if root_disk_performance_level is not None:
            self._values["root_disk_performance_level"] = root_disk_performance_level
        if user_disk_performance_level is not None:
            self._values["user_disk_performance_level"] = user_disk_performance_level

    @builtins.property
    def desktop_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        desktopType: Desktop specifications.You can call Describundles to query the desktop bundle and get the currently supported desktop specification from the returned desktopType.
        Explain that ordinary mirrors cannot choose the GPU specifications, and the GPU type mirror can only choose the GPU specification.
        '''
        result = self._values.get("desktop_type")
        assert result is not None, "Required property 'desktop_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: The ID of the image.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def root_disk_size_gib(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rootDiskSizeGib: The root disk size gib.
        '''
        result = self._values.get("root_disk_size_gib")
        assert result is not None, "Required property 'root_disk_size_gib' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_disk_size_gib(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property:

        userDiskSizeGib: The size of the data disk. Currently, only one data disk can be set. Unit: GiB.

        - The size of the data disk that supports the setting corresponds to the specification.
        - The data disk size (user_disk_size_gib) set in the template must be greater than the data disk size (data_disk_size) in the mirror.
        '''
        result = self._values.get("user_disk_size_gib")
        assert result is not None, "Required property 'user_disk_size_gib' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def bundle_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bundleName: The name of the bundle.
        '''
        result = self._values.get("bundle_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the bundle.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def language(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        language: The language. Valid values:
        zh-CN: Simplified Chinese
        zh-HK: Traditional Chinese (Hong Kong)
        en-US: English
        ja-JP: Japanese
        '''
        result = self._values.get("language")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def root_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rootDiskPerformanceLevel: The root disk performance level. Valid values:
        PL0
        PL1
        PL2
        PL3
        '''
        result = self._values.get("root_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_disk_performance_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userDiskPerformanceLevel: The user disk performance level.Valid values:
        PL0
        PL1
        PL2
        PL3
        '''
        result = self._values.get("user_disk_performance_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBundleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDesktops(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.RosDesktops",
):
    '''A ROS template type:  ``ALIYUN::ECD::Desktops``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDesktopsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::Desktops``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__417ba7a4919468974fae3406c865d7692c3a1a949d5b355c09b558638caceafa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b624a05db13321856dd462567d9a3ad708c91bb6c198de57d60f45c71a4870a7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDesktopId")
    def attr_desktop_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        DesktopId: The ID of the cloud desktop. If multiple cloud desktops are created in a call, the
        IDs of the cloud desktops are returned.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDesktopId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        OrderId: The ID of the order.
        Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bundleId")
    def bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bundleId: The ID of the cloud desktop template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bundleId"))

    @bundle_id.setter
    def bundle_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__048b5d93ea8fc94711fe40ab7cf22c025c4ee6ff7683ef25515076bbb2be14bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bundleId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53c97614d89ca8bff4b5f500d1195b274c82ced15a9c6526f7bb7501a8b284ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="officeSiteId")
    def office_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: officeSiteId: The ID of the workspace.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "officeSiteId"))

    @office_site_id.setter
    def office_site_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__813dc4087bed123200c90e6001e5b59681e81e158701e1f799745da3bf0b494a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "officeSiteId", value)

    @builtins.property
    @jsii.member(jsii_name="policyGroupId")
    def policy_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyGroupId: The ID of the policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyGroupId"))

    @policy_group_id.setter
    def policy_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dcfd566820091b1c87bdee82e9d2372f9bd9c71f5f368af8c3082894cd2c6ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="amount")
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
        value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a676556ac09d4910dab532df18cdebcc18e642ba62cc02850c6fae39a3f2ae5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "amount", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable automatic payment. Valid values:
        true: enables automatic payment. You must make sure that your Alibaba Cloud account
        has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
        abnormal orders are generated.
        false: disables automatic payment. In this case, an order is generated, and no payment
        is automatically made. You can log on to the EDS console and complete the payment
        based on the order ID on the Orders page.
        Default value: true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bc2c01e82d9da5faf2c641d27e431bb87309d64cae517485ebc64f7f2058746)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
        effect only when the ChargeType parameter is set to PrePaid.
        Valid values:
        true: enables auto-renewal. The renewal duration is the same as the subscription duration
        that you specified for the Period parameter when you purchased the cloud desktop.
        false: does not enable auto-renewal.
        Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a01a9833dcc516e65e558219e84f6025560a064385c6b0682c09ec036609a73f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the cloud desktop. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__620ea32e2bebfb20528329b3ae5831f322597d95dd5795fc6ce5bee4e33fbec1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="desktopName")
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desktopName: The name of the cloud desktop.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desktopName"))

    @desktop_name.setter
    def desktop_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba1aef65181db1a0051b7cc3e0f5210af5f1dbd8fa8c013e17672a3e3097bfb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopName", value)

    @builtins.property
    @jsii.member(jsii_name="desktopNameSuffix")
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
        create multiple cloud desktops at a time.
        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desktopNameSuffix"))

    @desktop_name_suffix.setter
    def desktop_name_suffix(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb9b2fc5b5c218d0643028d9afe2982405bb6181e5f40c3fac2ab6ef84a213c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopNameSuffix", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: directoryId: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__299e31b65fffb8bf0e3c2a70ffef743e730d8ee5a59d2a19eb5338e5074f6af1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="endUserId")
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endUserId"))

    @end_user_id.setter
    def end_user_id(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d4b497cb011a6133f7608707bb91cac249a69db83f38626801318f3f6e9392e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endUserId", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupId: desktop group ID。
        Note that the desktop group function is currently in the invitation test.
        If you want to experience it, please submit a work order application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8b32d925398e6519b7f4d80de38a1bf3f7de314b43ee6ba21765eb8ae7a1dbc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="hostname")
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
        hostname of a Windows cloud desktop in the workspace of the enterprise AD account
        type.
        The hostname must meet the following requirements:
        The hostname must be 2 to 15 characters in length.
        The hostname can contain letters, digits, and hyphens (-). It cannot start or end
        with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
        If you create multiple cloud desktops, you can specify the names of the cloud desktops
        in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
        the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
        name_prefix: the prefix of the hostname.
        [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
        0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
        6.
        name_suffix: the suffix of the hostname.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostname"))

    @hostname.setter
    def hostname(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86cc34c87e1c2d81e79d6309023c565598f2d9c44110b32f00b9d82daf639295)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostname", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6bd5b5fa770c89aa3aa5866d160c1a2a08ba6b88c074843c007d66a8a937f27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdef60d1614d2f3601a4bd4bd6a28252405455eace4fce908fdd14f9197fc70c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="promotionId")
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionId: promotion id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "promotionId"))

    @promotion_id.setter
    def promotion_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efbba2fa69ae3743174c96210025457253685466a96aa6f91227befb135ab991)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "promotionId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosDesktops.TagsProperty"]]:
        '''
        :Property:

        tags: The list of desktops tags in the form of key/value pairs.
        You can define a maximum of 20 tags for each desktops.
        '''
        return typing.cast(typing.Optional[typing.List["RosDesktops.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosDesktops.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fc2002b918d8a09ef269bd8d5b1d1168a20bed25d8494172f6e04a152020f7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="userAssignMode")
    def user_assign_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
        ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
        assigned to each regular user that you specify.
        PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
        are evenly assigned to all regular users that you specify. In this case, you must
        make sure that the value of the Amount parameter can be divided by the N value of
        the EndUserId.N parameter that you specify.
        Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
        not assigned to regular users.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userAssignMode"))

    @user_assign_mode.setter
    def user_assign_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b55294dbcbbf93862814b175eed541beb9ed8c6f90030c0bff94c21b4e032dcb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userAssignMode", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userName: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__441b1f7f1911342bb501926092bcdd57fbd727f261eb2e95b2cb2b03000004d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="volumeEncryptionEnabled")
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeEncryptionEnabled: Whether to enable disk encryption.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeEncryptionEnabled"))

    @volume_encryption_enabled.setter
    def volume_encryption_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a1a5e8e1790c293746b5cbcd705b50d46a2e3226ad2e9bb108b7dea7e08ce38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeEncryptionEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="volumeEncryptionKey")
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "volumeEncryptionKey"))

    @volume_encryption_key.setter
    def volume_encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ea253ea2de3b46b0c52b024882e98593a0f3db8d76aad1bdef1c6a287691d8d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeEncryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5918b28308ae69a157e646d5f2548396236583e56234b899cd34e36fd21b1135)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ecd.RosDesktops.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__48fd99c9a5d8546f63f43773ca78e43bd2cc5755d095e4d38619a14d3db9b8f1)
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
            :Property: key: The keyword of the tag.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: The value of the tag.
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
    jsii_type="@alicloud/ros-cdk-ecd.RosDesktopsProps",
    jsii_struct_bases=[],
    name_mapping={
        "bundle_id": "bundleId",
        "office_site_id": "officeSiteId",
        "policy_group_id": "policyGroupId",
        "amount": "amount",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "desktop_name": "desktopName",
        "desktop_name_suffix": "desktopNameSuffix",
        "directory_id": "directoryId",
        "end_user_id": "endUserId",
        "group_id": "groupId",
        "hostname": "hostname",
        "period": "period",
        "period_unit": "periodUnit",
        "promotion_id": "promotionId",
        "tags": "tags",
        "user_assign_mode": "userAssignMode",
        "user_name": "userName",
        "volume_encryption_enabled": "volumeEncryptionEnabled",
        "volume_encryption_key": "volumeEncryptionKey",
        "vpc_id": "vpcId",
    },
)
class RosDesktopsProps:
    def __init__(
        self,
        *,
        bundle_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        office_site_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        directory_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        hostname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        promotion_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        user_assign_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        volume_encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::Desktops``.

        :param bundle_id: 
        :param office_site_id: 
        :param policy_group_id: 
        :param amount: 
        :param auto_pay: 
        :param auto_renew: 
        :param charge_type: 
        :param desktop_name: 
        :param desktop_name_suffix: 
        :param directory_id: 
        :param end_user_id: 
        :param group_id: 
        :param hostname: 
        :param period: 
        :param period_unit: 
        :param promotion_id: 
        :param tags: 
        :param user_assign_mode: 
        :param user_name: 
        :param volume_encryption_enabled: 
        :param volume_encryption_key: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddb9eda05360ff5e245c21204f4b5593d4fe63b0f051e3b57ab14f3bed3fa3e9)
            check_type(argname="argument bundle_id", value=bundle_id, expected_type=type_hints["bundle_id"])
            check_type(argname="argument office_site_id", value=office_site_id, expected_type=type_hints["office_site_id"])
            check_type(argname="argument policy_group_id", value=policy_group_id, expected_type=type_hints["policy_group_id"])
            check_type(argname="argument amount", value=amount, expected_type=type_hints["amount"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument desktop_name", value=desktop_name, expected_type=type_hints["desktop_name"])
            check_type(argname="argument desktop_name_suffix", value=desktop_name_suffix, expected_type=type_hints["desktop_name_suffix"])
            check_type(argname="argument directory_id", value=directory_id, expected_type=type_hints["directory_id"])
            check_type(argname="argument end_user_id", value=end_user_id, expected_type=type_hints["end_user_id"])
            check_type(argname="argument group_id", value=group_id, expected_type=type_hints["group_id"])
            check_type(argname="argument hostname", value=hostname, expected_type=type_hints["hostname"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument promotion_id", value=promotion_id, expected_type=type_hints["promotion_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument user_assign_mode", value=user_assign_mode, expected_type=type_hints["user_assign_mode"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument volume_encryption_enabled", value=volume_encryption_enabled, expected_type=type_hints["volume_encryption_enabled"])
            check_type(argname="argument volume_encryption_key", value=volume_encryption_key, expected_type=type_hints["volume_encryption_key"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bundle_id": bundle_id,
            "office_site_id": office_site_id,
            "policy_group_id": policy_group_id,
        }
        if amount is not None:
            self._values["amount"] = amount
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if desktop_name is not None:
            self._values["desktop_name"] = desktop_name
        if desktop_name_suffix is not None:
            self._values["desktop_name_suffix"] = desktop_name_suffix
        if directory_id is not None:
            self._values["directory_id"] = directory_id
        if end_user_id is not None:
            self._values["end_user_id"] = end_user_id
        if group_id is not None:
            self._values["group_id"] = group_id
        if hostname is not None:
            self._values["hostname"] = hostname
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if promotion_id is not None:
            self._values["promotion_id"] = promotion_id
        if tags is not None:
            self._values["tags"] = tags
        if user_assign_mode is not None:
            self._values["user_assign_mode"] = user_assign_mode
        if user_name is not None:
            self._values["user_name"] = user_name
        if volume_encryption_enabled is not None:
            self._values["volume_encryption_enabled"] = volume_encryption_enabled
        if volume_encryption_key is not None:
            self._values["volume_encryption_key"] = volume_encryption_key
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def bundle_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bundleId: The ID of the cloud desktop template.
        '''
        result = self._values.get("bundle_id")
        assert result is not None, "Required property 'bundle_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def office_site_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: officeSiteId: The ID of the workspace.
        '''
        result = self._values.get("office_site_id")
        assert result is not None, "Required property 'office_site_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyGroupId: The ID of the policy.
        '''
        result = self._values.get("policy_group_id")
        assert result is not None, "Required property 'policy_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
        value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to enable automatic payment. Valid values:
        true: enables automatic payment. You must make sure that your Alibaba Cloud account
        has sufficient balance. If your Alibaba Cloud account does not have sufficient balance,
        abnormal orders are generated.
        false: disables automatic payment. In this case, an order is generated, and no payment
        is automatically made. You can log on to the EDS console and complete the payment
        based on the order ID on the Orders page.
        Default value: true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenew: Specifies whether to enable auto-renewal for the cloud desktop. This parameter takes
        effect only when the ChargeType parameter is set to PrePaid.
        Valid values:
        true: enables auto-renewal. The renewal duration is the same as the subscription duration
        that you specified for the Period parameter when you purchased the cloud desktop.
        false: does not enable auto-renewal.
        Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the cloud desktop. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: desktopName: The name of the cloud desktop.
        '''
        result = self._values.get("desktop_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
        create multiple cloud desktops at a time.
        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        result = self._values.get("desktop_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: directoryId: This parameter is not open for use.
        '''
        result = self._values.get("directory_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        result = self._values.get("end_user_id")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        groupId: desktop group ID。
        Note that the desktop group function is currently in the invitation test.
        If you want to experience it, please submit a work order application.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        hostname: The custom hostname that you specify for the cloud desktop. You can only specify the
        hostname of a Windows cloud desktop in the workspace of the enterprise AD account
        type.
        The hostname must meet the following requirements:
        The hostname must be 2 to 15 characters in length.
        The hostname can contain letters, digits, and hyphens (-). It cannot start or end
        with a hyphen (-), contain consecutive hyphens (-), or contain only digits.
        If you create multiple cloud desktops, you can specify the names of the cloud desktops
        in the name_prefix[begin_number,bits]name_suffix format. For example, if you set Hostname to ecd--1,4-test, the hostname of the first cloud desktop is ecd-0001-test and the hostname of
        the second cloud desktop is ecd-0002-test. The rest may be deduced by analogy.
        name_prefix: the prefix of the hostname.
        [begin_number,bits]: the ordered numbers in the hostname. begin_number: the start number. Valid values:
        0 to 999999. Default value: 0. bits: the digit. Valid values: 1 to 6. Default value:
        6.
        name_suffix: the suffix of the hostname.
        '''
        result = self._values.get("hostname")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: promotionId: promotion id.
        '''
        result = self._values.get("promotion_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosDesktops.TagsProperty]]:
        '''
        :Property:

        tags: The list of desktops tags in the form of key/value pairs.
        You can define a maximum of 20 tags for each desktops.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosDesktops.TagsProperty]], result)

    @builtins.property
    def user_assign_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        userAssignMode: The assignment mode of the cloud desktop. Default value: ALL.
        ALL: If you specify the EndUserId parameter, the cloud desktops that you create are
        assigned to each regular user that you specify.
        PER_USER: If you specify the EndUserId parameter, the cloud desktops that you create
        are evenly assigned to all regular users that you specify. In this case, you must
        make sure that the value of the Amount parameter can be divided by the N value of
        the EndUserId.N parameter that you specify.
        Note If you do not specify the EndUserId parameter, the cloud desktop that you create is
        not assigned to regular users.
        '''
        result = self._values.get("user_assign_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userName: This parameter is not open for use.
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeEncryptionEnabled: Whether to enable disk encryption.
        '''
        result = self._values.get("volume_encryption_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        '''
        result = self._values.get("volume_encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: This parameter is not open for use.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDesktopsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSimpleOfficeSite(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.RosSimpleOfficeSite",
):
    '''A ROS template type:  ``ALIYUN::ECD::SimpleOfficeSite``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSimpleOfficeSiteProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::SimpleOfficeSite``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e0d929e2dd7e9691967c4b7a0b820f7a536f866051d9670cc8502f36be53932)
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
            type_hints = typing.get_type_hints(_typecheckingstub__3a9c09bbfd977cbe2e88b0e1e32265a4fa64ca41ea8e6f9710e7fbf68c3992ac)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrOfficeSiteId")
    def attr_office_site_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OfficeSiteId: The ID of the workspace.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOfficeSiteId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1d8f438150a0e39e730e3dc22369a79b9dc8a6e016691b1a110a9cf6ee9aed49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d24229f718b847e1d5f46a8c2783769b1201423bc84d634780924ace19db933)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5f37856df610c01b50c75ee511fa42ff410166eec6771231b5c2254326b90ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="cenOwnerId")
    def cen_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
        If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
        If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cenOwnerId"))

    @cen_owner_id.setter
    def cen_owner_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8a976d678df1fbcb7ffce96f651ba7971c9b27cd1625fc5b0ba4bced6671d8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenOwnerId", value)

    @builtins.property
    @jsii.member(jsii_name="cidrBlock")
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cidrBlock"))

    @cidr_block.setter
    def cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e76f3d5db0dfcb832c76426e71cfdbc457353e80a272ee9819f1a9833ad1d23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="cloudBoxOfficeSite")
    def cloud_box_office_site(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
        Enumeration Value:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "cloudBoxOfficeSite"))

    @cloud_box_office_site.setter
    def cloud_box_office_site(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d26e5ce33a41a0815796e19468ead592615d3e95e828e8a217974c9e93505884)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cloudBoxOfficeSite", value)

    @builtins.property
    @jsii.member(jsii_name="desktopAccessType")
    def desktop_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        desktopAccessType: The method that is used to connect the client to cloud desktops.
        NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "desktopAccessType"))

    @desktop_access_type.setter
    def desktop_access_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0db56b91f053b304dd908014483b97e47d3b98690042fce6fc74093385af4fa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopAccessType", value)

    @builtins.property
    @jsii.member(jsii_name="enableAdminAccess")
    def enable_admin_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
        Enumeration Value:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAdminAccess"))

    @enable_admin_access.setter
    def enable_admin_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a344c037629111c5f44dc40ac07260429031df5f76581d0fd8c3b7bc0c57c7d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAdminAccess", value)

    @builtins.property
    @jsii.member(jsii_name="enableInternetAccess")
    def enable_internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
        Enumeration Value:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableInternetAccess"))

    @enable_internet_access.setter
    def enable_internet_access(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8366788704e1e2b91ef213c41497730aba2fbff56578b498ad9774b8fe06f11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableInternetAccess", value)

    @builtins.property
    @jsii.member(jsii_name="needVerifyZeroDevice")
    def need_verify_zero_device(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        needVerifyZeroDevice: Specifies whether to enable trusted device verification.
        Enumeration Value:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "needVerifyZeroDevice"))

    @need_verify_zero_device.setter
    def need_verify_zero_device(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a19fe03069465a1c59d7fa4c100bdc60a6f9795d04e2e7eb5bf03f9c40e73786)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "needVerifyZeroDevice", value)

    @builtins.property
    @jsii.member(jsii_name="officeSiteName")
    def office_site_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "officeSiteName"))

    @office_site_name.setter
    def office_site_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5d886d307a3960982c65bfa3014c0318ddffc5a4a2bcf5d4cd2c71e5e6b3fe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "officeSiteName", value)

    @builtins.property
    @jsii.member(jsii_name="verifyCode")
    def verify_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "verifyCode"))

    @verify_code.setter
    def verify_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__687b546bb06c5ffad859aa2e1172b9c7f448c054ce9eee25f6ccb4777a04724b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "verifyCode", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52e50e72b36f87a641c4b9e02b96e6ce163eb1fab51e11dd7205e34b45b81a70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecd.RosSimpleOfficeSiteProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "cidr_block": "cidrBlock",
        "cloud_box_office_site": "cloudBoxOfficeSite",
        "desktop_access_type": "desktopAccessType",
        "enable_admin_access": "enableAdminAccess",
        "enable_internet_access": "enableInternetAccess",
        "need_verify_zero_device": "needVerifyZeroDevice",
        "office_site_name": "officeSiteName",
        "verify_code": "verifyCode",
        "v_switch_id": "vSwitchId",
    },
)
class RosSimpleOfficeSiteProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_box_office_site: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_admin_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        need_verify_zero_device: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        office_site_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        verify_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::SimpleOfficeSite``.

        :param bandwidth: 
        :param cen_id: 
        :param cen_owner_id: 
        :param cidr_block: 
        :param cloud_box_office_site: 
        :param desktop_access_type: 
        :param enable_admin_access: 
        :param enable_internet_access: 
        :param need_verify_zero_device: 
        :param office_site_name: 
        :param verify_code: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__092e32e034ccc6ea7faf49778ebe9cb65c76b473b33a3528bdd67c4ba2110ad0)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_owner_id", value=cen_owner_id, expected_type=type_hints["cen_owner_id"])
            check_type(argname="argument cidr_block", value=cidr_block, expected_type=type_hints["cidr_block"])
            check_type(argname="argument cloud_box_office_site", value=cloud_box_office_site, expected_type=type_hints["cloud_box_office_site"])
            check_type(argname="argument desktop_access_type", value=desktop_access_type, expected_type=type_hints["desktop_access_type"])
            check_type(argname="argument enable_admin_access", value=enable_admin_access, expected_type=type_hints["enable_admin_access"])
            check_type(argname="argument enable_internet_access", value=enable_internet_access, expected_type=type_hints["enable_internet_access"])
            check_type(argname="argument need_verify_zero_device", value=need_verify_zero_device, expected_type=type_hints["need_verify_zero_device"])
            check_type(argname="argument office_site_name", value=office_site_name, expected_type=type_hints["office_site_name"])
            check_type(argname="argument verify_code", value=verify_code, expected_type=type_hints["verify_code"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if cen_owner_id is not None:
            self._values["cen_owner_id"] = cen_owner_id
        if cidr_block is not None:
            self._values["cidr_block"] = cidr_block
        if cloud_box_office_site is not None:
            self._values["cloud_box_office_site"] = cloud_box_office_site
        if desktop_access_type is not None:
            self._values["desktop_access_type"] = desktop_access_type
        if enable_admin_access is not None:
            self._values["enable_admin_access"] = enable_admin_access
        if enable_internet_access is not None:
            self._values["enable_internet_access"] = enable_internet_access
        if need_verify_zero_device is not None:
            self._values["need_verify_zero_device"] = need_verify_zero_device
        if office_site_name is not None:
            self._values["office_site_name"] = office_site_name
        if verify_code is not None:
            self._values["verify_code"] = verify_code
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.
        If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
        If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
        '''
        result = self._values.get("cen_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_box_office_site(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.
        Enumeration Value:
        true
        false
        '''
        result = self._values.get("cloud_box_office_site")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        desktopAccessType: The method that is used to connect the client to cloud desktops.
        NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
        '''
        result = self._values.get("desktop_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_admin_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.
        Enumeration Value:
        true
        false
        '''
        result = self._values.get("enable_admin_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled.
        Enumeration Value:
        true
        false
        '''
        result = self._values.get("enable_internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def need_verify_zero_device(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        needVerifyZeroDevice: Specifies whether to enable trusted device verification.
        Enumeration Value:
        true
        false
        '''
        result = self._values.get("need_verify_zero_device")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def office_site_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        result = self._values.get("office_site_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def verify_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
        '''
        result = self._values.get("verify_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSimpleOfficeSiteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SimpleOfficeSite(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.SimpleOfficeSite",
):
    '''A ROS resource type:  ``ALIYUN::ECD::SimpleOfficeSite``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SimpleOfficeSiteProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::SimpleOfficeSite``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc55b99e53b8c6361d09e855a7088525c872b22a8a2d5b7c905fd3c48dfcd6a2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrOfficeSiteId")
    def attr_office_site_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OfficeSiteId: The ID of the workspace.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOfficeSiteId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ecd.SimpleOfficeSiteProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "cidr_block": "cidrBlock",
        "cloud_box_office_site": "cloudBoxOfficeSite",
        "desktop_access_type": "desktopAccessType",
        "enable_admin_access": "enableAdminAccess",
        "enable_internet_access": "enableInternetAccess",
        "need_verify_zero_device": "needVerifyZeroDevice",
        "office_site_name": "officeSiteName",
        "verify_code": "verifyCode",
        "v_switch_id": "vSwitchId",
    },
)
class SimpleOfficeSiteProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cen_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cloud_box_office_site: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        desktop_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_admin_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        need_verify_zero_device: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        office_site_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        verify_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ECD::SimpleOfficeSite``.

        :param bandwidth: Property bandwidth: The maximum public bandwidth. Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
        :param cen_id: Property cenId: The ID of the Cloud Enterprise Network (CEN) instance. NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
        :param cen_owner_id: Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs. If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter. If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
        :param cidr_block: Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace. The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
        :param cloud_box_office_site: Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace. Enumeration Value: true false
        :param desktop_access_type: Property desktopAccessType: The method that is used to connect the client to cloud desktops. NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
        :param enable_admin_access: Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop. Enumeration Value: true false
        :param enable_internet_access: Property enableInternetAccess: Specifies whether to enable Internet access. By default, Internet access is not enabled. Enumeration Value: true false
        :param need_verify_zero_device: Property needVerifyZeroDevice: Specifies whether to enable trusted device verification. Enumeration Value: true false
        :param office_site_name: Property officeSiteName: The name of the workspace. The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        :param verify_code: Property verifyCode: The verification code. If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
        :param v_switch_id: Property vSwitchId: The IDs of the vSwitches in the VPC. This parameter is required when you create a CloudBox-based workspace.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ca54616a9b4ed7ce65b47c3947377465aad49e7792585c0b419f2d5e340e1a0)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument cen_owner_id", value=cen_owner_id, expected_type=type_hints["cen_owner_id"])
            check_type(argname="argument cidr_block", value=cidr_block, expected_type=type_hints["cidr_block"])
            check_type(argname="argument cloud_box_office_site", value=cloud_box_office_site, expected_type=type_hints["cloud_box_office_site"])
            check_type(argname="argument desktop_access_type", value=desktop_access_type, expected_type=type_hints["desktop_access_type"])
            check_type(argname="argument enable_admin_access", value=enable_admin_access, expected_type=type_hints["enable_admin_access"])
            check_type(argname="argument enable_internet_access", value=enable_internet_access, expected_type=type_hints["enable_internet_access"])
            check_type(argname="argument need_verify_zero_device", value=need_verify_zero_device, expected_type=type_hints["need_verify_zero_device"])
            check_type(argname="argument office_site_name", value=office_site_name, expected_type=type_hints["office_site_name"])
            check_type(argname="argument verify_code", value=verify_code, expected_type=type_hints["verify_code"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if cen_id is not None:
            self._values["cen_id"] = cen_id
        if cen_owner_id is not None:
            self._values["cen_owner_id"] = cen_owner_id
        if cidr_block is not None:
            self._values["cidr_block"] = cidr_block
        if cloud_box_office_site is not None:
            self._values["cloud_box_office_site"] = cloud_box_office_site
        if desktop_access_type is not None:
            self._values["desktop_access_type"] = desktop_access_type
        if enable_admin_access is not None:
            self._values["enable_admin_access"] = enable_admin_access
        if enable_internet_access is not None:
            self._values["enable_internet_access"] = enable_internet_access
        if need_verify_zero_device is not None:
            self._values["need_verify_zero_device"] = need_verify_zero_device
        if office_site_name is not None:
            self._values["office_site_name"] = office_site_name
        if verify_code is not None:
            self._values["verify_code"] = verify_code
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: The maximum public bandwidth.

        Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.

        NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
        '''
        result = self._values.get("cen_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cen_owner_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.

        If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
        If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
        '''
        result = self._values.get("cen_owner_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.

        The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
        '''
        result = self._values.get("cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cloud_box_office_site(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.

        Enumeration Value:
        true
        false
        '''
        result = self._values.get("cloud_box_office_site")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def desktop_access_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property desktopAccessType: The method that is used to connect the client to cloud desktops.

        NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
        '''
        result = self._values.get("desktop_access_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_admin_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.

        Enumeration Value:
        true
        false
        '''
        result = self._values.get("enable_admin_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_internet_access(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableInternetAccess: Specifies whether to enable Internet access.

        By default, Internet access is not enabled.
        Enumeration Value:
        true
        false
        '''
        result = self._values.get("enable_internet_access")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def need_verify_zero_device(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.

        Enumeration Value:
        true
        false
        '''
        result = self._values.get("need_verify_zero_device")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def office_site_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property officeSiteName: The name of the workspace.

        The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        '''
        result = self._values.get("office_site_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def verify_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property verifyCode: The verification code.

        If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
        '''
        result = self._values.get("verify_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The IDs of the vSwitches in the VPC.

        This parameter is required when you create a CloudBox-based workspace.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SimpleOfficeSiteProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Bundle",
    "BundleProps",
    "Desktops",
    "DesktopsProps",
    "RosBundle",
    "RosBundleProps",
    "RosDesktops",
    "RosDesktopsProps",
    "RosSimpleOfficeSite",
    "RosSimpleOfficeSiteProps",
    "SimpleOfficeSite",
    "SimpleOfficeSiteProps",
]

publication.publish()

def _typecheckingstub__f7e80e1b81f1fd047b29ae7c024484f98a49e69ef413a9abd25a78068aa0ab7c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BundleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__114b9b049c9cbb3602e7a2c7c7718684aed354e1a582f7c86ebcfb7003d7e6fd(
    *,
    desktop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    root_disk_size_gib: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    user_disk_size_gib: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    bundle_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    root_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec37c66f272ac3085a407b8d35ffcaba92b80787d8d0d51b5c7359202f24a177(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DesktopsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5332608fe20f2b15df3518e820c058e964555fd1f537a8c2ee1a652ea3eccf1f(
    *,
    bundle_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    office_site_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    directory_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hostname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    user_assign_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f470c7a3c4ef53ed26f0e3494b0d07ca5823e057918c4b090db8290da22e9570(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBundleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__292383bd053de5b29ffc6f936090cd4519563f38e96549abf0b0117019bc23a5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62e56efc2f8e9a9161e382e9781800af7fcfe29c8121f6af556aa4394ee8c790(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e0d83c634d9a908270e8cf4bf7ddc82e389d4a85dd34e72d545596c2dc484db(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f614c5af36eff654b3994a6d7e7dbd6c339897b816df7bfcd72e45dbb48be23b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d53b61318006aa494c0ff7cc82427891da85d4692faeaee1f711f3261f78c35(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d861c0d3ffd1a5ee56442ac01bb2906226f420e5d1efafa829c3ebb337352f5(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac2d501a48f52dffb9de68ded24d0e87f6fe4860f42a7da289fcd14658dfbecf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19ca7668c012461c3a1bd04f1d003104cfa47fdec78b3572d7074b4d4a372330(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c2261b5d1e27ae08281ae9ca065d110eeb0eca9975078b5d7cb7f3c2831edf2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__962f7950363699b2033be70bd8e1c8dd4ff68d01b929f010dd472eec127e037f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc7b0aceb83b65e1cc489fa95216119b1d8bcab747a257e3e28d64afdf9dc89a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f41325946e25a33fcd47ca2fdee3d7bc2855e2142dc2f4536db5967c3a306651(
    *,
    desktop_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    root_disk_size_gib: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    user_disk_size_gib: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    bundle_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    language: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    root_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_disk_performance_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__417ba7a4919468974fae3406c865d7692c3a1a949d5b355c09b558638caceafa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDesktopsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b624a05db13321856dd462567d9a3ad708c91bb6c198de57d60f45c71a4870a7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__048b5d93ea8fc94711fe40ab7cf22c025c4ee6ff7683ef25515076bbb2be14bb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53c97614d89ca8bff4b5f500d1195b274c82ced15a9c6526f7bb7501a8b284ff(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__813dc4087bed123200c90e6001e5b59681e81e158701e1f799745da3bf0b494a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dcfd566820091b1c87bdee82e9d2372f9bd9c71f5f368af8c3082894cd2c6ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a676556ac09d4910dab532df18cdebcc18e642ba62cc02850c6fae39a3f2ae5e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bc2c01e82d9da5faf2c641d27e431bb87309d64cae517485ebc64f7f2058746(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a01a9833dcc516e65e558219e84f6025560a064385c6b0682c09ec036609a73f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__620ea32e2bebfb20528329b3ae5831f322597d95dd5795fc6ce5bee4e33fbec1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba1aef65181db1a0051b7cc3e0f5210af5f1dbd8fa8c013e17672a3e3097bfb8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb9b2fc5b5c218d0643028d9afe2982405bb6181e5f40c3fac2ab6ef84a213c3(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__299e31b65fffb8bf0e3c2a70ffef743e730d8ee5a59d2a19eb5338e5074f6af1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d4b497cb011a6133f7608707bb91cac249a69db83f38626801318f3f6e9392e(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8b32d925398e6519b7f4d80de38a1bf3f7de314b43ee6ba21765eb8ae7a1dbc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86cc34c87e1c2d81e79d6309023c565598f2d9c44110b32f00b9d82daf639295(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6bd5b5fa770c89aa3aa5866d160c1a2a08ba6b88c074843c007d66a8a937f27(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdef60d1614d2f3601a4bd4bd6a28252405455eace4fce908fdd14f9197fc70c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efbba2fa69ae3743174c96210025457253685466a96aa6f91227befb135ab991(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fc2002b918d8a09ef269bd8d5b1d1168a20bed25d8494172f6e04a152020f7c(
    value: typing.Optional[typing.List[RosDesktops.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b55294dbcbbf93862814b175eed541beb9ed8c6f90030c0bff94c21b4e032dcb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__441b1f7f1911342bb501926092bcdd57fbd727f261eb2e95b2cb2b03000004d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a1a5e8e1790c293746b5cbcd705b50d46a2e3226ad2e9bb108b7dea7e08ce38(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea253ea2de3b46b0c52b024882e98593a0f3db8d76aad1bdef1c6a287691d8d2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5918b28308ae69a157e646d5f2548396236583e56234b899cd34e36fd21b1135(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48fd99c9a5d8546f63f43773ca78e43bd2cc5755d095e4d38619a14d3db9b8f1(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddb9eda05360ff5e245c21204f4b5593d4fe63b0f051e3b57ab14f3bed3fa3e9(
    *,
    bundle_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    office_site_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    amount: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    directory_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    hostname: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    promotion_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    user_assign_mode: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    volume_encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e0d929e2dd7e9691967c4b7a0b820f7a536f866051d9670cc8502f36be53932(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSimpleOfficeSiteProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a9c09bbfd977cbe2e88b0e1e32265a4fa64ca41ea8e6f9710e7fbf68c3992ac(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d8f438150a0e39e730e3dc22369a79b9dc8a6e016691b1a110a9cf6ee9aed49(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d24229f718b847e1d5f46a8c2783769b1201423bc84d634780924ace19db933(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5f37856df610c01b50c75ee511fa42ff410166eec6771231b5c2254326b90ec(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8a976d678df1fbcb7ffce96f651ba7971c9b27cd1625fc5b0ba4bced6671d8e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e76f3d5db0dfcb832c76426e71cfdbc457353e80a272ee9819f1a9833ad1d23(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d26e5ce33a41a0815796e19468ead592615d3e95e828e8a217974c9e93505884(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0db56b91f053b304dd908014483b97e47d3b98690042fce6fc74093385af4fa(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a344c037629111c5f44dc40ac07260429031df5f76581d0fd8c3b7bc0c57c7d8(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8366788704e1e2b91ef213c41497730aba2fbff56578b498ad9774b8fe06f11(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19fe03069465a1c59d7fa4c100bdc60a6f9795d04e2e7eb5bf03f9c40e73786(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5d886d307a3960982c65bfa3014c0318ddffc5a4a2bcf5d4cd2c71e5e6b3fe5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__687b546bb06c5ffad859aa2e1172b9c7f448c054ce9eee25f6ccb4777a04724b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52e50e72b36f87a641c4b9e02b96e6ce163eb1fab51e11dd7205e34b45b81a70(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__092e32e034ccc6ea7faf49778ebe9cb65c76b473b33a3528bdd67c4ba2110ad0(
    *,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_box_office_site: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_admin_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    need_verify_zero_device: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    office_site_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    verify_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc55b99e53b8c6361d09e855a7088525c872b22a8a2d5b7c905fd3c48dfcd6a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SimpleOfficeSiteProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ca54616a9b4ed7ce65b47c3947377465aad49e7792585c0b419f2d5e340e1a0(
    *,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cen_owner_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cloud_box_office_site: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    desktop_access_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_admin_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_internet_access: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    need_verify_zero_device: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    office_site_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    verify_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
