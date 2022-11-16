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

import ros_cdk_core


class Desktops(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.Desktops",
):
    '''A ROS resource type:  ``ALIYUN::ECD::Desktops``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["DesktopsProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[DesktopsProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDesktopId")
    def attr_desktop_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DesktopId: The ID of the cloud desktop.

        If multiple cloud desktops are created in a call, the
        IDs of the cloud desktops are returned.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDesktopId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The ID of the order.

        Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


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
        bundle_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        office_site_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desktop_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        directory_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        hostname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        promotion_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosDesktops.TagsProperty", typing.Dict[str, typing.Any]]]] = None,
        user_assign_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        volume_encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                bundle_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                office_site_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                policy_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                desktop_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                directory_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                hostname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                promotion_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
                user_assign_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                volume_encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bundle_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bundleId: The ID of the cloud desktop template.'''
        result = self._values.get("bundle_id")
        assert result is not None, "Required property 'bundle_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def office_site_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property officeSiteId: The ID of the workspace.'''
        result = self._values.get("office_site_id")
        assert result is not None, "Required property 'office_site_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyGroupId: The ID of the policy.'''
        result = self._values.get("policy_group_id")
        assert result is not None, "Required property 'policy_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property amount: The number of cloud desktops that you want to create.

        Valid values: 1 to 300. Default
        value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property chargeType: The billing method of the cloud desktop.

        Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property desktopName: The name of the cloud desktop.'''
        result = self._values.get("desktop_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you create multiple cloud desktops at a time.

        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        result = self._values.get("desktop_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property directoryId: This parameter is not open for use.'''
        result = self._values.get("directory_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.

        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        result = self._values.get("end_user_id")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property groupId: desktop group ID。 Note that the desktop group function is currently in the invitation test.

        If you want to experience it, please submit a work order application.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The subscription duration.

        The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property promotionId: promotion id.'''
        result = self._values.get("promotion_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property userName: This parameter is not open for use.'''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property volumeEncryptionEnabled: Whether to enable disk encryption.'''
        result = self._values.get("volume_encryption_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled.

        It can be obtained through the ListKeys interface.
        '''
        result = self._values.get("volume_encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: This parameter is not open for use.'''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DesktopsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDesktops(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ecd.RosDesktops",
):
    '''A ROS template type:  ``ALIYUN::ECD::Desktops``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosDesktopsProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ECD::Desktops``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosDesktopsProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDesktopId")
    def attr_desktop_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        DesktopId: The ID of the cloud desktop. If multiple cloud desktops are created in a call, the
        IDs of the cloud desktops are returned.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDesktopId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        OrderId: The ID of the order.
        Note This parameter is returned only when the ChargeType parameter is set to PrePaid.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bundleId")
    def bundle_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bundleId: The ID of the cloud desktop template.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bundleId"))

    @bundle_id.setter
    def bundle_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bundleId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="officeSiteId")
    def office_site_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: officeSiteId: The ID of the workspace.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "officeSiteId"))

    @office_site_id.setter
    def office_site_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "officeSiteId", value)

    @builtins.property
    @jsii.member(jsii_name="policyGroupId")
    def policy_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyGroupId: The ID of the policy.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyGroupId"))

    @policy_group_id.setter
    def policy_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="amount")
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
        value: 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "amount"))

    @amount.setter
    def amount(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "amount", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the cloud desktop. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="desktopName")
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desktopName: The name of the cloud desktop.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "desktopName"))

    @desktop_name.setter
    def desktop_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopName", value)

    @builtins.property
    @jsii.member(jsii_name="desktopNameSuffix")
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
        create multiple cloud desktops at a time.
        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "desktopNameSuffix"))

    @desktop_name_suffix.setter
    def desktop_name_suffix(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "desktopNameSuffix", value)

    @builtins.property
    @jsii.member(jsii_name="directoryId")
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: directoryId: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "directoryId"))

    @directory_id.setter
    def directory_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "directoryId", value)

    @builtins.property
    @jsii.member(jsii_name="endUserId")
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "endUserId"))

    @end_user_id.setter
    def end_user_id(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endUserId", value)

    @builtins.property
    @jsii.member(jsii_name="groupId")
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        groupId: desktop group ID。
        Note that the desktop group function is currently in the invitation test.
        If you want to experience it, please submit a work order application.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "groupId"))

    @group_id.setter
    def group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupId", value)

    @builtins.property
    @jsii.member(jsii_name="hostname")
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "hostname"))

    @hostname.setter
    def hostname(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostname", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="promotionId")
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: promotionId: promotion id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "promotionId"))

    @promotion_id.setter
    def promotion_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(
                value: typing.Optional[typing.List[RosDesktops.TagsProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="userAssignMode")
    def user_assign_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userAssignMode"))

    @user_assign_mode.setter
    def user_assign_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userAssignMode", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userName: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="volumeEncryptionEnabled")
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeEncryptionEnabled: Whether to enable disk encryption.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "volumeEncryptionEnabled"))

    @volume_encryption_enabled.setter
    def volume_encryption_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeEncryptionEnabled", value)

    @builtins.property
    @jsii.member(jsii_name="volumeEncryptionKey")
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "volumeEncryptionKey"))

    @volume_encryption_key.setter
    def volume_encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "volumeEncryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: This parameter is not open for use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                def stub(
                    *,
                    key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                    value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: The keyword of the tag.
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: The value of the tag.
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        bundle_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        office_site_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desktop_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        directory_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        hostname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        promotion_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
        user_assign_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        volume_encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                bundle_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                office_site_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                policy_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                amount: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                desktop_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                desktop_name_suffix: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                directory_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                end_user_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
                group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                hostname: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                promotion_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tags: typing.Optional[typing.Sequence[typing.Union[RosDesktops.TagsProperty, typing.Dict[str, typing.Any]]]] = None,
                user_assign_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                user_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                volume_encryption_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                volume_encryption_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def bundle_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bundleId: The ID of the cloud desktop template.
        '''
        result = self._values.get("bundle_id")
        assert result is not None, "Required property 'bundle_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def office_site_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: officeSiteId: The ID of the workspace.
        '''
        result = self._values.get("office_site_id")
        assert result is not None, "Required property 'office_site_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyGroupId: The ID of the policy.
        '''
        result = self._values.get("policy_group_id")
        assert result is not None, "Required property 'policy_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def amount(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        amount: The number of cloud desktops that you want to create. Valid values: 1 to 300. Default
        value: 1.
        '''
        result = self._values.get("amount")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        chargeType: The billing method of the cloud desktop. Valid values:
        PostPaid: pay-as-you-go
        PrePaid: subscription
        Default value: PostPaid.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desktop_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: desktopName: The name of the cloud desktop.
        '''
        result = self._values.get("desktop_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def desktop_name_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        desktopNameSuffix: Specifies whether to automatically add a suffix to the cloud desktop name when you
        create multiple cloud desktops at a time.
        True: automatically adds a suffix.
        False: does not add a suffix.
        '''
        result = self._values.get("desktop_name_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def directory_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: directoryId: This parameter is not open for use.
        '''
        result = self._values.get("directory_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property:

        endUserId: The user ID that authorizes the use of the cloud desktop, 1~100 can be set.
        During the same period, only one user can use the desktop.
        If EndUserId is not set, the created cloud desktop will not be assigned to any user.
        '''
        result = self._values.get("end_user_id")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        groupId: desktop group ID。
        Note that the desktop group function is currently in the invitation test.
        If you want to experience it, please submit a work order application.
        '''
        result = self._values.get("group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def hostname(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: The subscription duration. The unit of the value is specified by the PeriodUnit parameter. This parameter takes effect and is required only when the ChargeType parameter is set to PrePaid.
        If PeriodUnit is month, the valid range is 1, 2, 3, 6, 12, 24, 36, 48,60
        If periodUnit is year, the valid range is 1 to 5
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def promotion_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: promotionId: promotion id.
        '''
        result = self._values.get("promotion_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: userName: This parameter is not open for use.
        '''
        result = self._values.get("user_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_encryption_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeEncryptionEnabled: Whether to enable disk encryption.
        '''
        result = self._values.get("volume_encryption_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def volume_encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: volumeEncryptionKey: The key ID of the KMS used when disk encryption is enabled. It can be obtained through the ListKeys interface.
        '''
        result = self._values.get("volume_encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: This parameter is not open for use.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDesktopsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Desktops",
    "DesktopsProps",
    "RosDesktops",
    "RosDesktopsProps",
]

publication.publish()
