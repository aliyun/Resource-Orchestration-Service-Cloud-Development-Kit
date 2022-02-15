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

from ._jsii import *

import ros_cdk_core


class Account(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Account",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Account``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountId: This ID of Resource Manager Account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DisplayName: Member name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute FolderId: The ID of the parent folder.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> ros_cdk_core.IResolvable:
        '''Attribute JoinMethod: Ways for members to join the resource directory.

        Valid values: invited, created
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrJoinMethod"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute Type: Member type.

        The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.AccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "folder_id": "folderId",
        "payer_account_id": "payerAccountId",
    },
)
class AccountProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        folder_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        payer_account_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Account``.

        :param display_name: Property displayName: Member name.
        :param folder_id: Property folderId: The ID of the parent folder.
        :param payer_account_id: Property payerAccountId:.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
        }
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property displayName: Member name.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property folderId: The ID of the parent folder.'''
        result = self._values.get("folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payerAccountId:.'''
        result = self._values.get("payer_account_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ControlPolicy(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicy",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::ControlPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ControlPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ControlPolicy``.

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
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(self) -> ros_cdk_core.IResolvable:
        '''Attribute AttachmentCount: AttachmentCount.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachmentCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ControlPolicyName: PolicyName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrControlPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(self) -> ros_cdk_core.IResolvable:
        '''Attribute EffectScope: EffectScope.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEffectScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyDocument: PolicyDocument.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyDocument"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))


class ControlPolicyAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachment",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::ControlPolicyAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ControlPolicyAttachmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ControlPolicyAttachment``.

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
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> ros_cdk_core.IResolvable:
        '''Attribute AttachDate: AttachDate.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyName: PolicyName.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute TargetId: TargetId.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicyAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"policy_id": "policyId", "target_id": "targetId"},
)
class ControlPolicyAttachmentProps:
    def __init__(
        self,
        *,
        policy_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ControlPolicyAttachment``.

        :param policy_id: Property policyId: PolicyId.
        :param target_id: Property targetId: TargetId.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_id": policy_id,
            "target_id": target_id,
        }

    @builtins.property
    def policy_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyId: PolicyId.'''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetId: TargetId.'''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        control_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_scope: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_document: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ControlPolicy``.

        :param control_policy_name: Property controlPolicyName: PolicyName.
        :param effect_scope: Property effectScope: EffectScope.
        :param policy_document: Property policyDocument: PolicyDocument.
        :param description: Property description: Description.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "control_policy_name": control_policy_name,
            "effect_scope": effect_scope,
            "policy_document": policy_document,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property controlPolicyName: PolicyName.'''
        result = self._values.get("control_policy_name")
        assert result is not None, "Required property 'control_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_scope(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property effectScope: EffectScope.'''
        result = self._values.get("effect_scope")
        assert result is not None, "Required property 'effect_scope' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_document(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyDocument: PolicyDocument.'''
        result = self._values.get("policy_document")
        assert result is not None, "Required property 'policy_document' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Folder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Folder",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::Folder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FolderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Folder``.

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
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute FolderId: The ID of the folder.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FolderName: The name of the folder.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ParentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentFolderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.FolderProps",
    jsii_struct_bases=[],
    name_mapping={"folder_name": "folderName", "parent_folder_id": "parentFolderId"},
)
class FolderProps:
    def __init__(
        self,
        *,
        folder_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_folder_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Folder``.

        :param folder_name: Property folderName: The name of the folder.
        :param parent_folder_id: Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property folderName: The name of the folder.'''
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property parentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        result = self._values.get("parent_folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FolderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Handshake(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Handshake",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::Handshake``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "HandshakeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Handshake``.

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
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute HandshakeId: This ID of Resource Manager handshake.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHandshakeId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterAccountId: Resource account master account ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterAccountName: The name of the main account of the resource directory.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> ros_cdk_core.IResolvable:
        '''Attribute Note: Remarks.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNote"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> ros_cdk_core.IResolvable:
        '''Attribute TargetEntity: Invited account ID or login email.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetEntity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute TargetType: Type of account being invited.

        Valid values: Account, Email
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetType"))


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
        target_entity: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        note: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Handshake``.

        :param target_entity: Property targetEntity: Invited account ID or login email.
        :param target_type: Property targetType: Type of account being invited. Valid values: Account, Email
        :param note: Property note: Remarks.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetEntity: Invited account ID or login email.'''
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property targetType: Type of account being invited.

        Valid values: Account, Email
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property note: Remarks.'''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PolicyAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.PolicyAttachment",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::PolicyAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PolicyAttachmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::PolicyAttachment``.

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
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> ros_cdk_core.IResolvable:
        '''Attribute AttachDate: Authorization time.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: Policy description.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyType: The type of the policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrincipalName: The name of the object to which you want to attach the policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrincipalName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PrincipalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrincipalType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))


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
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        principal_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        principal_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::PolicyAttachment``.

        :param policy_name: Property policyName: The name of the policy.
        :param policy_type: Property policyType: The type of the policy.
        :param principal_name: Property principalName: The name of the object to which you want to attach the policy.
        :param principal_type: Property principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        :param resource_group_id: Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "principal_name": principal_name,
            "principal_type": principal_type,
            "resource_group_id": resource_group_id,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyName: The name of the policy.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyType: The type of the policy.'''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def principal_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property principalName: The name of the object to which you want to attach the policy.'''
        result = self._values.get("principal_name")
        assert result is not None, "Required property 'principal_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def principal_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property principalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        result = self._values.get("resource_group_id")
        assert result is not None, "Required property 'resource_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceDirectory(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectory",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::ResourceDirectory``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["ResourceDirectoryProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceDirectory``.

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
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterAccountId: The ID of the master account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterAccountName: The name of the master account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceDirectoryId: The ID of the resource directory.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RootFolderId: The ID of the root folder.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRootFolderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class ResourceDirectoryProps:
    def __init__(self) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceDirectory``.'''
        self._values: typing.Dict[str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroup",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::ResourceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ResourceGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceGroup``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DisplayName: The display name of the resource group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: The ID of the resource group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The unique identifier of the resource group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> ros_cdk_core.IResolvable:
        '''Attribute RegionStatuses: The status of the resource group in all regions.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionStatuses"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name"},
)
class ResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceGroup``.

        :param display_name: Property displayName: The display name of the resource group.
        :param name: Property name: The unique identifier of the resource group.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property displayName: The display name of the resource group.'''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The unique identifier of the resource group.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceShare(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShare",
):
    '''A ROS resource type:  ``ALIYUN::ResourceManager::ResourceShare``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ResourceShareProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceShare``.

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
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceShareId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShareProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_name": "resourceShareName",
        "resources": "resources",
        "targets": "targets",
    },
)
class ResourceShareProps:
    def __init__(
        self,
        *,
        resource_share_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resources: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]] = None,
        targets: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceShare``.

        :param resource_share_name: Property resourceShareName: The name of the resource share. The name must be 1 to 50 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        :param resources: Property resources:.
        :param targets: Property targets: The shared target. A shared target shares the resources of resource owners. You can share your resources only with the member accounts in your resource directory. A shared target is indicated by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "resource_share_name": resource_share_name,
        }
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceShareName: The name of the resource share.

        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("resource_share_name")
        assert result is not None, "Required property 'resource_share_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]]:
        '''Property resources:.'''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property targets: The shared target.

        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceShareProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosAccount",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::Account``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Account``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountId: This ID of Resource Manager Account
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DisplayName: Member name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FolderId: The ID of the parent folder
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrJoinMethod"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: Resource directory ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Type: Member type. The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: Member name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="folderId")
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: folderId: The ID of the parent folder
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "folderId"))

    @folder_id.setter
    def folder_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "folderId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payerAccountId")
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payerAccountId:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payerAccountId"))

    @payer_account_id.setter
    def payer_account_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payerAccountId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosAccountProps",
    jsii_struct_bases=[],
    name_mapping={
        "display_name": "displayName",
        "folder_id": "folderId",
        "payer_account_id": "payerAccountId",
    },
)
class RosAccountProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        folder_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        payer_account_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Account``.

        :param display_name: 
        :param folder_id: 
        :param payer_account_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
        }
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: Member name
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: folderId: The ID of the parent folder
        '''
        result = self._values.get("folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payer_account_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payerAccountId:
        '''
        result = self._values.get("payer_account_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosControlPolicy(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicy",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::ControlPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosControlPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ControlPolicy``.

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
    @jsii.member(jsii_name="attrAttachmentCount")
    def attr_attachment_count(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AttachmentCount: AttachmentCount
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachmentCount"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ControlPolicyName: PolicyName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrControlPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EffectScope: EffectScope
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEffectScope"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyDocument: PolicyDocument
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyDocument"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyId: PolicyId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyType: PolicyType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="controlPolicyName")
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: controlPolicyName: PolicyName
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "controlPolicyName"))

    @control_policy_name.setter
    def control_policy_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "controlPolicyName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="effectScope")
    def effect_scope(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: effectScope: EffectScope
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "effectScope"))

    @effect_scope.setter
    def effect_scope(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "effectScope", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyDocument")
    def policy_document(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyDocument: PolicyDocument
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyDocument"))

    @policy_document.setter
    def policy_document(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyDocument", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)


class RosControlPolicyAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosControlPolicyAttachment",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::ControlPolicyAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosControlPolicyAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ControlPolicyAttachment``.

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
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AttachDate: AttachDate
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: Description
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyId: PolicyId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyName: PolicyName
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyType: PolicyType
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TargetId: TargetId
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetId"))

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
    @jsii.member(jsii_name="policyId")
    def policy_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyId: PolicyId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyId"))

    @policy_id.setter
    def policy_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetId")
    def target_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetId: TargetId
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetId"))

    @target_id.setter
    def target_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        policy_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ControlPolicyAttachment``.

        :param policy_id: 
        :param target_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_id": policy_id,
            "target_id": target_id,
        }

    @builtins.property
    def policy_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyId: PolicyId
        '''
        result = self._values.get("policy_id")
        assert result is not None, "Required property 'policy_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetId: TargetId
        '''
        result = self._values.get("target_id")
        assert result is not None, "Required property 'target_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
        control_policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_scope: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_document: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ControlPolicy``.

        :param control_policy_name: 
        :param effect_scope: 
        :param policy_document: 
        :param description: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "control_policy_name": control_policy_name,
            "effect_scope": effect_scope,
            "policy_document": policy_document,
        }
        if description is not None:
            self._values["description"] = description

    @builtins.property
    def control_policy_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: controlPolicyName: PolicyName
        '''
        result = self._values.get("control_policy_name")
        assert result is not None, "Required property 'control_policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_scope(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: effectScope: EffectScope
        '''
        result = self._values.get("effect_scope")
        assert result is not None, "Required property 'effect_scope' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_document(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyDocument: PolicyDocument
        '''
        result = self._values.get("policy_document")
        assert result is not None, "Required property 'policy_document' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFolder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosFolder",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::Folder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFolderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Folder``.

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
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FolderId: The ID of the folder
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FolderName: The name of the folder
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFolderName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrParentFolderId"))

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
    @jsii.member(jsii_name="folderName")
    def folder_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: folderName: The name of the folder
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "folderName"))

    @folder_name.setter
    def folder_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "folderName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="parentFolderId")
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "parentFolderId"))

    @parent_folder_id.setter
    def parent_folder_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        folder_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        parent_folder_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Folder``.

        :param folder_name: 
        :param parent_folder_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: folderName: The name of the folder
        '''
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def parent_folder_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        '''
        result = self._values.get("parent_folder_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFolderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosHandshake(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosHandshake",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::Handshake``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosHandshakeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::Handshake``.

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
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HandshakeId: This ID of Resource Manager handshake
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHandshakeId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterAccountId: Resource account master account ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterAccountName: The name of the main account of the resource directory
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Note: Remarks
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNote"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: Resource directory ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TargetEntity: Invited account ID or login email
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetEntity"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TargetType: Type of account being invited. Valid values: Account, Email
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTargetType"))

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
    @jsii.member(jsii_name="targetEntity")
    def target_entity(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetEntity: Invited account ID or login email
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetEntity"))

    @target_entity.setter
    def target_entity(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetEntity", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targetType")
    def target_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "targetType"))

    @target_type.setter
    def target_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "targetType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="note")
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: note: Remarks
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "note"))

    @note.setter
    def note(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        target_entity: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        target_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        note: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::Handshake``.

        :param target_entity: 
        :param target_type: 
        :param note: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetEntity: Invited account ID or login email
        '''
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def target_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        '''
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def note(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: note: Remarks
        '''
        result = self._values.get("note")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPolicyAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosPolicyAttachment",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::PolicyAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPolicyAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::PolicyAttachment``.

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
    @jsii.member(jsii_name="attrAttachDate")
    def attr_attach_date(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AttachDate: Authorization time
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: Policy description
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyName: The name of the policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyType: The type of the policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrincipalName: The name of the object to which you want to attach the policy
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrincipalName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PrincipalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPrincipalType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

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
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: The name of the policy
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyType")
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyType: The type of the policy
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="principalName")
    def principal_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: principalName: The name of the object to which you want to attach the policy
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "principalName"))

    @principal_name.setter
    def principal_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "principalName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="principalType")
    def principal_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "principalType"))

    @principal_type.setter
    def principal_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "principalType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        principal_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        principal_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::PolicyAttachment``.

        :param policy_name: 
        :param policy_type: 
        :param principal_name: 
        :param principal_type: 
        :param resource_group_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "principal_name": principal_name,
            "principal_type": principal_type,
            "resource_group_id": resource_group_id,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: The name of the policy
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyType: The type of the policy
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def principal_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: principalName: The name of the object to which you want to attach the policy
        '''
        result = self._values.get("principal_name")
        assert result is not None, "Required property 'principal_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def principal_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: principalType: The type of the object to which you want to attach the policy. Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        result = self._values.get("principal_type")
        assert result is not None, "Required property 'principal_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
        '''
        result = self._values.get("resource_group_id")
        assert result is not None, "Required property 'resource_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPolicyAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceDirectory(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectory",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::ResourceDirectory``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceDirectoryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceDirectory``.

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
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterAccountId: The ID of the master account
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterAccountName: The name of the master account
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceDirectoryId: The ID of the resource directory
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RootFolderId: The ID of the root folder
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRootFolderId"))

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosResourceDirectoryProps:
    def __init__(self) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceDirectory``.'''
        self._values: typing.Dict[str, typing.Any] = {}

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceDirectoryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroup",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::ResourceGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceGroup``.

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
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DisplayName: The display name of the resource group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: The ID of the resource group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: The unique identifier of the resource group
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RegionStatuses: The status of the resource group in all regions
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRegionStatuses"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: The display name of the resource group
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The unique identifier of the resource group
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name"},
)
class RosResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceGroup``.

        :param display_name: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

    @builtins.property
    def display_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: displayName: The display name of the resource group
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The unique identifier of the resource group
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceShare(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShare",
):
    '''A ROS template type:  ``ALIYUN::ResourceManager::ResourceShare``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceShareProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ResourceManager::ResourceShare``.

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
    @jsii.member(jsii_name="attrResourceShareId")
    def attr_resource_share_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceShareId: The ID of the resource share.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceShareId"))

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
    @jsii.member(jsii_name="resourceShareName")
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        resourceShareName: The name of the resource share.
        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceShareName"))

    @resource_share_name.setter
    def resource_share_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "resourceShareName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]]:
        '''
        :Property: resources:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosResourceShare.ResourcesProperty"]]]],
    ) -> None:
        jsii.set(self, "resources", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="targets")
    def targets(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "targets"))

    @targets.setter
    def targets(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
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
            resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param resource_id: 
            :param resource_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "resource_id": resource_id,
                "resource_type": resource_type,
            }

        @builtins.property
        def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceId: The ID of the shared resource.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            resourceType: The type of the shared resource.
            Set the value to VSwitch.
            Only the vSwitches in virtual private clouds (VPCs) can be shared.
            '''
            result = self._values.get("resource_type")
            assert result is not None, "Required property 'resource_type' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceShareProps",
    jsii_struct_bases=[],
    name_mapping={
        "resource_share_name": "resourceShareName",
        "resources": "resources",
        "targets": "targets",
    },
)
class RosResourceShareProps:
    def __init__(
        self,
        *,
        resource_share_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resources: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosResourceShare.ResourcesProperty]]]] = None,
        targets: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ResourceManager::ResourceShare``.

        :param resource_share_name: 
        :param resources: 
        :param targets: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "resource_share_name": resource_share_name,
        }
        if resources is not None:
            self._values["resources"] = resources
        if targets is not None:
            self._values["targets"] = targets

    @builtins.property
    def resource_share_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        resourceShareName: The name of the resource share.
        The name must be 1 to 50 characters in length.
        It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        '''
        result = self._values.get("resource_share_name")
        assert result is not None, "Required property 'resource_share_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceShare.ResourcesProperty]]]]:
        '''
        :Property: resources:
        '''
        result = self._values.get("resources")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosResourceShare.ResourcesProperty]]]], result)

    @builtins.property
    def targets(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property:

        targets: The shared target.
        A shared target shares the resources of resource owners. You can share your resources
        only with the member accounts in your resource directory. A shared target is indicated
        by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        '''
        result = self._values.get("targets")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceShareProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "ControlPolicy",
    "ControlPolicyAttachment",
    "ControlPolicyAttachmentProps",
    "ControlPolicyProps",
    "Folder",
    "FolderProps",
    "Handshake",
    "HandshakeProps",
    "PolicyAttachment",
    "PolicyAttachmentProps",
    "ResourceDirectory",
    "ResourceDirectoryProps",
    "ResourceGroup",
    "ResourceGroupProps",
    "ResourceShare",
    "ResourceShareProps",
    "RosAccount",
    "RosAccountProps",
    "RosControlPolicy",
    "RosControlPolicyAttachment",
    "RosControlPolicyAttachmentProps",
    "RosControlPolicyProps",
    "RosFolder",
    "RosFolderProps",
    "RosHandshake",
    "RosHandshakeProps",
    "RosPolicyAttachment",
    "RosPolicyAttachmentProps",
    "RosResourceDirectory",
    "RosResourceDirectoryProps",
    "RosResourceGroup",
    "RosResourceGroupProps",
    "RosResourceShare",
    "RosResourceShareProps",
]

publication.publish()
