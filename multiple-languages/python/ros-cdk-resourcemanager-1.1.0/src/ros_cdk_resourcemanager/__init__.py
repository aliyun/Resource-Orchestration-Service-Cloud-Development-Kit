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
        props: typing.Union["AccountProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountId: This ID of Resource Manager Account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DisplayName: Member name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderId")
    def attr_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FolderId: The ID of the parent folder.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrJoinMethod")
    def attr_join_method(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JoinMethod: Ways for members to join the resource directory.

        Valid values: invited, created
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJoinMethod"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrType")
    def attr_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Type: Member type.

        The value of ResourceAccount indicates the resource account
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrType"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "AccountProps":
        return typing.cast("AccountProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AccountProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__322b7a3e6677e89dc554ab6d879e3912d36eb0df0d4d382ebe20cc305ecea16d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class ControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ControlPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ControlPolicy``, which is used to create a custom control policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosControlPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-controlpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_attachment_count(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AttachmentCount: AttachmentCount.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachmentCount"))

    @builtins.property
    @jsii.member(jsii_name="attrControlPolicyName")
    def attr_control_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ControlPolicyName: PolicyName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrControlPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrEffectScope")
    def attr_effect_scope(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EffectScope: EffectScope.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEffectScope"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyDocument")
    def attr_policy_document(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyDocument: PolicyDocument.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyDocument"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ControlPolicyProps":
        return typing.cast("ControlPolicyProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ControlPolicyProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__753bcded93858374ab5f6e926146614c69fdd3cf26825a2091cbea137077c18e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        props: typing.Union["ControlPolicyAttachmentProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_attach_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AttachDate: AttachDate.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyId")
    def attr_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyId: PolicyId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyId"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyName: PolicyName.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyType: PolicyType.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetId")
    def attr_target_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TargetId: TargetId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ControlPolicyAttachmentProps":
        return typing.cast("ControlPolicyAttachmentProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ControlPolicyAttachmentProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f69184fa15f2b9247c779e3f73e66044b5795862290fdef3b63f9acd45ea0c00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class Folder(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.Folder",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::Folder``, which is used to create a folder.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFolder``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["FolderProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FolderId: The ID of the folder.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderId"))

    @builtins.property
    @jsii.member(jsii_name="attrFolderName")
    def attr_folder_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FolderName: The name of the folder.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFolderName"))

    @builtins.property
    @jsii.member(jsii_name="attrParentFolderId")
    def attr_parent_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ParentFolderId: The ID of the parent folder.

        If not set, the system default value will be used
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrParentFolderId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "FolderProps":
        return typing.cast("FolderProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FolderProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56bd1727f6976f199f7a3dcb5ec689b48ba661d49b42da96f1b82b1e953c7680)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        props: typing.Union["HandshakeProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_handshake_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HandshakeId: This ID of Resource Manager handshake.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHandshakeId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountId")
    def attr_master_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterAccountId: Resource account master account ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterAccountName: The name of the main account of the resource directory.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrNote")
    def attr_note(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Note: Remarks.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNote"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceDirectoryId: Resource directory ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetEntity")
    def attr_target_entity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TargetEntity: Invited account ID or login email.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetEntity"))

    @builtins.property
    @jsii.member(jsii_name="attrTargetType")
    def attr_target_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute TargetType: Type of account being invited.

        Valid values: Account, Email
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTargetType"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "HandshakeProps":
        return typing.cast("HandshakeProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "HandshakeProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b43aeb009fb69fc76ba562a7d28386b9427839566bf5be12c4192ce1ba16abd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
    def attr_attach_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AttachDate: Authorization time.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAttachDate"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Description: Policy description.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyName: The name of the policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyType")
    def attr_policy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyType: The type of the policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalName")
    def attr_principal_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrincipalName: The name of the object to which you want to attach the policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrincipalName"))

    @builtins.property
    @jsii.member(jsii_name="attrPrincipalType")
    def attr_principal_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrincipalType: The type of the object to which you want to attach the policy.

        Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrincipalType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "PolicyAttachmentProps":
        return typing.cast("PolicyAttachmentProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PolicyAttachmentProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ade3e4cad337a22b3e44e241a939b23c9d9971fbb8f117c1be9c6ace391c3353)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
    def attr_master_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterAccountId: The ID of the master account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterAccountName")
    def attr_master_account_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterAccountName: The name of the master account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterAccountName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceDirectoryId")
    def attr_resource_directory_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceDirectoryId: The ID of the resource directory.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceDirectoryId"))

    @builtins.property
    @jsii.member(jsii_name="attrRootFolderId")
    def attr_root_folder_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RootFolderId: The ID of the root folder.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRootFolderId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ResourceDirectoryProps":
        return typing.cast("ResourceDirectoryProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ResourceDirectoryProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b95d3502a154caa522a50faf257732b78e97f00b0df0d3798c8913bfa1f2c874)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class ResourceGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceGroup``, which is used to create a resource group.

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
    def attr_account_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DisplayName: The display name of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Id: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The unique identifier of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RegionStatuses: The status of the resource group in all regions.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionStatuses"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ResourceGroupProps":
        return typing.cast("ResourceGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ResourceGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d400c9d5c785ff9d921460b3d3d90ebd84e33d5a267ecb029c79e4cc45a3ff9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
    name_mapping={"display_name": "displayName", "name": "name"},
)
class ResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ResourceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup

        :param display_name: Property displayName: The display name of the resource group.
        :param name: Property name: The unique identifier of the resource group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c216fb92c71e17244765ea6519e60248faa7fa17af9f74f53666594147a01cb3)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

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
        '''Property name: The unique identifier of the resource group.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ResourceShare(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShare",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceShare``, which is used to create a resource share.

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
    def attr_resource_share_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ResourceShareProps":
        return typing.cast("ResourceShareProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ResourceShareProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f3cde17eae76e35098593e49b9b2c9ab150840be5535a5a793dc08e479f9ea1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class ResourceShareAssociation(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.ResourceShareAssociation",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ResourceManager::ResourceShareAssociation``, which is used to associate a shared resource or a resource user.

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
    def attr_resource_share_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceShareId: The ID of the resource share.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceShareId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ResourceShareAssociationProps":
        return typing.cast("ResourceShareAssociationProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ResourceShareAssociationProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__087c71b59081d607398341367faf2f01bc075ca0f0ae1f1b37dfb054a6d76389)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ControlPolicy``, which is used to create a custom control policy.

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


class RosFolder(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosFolder",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::Folder``, which is used to create a folder.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceGroup``, which is used to create a resource group.

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
        :Attribute: AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountId"))

    @builtins.property
    @jsii.member(jsii_name="attrDisplayName")
    def attr_display_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DisplayName: The display name of the resource group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDisplayName"))

    @builtins.property
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Id: The ID of the resource group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The unique identifier of the resource group
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrRegionStatuses")
    def attr_region_statuses(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RegionStatuses: The status of the resource group in all regions
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRegionStatuses"))

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
        :Property: displayName: The display name of the resource group
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
        :Property: name: The unique identifier of the resource group
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps",
    jsii_struct_bases=[],
    name_mapping={"display_name": "displayName", "name": "name"},
)
class RosResourceGroupProps:
    def __init__(
        self,
        *,
        display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosResourceGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup

        :param display_name: 
        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a103364ea58dc8d0675d0af32d88bc0be8f151aba6e70846e4464a56e3e49d8)
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "display_name": display_name,
            "name": name,
        }

    @builtins.property
    def display_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: displayName: The display name of the resource group
        '''
        result = self._values.get("display_name")
        assert result is not None, "Required property 'display_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The unique identifier of the resource group
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceShare``, which is used to create a resource share.

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ResourceManager::ResourceShareAssociation``, which is used to associate a shared resource or a resource user.

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
    "ResourceShareAssociation",
    "ResourceShareAssociationProps",
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
    "RosResourceShareAssociation",
    "RosResourceShareAssociationProps",
    "RosResourceShareProps",
]

publication.publish()

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

def _typecheckingstub__322b7a3e6677e89dc554ab6d879e3912d36eb0df0d4d382ebe20cc305ecea16d(
    value: AccountProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__448f89d9adbd7e4cfb8e643598c134c01d1b1dbabe776ad5bbeb8dfb9e1b82d5(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7639357c264a2ad9492b699e5c0116dbd3b8905195ea94afe7876768bd1ee0e(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    delete_account: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    folder_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payer_account_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__753bcded93858374ab5f6e926146614c69fdd3cf26825a2091cbea137077c18e(
    value: ControlPolicyProps,
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

def _typecheckingstub__f69184fa15f2b9247c779e3f73e66044b5795862290fdef3b63f9acd45ea0c00(
    value: ControlPolicyAttachmentProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5008ea4415157312ca22da7fb8a9495b682b59fe531418518218acacf110d69a(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__56bd1727f6976f199f7a3dcb5ec689b48ba661d49b42da96f1b82b1e953c7680(
    value: FolderProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9554efc9cd0f86248a576447772b13398350c8633b99c65c06d0e91b430007bd(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__0b43aeb009fb69fc76ba562a7d28386b9427839566bf5be12c4192ce1ba16abd(
    value: HandshakeProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e3f90d318c2c8dc04f93fe746f6c1b99bd9198635c463f8f38f1b4c1de07dad(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__ade3e4cad337a22b3e44e241a939b23c9d9971fbb8f117c1be9c6ace391c3353(
    value: PolicyAttachmentProps,
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

def _typecheckingstub__b95d3502a154caa522a50faf257732b78e97f00b0df0d3798c8913bfa1f2c874(
    value: ResourceDirectoryProps,
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

def _typecheckingstub__3d400c9d5c785ff9d921460b3d3d90ebd84e33d5a267ecb029c79e4cc45a3ff9(
    value: ResourceGroupProps,
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

def _typecheckingstub__0f3cde17eae76e35098593e49b9b2c9ab150840be5535a5a793dc08e479f9ea1(
    value: ResourceShareProps,
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

def _typecheckingstub__087c71b59081d607398341367faf2f01bc075ca0f0ae1f1b37dfb054a6d76389(
    value: ResourceShareAssociationProps,
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

def _typecheckingstub__5a103364ea58dc8d0675d0af32d88bc0be8f151aba6e70846e4464a56e3e49d8(
    *,
    display_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
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
