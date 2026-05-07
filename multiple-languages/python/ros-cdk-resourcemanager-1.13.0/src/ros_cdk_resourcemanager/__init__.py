'''
## Aliyun ROS RESOURCEMANAGER Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as RESOURCEMANAGER from '@alicloud/ros-cdk-resourcemanager';
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
    jsii_type="@alicloud/ros-cdk-resourcemanager.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "delete_account": "deleteAccount",
        "folder_id": "folderId",
        "payer_account_id": "payerAccountId",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delete_account: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payer_account_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Account``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account

        :param display_name: Property displayName: Member name.
        :param delete_account: Property deleteAccount: Whether delete the account. Default value is false.
        :param folder_id: Property folderId: The ID of the parent folder.
        :param payer_account_id: Property payerAccountId:.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7639357c264a2ad9492b699e5c0116dbd3b8905195ea94afe7876768bd1ee0e)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument delete_account", value=delete_account, expected_type=type_hints["delete_account"])
            check_type(argname="argument folder_id", value=folder_id, expected_type=type_hints["folder_id"])
            check_type(argname="argument payer_account_id", value=payer_account_id, expected_type=type_hints["payer_account_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
        }
        if delete_account is not None:
            self._values["delete_account"] = delete_account
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: Member name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delete_account(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deleteAccount: Whether delete the account.

        Default value is false.
        '''
        result = self._values.get("delete_account")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property folderId: The ID of the parent folder.'''
        result = self._values.get("folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payerAccountId:.'''
        result = self._values.get("payer_account_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"policy_id": "policyId", "target_id": "targetId"},
)
class ControlPolicyAttachmentProps:
    def __init__(
        self,
        *,
        policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ControlPolicyAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment

        :param policy_id: Property policyId: PolicyId.
        :param target_id: Property targetId: TargetId.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d13a515333b68d387942be7348f0fa5e8bee7154cc3b7566d51aee61db30b26a)
            check_type(argname="argument policy_id", value=policy_id, expected_type=type_hints["policy_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_id": policy_id,
            "target_id": target_id,
        }

    @builtins.property
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyId: PolicyId.'''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetId: TargetId.'''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "control_policy_name": "controlPolicyName",
        "effect_scope": "effectScope",
        "policy_document": "policyDocument",
        "description": "description",
    },
)
class ControlPolicyProps:
    def __init__(
        self,
        *,
        control_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        effect_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_document: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy

        :param control_policy_name: Property controlPolicyName: PolicyName.
        :param effect_scope: Property effectScope: EffectScope.
        :param policy_document: Property policyDocument: PolicyDocument.
        :param description: Property description: Description.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0020a7c6030fc74d716b4e265ddb702f194cd1ebb6b046a29ecb7694b91e83d1)
            check_type(argname="argument control_policy_name", value=control_policy_name, expected_type=type_hints["control_policy_name"])
            check_type(argname="argument effect_scope", value=effect_scope, expected_type=type_hints["effect_scope"])
            check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "control_policy_name": control_policy_name,
            "effect_scope": effect_scope,
            "policy_document": policy_document,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property controlPolicyName: PolicyName.'''
        result = self._values.get("control_policy_name")
        assert result is not None, "Required property 'control_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property effectScope: EffectScope.'''
        result = self._values.get("effect_scope")
        assert result is not None, "Required property 'effect_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyDocument: PolicyDocument.'''
        result = self._values.get("policy_document")
        assert result is not None, "Required property 'policy_document' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.DelegatedAdministratorProps",
    jsii_struct_bases=[],
    name_mapping={"account_id": "accountId", "service_principal": "servicePrincipal"},
)
class DelegatedAdministratorProps:
    def __init__(
        self,
        *,
        account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_principal: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``DelegatedAdministrator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator

        :param account_id: Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
        :param service_principal: Property servicePrincipal: The identifier of the trusted service.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0709d5ebdb53f1c89ff82b93d66273a5ab29cc66c98d4b5298648db9f4e4b93f)
            check_type(argname="argument account_id", value=account_id, expected_type=type_hints["account_id"])
            check_type(argname="argument service_principal", value=service_principal, expected_type=type_hints["service_principal"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_id": account_id,
            "service_principal": service_principal,
        }

    @builtins.property
    def account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountId: The Alibaba Cloud account ID of the member in the resource directory.'''
        result = self._values.get("account_id")
        assert result is not None, "Required property 'account_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property servicePrincipal: The identifier of the trusted service.'''
        result = self._values.get("service_principal")
        assert result is not None, "Required property 'service_principal' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DelegatedAdministratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.DeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_filter": "deliveryChannelFilter",
        "delivery_channel_name": "deliveryChannelName",
        "delivery_channel_description": "deliveryChannelDescription",
        "delivery_channel_id": "deliveryChannelId",
        "enabled_resource_change_delivery": "enabledResourceChangeDelivery",
        "enabled_resource_snapshot_delivery": "enabledResourceSnapshotDelivery",
        "resource_change_delivery": "resourceChangeDelivery",
        "resource_snapshot_delivery": "resourceSnapshotDelivery",
    },
)
class DeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliveryChannel.DeliveryChannelFilterProperty", typing.Dict[builtins.str, typing.Any]]],
        delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled_resource_change_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled_resource_snapshot_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliveryChannel.ResourceChangeDeliveryProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliveryChannel.ResourceSnapshotDeliveryProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``DeliveryChannel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel

        :param delivery_channel_filter: Property deliveryChannelFilter: The effective scope of the delivery channel.
        :param delivery_channel_name: Property deliveryChannelName: The name of the delivery channel.
        :param delivery_channel_description: Property deliveryChannelDescription: The description of the delivery channel.
        :param delivery_channel_id: Property deliveryChannelId: The ID of the delivery channel.
        :param enabled_resource_change_delivery: Property enabledResourceChangeDelivery: Enable resource change delivery.
        :param enabled_resource_snapshot_delivery: Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
        :param resource_change_delivery: Property resourceChangeDelivery: The delivery of resource configuration changes.
        :param resource_snapshot_delivery: Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b357501b818acd5290b71d77f372910e14fad0503961fb2f7d16c3609b774ae6)
            check_type(argname="argument delivery_channel_filter", value=delivery_channel_filter, expected_type=type_hints["delivery_channel_filter"])
            check_type(argname="argument delivery_channel_name", value=delivery_channel_name, expected_type=type_hints["delivery_channel_name"])
            check_type(argname="argument delivery_channel_description", value=delivery_channel_description, expected_type=type_hints["delivery_channel_description"])
            check_type(argname="argument delivery_channel_id", value=delivery_channel_id, expected_type=type_hints["delivery_channel_id"])
            check_type(argname="argument enabled_resource_change_delivery", value=enabled_resource_change_delivery, expected_type=type_hints["enabled_resource_change_delivery"])
            check_type(argname="argument enabled_resource_snapshot_delivery", value=enabled_resource_snapshot_delivery, expected_type=type_hints["enabled_resource_snapshot_delivery"])
            check_type(argname="argument resource_change_delivery", value=resource_change_delivery, expected_type=type_hints["resource_change_delivery"])
            check_type(argname="argument resource_snapshot_delivery", value=resource_snapshot_delivery, expected_type=type_hints["resource_snapshot_delivery"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "delivery_channel_filter": delivery_channel_filter,
            "delivery_channel_name": delivery_channel_name,
        }
        if delivery_channel_description is not None:
            self._values["delivery_channel_description"] = delivery_channel_description
        if delivery_channel_id is not None:
            self._values["delivery_channel_id"] = delivery_channel_id
        if enabled_resource_change_delivery is not None:
            self._values["enabled_resource_change_delivery"] = enabled_resource_change_delivery
        if enabled_resource_snapshot_delivery is not None:
            self._values["enabled_resource_snapshot_delivery"] = enabled_resource_snapshot_delivery
        if resource_change_delivery is not None:
            self._values["resource_change_delivery"] = resource_change_delivery
        if resource_snapshot_delivery is not None:
            self._values["resource_snapshot_delivery"] = resource_snapshot_delivery

    @builtins.property
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.DeliveryChannelFilterProperty"]:
        '''Property deliveryChannelFilter: The effective scope of the delivery channel.'''
        result = self._values.get("delivery_channel_filter")
        assert result is not None, "Required property 'delivery_channel_filter' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.DeliveryChannelFilterProperty"], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryChannelName: The name of the delivery channel.'''
        result = self._values.get("delivery_channel_name")
        assert result is not None, "Required property 'delivery_channel_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deliveryChannelDescription: The description of the delivery channel.'''
        result = self._values.get("delivery_channel_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deliveryChannelId: The ID of the delivery channel.'''
        result = self._values.get("delivery_channel_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled_resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enabledResourceChangeDelivery: Enable resource change delivery.'''
        result = self._values.get("enabled_resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled_resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.'''
        result = self._values.get("enabled_resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceChangeDeliveryProperty"]]:
        '''Property resourceChangeDelivery: The delivery of resource configuration changes.'''
        result = self._values.get("resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceChangeDeliveryProperty"]], result)

    @builtins.property
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliveryProperty"]]:
        '''Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.'''
        result = self._values.get("resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliveryProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.FolderProps",
    jsii_struct_bases=[],
    name_mapping={"folder_name": "folderName", "parent_folder_id": "parentFolderId"},
)
class FolderProps:
    def __init__(
        self,
        *,
        folder_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Folder``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder

        :param folder_name: Property folderName: The name of the folder.
        :param parent_folder_id: Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2bb0bf28a0b576f5ec57af57a1468416e449bfea96df2a75d561fca5539c6fbf)
            check_type(argname="argument folder_name", value=folder_name, expected_type=type_hints["folder_name"])
            check_type(argname="argument parent_folder_id", value=parent_folder_id, expected_type=type_hints["parent_folder_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property folderName: The name of the folder.'''
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property parentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        result = self._values.get("parent_folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FolderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.HandshakeProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_entity": "targetEntity",
        "target_type": "targetType",
        "note": "note",
    },
)
class HandshakeProps:
    def __init__(
        self,
        *,
        target_entity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Handshake``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake

        :param target_entity: Property targetEntity: Invited account ID or login email.
        :param target_type: Property targetType: Type of account being invited. Valid values: Account, Email
        :param note: Property note: Remarks.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d8a776d7f40429c78fec99dc4aeaabbefbdd7f3c6fce3048134a4f548ccf52b)
            check_type(argname="argument target_entity", value=target_entity, expected_type=type_hints["target_entity"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            check_type(argname="argument note", value=note, expected_type=type_hints["note"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetEntity: Invited account ID or login email.'''
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property targetType: Type of account being invited.

        Valid values: Account, Email
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property note: Remarks.'''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IAccount")
class IAccount(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Account``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: This ID of Resource Manager Account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the parent folder.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JoinMethod: Ways for members to join the resource directory.

        Valid values: invited, created
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: Member type.

        The value of ResourceAccount indicates the resource account
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        ...


class _IAccountProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Account``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IAccount"

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: This ID of Resource Manager Account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the parent folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JoinMethod: Ways for members to join the resource directory.

        Valid values: invited, created
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJoinMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: Member type.

        The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAccount).__jsii_proxy_class__ = lambda : _IAccountProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IControlPolicy")
class IControlPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ControlPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachmentCount: AttachmentCount.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlPolicyName: PolicyName.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EffectScope: EffectScope.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyDocument: PolicyDocument.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        ...


class _IControlPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ControlPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IControlPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachmentCount: AttachmentCount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachmentCount"))

    @builtins.property
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlPolicyName: PolicyName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrControlPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EffectScope: EffectScope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEffectScope"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyDocument: PolicyDocument.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        return typing.cast(ControlPolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IControlPolicy).__jsii_proxy_class__ = lambda : _IControlPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IControlPolicyAttachment")
class IControlPolicyAttachment(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ControlPolicyAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: AttachDate.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: PolicyName.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: TargetId.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyAttachmentProps:
        ...


class _IControlPolicyAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ControlPolicyAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IControlPolicyAttachment"

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: AttachDate.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: PolicyName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: TargetId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyAttachmentProps:
        return typing.cast(ControlPolicyAttachmentProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IControlPolicyAttachment).__jsii_proxy_class__ = lambda : _IControlPolicyAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IDelegatedAdministrator")
class IDelegatedAdministrator(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``DelegatedAdministrator``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDelegationEnabledTime")
    def attr_delegation_enabled_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrServicePrincipal")
    def attr_service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePrincipal: The identifier of the trusted service.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DelegatedAdministratorProps:
        ...


class _IDelegatedAdministratorProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DelegatedAdministrator``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IDelegatedAdministrator"

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDelegationEnabledTime")
    def attr_delegation_enabled_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDelegationEnabledTime"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePrincipal")
    def attr_service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePrincipal: The identifier of the trusted service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServicePrincipal"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DelegatedAdministratorProps:
        return typing.cast(DelegatedAdministratorProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDelegatedAdministrator).__jsii_proxy_class__ = lambda : _IDelegatedAdministratorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IDeliveryChannel")
class IDeliveryChannel(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``DeliveryChannel``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelId: The ID of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelName")
    def attr_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelName: The name of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The delivery of resource configuration changes.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliveryChannelProps:
        ...


class _IDeliveryChannelProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``DeliveryChannel``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IDeliveryChannel"

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelId: The ID of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelName")
    def attr_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelName: The name of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The delivery of resource configuration changes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliveryChannelProps:
        return typing.cast(DeliveryChannelProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDeliveryChannel).__jsii_proxy_class__ = lambda : _IDeliveryChannelProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IFolder")
class IFolder(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Folder``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the folder.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderName: The name of the folder.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FolderProps:
        ...


class _IFolderProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Folder``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IFolder"

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderName: The name of the folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderName"))

    @builtins.property
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentFolderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FolderProps:
        return typing.cast(FolderProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFolder).__jsii_proxy_class__ = lambda : _IFolderProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IHandshake")
class IHandshake(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Handshake``.'''

    @builtins.property
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HandshakeId: This ID of Resource Manager handshake.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: Resource account master account ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the main account of the resource directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: Remarks.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEntity: Invited account ID or login email.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: Type of account being invited.

        Valid values: Account, Email
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HandshakeProps:
        ...


class _IHandshakeProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Handshake``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IHandshake"

    @builtins.property
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HandshakeId: This ID of Resource Manager handshake.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHandshakeId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: Resource account master account ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the main account of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: Remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEntity: Invited account ID or login email.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetEntity"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: Type of account being invited.

        Valid values: Account, Email
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HandshakeProps:
        return typing.cast(HandshakeProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IHandshake).__jsii_proxy_class__ = lambda : _IHandshakeProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IMessageContact")
class IMessageContact(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``MessageContact``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of Message Contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrEmailAddress")
    def attr_email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EmailAddress: The email address of the contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactId")
    def attr_message_contact_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactId: The ID of Message Contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactName")
    def attr_message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactName: The name of the contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMessageTypes")
    def attr_message_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageTypes: The types of messages received by the contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPhoneNumber")
    def attr_phone_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PhoneNumber: The mobile phone number of the contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Title: The job title of the contact.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MessageContactProps":
        ...


class _IMessageContactProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MessageContact``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IMessageContact"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of Message Contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEmailAddress")
    def attr_email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EmailAddress: The email address of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEmailAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactId")
    def attr_message_contact_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactId: The ID of Message Contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageContactId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactName")
    def attr_message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactName: The name of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageContactName"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageTypes")
    def attr_message_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageTypes: The types of messages received by the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrPhoneNumber")
    def attr_phone_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PhoneNumber: The mobile phone number of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPhoneNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Title: The job title of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTitle"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MessageContactProps":
        return typing.cast("MessageContactProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMessageContact).__jsii_proxy_class__ = lambda : _IMessageContactProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-resourcemanager.IMultiAccountDeliveryChannel"
)
class IMultiAccountDeliveryChannel(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``MultiAccountDeliveryChannel``.'''

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelId")
    def attr_multi_account_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelId: The delivery channel ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelName")
    def attr_multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MultiAccountDeliveryChannelProps":
        ...


class _IMultiAccountDeliveryChannelProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``MultiAccountDeliveryChannel``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IMultiAccountDeliveryChannel"

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelId")
    def attr_multi_account_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelId: The delivery channel ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiAccountDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelName")
    def attr_multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiAccountDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MultiAccountDeliveryChannelProps":
        return typing.cast("MultiAccountDeliveryChannelProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IMultiAccountDeliveryChannel).__jsii_proxy_class__ = lambda : _IMultiAccountDeliveryChannelProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IPolicyAttachment")
class IPolicyAttachment(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``PolicyAttachment``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: Authorization time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Policy description.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: The type of the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalName: The name of the object to which you want to attach the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyAttachmentProps":
        ...


class _IPolicyAttachmentProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``PolicyAttachment``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IPolicyAttachment"

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: Authorization time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Policy description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: The type of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalName: The name of the object to which you want to attach the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrincipalName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrincipalType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyAttachmentProps":
        return typing.cast("PolicyAttachmentProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPolicyAttachment).__jsii_proxy_class__ = lambda : _IPolicyAttachmentProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IResourceDirectory")
class IResourceDirectory(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ResourceDirectory``.'''

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: The ID of the master account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the master account.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: The ID of the resource directory.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RootFolderId: The ID of the root folder.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceDirectoryProps":
        ...


class _IResourceDirectoryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ResourceDirectory``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IResourceDirectory"

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: The ID of the master account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the master account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: The ID of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RootFolderId: The ID of the root folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRootFolderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceDirectoryProps":
        return typing.cast("ResourceDirectoryProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourceDirectory).__jsii_proxy_class__ = lambda : _IResourceDirectoryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IResourceGroup")
class IResourceGroup(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ResourceGroup``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The unique identifier of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionStatuses: The status of the resource group in all regions.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceGroupProps":
        ...


class _IResourceGroupProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ResourceGroup``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IResourceGroup"

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The unique identifier of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionStatuses: The status of the resource group in all regions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionStatuses"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceGroupProps":
        return typing.cast("ResourceGroupProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourceGroup).__jsii_proxy_class__ = lambda : _IResourceGroupProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IResourceShare")
class IResourceShare(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ResourceShare``.'''

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareProps":
        ...


class _IResourceShareProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ResourceShare``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IResourceShare"

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareProps":
        return typing.cast("ResourceShareProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourceShare).__jsii_proxy_class__ = lambda : _IResourceShareProxy


@jsii.interface(
    jsii_type="@alicloud/ros-cdk-resourcemanager.IResourceShareAssociation"
)
class IResourceShareAssociation(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``ResourceShareAssociation``.'''

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareAssociationProps":
        ...


class _IResourceShareAssociationProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ResourceShareAssociation``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IResourceShareAssociation"

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareAssociationProps":
        return typing.cast("ResourceShareAssociationProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResourceShareAssociation).__jsii_proxy_class__ = lambda : _IResourceShareAssociationProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.IRole")
class IRole(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Role``.'''

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The resource descriptor of the role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrAssumeRolePolicyDocument")
    def attr_assume_role_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Role creation time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the Resource Manager role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrMaxSessionDuration")
    def attr_max_session_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSessionDuration: Role maximum session time.

        Valid values: [3600-43200].
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleId: This ID of Resource Manager role.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleName: Role Name.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateDate")
    def attr_update_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateDate: Role update time.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RoleProps":
        ...


class _IRoleProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Role``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.IRole"

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Arn: The resource descriptor of the role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrAssumeRolePolicyDocument")
    def attr_assume_role_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAssumeRolePolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Role creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the Resource Manager role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSessionDuration")
    def attr_max_session_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSessionDuration: Role maximum session time.

        Valid values: [3600-43200].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxSessionDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleId: This ID of Resource Manager role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleName: Role Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateDate")
    def attr_update_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateDate: Role update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RoleProps":
        return typing.cast("RoleProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRole).__jsii_proxy_class__ = lambda : _IRoleProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.ISavedQuery")
class ISavedQuery(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SavedQuery``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrExpression")
    def attr_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expression: Query Expression of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryId")
    def attr_saved_query_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryId: The id of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryName")
    def attr_saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryName: The name of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the template.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedQueryProps":
        ...


class _ISavedQueryProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SavedQuery``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.ISavedQuery"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrExpression")
    def attr_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expression: Query Expression of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryId")
    def attr_saved_query_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryId: The id of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedQueryId"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryName")
    def attr_saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryName: The name of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedQueryName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedQueryProps":
        return typing.cast("SavedQueryProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISavedQuery).__jsii_proxy_class__ = lambda : _ISavedQueryProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-resourcemanager.ISharedTarget")
class ISharedTarget(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``SharedTarget``.'''

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareName")
    def attr_resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareName: The name of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: The ID of the principal.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the resource share.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SharedTargetProps":
        ...


class _ISharedTargetProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``SharedTarget``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-resourcemanager.ISharedTarget"

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareName")
    def attr_resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareName: The name of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareName"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: The ID of the principal.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetId"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SharedTargetProps":
        return typing.cast("SharedTargetProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISharedTarget).__jsii_proxy_class__ = lambda : _ISharedTargetProxy


@jsii.implements(IMessageContact)
class MessageContact(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.MessageContact",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::MessageContact``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMessageContact``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MessageContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e16e61fcff8fd41e802bb74aac13d06b09fae74802b9b3c2e629d3dc2bb69710)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Creation time of Message Contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEmailAddress")
    def attr_email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EmailAddress: The email address of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEmailAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactId")
    def attr_message_contact_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactId: The ID of Message Contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageContactId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactName")
    def attr_message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageContactName: The name of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageContactName"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageTypes")
    def attr_message_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MessageTypes: The types of messages received by the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMessageTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrPhoneNumber")
    def attr_phone_number(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PhoneNumber: The mobile phone number of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPhoneNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Title: The job title of the contact.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTitle"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MessageContactProps":
        return typing.cast("MessageContactProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__697f13a365eeeb137802b60e0f249ad6e671bc0fe97ebebf54619b121d9f8a4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6b0b4d295a6671a6ccae9e74f7b4c1af9f03a9b3325d0450fbab6d7fc3bd2b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3fe917d95945f1b93ae4b9822d9402526bdb4e2c63c12413a72efb9d17445e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.MessageContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "email_address": "emailAddress",
        "message_contact_name": "messageContactName",
        "message_types": "messageTypes",
        "title": "title",
        "phone_number": "phoneNumber",
    },
)
class MessageContactProps:
    def __init__(
        self,
        *,
        email_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        phone_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MessageContact``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact

        :param email_address: Property emailAddress: The email address of the contact.
        :param message_contact_name: Property messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        :param message_types: Property messageTypes: The types of messages received by the contact.
        :param title: Property title: The job title of the contact. Valid values: - FinanceDirector. - TechnicalDirector. - MaintenanceDirector. - CEO. - ProjectDirector. - Other.
        :param phone_number: Property phoneNumber: The mobile phone number of the contact.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eeebb0d19119f06c571129b3fde3b1ed09ace2e1731b6aa0d92f69efb59d05b)
            check_type(argname="argument email_address", value=email_address, expected_type=type_hints["email_address"])
            check_type(argname="argument message_contact_name", value=message_contact_name, expected_type=type_hints["message_contact_name"])
            check_type(argname="argument message_types", value=message_types, expected_type=type_hints["message_types"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument phone_number", value=phone_number, expected_type=type_hints["phone_number"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "email_address": email_address,
            "message_contact_name": message_contact_name,
            "message_types": message_types,
            "title": title,
        }
        if phone_number is not None:
            self._values["phone_number"] = phone_number

    @builtins.property
    def email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property emailAddress: The email address of the contact.'''
        result = self._values.get("email_address")
        assert result is not None, "Required property 'email_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property messageContactName: The name of the contact.

        The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        '''
        result = self._values.get("message_contact_name")
        assert result is not None, "Required property 'message_contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property messageTypes: The types of messages received by the contact.'''
        result = self._values.get("message_types")
        assert result is not None, "Required property 'message_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property title: The job title of the contact.

        Valid values:

        - FinanceDirector.
        - TechnicalDirector.
        - MaintenanceDirector.
        - CEO.
        - ProjectDirector.
        - Other.
        '''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def phone_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phoneNumber: The mobile phone number of the contact.'''
        result = self._values.get("phone_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MessageContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IMultiAccountDeliveryChannel)
class MultiAccountDeliveryChannel(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannel",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::MultiAccountDeliveryChannel``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMultiAccountDeliveryChannel``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MultiAccountDeliveryChannelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44355f2a7828850718a921fbb63bf36aa14bce551c1fddc4866d403379f046df)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelId")
    def attr_multi_account_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelId: The delivery channel ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiAccountDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelName")
    def attr_multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMultiAccountDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "MultiAccountDeliveryChannelProps":
        return typing.cast("MultiAccountDeliveryChannelProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__072b52ad37aad9f22ac7c2f580e75f7e0b43703b39f4971684e8aac8d338295e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6eddb36d03a5facd1f000c582a3925c3e1caa47c894bb5adbf1ae1ddfab4f6f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61af591a7cdc9dd7118e52d21d440a9cfbede7432ee2b2a6dbe771353df65abe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.MultiAccountDeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_description": "deliveryChannelDescription",
        "delivery_channel_filter": "deliveryChannelFilter",
        "multi_account_delivery_channel_name": "multiAccountDeliveryChannelName",
        "multi_account_delivery_channel_id": "multiAccountDeliveryChannelId",
        "resource_change_delivery": "resourceChangeDelivery",
        "resource_snapshot_delivery": "resourceSnapshotDelivery",
    },
)
class MultiAccountDeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty", typing.Dict[builtins.str, typing.Any]]],
        multi_account_delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        multi_account_delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``MultiAccountDeliveryChannel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel

        :param delivery_channel_description: Property deliveryChannelDescription: The description of the delivery channel.
        :param delivery_channel_filter: Property deliveryChannelFilter: The effective scope of the delivery channel.
        :param multi_account_delivery_channel_name: Property multiAccountDeliveryChannelName: The name of the delivery channel.
        :param multi_account_delivery_channel_id: Property multiAccountDeliveryChannelId: Delivery Channel id.
        :param resource_change_delivery: Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
        :param resource_snapshot_delivery: Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5d4ac8ee5249489a8606917ad5792022aa52adad99f520218c5f0b8f800d506)
            check_type(argname="argument delivery_channel_description", value=delivery_channel_description, expected_type=type_hints["delivery_channel_description"])
            check_type(argname="argument delivery_channel_filter", value=delivery_channel_filter, expected_type=type_hints["delivery_channel_filter"])
            check_type(argname="argument multi_account_delivery_channel_name", value=multi_account_delivery_channel_name, expected_type=type_hints["multi_account_delivery_channel_name"])
            check_type(argname="argument multi_account_delivery_channel_id", value=multi_account_delivery_channel_id, expected_type=type_hints["multi_account_delivery_channel_id"])
            check_type(argname="argument resource_change_delivery", value=resource_change_delivery, expected_type=type_hints["resource_change_delivery"])
            check_type(argname="argument resource_snapshot_delivery", value=resource_snapshot_delivery, expected_type=type_hints["resource_snapshot_delivery"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "delivery_channel_description": delivery_channel_description,
            "delivery_channel_filter": delivery_channel_filter,
            "multi_account_delivery_channel_name": multi_account_delivery_channel_name,
        }
        if multi_account_delivery_channel_id is not None:
            self._values["multi_account_delivery_channel_id"] = multi_account_delivery_channel_id
        if resource_change_delivery is not None:
            self._values["resource_change_delivery"] = resource_change_delivery
        if resource_snapshot_delivery is not None:
            self._values["resource_snapshot_delivery"] = resource_snapshot_delivery

    @builtins.property
    def delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deliveryChannelDescription: The description of the delivery channel.'''
        result = self._values.get("delivery_channel_description")
        assert result is not None, "Required property 'delivery_channel_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty"]:
        '''Property deliveryChannelFilter: The effective scope of the delivery channel.'''
        result = self._values.get("delivery_channel_filter")
        assert result is not None, "Required property 'delivery_channel_filter' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty"], result)

    @builtins.property
    def multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property multiAccountDeliveryChannelName: The name of the delivery channel.'''
        result = self._values.get("multi_account_delivery_channel_name")
        assert result is not None, "Required property 'multi_account_delivery_channel_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def multi_account_delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAccountDeliveryChannelId: Delivery Channel id.'''
        result = self._values.get("multi_account_delivery_channel_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty"]]:
        '''Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.'''
        result = self._values.get("resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty"]], result)

    @builtins.property
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty"]]:
        '''Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.'''
        result = self._values.get("resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MultiAccountDeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IPolicyAttachment)
class PolicyAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.PolicyAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::PolicyAttachment``, which is used to attach a policy to an object.

    After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPolicyAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PolicyAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33627fd24e3218fbf1887592ea3f15252910bbf48a4bed0ee17b3971f1dfe81e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: Authorization time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Policy description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: The type of the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalName: The name of the object to which you want to attach the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrincipalName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PrincipalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPrincipalType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "PolicyAttachmentProps":
        return typing.cast("PolicyAttachmentProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ea1113b297994ad403ada2f2c10fb23078d48d4986103f8b4cb9ce0f1ed1ab5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56c9e836afdb6873a63b5f795850846c708c562f79b14f0a47a77a4e9b5d4507)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__53f4f777cc1e7e3402540b9363695f0e251a8d1988ed52b430f772534e02b3fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.PolicyAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "principal_name": "principalName",
        "principal_type": "principalType",
        "resource_group_id": "resourceGroupId",
    },
)
class PolicyAttachmentProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``PolicyAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment

        :param policy_name: Property policyName: The name of the policy.
        :param policy_type: Property policyType: The type of the policy.
        :param principal_name: Property principalName: The name of the object to which you want to attach the policy.
        :param principal_type: Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        :param resource_group_id: Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f30e5ca51763578188a2faa3ae9c0dcffcb3b211f46a302fe5b0befce07c80f)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument principal_name", value=principal_name, expected_type=type_hints["principal_name"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "principal_name": principal_name,
            "principal_type": principal_type,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: The name of the policy.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: The type of the policy.'''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalName: The name of the object to which you want to attach the policy.'''
        result = self._values.get("principal_name")
        assert result is not None, "Required property 'principal_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property principalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IResourceDirectory)
class ResourceDirectory(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectory",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceDirectory``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourceDirectory``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ResourceDirectoryProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__65a0c80a0a303cc75e60676e30f18919426b0fa66fc2e15eac406ef38a9c8110)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: The ID of the master account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the master account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: The ID of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RootFolderId: The ID of the root folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRootFolderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceDirectoryProps":
        return typing.cast("ResourceDirectoryProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8d88a50715e30603a73753454218d57d4479782407459af9bbf7b259bd620939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87073ecec6092b7938232a1776b92649d2c5a789b6f1f4c695fa97acbaf7dbb5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14700046a32370d45ff3c3b9c39336d9357411ce3b49f887377ef4a4ecb58306)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class ResourceDirectoryProps:
    def __init__(self) -> None:
        '''Properties for defining a ``ResourceDirectory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IResourceGroup)
class ResourceGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceGroup``The , which resource type creates a resource group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourceGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ResourceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7ed90935ee7fd6061d422eeb9524b483c86558e9cc2e6bf04dfdc96fc415781)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: The display name of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Id: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Name: The unique identifier of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RegionStatuses: The status of the resource group in all regions.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRegionStatuses"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceGroupProps":
        return typing.cast("ResourceGroupProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9058b0dba7acb04be0c4536e086a30d67ef7ed6d41b64d90f398b00ed0e24f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5924210a4618d152c1bd533a913a46b31f4a475943cb231689438547085d9b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b2251c36c9a90351fb4066a2410597ff7ee93ef51f9a11d12c40b1796a73d1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name", "tags": "tags"},
)
class ResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tags: typing.Optional[typing.Sequence[typing.Union["RosResourceGroup.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ResourceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup

        :param display_name: Property displayName: The display name of the resource group.
        :param name: Property name: The name of the resource group.
        :param tags: Property tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c216fb92c71e17244765ea6519e60248faa7fa17af9f74f53666594147a01cb3)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property displayName: The display name of the resource group.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the resource group.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosResourceGroup.TagsProperty"]]:
        '''Property tags: Tags to attach to resource group.

        Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosResourceGroup.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IResourceShare)
class ResourceShare(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShare",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceShare``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourceShare``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ResourceShareProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc0b8141fe562ed800d217f89266a2a0fef20c73a2dd9f98e774589c2242defe)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareProps":
        return typing.cast("ResourceShareProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f149f69327423f94bba794e37953d466596e7c04965e13b5d38652a74c580fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__996951d909979dc6edb5ad9e56b7f86d660ea73efb065f4f700a842ef96fb9b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7414ee073fc0ed0f9dfac9cac6e5108d0265154961e617dba02f574e55c832f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IResourceShareAssociation)
class ResourceShareAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShareAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceShareAssociation``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosResourceShareAssociation``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ResourceShareAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__540ed0ff059f05f5455339aeda77eb1587d57b4254aeecb81aacb8c372b01985)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "ResourceShareAssociationProps":
        return typing.cast("ResourceShareAssociationProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36af1889fd26980854708e43b50d99326f0b11359d91ed19618a907ffd96d395)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67f57148d0d4e4a9303e0b5b0a2da9fb755a0aac13e239e02fce244fb3048f71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59e3b785116c4386695960843a4824230a98052fc85a6bce2459298f2c58ec9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShareAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_id": "resourceShareId",
        "permission_names": "permissionNames",
        "resources": "resources",
        "targets": "targets",
    },
)
class ResourceShareAssociationProps:
    def __init__(
        self,
        *,
        resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceShareAssociation.ResourcesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ResourceShareAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation

        :param resource_share_id: Property resourceShareId: The ID of the resource share.
        :param permission_names: Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        :param resources: Property resources:.
        :param targets: Property targets: The shared target. A shared target shares the resources of resource owners. You can share your resources only with the member accounts in your resource directory. A shared target is indicated by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bee30ff4c73dabfe0c678dd3546ddc5d90057ef067e2b36c173ce491103eaf1f)
            check_type(argname="argument resource_share_id", value=resource_share_id, expected_type=type_hints["resource_share_id"])
            check_type(argname="argument permission_names", value=permission_names, expected_type=type_hints["permission_names"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_id": resource_share_id,
        }
        if permission_names is not None:
            self._values["permission_names"] = permission_names
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceShareId: The ID of the resource share.'''
        result = self._values.get("resource_share_id")
        assert result is not None, "Required property 'resource_share_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property permissionNames: Sharing permission name.

        When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        result = self._values.get("permission_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShareAssociation.ResourcesProperty"]]]]:
        '''Property resources:.'''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShareAssociation.ResourcesProperty"]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property targets: The shared target.

        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceShareAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShareProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_name": "resourceShareName",
        "allow_external_targets": "allowExternalTargets",
        "permission_names": "permissionNames",
        "resources": "resources",
        "targets": "targets",
    },
)
class ResourceShareProps:
    def __init__(
        self,
        *,
        resource_share_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_external_targets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosResourceShare.ResourcesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ResourceShare``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare

        :param resource_share_name: Property resourceShareName: The name of the resource share. The name must be 1 to 50 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        :param allow_external_targets: Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value: false (default): Only allow sharing within the resource directory. true: Allow sharing to any account.
        :param permission_names: Property permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        :param resources: Property resources:.
        :param targets: Property targets: The shared target. A shared target shares the resources of resource owners. You can share your resources only with the member accounts in your resource directory. A shared target is indicated by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__448cf42e96a8e1b1e53b0f3ef70e61f4ab5c7925d7679c25bbe62e667a77bbe8)
            check_type(argname="argument resource_share_name", value=resource_share_name, expected_type=type_hints["resource_share_name"])
            check_type(argname="argument allow_external_targets", value=allow_external_targets, expected_type=type_hints["allow_external_targets"])
            check_type(argname="argument permission_names", value=permission_names, expected_type=type_hints["permission_names"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_name": resource_share_name,
        }
        if allow_external_targets is not None:
            self._values["allow_external_targets"] = allow_external_targets
        if permission_names is not None:
            self._values["permission_names"] = permission_names
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceShareName: The name of the resource share.

        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("resource_share_name")
        assert result is not None, "Required property 'resource_share_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_external_targets(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.

        Value:
        false (default): Only allow sharing within the resource directory.
        true: Allow sharing to any account.
        '''
        result = self._values.get("allow_external_targets")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property permissionNames: Sharing permission name.

        When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        result = self._values.get("permission_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShare.ResourcesProperty"]]]]:
        '''Property resources:.'''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShare.ResourcesProperty"]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property targets: The shared target.

        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceShareProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IRole)
class Role(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Role",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::Role``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRole``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RoleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6093d93567766ca8411f5b5348a309aeb9261658a69a95e88f38f1f12e9dcb67)
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
        '''Attribute Arn: The resource descriptor of the role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrAssumeRolePolicyDocument")
    def attr_assume_role_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAssumeRolePolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Role creation time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the Resource Manager role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSessionDuration")
    def attr_max_session_duration(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MaxSessionDuration: Role maximum session time.

        Valid values: [3600-43200].
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMaxSessionDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleId: This ID of Resource Manager role.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RoleName: Role Name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateDate")
    def attr_update_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateDate: Role update time.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateDate"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "RoleProps":
        return typing.cast("RoleProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56c328648632da7ce92c7b801842e4b5a4b648bbb4ffccf75fdeb914a28e733d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4b5fdf79c3b8827cf6cd6e4e88b0a43dc88ef284fd8fa915acc00a00c94a705)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a223cdb3e99c85c026e29ef569c84330a8598d11d071f12f1c1969dee4268d59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "assume_role_policy_document": "assumeRolePolicyDocument",
        "role_name": "roleName",
        "description": "description",
        "max_session_duration": "maxSessionDuration",
    },
)
class RoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Role``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role

        :param assume_role_policy_document: Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
        :param role_name: Property roleName: Role Name.
        :param description: Property description: The description of the Resource Manager role.
        :param max_session_duration: Property maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61478dc9529cc2ea9d557267b8da6ab9d81bd79fbb33a05751612397c8242b0e)
            check_type(argname="argument assume_role_policy_document", value=assume_role_policy_document, expected_type=type_hints["assume_role_policy_document"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_session_duration", value=max_session_duration, expected_type=type_hints["max_session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.'''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property roleName: Role Name.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the Resource Manager role.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxSessionDuration: Role maximum session time.

        Valid values: [3600-43200]. Default to 3600.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosAccount",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::Account``, which is used to create a member of the resource account type.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Account`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccountProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a220cc117615de0a052353f3094c9b7e8e072cf08af6ea8e2c763c71fd95a4f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__95e2dbaa40dd4477b4b159653a3a225a138a32b96a32927e06cc21fe5df3abda)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountId: This ID of Resource Manager Account
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: Member name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FolderId: The ID of the parent folder
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJoinMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: Resource directory ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Type: Member type. The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Member name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fce637dd2aaef7b6ee4e06e371ce9d8f1f6e237124c79d3df18c39ea3479186)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1108be56cd957af7c6c50b136ab94d6634c86c41556d3c879e3edfdcbcabe08a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deleteAccount")
    def delete_account(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deleteAccount: Whether delete the account. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deleteAccount"))

    @delete_account.setter
    def delete_account(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b768504aef47a8049463e3074ac2f77c55f8e6b0824299d8abe56cc2d4ece211)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deleteAccount", value)

    @builtins.property
    @jsii.member(jsii_name="folderId")
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: folderId: The ID of the parent folder
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "folderId"))

    @folder_id.setter
    def folder_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa32fd08f7367e4b08bbb1f23a34b9d4e26b56b61d14396d81d259d8c479d5cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "folderId", value)

    @builtins.property
    @jsii.member(jsii_name="payerAccountId")
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payerAccountId:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payerAccountId"))

    @payer_account_id.setter
    def payer_account_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de9cfce981d939d949d754af3599731f51cac9920a504fae2572737f5c9b5b67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payerAccountId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "delete_account": "deleteAccount",
        "folder_id": "folderId",
        "payer_account_id": "payerAccountId",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delete_account: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payer_account_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAccount``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account

        :param display_name: 
        :param delete_account: 
        :param folder_id: 
        :param payer_account_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1a0d4e73d68818c70bba842c3aa0d493f859d050dd7521bc3e913d3dfcd5259)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument delete_account", value=delete_account, expected_type=type_hints["delete_account"])
            check_type(argname="argument folder_id", value=folder_id, expected_type=type_hints["folder_id"])
            check_type(argname="argument payer_account_id", value=payer_account_id, expected_type=type_hints["payer_account_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
        }
        if delete_account is not None:
            self._values["delete_account"] = delete_account
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: Member name
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delete_account(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deleteAccount: Whether delete the account. Default value is false.
        '''
        result = self._values.get("delete_account")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: folderId: The ID of the parent folder
        '''
        result = self._values.get("folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payerAccountId:
        '''
        result = self._values.get("payer_account_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ControlPolicy``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ControlPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b2fca5b3b8e8dc80b9ac61dad92094f23a72f60be0d3332e3d50e87baeea70d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__152f10b437dc5357357e0cb0f04dd3f05e936abf754f0676fb02bae4c6bb0333)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachmentCount: AttachmentCount
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachmentCount"))

    @builtins.property
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ControlPolicyName: PolicyName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrControlPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EffectScope: EffectScope
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEffectScope"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyDocument: PolicyDocument
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: PolicyId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyType: PolicyType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="controlPolicyName")
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: controlPolicyName: PolicyName
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "controlPolicyName"))

    @control_policy_name.setter
    def control_policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ed26cd504997de4d112a073f4eb566dd07adc70c4845d2380f062ddeb077320)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "controlPolicyName", value)

    @builtins.property
    @jsii.member(jsii_name="effectScope")
    def effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: effectScope: EffectScope
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "effectScope"))

    @effect_scope.setter
    def effect_scope(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c9fa352d16abb59420025499b07215cb35288cdab4db9b5b78304ee7da50885)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "effectScope", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcdbd9b99860ceaea1078632fdb86c32a7bdc0bdc08c23f565d68f0aa3bc6665)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyDocument")
    def policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyDocument: PolicyDocument
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyDocument"))

    @policy_document.setter
    def policy_document(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__761a547a5fdf97919bb1d4ad578c9825b9e2b86fcd69dc42ad97bad4f3438644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyDocument", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2571de878a5146db0ffdee2268417556b8e3928348d88c8dd475f6c8cc729166)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


class RosControlPolicyAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ControlPolicyAttachment``, which is used to attach a custom control policy.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ControlPolicyAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosControlPolicyAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bed538ba6cb5d1bbbf3563d6fa28b01548b4128c6155ebc3dd7c20a6643e5d9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6b5d237187044ce17c518ae2a19c89be7b466e1a4ef5e82961940cc43d20dc13)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachDate: AttachDate
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyId: PolicyId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyName: PolicyName
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyType: PolicyType
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetId: TargetId
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5c7bcca8b7ecd4a5a060d1c21ecdeec66f57515cc6d65308385fb8ac657962da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyId")
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyId: PolicyId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyId"))

    @policy_id.setter
    def policy_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36e598c367412da85db29e47ad4c2580bc8bbb635774f770957fa9f86d0fb99b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyId", value)

    @builtins.property
    @jsii.member(jsii_name="targetId")
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: TargetId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26cabe393e0966c74f91e47a5d267a5754e2747da37bf33b03995e6ad93b3094)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"policy_id": "policyId", "target_id": "targetId"},
)
class RosControlPolicyAttachmentProps:
    def __init__(
        self,
        *,
        policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosControlPolicyAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment

        :param policy_id: 
        :param target_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b93b99252ba4e0aee9b2f2da77849e1d15f47f298b54e9ce447fea277f2ef279)
            check_type(argname="argument policy_id", value=policy_id, expected_type=type_hints["policy_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_id": policy_id,
            "target_id": target_id,
        }

    @builtins.property
    def policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyId: PolicyId
        '''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetId: TargetId
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "control_policy_name": "controlPolicyName",
        "effect_scope": "effectScope",
        "policy_document": "policyDocument",
        "description": "description",
    },
)
class RosControlPolicyProps:
    def __init__(
        self,
        *,
        control_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        effect_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_document: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy

        :param control_policy_name: 
        :param effect_scope: 
        :param policy_document: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4c1ad57270429840b4cf80109870b0a112abeace255b512fe801625242b6807)
            check_type(argname="argument control_policy_name", value=control_policy_name, expected_type=type_hints["control_policy_name"])
            check_type(argname="argument effect_scope", value=effect_scope, expected_type=type_hints["effect_scope"])
            check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "control_policy_name": control_policy_name,
            "effect_scope": effect_scope,
            "policy_document": policy_document,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: controlPolicyName: PolicyName
        '''
        result = self._values.get("control_policy_name")
        assert result is not None, "Required property 'control_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: effectScope: EffectScope
        '''
        result = self._values.get("effect_scope")
        assert result is not None, "Required property 'effect_scope' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyDocument: PolicyDocument
        '''
        result = self._values.get("policy_document")
        assert result is not None, "Required property 'policy_document' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDelegatedAdministrator(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministrator",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::DelegatedAdministrator``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DelegatedAdministrator`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDelegatedAdministratorProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5222921cab6f3046fe31da8198b0477ae3407d36d6ec0cd12a9ab8c94823ac7b)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6f47e5bd14024f68acb5ac17d9831338609fc436e548d604ed9447159ddd1bd5)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountId: The Alibaba Cloud account ID of the member in the resource directory.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDelegationEnabledTime")
    def attr_delegation_enabled_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDelegationEnabledTime"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePrincipal")
    def attr_service_principal(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServicePrincipal: The identifier of the trusted service.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServicePrincipal"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accountId")
    def account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountId: The Alibaba Cloud account ID of the member in the resource directory.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountId"))

    @account_id.setter
    def account_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__023acfc54df8b6ced5f0200959fa77ac414aa4bd11f5ec444c01d1a54ae77236)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ac8d3cdd00ba783bc2dcc7ee13ab5c2fc98f788c8779b702dcd105448fac6b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="servicePrincipal")
    def service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: servicePrincipal: The identifier of the trusted service.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "servicePrincipal"))

    @service_principal.setter
    def service_principal(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27c9a8e07f54de162facf0556d9ba00b9aa0ac1d360f499c75a9fcbc70f9b03e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "servicePrincipal", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosDelegatedAdministratorProps",
    jsii_struct_bases=[],
    name_mapping={"account_id": "accountId", "service_principal": "servicePrincipal"},
)
class RosDelegatedAdministratorProps:
    def __init__(
        self,
        *,
        account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_principal: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosDelegatedAdministrator``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator

        :param account_id: 
        :param service_principal: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35d72c218b621e61faa0272aa972cc54b3e38efcedcfd0b6542b8be327fcb295)
            check_type(argname="argument account_id", value=account_id, expected_type=type_hints["account_id"])
            check_type(argname="argument service_principal", value=service_principal, expected_type=type_hints["service_principal"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_id": account_id,
            "service_principal": service_principal,
        }

    @builtins.property
    def account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: accountId: The Alibaba Cloud account ID of the member in the resource directory.
        '''
        result = self._values.get("account_id")
        assert result is not None, "Required property 'account_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: servicePrincipal: The identifier of the trusted service.
        '''
        result = self._values.get("service_principal")
        assert result is not None, "Required property 'service_principal' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDelegatedAdministratorProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDeliveryChannel(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::DeliveryChannel``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``DeliveryChannel`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDeliveryChannelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd70332f1da81916ea9f928dfc471c5a08d2f13caa49a1cf27acf9f5768d0427)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fec0f0b9897cc29d030529ceddceac6d5e40f2c859ca1b49372d38db98e6cb57)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelDescription: The description of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelFilter: The effective scope of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelId: The ID of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelName")
    def attr_delivery_channel_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelName: The name of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceChangeDelivery: The delivery of resource configuration changes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelFilter")
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.DeliveryChannelFilterProperty"]:
        '''
        :Property: deliveryChannelFilter: The effective scope of the delivery channel.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.DeliveryChannelFilterProperty"], jsii.get(self, "deliveryChannelFilter"))

    @delivery_channel_filter.setter
    def delivery_channel_filter(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.DeliveryChannelFilterProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ae56df83f8ec5585f6953b3d6f5bd043474825695d162dbeb1266cfc0d3c270)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelFilter", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelName")
    def delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryChannelName: The name of the delivery channel.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryChannelName"))

    @delivery_channel_name.setter
    def delivery_channel_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c067fdb5747716fae85043c09c4291e0d1b56104b08fd4798f54658b2eab3cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__221f9918440e8fab1668307887e8f5e9809305abe06afe55dc98b314ec25a7fb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelDescription")
    def delivery_channel_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelDescription: The description of the delivery channel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deliveryChannelDescription"))

    @delivery_channel_description.setter
    def delivery_channel_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8688aa445f5a056b7e38e2436bef0f150a2b701966a0f7bdd312d6c5e4b02c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelDescription", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelId")
    def delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelId: The ID of the delivery channel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deliveryChannelId"))

    @delivery_channel_id.setter
    def delivery_channel_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e178fab037a2c4008e8e144744c6c052643dfcf6e60290794f6fe81eeb32542)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelId", value)

    @builtins.property
    @jsii.member(jsii_name="enabledResourceChangeDelivery")
    def enabled_resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabledResourceChangeDelivery: Enable resource change delivery.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enabledResourceChangeDelivery"))

    @enabled_resource_change_delivery.setter
    def enabled_resource_change_delivery(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd3644ba0fba3e74c8964eb4304220066fba4f17943b8ed6baf00475fd29c34d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enabledResourceChangeDelivery", value)

    @builtins.property
    @jsii.member(jsii_name="enabledResourceSnapshotDelivery")
    def enabled_resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enabledResourceSnapshotDelivery"))

    @enabled_resource_snapshot_delivery.setter
    def enabled_resource_snapshot_delivery(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__354f26cc536abc18d78f617ab808999829b38b26ede9fa65c1ff0d9db5637474)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enabledResourceSnapshotDelivery", value)

    @builtins.property
    @jsii.member(jsii_name="resourceChangeDelivery")
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceChangeDeliveryProperty"]]:
        '''
        :Property: resourceChangeDelivery: The delivery of resource configuration changes.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceChangeDeliveryProperty"]], jsii.get(self, "resourceChangeDelivery"))

    @resource_change_delivery.setter
    def resource_change_delivery(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceChangeDeliveryProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a5b658d7de6f2e059655b1dfcc23a713709883a36c1122ba1940b567da64897)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceChangeDelivery", value)

    @builtins.property
    @jsii.member(jsii_name="resourceSnapshotDelivery")
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliveryProperty"]]:
        '''
        :Property: resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliveryProperty"]], jsii.get(self, "resourceSnapshotDelivery"))

    @resource_snapshot_delivery.setter
    def resource_snapshot_delivery(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliveryProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b77e46d4d9ee7ff2dad4140b337ee34830c092a1da88a822de63dc26a48442a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceSnapshotDelivery", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.DeliveryChannelFilterProperty",
        jsii_struct_bases=[],
        name_mapping={
            "account_scopes": "accountScopes",
            "resource_types": "resourceTypes",
        },
    )
    class DeliveryChannelFilterProperty:
        def __init__(
            self,
            *,
            account_scopes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            resource_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param account_scopes: 
            :param resource_types: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__56d98268fb5c8b0ee0fe3f7711582f933d48573b986158333d9ac074f8798a12)
                check_type(argname="argument account_scopes", value=account_scopes, expected_type=type_hints["account_scopes"])
                check_type(argname="argument resource_types", value=resource_types, expected_type=type_hints["resource_types"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if account_scopes is not None:
                self._values["account_scopes"] = account_scopes
            if resource_types is not None:
                self._values["resource_types"] = resource_types

        @builtins.property
        def account_scopes(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: accountScopes: The accounts within the delivery scope.
            '''
            result = self._values.get("account_scopes")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def resource_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: resourceTypes: The list of resource types to be delivered.
            '''
            result = self._values.get("resource_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeliveryChannelFilterProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceChangeDeliveryProperty",
        jsii_struct_bases=[],
        name_mapping={"sls_properties": "slsProperties", "target_arn": "targetArn"},
    )
    class ResourceChangeDeliveryProperty:
        def __init__(
            self,
            *,
            sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliveryChannel.SlsPropertiesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sls_properties: 
            :param target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__586cc6d29b2ee3a1ec5f8d2464ba80e4b1ba19790046d7ca6411d4ddb1dede7e)
                check_type(argname="argument sls_properties", value=sls_properties, expected_type=type_hints["sls_properties"])
                check_type(argname="argument target_arn", value=target_arn, expected_type=type_hints["target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if sls_properties is not None:
                self._values["sls_properties"] = sls_properties
            if target_arn is not None:
                self._values["target_arn"] = target_arn

        @builtins.property
        def sls_properties(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.SlsPropertiesProperty"]]:
            '''
            :Property: slsProperties: The SLS configurations.
            '''
            result = self._values.get("sls_properties")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.SlsPropertiesProperty"]], result)

        @builtins.property
        def target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            targetArn: The ARN of the destination. Valid values:

            - If you set TargetType to OSS, set TargetArn to the ARN of an OSS bucket that has the resourcecenter- prefix.
            - If you set TargetType to SLS, set TargetArn to the ARN of an SLS Logstore that has the resourcecenter- prefix.
            '''
            result = self._values.get("target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceChangeDeliveryProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliveryProperty",
        jsii_struct_bases=[],
        name_mapping={
            "custom_expression": "customExpression",
            "delivery_time": "deliveryTime",
            "sls_properties": "slsProperties",
            "target_arn": "targetArn",
        },
    )
    class ResourceSnapshotDeliveryProperty:
        def __init__(
            self,
            *,
            custom_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            delivery_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param custom_expression: 
            :param delivery_time: 
            :param sls_properties: 
            :param target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5dee376658530b5af6727a3d3c7c7c4e84e374b7e3cca6a8930d2f4c7ce4b318)
                check_type(argname="argument custom_expression", value=custom_expression, expected_type=type_hints["custom_expression"])
                check_type(argname="argument delivery_time", value=delivery_time, expected_type=type_hints["delivery_time"])
                check_type(argname="argument sls_properties", value=sls_properties, expected_type=type_hints["sls_properties"])
                check_type(argname="argument target_arn", value=target_arn, expected_type=type_hints["target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if custom_expression is not None:
                self._values["custom_expression"] = custom_expression
            if delivery_time is not None:
                self._values["delivery_time"] = delivery_time
            if sls_properties is not None:
                self._values["sls_properties"] = sls_properties
            if target_arn is not None:
                self._values["target_arn"] = target_arn

        @builtins.property
        def custom_expression(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: customExpression: The custom expression.
            '''
            result = self._values.get("custom_expression")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def delivery_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: deliveryTime: The delivery time.
            '''
            result = self._values.get("delivery_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sls_properties(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty"]]:
            '''
            :Property: slsProperties: The SLS configurations.
            '''
            result = self._values.get("sls_properties")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty"]], result)

        @builtins.property
        def target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetArn: The ARN of the destination.
            '''
            result = self._values.get("target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceSnapshotDeliveryProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty",
        jsii_struct_bases=[],
        name_mapping={"oversized_data_oss_target_arn": "oversizedDataOssTargetArn"},
    )
    class ResourceSnapshotDeliverySlsPropertiesProperty:
        def __init__(
            self,
            *,
            oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param oversized_data_oss_target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8fc95f0b4a2e6f5e1f20a21268ef29c90e621124c6c614ea91d3415855ed7d8c)
                check_type(argname="argument oversized_data_oss_target_arn", value=oversized_data_oss_target_arn, expected_type=type_hints["oversized_data_oss_target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if oversized_data_oss_target_arn is not None:
                self._values["oversized_data_oss_target_arn"] = oversized_data_oss_target_arn

        @builtins.property
        def oversized_data_oss_target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            '''
            result = self._values.get("oversized_data_oss_target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceSnapshotDeliverySlsPropertiesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannel.SlsPropertiesProperty",
        jsii_struct_bases=[],
        name_mapping={"oversized_data_oss_target_arn": "oversizedDataOssTargetArn"},
    )
    class SlsPropertiesProperty:
        def __init__(
            self,
            *,
            oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param oversized_data_oss_target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__9dba109913edf136b5ecd8a7b5d1704cc3b4a1cc496e775f988e864be5bd8036)
                check_type(argname="argument oversized_data_oss_target_arn", value=oversized_data_oss_target_arn, expected_type=type_hints["oversized_data_oss_target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if oversized_data_oss_target_arn is not None:
                self._values["oversized_data_oss_target_arn"] = oversized_data_oss_target_arn

        @builtins.property
        def oversized_data_oss_target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: oversizedDataOssTargetArn: The ARN of the destination OSS bucket for oversized files. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. Set this parameter to the ARN of an OSS bucket that has the resourcecenter- prefix.
            '''
            result = self._values.get("oversized_data_oss_target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsPropertiesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosDeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_filter": "deliveryChannelFilter",
        "delivery_channel_name": "deliveryChannelName",
        "delivery_channel_description": "deliveryChannelDescription",
        "delivery_channel_id": "deliveryChannelId",
        "enabled_resource_change_delivery": "enabledResourceChangeDelivery",
        "enabled_resource_snapshot_delivery": "enabledResourceSnapshotDelivery",
        "resource_change_delivery": "resourceChangeDelivery",
        "resource_snapshot_delivery": "resourceSnapshotDelivery",
    },
)
class RosDeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
        delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled_resource_change_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enabled_resource_snapshot_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosDeliveryChannel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel

        :param delivery_channel_filter: 
        :param delivery_channel_name: 
        :param delivery_channel_description: 
        :param delivery_channel_id: 
        :param enabled_resource_change_delivery: 
        :param enabled_resource_snapshot_delivery: 
        :param resource_change_delivery: 
        :param resource_snapshot_delivery: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9f3b888d988adf6955d1de849af794b0c94c70f0da9aa09ef3e765c01367b0d)
            check_type(argname="argument delivery_channel_filter", value=delivery_channel_filter, expected_type=type_hints["delivery_channel_filter"])
            check_type(argname="argument delivery_channel_name", value=delivery_channel_name, expected_type=type_hints["delivery_channel_name"])
            check_type(argname="argument delivery_channel_description", value=delivery_channel_description, expected_type=type_hints["delivery_channel_description"])
            check_type(argname="argument delivery_channel_id", value=delivery_channel_id, expected_type=type_hints["delivery_channel_id"])
            check_type(argname="argument enabled_resource_change_delivery", value=enabled_resource_change_delivery, expected_type=type_hints["enabled_resource_change_delivery"])
            check_type(argname="argument enabled_resource_snapshot_delivery", value=enabled_resource_snapshot_delivery, expected_type=type_hints["enabled_resource_snapshot_delivery"])
            check_type(argname="argument resource_change_delivery", value=resource_change_delivery, expected_type=type_hints["resource_change_delivery"])
            check_type(argname="argument resource_snapshot_delivery", value=resource_snapshot_delivery, expected_type=type_hints["resource_snapshot_delivery"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "delivery_channel_filter": delivery_channel_filter,
            "delivery_channel_name": delivery_channel_name,
        }
        if delivery_channel_description is not None:
            self._values["delivery_channel_description"] = delivery_channel_description
        if delivery_channel_id is not None:
            self._values["delivery_channel_id"] = delivery_channel_id
        if enabled_resource_change_delivery is not None:
            self._values["enabled_resource_change_delivery"] = enabled_resource_change_delivery
        if enabled_resource_snapshot_delivery is not None:
            self._values["enabled_resource_snapshot_delivery"] = enabled_resource_snapshot_delivery
        if resource_change_delivery is not None:
            self._values["resource_change_delivery"] = resource_change_delivery
        if resource_snapshot_delivery is not None:
            self._values["resource_snapshot_delivery"] = resource_snapshot_delivery

    @builtins.property
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.DeliveryChannelFilterProperty]:
        '''
        :Property: deliveryChannelFilter: The effective scope of the delivery channel.
        '''
        result = self._values.get("delivery_channel_filter")
        assert result is not None, "Required property 'delivery_channel_filter' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.DeliveryChannelFilterProperty], result)

    @builtins.property
    def delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryChannelName: The name of the delivery channel.
        '''
        result = self._values.get("delivery_channel_name")
        assert result is not None, "Required property 'delivery_channel_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelDescription: The description of the delivery channel.
        '''
        result = self._values.get("delivery_channel_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deliveryChannelId: The ID of the delivery channel.
        '''
        result = self._values.get("delivery_channel_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled_resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabledResourceChangeDelivery: Enable resource change delivery.
        '''
        result = self._values.get("enabled_resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enabled_resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
        '''
        result = self._values.get("enabled_resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceChangeDeliveryProperty]]:
        '''
        :Property: resourceChangeDelivery: The delivery of resource configuration changes.
        '''
        result = self._values.get("resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceChangeDeliveryProperty]], result)

    @builtins.property
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceSnapshotDeliveryProperty]]:
        '''
        :Property: resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
        '''
        result = self._values.get("resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceSnapshotDeliveryProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFolder(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosFolder",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::Folder``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Folder`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFolderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d59c011708fa20ab1e308ed4f39be7b1f1c0c138539883d1e044bab3bc0a421e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1242711d62e58edc142f894cba2dac0e75ec539f69b3e4c2ca61f5d652ef2c87)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FolderId: The ID of the folder
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FolderName: The name of the folder
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderName"))

    @builtins.property
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentFolderId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b4ded503192f9fe3cc6b157753425e0615df3473d6190e70bb954982c266f0d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="folderName")
    def folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: folderName: The name of the folder
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "folderName"))

    @folder_name.setter
    def folder_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a0d551efcdb8d985741b9ab2aa3c7c2dabc711aa8980478a5f33477ae47d054)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "folderName", value)

    @builtins.property
    @jsii.member(jsii_name="parentFolderId")
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "parentFolderId"))

    @parent_folder_id.setter
    def parent_folder_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0fbe409687dc84d14aa57f84761413e6e0cf49b4b75220c0f41fd050f315994)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "parentFolderId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosFolderProps",
    jsii_struct_bases=[],
    name_mapping={"folder_name": "folderName", "parent_folder_id": "parentFolderId"},
)
class RosFolderProps:
    def __init__(
        self,
        *,
        folder_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        parent_folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFolder``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder

        :param folder_name: 
        :param parent_folder_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd71f340f249bdf71bf57cbf0cdeceae8b40d3c0fdc197728fe812f8c1035623)
            check_type(argname="argument folder_name", value=folder_name, expected_type=type_hints["folder_name"])
            check_type(argname="argument parent_folder_id", value=parent_folder_id, expected_type=type_hints["parent_folder_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: folderName: The name of the folder
        '''
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        result = self._values.get("parent_folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFolderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHandshake(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosHandshake",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::Handshake``, which is used to create an invitation.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Handshake`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosHandshakeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc1cdc451989a3ad94bc1dbd8fe641df322c6ced5fb9345321a302daaa85ef28)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ba4ecac7efed08089dbec58bccabcaca05dbdf11ed6ca8cff61556402f81fd58)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HandshakeId: This ID of Resource Manager handshake
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHandshakeId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterAccountId: Resource account master account ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterAccountName: The name of the main account of the resource directory
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Note: Remarks
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: Resource directory ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetEntity: Invited account ID or login email
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetEntity"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetType: Type of account being invited. Valid values: Account, Email
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetType"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0fd3cc52f292a2556ddf0ae8e056e771804ff95edca20a07bdecb54363f33d00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="targetEntity")
    def target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetEntity: Invited account ID or login email
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetEntity"))

    @target_entity.setter
    def target_entity(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f92a9881dadcb5eebfaf38a17ae80dcff1b18b9e3d8a29f477b0a92632709c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetEntity", value)

    @builtins.property
    @jsii.member(jsii_name="targetType")
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4f9e057b8e24070b6296bab303985ce76837c4408f1ac7b3b9fe77037e3afaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetType", value)

    @builtins.property
    @jsii.member(jsii_name="note")
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: note: Remarks
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "note"))

    @note.setter
    def note(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7420f60bee3a1b995b237deb1380f1970f4fca7c7ad9d42f49ab61f22fb20932)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "note", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosHandshakeProps",
    jsii_struct_bases=[],
    name_mapping={
        "target_entity": "targetEntity",
        "target_type": "targetType",
        "note": "note",
    },
)
class RosHandshakeProps:
    def __init__(
        self,
        *,
        target_entity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosHandshake``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake

        :param target_entity: 
        :param target_type: 
        :param note: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd15530604f7abbdadcab47b61fb8602f5dc257fcac9f518ba2e2861de760950)
            check_type(argname="argument target_entity", value=target_entity, expected_type=type_hints["target_entity"])
            check_type(argname="argument target_type", value=target_type, expected_type=type_hints["target_type"])
            check_type(argname="argument note", value=note, expected_type=type_hints["note"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetEntity: Invited account ID or login email
        '''
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: note: Remarks
        '''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMessageContact(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosMessageContact",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::MessageContact``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MessageContact`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMessageContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfb6b7e29ef2bd3a7d6c3f7ea63a56faed1c96cb76bf545fc878279efac09f91)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1485a1af38c0b653c29641c1ef8faa72f0bafacc731877747323d51dd829ac48)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Creation time of Message Contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrEmailAddress")
    def attr_email_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EmailAddress: The email address of the contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEmailAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactId")
    def attr_message_contact_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MessageContactId: The ID of Message Contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessageContactId"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageContactName")
    def attr_message_contact_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MessageContactName: The name of the contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessageContactName"))

    @builtins.property
    @jsii.member(jsii_name="attrMessageTypes")
    def attr_message_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MessageTypes: The types of messages received by the contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMessageTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrPhoneNumber")
    def attr_phone_number(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PhoneNumber: The mobile phone number of the contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPhoneNumber"))

    @builtins.property
    @jsii.member(jsii_name="attrTitle")
    def attr_title(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Title: The job title of the contact.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTitle"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="emailAddress")
    def email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: emailAddress: The email address of the contact.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "emailAddress"))

    @email_address.setter
    def email_address(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b8fe1c118069a8815222e4348f348ae12d76bf3d63d1ceeeba7ff9510869da7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "emailAddress", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__682504d2289757bad819496339d53acef9af9cf00b81d20e64cf10e4dc3bca1f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="messageContactName")
    def message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "messageContactName"))

    @message_contact_name.setter
    def message_contact_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df9267b95391e923168168ae465e37c52fdda6922123cd33873480a160905a0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "messageContactName", value)

    @builtins.property
    @jsii.member(jsii_name="messageTypes")
    def message_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: messageTypes: The types of messages received by the contact.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "messageTypes"))

    @message_types.setter
    def message_types(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdb7554601d5cd4c1876d1a346c53220be1b4d636747a3525309079778c35fa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "messageTypes", value)

    @builtins.property
    @jsii.member(jsii_name="title")
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        title: The job title of the contact. Valid values:

        - FinanceDirector.
        - TechnicalDirector.
        - MaintenanceDirector.
        - CEO.
        - ProjectDirector.
        - Other.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "title"))

    @title.setter
    def title(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fa63155bf817c1ff87f8864ffcb9a254683db171037e49b66a8175dfaec708b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "title", value)

    @builtins.property
    @jsii.member(jsii_name="phoneNumber")
    def phone_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phoneNumber: The mobile phone number of the contact.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phoneNumber"))

    @phone_number.setter
    def phone_number(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c71c6714cd2458c3f30dec19b3290e672ed04592a61c0e7cf89de6d73e512b2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phoneNumber", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosMessageContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "email_address": "emailAddress",
        "message_contact_name": "messageContactName",
        "message_types": "messageTypes",
        "title": "title",
        "phone_number": "phoneNumber",
    },
)
class RosMessageContactProps:
    def __init__(
        self,
        *,
        email_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        message_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        phone_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMessageContact``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact

        :param email_address: 
        :param message_contact_name: 
        :param message_types: 
        :param title: 
        :param phone_number: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0589841ef054c9886d7dfee73cff36ed7616a46cd73ee50bc4209403e49ec9ff)
            check_type(argname="argument email_address", value=email_address, expected_type=type_hints["email_address"])
            check_type(argname="argument message_contact_name", value=message_contact_name, expected_type=type_hints["message_contact_name"])
            check_type(argname="argument message_types", value=message_types, expected_type=type_hints["message_types"])
            check_type(argname="argument title", value=title, expected_type=type_hints["title"])
            check_type(argname="argument phone_number", value=phone_number, expected_type=type_hints["phone_number"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "email_address": email_address,
            "message_contact_name": message_contact_name,
            "message_types": message_types,
            "title": title,
        }
        if phone_number is not None:
            self._values["phone_number"] = phone_number

    @builtins.property
    def email_address(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: emailAddress: The email address of the contact.
        '''
        result = self._values.get("email_address")
        assert result is not None, "Required property 'email_address' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
        '''
        result = self._values.get("message_contact_name")
        assert result is not None, "Required property 'message_contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def message_types(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: messageTypes: The types of messages received by the contact.
        '''
        result = self._values.get("message_types")
        assert result is not None, "Required property 'message_types' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def title(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        title: The job title of the contact. Valid values:

        - FinanceDirector.
        - TechnicalDirector.
        - MaintenanceDirector.
        - CEO.
        - ProjectDirector.
        - Other.
        '''
        result = self._values.get("title")
        assert result is not None, "Required property 'title' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def phone_number(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phoneNumber: The mobile phone number of the contact.
        '''
        result = self._values.get("phone_number")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMessageContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMultiAccountDeliveryChannel(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::MultiAccountDeliveryChannel``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MultiAccountDeliveryChannel`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMultiAccountDeliveryChannelProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6525aee9dcb123a95722c17c2a6064d372c523b6b4199a257a460c75acc4b4e0)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1e2ffd88fa7cb7307bb2a77d99839981258193e1c64b501f745be5061f916c3b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelDescription: The description of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DeliveryChannelFilter: The effective scope of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelId")
    def attr_multi_account_delivery_channel_id(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MultiAccountDeliveryChannelId: The delivery channel ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMultiAccountDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrMultiAccountDeliveryChannelName")
    def attr_multi_account_delivery_channel_name(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MultiAccountDeliveryChannelName: The name of the delivery channel.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMultiAccountDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelDescription")
    def delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryChannelDescription: The description of the delivery channel.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deliveryChannelDescription"))

    @delivery_channel_description.setter
    def delivery_channel_description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1632ea3862de66665f0716e51400c448d4dd08cd05773133bdf49395eebb66e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelDescription", value)

    @builtins.property
    @jsii.member(jsii_name="deliveryChannelFilter")
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty"]:
        '''
        :Property: deliveryChannelFilter: The effective scope of the delivery channel.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty"], jsii.get(self, "deliveryChannelFilter"))

    @delivery_channel_filter.setter
    def delivery_channel_filter(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89b2f0e6694e31f519e96bf621a8e5da0ce5f138ad06439f56ce372ab9565291)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deliveryChannelFilter", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c5ae8f7a47a6498f72e15fa9671d4248ebf7ac356d22cab3ce02089497762c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="multiAccountDeliveryChannelName")
    def multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: multiAccountDeliveryChannelName: The name of the delivery channel.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "multiAccountDeliveryChannelName"))

    @multi_account_delivery_channel_name.setter
    def multi_account_delivery_channel_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__017fffa25d6b73c53b5754c06c9cf873f7cf471548592a903a676ca12caeb215)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAccountDeliveryChannelName", value)

    @builtins.property
    @jsii.member(jsii_name="multiAccountDeliveryChannelId")
    def multi_account_delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAccountDeliveryChannelId: Delivery Channel id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAccountDeliveryChannelId"))

    @multi_account_delivery_channel_id.setter
    def multi_account_delivery_channel_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdac00a0a6190ceacef1ee4531bfb504d8eb95ab87db523125189309039123f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAccountDeliveryChannelId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceChangeDelivery")
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty"]]:
        '''
        :Property: resourceChangeDelivery: The configurations for delivery of resource configuration change events.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty"]], jsii.get(self, "resourceChangeDelivery"))

    @resource_change_delivery.setter
    def resource_change_delivery(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a170ca6249756a60fb59e71025dc9d853dbfca3c334fd1e1e2914cbb97ba49eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceChangeDelivery", value)

    @builtins.property
    @jsii.member(jsii_name="resourceSnapshotDelivery")
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty"]]:
        '''
        :Property: resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty"]], jsii.get(self, "resourceSnapshotDelivery"))

    @resource_snapshot_delivery.setter
    def resource_snapshot_delivery(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e474f3f9e45fa72d4f7106fbea2cae2d282554f44f7178bdfc44ccc52854bc90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceSnapshotDelivery", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty",
        jsii_struct_bases=[],
        name_mapping={
            "account_scopes": "accountScopes",
            "resource_types": "resourceTypes",
        },
    )
    class DeliveryChannelFilterProperty:
        def __init__(
            self,
            *,
            account_scopes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            resource_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param account_scopes: 
            :param resource_types: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__8c6180bf1fb817c07c5f737f176106e593c61c4016ce4dbbaa3a40f66506e3f7)
                check_type(argname="argument account_scopes", value=account_scopes, expected_type=type_hints["account_scopes"])
                check_type(argname="argument resource_types", value=resource_types, expected_type=type_hints["resource_types"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "account_scopes": account_scopes,
            }
            if resource_types is not None:
                self._values["resource_types"] = resource_types

        @builtins.property
        def account_scopes(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: accountScopes: The account scopes of the delivery channel.
            '''
            result = self._values.get("account_scopes")
            assert result is not None, "Required property 'account_scopes' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def resource_types(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: resourceTypes: The effective resource type of the delivery channel.
            '''
            result = self._values.get("resource_types")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeliveryChannelFilterProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty",
        jsii_struct_bases=[],
        name_mapping={"sls_properties": "slsProperties", "target_arn": "targetArn"},
    )
    class ResourceChangeDeliveryProperty:
        def __init__(
            self,
            *,
            sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMultiAccountDeliveryChannel.SlsPropertiesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param sls_properties: 
            :param target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__94d8d580e04f4c2f08761903ce23142a89b4379cc240ab8af620a6bb9466ded1)
                check_type(argname="argument sls_properties", value=sls_properties, expected_type=type_hints["sls_properties"])
                check_type(argname="argument target_arn", value=target_arn, expected_type=type_hints["target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if sls_properties is not None:
                self._values["sls_properties"] = sls_properties
            if target_arn is not None:
                self._values["target_arn"] = target_arn

        @builtins.property
        def sls_properties(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.SlsPropertiesProperty"]]:
            '''
            :Property: slsProperties: The SLS configurations.
            '''
            result = self._values.get("sls_properties")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMultiAccountDeliveryChannel.SlsPropertiesProperty"]], result)

        @builtins.property
        def target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetArn: Target Arn.
            '''
            result = self._values.get("target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceChangeDeliveryProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty",
        jsii_struct_bases=[],
        name_mapping={"delivery_time": "deliveryTime", "target_arn": "targetArn"},
    )
    class ResourceSnapshotDeliveryProperty:
        def __init__(
            self,
            *,
            delivery_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param delivery_time: 
            :param target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__af1b19fafee34cfb29e6ef92cb3a31764b4fc1f9485659cd6a02499583a6b604)
                check_type(argname="argument delivery_time", value=delivery_time, expected_type=type_hints["delivery_time"])
                check_type(argname="argument target_arn", value=target_arn, expected_type=type_hints["target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if delivery_time is not None:
                self._values["delivery_time"] = delivery_time
            if target_arn is not None:
                self._values["target_arn"] = target_arn

        @builtins.property
        def delivery_time(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: deliveryTime: The delivery time.
            '''
            result = self._values.get("delivery_time")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: targetArn: The ARN of the delivery destination.
            '''
            result = self._values.get("target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceSnapshotDeliveryProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannel.SlsPropertiesProperty",
        jsii_struct_bases=[],
        name_mapping={"oversized_data_oss_target_arn": "oversizedDataOssTargetArn"},
    )
    class SlsPropertiesProperty:
        def __init__(
            self,
            *,
            oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param oversized_data_oss_target_arn: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__56b7b68b9eb2c8a0ab6d3557fdeddcbd159932c0739530c6d38900cefd99d378)
                check_type(argname="argument oversized_data_oss_target_arn", value=oversized_data_oss_target_arn, expected_type=type_hints["oversized_data_oss_target_arn"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if oversized_data_oss_target_arn is not None:
                self._values["oversized_data_oss_target_arn"] = oversized_data_oss_target_arn

        @builtins.property
        def oversized_data_oss_target_arn(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: oversizedDataOssTargetArn: The ARN of the delivery destination for oversized data. If the size of a resource configuration change event exceeds 1 MB, the event is delivered as an OSS object. You must enter the ARN of an OSS bucket that has a prefix of resourcecenter-.
            '''
            result = self._values.get("oversized_data_oss_target_arn")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SlsPropertiesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosMultiAccountDeliveryChannelProps",
    jsii_struct_bases=[],
    name_mapping={
        "delivery_channel_description": "deliveryChannelDescription",
        "delivery_channel_filter": "deliveryChannelFilter",
        "multi_account_delivery_channel_name": "multiAccountDeliveryChannelName",
        "multi_account_delivery_channel_id": "multiAccountDeliveryChannelId",
        "resource_change_delivery": "resourceChangeDelivery",
        "resource_snapshot_delivery": "resourceSnapshotDelivery",
    },
)
class RosMultiAccountDeliveryChannelProps:
    def __init__(
        self,
        *,
        delivery_channel_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
        multi_account_delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        multi_account_delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosMultiAccountDeliveryChannel``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel

        :param delivery_channel_description: 
        :param delivery_channel_filter: 
        :param multi_account_delivery_channel_name: 
        :param multi_account_delivery_channel_id: 
        :param resource_change_delivery: 
        :param resource_snapshot_delivery: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41e27e4a903f7aff43210e6e57c34ff154c35b5c78dc522ce5d2c0f637ccd08f)
            check_type(argname="argument delivery_channel_description", value=delivery_channel_description, expected_type=type_hints["delivery_channel_description"])
            check_type(argname="argument delivery_channel_filter", value=delivery_channel_filter, expected_type=type_hints["delivery_channel_filter"])
            check_type(argname="argument multi_account_delivery_channel_name", value=multi_account_delivery_channel_name, expected_type=type_hints["multi_account_delivery_channel_name"])
            check_type(argname="argument multi_account_delivery_channel_id", value=multi_account_delivery_channel_id, expected_type=type_hints["multi_account_delivery_channel_id"])
            check_type(argname="argument resource_change_delivery", value=resource_change_delivery, expected_type=type_hints["resource_change_delivery"])
            check_type(argname="argument resource_snapshot_delivery", value=resource_snapshot_delivery, expected_type=type_hints["resource_snapshot_delivery"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "delivery_channel_description": delivery_channel_description,
            "delivery_channel_filter": delivery_channel_filter,
            "multi_account_delivery_channel_name": multi_account_delivery_channel_name,
        }
        if multi_account_delivery_channel_id is not None:
            self._values["multi_account_delivery_channel_id"] = multi_account_delivery_channel_id
        if resource_change_delivery is not None:
            self._values["resource_change_delivery"] = resource_change_delivery
        if resource_snapshot_delivery is not None:
            self._values["resource_snapshot_delivery"] = resource_snapshot_delivery

    @builtins.property
    def delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: deliveryChannelDescription: The description of the delivery channel.
        '''
        result = self._values.get("delivery_channel_description")
        assert result is not None, "Required property 'delivery_channel_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def delivery_channel_filter(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty]:
        '''
        :Property: deliveryChannelFilter: The effective scope of the delivery channel.
        '''
        result = self._values.get("delivery_channel_filter")
        assert result is not None, "Required property 'delivery_channel_filter' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty], result)

    @builtins.property
    def multi_account_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: multiAccountDeliveryChannelName: The name of the delivery channel.
        '''
        result = self._values.get("multi_account_delivery_channel_name")
        assert result is not None, "Required property 'multi_account_delivery_channel_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def multi_account_delivery_channel_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAccountDeliveryChannelId: Delivery Channel id.
        '''
        result = self._values.get("multi_account_delivery_channel_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_change_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty]]:
        '''
        :Property: resourceChangeDelivery: The configurations for delivery of resource configuration change events.
        '''
        result = self._values.get("resource_change_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty]], result)

    @builtins.property
    def resource_snapshot_delivery(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty]]:
        '''
        :Property: resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
        '''
        result = self._values.get("resource_snapshot_delivery")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMultiAccountDeliveryChannelProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPolicyAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosPolicyAttachment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::PolicyAttachment``, which is used to attach a policy to an object.

    After you attach a policy to an object, the object has the permissions to manage the resources in the current resource group or within the current Alibaba Cloud account.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``PolicyAttachment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPolicyAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe26f4d354475e1623bfd0b4e72d5634ba4cb5a3a7321645b1581b689beb0943)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c8e26cc0193d5ae9e094313e2baa738bca88e0701034f712b4b8bc43c35e16f4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AttachDate: Authorization time
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: Policy description
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyName: The name of the policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyType: The type of the policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrincipalName: The name of the object to which you want to attach the policy
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrincipalName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrincipalType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__fa6e628dd85ab10bb4993da770c63545b16868ccf86859438ad6d6204fc345d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3185f3652a0ef7dbbd1921469db6cc2b2260130ca4f876c57dc884487049cb67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the policy
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0176e23b95f9368a9e20aa194fd91404187d6a6be114385bdd8ab97132fc34e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="principalName")
    def principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalName: The name of the object to which you want to attach the policy
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalName"))

    @principal_name.setter
    def principal_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b639fed54f0f25c0122b59cdf927c250211c966893cf4feb84e0ed065ebb6e31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalName", value)

    @builtins.property
    @jsii.member(jsii_name="principalType")
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "principalType"))

    @principal_type.setter
    def principal_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8137fdcd1814790e0eb90a515424c590c6da3fd88672184a903f42da300d7503)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "principalType", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d1dde2049d1f83a7d5f697ad4480b0433108a3db183683b49ca759d9666c954)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosPolicyAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "principal_name": "principalName",
        "principal_type": "principalType",
        "resource_group_id": "resourceGroupId",
    },
)
class RosPolicyAttachmentProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPolicyAttachment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-policyattachment

        :param policy_name: 
        :param policy_type: 
        :param principal_name: 
        :param principal_type: 
        :param resource_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaee16eeb73c12e79cd625177043b9137b5caa4b70eeae2a49700bb0ab0a9b6c)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument principal_name", value=principal_name, expected_type=type_hints["principal_name"])
            check_type(argname="argument principal_type", value=principal_type, expected_type=type_hints["principal_type"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "principal_name": principal_name,
            "principal_type": principal_type,
        }
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the policy
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: The type of the policy
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalName: The name of the object to which you want to attach the policy
        '''
        result = self._values.get("principal_name")
        assert result is not None, "Required property 'principal_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def principal_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceDirectory(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectory",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceDirectory``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourceDirectory`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourceDirectoryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a1a7a96d9856afe269a9603059b34f8a4073b2b381d1c001e8f487e54d4bed2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c067f30a2bcc7f9269b8c76176849c2ed68f97b3de5a5d0cbf87c2b5ff814072)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterAccountId: The ID of the master account
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterAccountName: The name of the master account
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: The ID of the resource directory
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RootFolderId: The ID of the root folder
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRootFolderId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a6a5bfc26055b8efc5cf46c61184cc8a7ea3e989a713649e087a4ebdbda7cbe7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosResourceDirectoryProps:
    def __init__(self) -> None:
        '''Properties for defining a ``RosResourceDirectory``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
        '''
        self._values: typing.Dict[builtins.str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceGroup``The , which resource type creates a resource group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourceGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourceGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71c0b6abfcc45aac4a70674165495cf40f5d9b378bd1966d6bfe990f8e3e5f0e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e3e93abb5b8ab56483e2491c6320361764ed2d622bab00fa8f00b2fa52d13cbb)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: The display name of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The unique identifier of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionStatuses: The status of the resource group in all regions.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionStatuses"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The display name of the resource group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6485d44a375754556b3d71b79d686f89516a67fec805f8369d0a347691b4f43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32349998b79055ed88bbf1eee48d5d3095d547ba2de055e88b3ee5d08e9bccab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the resource group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3c841961e58a6d6b8cabc46d3f14e81578258d51ceebbfdc4b600f343ea0fe1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosResourceGroup.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosResourceGroup.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosResourceGroup.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98d659448cbf4de7746aac1a82a3ba01e425669a7c3ed69a5cce7e5a2511f3b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroup.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__d6cddee3945d05bee575102eb96cef82a5ae414a6730f5c9e83e6d267b47f0f7)
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
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name", "tags": "tags"},
)
class RosResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        tags: typing.Optional[typing.Sequence[typing.Union[RosResourceGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosResourceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup

        :param display_name: 
        :param name: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a103364ea58dc8d0675d0af32d88bc0be8f151aba6e70846e4464a56e3e49d8)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The display name of the resource group.
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the resource group.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosResourceGroup.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to resource group. Max support 20 tags to add during create resource group. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosResourceGroup.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceShare(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShare",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceShare``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourceShare`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourceShareProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc2f2c89c829a41ba211cbdfb75960d7624065f6ed0a53e0e512d901c2800b26)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1e1edc209df9816aab8896e2eda7cf0a7da64dc7fded1c15402774c884308dbf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceShareId: The ID of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__6f565e9f0c8c90dae0bfa4b1ae56a51ea9b0c51be483f8a25ad4fc8994bb6a82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceShareName")
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceShareName: The name of the resource share.
        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceShareName"))

    @resource_share_name.setter
    def resource_share_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e2c309446391c35c1b994a135a6e4949ca862e3aea45785afd6c6c63523af48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceShareName", value)

    @builtins.property
    @jsii.member(jsii_name="allowExternalTargets")
    def allow_external_targets(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
        false (default): Only allow sharing within the resource directory.
        true: Allow sharing to any account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowExternalTargets"))

    @allow_external_targets.setter
    def allow_external_targets(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1cc6a1dc2233e127a82699a72f1c43c41b5c68c056afd96b8a901f613aaae4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowExternalTargets", value)

    @builtins.property
    @jsii.member(jsii_name="permissionNames")
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "permissionNames"))

    @permission_names.setter
    def permission_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1af964f3b62582dc4c8718a2f2bcd672e9b61fb5c9a49fe318a06e3fbb869b41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "permissionNames", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShare.ResourcesProperty"]]]]:
        '''
        :Property: resources:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShare.ResourcesProperty"]]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShare.ResourcesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__294513099f4fa074c47794af398b71d101939ce09562162951dbf5b2f8c11bb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4f94a42be849b19869c672edd52ab4468c5ddfcdd8ae95abb6d48d09fcfafba9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={"resource_id": "resourceId", "resource_type": "resourceType"},
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param resource_id: 
            :param resource_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__803ce9f1fd21b9811868d36aefe8ba9e58ff541747f3ba1cb67cfb8339146700)
                check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
                check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "resource_id": resource_id,
                "resource_type": resource_type,
            }

        @builtins.property
        def resource_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceId: The ID of the shared resource.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            resourceType: The type of the shared resource.
            Support resource type include:
            VPC: VSwitch, PrefixList, PublicIpAddressPool
            ROS: ROSTemplate
            ServiceCatalog: ServiceCatalogPortfolio
            ECS: Image, Snapshot
            KMS: KMSInstance
            '''
            result = self._values.get("resource_type")
            assert result is not None, "Required property 'resource_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosResourceShareAssociation(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceShareAssociation``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ResourceShareAssociation`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosResourceShareAssociationProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fedc7ea03a604b0f4038ee0a9fd1c9ab27256b109102e46f8a1fd1e44d5a5a06)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8659e152a5666d5be0ba2ef782e921830f07186149a23dd7d03424b47077c1cd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceShareId: The ID of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__95847793e8c12aa99f779d351985ba005ff4f02d3a3138a670bbb7a6d56affc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceShareId")
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceShareId: The ID of the resource share.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceShareId"))

    @resource_share_id.setter
    def resource_share_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d8fa106c511edcd8c6750d50787e3e980c8f881595c498d27c267c72c399db5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceShareId", value)

    @builtins.property
    @jsii.member(jsii_name="permissionNames")
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "permissionNames"))

    @permission_names.setter
    def permission_names(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__12eae7b0faf5e762f633361f8ba03b8e62f6ef864b620aa107e0d58a7cae7eaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "permissionNames", value)

    @builtins.property
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShareAssociation.ResourcesProperty"]]]]:
        '''
        :Property: resources:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShareAssociation.ResourcesProperty"]]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosResourceShareAssociation.ResourcesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4eacbeec5862b35074c2a7622792608a2fac28bbb551acda4f09e87883b75d2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resources", value)

    @builtins.property
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7eb451fdcabaa011d4a3111cf5a9c8b94d53eeef5aa4401f7fc0d8d5f636d80)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targets", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociation.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={"resource_id": "resourceId", "resource_type": "resourceType"},
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param resource_id: 
            :param resource_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5c2ec9700ffb6ce8caf779fe4e9e38dfe670b32d5f55e8edb1e1fc4e4ec9f1b8)
                check_type(argname="argument resource_id", value=resource_id, expected_type=type_hints["resource_id"])
                check_type(argname="argument resource_type", value=resource_type, expected_type=type_hints["resource_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "resource_id": resource_id,
                "resource_type": resource_type,
            }

        @builtins.property
        def resource_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: resourceId: The ID of the shared resource.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def resource_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            resourceType: The type of the shared resource.
            Support resource type include:
            VPC: VSwitch, PrefixList, PublicIpAddressPool
            ROS: ROSTemplate
            ServiceCatalog: ServiceCatalogPortfolio
            ECS: Image, Snapshot
            KMS: KMSInstance
            '''
            result = self._values.get("resource_type")
            assert result is not None, "Required property 'resource_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShareAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_id": "resourceShareId",
        "permission_names": "permissionNames",
        "resources": "resources",
        "targets": "targets",
    },
)
class RosResourceShareAssociationProps:
    def __init__(
        self,
        *,
        resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShareAssociation.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosResourceShareAssociation``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation

        :param resource_share_id: 
        :param permission_names: 
        :param resources: 
        :param targets: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85bb35fe06b192be21b5771ec0d6f42db36027f6f16177135af89928940c0b46)
            check_type(argname="argument resource_share_id", value=resource_share_id, expected_type=type_hints["resource_share_id"])
            check_type(argname="argument permission_names", value=permission_names, expected_type=type_hints["permission_names"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_id": resource_share_id,
        }
        if permission_names is not None:
            self._values["permission_names"] = permission_names
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceShareId: The ID of the resource share.
        '''
        result = self._values.get("resource_share_id")
        assert result is not None, "Required property 'resource_share_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        result = self._values.get("permission_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShareAssociation.ResourcesProperty]]]]:
        '''
        :Property: resources:
        '''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShareAssociation.ResourcesProperty]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceShareAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShareProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_name": "resourceShareName",
        "allow_external_targets": "allowExternalTargets",
        "permission_names": "permissionNames",
        "resources": "resources",
        "targets": "targets",
    },
)
class RosResourceShareProps:
    def __init__(
        self,
        *,
        resource_share_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        allow_external_targets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShare.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosResourceShare``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare

        :param resource_share_name: 
        :param allow_external_targets: 
        :param permission_names: 
        :param resources: 
        :param targets: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db26a3d23841c5904dbc983874d86ddb2be815a9335bbf4164996459fe93e200)
            check_type(argname="argument resource_share_name", value=resource_share_name, expected_type=type_hints["resource_share_name"])
            check_type(argname="argument allow_external_targets", value=allow_external_targets, expected_type=type_hints["allow_external_targets"])
            check_type(argname="argument permission_names", value=permission_names, expected_type=type_hints["permission_names"])
            check_type(argname="argument resources", value=resources, expected_type=type_hints["resources"])
            check_type(argname="argument targets", value=targets, expected_type=type_hints["targets"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_name": resource_share_name,
        }
        if allow_external_targets is not None:
            self._values["allow_external_targets"] = allow_external_targets
        if permission_names is not None:
            self._values["permission_names"] = permission_names
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        resourceShareName: The name of the resource share.
        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("resource_share_name")
        assert result is not None, "Required property 'resource_share_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def allow_external_targets(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. Value:
        false (default): Only allow sharing within the resource directory.
        true: Allow sharing to any account.
        '''
        result = self._values.get("allow_external_targets")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def permission_names(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: permissionNames: Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type.
        '''
        result = self._values.get("permission_names")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShare.ResourcesProperty]]]]:
        '''
        :Property: resources:
        '''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShare.ResourcesProperty]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceShareProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRole(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosRole",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::Role``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Role`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRoleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__598c79a7bab23c74df0b0f7d14e69e9cb211a6e7571f0f530e101d47c578d6f1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a14e959c6014966093391e05411431ca4d7091c47fa389a16b78309f44ab13ec)
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
        :Attribute: Arn: The resource descriptor of the role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrAssumeRolePolicyDocument")
    def attr_assume_role_policy_document(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAssumeRolePolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Role creation time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the Resource Manager role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrMaxSessionDuration")
    def attr_max_session_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MaxSessionDuration: Role maximum session time. Valid values: [3600-43200].
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMaxSessionDuration"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleId: This ID of Resource Manager role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleName: Role Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateDate")
    def attr_update_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateDate: Role update time.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateDate"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="assumeRolePolicyDocument")
    def assume_role_policy_document(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "assumeRolePolicyDocument"))

    @assume_role_policy_document.setter
    def assume_role_policy_document(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8dc1879dfde5bef7ef9bf0861f052cf84547144e97462894cc63e16833ef9a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "assumeRolePolicyDocument", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a982a017e9d2fa8e2af6a4b690a8b506278ac45887191820503e02729ec72e0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="roleName")
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Role Name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cb4a92b15555ee20d1fc44528ca394d302df939c9f329451805ab9e57c1e817)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the Resource Manager role.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8149a38d42e5ab75c30bbe2bd7bdca3d17bc2f4516cc4d806fba6e27cbe6b8a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="maxSessionDuration")
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxSessionDuration"))

    @max_session_duration.setter
    def max_session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c8c52ad77c9bd3658eb21ae39230bca72d9738748d56d1793811ef1c1aeb032)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxSessionDuration", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosRoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "assume_role_policy_document": "assumeRolePolicyDocument",
        "role_name": "roleName",
        "description": "description",
        "max_session_duration": "maxSessionDuration",
    },
)
class RosRoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosRole``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role

        :param assume_role_policy_document: 
        :param role_name: 
        :param description: 
        :param max_session_duration: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8334c5993126e7edb57bc801e9b5cd423dc103aa5e01947caf093420d920900)
            check_type(argname="argument assume_role_policy_document", value=assume_role_policy_document, expected_type=type_hints["assume_role_policy_document"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_session_duration", value=max_session_duration, expected_type=type_hints["max_session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
        '''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Role Name.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the Resource Manager role.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSavedQuery(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosSavedQuery",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::SavedQuery``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SavedQuery`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSavedQueryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07205ac9b1e1a8ab2a4fab0714ea2d397b1e55011b6b944e9ee7be58488e5420)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ec6d44699921518c781f50da565bcd085f1c4d21065f05ca91f0f941e5070081)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrExpression")
    def attr_expression(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Expression: Query Expression of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryId")
    def attr_saved_query_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SavedQueryId: The id of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSavedQueryId"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryName")
    def attr_saved_query_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SavedQueryName: The name of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSavedQueryName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Update time of the template.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__b9db380895909d4ec81fb2472028e033f4416559099ed2c6759e5b968e354b30)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="expression")
    def expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: expression: The expression of the template.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "expression"))

    @expression.setter
    def expression(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e7de63953dbcea469e96557620b7da9b20dd94dd4dcc010a5dde97bd46d418f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expression", value)

    @builtins.property
    @jsii.member(jsii_name="savedQueryName")
    def saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        savedQueryName: The name of the template.

        - The name must be 1 to 64 characters in length.
        - The name can contain letters, digits, underscores (_), and hyphens (-).
        - The template name must be unique.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "savedQueryName"))

    @saved_query_name.setter
    def saved_query_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec42d238499c2334771cfc5442b67b241a5abb3965f8a257f239f0ee06ed1063)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "savedQueryName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the template. The description must be 1 to 256 characters in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bee2f756b2a256f1c8a7b05d57643d6ef4f54c716ace55e525610cbcd7c1023)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosSavedQueryProps",
    jsii_struct_bases=[],
    name_mapping={
        "expression": "expression",
        "saved_query_name": "savedQueryName",
        "description": "description",
    },
)
class RosSavedQueryProps:
    def __init__(
        self,
        *,
        expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        saved_query_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSavedQuery``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery

        :param expression: 
        :param saved_query_name: 
        :param description: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__92c083142591eaf5aab777afea5c801aac48266c5a434399255bf540e8dca980)
            check_type(argname="argument expression", value=expression, expected_type=type_hints["expression"])
            check_type(argname="argument saved_query_name", value=saved_query_name, expected_type=type_hints["saved_query_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "expression": expression,
            "saved_query_name": saved_query_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: expression: The expression of the template.
        '''
        result = self._values.get("expression")
        assert result is not None, "Required property 'expression' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        savedQueryName: The name of the template.

        - The name must be 1 to 64 characters in length.
        - The name can contain letters, digits, underscores (_), and hyphens (-).
        - The template name must be unique.
        '''
        result = self._values.get("saved_query_name")
        assert result is not None, "Required property 'saved_query_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the template. The description must be 1 to 256 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSavedQueryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSharedTarget(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosSharedTarget",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::SharedTarget``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SharedTarget`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSharedTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__461b0cca4ece46b9a58a4c1aad104a729874632cd485eb13f96da5839800da9f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8b2b3c86dfe62d99d08ca2d352ac6974df2c98ac97bba161b977a8e78da5b399)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: Create time of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceShareId: The ID of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareName")
    def attr_resource_share_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceShareName: The name of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareName"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TargetId: The ID of the principal.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetId"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdateTime: Update time of the resource share.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdateTime"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5697177b194cb4b45b366fae49c5d69c71a72fd13bf339da98d53953ca84ae2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="resourceShareId")
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceShareId: The ID of the resource share.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "resourceShareId"))

    @resource_share_id.setter
    def resource_share_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__784118cd9239431d6f9a30d81790d58a8c222873120786840e620f29f44d5d42)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceShareId", value)

    @builtins.property
    @jsii.member(jsii_name="targetId")
    def target_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetId: The ID of the principal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a22793213d76568539305d4c20fcb298e3c7372cf9e289833ae80ceca2d62c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "targetId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosSharedTargetProps",
    jsii_struct_bases=[],
    name_mapping={"resource_share_id": "resourceShareId", "target_id": "targetId"},
)
class RosSharedTargetProps:
    def __init__(
        self,
        *,
        resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSharedTarget``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget

        :param resource_share_id: 
        :param target_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac6283a276880ddbe0b1297ff52b147581e6c1005e3e31ddba13cf4c2c6d4050)
            check_type(argname="argument resource_share_id", value=resource_share_id, expected_type=type_hints["resource_share_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_id": resource_share_id,
        }
        if target_id is not None:
            self._values["target_id"] = target_id

    @builtins.property
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: resourceShareId: The ID of the resource share.
        '''
        result = self._values.get("resource_share_id")
        assert result is not None, "Required property 'resource_share_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: targetId: The ID of the principal.
        '''
        result = self._values.get("target_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSharedTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISavedQuery)
class SavedQuery(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.SavedQuery",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::SavedQuery``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSavedQuery``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SavedQueryProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78c98e759f5e62a986c1f784388c4c00cd52b533713c87975845a4cc663addbf)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrExpression")
    def attr_expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Expression: Query Expression of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrExpression"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryId")
    def attr_saved_query_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryId: The id of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedQueryId"))

    @builtins.property
    @jsii.member(jsii_name="attrSavedQueryName")
    def attr_saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SavedQueryName: The name of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSavedQueryName"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the template.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SavedQueryProps":
        return typing.cast("SavedQueryProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__010401147e5f28343f50d508598a45b682df04c89aafed2089ebdd41c45e3639)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e25b226c281cb95c7fb9955abaa65e2750f914d0b7c3e352bd11ccc3280d7bb1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9751bd691d78604aa94218db82f7701fe1fd1cbcd1ad394e838c1fd5ea2d8e2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.SavedQueryProps",
    jsii_struct_bases=[],
    name_mapping={
        "expression": "expression",
        "saved_query_name": "savedQueryName",
        "description": "description",
    },
)
class SavedQueryProps:
    def __init__(
        self,
        *,
        expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        saved_query_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SavedQuery``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery

        :param expression: Property expression: The expression of the template.
        :param saved_query_name: Property savedQueryName: The name of the template. - The name must be 1 to 64 characters in length. - The name can contain letters, digits, underscores (_), and hyphens (-). - The template name must be unique.
        :param description: Property description: The description of the template. The description must be 1 to 256 characters in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e014226bdc28bf7b0e2a8bccccca848bbce24dc61135cd601641b7266c07740c)
            check_type(argname="argument expression", value=expression, expected_type=type_hints["expression"])
            check_type(argname="argument saved_query_name", value=saved_query_name, expected_type=type_hints["saved_query_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "expression": expression,
            "saved_query_name": saved_query_name,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def expression(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property expression: The expression of the template.'''
        result = self._values.get("expression")
        assert result is not None, "Required property 'expression' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def saved_query_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property savedQueryName: The name of the template.

        - The name must be 1 to 64 characters in length.
        - The name can contain letters, digits, underscores (_), and hyphens (-).
        - The template name must be unique.
        '''
        result = self._values.get("saved_query_name")
        assert result is not None, "Required property 'saved_query_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the template.

        The description must be 1 to 256 characters in length.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SavedQueryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ISharedTarget)
class SharedTarget(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.SharedTarget",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::SharedTarget``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSharedTarget``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SharedTargetProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ccf7eaa0fb718949588f340ffdece3547fa682c484995a25436eeb9ad515f72)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: Create time of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceShareName")
    def attr_resource_share_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceShareName: The name of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceShareName"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: The ID of the principal.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetId"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdateTime")
    def attr_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdateTime: Update time of the resource share.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "SharedTargetProps":
        return typing.cast("SharedTargetProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9fbcac79f18d89ef814fc0a05a47e9a04774ef8243accdece1fd0430518a5598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41cd44a50e6f624a4988d1e7208ca2177284a2c1a4331ad8134f44eab0d70297)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8b76a255d4a3dc4988f950cb6454d8c3a223c553dfe83834091a9bded3aede3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.SharedTargetProps",
    jsii_struct_bases=[],
    name_mapping={"resource_share_id": "resourceShareId", "target_id": "targetId"},
)
class SharedTargetProps:
    def __init__(
        self,
        *,
        resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        target_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SharedTarget``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget

        :param resource_share_id: Property resourceShareId: The ID of the resource share.
        :param target_id: Property targetId: The ID of the principal.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c65f598314a09548dfcb08fda2b18ccfb616ccb8455c8312d0b358e6946f754)
            check_type(argname="argument resource_share_id", value=resource_share_id, expected_type=type_hints["resource_share_id"])
            check_type(argname="argument target_id", value=target_id, expected_type=type_hints["target_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resource_share_id": resource_share_id,
        }
        if target_id is not None:
            self._values["target_id"] = target_id

    @builtins.property
    def resource_share_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property resourceShareId: The ID of the resource share.'''
        result = self._values.get("resource_share_id")
        assert result is not None, "Required property 'resource_share_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def target_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property targetId: The ID of the principal.'''
        result = self._values.get("target_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SharedTargetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAccount)
class Account(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Account",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::Account``, which is used to create a member of the resource account type.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAccount``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1216480f11a891e907895d84f2c0c9f444cd8ea4c6ca81fc5bd1dcdc4266cb71)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: This ID of Resource Manager Account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DisplayName: Member name.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the parent folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute JoinMethod: Ways for members to join the resource directory.

        Valid values: invited, created
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrJoinMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Type: Member type.

        The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AccountProps:
        return typing.cast(AccountProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a351325a1184f8aa00ea7b042fece64646473bd6d579d4f3c8329f158e4fac72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd7912a057e11fb869809e24f6b28ad6f6a021f9ecf08b904bbd915fc547bc4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__448f89d9adbd7e4cfb8e643598c134c01d1b1dbabe776ad5bbeb8dfb9e1b82d5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IControlPolicy)
class ControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ControlPolicy``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosControlPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed1a62a0b8c7623f781d0c17eefc4f683bd7e3c70b3c9a1d8f65449cbb5240fd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachmentCount: AttachmentCount.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachmentCount"))

    @builtins.property
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ControlPolicyName: PolicyName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrControlPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EffectScope: EffectScope.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEffectScope"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyDocument: PolicyDocument.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        return typing.cast(ControlPolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e174d55eff2d32388d4cb0fa3f87cc63c102bd5b4756c59289ed1aba3ec30a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20b029442ed7e746eff4f483977e0c9e5fa5c2c2d144a1f2d9434da251ced7a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e3b79463136d3740eb5fc14a02b138d1b865dc6add81c985e0b91fca2492979)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IControlPolicyAttachment)
class ControlPolicyAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ControlPolicyAttachment``, which is used to attach a custom control policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosControlPolicyAttachment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicyattachment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ControlPolicyAttachmentProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d819f913239244d8f34dd1d1093b7679cb3823e2693d25d52b3763f64bccc90)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AttachDate: AttachDate.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: Description.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyName: PolicyName.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetId: TargetId.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyAttachmentProps:
        return typing.cast(ControlPolicyAttachmentProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fcab1ac0c6e0145cbb3781d883ffeae20d89fa3ce65fec6dfbdfca90e5b8c19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f1b4f98f3708f08af5521fea0a0457ba7f0ac84b364da23a5920ce7473abde9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5008ea4415157312ca22da7fb8a9495b682b59fe531418518218acacf110d69a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDelegatedAdministrator)
class DelegatedAdministrator(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.DelegatedAdministrator",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::DelegatedAdministrator``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDelegatedAdministrator``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DelegatedAdministratorProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cf7669210d7f21fc226212a3f52c42986d50d5bf667b39acaaf33e525fb413c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDelegationEnabledTime")
    def attr_delegation_enabled_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDelegationEnabledTime"))

    @builtins.property
    @jsii.member(jsii_name="attrServicePrincipal")
    def attr_service_principal(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ServicePrincipal: The identifier of the trusted service.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrServicePrincipal"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DelegatedAdministratorProps:
        return typing.cast(DelegatedAdministratorProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__710fabb69fda707c5205c1cf712fad7ad130ecc2cc717bc02b481ef38e9f2b2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__264e5ded6e32f13b30db3eb5439ebe522e394b3dca07410e85db49b729b523fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6236d2daa8d2356ff61b0801198023724cf25ae7701aeb8603ab051424364285)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IDeliveryChannel)
class DeliveryChannel(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.DeliveryChannel",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::DeliveryChannel``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosDeliveryChannel``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[DeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95a4e5a83b1687dae79eb1e402c3c6d6b2a2b4db34648eab035bee5777ce4ad1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelDescription")
    def attr_delivery_channel_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelDescription: The description of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelFilter")
    def attr_delivery_channel_filter(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelFilter: The effective scope of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelFilter"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelId")
    def attr_delivery_channel_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelId: The ID of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelId"))

    @builtins.property
    @jsii.member(jsii_name="attrDeliveryChannelName")
    def attr_delivery_channel_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute DeliveryChannelName: The name of the delivery channel.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDeliveryChannelName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceChangeDelivery")
    def attr_resource_change_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceChangeDelivery: The delivery of resource configuration changes.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceChangeDelivery"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceSnapshotDelivery")
    def attr_resource_snapshot_delivery(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceSnapshotDelivery"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> DeliveryChannelProps:
        return typing.cast(DeliveryChannelProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__afc4f629e7ea63b73c2610577ab3f804fc3a5977ab6a8b88d59bc6cff1ad567c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c7f74b4a9d0b370700e4106a3757f20404fd61687d224d37ab8744538db8d76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5afa1048f921e71c0a0960cd76dca072ce22c0393af3bbc1c546a30db1c6b849)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IFolder)
class Folder(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Folder",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::Folder``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFolder``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[FolderProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d96e520bed919308febcd85aa52c4fa642fa992bad771108169c54480085334)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderId: The ID of the folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FolderName: The name of the folder.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFolderName"))

    @builtins.property
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ParentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrParentFolderId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FolderProps:
        return typing.cast(FolderProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81671343d8f8845bc735257720eecf7735a68bd8cbedd23805121934341e1a59)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__838b8645611e13778baba92d68b9270460f3c2c00648a59b6ebbd00813dc3478)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9554efc9cd0f86248a576447772b13398350c8633b99c65c06d0e91b430007bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IHandshake)
class Handshake(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Handshake",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::Handshake``, which is used to create an invitation.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosHandshake``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[HandshakeProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__312d405ab48bacf4c43c06da58bf74d51ee84501f0d5cec883749ee392aad92d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute HandshakeId: This ID of Resource Manager handshake.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrHandshakeId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountId: Resource account master account ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute MasterAccountName: The name of the main account of the resource directory.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Note: Remarks.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetEntity: Invited account ID or login email.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetEntity"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TargetType: Type of account being invited.

        Valid values: Account, Email
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTargetType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> HandshakeProps:
        return typing.cast(HandshakeProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7367c442f54ce316cf97064cf3342ef81efd962fdc40c8e66dee72b191a0488)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c805d4fa722557eec4a80a6d8a7c9a228213a90b5b8192b141386bc339002364)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e3f90d318c2c8dc04f93fe746f6c1b99bd9198635c463f8f38f1b4c1de07dad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "Account",
    "AccountProps",
    "ControlPolicy",
    "ControlPolicyAttachment",
    "ControlPolicyAttachmentProps",
    "ControlPolicyProps",
    "DelegatedAdministrator",
    "DelegatedAdministratorProps",
    "DeliveryChannel",
    "DeliveryChannelProps",
    "Folder",
    "FolderProps",
    "Handshake",
    "HandshakeProps",
    "IAccount",
    "IControlPolicy",
    "IControlPolicyAttachment",
    "IDelegatedAdministrator",
    "IDeliveryChannel",
    "IFolder",
    "IHandshake",
    "IMessageContact",
    "IMultiAccountDeliveryChannel",
    "IPolicyAttachment",
    "IResourceDirectory",
    "IResourceGroup",
    "IResourceShare",
    "IResourceShareAssociation",
    "IRole",
    "ISavedQuery",
    "ISharedTarget",
    "MessageContact",
    "MessageContactProps",
    "MultiAccountDeliveryChannel",
    "MultiAccountDeliveryChannelProps",
    "PolicyAttachment",
    "PolicyAttachmentProps",
    "ResourceDirectory",
    "ResourceDirectoryProps",
    "ResourceGroup",
    "ResourceGroupProps",
    "ResourceShare",
    "ResourceShareAssociation",
    "ResourceShareAssociationProps",
    "ResourceShareProps",
    "Role",
    "RoleProps",
    "RosAccount",
    "RosAccountProps",
    "RosControlPolicy",
    "RosControlPolicyAttachment",
    "RosControlPolicyAttachmentProps",
    "RosControlPolicyProps",
    "RosDelegatedAdministrator",
    "RosDelegatedAdministratorProps",
    "RosDeliveryChannel",
    "RosDeliveryChannelProps",
    "RosFolder",
    "RosFolderProps",
    "RosHandshake",
    "RosHandshakeProps",
    "RosMessageContact",
    "RosMessageContactProps",
    "RosMultiAccountDeliveryChannel",
    "RosMultiAccountDeliveryChannelProps",
    "RosPolicyAttachment",
    "RosPolicyAttachmentProps",
    "RosResourceDirectory",
    "RosResourceDirectoryProps",
    "RosResourceGroup",
    "RosResourceGroupProps",
    "RosResourceShare",
    "RosResourceShareAssociation",
    "RosResourceShareAssociationProps",
    "RosResourceShareProps",
    "RosRole",
    "RosRoleProps",
    "RosSavedQuery",
    "RosSavedQueryProps",
    "RosSharedTarget",
    "RosSharedTargetProps",
    "SavedQuery",
    "SavedQueryProps",
    "SharedTarget",
    "SharedTargetProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__f7639357c264a2ad9492b699e5c0116dbd3b8905195ea94afe7876768bd1ee0e(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delete_account: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payer_account_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d13a515333b68d387942be7348f0fa5e8bee7154cc3b7566d51aee61db30b26a(
    *,
    policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0020a7c6030fc74d716b4e265ddb702f194cd1ebb6b046a29ecb7694b91e83d1(
    *,
    control_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    effect_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_document: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0709d5ebdb53f1c89ff82b93d66273a5ab29cc66c98d4b5298648db9f4e4b93f(
    *,
    account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_principal: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b357501b818acd5290b71d77f372910e14fad0503961fb2f7d16c3609b774ae6(
    *,
    delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
    delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled_resource_change_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled_resource_snapshot_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2bb0bf28a0b576f5ec57af57a1468416e449bfea96df2a75d561fca5539c6fbf(
    *,
    folder_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d8a776d7f40429c78fec99dc4aeaabbefbdd7f3c6fce3048134a4f548ccf52b(
    *,
    target_entity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e16e61fcff8fd41e802bb74aac13d06b09fae74802b9b3c2e629d3dc2bb69710(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MessageContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__697f13a365eeeb137802b60e0f249ad6e671bc0fe97ebebf54619b121d9f8a4c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6b0b4d295a6671a6ccae9e74f7b4c1af9f03a9b3325d0450fbab6d7fc3bd2b8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3fe917d95945f1b93ae4b9822d9402526bdb4e2c63c12413a72efb9d17445e8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eeebb0d19119f06c571129b3fde3b1ed09ace2e1731b6aa0d92f69efb59d05b(
    *,
    email_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    phone_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44355f2a7828850718a921fbb63bf36aa14bce551c1fddc4866d403379f046df(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MultiAccountDeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__072b52ad37aad9f22ac7c2f580e75f7e0b43703b39f4971684e8aac8d338295e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6eddb36d03a5facd1f000c582a3925c3e1caa47c894bb5adbf1ae1ddfab4f6f6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61af591a7cdc9dd7118e52d21d440a9cfbede7432ee2b2a6dbe771353df65abe(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5d4ac8ee5249489a8606917ad5792022aa52adad99f520218c5f0b8f800d506(
    *,
    delivery_channel_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
    multi_account_delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    multi_account_delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33627fd24e3218fbf1887592ea3f15252910bbf48a4bed0ee17b3971f1dfe81e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PolicyAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ea1113b297994ad403ada2f2c10fb23078d48d4986103f8b4cb9ce0f1ed1ab5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56c9e836afdb6873a63b5f795850846c708c562f79b14f0a47a77a4e9b5d4507(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__53f4f777cc1e7e3402540b9363695f0e251a8d1988ed52b430f772534e02b3fb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f30e5ca51763578188a2faa3ae9c0dcffcb3b211f46a302fe5b0befce07c80f(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__65a0c80a0a303cc75e60676e30f18919426b0fa66fc2e15eac406ef38a9c8110(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ResourceDirectoryProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8d88a50715e30603a73753454218d57d4479782407459af9bbf7b259bd620939(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87073ecec6092b7938232a1776b92649d2c5a789b6f1f4c695fa97acbaf7dbb5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14700046a32370d45ff3c3b9c39336d9357411ce3b49f887377ef4a4ecb58306(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7ed90935ee7fd6061d422eeb9524b483c86558e9cc2e6bf04dfdc96fc415781(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9058b0dba7acb04be0c4536e086a30d67ef7ed6d41b64d90f398b00ed0e24f2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5924210a4618d152c1bd533a913a46b31f4a475943cb231689438547085d9b8(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b2251c36c9a90351fb4066a2410597ff7ee93ef51f9a11d12c40b1796a73d1a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c216fb92c71e17244765ea6519e60248faa7fa17af9f74f53666594147a01cb3(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tags: typing.Optional[typing.Sequence[typing.Union[RosResourceGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc0b8141fe562ed800d217f89266a2a0fef20c73a2dd9f98e774589c2242defe(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourceShareProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f149f69327423f94bba794e37953d466596e7c04965e13b5d38652a74c580fb7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__996951d909979dc6edb5ad9e56b7f86d660ea73efb065f4f700a842ef96fb9b3(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7414ee073fc0ed0f9dfac9cac6e5108d0265154961e617dba02f574e55c832f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__540ed0ff059f05f5455339aeda77eb1587d57b4254aeecb81aacb8c372b01985(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ResourceShareAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36af1889fd26980854708e43b50d99326f0b11359d91ed19618a907ffd96d395(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67f57148d0d4e4a9303e0b5b0a2da9fb755a0aac13e239e02fce244fb3048f71(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59e3b785116c4386695960843a4824230a98052fc85a6bce2459298f2c58ec9f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bee30ff4c73dabfe0c678dd3546ddc5d90057ef067e2b36c173ce491103eaf1f(
    *,
    resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShareAssociation.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__448cf42e96a8e1b1e53b0f3ef70e61f4ab5c7925d7679c25bbe62e667a77bbe8(
    *,
    resource_share_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_external_targets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShare.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6093d93567766ca8411f5b5348a309aeb9261658a69a95e88f38f1f12e9dcb67(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56c328648632da7ce92c7b801842e4b5a4b648bbb4ffccf75fdeb914a28e733d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4b5fdf79c3b8827cf6cd6e4e88b0a43dc88ef284fd8fa915acc00a00c94a705(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a223cdb3e99c85c026e29ef569c84330a8598d11d071f12f1c1969dee4268d59(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61478dc9529cc2ea9d557267b8da6ab9d81bd79fbb33a05751612397c8242b0e(
    *,
    assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a220cc117615de0a052353f3094c9b7e8e072cf08af6ea8e2c763c71fd95a4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95e2dbaa40dd4477b4b159653a3a225a138a32b96a32927e06cc21fe5df3abda(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fce637dd2aaef7b6ee4e06e371ce9d8f1f6e237124c79d3df18c39ea3479186(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1108be56cd957af7c6c50b136ab94d6634c86c41556d3c879e3edfdcbcabe08a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b768504aef47a8049463e3074ac2f77c55f8e6b0824299d8abe56cc2d4ece211(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa32fd08f7367e4b08bbb1f23a34b9d4e26b56b61d14396d81d259d8c479d5cb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de9cfce981d939d949d754af3599731f51cac9920a504fae2572737f5c9b5b67(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1a0d4e73d68818c70bba842c3aa0d493f859d050dd7521bc3e913d3dfcd5259(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delete_account: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payer_account_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b2fca5b3b8e8dc80b9ac61dad92094f23a72f60be0d3332e3d50e87baeea70d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__152f10b437dc5357357e0cb0f04dd3f05e936abf754f0676fb02bae4c6bb0333(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ed26cd504997de4d112a073f4eb566dd07adc70c4845d2380f062ddeb077320(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c9fa352d16abb59420025499b07215cb35288cdab4db9b5b78304ee7da50885(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcdbd9b99860ceaea1078632fdb86c32a7bdc0bdc08c23f565d68f0aa3bc6665(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__761a547a5fdf97919bb1d4ad578c9825b9e2b86fcd69dc42ad97bad4f3438644(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2571de878a5146db0ffdee2268417556b8e3928348d88c8dd475f6c8cc729166(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bed538ba6cb5d1bbbf3563d6fa28b01548b4128c6155ebc3dd7c20a6643e5d9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosControlPolicyAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b5d237187044ce17c518ae2a19c89be7b466e1a4ef5e82961940cc43d20dc13(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c7bcca8b7ecd4a5a060d1c21ecdeec66f57515cc6d65308385fb8ac657962da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36e598c367412da85db29e47ad4c2580bc8bbb635774f770957fa9f86d0fb99b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26cabe393e0966c74f91e47a5d267a5754e2747da37bf33b03995e6ad93b3094(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b93b99252ba4e0aee9b2f2da77849e1d15f47f298b54e9ce447fea277f2ef279(
    *,
    policy_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4c1ad57270429840b4cf80109870b0a112abeace255b512fe801625242b6807(
    *,
    control_policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    effect_scope: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_document: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5222921cab6f3046fe31da8198b0477ae3407d36d6ec0cd12a9ab8c94823ac7b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDelegatedAdministratorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f47e5bd14024f68acb5ac17d9831338609fc436e548d604ed9447159ddd1bd5(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__023acfc54df8b6ced5f0200959fa77ac414aa4bd11f5ec444c01d1a54ae77236(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ac8d3cdd00ba783bc2dcc7ee13ab5c2fc98f788c8779b702dcd105448fac6b6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27c9a8e07f54de162facf0556d9ba00b9aa0ac1d360f499c75a9fcbc70f9b03e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35d72c218b621e61faa0272aa972cc54b3e38efcedcfd0b6542b8be327fcb295(
    *,
    account_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_principal: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd70332f1da81916ea9f928dfc471c5a08d2f13caa49a1cf27acf9f5768d0427(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fec0f0b9897cc29d030529ceddceac6d5e40f2c859ca1b49372d38db98e6cb57(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ae56df83f8ec5585f6953b3d6f5bd043474825695d162dbeb1266cfc0d3c270(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.DeliveryChannelFilterProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c067fdb5747716fae85043c09c4291e0d1b56104b08fd4798f54658b2eab3cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__221f9918440e8fab1668307887e8f5e9809305abe06afe55dc98b314ec25a7fb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8688aa445f5a056b7e38e2436bef0f150a2b701966a0f7bdd312d6c5e4b02c8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e178fab037a2c4008e8e144744c6c052643dfcf6e60290794f6fe81eeb32542(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fd3644ba0fba3e74c8964eb4304220066fba4f17943b8ed6baf00475fd29c34d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__354f26cc536abc18d78f617ab808999829b38b26ede9fa65c1ff0d9db5637474(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a5b658d7de6f2e059655b1dfcc23a713709883a36c1122ba1940b567da64897(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceChangeDeliveryProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b77e46d4d9ee7ff2dad4140b337ee34830c092a1da88a822de63dc26a48442a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDeliveryChannel.ResourceSnapshotDeliveryProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56d98268fb5c8b0ee0fe3f7711582f933d48573b986158333d9ac074f8798a12(
    *,
    account_scopes: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resource_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__586cc6d29b2ee3a1ec5f8d2464ba80e4b1ba19790046d7ca6411d4ddb1dede7e(
    *,
    sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.SlsPropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dee376658530b5af6727a3d3c7c7c4e84e374b7e3cca6a8930d2f4c7ce4b318(
    *,
    custom_expression: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delivery_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceSnapshotDeliverySlsPropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fc95f0b4a2e6f5e1f20a21268ef29c90e621124c6c614ea91d3415855ed7d8c(
    *,
    oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dba109913edf136b5ecd8a7b5d1704cc3b4a1cc496e775f988e864be5bd8036(
    *,
    oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9f3b888d988adf6955d1de849af794b0c94c70f0da9aa09ef3e765c01367b0d(
    *,
    delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
    delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled_resource_change_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enabled_resource_snapshot_delivery: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d59c011708fa20ab1e308ed4f39be7b1f1c0c138539883d1e044bab3bc0a421e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFolderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1242711d62e58edc142f894cba2dac0e75ec539f69b3e4c2ca61f5d652ef2c87(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4ded503192f9fe3cc6b157753425e0615df3473d6190e70bb954982c266f0d3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a0d551efcdb8d985741b9ab2aa3c7c2dabc711aa8980478a5f33477ae47d054(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0fbe409687dc84d14aa57f84761413e6e0cf49b4b75220c0f41fd050f315994(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd71f340f249bdf71bf57cbf0cdeceae8b40d3c0fdc197728fe812f8c1035623(
    *,
    folder_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    parent_folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc1cdc451989a3ad94bc1dbd8fe641df322c6ced5fb9345321a302daaa85ef28(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosHandshakeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba4ecac7efed08089dbec58bccabcaca05dbdf11ed6ca8cff61556402f81fd58(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fd3cc52f292a2556ddf0ae8e056e771804ff95edca20a07bdecb54363f33d00(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f92a9881dadcb5eebfaf38a17ae80dcff1b18b9e3d8a29f477b0a92632709c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4f9e057b8e24070b6296bab303985ce76837c4408f1ac7b3b9fe77037e3afaf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7420f60bee3a1b995b237deb1380f1970f4fca7c7ad9d42f49ab61f22fb20932(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd15530604f7abbdadcab47b61fb8602f5dc257fcac9f518ba2e2861de760950(
    *,
    target_entity: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    note: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfb6b7e29ef2bd3a7d6c3f7ea63a56faed1c96cb76bf545fc878279efac09f91(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMessageContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1485a1af38c0b653c29641c1ef8faa72f0bafacc731877747323d51dd829ac48(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b8fe1c118069a8815222e4348f348ae12d76bf3d63d1ceeeba7ff9510869da7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__682504d2289757bad819496339d53acef9af9cf00b81d20e64cf10e4dc3bca1f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df9267b95391e923168168ae465e37c52fdda6922123cd33873480a160905a0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdb7554601d5cd4c1876d1a346c53220be1b4d636747a3525309079778c35fa1(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fa63155bf817c1ff87f8864ffcb9a254683db171037e49b66a8175dfaec708b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c71c6714cd2458c3f30dec19b3290e672ed04592a61c0e7cf89de6d73e512b2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0589841ef054c9886d7dfee73cff36ed7616a46cd73ee50bc4209403e49ec9ff(
    *,
    email_address: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    message_types: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    title: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    phone_number: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6525aee9dcb123a95722c17c2a6064d372c523b6b4199a257a460c75acc4b4e0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMultiAccountDeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e2ffd88fa7cb7307bb2a77d99839981258193e1c64b501f745be5061f916c3b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1632ea3862de66665f0716e51400c448d4dd08cd05773133bdf49395eebb66e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89b2f0e6694e31f519e96bf621a8e5da0ce5f138ad06439f56ce372ab9565291(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c5ae8f7a47a6498f72e15fa9671d4248ebf7ac356d22cab3ce02089497762c7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__017fffa25d6b73c53b5754c06c9cf873f7cf471548592a903a676ca12caeb215(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdac00a0a6190ceacef1ee4531bfb504d8eb95ab87db523125189309039123f8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a170ca6249756a60fb59e71025dc9d853dbfca3c334fd1e1e2914cbb97ba49eb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e474f3f9e45fa72d4f7106fbea2cae2d282554f44f7178bdfc44ccc52854bc90(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c6180bf1fb817c07c5f737f176106e593c61c4016ce4dbbaa3a40f66506e3f7(
    *,
    account_scopes: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    resource_types: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94d8d580e04f4c2f08761903ce23142a89b4379cc240ab8af620a6bb9466ded1(
    *,
    sls_properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.SlsPropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af1b19fafee34cfb29e6ef92cb3a31764b4fc1f9485659cd6a02499583a6b604(
    *,
    delivery_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56b7b68b9eb2c8a0ab6d3557fdeddcbd159932c0739530c6d38900cefd99d378(
    *,
    oversized_data_oss_target_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41e27e4a903f7aff43210e6e57c34ff154c35b5c78dc522ce5d2c0f637ccd08f(
    *,
    delivery_channel_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delivery_channel_filter: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty, typing.Dict[builtins.str, typing.Any]]],
    multi_account_delivery_channel_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    multi_account_delivery_channel_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_change_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    resource_snapshot_delivery: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe26f4d354475e1623bfd0b4e72d5634ba4cb5a3a7321645b1581b689beb0943(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPolicyAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8e26cc0193d5ae9e094313e2baa738bca88e0701034f712b4b8bc43c35e16f4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6e628dd85ab10bb4993da770c63545b16868ccf86859438ad6d6204fc345d5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3185f3652a0ef7dbbd1921469db6cc2b2260130ca4f876c57dc884487049cb67(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0176e23b95f9368a9e20aa194fd91404187d6a6be114385bdd8ab97132fc34e1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b639fed54f0f25c0122b59cdf927c250211c966893cf4feb84e0ed065ebb6e31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8137fdcd1814790e0eb90a515424c590c6da3fd88672184a903f42da300d7503(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d1dde2049d1f83a7d5f697ad4480b0433108a3db183683b49ca759d9666c954(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaee16eeb73c12e79cd625177043b9137b5caa4b70eeae2a49700bb0ab0a9b6c(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    principal_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a1a7a96d9856afe269a9603059b34f8a4073b2b381d1c001e8f487e54d4bed2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourceDirectoryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c067f30a2bcc7f9269b8c76176849c2ed68f97b3de5a5d0cbf87c2b5ff814072(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6a5bfc26055b8efc5cf46c61184cc8a7ea3e989a713649e087a4ebdbda7cbe7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71c0b6abfcc45aac4a70674165495cf40f5d9b378bd1966d6bfe990f8e3e5f0e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourceGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3e93abb5b8ab56483e2491c6320361764ed2d622bab00fa8f00b2fa52d13cbb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6485d44a375754556b3d71b79d686f89516a67fec805f8369d0a347691b4f43(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32349998b79055ed88bbf1eee48d5d3095d547ba2de055e88b3ee5d08e9bccab(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3c841961e58a6d6b8cabc46d3f14e81578258d51ceebbfdc4b600f343ea0fe1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98d659448cbf4de7746aac1a82a3ba01e425669a7c3ed69a5cce7e5a2511f3b0(
    value: typing.Optional[typing.List[RosResourceGroup.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6cddee3945d05bee575102eb96cef82a5ae414a6730f5c9e83e6d267b47f0f7(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a103364ea58dc8d0675d0af32d88bc0be8f151aba6e70846e4464a56e3e49d8(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    tags: typing.Optional[typing.Sequence[typing.Union[RosResourceGroup.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc2f2c89c829a41ba211cbdfb75960d7624065f6ed0a53e0e512d901c2800b26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourceShareProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e1edc209df9816aab8896e2eda7cf0a7da64dc7fded1c15402774c884308dbf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f565e9f0c8c90dae0bfa4b1ae56a51ea9b0c51be483f8a25ad4fc8994bb6a82(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e2c309446391c35c1b994a135a6e4949ca862e3aea45785afd6c6c63523af48(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1cc6a1dc2233e127a82699a72f1c43c41b5c68c056afd96b8a901f613aaae4d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1af964f3b62582dc4c8718a2f2bcd672e9b61fb5c9a49fe318a06e3fbb869b41(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__294513099f4fa074c47794af398b71d101939ce09562162951dbf5b2f8c11bb9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShare.ResourcesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f94a42be849b19869c672edd52ab4468c5ddfcdd8ae95abb6d48d09fcfafba9(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__803ce9f1fd21b9811868d36aefe8ba9e58ff541747f3ba1cb67cfb8339146700(
    *,
    resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fedc7ea03a604b0f4038ee0a9fd1c9ab27256b109102e46f8a1fd1e44d5a5a06(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosResourceShareAssociationProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8659e152a5666d5be0ba2ef782e921830f07186149a23dd7d03424b47077c1cd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95847793e8c12aa99f779d351985ba005ff4f02d3a3138a670bbb7a6d56affc6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d8fa106c511edcd8c6750d50787e3e980c8f881595c498d27c267c72c399db5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__12eae7b0faf5e762f633361f8ba03b8e62f6ef864b620aa107e0d58a7cae7eaf(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4eacbeec5862b35074c2a7622792608a2fac28bbb551acda4f09e87883b75d2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosResourceShareAssociation.ResourcesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7eb451fdcabaa011d4a3111cf5a9c8b94d53eeef5aa4401f7fc0d8d5f636d80(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c2ec9700ffb6ce8caf779fe4e9e38dfe670b32d5f55e8edb1e1fc4e4ec9f1b8(
    *,
    resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    resource_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85bb35fe06b192be21b5771ec0d6f42db36027f6f16177135af89928940c0b46(
    *,
    resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShareAssociation.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db26a3d23841c5904dbc983874d86ddb2be815a9335bbf4164996459fe93e200(
    *,
    resource_share_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    allow_external_targets: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    permission_names: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    resources: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosResourceShare.ResourcesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    targets: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__598c79a7bab23c74df0b0f7d14e69e9cb211a6e7571f0f530e101d47c578d6f1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a14e959c6014966093391e05411431ca4d7091c47fa389a16b78309f44ab13ec(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8dc1879dfde5bef7ef9bf0861f052cf84547144e97462894cc63e16833ef9a9(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a982a017e9d2fa8e2af6a4b690a8b506278ac45887191820503e02729ec72e0d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cb4a92b15555ee20d1fc44528ca394d302df939c9f329451805ab9e57c1e817(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8149a38d42e5ab75c30bbe2bd7bdca3d17bc2f4516cc4d806fba6e27cbe6b8a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c8c52ad77c9bd3658eb21ae39230bca72d9738748d56d1793811ef1c1aeb032(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8334c5993126e7edb57bc801e9b5cd423dc103aa5e01947caf093420d920900(
    *,
    assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07205ac9b1e1a8ab2a4fab0714ea2d397b1e55011b6b944e9ee7be58488e5420(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSavedQueryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec6d44699921518c781f50da565bcd085f1c4d21065f05ca91f0f941e5070081(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9db380895909d4ec81fb2472028e033f4416559099ed2c6759e5b968e354b30(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e7de63953dbcea469e96557620b7da9b20dd94dd4dcc010a5dde97bd46d418f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec42d238499c2334771cfc5442b67b241a5abb3965f8a257f239f0ee06ed1063(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bee2f756b2a256f1c8a7b05d57643d6ef4f54c716ace55e525610cbcd7c1023(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__92c083142591eaf5aab777afea5c801aac48266c5a434399255bf540e8dca980(
    *,
    expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    saved_query_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__461b0cca4ece46b9a58a4c1aad104a729874632cd485eb13f96da5839800da9f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSharedTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b2b3c86dfe62d99d08ca2d352ac6974df2c98ac97bba161b977a8e78da5b399(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5697177b194cb4b45b366fae49c5d69c71a72fd13bf339da98d53953ca84ae2f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__784118cd9239431d6f9a30d81790d58a8c222873120786840e620f29f44d5d42(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a22793213d76568539305d4c20fcb298e3c7372cf9e289833ae80ceca2d62c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac6283a276880ddbe0b1297ff52b147581e6c1005e3e31ddba13cf4c2c6d4050(
    *,
    resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78c98e759f5e62a986c1f784388c4c00cd52b533713c87975845a4cc663addbf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SavedQueryProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__010401147e5f28343f50d508598a45b682df04c89aafed2089ebdd41c45e3639(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e25b226c281cb95c7fb9955abaa65e2750f914d0b7c3e352bd11ccc3280d7bb1(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9751bd691d78604aa94218db82f7701fe1fd1cbcd1ad394e838c1fd5ea2d8e2f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e014226bdc28bf7b0e2a8bccccca848bbce24dc61135cd601641b7266c07740c(
    *,
    expression: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    saved_query_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ccf7eaa0fb718949588f340ffdece3547fa682c484995a25436eeb9ad515f72(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SharedTargetProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9fbcac79f18d89ef814fc0a05a47e9a04774ef8243accdece1fd0430518a5598(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41cd44a50e6f624a4988d1e7208ca2177284a2c1a4331ad8134f44eab0d70297(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8b76a255d4a3dc4988f950cb6454d8c3a223c553dfe83834091a9bded3aede3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c65f598314a09548dfcb08fda2b18ccfb616ccb8455c8312d0b358e6946f754(
    *,
    resource_share_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    target_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1216480f11a891e907895d84f2c0c9f444cd8ea4c6ca81fc5bd1dcdc4266cb71(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccountProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a351325a1184f8aa00ea7b042fece64646473bd6d579d4f3c8329f158e4fac72(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd7912a057e11fb869809e24f6b28ad6f6a021f9ecf08b904bbd915fc547bc4d(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__448f89d9adbd7e4cfb8e643598c134c01d1b1dbabe776ad5bbeb8dfb9e1b82d5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed1a62a0b8c7623f781d0c17eefc4f683bd7e3c70b3c9a1d8f65449cbb5240fd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e174d55eff2d32388d4cb0fa3f87cc63c102bd5b4756c59289ed1aba3ec30a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20b029442ed7e746eff4f483977e0c9e5fa5c2c2d144a1f2d9434da251ced7a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e3b79463136d3740eb5fc14a02b138d1b865dc6add81c985e0b91fca2492979(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d819f913239244d8f34dd1d1093b7679cb3823e2693d25d52b3763f64bccc90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ControlPolicyAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fcab1ac0c6e0145cbb3781d883ffeae20d89fa3ce65fec6dfbdfca90e5b8c19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f1b4f98f3708f08af5521fea0a0457ba7f0ac84b364da23a5920ce7473abde9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5008ea4415157312ca22da7fb8a9495b682b59fe531418518218acacf110d69a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cf7669210d7f21fc226212a3f52c42986d50d5bf667b39acaaf33e525fb413c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DelegatedAdministratorProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__710fabb69fda707c5205c1cf712fad7ad130ecc2cc717bc02b481ef38e9f2b2f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__264e5ded6e32f13b30db3eb5439ebe522e394b3dca07410e85db49b729b523fe(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6236d2daa8d2356ff61b0801198023724cf25ae7701aeb8603ab051424364285(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95a4e5a83b1687dae79eb1e402c3c6d6b2a2b4db34648eab035bee5777ce4ad1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DeliveryChannelProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afc4f629e7ea63b73c2610577ab3f804fc3a5977ab6a8b88d59bc6cff1ad567c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c7f74b4a9d0b370700e4106a3757f20404fd61687d224d37ab8744538db8d76(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5afa1048f921e71c0a0960cd76dca072ce22c0393af3bbc1c546a30db1c6b849(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d96e520bed919308febcd85aa52c4fa642fa992bad771108169c54480085334(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[FolderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81671343d8f8845bc735257720eecf7735a68bd8cbedd23805121934341e1a59(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__838b8645611e13778baba92d68b9270460f3c2c00648a59b6ebbd00813dc3478(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9554efc9cd0f86248a576447772b13398350c8633b99c65c06d0e91b430007bd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__312d405ab48bacf4c43c06da58bf74d51ee84501f0d5cec883749ee392aad92d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[HandshakeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7367c442f54ce316cf97064cf3342ef81efd962fdc40c8e66dee72b191a0488(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c805d4fa722557eec4a80a6d8a7c9a228213a90b5b8192b141386bc339002364(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e3f90d318c2c8dc04f93fe746f6c1b99bd9198635c463f8f38f1b4c1de07dad(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
