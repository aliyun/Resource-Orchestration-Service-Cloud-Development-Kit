"""
## Aliyun ROS RESOURCEMANAGER Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_resourcemanager as RESOURCEMANAGER
```
"""
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
    """A ROS resource type:  ``ALIYUN::ResourceManager::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccountProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Account, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> typing.Any:
        """
        :Attribute: AccountId: This ID of Resource Manager Account
        """
        return jsii.get(self, "attrAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> typing.Any:
        """
        :Attribute: DisplayName: Member name
        """
        return jsii.get(self, "attrDisplayName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> typing.Any:
        """
        :Attribute: FolderId: The ID of the parent folder
        """
        return jsii.get(self, "attrFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> typing.Any:
        """
        :Attribute: JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
        """
        return jsii.get(self, "attrJoinMethod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: Resource directory ID
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> typing.Any:
        """
        :Attribute: Type: Member type. The value of ResourceAccount indicates the resource account
        """
        return jsii.get(self, "attrType")


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
        display_name: builtins.str,
        folder_id: typing.Optional[builtins.str] = None,
        payer_account_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Account``.

        :param display_name: 
        :param folder_id: 
        :param payer_account_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
        }
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: Member name
        """
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return result

    @builtins.property
    def folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: folderId: The ID of the parent folder
        """
        result = self._values.get("folder_id")
        return result

    @builtins.property
    def payer_account_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: payerAccountId:
        """
        result = self._values.get("payer_account_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Folder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Folder",
):
    """A ROS resource type:  ``ALIYUN::ResourceManager::Folder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FolderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Folder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Folder, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> typing.Any:
        """
        :Attribute: FolderId: The ID of the folder
        """
        return jsii.get(self, "attrFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> typing.Any:
        """
        :Attribute: FolderName: The name of the folder
        """
        return jsii.get(self, "attrFolderName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> typing.Any:
        """
        :Attribute: ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
        """
        return jsii.get(self, "attrParentFolderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.FolderProps",
    jsii_struct_bases=[],
    name_mapping={"folder_name": "folderName", "parent_folder_id": "parentFolderId"},
)
class FolderProps:
    def __init__(
        self,
        *,
        folder_name: builtins.str,
        parent_folder_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Folder``.

        :param folder_name: 
        :param parent_folder_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(self) -> builtins.str:
        """
        :Property: folderName: The name of the folder
        """
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return result

    @builtins.property
    def parent_folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        """
        result = self._values.get("parent_folder_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::ResourceManager::Handshake``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "HandshakeProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Handshake``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Handshake, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(self) -> typing.Any:
        """
        :Attribute: HandshakeId: This ID of Resource Manager handshake
        """
        return jsii.get(self, "attrHandshakeId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> typing.Any:
        """
        :Attribute: MasterAccountId: Resource account master account ID
        """
        return jsii.get(self, "attrMasterAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> typing.Any:
        """
        :Attribute: MasterAccountName: The name of the main account of the resource directory
        """
        return jsii.get(self, "attrMasterAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> typing.Any:
        """
        :Attribute: Note: Remarks
        """
        return jsii.get(self, "attrNote")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: Resource directory ID
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> typing.Any:
        """
        :Attribute: TargetEntity: Invited account ID or login email
        """
        return jsii.get(self, "attrTargetEntity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> typing.Any:
        """
        :Attribute: TargetType: Type of account being invited. Valid values: Account, Email
        """
        return jsii.get(self, "attrTargetType")


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
        target_entity: builtins.str,
        target_type: builtins.str,
        note: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Handshake``.

        :param target_entity: 
        :param target_type: 
        :param note: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(self) -> builtins.str:
        """
        :Property: targetEntity: Invited account ID or login email
        """
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return result

    @builtins.property
    def target_type(self) -> builtins.str:
        """
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        """
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return result

    @builtins.property
    def note(self) -> typing.Optional[builtins.str]:
        """
        :Property: note: Remarks
        """
        result = self._values.get("note")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "HandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceDirectory(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectory",
):
    """A ROS resource type:  ``ALIYUN::ResourceManager::ResourceDirectory``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["ResourceDirectoryProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::ResourceDirectory``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ResourceDirectory, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> typing.Any:
        """
        :Attribute: MasterAccountId: The ID of the master account
        """
        return jsii.get(self, "attrMasterAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> typing.Any:
        """
        :Attribute: MasterAccountName: The name of the master account
        """
        return jsii.get(self, "attrMasterAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: The ID of the resource directory
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> typing.Any:
        """
        :Attribute: RootFolderId: The ID of the root folder
        """
        return jsii.get(self, "attrRootFolderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class ResourceDirectoryProps:
    def __init__(self) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::ResourceDirectory``."""
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
    """A ROS resource type:  ``ALIYUN::ResourceManager::ResourceGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ResourceGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::ResourceGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ResourceGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> typing.Any:
        """
        :Attribute: AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
        """
        return jsii.get(self, "attrAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> typing.Any:
        """
        :Attribute: CreateDate: The time when the resource group was created
        """
        return jsii.get(self, "attrCreateDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> typing.Any:
        """
        :Attribute: DisplayName: The display name of the resource group
        """
        return jsii.get(self, "attrDisplayName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The ID of the resource group
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The unique identifier of the resource group
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> typing.Any:
        """
        :Attribute: RegionStatuses: The status of the resource group in all regions
        """
        return jsii.get(self, "attrRegionStatuses")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name"},
)
class ResourceGroupProps:
    def __init__(self, *, display_name: builtins.str, name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::ResourceGroup``.

        :param display_name: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

    @builtins.property
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: The display name of the resource group
        """
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The unique identifier of the resource group
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccount(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosAccount",
):
    """A ROS template type:  ``ALIYUN::ResourceManager::Account``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccountProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Account``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccount, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> typing.Any:
        """
        :Attribute: AccountId: This ID of Resource Manager Account
        """
        return jsii.get(self, "attrAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> typing.Any:
        """
        :Attribute: DisplayName: Member name
        """
        return jsii.get(self, "attrDisplayName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> typing.Any:
        """
        :Attribute: FolderId: The ID of the parent folder
        """
        return jsii.get(self, "attrFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> typing.Any:
        """
        :Attribute: JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
        """
        return jsii.get(self, "attrJoinMethod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: Resource directory ID
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> typing.Any:
        """
        :Attribute: Type: Member type. The value of ResourceAccount indicates the resource account
        """
        return jsii.get(self, "attrType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: Member name
        """
        return jsii.get(self, "displayName")

    @display_name.setter # type: ignore
    def display_name(self, value: builtins.str) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="folderId")
    def folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: folderId: The ID of the parent folder
        """
        return jsii.get(self, "folderId")

    @folder_id.setter # type: ignore
    def folder_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "folderId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payerAccountId")
    def payer_account_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: payerAccountId:
        """
        return jsii.get(self, "payerAccountId")

    @payer_account_id.setter # type: ignore
    def payer_account_id(self, value: typing.Optional[builtins.str]) -> None:
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
        display_name: builtins.str,
        folder_id: typing.Optional[builtins.str] = None,
        payer_account_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Account``.

        :param display_name: 
        :param folder_id: 
        :param payer_account_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
        }
        if folder_id is not None:
            self._values["folder_id"] = folder_id
        if payer_account_id is not None:
            self._values["payer_account_id"] = payer_account_id

    @builtins.property
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: Member name
        """
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return result

    @builtins.property
    def folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: folderId: The ID of the parent folder
        """
        result = self._values.get("folder_id")
        return result

    @builtins.property
    def payer_account_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: payerAccountId:
        """
        result = self._values.get("payer_account_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccountProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFolder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosFolder",
):
    """A ROS template type:  ``ALIYUN::ResourceManager::Folder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFolderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Folder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosFolder, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> typing.Any:
        """
        :Attribute: FolderId: The ID of the folder
        """
        return jsii.get(self, "attrFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> typing.Any:
        """
        :Attribute: FolderName: The name of the folder
        """
        return jsii.get(self, "attrFolderName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> typing.Any:
        """
        :Attribute: ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
        """
        return jsii.get(self, "attrParentFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="folderName")
    def folder_name(self) -> builtins.str:
        """
        :Property: folderName: The name of the folder
        """
        return jsii.get(self, "folderName")

    @folder_name.setter # type: ignore
    def folder_name(self, value: builtins.str) -> None:
        jsii.set(self, "folderName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="parentFolderId")
    def parent_folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        """
        return jsii.get(self, "parentFolderId")

    @parent_folder_id.setter # type: ignore
    def parent_folder_id(self, value: typing.Optional[builtins.str]) -> None:
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
        folder_name: builtins.str,
        parent_folder_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Folder``.

        :param folder_name: 
        :param parent_folder_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "folder_name": folder_name,
        }
        if parent_folder_id is not None:
            self._values["parent_folder_id"] = parent_folder_id

    @builtins.property
    def folder_name(self) -> builtins.str:
        """
        :Property: folderName: The name of the folder
        """
        result = self._values.get("folder_name")
        assert result is not None, "Required property 'folder_name' is missing"
        return result

    @builtins.property
    def parent_folder_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: parentFolderId: The ID of the parent folder. If not set, the system default value will be used
        """
        result = self._values.get("parent_folder_id")
        return result

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
    """A ROS template type:  ``ALIYUN::ResourceManager::Handshake``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosHandshakeProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::Handshake``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosHandshake, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHandshakeId")
    def attr_handshake_id(self) -> typing.Any:
        """
        :Attribute: HandshakeId: This ID of Resource Manager handshake
        """
        return jsii.get(self, "attrHandshakeId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> typing.Any:
        """
        :Attribute: MasterAccountId: Resource account master account ID
        """
        return jsii.get(self, "attrMasterAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> typing.Any:
        """
        :Attribute: MasterAccountName: The name of the main account of the resource directory
        """
        return jsii.get(self, "attrMasterAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> typing.Any:
        """
        :Attribute: Note: Remarks
        """
        return jsii.get(self, "attrNote")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: Resource directory ID
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> typing.Any:
        """
        :Attribute: TargetEntity: Invited account ID or login email
        """
        return jsii.get(self, "attrTargetEntity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> typing.Any:
        """
        :Attribute: TargetType: Type of account being invited. Valid values: Account, Email
        """
        return jsii.get(self, "attrTargetType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetEntity")
    def target_entity(self) -> builtins.str:
        """
        :Property: targetEntity: Invited account ID or login email
        """
        return jsii.get(self, "targetEntity")

    @target_entity.setter # type: ignore
    def target_entity(self, value: builtins.str) -> None:
        jsii.set(self, "targetEntity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="targetType")
    def target_type(self) -> builtins.str:
        """
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        """
        return jsii.get(self, "targetType")

    @target_type.setter # type: ignore
    def target_type(self, value: builtins.str) -> None:
        jsii.set(self, "targetType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="note")
    def note(self) -> typing.Optional[builtins.str]:
        """
        :Property: note: Remarks
        """
        return jsii.get(self, "note")

    @note.setter # type: ignore
    def note(self, value: typing.Optional[builtins.str]) -> None:
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
        target_entity: builtins.str,
        target_type: builtins.str,
        note: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::Handshake``.

        :param target_entity: 
        :param target_type: 
        :param note: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "target_entity": target_entity,
            "target_type": target_type,
        }
        if note is not None:
            self._values["note"] = note

    @builtins.property
    def target_entity(self) -> builtins.str:
        """
        :Property: targetEntity: Invited account ID or login email
        """
        result = self._values.get("target_entity")
        assert result is not None, "Required property 'target_entity' is missing"
        return result

    @builtins.property
    def target_type(self) -> builtins.str:
        """
        :Property: targetType: Type of account being invited. Valid values: Account, Email
        """
        result = self._values.get("target_type")
        assert result is not None, "Required property 'target_type' is missing"
        return result

    @builtins.property
    def note(self) -> typing.Optional[builtins.str]:
        """
        :Property: note: Remarks
        """
        result = self._values.get("note")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosHandshakeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosResourceDirectory(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectory",
):
    """A ROS template type:  ``ALIYUN::ResourceManager::ResourceDirectory``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceDirectoryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::ResourceDirectory``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosResourceDirectory, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> typing.Any:
        """
        :Attribute: MasterAccountId: The ID of the master account
        """
        return jsii.get(self, "attrMasterAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> typing.Any:
        """
        :Attribute: MasterAccountName: The name of the master account
        """
        return jsii.get(self, "attrMasterAccountName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> typing.Any:
        """
        :Attribute: ResourceDirectoryId: The ID of the resource directory
        """
        return jsii.get(self, "attrResourceDirectoryId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> typing.Any:
        """
        :Attribute: RootFolderId: The ID of the root folder
        """
        return jsii.get(self, "attrRootFolderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceDirectoryProps",
    jsii_struct_bases=[],
    name_mapping={},
)
class RosResourceDirectoryProps:
    def __init__(self) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::ResourceDirectory``."""
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
    """A ROS template type:  ``ALIYUN::ResourceManager::ResourceGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosResourceGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ResourceManager::ResourceGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosResourceGroup, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccountId")
    def attr_account_id(self) -> typing.Any:
        """
        :Attribute: AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
        """
        return jsii.get(self, "attrAccountId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> typing.Any:
        """
        :Attribute: CreateDate: The time when the resource group was created
        """
        return jsii.get(self, "attrCreateDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> typing.Any:
        """
        :Attribute: DisplayName: The display name of the resource group
        """
        return jsii.get(self, "attrDisplayName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The ID of the resource group
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The unique identifier of the resource group
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> typing.Any:
        """
        :Attribute: RegionStatuses: The status of the resource group in all regions
        """
        return jsii.get(self, "attrRegionStatuses")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: The display name of the resource group
        """
        return jsii.get(self, "displayName")

    @display_name.setter # type: ignore
    def display_name(self, value: builtins.str) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The unique identifier of the resource group
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name"},
)
class RosResourceGroupProps:
    def __init__(self, *, display_name: builtins.str, name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::ResourceManager::ResourceGroup``.

        :param display_name: 
        :param name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

    @builtins.property
    def display_name(self) -> builtins.str:
        """
        :Property: displayName: The display name of the resource group
        """
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The unique identifier of the resource group
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Account",
    "AccountProps",
    "Folder",
    "FolderProps",
    "Handshake",
    "HandshakeProps",
    "ResourceDirectory",
    "ResourceDirectoryProps",
    "ResourceGroup",
    "ResourceGroupProps",
    "RosAccount",
    "RosAccountProps",
    "RosFolder",
    "RosFolderProps",
    "RosHandshake",
    "RosHandshakeProps",
    "RosResourceDirectory",
    "RosResourceDirectoryProps",
    "RosResourceGroup",
    "RosResourceGroupProps",
]

publication.publish()
