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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class AccessKey(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AccessKey",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AccessKey``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccessKeyProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03056601aa9c66151ab330d5d6c7633be347c2a2c7406403d43c2f7584afa104)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessKeyId: Id of access key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccessKeySecret: Secret of access key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessKeySecret"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Status: Status of access key.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.AccessKeyProps",
    jsii_struct_bases=[],
    name_mapping={"user_name": "userName"},
)
class AccessKeyProps:
    def __init__(
        self,
        *,
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: Property userName: Specifies the user name, containing up to 64 characters.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c65a1d8a6a02afec6b09e935d6506f2f24cc730750f6695f02fe130cd4057b91)
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: Specifies the user name, containing up to 64 characters.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AttachPolicyToRole(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToRole",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToRole``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AttachPolicyToRoleProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8672f1a72ed07fcbe737d5a9557d863c33e19870e3bc350bcc58db320655998)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: Property policyName: Authorization policy name.
        :param policy_type: Property policyType: Authorization policy type. Value: "System" or "Custom".
        :param role_name: Property roleName: Role name.Example: dev.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8db63c3a90e958e71ff57ea53e930e5d7eb53f32bf5abc237fea1ced2a959b0)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: Authorization policy name.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: Authorization policy type.

        Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property roleName: Role name.Example: dev.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttachPolicyToRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AttachPolicyToUser(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AttachPolicyToUser",
):
    '''A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToUser``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AttachPolicyToUserProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9394412274a5bfa95f6c71b7943be24312b0c5e819f3ff64ef8658c52ca48bec)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: Property policyName: Authorization policy name.
        :param policy_type: Property policyType: Authorization policy type. Value: "System" or "Custom".
        :param user_name: Property userName: User name.Example: dev.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78686ec7d1db412446c8ca655943d1f7ebe80778f74808667d529eab00acbd75)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: Authorization policy name.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: Authorization policy type.

        Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: User name.Example: dev.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AttachPolicyToUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Group(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.Group",
):
    '''A ROS resource type:  ``ALIYUN::RAM::Group``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["GroupProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__083f993bad3010516f35d4cc1aac1144049d0b325e238b6315d5060c1f114c41)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupName: Id of ram group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))


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
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroup.PoliciesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroup.PolicyAttachmentsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: Property groupName: Specifies the group name, containing up to 64 characters.
        :param comments: Property comments: Remark information, up to 128 characters or Chinese characters.
        :param deletion_force: Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
        :param policies: Property policies: Describes what actions are allowed on what resources.
        :param policy_attachments: Property policyAttachments: System and custom policy names to attach.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8556016ae73f5666f4c5ca77e743183e82638e43aef547e6896782ff47a9201)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument comments", value=comments, expected_type=type_hints["comments"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Specifies the group name, containing up to 64 characters.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comments: Remark information, up to 128 characters or Chinese characters.'''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies attached to the group.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PoliciesProperty"]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyAttachmentsProperty"]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyAttachmentsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.ManagedPolicy",
):
    '''A ROS resource type:  ``ALIYUN::RAM::ManagedPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ManagedPolicyProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd0c71ff3f6cf039d819570661c9902b7945f06ed21dd7a7de0bca4efcd3e824)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))


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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedPolicy.PolicyDocumentProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccbf69cafd2cdb4d252132a516e506809844ae800195fe2a63181e7152f863c8)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument groups", value=groups, expected_type=type_hints["groups"])
            check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
            check_type(argname="argument policy_document_unchecked", value=policy_document_unchecked, expected_type=type_hints["policy_document_unchecked"])
            check_type(argname="argument roles", value=roles, expected_type=type_hints["roles"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: Specifies the authorization policy name, containing up to 128 characters.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Specifies the authorization policy description, containing up to 1024 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groups: The names of groups to attach to this policy.'''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        '''Property policyDocument: A policy document that describes what actions are allowed on which resources.'''
        result = self._values.get("policy_document")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]], result)

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources.

        If it is specified, PolicyDocument will be ignored.
        '''
        result = self._values.get("policy_document_unchecked")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property roles: The names of roles to attach to this policy.'''
        result = self._values.get("roles")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property users: The names of users to attach to this policy.'''
        result = self._values.get("users")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RamAccountAlias(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RamAccountAlias",
):
    '''A ROS resource type:  ``ALIYUN::RAM::RamAccountAlias``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RamAccountAliasProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c948ecb04195d7d793507db89072eee3717f087dda3d406bc6ef17672778a69)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAccountAlias")
    def attr_account_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AccountAlias: The alias of the Alibaba Cloud account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountAlias"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RamAccountAliasProps",
    jsii_struct_bases=[],
    name_mapping={"account_alias": "accountAlias"},
)
class RamAccountAliasProps:
    def __init__(
        self,
        *,
        account_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::RamAccountAlias``.

        :param account_alias: Property accountAlias: The alias of the Alibaba Cloud account. The alias must be 1 to 50 characters in length, and can contain lowercase letters, digits, hyphens (-), periods (.) and underscores (_). Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10739515bf442c8b35558b47bbf7b368183d98ec9533e4177a8b58bb19888b33)
            check_type(argname="argument account_alias", value=account_alias, expected_type=type_hints["account_alias"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_alias": account_alias,
        }

    @builtins.property
    def account_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property accountAlias: The alias of the Alibaba Cloud account.

        The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        digits, hyphens (-), periods (.) and underscores (_).
        Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        result = self._values.get("account_alias")
        assert result is not None, "Required property 'account_alias' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RamAccountAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Role(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.Role",
):
    '''A ROS resource type:  ``ALIYUN::RAM::Role``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RoleProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00e02496c1f589666468dbacce98f9b5a72f1c16707b05021e9a0b0583707007)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Arn: Name of alicloud resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RoleId: Id of ram role.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RoleName: Name of ram role.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleName"))


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
        assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.AssumeRolePolicyDocumentProperty", typing.Dict[builtins.str, typing.Any]]],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.PoliciesProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.PolicyAttachmentsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc2f95532c46e86d5f041d77f192be15ae93e002d4b3c03dfe9c0450c860acef)
            check_type(argname="argument assume_role_policy_document", value=assume_role_policy_document, expected_type=type_hints["assume_role_policy_document"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_session_duration", value=max_session_duration, expected_type=type_hints["max_session_duration"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"]:
        '''Property assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.'''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property roleName: Specifies the role name, containing up to 64 characters.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies attached to the role.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: Remark information, up to 1024 characters or Chinese characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxSessionDuration: The maximum session duration of the RAM role.

        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PoliciesProperty"]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PoliciesProperty"]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyAttachmentsProperty"]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyAttachmentsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessKey(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAccessKey",
):
    '''A ROS template type:  ``ALIYUN::RAM::AccessKey``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessKeyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AccessKey``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc9b98f4f9680421f98bb50694276f06092d044d2f7fcde8f9e3be10a6ace7b7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f1991c9462ec19df1525ad0d073264d187fc38c7b0f3e65b68eda00fa0ff1cc4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessKeyId: Id of access key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessKeyId"))

    @builtins.property
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccessKeySecret: Secret of access key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccessKeySecret"))

    @builtins.property
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Status: Status of access key.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStatus"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__82c772e7143813550c425c64fbdb5a5803676b765f50aba5ed43b8701c83fe11)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f4f4aa9dbc86507cf222903079536b0197b68ce8c96585707a6333632045b1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d635140ca4146fe7988971d0168119ec416450277d3ba6cfef1abcda0363e594)
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAttachPolicyToRole(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToRole",
):
    '''A ROS template type:  ``ALIYUN::RAM::AttachPolicyToRole``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAttachPolicyToRoleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToRole``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e3d4198ae5526a2904bf8dbbaa2ad38cb844165cb75d25e4bc19954e721987)
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
            type_hints = typing.get_type_hints(_typecheckingstub__66732acffce18f6c63ead0d44f7ab826ace2600e73c5c16819776b22f287000f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daeeb16405dc822fa7b16abacdbb9b0f26609700c993760e690fae5c35f0f345)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c80d255df1cf6c07c673bb65d1d0c06bdddba75019b74fa157ad6a08d82766)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__545ef26bc34fbd7db76185c083913cf134294098c0d75e2e7e553c7194241636)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="roleName")
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Role name.Example: dev.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1908750ae84c130b939aff90d8496d9577ec5f7fc32cddba082b8c2a5ac1c001)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: 
        :param policy_type: 
        :param role_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__21de1c42bc5b169d4cf37c609a4b2ab32eca0907532d9aa92be6104121eae127)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Role name.Example: dev.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttachPolicyToRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAttachPolicyToUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosAttachPolicyToUser",
):
    '''A ROS template type:  ``ALIYUN::RAM::AttachPolicyToUser``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAttachPolicyToUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::AttachPolicyToUser``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da1248ed4f151ed46fb14d20f0934e943d29567dc03597f0a7c5d0f1c8a48fc9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__614f625ba08c1bee29e0085530b59675c0077b3362694ad2adcc20a5b9c405af)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc1868bdc8a19f9e6945dd656f79135df63e8eed4ab848947bf3d1f8984e9bd1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8d4c2fadf8584edd46876629da88c09326c6d48255bab4936358df35112ba1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc24f234552b582814ccdf61ef40b05be52dc85c90137472310282c191819344)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: User name.Example: dev.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4793861e3039ca137a48797fb29889a0d36b34f4248e9663f9d034942f92cf7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: 
        :param policy_type: 
        :param user_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69a3c3a2073eaaf9f31601a18b22d93c541def444cc55e6f05126a2151b93a19)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Authorization policy name.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: User name.Example: dev.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAttachPolicyToUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosGroup",
):
    '''A ROS template type:  ``ALIYUN::RAM::Group``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a158c7e890a461605e4597e27c25feaad2e59773694303253b30c8694af227c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2259c68f59156b82c218e290d7e84d43d219936469f3efedc5c9e738c44ba6c6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupName: Id of ram group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8e4ff5b76bd230585fedef78d6161bc3ccf1305126730df65ba7c3b6c38dbd95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca872f639700c446cb4d7bb0325f2c616a765958cdebeb81b55771bce023e1d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="comments")
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comments"))

    @comments.setter
    def comments(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59dd926a42c07a2cd34bb9b1443530e5bac8d8ba0c35e21c6e97164acb00fc55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comments", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the group. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d784d2b51df10332d304ebc1d837f585db20069128582b3a79659f25f612e102)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PoliciesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1fb8895fd829653571ba6e06beb2dd91125093f110455b597bf1a95cf597431)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policies", value)

    @builtins.property
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyAttachmentsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cf6f94274cf8e46c1483e739cbfa372556addf3e6d65a61abe3147d2fd518e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroup.PolicyDocumentProperty", typing.Dict[builtins.str, typing.Any]]],
            policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7fdd23ff0c8d0deb7453a15973a0b4cc3e5f243c1efb4c8a1795b544473802bd)
                check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
                check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__99e7103b3ce5e7b73cc904e6290cf1f0fdcb9feb270df327a99f22d4ecc72648)
                check_type(argname="argument custom", value=custom, expected_type=type_hints["custom"])
                check_type(argname="argument system", value=system, expected_type=type_hints["system"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
            statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosGroup.StatementProperty", typing.Dict[builtins.str, typing.Any]]]]],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b6f9234dfe173615d2aeaee879ed7214290792b5f207094378a38ceafd1a157a)
                check_type(argname="argument statement", value=statement, expected_type=type_hints["statement"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.StatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosGroup.StatementProperty"]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c94e3bd5aaffa23ceb3e5be291d208e95ec8817d573566a7a85acfac79cf60d8)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
                check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: 
        :param comments: 
        :param deletion_force: 
        :param policies: 
        :param policy_attachments: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8375077f55806a09defe567d8de744b4d1154dbd3fb53672b3ea0bbcac11605b)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument comments", value=comments, expected_type=type_hints["comments"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        '''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the group. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosManagedPolicy",
):
    '''A ROS template type:  ``ALIYUN::RAM::ManagedPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::ManagedPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__445b3f87073d61b78e6306337466c83e0c48e7e8829f95441ff5df54d1aa3d84)
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
            type_hints = typing.get_type_hints(_typecheckingstub__afdcdff225020454d464b3dbc0503da27d9f9e70cf136070fdc3d000c6c2d683)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPolicyName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__af1cd73ec38bdfe748d85c52dc25a4014912c0a338b59016bcf1a2a2b861eb19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c401b4dd8b05023ad2b3bd48e840d1a67d2681e4164972c7b729034dbc3b40df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd4ba22750b6a8f03295e5db6fc4689a0841e4ea7bd138fc39035ed52a9e17a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groups: The names of groups to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groups"))

    @groups.setter
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0eecdc2af91fbcd69f669aea50b08725629311467d52bda6745ba838d3b60e7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groups", value)

    @builtins.property
    @jsii.member(jsii_name="policyDocument")
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        '''
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]], jsii.get(self, "policyDocument"))

    @policy_document.setter
    def policy_document(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c671dc683b33dace00bbcb68eec74d0a841d25aa6b13253af94b2a260147031)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyDocument", value)

    @builtins.property
    @jsii.member(jsii_name="policyDocumentUnchecked")
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policyDocumentUnchecked"))

    @policy_document_unchecked.setter
    def policy_document_unchecked(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4f118388ecfbb4842bc02e80353e01b5429447af63fb041d04892b515c80a3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyDocumentUnchecked", value)

    @builtins.property
    @jsii.member(jsii_name="roles")
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roles: The names of roles to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "roles"))

    @roles.setter
    def roles(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35c11e0c5b6be7f41593e752428a83b831215974b94519b5bcdd1290768977c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roles", value)

    @builtins.property
    @jsii.member(jsii_name="users")
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: users: The names of users to attach to this policy.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "users"))

    @users.setter
    def users(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__710a583b5ffb28339a6f32bd7ccdee2b783bd4b6b31f2486e1bfe3b9884002f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosManagedPolicy.StatementProperty", typing.Dict[builtins.str, typing.Any]]]]],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7000fee52f36f1f2e66f314800a2c346baa00d574c9d933fc9e1e06d069801d1)
                check_type(argname="argument statement", value=statement, expected_type=type_hints["statement"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.StatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosManagedPolicy.StatementProperty"]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7db65ee2f4373d1904eb85f57425f3e3720446218f44628b18f14d520e66c3f0)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
                check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedPolicy.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e7c91ffb7233b392c5c5a9a6f3f3fae5a1779d5e406ffd6e111b52b51dceb7)
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument groups", value=groups, expected_type=type_hints["groups"])
            check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
            check_type(argname="argument policy_document_unchecked", value=policy_document_unchecked, expected_type=type_hints["policy_document_unchecked"])
            check_type(argname="argument roles", value=roles, expected_type=type_hints["roles"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groups: The names of groups to attach to this policy.
        '''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedPolicy.PolicyDocumentProperty]]:
        '''
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        '''
        result = self._values.get("policy_document")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedPolicy.PolicyDocumentProperty]], result)

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        '''
        result = self._values.get("policy_document_unchecked")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: roles: The names of roles to attach to this policy.
        '''
        result = self._values.get("roles")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: users: The names of users to attach to this policy.
        '''
        result = self._values.get("users")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRamAccountAlias(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosRamAccountAlias",
):
    '''A ROS template type:  ``ALIYUN::RAM::RamAccountAlias``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRamAccountAliasProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::RamAccountAlias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e51cffb8430af6e3ad61ca9365843c47182fe10a9ba99e0d69cf046a46acb6a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9d3ce3ba55c601ff2344062eff7d7eb22a0f782246c44d7f847067ee5c93815d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAccountAlias")
    def attr_account_alias(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AccountAlias: The alias of the Alibaba Cloud account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAccountAlias"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="accountAlias")
    def account_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        accountAlias: The alias of the Alibaba Cloud account.
        The alias must be 1 to 50 characters in length, and can contain lowercase letters,
        digits, hyphens (-), periods (.) and underscores (_).
        Note It cannot start or end with a hyphen (-).The default domain name cannot start or end with a
        hyphen (-) and cannot have two consecutive hyphens (-).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "accountAlias"))

    @account_alias.setter
    def account_alias(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a19ece8f34c010db4f2bf4a3fa823be707947c7def22c9b474d0f89ebd17d65c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountAlias", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95b8e6c7f644f9347dbbb6cef9656c86ddd8b05ea7a0463a29528feda80e036c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        account_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::RamAccountAlias``.

        :param account_alias: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfcec77cb4606431a4baa08f44dd623b1cd1888f7177842daac119f43e373082)
            check_type(argname="argument account_alias", value=account_alias, expected_type=type_hints["account_alias"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "account_alias": account_alias,
        }

    @builtins.property
    def account_alias(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRamAccountAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRole(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosRole",
):
    '''A ROS template type:  ``ALIYUN::RAM::Role``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRoleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::Role``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76b9089588f494898a69d1b4cb7d0bada68bef0ed48ac0ba4dcdb23f68e021c6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__0a232a02b68fd84bbd5ff80f9a34d3b26fe822b8db55ffce6ec1af3fe4f0c4e4)
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
        :Attribute: Arn: Name of alicloud resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleId: Id of ram role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleId"))

    @builtins.property
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RoleName: Name of ram role.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRoleName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="assumeRolePolicyDocument")
    def assume_role_policy_document(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"]:
        '''
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"], jsii.get(self, "assumeRolePolicyDocument"))

    @assume_role_policy_document.setter
    def assume_role_policy_document(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.AssumeRolePolicyDocumentProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b57ad938e380c2118c977ffc0b3ea352e1dd185373b7378c4cc1cb199311ffa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "assumeRolePolicyDocument", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25af3ece9bdbce036c5039caf5ffa182cbb0a6bed7414aed3a4ac2eb0cc786ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="roleName")
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__737d8d4987a38c90cfa70f907da488f243065d234c2cdf203007b1eedcdfb11c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleName", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc8a26790f6ce4169dfa0345b621a2eddadfb7b14c0a8fa3576bb42321fb4c5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f4221d044d8cabac80022706c51d78380cf2011ff1dbf86fa7940a0ecfea04b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="maxSessionDuration")
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxSessionDuration"))

    @max_session_duration.setter
    def max_session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99531052f5d106e1b1362ad95feb78e993590fc850d18732d18aeb04007bc721)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxSessionDuration", value)

    @builtins.property
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PoliciesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__011a7d48fe1d3180f4d218ae5f631dd2325fea43fbee01cb427b598d51683b99)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policies", value)

    @builtins.property
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyAttachmentsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d220c5ead77b6ab447f65c2be85157a15605e191a42f28f2d3f470f706b14b46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.StatementProperty", typing.Dict[builtins.str, typing.Any]]]]],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6aa4dc2ebb578c13913bf1950ac3c1bb6bce5d5b15239662166978960d575042)
                check_type(argname="argument statement", value=statement, expected_type=type_hints["statement"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.StatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.StatementProperty"]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            bool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_greater_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_greater_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_less_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_less_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            date_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            ip_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            not_ip_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_greater_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_greater_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_less_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_less_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            numeric_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_equals_ignore_case: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_like: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_equals_ignore_case: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            string_not_like: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
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
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0374b58468f6ed5a0b72b0ad62057945ced7d91a586ad3cf5b89416536c8097b)
                check_type(argname="argument bool", value=bool, expected_type=type_hints["bool"])
                check_type(argname="argument date_equals", value=date_equals, expected_type=type_hints["date_equals"])
                check_type(argname="argument date_greater_than", value=date_greater_than, expected_type=type_hints["date_greater_than"])
                check_type(argname="argument date_greater_than_equals", value=date_greater_than_equals, expected_type=type_hints["date_greater_than_equals"])
                check_type(argname="argument date_less_than", value=date_less_than, expected_type=type_hints["date_less_than"])
                check_type(argname="argument date_less_than_equals", value=date_less_than_equals, expected_type=type_hints["date_less_than_equals"])
                check_type(argname="argument date_not_equals", value=date_not_equals, expected_type=type_hints["date_not_equals"])
                check_type(argname="argument ip_address", value=ip_address, expected_type=type_hints["ip_address"])
                check_type(argname="argument not_ip_address", value=not_ip_address, expected_type=type_hints["not_ip_address"])
                check_type(argname="argument numeric_equals", value=numeric_equals, expected_type=type_hints["numeric_equals"])
                check_type(argname="argument numeric_greater_than", value=numeric_greater_than, expected_type=type_hints["numeric_greater_than"])
                check_type(argname="argument numeric_greater_than_equals", value=numeric_greater_than_equals, expected_type=type_hints["numeric_greater_than_equals"])
                check_type(argname="argument numeric_less_than", value=numeric_less_than, expected_type=type_hints["numeric_less_than"])
                check_type(argname="argument numeric_less_than_equals", value=numeric_less_than_equals, expected_type=type_hints["numeric_less_than_equals"])
                check_type(argname="argument numeric_not_equals", value=numeric_not_equals, expected_type=type_hints["numeric_not_equals"])
                check_type(argname="argument string_equals", value=string_equals, expected_type=type_hints["string_equals"])
                check_type(argname="argument string_equals_ignore_case", value=string_equals_ignore_case, expected_type=type_hints["string_equals_ignore_case"])
                check_type(argname="argument string_like", value=string_like, expected_type=type_hints["string_like"])
                check_type(argname="argument string_not_equals", value=string_not_equals, expected_type=type_hints["string_not_equals"])
                check_type(argname="argument string_not_equals_ignore_case", value=string_not_equals_ignore_case, expected_type=type_hints["string_not_equals_ignore_case"])
                check_type(argname="argument string_not_like", value=string_not_like, expected_type=type_hints["string_not_like"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: bool: undefined
            '''
            result = self._values.get("bool")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateEquals: undefined
            '''
            result = self._values.get("date_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_greater_than(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateGreaterThan: undefined
            '''
            result = self._values.get("date_greater_than")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateGreaterThanEquals: undefined
            '''
            result = self._values.get("date_greater_than_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_less_than(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateLessThan: undefined
            '''
            result = self._values.get("date_less_than")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateLessThanEquals: undefined
            '''
            result = self._values.get("date_less_than_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def date_not_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: dateNotEquals: undefined
            '''
            result = self._values.get("date_not_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def ip_address(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: ipAddress: undefined
            '''
            result = self._values.get("ip_address")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def not_ip_address(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: notIpAddress: undefined
            '''
            result = self._values.get("not_ip_address")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericEquals: undefined
            '''
            result = self._values.get("numeric_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_greater_than(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericGreaterThan: undefined
            '''
            result = self._values.get("numeric_greater_than")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericGreaterThanEquals: undefined
            '''
            result = self._values.get("numeric_greater_than_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_less_than(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericLessThan: undefined
            '''
            result = self._values.get("numeric_less_than")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericLessThanEquals: undefined
            '''
            result = self._values.get("numeric_less_than_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def numeric_not_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: numericNotEquals: undefined
            '''
            result = self._values.get("numeric_not_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringEquals: undefined
            '''
            result = self._values.get("string_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringEqualsIgnoreCase: undefined
            '''
            result = self._values.get("string_equals_ignore_case")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_like(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringLike: undefined
            '''
            result = self._values.get("string_like")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_equals(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotEquals: undefined
            '''
            result = self._values.get("string_not_equals")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotEqualsIgnoreCase: undefined
            '''
            result = self._values.get("string_not_equals_ignore_case")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def string_not_like(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: stringNotLike: undefined
            '''
            result = self._values.get("string_not_like")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

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
            policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.PolicyDocumentProperty", typing.Dict[builtins.str, typing.Any]]],
            policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d178f960ecd6f9fa143579710a9f06a9eb76c215229cddda81661ec5603ffb28)
                check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
                check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__fc549095029eb8c19895ad5e3093b7439158b97aafa1762efa75df1a5eabf69e)
                check_type(argname="argument custom", value=custom, expected_type=type_hints["custom"])
                check_type(argname="argument system", value=system, expected_type=type_hints["system"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
            statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.PolicyDocumentStatementProperty", typing.Dict[builtins.str, typing.Any]]]]],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__33a52b5452d39058486c858d4a5f977337bd3a27cdf14999fa1b7559536d88d0)
                check_type(argname="argument statement", value=statement, expected_type=type_hints["statement"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyDocumentStatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PolicyDocumentStatementProperty"]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__7f0ed3ada39ca8d911e12b1f615135a6c02f6012d75e2cfe5e1a96cc4f042779)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
                check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            federated: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ram: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param federated: 
            :param ram: 
            :param service: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__0468153bc7b0036e9ab07c4e9682d5c8859964fb3417d4471a81d7eee819c24e)
                check_type(argname="argument federated", value=federated, expected_type=type_hints["federated"])
                check_type(argname="argument ram", value=ram, expected_type=type_hints["ram"])
                check_type(argname="argument service", value=service, expected_type=type_hints["service"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if federated is not None:
                self._values["federated"] = federated
            if ram is not None:
                self._values["ram"] = ram
            if service is not None:
                self._values["service"] = service

        @builtins.property
        def federated(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: federated: undefined
            '''
            result = self._values.get("federated")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ram(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ram: undefined
            '''
            result = self._values.get("ram")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: service: undefined
            '''
            result = self._values.get("service")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.ConditionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            principal: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosRole.PrincipalProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param principal: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__b0434dc0ee64bc1768cf3f366993eca72b020b7740a89b76b01009a7aa7f552b)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
                check_type(argname="argument principal", value=principal, expected_type=type_hints["principal"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: action: What action you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.ConditionProperty"]]:
            '''
            :Property: condition: undefined
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.ConditionProperty"]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def principal(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PrincipalProperty"]]:
            '''
            :Property: principal: undefined
            '''
            result = self._values.get("principal")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRole.PrincipalProperty"]], result)

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
        assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.AssumeRolePolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4564b5168cb02f4dd74d348414e4fc0d18f41d601e251b1035728b082afd1676)
            check_type(argname="argument assume_role_policy_document", value=assume_role_policy_document, expected_type=type_hints["assume_role_policy_document"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument max_session_duration", value=max_session_duration, expected_type=type_hints["max_session_duration"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.AssumeRolePolicyDocumentProperty]:
        '''
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        '''
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.AssumeRolePolicyDocumentProperty], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        '''
        result = self._values.get("max_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRoleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSAMLProvider(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosSAMLProvider",
):
    '''A ROS template type:  ``ALIYUN::RAM::SAMLProvider``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSAMLProviderProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SAMLProvider``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ef99902fae75432953c392690270aff7bf1740d8db81fe661e92a47c2d78941)
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
            type_hints = typing.get_type_hints(_typecheckingstub__85fcc8ed827f130665e1be2530895789738d21bb4f98023705529d852c93fbf2)
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
        :Attribute: Arn: ARN.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SAMLProviderName: IdP Name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSamlProviderName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__dd1adb84209c38e18c40b1fcb4e33c6b8ba1c38f4cdadbc405443a3c1fad1d5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="samlProviderName")
    def saml_provider_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "samlProviderName"))

    @saml_provider_name.setter
    def saml_provider_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a540cf39c10c1a113d427f8478befdd79f0b03efc3198d5fd89f3d72830a5ba4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "samlProviderName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description can contain a maximum of 256 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d042bc2976808d4bd7788d8e979616b456aa582ed65b973525efc805f2fdabee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="samlMetadataDocument")
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "samlMetadataDocument"))

    @saml_metadata_document.setter
    def saml_metadata_document(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb870c48265d0b7fbf8e9d5cf8c3075af5a4c0f083c4fa362b3272faf275e9d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "samlMetadataDocument", value)

    @builtins.property
    @jsii.member(jsii_name="samlMetadataDocumentUrl")
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "samlMetadataDocumentUrl"))

    @saml_metadata_document_url.setter
    def saml_metadata_document_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d98fd355ad997bce70c3a9151662aa2b24fc6483df4cf7d0dab75051f3276cb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        saml_provider_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        saml_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: 
        :param description: 
        :param saml_metadata_document: 
        :param saml_metadata_document_url: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__755de24d58be2164678140c31088185dc6ea0b775e6e92ece25257f789fb3352)
            check_type(argname="argument saml_provider_name", value=saml_provider_name, expected_type=type_hints["saml_provider_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument saml_metadata_document", value=saml_metadata_document, expected_type=type_hints["saml_metadata_document"])
            check_type(argname="argument saml_metadata_document_url", value=saml_metadata_document_url, expected_type=type_hints["saml_metadata_document_url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description can contain a maximum of 256 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        result = self._values.get("saml_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        result = self._values.get("saml_metadata_document_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecurityPreference(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosSecurityPreference",
):
    '''A ROS template type:  ``ALIYUN::RAM::SecurityPreference``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecurityPreferenceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::SecurityPreference``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5403027acb84869637169284fe16d70b3f13744f6cb99c4c732a1e5bd7aa5db)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f65f6c03d132cd93a8af56859939293c17228bb5f46265d639e2d2c4655408dd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToChangePassword")
    def attr_allow_user_to_change_password(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToChangePassword"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManageAccessKeys")
    def attr_allow_user_to_manage_access_keys(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManageAccessKeys"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManageMfaDevices")
    def attr_allow_user_to_manage_mfa_devices(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManageMfaDevices"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManagePublicKeys")
    def attr_allow_user_to_manage_public_keys(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManagePublicKeys"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableSaveMfaTicket")
    def attr_enable_save_mfa_ticket(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableSaveMfaTicket"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginNetworkMasks")
    def attr_login_network_masks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginNetworkMasks"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginSessionDuration")
    def attr_login_session_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoginSessionDuration: The validity period of the logon session of the RAM user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginSessionDuration"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__04b6d8ea8070c7e49b72f4c82feaadacf573b1d9ec9b99710fa2560d737fdb5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="allowUserToChangePassword")
    def allow_user_to_change_password(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowUserToChangePassword"))

    @allow_user_to_change_password.setter
    def allow_user_to_change_password(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fe60495aa60d7213a381e2af796a719276973596cdd8c061840a3678069cd33a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowUserToChangePassword", value)

    @builtins.property
    @jsii.member(jsii_name="allowUserToManageAccessKeys")
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowUserToManageAccessKeys"))

    @allow_user_to_manage_access_keys.setter
    def allow_user_to_manage_access_keys(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6901d0003f08cc8e490c3748df0d1acd167e4e6975d95b1edc6971df486736a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowUserToManageAccessKeys", value)

    @builtins.property
    @jsii.member(jsii_name="allowUserToManageMfaDevices")
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowUserToManageMfaDevices"))

    @allow_user_to_manage_mfa_devices.setter
    def allow_user_to_manage_mfa_devices(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__330aed615124736cdc061c67f247089618432f11bac9653fc652252e9bf39d55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowUserToManageMfaDevices", value)

    @builtins.property
    @jsii.member(jsii_name="allowUserToManagePublicKeys")
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "allowUserToManagePublicKeys"))

    @allow_user_to_manage_public_keys.setter
    def allow_user_to_manage_public_keys(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__235d08fbd647136905484ed34211baf96160b321470d11cfc084d9da024b5d4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "allowUserToManagePublicKeys", value)

    @builtins.property
    @jsii.member(jsii_name="enableSaveMfaTicket")
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
        during logon. The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableSaveMfaTicket"))

    @enable_save_mfa_ticket.setter
    def enable_save_mfa_ticket(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e61eb534f5a93c2141d21c5b7beab51a7fb41a8ab4ab372e3b5eee949c0e7b35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableSaveMfaTicket", value)

    @builtins.property
    @jsii.member(jsii_name="loginNetworkMasks")
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginNetworkMasks"))

    @login_network_masks.setter
    def login_network_masks(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cee778bdb3755f9512004d0310e66fbf58b8ac5bb70d9592fd2da842be339505)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginNetworkMasks", value)

    @builtins.property
    @jsii.member(jsii_name="loginSessionDuration")
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loginSessionDuration: The validity period of the logon session of the RAM user.
        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loginSessionDuration"))

    @login_session_duration.setter
    def login_session_duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcfaedba2ee6898fed66527a9f1e4dd573cf9ea5e6ae51c043e5441f1a09e289)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_network_masks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41eeaf41c8946e47d2a01b941fdd3d86d2e9a82995baf1d90de2786bc7e68c16)
            check_type(argname="argument allow_user_to_change_password", value=allow_user_to_change_password, expected_type=type_hints["allow_user_to_change_password"])
            check_type(argname="argument allow_user_to_manage_access_keys", value=allow_user_to_manage_access_keys, expected_type=type_hints["allow_user_to_manage_access_keys"])
            check_type(argname="argument allow_user_to_manage_mfa_devices", value=allow_user_to_manage_mfa_devices, expected_type=type_hints["allow_user_to_manage_mfa_devices"])
            check_type(argname="argument allow_user_to_manage_public_keys", value=allow_user_to_manage_public_keys, expected_type=type_hints["allow_user_to_manage_public_keys"])
            check_type(argname="argument enable_save_mfa_ticket", value=enable_save_mfa_ticket, expected_type=type_hints["enable_save_mfa_ticket"])
            check_type(argname="argument login_network_masks", value=login_network_masks, expected_type=type_hints["login_network_masks"])
            check_type(argname="argument login_session_duration", value=login_session_duration, expected_type=type_hints["login_session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        result = self._values.get("allow_user_to_change_password")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        result = self._values.get("allow_user_to_manage_access_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        result = self._values.get("allow_user_to_manage_mfa_devices")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        result = self._values.get("allow_user_to_manage_public_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
        during logon. The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        result = self._values.get("enable_save_mfa_ticket")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loginSessionDuration: The validity period of the logon session of the RAM user.
        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        result = self._values.get("login_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecurityPreferenceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosUser",
):
    '''A ROS template type:  ``ALIYUN::RAM::User``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbb1de46460b3cf0a2250e2d87c10a16063b109c2fa11f50bcdd6a18dfae75ad)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5b42d0f6f8e6b87fc37a004dee76f93217e93fd8ebecbffc808b0de62cf50466)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateDate: Create date of ram user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateDate"))

    @builtins.property
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LastLoginDate: Last login date of ram user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLastLoginDate"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: Id of ram user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserName: Name of ram user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c9bce1153378c19594f1006affe175005d20834c51780fe05721e1037e48c9da)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e6d33777011d283086bf86a773e2995f4bf3c6e33eb95b74b1b9c3a9bd20a92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="comments")
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comments: Comments of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comments"))

    @comments.setter
    def comments(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fb2c0f2357b19cd414ecb5d8ea614457a0c279a76a458aa4812f261775bd363)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comments", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d249a9a80b0a55faeb8567ae7bdcfd22ae2b2936d98d591c87d66c6c7c8ff5de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "displayName"))

    @display_name.setter
    def display_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e39e1e4da4fcd214066676ca1b7e6223079c5e657136f361afed33b6416d6658)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "displayName", value)

    @builtins.property
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: Email of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fef9a6e1100ed449066fbb6b619b82642f40c91a439c5ce1ee6f0229c18c32e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "email", value)

    @builtins.property
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groups: A name of a group to which you want to add the user.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "groups"))

    @groups.setter
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7feacc2ce7d1566f900abcad9fb5f504bb4a7245875171aeeb1a3dbeaf6e781c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groups", value)

    @builtins.property
    @jsii.member(jsii_name="loginProfile")
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.LoginProfileProperty"]]:
        '''
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.LoginProfileProperty"]], jsii.get(self, "loginProfile"))

    @login_profile.setter
    def login_profile(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.LoginProfileProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a7541a6339e1c8094ff54e872f5dcdb50fe3bdb0216f6dc7bb4ab11d9c4c828d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loginProfile", value)

    @builtins.property
    @jsii.member(jsii_name="mobilePhone")
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mobilePhone: Phone number of ram user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "mobilePhone"))

    @mobile_phone.setter
    def mobile_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e39f11d568f5eef5124651714aa43d5df5afa97989200f714bf9bf34c6c627d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "mobilePhone", value)

    @builtins.property
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PoliciesProperty"]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PoliciesProperty"]]]], jsii.get(self, "policies"))

    @policies.setter
    def policies(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PoliciesProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a54a2ae3c49a234605f3a3cc0fc86f45e57b742eddd5e326068c056362e05df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policies", value)

    @builtins.property
    @jsii.member(jsii_name="policyAttachments")
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PolicyAttachmentsProperty"]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PolicyAttachmentsProperty"]], jsii.get(self, "policyAttachments"))

    @policy_attachments.setter
    def policy_attachments(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PolicyAttachmentsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__915e33c9e6bf4dd79927bcf54f4fae4b82e2cd3f5b76f3d3076182b89fdf5939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            mfa_bind_required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password_reset_required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param mfa_bind_required: 
            :param password: 
            :param password_reset_required: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__34edd7511917ef1d676fec9542bb1e9393843da0a5302155ed6587b8ca1da313)
                check_type(argname="argument mfa_bind_required", value=mfa_bind_required, expected_type=type_hints["mfa_bind_required"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument password_reset_required", value=password_reset_required, expected_type=type_hints["password_reset_required"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if mfa_bind_required is not None:
                self._values["mfa_bind_required"] = mfa_bind_required
            if password is not None:
                self._values["password"] = password
            if password_reset_required is not None:
                self._values["password_reset_required"] = password_reset_required

        @builtins.property
        def mfa_bind_required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
            '''
            result = self._values.get("mfa_bind_required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password for the user.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password_reset_required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
            '''
            result = self._values.get("password_reset_required")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosUser.PolicyDocumentProperty", typing.Dict[builtins.str, typing.Any]]],
            policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param policy_document: 
            :param policy_name: 
            :param description: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__526b5ef42e94c4549ee3328b8d73bc6e144753080261bf717406bb14550d838f)
                check_type(argname="argument policy_document", value=policy_document, expected_type=type_hints["policy_document"])
                check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "policy_document": policy_document,
                "policy_name": policy_name,
            }
            if description is not None:
                self._values["description"] = description

        @builtins.property
        def policy_document(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PolicyDocumentProperty"]:
            '''
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            '''
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.PolicyDocumentProperty"], result)

        @builtins.property
        def policy_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            '''
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
            system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        ) -> None:
            '''
            :param custom: 
            :param system: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c8dec2d4b0550b3c5d282672f72769d21c83d0793ce994d845982f15ba2e5c25)
                check_type(argname="argument custom", value=custom, expected_type=type_hints["custom"])
                check_type(argname="argument system", value=system, expected_type=type_hints["system"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if custom is not None:
                self._values["custom"] = custom
            if system is not None:
                self._values["system"] = system

        @builtins.property
        def custom(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: custom: undefined
            '''
            result = self._values.get("custom")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

        @builtins.property
        def system(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
            '''
            :Property: system: undefined
            '''
            result = self._values.get("system")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
            statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosUser.StatementProperty", typing.Dict[builtins.str, typing.Any]]]]],
            version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param statement: 
            :param version: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__25401c0b332765ada40cbfc0bea7913ba67fa21ea9bbcbd67644f1310fd49212)
                check_type(argname="argument statement", value=statement, expected_type=type_hints["statement"])
                check_type(argname="argument version", value=version, expected_type=type_hints["version"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.StatementProperty"]]]:
            '''
            :Property: statement: A policy consists of one or more statements.
            '''
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosUser.StatementProperty"]]], result)

        @builtins.property
        def version(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: version: You can use versions to track changes to a managed policy.
            '''
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
            action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
            condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5314c2eabb295697e2cd64fa9c6e3a717693376f2e4fcec5462a78aa552e477c)
                check_type(argname="argument action", value=action, expected_type=type_hints["action"])
                check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
                check_type(argname="argument effect", value=effect, expected_type=type_hints["effect"])
                check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: action: What actions you will allow.
            '''
            result = self._values.get("action")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property: condition: What conditions should be satisfied.
            '''
            result = self._values.get("condition")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def effect(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            '''
            result = self._values.get("effect")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: resource: Which resources you allow the action on.
            '''
            result = self._values.get("resource")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.LoginProfileProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        mobile_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e9e9f71d1ef54158ab8f09da0032cda451382c5dd847543ccfe94e595b5ed6d)
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument comments", value=comments, expected_type=type_hints["comments"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument groups", value=groups, expected_type=type_hints["groups"])
            check_type(argname="argument login_profile", value=login_profile, expected_type=type_hints["login_profile"])
            check_type(argname="argument mobile_phone", value=mobile_phone, expected_type=type_hints["mobile_phone"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: Specifies the user name, containing up to 64 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comments: Comments of ram user.
        '''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether force detach the policies and groups attached to the user. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        '''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: Email of ram user.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: groups: A name of a group to which you want to add the user.
        '''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.LoginProfileProperty]]:
        '''
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        '''
        result = self._values.get("login_profile")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.LoginProfileProperty]], result)

    @builtins.property
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: mobilePhone: Phone number of ram user.
        '''
        result = self._values.get("mobile_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PoliciesProperty]]]]:
        '''
        :Property: policies: Describes what actions are allowed on what resources.
        '''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PolicyAttachmentsProperty]]:
        '''
        :Property: policyAttachments: System and custom policy names to attach.
        '''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUserToGroupAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosUserToGroupAddition",
):
    '''A ROS template type:  ``ALIYUN::RAM::UserToGroupAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserToGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::RAM::UserToGroupAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce48252c3e568878d4ce654a6b12d2bc3b125b3171397313aef280f74679ad68)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c2a13419583aaf43ef081d3b188794803eae178819d0769b666a6c59b5ff7471)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fa5096d60d0ff664ae2593181f11da35c0c7e6aed938d5995706ad0f95ac1a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__646540b4d16ebd4593e381fae53933c60e530c70aa6483291a979deb71715fe3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="users")
    def users(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: users: list name of a users to which you want to add the group.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "users"))

    @users.setter
    def users(
        self,
        value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beaa9de44ebbdb7cf62b2ab118fbb538806247e4613020fe33007f3f7ce36eac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        users: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: 
        :param users: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb316c4f71ad4932120b6867a49f8cc4b680581659b167ae294f9270eb56dd52)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: users: list name of a users to which you want to add the group.
        '''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserToGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SAMLProvider(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.SAMLProvider",
):
    '''A ROS resource type:  ``ALIYUN::RAM::SAMLProvider``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SAMLProviderProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b41941bc09ee5fdeccb6143db1c7eace23015d19d416ef95d3989bfeb0fe85e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Arn: ARN.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SAMLProviderName: IdP Name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSamlProviderName"))


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
        saml_provider_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        saml_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: Property samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        :param description: Property description: The description can contain a maximum of 256 characters.
        :param saml_metadata_document: Property samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        :param saml_metadata_document_url: Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7cf88e1d2dda97b32d4f604c4244ed20d86fb524b80ee27d3f6f9f3fac990faf)
            check_type(argname="argument saml_provider_name", value=saml_provider_name, expected_type=type_hints["saml_provider_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument saml_metadata_document", value=saml_metadata_document, expected_type=type_hints["saml_metadata_document"])
            check_type(argname="argument saml_metadata_document_url", value=saml_metadata_document_url, expected_type=type_hints["saml_metadata_document_url"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property samlProviderName: IdP Name.

        The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        '''
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description can contain a maximum of 256 characters.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def saml_metadata_document(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property samlMetadataDocument: SAML metadata document.

        The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        '''
        result = self._values.get("saml_metadata_document")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def saml_metadata_document_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document.

        The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        '''
        result = self._values.get("saml_metadata_document_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SecurityPreference(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.SecurityPreference",
):
    '''A ROS resource type:  ``ALIYUN::RAM::SecurityPreference``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["SecurityPreferenceProps", typing.Dict[builtins.str, typing.Any]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13e00cce0a235496e3afdbfc61766b52ebd7da8c4840c7048b2765e3c145dbe3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToChangePassword")
    def attr_allow_user_to_change_password(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToChangePassword"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManageAccessKeys")
    def attr_allow_user_to_manage_access_keys(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManageAccessKeys"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManageMfaDevices")
    def attr_allow_user_to_manage_mfa_devices(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManageMfaDevices"))

    @builtins.property
    @jsii.member(jsii_name="attrAllowUserToManagePublicKeys")
    def attr_allow_user_to_manage_public_keys(
        self,
    ) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAllowUserToManagePublicKeys"))

    @builtins.property
    @jsii.member(jsii_name="attrEnableSaveMfaTicket")
    def attr_enable_save_mfa_ticket(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnableSaveMfaTicket"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginNetworkMasks")
    def attr_login_network_masks(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginNetworkMasks"))

    @builtins.property
    @jsii.member(jsii_name="attrLoginSessionDuration")
    def attr_login_session_duration(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoginSessionDuration"))


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
        allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_network_masks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c4355d9d279f91e4c118056fc870eb0a00257b679e14f8baaf29bd631a31ad7)
            check_type(argname="argument allow_user_to_change_password", value=allow_user_to_change_password, expected_type=type_hints["allow_user_to_change_password"])
            check_type(argname="argument allow_user_to_manage_access_keys", value=allow_user_to_manage_access_keys, expected_type=type_hints["allow_user_to_manage_access_keys"])
            check_type(argname="argument allow_user_to_manage_mfa_devices", value=allow_user_to_manage_mfa_devices, expected_type=type_hints["allow_user_to_manage_mfa_devices"])
            check_type(argname="argument allow_user_to_manage_public_keys", value=allow_user_to_manage_public_keys, expected_type=type_hints["allow_user_to_manage_public_keys"])
            check_type(argname="argument enable_save_mfa_ticket", value=enable_save_mfa_ticket, expected_type=type_hints["enable_save_mfa_ticket"])
            check_type(argname="argument login_network_masks", value=login_network_masks, expected_type=type_hints["login_network_masks"])
            check_type(argname="argument login_session_duration", value=login_session_duration, expected_type=type_hints["login_session_duration"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.

        Valid values:
        true: RAM users can change their passwords. This is the default value.
        false: RAM users cannot change their passwords.
        '''
        result = self._values.get("allow_user_to_change_password")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_access_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.

        Valid values:
        true: RAM users can manage their AccessKey pairs.
        false: RAM users cannot manage their AccessKey pairs. This is the default value.
        '''
        result = self._values.get("allow_user_to_manage_access_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_mfa_devices(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.

        Valid values:
        true: RAM users can manage their MFA devices. This is the default value.
        false: RAM users cannot manage their MFA devices.
        '''
        result = self._values.get("allow_user_to_manage_mfa_devices")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def allow_user_to_manage_public_keys(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.

        Valid values:
        true: RAM users can manage their public keys.
        false: RAM users cannot manage their public keys. This is the default value.
        Note This parameter is valid only for the Japan site.
        '''
        result = self._values.get("allow_user_to_manage_public_keys")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_save_mfa_ticket(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.

        The security codes are valid for 7 days. Valid values:
        true: RAM users can save MFA security codes during logon.
        false: RAM users cannot save MFA security codes during logon. This is the default
        value.
        '''
        result = self._values.get("enable_save_mfa_ticket")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_network_masks(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_session_duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loginSessionDuration: The validity period of the logon session of the RAM user.

        Valid values: 6 to 24. Default value: 6. Unit: hours.
        '''
        result = self._values.get("login_session_duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecurityPreferenceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class User(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.User",
):
    '''A ROS resource type:  ``ALIYUN::RAM::User``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc8c0b008f1d2d48a0fd4bf474bbce4534d489d7649a0a4c3c6dc1c97bf86656)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CreateDate: Create date of ram user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateDate"))

    @builtins.property
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LastLoginDate: Last login date of ram user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLastLoginDate"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: Id of ram user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserName: Name of ram user.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserName"))


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
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.LoginProfileProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        mobile_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c599611ba0f39fb029b1beb66614e96b721cbdd482598dd3ca97a7c558ae5fd)
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument comments", value=comments, expected_type=type_hints["comments"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument groups", value=groups, expected_type=type_hints["groups"])
            check_type(argname="argument login_profile", value=login_profile, expected_type=type_hints["login_profile"])
            check_type(argname="argument mobile_phone", value=mobile_phone, expected_type=type_hints["mobile_phone"])
            check_type(argname="argument policies", value=policies, expected_type=type_hints["policies"])
            check_type(argname="argument policy_attachments", value=policy_attachments, expected_type=type_hints["policy_attachments"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: Specifies the user name, containing up to 64 characters.'''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comments(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comments: Comments of ram user.'''
        result = self._values.get("comments")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether force detach the policies and groups attached to the user.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def display_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property displayName: Display name, up to 128 characters or Chinese characters.'''
        result = self._values.get("display_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property email: Email of ram user.'''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property groups: A name of a group to which you want to add the user.'''
        result = self._values.get("groups")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.LoginProfileProperty]]:
        '''Property loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.'''
        result = self._values.get("login_profile")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.LoginProfileProperty]], result)

    @builtins.property
    def mobile_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property mobilePhone: Phone number of ram user.'''
        result = self._values.get("mobile_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PoliciesProperty]]]]:
        '''Property policies: Describes what actions are allowed on what resources.'''
        result = self._values.get("policies")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PoliciesProperty]]]], result)

    @builtins.property
    def policy_attachments(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PolicyAttachmentsProperty]]:
        '''Property policyAttachments: System and custom policy names to attach.'''
        result = self._values.get("policy_attachments")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PolicyAttachmentsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserToGroupAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.UserToGroupAddition",
):
    '''A ROS resource type:  ``ALIYUN::RAM::UserToGroupAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserToGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be7b3b9b12049d1cb581d75e4199c637a4606a117fcdaf2d791aecb0828ad86c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
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
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        users: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: Property groupName: Specifies the group name, containing up to 64 characters.
        :param users: Property users: list name of a users to which you want to add the group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5129dddf74c4da6d2d4aabfcf04d8496dae34cc0cf54c4ca801d9a915be2209b)
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument users", value=users, expected_type=type_hints["users"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Specifies the group name, containing up to 64 characters.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def users(
        self,
    ) -> typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property users: list name of a users to which you want to add the group.'''
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable], result)

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

def _typecheckingstub__03056601aa9c66151ab330d5d6c7633be347c2a2c7406403d43c2f7584afa104(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessKeyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c65a1d8a6a02afec6b09e935d6506f2f24cc730750f6695f02fe130cd4057b91(
    *,
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8672f1a72ed07fcbe737d5a9557d863c33e19870e3bc350bcc58db320655998(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AttachPolicyToRoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8db63c3a90e958e71ff57ea53e930e5d7eb53f32bf5abc237fea1ced2a959b0(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9394412274a5bfa95f6c71b7943be24312b0c5e819f3ff64ef8658c52ca48bec(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AttachPolicyToUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78686ec7d1db412446c8ca655943d1f7ebe80778f74808667d529eab00acbd75(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__083f993bad3010516f35d4cc1aac1144049d0b325e238b6315d5060c1f114c41(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[GroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8556016ae73f5666f4c5ca77e743183e82638e43aef547e6896782ff47a9201(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd0c71ff3f6cf039d819570661c9902b7945f06ed21dd7a7de0bca4efcd3e824(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ManagedPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccbf69cafd2cdb4d252132a516e506809844ae800195fe2a63181e7152f863c8(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedPolicy.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy_document_unchecked: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    users: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c948ecb04195d7d793507db89072eee3717f087dda3d406bc6ef17672778a69(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RamAccountAliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10739515bf442c8b35558b47bbf7b368183d98ec9533e4177a8b58bb19888b33(
    *,
    account_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00e02496c1f589666468dbacce98f9b5a72f1c16707b05021e9a0b0583707007(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc2f95532c46e86d5f041d77f192be15ae93e002d4b3c03dfe9c0450c860acef(
    *,
    assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.AssumeRolePolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc9b98f4f9680421f98bb50694276f06092d044d2f7fcde8f9e3be10a6ace7b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessKeyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1991c9462ec19df1525ad0d073264d187fc38c7b0f3e65b68eda00fa0ff1cc4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82c772e7143813550c425c64fbdb5a5803676b765f50aba5ed43b8701c83fe11(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f4f4aa9dbc86507cf222903079536b0197b68ce8c96585707a6333632045b1a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d635140ca4146fe7988971d0168119ec416450277d3ba6cfef1abcda0363e594(
    *,
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e3d4198ae5526a2904bf8dbbaa2ad38cb844165cb75d25e4bc19954e721987(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAttachPolicyToRoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66732acffce18f6c63ead0d44f7ab826ace2600e73c5c16819776b22f287000f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daeeb16405dc822fa7b16abacdbb9b0f26609700c993760e690fae5c35f0f345(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c80d255df1cf6c07c673bb65d1d0c06bdddba75019b74fa157ad6a08d82766(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__545ef26bc34fbd7db76185c083913cf134294098c0d75e2e7e553c7194241636(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1908750ae84c130b939aff90d8496d9577ec5f7fc32cddba082b8c2a5ac1c001(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__21de1c42bc5b169d4cf37c609a4b2ab32eca0907532d9aa92be6104121eae127(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da1248ed4f151ed46fb14d20f0934e943d29567dc03597f0a7c5d0f1c8a48fc9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAttachPolicyToUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__614f625ba08c1bee29e0085530b59675c0077b3362694ad2adcc20a5b9c405af(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc1868bdc8a19f9e6945dd656f79135df63e8eed4ab848947bf3d1f8984e9bd1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8d4c2fadf8584edd46876629da88c09326c6d48255bab4936358df35112ba1b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc24f234552b582814ccdf61ef40b05be52dc85c90137472310282c191819344(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4793861e3039ca137a48797fb29889a0d36b34f4248e9663f9d034942f92cf7b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69a3c3a2073eaaf9f31601a18b22d93c541def444cc55e6f05126a2151b93a19(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a158c7e890a461605e4597e27c25feaad2e59773694303253b30c8694af227c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2259c68f59156b82c218e290d7e84d43d219936469f3efedc5c9e738c44ba6c6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4ff5b76bd230585fedef78d6161bc3ccf1305126730df65ba7c3b6c38dbd95(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca872f639700c446cb4d7bb0325f2c616a765958cdebeb81b55771bce023e1d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59dd926a42c07a2cd34bb9b1443530e5bac8d8ba0c35e21c6e97164acb00fc55(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d784d2b51df10332d304ebc1d837f585db20069128582b3a79659f25f612e102(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1fb8895fd829653571ba6e06beb2dd91125093f110455b597bf1a95cf597431(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PoliciesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cf6f94274cf8e46c1483e739cbfa372556addf3e6d65a61abe3147d2fd518e2(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosGroup.PolicyAttachmentsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fdd23ff0c8d0deb7453a15973a0b4cc3e5f243c1efb4c8a1795b544473802bd(
    *,
    policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99e7103b3ce5e7b73cc904e6290cf1f0fdcb9feb270df327a99f22d4ecc72648(
    *,
    custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b6f9234dfe173615d2aeaee879ed7214290792b5f207094378a38ceafd1a157a(
    *,
    statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.StatementProperty, typing.Dict[builtins.str, typing.Any]]]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c94e3bd5aaffa23ceb3e5be291d208e95ec8817d573566a7a85acfac79cf60d8(
    *,
    action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8375077f55806a09defe567d8de744b4d1154dbd3fb53672b3ea0bbcac11605b(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosGroup.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__445b3f87073d61b78e6306337466c83e0c48e7e8829f95441ff5df54d1aa3d84(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__afdcdff225020454d464b3dbc0503da27d9f9e70cf136070fdc3d000c6c2d683(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af1cd73ec38bdfe748d85c52dc25a4014912c0a338b59016bcf1a2a2b861eb19(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c401b4dd8b05023ad2b3bd48e840d1a67d2681e4164972c7b729034dbc3b40df(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd4ba22750b6a8f03295e5db6fc4689a0841e4ea7bd138fc39035ed52a9e17a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0eecdc2af91fbcd69f669aea50b08725629311467d52bda6745ba838d3b60e7f(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c671dc683b33dace00bbcb68eec74d0a841d25aa6b13253af94b2a260147031(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosManagedPolicy.PolicyDocumentProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4f118388ecfbb4842bc02e80353e01b5429447af63fb041d04892b515c80a3d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35c11e0c5b6be7f41593e752428a83b831215974b94519b5bcdd1290768977c6(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__710a583b5ffb28339a6f32bd7ccdee2b783bd4b6b31f2486e1bfe3b9884002f4(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7000fee52f36f1f2e66f314800a2c346baa00d574c9d933fc9e1e06d069801d1(
    *,
    statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedPolicy.StatementProperty, typing.Dict[builtins.str, typing.Any]]]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7db65ee2f4373d1904eb85f57425f3e3720446218f44628b18f14d520e66c3f0(
    *,
    action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07e7c91ffb7233b392c5c5a9a6f3f3fae5a1779d5e406ffd6e111b52b51dceb7(
    *,
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policy_document: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosManagedPolicy.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    policy_document_unchecked: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    roles: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    users: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e51cffb8430af6e3ad61ca9365843c47182fe10a9ba99e0d69cf046a46acb6a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRamAccountAliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d3ce3ba55c601ff2344062eff7d7eb22a0f782246c44d7f847067ee5c93815d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a19ece8f34c010db4f2bf4a3fa823be707947c7def22c9b474d0f89ebd17d65c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95b8e6c7f644f9347dbbb6cef9656c86ddd8b05ea7a0463a29528feda80e036c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfcec77cb4606431a4baa08f44dd623b1cd1888f7177842daac119f43e373082(
    *,
    account_alias: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76b9089588f494898a69d1b4cb7d0bada68bef0ed48ac0ba4dcdb23f68e021c6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRoleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a232a02b68fd84bbd5ff80f9a34d3b26fe822b8db55ffce6ec1af3fe4f0c4e4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b57ad938e380c2118c977ffc0b3ea352e1dd185373b7378c4cc1cb199311ffa(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.AssumeRolePolicyDocumentProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25af3ece9bdbce036c5039caf5ffa182cbb0a6bed7414aed3a4ac2eb0cc786ab(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__737d8d4987a38c90cfa70f907da488f243065d234c2cdf203007b1eedcdfb11c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8a26790f6ce4169dfa0345b621a2eddadfb7b14c0a8fa3576bb42321fb4c5f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f4221d044d8cabac80022706c51d78380cf2011ff1dbf86fa7940a0ecfea04b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99531052f5d106e1b1362ad95feb78e993590fc850d18732d18aeb04007bc721(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__011a7d48fe1d3180f4d218ae5f631dd2325fea43fbee01cb427b598d51683b99(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PoliciesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d220c5ead77b6ab447f65c2be85157a15605e191a42f28f2d3f470f706b14b46(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRole.PolicyAttachmentsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6aa4dc2ebb578c13913bf1950ac3c1bb6bce5d5b15239662166978960d575042(
    *,
    statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.StatementProperty, typing.Dict[builtins.str, typing.Any]]]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0374b58468f6ed5a0b72b0ad62057945ced7d91a586ad3cf5b89416536c8097b(
    *,
    bool: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_greater_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_greater_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_less_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_less_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    date_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ip_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    not_ip_address: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_greater_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_greater_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_less_than: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_less_than_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    numeric_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_equals_ignore_case: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_like: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_not_equals: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_not_equals_ignore_case: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    string_not_like: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d178f960ecd6f9fa143579710a9f06a9eb76c215229cddda81661ec5603ffb28(
    *,
    policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc549095029eb8c19895ad5e3093b7439158b97aafa1762efa75df1a5eabf69e(
    *,
    custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33a52b5452d39058486c858d4a5f977337bd3a27cdf14999fa1b7559536d88d0(
    *,
    statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PolicyDocumentStatementProperty, typing.Dict[builtins.str, typing.Any]]]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f0ed3ada39ca8d911e12b1f615135a6c02f6012d75e2cfe5e1a96cc4f042779(
    *,
    action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0468153bc7b0036e9ab07c4e9682d5c8859964fb3417d4471a81d7eee819c24e(
    *,
    federated: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ram: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0434dc0ee64bc1768cf3f366993eca72b020b7740a89b76b01009a7aa7f552b(
    *,
    action: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.ConditionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    principal: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PrincipalProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4564b5168cb02f4dd74d348414e4fc0d18f41d601e251b1035728b082afd1676(
    *,
    assume_role_policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.AssumeRolePolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRole.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ef99902fae75432953c392690270aff7bf1740d8db81fe661e92a47c2d78941(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSAMLProviderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85fcc8ed827f130665e1be2530895789738d21bb4f98023705529d852c93fbf2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd1adb84209c38e18c40b1fcb4e33c6b8ba1c38f4cdadbc405443a3c1fad1d5f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a540cf39c10c1a113d427f8478befdd79f0b03efc3198d5fd89f3d72830a5ba4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d042bc2976808d4bd7788d8e979616b456aa582ed65b973525efc805f2fdabee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb870c48265d0b7fbf8e9d5cf8c3075af5a4c0f083c4fa362b3272faf275e9d0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d98fd355ad997bce70c3a9151662aa2b24fc6483df4cf7d0dab75051f3276cb3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__755de24d58be2164678140c31088185dc6ea0b775e6e92ece25257f789fb3352(
    *,
    saml_provider_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    saml_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5403027acb84869637169284fe16d70b3f13744f6cb99c4c732a1e5bd7aa5db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecurityPreferenceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f65f6c03d132cd93a8af56859939293c17228bb5f46265d639e2d2c4655408dd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__04b6d8ea8070c7e49b72f4c82feaadacf573b1d9ec9b99710fa2560d737fdb5a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fe60495aa60d7213a381e2af796a719276973596cdd8c061840a3678069cd33a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6901d0003f08cc8e490c3748df0d1acd167e4e6975d95b1edc6971df486736a5(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__330aed615124736cdc061c67f247089618432f11bac9653fc652252e9bf39d55(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__235d08fbd647136905484ed34211baf96160b321470d11cfc084d9da024b5d4a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e61eb534f5a93c2141d21c5b7beab51a7fb41a8ab4ab372e3b5eee949c0e7b35(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cee778bdb3755f9512004d0310e66fbf58b8ac5bb70d9592fd2da842be339505(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcfaedba2ee6898fed66527a9f1e4dd573cf9ea5e6ae51c043e5441f1a09e289(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41eeaf41c8946e47d2a01b941fdd3d86d2e9a82995baf1d90de2786bc7e68c16(
    *,
    allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_network_masks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbb1de46460b3cf0a2250e2d87c10a16063b109c2fa11f50bcdd6a18dfae75ad(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b42d0f6f8e6b87fc37a004dee76f93217e93fd8ebecbffc808b0de62cf50466(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9bce1153378c19594f1006affe175005d20834c51780fe05721e1037e48c9da(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e6d33777011d283086bf86a773e2995f4bf3c6e33eb95b74b1b9c3a9bd20a92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fb2c0f2357b19cd414ecb5d8ea614457a0c279a76a458aa4812f261775bd363(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d249a9a80b0a55faeb8567ae7bdcfd22ae2b2936d98d591c87d66c6c7c8ff5de(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e39e1e4da4fcd214066676ca1b7e6223079c5e657136f361afed33b6416d6658(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fef9a6e1100ed449066fbb6b619b82642f40c91a439c5ce1ee6f0229c18c32e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7feacc2ce7d1566f900abcad9fb5f504bb4a7245875171aeeb1a3dbeaf6e781c(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a7541a6339e1c8094ff54e872f5dcdb50fe3bdb0216f6dc7bb4ab11d9c4c828d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.LoginProfileProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e39f11d568f5eef5124651714aa43d5df5afa97989200f714bf9bf34c6c627d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a54a2ae3c49a234605f3a3cc0fc86f45e57b742eddd5e326068c056362e05df(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PoliciesProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__915e33c9e6bf4dd79927bcf54f4fae4b82e2cd3f5b76f3d3076182b89fdf5939(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosUser.PolicyAttachmentsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34edd7511917ef1d676fec9542bb1e9393843da0a5302155ed6587b8ca1da313(
    *,
    mfa_bind_required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_reset_required: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__526b5ef42e94c4549ee3328b8d73bc6e144753080261bf717406bb14550d838f(
    *,
    policy_document: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PolicyDocumentProperty, typing.Dict[builtins.str, typing.Any]]],
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8dec2d4b0550b3c5d282672f72769d21c83d0793ce994d845982f15ba2e5c25(
    *,
    custom: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    system: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25401c0b332765ada40cbfc0bea7913ba67fa21ea9bbcbd67644f1310fd49212(
    *,
    statement: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.StatementProperty, typing.Dict[builtins.str, typing.Any]]]]],
    version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5314c2eabb295697e2cd64fa9c6e3a717693376f2e4fcec5462a78aa552e477c(
    *,
    action: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    condition: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    effect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e9e9f71d1ef54158ab8f09da0032cda451382c5dd847543ccfe94e595b5ed6d(
    *,
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_profile: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.LoginProfileProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    mobile_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce48252c3e568878d4ce654a6b12d2bc3b125b3171397313aef280f74679ad68(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserToGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2a13419583aaf43ef081d3b188794803eae178819d0769b666a6c59b5ff7471(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fa5096d60d0ff664ae2593181f11da35c0c7e6aed938d5995706ad0f95ac1a8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__646540b4d16ebd4593e381fae53933c60e530c70aa6483291a979deb71715fe3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beaa9de44ebbdb7cf62b2ab118fbb538806247e4613020fe33007f3f7ce36eac(
    value: typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb316c4f71ad4932120b6867a49f8cc4b680581659b167ae294f9270eb56dd52(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    users: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b41941bc09ee5fdeccb6143db1c7eace23015d19d416ef95d3989bfeb0fe85e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SAMLProviderProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7cf88e1d2dda97b32d4f604c4244ed20d86fb524b80ee27d3f6f9f3fac990faf(
    *,
    saml_provider_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    saml_metadata_document: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    saml_metadata_document_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13e00cce0a235496e3afdbfc61766b52ebd7da8c4840c7048b2765e3c145dbe3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[SecurityPreferenceProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c4355d9d279f91e4c118056fc870eb0a00257b679e14f8baaf29bd631a31ad7(
    *,
    allow_user_to_change_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_access_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_mfa_devices: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    allow_user_to_manage_public_keys: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_save_mfa_ticket: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_network_masks: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_session_duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc8c0b008f1d2d48a0fd4bf474bbce4534d489d7649a0a4c3c6dc1c97bf86656(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c599611ba0f39fb029b1beb66614e96b721cbdd482598dd3ca97a7c558ae5fd(
    *,
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comments: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    display_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    groups: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    login_profile: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.LoginProfileProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    mobile_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policies: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PoliciesProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    policy_attachments: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosUser.PolicyAttachmentsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be7b3b9b12049d1cb581d75e4199c637a4606a117fcdaf2d791aecb0828ad86c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserToGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5129dddf74c4da6d2d4aabfcf04d8496dae34cc0cf54c4ca801d9a915be2209b(
    *,
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    users: typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
