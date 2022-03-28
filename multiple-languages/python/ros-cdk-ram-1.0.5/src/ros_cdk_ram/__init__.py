'''
## Aliyun ROS RAM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as RAM from '@alicloud/ros-cdk-ram';
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


class AccessKey(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AccessKey",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AccessKey``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccessKeyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AccessKey``.

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
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccessKeyId: Id of access key.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessKeyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccessKeySecret: Secret of access key.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessKeySecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: Status of access key.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.AccessKeyProps",
    jsii_struct_bases=[],
    name_mapping={"user_name": "userName"},
)
class AccessKeyProps:
    def __init__(
        self,
        *,
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: Property userName: Specifies the user name, containing up to 64 characters.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userName: Specifies the user name, containing up to 64 characters.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AttachPolicyToRole(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToRole",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToRole``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AttachPolicyToRoleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToRole``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToRoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "role_name": "roleName",
    },
)
class AttachPolicyToRoleProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        role_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: Property policyName: Authorization policy name.
        :param policy_type: Property policyType: Authorization policy type. Value: "System" or "Custom".
        :param role_name: Property roleName: Role name.Example: dev.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyName: Authorization policy name.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyType: Authorization policy type.

        Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property roleName: Role name.Example: dev.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttachPolicyToRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AttachPolicyToUser(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToUser",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToUser``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AttachPolicyToUserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToUser``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "user_name": "userName",
    },
)
class AttachPolicyToUserProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: Property policyName: Authorization policy name.
        :param policy_type: Property policyType: Authorization policy type. Value: "System" or "Custom".
        :param user_name: Property userName: User name.Example: dev.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyName: Authorization policy name.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyType: Authorization policy type.

        Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userName: User name.Example: dev.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttachPolicyToUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Group(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.Group",
):
    '''A ROS resource type:  ``ALIYUN::RAM::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Group``.

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
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupName: Id of ram group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "comments": "comments",
        "deletion_force": "deletionForce",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: Property groupName: Specifies the group name, containing up to 64 characters.
        :param comments: Property comments: Remark information, up to 128 characters or Chinese characters.
        :param deletion_force: Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
        :param policies: Property policies: Describes what actions are allowed on what resources.
        :param policy_attachments: Property policyAttachments: System and custom policy names to attach.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Specifies the group name, containing up to 64 characters.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property comments: Remark information, up to 128 characters or Chinese characters.'''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies attached to the group.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedPolicy(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.ManagedPolicy",
):
    '''A ROS resource type:  ``ALIYUN::RAM::ManagedPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::ManagedPolicy``.

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
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.ManagedPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "description": "description",
        "groups": "groups",
        "policy_document": "policyDocument",
        "policy_document_unchecked": "policyDocumentUnchecked",
        "roles": "roles",
        "users": "users",
    },
)
class ManagedPolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::ManagedPolicy``.

        :param policy_name: Property policyName: Specifies the authorization policy name, containing up to 128 characters.
        :param description: Property description: Specifies the authorization policy description, containing up to 1024 characters.
        :param groups: Property groups: The names of groups to attach to this policy.
        :param policy_document: Property policyDocument: A policy document that describes what actions are allowed on which resources.
        :param policy_document_unchecked: Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        :param roles: Property roles: The names of roles to attach to this policy.
        :param users: Property users: The names of users to attach to this policy.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
        }
        if description is not None:
            self._values["description"] = description
        if groups is not None:
            self._values["groups"] = groups
        if policy_document is not None:
            self._values["policy_document"] = policy_document
        if policy_document_unchecked is not None:
            self._values["policy_document_unchecked"] = policy_document_unchecked
        if roles is not None:
            self._values["roles"] = roles
        if users is not None:
            self._values["users"] = users

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property policyName: Specifies the authorization policy name, containing up to 128 characters.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Specifies the authorization policy description, containing up to 1024 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property groups: The names of groups to attach to this policy.'''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        '''Property policyDocument: A policy document that describes what actions are allowed on which resources.'''
        result = self._values.get("policy_document")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]], result)

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.

        If it is specified, PolicyDocument will be ignored.
        '''
        result = self._values.get("policy_document_unchecked")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property roles: The names of roles to attach to this policy.'''
        result = self._values.get("roles")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property users: The names of users to attach to this policy.'''
        result = self._values.get("users")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RamAccountAlias(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RamAccountAlias",
):
    '''A ROS resource type:  ``ALIYUN::RAM::RamAccountAlias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RamAccountAliasProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::RamAccountAlias``.

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
    @jsii.member(jsii_name="attrAccountAlias")
    def attr_account_alias(self) -> ros_cdk_core.IResolvable:
        '''Attribute AccountAlias: The alias of the Alibaba Cloud account.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountAlias"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RamAccountAliasProps",
    jsii_struct_bases=[],
    name_mapping={"account_alias": "accountAlias"},
)
class RamAccountAliasProps:
    def __init__(
        self,
        *,
        account_alias: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::RamAccountAlias``.

        :param account_alias: Property accountAlias: The alias of the Alibaba Cloud account. The alias must be 1 to 50 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.) and underscores (_). Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_alias": account_alias,
        }

    @builtins.property
    def account_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property accountAlias: The alias of the Alibaba Cloud account.

        The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        digits, hyphens (-), periods (.) and underscores (_).
        Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        result = self._values.get("account_alias")
        assert result is not None, "Required property 'account_alias' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RamAccountAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Role(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.Role",
):
    '''A ROS resource type:  ``ALIYUN::RAM::Role``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RoleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Role``.

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute Arn: Name of alicloud resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RoleId: Id of ram role.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RoleName: Name of ram role.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "assume_role_policy_document": "assumeRolePolicyDocument",
        "role_name": "roleName",
        "deletion_force": "deletionForce",
        "description": "description",
        "max_session_duration": "maxSessionDuration",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class RoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"],
        role_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Role``.

        :param assume_role_policy_document: Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        :param role_name: Property roleName: Specifies the role name, containing up to 64 characters.
        :param deletion_force: Property deletionForce: Whether force detach the policies attached to the role. Default value is false.
        :param description: Property description: Remark information, up to 1024 characters or Chinese characters.
        :param max_session_duration: Property maxSessionDuration: The maximum session duration of the RAM role. Valid values: 3600 to 43200. Unit: seconds. Default value: 3600. The default value is used if the parameter is not specified.
        :param policies: Property policies: Describes what actions are allowed on what resources.
        :param policy_attachments: Property policyAttachments: System and custom policy names to attach.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"]:
        '''Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.'''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"], result)

    @builtins.property
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property roleName: Specifies the role name, containing up to 64 characters.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies attached to the role.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Remark information, up to 1024 characters or Chinese characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxSessionDuration: The maximum session duration of the RAM role.

        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessKey(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAccessKey",
):
    '''A ROS template type:  ``ALIYUN::RAM::AccessKey``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccessKeyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AccessKey``.

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
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccessKeyId: Id of access key.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessKeyId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccessKeySecret: Secret of access key.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccessKeySecret"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: Status of access key.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

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
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosAccessKeyProps",
    jsii_struct_bases=[],
    name_mapping={"user_name": "userName"},
)
class RosAccessKeyProps:
    def __init__(
        self,
        *,
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAttachPolicyToRole(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToRole",
):
    '''A ROS template type:  ``ALIYUN::RAM::AttachPolicyToRole``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAttachPolicyToRoleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToRole``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
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
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleName")
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: roleName: Role name.Example: dev.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "roleName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToRoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "role_name": "roleName",
    },
)
class RosAttachPolicyToRoleProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        role_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: 
        :param policy_type: 
        :param role_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: roleName: Role name.Example: dev.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttachPolicyToRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAttachPolicyToUser(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToUser",
):
    '''A ROS template type:  ``ALIYUN::RAM::AttachPolicyToUser``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAttachPolicyToUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToUser``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
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
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: User name.Example: dev.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "policy_type": "policyType",
        "user_name": "userName",
    },
)
class RosAttachPolicyToUserProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        policy_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: 
        :param policy_type: 
        :param user_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def policy_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: User name.Example: dev.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttachPolicyToUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosGroup",
):
    '''A ROS template type:  ``ALIYUN::RAM::Group``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Group``.

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
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupName: Id of ram group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupName"))

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comments")
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "comments"))

    @comments.setter
    def comments(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "comments", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the group. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyAttachmentsProperty"]],
    ) -> None:
        jsii.set(self, "policyAttachments", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "policy_document": "policyDocument",
            "policy_name": "policyName",
            "description": "description",
        },
    )
    class PoliciesProperty:
        def __init__(
            self,
            *,
            policy_document: typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyDocumentProperty"],
            policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosGroup.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosGroup.PolicyAttachmentsProperty",
        jsii_struct_bases=[],
        name_mapping={"custom": "custom", "system": "system"},
    )
    class PolicyAttachmentsProperty:
        def __init__(
            self,
            *,
            custom: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyAttachmentsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosGroup.PolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class PolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosGroup.StatementProperty"]]]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.StatementProperty"]]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.StatementProperty"]]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosGroup.StatementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition": "condition",
            "effect": "effect",
            "resource": "resource",
        },
    )
    class StatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if action is not None:
                self._values["action"] = action
            if condition is not None:
                self._values["condition"] = condition
            if effect is not None:
                self._values["effect"] = effect
            if resource is not None:
                self._values["resource"] = resource

        @builtins.property
        def action(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StatementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "comments": "comments",
        "deletion_force": "deletionForce",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosGroup.PoliciesProperty]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosGroup.PolicyAttachmentsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: 
        :param comments: 
        :param deletion_force: 
        :param policies: 
        :param policy_attachments: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        '''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the group. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosGroup.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosGroup.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosGroup.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosGroup.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedPolicy(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosManagedPolicy",
):
    '''A ROS template type:  ``ALIYUN::RAM::ManagedPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::ManagedPolicy``.

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
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPolicyName"))

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
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "policyName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: groups: The names of groups to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "groups"))

    @groups.setter
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groups", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyDocument")
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        '''
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]], jsii.get(self, "policyDocument"))

    @policy_document.setter
    def policy_document(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]],
    ) -> None:
        jsii.set(self, "policyDocument", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyDocumentUnchecked")
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policyDocumentUnchecked"))

    @policy_document_unchecked.setter
    def policy_document_unchecked(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "policyDocumentUnchecked", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roles")
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: roles: The names of roles to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "roles"))

    @roles.setter
    def roles(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "roles", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="users")
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: users: The names of users to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "users"))

    @users.setter
    def users(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "users", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class PolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.StatementProperty"]]]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.StatementProperty"]]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.StatementProperty"]]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosManagedPolicy.StatementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition": "condition",
            "effect": "effect",
            "resource": "resource",
        },
    )
    class StatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if action is not None:
                self._values["action"] = action
            if condition is not None:
                self._values["condition"] = condition
            if effect is not None:
                self._values["effect"] = effect
            if resource is not None:
                self._values["resource"] = resource

        @builtins.property
        def action(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StatementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosManagedPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "policy_name": "policyName",
        "description": "description",
        "groups": "groups",
        "policy_document": "policyDocument",
        "policy_document_unchecked": "policyDocumentUnchecked",
        "roles": "roles",
        "users": "users",
    },
)
class RosManagedPolicyProps:
    def __init__(
        self,
        *,
        policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedPolicy.PolicyDocumentProperty]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::ManagedPolicy``.

        :param policy_name: 
        :param description: 
        :param groups: 
        :param policy_document: 
        :param policy_document_unchecked: 
        :param roles: 
        :param users: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
        }
        if description is not None:
            self._values["description"] = description
        if groups is not None:
            self._values["groups"] = groups
        if policy_document is not None:
            self._values["policy_document"] = policy_document
        if policy_document_unchecked is not None:
            self._values["policy_document_unchecked"] = policy_document_unchecked
        if roles is not None:
            self._values["roles"] = roles
        if users is not None:
            self._values["users"] = users

    @builtins.property
    def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: groups: The names of groups to attach to this policy.
        '''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedPolicy.PolicyDocumentProperty]]:
        '''
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        '''
        result = self._values.get("policy_document")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedPolicy.PolicyDocumentProperty]], result)

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        '''
        result = self._values.get("policy_document_unchecked")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: roles: The names of roles to attach to this policy.
        '''
        result = self._values.get("roles")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: users: The names of users to attach to this policy.
        '''
        result = self._values.get("users")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRamAccountAlias(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosRamAccountAlias",
):
    '''A ROS template type:  ``ALIYUN::RAM::RamAccountAlias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRamAccountAliasProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::RamAccountAlias``.

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
    @jsii.member(jsii_name="attrAccountAlias")
    def attr_account_alias(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AccountAlias: The alias of the Alibaba Cloud account.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAccountAlias"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accountAlias")
    def account_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountAlias: The alias of the Alibaba Cloud account.
        The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        digits, hyphens (-), periods (.) and underscores (_).
        Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "accountAlias"))

    @account_alias.setter
    def account_alias(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "accountAlias", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosRamAccountAliasProps",
    jsii_struct_bases=[],
    name_mapping={"account_alias": "accountAlias"},
)
class RosRamAccountAliasProps:
    def __init__(
        self,
        *,
        account_alias: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::RamAccountAlias``.

        :param account_alias: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "account_alias": account_alias,
        }

    @builtins.property
    def account_alias(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        accountAlias: The alias of the Alibaba Cloud account.
        The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        digits, hyphens (-), periods (.) and underscores (_).
        Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        result = self._values.get("account_alias")
        assert result is not None, "Required property 'account_alias' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRamAccountAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRole(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosRole",
):
    '''A ROS template type:  ``ALIYUN::RAM::Role``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRoleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Role``.

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Arn: Name of alicloud resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RoleId: Id of ram role.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RoleName: Name of ram role.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRoleName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="assumeRolePolicyDocument")
    def assume_role_policy_document(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"]:
        '''
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"], jsii.get(self, "assumeRolePolicyDocument"))

    @assume_role_policy_document.setter
    def assume_role_policy_document(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"],
    ) -> None:
        jsii.set(self, "assumeRolePolicyDocument", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleName")
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "roleName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="maxSessionDuration")
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxSessionDuration"))

    @max_session_duration.setter
    def max_session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "maxSessionDuration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyAttachmentsProperty"]],
    ) -> None:
        jsii.set(self, "policyAttachments", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class AssumeRolePolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]],
            version: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]], result)

        @builtins.property
        def version(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AssumeRolePolicyDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.ConditionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "bool": "bool",
            "date_equals": "dateEquals",
            "date_greater_than": "dateGreaterThan",
            "date_greater_than_equals": "dateGreaterThanEquals",
            "date_less_than": "dateLessThan",
            "date_less_than_equals": "dateLessThanEquals",
            "date_not_equals": "dateNotEquals",
            "ip_address": "ipAddress",
            "not_ip_address": "notIpAddress",
            "numeric_equals": "numericEquals",
            "numeric_greater_than": "numericGreaterThan",
            "numeric_greater_than_equals": "numericGreaterThanEquals",
            "numeric_less_than": "numericLessThan",
            "numeric_less_than_equals": "numericLessThanEquals",
            "numeric_not_equals": "numericNotEquals",
            "string_equals": "stringEquals",
            "string_equals_ignore_case": "stringEqualsIgnoreCase",
            "string_like": "stringLike",
            "string_not_equals": "stringNotEquals",
            "string_not_equals_ignore_case": "stringNotEqualsIgnoreCase",
            "string_not_like": "stringNotLike",
        },
    )
    class ConditionProperty:
        def __init__(
            self,
            *,
            bool: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_greater_than: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_greater_than_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_less_than: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_less_than_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_not_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            ip_address: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            not_ip_address: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_greater_than: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_greater_than_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_less_than: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_less_than_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_not_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_equals_ignore_case: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_like: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_equals: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_equals_ignore_case: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_like: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        ) -> None:
            '''
            :param bool: 
            :param date_equals: 
            :param date_greater_than: 
            :param date_greater_than_equals: 
            :param date_less_than: 
            :param date_less_than_equals: 
            :param date_not_equals: 
            :param ip_address: 
            :param not_ip_address: 
            :param numeric_equals: 
            :param numeric_greater_than: 
            :param numeric_greater_than_equals: 
            :param numeric_less_than: 
            :param numeric_less_than_equals: 
            :param numeric_not_equals: 
            :param string_equals: 
            :param string_equals_ignore_case: 
            :param string_like: 
            :param string_not_equals: 
            :param string_not_equals_ignore_case: 
            :param string_not_like: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if bool is not None:
                self._values["bool"] = bool
            if date_equals is not None:
                self._values["date_equals"] = date_equals
            if date_greater_than is not None:
                self._values["date_greater_than"] = date_greater_than
            if date_greater_than_equals is not None:
                self._values["date_greater_than_equals"] = date_greater_than_equals
            if date_less_than is not None:
                self._values["date_less_than"] = date_less_than
            if date_less_than_equals is not None:
                self._values["date_less_than_equals"] = date_less_than_equals
            if date_not_equals is not None:
                self._values["date_not_equals"] = date_not_equals
            if ip_address is not None:
                self._values["ip_address"] = ip_address
            if not_ip_address is not None:
                self._values["not_ip_address"] = not_ip_address
            if numeric_equals is not None:
                self._values["numeric_equals"] = numeric_equals
            if numeric_greater_than is not None:
                self._values["numeric_greater_than"] = numeric_greater_than
            if numeric_greater_than_equals is not None:
                self._values["numeric_greater_than_equals"] = numeric_greater_than_equals
            if numeric_less_than is not None:
                self._values["numeric_less_than"] = numeric_less_than
            if numeric_less_than_equals is not None:
                self._values["numeric_less_than_equals"] = numeric_less_than_equals
            if numeric_not_equals is not None:
                self._values["numeric_not_equals"] = numeric_not_equals
            if string_equals is not None:
                self._values["string_equals"] = string_equals
            if string_equals_ignore_case is not None:
                self._values["string_equals_ignore_case"] = string_equals_ignore_case
            if string_like is not None:
                self._values["string_like"] = string_like
            if string_not_equals is not None:
                self._values["string_not_equals"] = string_not_equals
            if string_not_equals_ignore_case is not None:
                self._values["string_not_equals_ignore_case"] = string_not_equals_ignore_case
            if string_not_like is not None:
                self._values["string_not_like"] = string_not_like

        @builtins.property
        def bool(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: bool: undefined
            '''
            result = self._values.get("bool")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateEquals: undefined
            '''
            result = self._values.get("date_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_greater_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateGreaterThan: undefined
            '''
            result = self._values.get("date_greater_than")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateGreaterThanEquals: undefined
            '''
            result = self._values.get("date_greater_than_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_less_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateLessThan: undefined
            '''
            result = self._values.get("date_less_than")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateLessThanEquals: undefined
            '''
            result = self._values.get("date_less_than_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateNotEquals: undefined
            '''
            result = self._values.get("date_not_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def ip_address(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: ipAddress: undefined
            '''
            result = self._values.get("ip_address")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def not_ip_address(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: notIpAddress: undefined
            '''
            result = self._values.get("not_ip_address")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericEquals: undefined
            '''
            result = self._values.get("numeric_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_greater_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericGreaterThan: undefined
            '''
            result = self._values.get("numeric_greater_than")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericGreaterThanEquals: undefined
            '''
            result = self._values.get("numeric_greater_than_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_less_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericLessThan: undefined
            '''
            result = self._values.get("numeric_less_than")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericLessThanEquals: undefined
            '''
            result = self._values.get("numeric_less_than_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericNotEquals: undefined
            '''
            result = self._values.get("numeric_not_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringEquals: undefined
            '''
            result = self._values.get("string_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringEqualsIgnoreCase: undefined
            '''
            result = self._values.get("string_equals_ignore_case")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_like(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringLike: undefined
            '''
            result = self._values.get("string_like")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotEquals: undefined
            '''
            result = self._values.get("string_not_equals")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotEqualsIgnoreCase: undefined
            '''
            result = self._values.get("string_not_equals_ignore_case")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_like(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotLike: undefined
            '''
            result = self._values.get("string_not_like")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConditionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.PoliciesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "policy_document": "policyDocument",
            "policy_name": "policyName",
            "description": "description",
        },
    )
    class PoliciesProperty:
        def __init__(
            self,
            *,
            policy_document: typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentProperty"],
            policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty",
        jsii_struct_bases=[],
        name_mapping={"custom": "custom", "system": "system"},
    )
    class PolicyAttachmentsProperty:
        def __init__(
            self,
            *,
            custom: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyAttachmentsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.PolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class PolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentStatementProperty"]]]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentStatementProperty"]]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PolicyDocumentStatementProperty"]]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.PolicyDocumentStatementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition": "condition",
            "effect": "effect",
            "resource": "resource",
        },
    )
    class PolicyDocumentStatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if action is not None:
                self._values["action"] = action
            if condition is not None:
                self._values["condition"] = condition
            if effect is not None:
                self._values["effect"] = effect
            if resource is not None:
                self._values["resource"] = resource

        @builtins.property
        def action(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentStatementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.PrincipalProperty",
        jsii_struct_bases=[],
        name_mapping={"federated": "federated", "ram": "ram", "service": "service"},
    )
    class PrincipalProperty:
        def __init__(
            self,
            *,
            federated: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            ram: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            service: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param federated: 
            :param ram: 
            :param service: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if federated is not None:
                self._values["federated"] = federated
            if ram is not None:
                self._values["ram"] = ram
            if service is not None:
                self._values["service"] = service

        @builtins.property
        def federated(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: federated: undefined
            '''
            result = self._values.get("federated")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ram(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: ram: undefined
            '''
            result = self._values.get("ram")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: service: undefined
            '''
            result = self._values.get("service")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PrincipalProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.StatementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition": "condition",
            "effect": "effect",
            "principal": "principal",
        },
    )
    class StatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.ConditionProperty"]] = None,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            principal: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PrincipalProperty"]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param principal: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if action is not None:
                self._values["action"] = action
            if condition is not None:
                self._values["condition"] = condition
            if effect is not None:
                self._values["effect"] = effect
            if principal is not None:
                self._values["principal"] = principal

        @builtins.property
        def action(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: action: What action you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.ConditionProperty"]]:
            '''
            :Property: condition: undefined
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.ConditionProperty"]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def principal(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PrincipalProperty"]]:
            '''
            :Property: principal: undefined
            '''
            result = self._values.get("principal")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosRole.PrincipalProperty"]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StatementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosRoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "assume_role_policy_document": "assumeRolePolicyDocument",
        "role_name": "roleName",
        "deletion_force": "deletionForce",
        "description": "description",
        "max_session_duration": "maxSessionDuration",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class RosRoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union[ros_cdk_core.IResolvable, RosRole.AssumeRolePolicyDocumentProperty],
        role_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRole.PoliciesProperty]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRole.PolicyAttachmentsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Role``.

        :param assume_role_policy_document: 
        :param role_name: 
        :param deletion_force: 
        :param description: 
        :param max_session_duration: 
        :param policies: 
        :param policy_attachments: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, RosRole.AssumeRolePolicyDocumentProperty]:
        '''
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        '''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, RosRole.AssumeRolePolicyDocumentProperty], result)

    @builtins.property
    def role_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRole.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRole.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRole.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosRole.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSAMLProvider(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosSAMLProvider",
):
    '''A ROS template type:  ``ALIYUN::RAM::SAMLProvider``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSAMLProviderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SAMLProvider``.

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Arn: ARN.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SAMLProviderName: IdP Name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSamlProviderName"))

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
    @jsii.member(jsii_name="samlProviderName")
    def saml_provider_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "samlProviderName"))

    @saml_provider_name.setter
    def saml_provider_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "samlProviderName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description can contain a maximum of 256 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="samlMetadataDocument")
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "samlMetadataDocument"))

    @saml_metadata_document.setter
    def saml_metadata_document(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "samlMetadataDocument", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="samlMetadataDocumentUrl")
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "samlMetadataDocumentUrl"))

    @saml_metadata_document_url.setter
    def saml_metadata_document_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "samlMetadataDocumentUrl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosSAMLProviderProps",
    jsii_struct_bases=[],
    name_mapping={
        "saml_provider_name": "samlProviderName",
        "description": "description",
        "saml_metadata_document": "samlMetadataDocument",
        "saml_metadata_document_url": "samlMetadataDocumentUrl",
    },
)
class RosSAMLProviderProps:
    def __init__(
        self,
        *,
        saml_provider_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        saml_metadata_document: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: 
        :param description: 
        :param saml_metadata_document: 
        :param saml_metadata_document_url: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "saml_provider_name": saml_provider_name,
        }
        if description is not None:
            self._values["description"] = description
        if saml_metadata_document is not None:
            self._values["saml_metadata_document"] = saml_metadata_document
        if saml_metadata_document_url is not None:
            self._values["saml_metadata_document_url"] = saml_metadata_document_url

    @builtins.property
    def saml_provider_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description can contain a maximum of 256 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        result = self._values.get("saml_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        result = self._values.get("saml_metadata_document_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityPreference(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosSecurityPreference",
):
    '''A ROS template type:  ``ALIYUN::RAM::SecurityPreference``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSecurityPreferenceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SecurityPreference``.

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
    @jsii.member(jsii_name="attrAllowUserToChangePassword")
    def attr_allow_user_to_change_password(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToChangePassword"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManageAccessKeys")
    def attr_allow_user_to_manage_access_keys(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManageAccessKeys"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManageMfaDevices")
    def attr_allow_user_to_manage_mfa_devices(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManageMfaDevices"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManagePublicKeys")
    def attr_allow_user_to_manage_public_keys(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManagePublicKeys"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEnableSaveMfaTicket")
    def attr_enable_save_mfa_ticket(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEnableSaveMfaTicket"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoginNetworkMasks")
    def attr_login_network_masks(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginNetworkMasks"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoginSessionDuration")
    def attr_login_session_duration(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoginSessionDuration: The validity period of the logon session of the RAM user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginSessionDuration"))

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
    @jsii.member(jsii_name="allowUserToChangePassword")
    def allow_user_to_change_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allowUserToChangePassword"))

    @allow_user_to_change_password.setter
    def allow_user_to_change_password(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allowUserToChangePassword", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allowUserToManageAccessKeys")
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allowUserToManageAccessKeys"))

    @allow_user_to_manage_access_keys.setter
    def allow_user_to_manage_access_keys(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allowUserToManageAccessKeys", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allowUserToManageMfaDevices")
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allowUserToManageMfaDevices"))

    @allow_user_to_manage_mfa_devices.setter
    def allow_user_to_manage_mfa_devices(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allowUserToManageMfaDevices", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allowUserToManagePublicKeys")
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "allowUserToManagePublicKeys"))

    @allow_user_to_manage_public_keys.setter
    def allow_user_to_manage_public_keys(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "allowUserToManagePublicKeys", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableSaveMfaTicket")
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
        during logon. The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableSaveMfaTicket"))

    @enable_save_mfa_ticket.setter
    def enable_save_mfa_ticket(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableSaveMfaTicket", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginNetworkMasks")
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
        allowed. This parameter applies to password-based logon and single sign-on (SSO).
        However, this parameter does not apply to API calls that are authenticated based on
        AccessKey pairs.
        If a subnet mask is specified, RAM users can log on to the console only by using the
        IP addresses in the subnet.
        If you do not specify a subnet mask, RAM users can log on to the console by using
        all IP addresses.
        If you want to specify multiple subnet masks, separate the subnet masks with semicolons
        (;). Example: 192.168.0.0/16;10.0.0.0/8.
        A maximum of 25 subnet masks can be set. The total length of the subnet masks can
        be 1 to 512 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loginNetworkMasks"))

    @login_network_masks.setter
    def login_network_masks(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loginNetworkMasks", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginSessionDuration")
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loginSessionDuration: The validity period of the logon session of the RAM user.
        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "loginSessionDuration"))

    @login_session_duration.setter
    def login_session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loginSessionDuration", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosSecurityPreferenceProps",
    jsii_struct_bases=[],
    name_mapping={
        "allow_user_to_change_password": "allowUserToChangePassword",
        "allow_user_to_manage_access_keys": "allowUserToManageAccessKeys",
        "allow_user_to_manage_mfa_devices": "allowUserToManageMfaDevices",
        "allow_user_to_manage_public_keys": "allowUserToManagePublicKeys",
        "enable_save_mfa_ticket": "enableSaveMfaTicket",
        "login_network_masks": "loginNetworkMasks",
        "login_session_duration": "loginSessionDuration",
    },
)
class RosSecurityPreferenceProps:
    def __init__(
        self,
        *,
        allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        login_network_masks: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_session_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SecurityPreference``.

        :param allow_user_to_change_password: 
        :param allow_user_to_manage_access_keys: 
        :param allow_user_to_manage_mfa_devices: 
        :param allow_user_to_manage_public_keys: 
        :param enable_save_mfa_ticket: 
        :param login_network_masks: 
        :param login_session_duration: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if allow_user_to_change_password is not None:
            self._values["allow_user_to_change_password"] = allow_user_to_change_password
        if allow_user_to_manage_access_keys is not None:
            self._values["allow_user_to_manage_access_keys"] = allow_user_to_manage_access_keys
        if allow_user_to_manage_mfa_devices is not None:
            self._values["allow_user_to_manage_mfa_devices"] = allow_user_to_manage_mfa_devices
        if allow_user_to_manage_public_keys is not None:
            self._values["allow_user_to_manage_public_keys"] = allow_user_to_manage_public_keys
        if enable_save_mfa_ticket is not None:
            self._values["enable_save_mfa_ticket"] = enable_save_mfa_ticket
        if login_network_masks is not None:
            self._values["login_network_masks"] = login_network_masks
        if login_session_duration is not None:
            self._values["login_session_duration"] = login_session_duration

    @builtins.property
    def allow_user_to_change_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        result = self._values.get("allow_user_to_change_password")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        result = self._values.get("allow_user_to_manage_access_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        result = self._values.get("allow_user_to_manage_mfa_devices")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        result = self._values.get("allow_user_to_manage_public_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
        during logon. The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        result = self._values.get("enable_save_mfa_ticket")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
        allowed. This parameter applies to password-based logon and single sign-on (SSO).
        However, this parameter does not apply to API calls that are authenticated based on
        AccessKey pairs.
        If a subnet mask is specified, RAM users can log on to the console only by using the
        IP addresses in the subnet.
        If you do not specify a subnet mask, RAM users can log on to the console by using
        all IP addresses.
        If you want to specify multiple subnet masks, separate the subnet masks with semicolons
        (;). Example: 192.168.0.0/16;10.0.0.0/8.
        A maximum of 25 subnet masks can be set. The total length of the subnet masks can
        be 1 to 512 characters.
        '''
        result = self._values.get("login_network_masks")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loginSessionDuration: The validity period of the logon session of the RAM user.
        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        result = self._values.get("login_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityPreferenceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosUser",
):
    '''A ROS template type:  ``ALIYUN::RAM::User``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::User``.

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
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CreateDate: Create date of ram user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCreateDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LastLoginDate: Last login date of ram user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLastLoginDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserId: Id of ram user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: UserName: Name of ram user.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))

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
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="comments")
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comments: Comments of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "comments"))

    @comments.setter
    def comments(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "comments", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: email: Email of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "email", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: groups: A name of a group to which you want to add the user.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "groups"))

    @groups.setter
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groups", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loginProfile")
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.LoginProfileProperty"]]:
        '''
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.LoginProfileProperty"]], jsii.get(self, "loginProfile"))

    @login_profile.setter
    def login_profile(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.LoginProfileProperty"]],
    ) -> None:
        jsii.set(self, "loginProfile", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mobilePhone")
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mobilePhone: Phone number of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mobilePhone"))

    @mobile_phone.setter
    def mobile_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "mobilePhone", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyAttachmentsProperty"]],
    ) -> None:
        jsii.set(self, "policyAttachments", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosUser.LoginProfileProperty",
        jsii_struct_bases=[],
        name_mapping={
            "mfa_bind_required": "mfaBindRequired",
            "password": "password",
            "password_reset_required": "passwordResetRequired",
        },
    )
    class LoginProfileProperty:
        def __init__(
            self,
            *,
            mfa_bind_required: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            password_reset_required: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param mfa_bind_required: 
            :param password: 
            :param password_reset_required: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if mfa_bind_required is not None:
                self._values["mfa_bind_required"] = mfa_bind_required
            if password is not None:
                self._values["password"] = password
            if password_reset_required is not None:
                self._values["password_reset_required"] = password_reset_required

        @builtins.property
        def mfa_bind_required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
            '''
            result = self._values.get("mfa_bind_required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: password: The password for the user.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def password_reset_required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
            '''
            result = self._values.get("password_reset_required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LoginProfileProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosUser.PoliciesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "policy_document": "policyDocument",
            "policy_name": "policyName",
            "description": "description",
        },
    )
    class PoliciesProperty:
        def __init__(
            self,
            *,
            policy_document: typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyDocumentProperty"],
            policy_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[ros_cdk_core.IResolvable, "RosUser.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosUser.PolicyAttachmentsProperty",
        jsii_struct_bases=[],
        name_mapping={"custom": "custom", "system": "system"},
    )
    class PolicyAttachmentsProperty:
        def __init__(
            self,
            *,
            custom: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyAttachmentsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosUser.PolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class PolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosUser.StatementProperty"]]]] = None,
            version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.StatementProperty"]]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.StatementProperty"]]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosUser.StatementProperty",
        jsii_struct_bases=[],
        name_mapping={
            "action": "action",
            "condition": "condition",
            "effect": "effect",
            "resource": "resource",
        },
    )
    class StatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if action is not None:
                self._values["action"] = action
            if condition is not None:
                self._values["condition"] = condition
            if effect is not None:
                self._values["effect"] = effect
            if resource is not None:
                self._values["resource"] = resource

        @builtins.property
        def action(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "StatementProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "user_name": "userName",
        "comments": "comments",
        "deletion_force": "deletionForce",
        "display_name": "displayName",
        "email": "email",
        "groups": "groups",
        "login_profile": "loginProfile",
        "mobile_phone": "mobilePhone",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class RosUserProps:
    def __init__(
        self,
        *,
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]] = None,
        mobile_phone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::User``.

        :param user_name: 
        :param comments: 
        :param deletion_force: 
        :param display_name: 
        :param email: 
        :param groups: 
        :param login_profile: 
        :param mobile_phone: 
        :param policies: 
        :param policy_attachments: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if display_name is not None:
            self._values["display_name"] = display_name
        if email is not None:
            self._values["email"] = email
        if groups is not None:
            self._values["groups"] = groups
        if login_profile is not None:
            self._values["login_profile"] = login_profile
        if mobile_phone is not None:
            self._values["mobile_phone"] = mobile_phone
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: comments: Comments of ram user.
        '''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: email: Email of ram user.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: groups: A name of a group to which you want to add the user.
        '''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]]:
        '''
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        '''
        result = self._values.get("login_profile")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]], result)

    @builtins.property
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: mobilePhone: Phone number of ram user.
        '''
        result = self._values.get("mobile_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserToGroupAddition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosUserToGroupAddition",
):
    '''A ROS template type:  ``ALIYUN::RAM::UserToGroupAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserToGroupAdditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::UserToGroupAddition``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="users")
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: users: list name of a users to which you want to add the group.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "users"))

    @users.setter
    def users(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "users", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosUserToGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName", "users": "users"},
)
class RosUserToGroupAdditionProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        users: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: 
        :param users: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: users: list name of a users to which you want to add the group.
        '''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserToGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SAMLProvider(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.SAMLProvider",
):
    '''A ROS resource type:  ``ALIYUN::RAM::SAMLProvider``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SAMLProviderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SAMLProvider``.

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> ros_cdk_core.IResolvable:
        '''Attribute Arn: ARN.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute SAMLProviderName: IdP Name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSamlProviderName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.SAMLProviderProps",
    jsii_struct_bases=[],
    name_mapping={
        "saml_provider_name": "samlProviderName",
        "description": "description",
        "saml_metadata_document": "samlMetadataDocument",
        "saml_metadata_document_url": "samlMetadataDocumentUrl",
    },
)
class SAMLProviderProps:
    def __init__(
        self,
        *,
        saml_provider_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        saml_metadata_document: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        :param description: Property description: The description can contain a maximum of 256 characters.
        :param saml_metadata_document: Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        :param saml_metadata_document_url: Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "saml_provider_name": saml_provider_name,
        }
        if description is not None:
            self._values["description"] = description
        if saml_metadata_document is not None:
            self._values["saml_metadata_document"] = saml_metadata_document
        if saml_metadata_document_url is not None:
            self._values["saml_metadata_document_url"] = saml_metadata_document_url

    @builtins.property
    def saml_provider_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property samlProviderName: IdP Name.

        The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description can contain a maximum of 256 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property samlMetadataDocument: SAML metadata document.

        The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        result = self._values.get("saml_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.

        The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        result = self._values.get("saml_metadata_document_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecurityPreference(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.SecurityPreference",
):
    '''A ROS resource type:  ``ALIYUN::RAM::SecurityPreference``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["SecurityPreferenceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SecurityPreference``.

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
    @jsii.member(jsii_name="attrAllowUserToChangePassword")
    def attr_allow_user_to_change_password(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToChangePassword"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManageAccessKeys")
    def attr_allow_user_to_manage_access_keys(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManageAccessKeys"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManageMfaDevices")
    def attr_allow_user_to_manage_mfa_devices(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManageMfaDevices"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllowUserToManagePublicKeys")
    def attr_allow_user_to_manage_public_keys(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllowUserToManagePublicKeys"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEnableSaveMfaTicket")
    def attr_enable_save_mfa_ticket(self) -> ros_cdk_core.IResolvable:
        '''Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEnableSaveMfaTicket"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoginNetworkMasks")
    def attr_login_network_masks(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginNetworkMasks"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoginSessionDuration")
    def attr_login_session_duration(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoginSessionDuration"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.SecurityPreferenceProps",
    jsii_struct_bases=[],
    name_mapping={
        "allow_user_to_change_password": "allowUserToChangePassword",
        "allow_user_to_manage_access_keys": "allowUserToManageAccessKeys",
        "allow_user_to_manage_mfa_devices": "allowUserToManageMfaDevices",
        "allow_user_to_manage_public_keys": "allowUserToManagePublicKeys",
        "enable_save_mfa_ticket": "enableSaveMfaTicket",
        "login_network_masks": "loginNetworkMasks",
        "login_session_duration": "loginSessionDuration",
    },
)
class SecurityPreferenceProps:
    def __init__(
        self,
        *,
        allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        login_network_masks: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        login_session_duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SecurityPreference``.

        :param allow_user_to_change_password: Property allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values: true: RAM users can change their passwords. This is the default value. false: RAM users cannot change their passwords.
        :param allow_user_to_manage_access_keys: Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values: true: RAM users can manage their AccessKey pairs. false: RAM users cannot manage their AccessKey pairs. This is the default value.
        :param allow_user_to_manage_mfa_devices: Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values: true: RAM users can manage their MFA devices. This is the default value. false: RAM users cannot manage their MFA devices.
        :param allow_user_to_manage_public_keys: Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values: true: RAM users can manage their public keys. false: RAM users cannot manage their public keys. This is the default value. Note This parameter is valid only for the Japan site.
        :param enable_save_mfa_ticket: Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon. The security codes are valid for 7 days. Valid values: true: RAM users can save MFA security codes during logon. false: RAM users cannot save MFA security codes during logon. This is the default value.
        :param login_network_masks: Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed. This parameter applies to password-based logon and single sign-on (SSO). However, this parameter does not apply to API calls that are authenticated based on AccessKey pairs. If a subnet mask is specified, RAM users can log on to the console only by using the IP addresses in the subnet. If you do not specify a subnet mask, RAM users can log on to the console by using all IP addresses. If you want to specify multiple subnet masks, separate the subnet masks with semicolons (;). Example: 192.168.0.0/16;10.0.0.0/8. A maximum of 25 subnet masks can be set. The total length of the subnet masks can be 1 to 512 characters.
        :param login_session_duration: Property loginSessionDuration: The validity period of the logon session of the RAM user. Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if allow_user_to_change_password is not None:
            self._values["allow_user_to_change_password"] = allow_user_to_change_password
        if allow_user_to_manage_access_keys is not None:
            self._values["allow_user_to_manage_access_keys"] = allow_user_to_manage_access_keys
        if allow_user_to_manage_mfa_devices is not None:
            self._values["allow_user_to_manage_mfa_devices"] = allow_user_to_manage_mfa_devices
        if allow_user_to_manage_public_keys is not None:
            self._values["allow_user_to_manage_public_keys"] = allow_user_to_manage_public_keys
        if enable_save_mfa_ticket is not None:
            self._values["enable_save_mfa_ticket"] = enable_save_mfa_ticket
        if login_network_masks is not None:
            self._values["login_network_masks"] = login_network_masks
        if login_session_duration is not None:
            self._values["login_session_duration"] = login_session_duration

    @builtins.property
    def allow_user_to_change_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.

        Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        result = self._values.get("allow_user_to_change_password")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.

        Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        result = self._values.get("allow_user_to_manage_access_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.

        Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        result = self._values.get("allow_user_to_manage_mfa_devices")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.

        Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        result = self._values.get("allow_user_to_manage_public_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.

        The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        result = self._values.get("enable_save_mfa_ticket")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.

        This parameter applies to password-based logon and single sign-on (SSO).
        However, this parameter does not apply to API calls that are authenticated based on
        AccessKey pairs.
        If a subnet mask is specified, RAM users can log on to the console only by using the
        IP addresses in the subnet.
        If you do not specify a subnet mask, RAM users can log on to the console by using
        all IP addresses.
        If you want to specify multiple subnet masks, separate the subnet masks with semicolons
        (;). Example: 192.168.0.0/16;10.0.0.0/8.
        A maximum of 25 subnet masks can be set. The total length of the subnet masks can
        be 1 to 512 characters.
        '''
        result = self._values.get("login_network_masks")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property loginSessionDuration: The validity period of the logon session of the RAM user.

        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        result = self._values.get("login_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityPreferenceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class User(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.User",
):
    '''A ROS resource type:  ``ALIYUN::RAM::User``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::User``.

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
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> ros_cdk_core.IResolvable:
        '''Attribute CreateDate: Create date of ram user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCreateDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> ros_cdk_core.IResolvable:
        '''Attribute LastLoginDate: Last login date of ram user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLastLoginDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserId: Id of ram user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute UserName: Name of ram user.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrUserName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.UserProps",
    jsii_struct_bases=[],
    name_mapping={
        "user_name": "userName",
        "comments": "comments",
        "deletion_force": "deletionForce",
        "display_name": "displayName",
        "email": "email",
        "groups": "groups",
        "login_profile": "loginProfile",
        "mobile_phone": "mobilePhone",
        "policies": "policies",
        "policy_attachments": "policyAttachments",
    },
)
class UserProps:
    def __init__(
        self,
        *,
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]] = None,
        mobile_phone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]] = None,
        policy_attachments: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::User``.

        :param user_name: Property userName: Specifies the user name, containing up to 64 characters.
        :param comments: Property comments: Comments of ram user.
        :param deletion_force: Property deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
        :param display_name: Property displayName: Display name, up to 128 characters or Chinese characters.
        :param email: Property email: Email of ram user.
        :param groups: Property groups: A name of a group to which you want to add the user.
        :param login_profile: Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        :param mobile_phone: Property mobilePhone: Phone number of ram user.
        :param policies: Property policies: Describes what actions are allowed on what resources.
        :param policy_attachments: Property policyAttachments: System and custom policy names to attach.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if display_name is not None:
            self._values["display_name"] = display_name
        if email is not None:
            self._values["email"] = email
        if groups is not None:
            self._values["groups"] = groups
        if login_profile is not None:
            self._values["login_profile"] = login_profile
        if mobile_phone is not None:
            self._values["mobile_phone"] = mobile_phone
        if policies is not None:
            self._values["policies"] = policies
        if policy_attachments is not None:
            self._values["policy_attachments"] = policy_attachments

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userName: Specifies the user name, containing up to 64 characters.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property comments: Comments of ram user.'''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies and groups attached to the user.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property displayName: Display name, up to 128 characters or Chinese characters.'''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property email: Email of ram user.'''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property groups: A name of a group to which you want to add the user.'''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]]:
        '''Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.'''
        result = self._values.get("login_profile")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]], result)

    @builtins.property
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mobilePhone: Phone number of ram user.'''
        result = self._values.get("mobile_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserToGroupAddition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.UserToGroupAddition",
):
    '''A ROS resource type:  ``ALIYUN::RAM::UserToGroupAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserToGroupAdditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::UserToGroupAddition``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.UserToGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName", "users": "users"},
)
class UserToGroupAdditionProps:
    def __init__(
        self,
        *,
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        users: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: Property groupName: Specifies the group name, containing up to 64 characters.
        :param users: Property users: list name of a users to which you want to add the group.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Specifies the group name, containing up to 64 characters.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property users: list name of a users to which you want to add the group.'''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserToGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessKey",
    "AccessKeyProps",
    "AttachPolicyToRole",
    "AttachPolicyToRoleProps",
    "AttachPolicyToUser",
    "AttachPolicyToUserProps",
    "Group",
    "GroupProps",
    "ManagedPolicy",
    "ManagedPolicyProps",
    "RamAccountAlias",
    "RamAccountAliasProps",
    "Role",
    "RoleProps",
    "RosAccessKey",
    "RosAccessKeyProps",
    "RosAttachPolicyToRole",
    "RosAttachPolicyToRoleProps",
    "RosAttachPolicyToUser",
    "RosAttachPolicyToUserProps",
    "RosGroup",
    "RosGroupProps",
    "RosManagedPolicy",
    "RosManagedPolicyProps",
    "RosRamAccountAlias",
    "RosRamAccountAliasProps",
    "RosRole",
    "RosRoleProps",
    "RosSAMLProvider",
    "RosSAMLProviderProps",
    "RosSecurityPreference",
    "RosSecurityPreferenceProps",
    "RosUser",
    "RosUserProps",
    "RosUserToGroupAddition",
    "RosUserToGroupAdditionProps",
    "SAMLProvider",
    "SAMLProviderProps",
    "SecurityPreference",
    "SecurityPreferenceProps",
    "User",
    "UserProps",
    "UserToGroupAddition",
    "UserToGroupAdditionProps",
]

publication.publish()
