"""
## Aliyun ROS RAM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ram as RAM
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


class AccessKey(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.AccessKey",
):
    """A ROS resource type:  ``ALIYUN::RAM::AccessKey``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccessKeyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AccessKey``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AccessKey, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> typing.Any:
        """
        :Attribute: AccessKeyId: Id of access key.
        """
        return jsii.get(self, "attrAccessKeyId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> typing.Any:
        """
        :Attribute: AccessKeySecret: Secret of access key.
        """
        return jsii.get(self, "attrAccessKeySecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Status of access key.
        """
        return jsii.get(self, "attrStatus")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.AccessKeyProps",
    jsii_struct_bases=[],
    name_mapping={"user_name": "userName"},
)
class AccessKeyProps:
    def __init__(self, *, user_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToRole``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AttachPolicyToRoleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AttachPolicyToRole``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AttachPolicyToRole, self, [scope, id, props, enable_resource_property_constraint])


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
        policy_name: builtins.str,
        policy_type: builtins.str,
        role_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: 
        :param policy_type: 
        :param role_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Role name.Example: dev.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::AttachPolicyToUser``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AttachPolicyToUserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AttachPolicyToUser``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AttachPolicyToUser, self, [scope, id, props, enable_resource_property_constraint])


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
        policy_name: builtins.str,
        policy_type: builtins.str,
        user_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: 
        :param policy_type: 
        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return result

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: User name.Example: dev.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Group, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: Id of ram group.
        """
        return jsii.get(self, "attrGroupName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.GroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "group_name": "groupName",
        "comments": "comments",
        "policies": "policies",
    },
)
class GroupProps:
    def __init__(
        self,
        *,
        group_name: builtins.str,
        comments: typing.Optional[builtins.str] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: 
        :param comments: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if policies is not None:
            self._values["policies"] = policies

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        """
        result = self._values.get("comments")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::ManagedPolicy``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ManagedPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::ManagedPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ManagedPolicy, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> typing.Any:
        """
        :Attribute: PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
        """
        return jsii.get(self, "attrPolicyName")


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
        policy_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        groups: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::ManagedPolicy``.

        :param policy_name: 
        :param description: 
        :param groups: 
        :param policy_document: 
        :param policy_document_unchecked: 
        :param roles: 
        :param users: 
        """
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
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: The names of groups to attach to this policy.
        """
        result = self._values.get("groups")
        return result

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        """
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        """
        result = self._values.get("policy_document")
        return result

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        """
        result = self._values.get("policy_document_unchecked")
        return result

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: roles: The names of roles to attach to this policy.
        """
        result = self._values.get("roles")
        return result

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: users: The names of users to attach to this policy.
        """
        result = self._values.get("users")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Role(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.Role",
):
    """A ROS resource type:  ``ALIYUN::RAM::Role``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RoleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::Role``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Role, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: Arn: Name of alicloud resource.
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> typing.Any:
        """
        :Attribute: RoleId: Id of ram role.
        """
        return jsii.get(self, "attrRoleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> typing.Any:
        """
        :Attribute: RoleName: Name of ram role.
        """
        return jsii.get(self, "attrRoleName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RoleProps",
    jsii_struct_bases=[],
    name_mapping={
        "assume_role_policy_document": "assumeRolePolicyDocument",
        "role_name": "roleName",
        "description": "description",
        "max_session_duration": "maxSessionDuration",
        "policies": "policies",
    },
)
class RoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union["RosRole.AssumeRolePolicyDocumentProperty", ros_cdk_core.IResolvable],
        role_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        max_session_duration: typing.Optional[jsii.Number] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::Role``.

        :param assume_role_policy_document: 
        :param role_name: 
        :param description: 
        :param max_session_duration: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration
        if policies is not None:
            self._values["policies"] = policies

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union["RosRole.AssumeRolePolicyDocumentProperty", ros_cdk_core.IResolvable]:
        """
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        """
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def max_session_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        """
        result = self._values.get("max_session_duration")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::AccessKey``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccessKeyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AccessKey``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAccessKey, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAccessKeyId")
    def attr_access_key_id(self) -> typing.Any:
        """
        :Attribute: AccessKeyId: Id of access key.
        """
        return jsii.get(self, "attrAccessKeyId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAccessKeySecret")
    def attr_access_key_secret(self) -> typing.Any:
        """
        :Attribute: AccessKeySecret: Secret of access key.
        """
        return jsii.get(self, "attrAccessKeySecret")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> typing.Any:
        """
        :Attribute: Status: Status of access key.
        """
        return jsii.get(self, "attrStatus")

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
    @jsii.member(jsii_name="userName")
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        return jsii.get(self, "userName")

    @user_name.setter # type: ignore
    def user_name(self, value: builtins.str) -> None:
        jsii.set(self, "userName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.RosAccessKeyProps",
    jsii_struct_bases=[],
    name_mapping={"user_name": "userName"},
)
class RosAccessKeyProps:
    def __init__(self, *, user_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::RAM::AccessKey``.

        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::AttachPolicyToRole``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAttachPolicyToRoleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AttachPolicyToRole``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAttachPolicyToRole, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        return jsii.get(self, "policyName")

    @policy_name.setter # type: ignore
    def policy_name(self, value: builtins.str) -> None:
        jsii.set(self, "policyName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyType")
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        return jsii.get(self, "policyType")

    @policy_type.setter # type: ignore
    def policy_type(self, value: builtins.str) -> None:
        jsii.set(self, "policyType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleName")
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Role name.Example: dev.
        """
        return jsii.get(self, "roleName")

    @role_name.setter # type: ignore
    def role_name(self, value: builtins.str) -> None:
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
        policy_name: builtins.str,
        policy_type: builtins.str,
        role_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::AttachPolicyToRole``.

        :param policy_name: 
        :param policy_type: 
        :param role_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "role_name": role_name,
        }

    @builtins.property
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Role name.Example: dev.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::AttachPolicyToUser``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAttachPolicyToUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::AttachPolicyToUser``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAttachPolicyToUser, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        return jsii.get(self, "policyName")

    @policy_name.setter # type: ignore
    def policy_name(self, value: builtins.str) -> None:
        jsii.set(self, "policyName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyType")
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        return jsii.get(self, "policyType")

    @policy_type.setter # type: ignore
    def policy_type(self, value: builtins.str) -> None:
        jsii.set(self, "policyType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userName")
    def user_name(self) -> builtins.str:
        """
        :Property: userName: User name.Example: dev.
        """
        return jsii.get(self, "userName")

    @user_name.setter # type: ignore
    def user_name(self, value: builtins.str) -> None:
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
        policy_name: builtins.str,
        policy_type: builtins.str,
        user_name: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::AttachPolicyToUser``.

        :param policy_name: 
        :param policy_type: 
        :param user_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "policy_name": policy_name,
            "policy_type": policy_type,
            "user_name": user_name,
        }

    @builtins.property
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Authorization policy name.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def policy_type(self) -> builtins.str:
        """
        :Property: policyType: Authorization policy type. Value: "System" or "Custom".
        """
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return result

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: User name.Example: dev.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::Group``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::Group``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGroupName")
    def attr_group_name(self) -> typing.Any:
        """
        :Attribute: GroupName: Id of ram group.
        """
        return jsii.get(self, "attrGroupName")

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
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comments")
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        """
        return jsii.get(self, "comments")

    @comments.setter # type: ignore
    def comments(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "comments", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        return jsii.get(self, "policies")

    @policies.setter # type: ignore
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

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
            policy_name: builtins.str,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param policy_document: 
            :param policy_name: 
            :param description: 
            """
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
            """
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            """
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return result

        @builtins.property
        def policy_name(self) -> builtins.str:
            """
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            """
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
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
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.StatementProperty"]]]] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param statement: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosGroup.StatementProperty"]]]]:
            """
            :Property: statement: A policy consists of one or more statements.
            """
            result = self._values.get("statement")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: You can use versions to track changes to a managed policy.
            """
            result = self._values.get("version")
            return result

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
            action: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[builtins.str] = None,
            resource: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            """
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
            """
            :Property: action: What actions you will allow.
            """
            result = self._values.get("action")
            return result

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: condition: What conditions should be satisfied.
            """
            result = self._values.get("condition")
            return result

        @builtins.property
        def effect(self) -> typing.Optional[builtins.str]:
            """
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            """
            result = self._values.get("effect")
            return result

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: resource: Which resources you allow the action on.
            """
            result = self._values.get("resource")
            return result

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
        "policies": "policies",
    },
)
class RosGroupProps:
    def __init__(
        self,
        *,
        group_name: builtins.str,
        comments: typing.Optional[builtins.str] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosGroup.PoliciesProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::Group``.

        :param group_name: 
        :param comments: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
        }
        if comments is not None:
            self._values["comments"] = comments
        if policies is not None:
            self._values["policies"] = policies

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Remark information, up to 128 characters or Chinese characters.
        """
        result = self._values.get("comments")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosGroup.PoliciesProperty]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::ManagedPolicy``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosManagedPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::ManagedPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosManagedPolicy, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrPolicyName")
    def attr_policy_name(self) -> typing.Any:
        """
        :Attribute: PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
        """
        return jsii.get(self, "attrPolicyName")

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
    @jsii.member(jsii_name="policyName")
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        """
        return jsii.get(self, "policyName")

    @policy_name.setter # type: ignore
    def policy_name(self, value: builtins.str) -> None:
        jsii.set(self, "policyName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: The names of groups to attach to this policy.
        """
        return jsii.get(self, "groups")

    @groups.setter # type: ignore
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groups", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyDocument")
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]]:
        """
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        """
        return jsii.get(self, "policyDocument")

    @policy_document.setter # type: ignore
    def policy_document(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.PolicyDocumentProperty"]],
    ) -> None:
        jsii.set(self, "policyDocument", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policyDocumentUnchecked")
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        """
        return jsii.get(self, "policyDocumentUnchecked")

    @policy_document_unchecked.setter # type: ignore
    def policy_document_unchecked(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "policyDocumentUnchecked", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roles")
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: roles: The names of roles to attach to this policy.
        """
        return jsii.get(self, "roles")

    @roles.setter # type: ignore
    def roles(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "roles", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="users")
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: users: The names of users to attach to this policy.
        """
        return jsii.get(self, "users")

    @users.setter # type: ignore
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
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.StatementProperty"]]]] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param statement: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosManagedPolicy.StatementProperty"]]]]:
            """
            :Property: statement: A policy consists of one or more statements.
            """
            result = self._values.get("statement")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: You can use versions to track changes to a managed policy.
            """
            result = self._values.get("version")
            return result

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
            action: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[builtins.str] = None,
            resource: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            """
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
            """
            :Property: action: What actions you will allow.
            """
            result = self._values.get("action")
            return result

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: condition: What conditions should be satisfied.
            """
            result = self._values.get("condition")
            return result

        @builtins.property
        def effect(self) -> typing.Optional[builtins.str]:
            """
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            """
            result = self._values.get("effect")
            return result

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: resource: Which resources you allow the action on.
            """
            result = self._values.get("resource")
            return result

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
        policy_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        groups: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        policy_document: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedPolicy.PolicyDocumentProperty]] = None,
        policy_document_unchecked: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        roles: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        users: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::ManagedPolicy``.

        :param policy_name: 
        :param description: 
        :param groups: 
        :param policy_document: 
        :param policy_document_unchecked: 
        :param roles: 
        :param users: 
        """
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
    def policy_name(self) -> builtins.str:
        """
        :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
        """
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: The names of groups to attach to this policy.
        """
        result = self._values.get("groups")
        return result

    @builtins.property
    def policy_document(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosManagedPolicy.PolicyDocumentProperty]]:
        """
        :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
        """
        result = self._values.get("policy_document")
        return result

    @builtins.property
    def policy_document_unchecked(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: policyDocumentUnchecked: A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.
        """
        result = self._values.get("policy_document_unchecked")
        return result

    @builtins.property
    def roles(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: roles: The names of roles to attach to this policy.
        """
        result = self._values.get("roles")
        return result

    @builtins.property
    def users(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: users: The names of users to attach to this policy.
        """
        result = self._values.get("users")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRole(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosRole",
):
    """A ROS template type:  ``ALIYUN::RAM::Role``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRoleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::Role``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRole, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: Arn: Name of alicloud resource.
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleId")
    def attr_role_id(self) -> typing.Any:
        """
        :Attribute: RoleId: Id of ram role.
        """
        return jsii.get(self, "attrRoleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRoleName")
    def attr_role_name(self) -> typing.Any:
        """
        :Attribute: RoleName: Name of ram role.
        """
        return jsii.get(self, "attrRoleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="assumeRolePolicyDocument")
    def assume_role_policy_document(
        self,
    ) -> typing.Union["RosRole.AssumeRolePolicyDocumentProperty", ros_cdk_core.IResolvable]:
        """
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        """
        return jsii.get(self, "assumeRolePolicyDocument")

    @assume_role_policy_document.setter # type: ignore
    def assume_role_policy_document(
        self,
        value: typing.Union["RosRole.AssumeRolePolicyDocumentProperty", ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "assumeRolePolicyDocument", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleName")
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        """
        return jsii.get(self, "roleName")

    @role_name.setter # type: ignore
    def role_name(self, value: builtins.str) -> None:
        jsii.set(self, "roleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="maxSessionDuration")
    def max_session_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        """
        return jsii.get(self, "maxSessionDuration")

    @max_session_duration.setter # type: ignore
    def max_session_duration(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "maxSessionDuration", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        return jsii.get(self, "policies")

    @policies.setter # type: ignore
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty",
        jsii_struct_bases=[],
        name_mapping={"statement": "statement", "version": "version"},
    )
    class AssumeRolePolicyDocumentProperty:
        def __init__(
            self,
            *,
            statement: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]],
            version: builtins.str,
        ) -> None:
            """
            :param statement: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "statement": statement,
                "version": version,
            }

        @builtins.property
        def statement(
            self,
        ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]]:
            """
            :Property: statement: A policy consists of one or more statements.
            """
            result = self._values.get("statement")
            assert result is not None, "Required property 'statement' is missing"
            return result

        @builtins.property
        def version(self) -> builtins.str:
            """
            :Property: version: You can use versions to track changes to a managed policy.
            """
            result = self._values.get("version")
            assert result is not None, "Required property 'version' is missing"
            return result

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
            """
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
            """
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
            """
            :Property: bool: undefined
            """
            result = self._values.get("bool")
            return result

        @builtins.property
        def date_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateEquals: undefined
            """
            result = self._values.get("date_equals")
            return result

        @builtins.property
        def date_greater_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateGreaterThan: undefined
            """
            result = self._values.get("date_greater_than")
            return result

        @builtins.property
        def date_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateGreaterThanEquals: undefined
            """
            result = self._values.get("date_greater_than_equals")
            return result

        @builtins.property
        def date_less_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateLessThan: undefined
            """
            result = self._values.get("date_less_than")
            return result

        @builtins.property
        def date_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateLessThanEquals: undefined
            """
            result = self._values.get("date_less_than_equals")
            return result

        @builtins.property
        def date_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: dateNotEquals: undefined
            """
            result = self._values.get("date_not_equals")
            return result

        @builtins.property
        def ip_address(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: ipAddress: undefined
            """
            result = self._values.get("ip_address")
            return result

        @builtins.property
        def not_ip_address(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: notIpAddress: undefined
            """
            result = self._values.get("not_ip_address")
            return result

        @builtins.property
        def numeric_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericEquals: undefined
            """
            result = self._values.get("numeric_equals")
            return result

        @builtins.property
        def numeric_greater_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericGreaterThan: undefined
            """
            result = self._values.get("numeric_greater_than")
            return result

        @builtins.property
        def numeric_greater_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericGreaterThanEquals: undefined
            """
            result = self._values.get("numeric_greater_than_equals")
            return result

        @builtins.property
        def numeric_less_than(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericLessThan: undefined
            """
            result = self._values.get("numeric_less_than")
            return result

        @builtins.property
        def numeric_less_than_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericLessThanEquals: undefined
            """
            result = self._values.get("numeric_less_than_equals")
            return result

        @builtins.property
        def numeric_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: numericNotEquals: undefined
            """
            result = self._values.get("numeric_not_equals")
            return result

        @builtins.property
        def string_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringEquals: undefined
            """
            result = self._values.get("string_equals")
            return result

        @builtins.property
        def string_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringEqualsIgnoreCase: undefined
            """
            result = self._values.get("string_equals_ignore_case")
            return result

        @builtins.property
        def string_like(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringLike: undefined
            """
            result = self._values.get("string_like")
            return result

        @builtins.property
        def string_not_equals(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringNotEquals: undefined
            """
            result = self._values.get("string_not_equals")
            return result

        @builtins.property
        def string_not_equals_ignore_case(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringNotEqualsIgnoreCase: undefined
            """
            result = self._values.get("string_not_equals_ignore_case")
            return result

        @builtins.property
        def string_not_like(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: stringNotLike: undefined
            """
            result = self._values.get("string_not_like")
            return result

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
            policy_name: builtins.str,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param policy_document: 
            :param policy_name: 
            :param description: 
            """
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
            """
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            """
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return result

        @builtins.property
        def policy_name(self) -> builtins.str:
            """
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            """
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
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
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]]] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param statement: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRole.StatementProperty"]]]]:
            """
            :Property: statement: A policy consists of one or more statements.
            """
            result = self._values.get("statement")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: You can use versions to track changes to a managed policy.
            """
            result = self._values.get("version")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PolicyDocumentProperty(%s)" % ", ".join(
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
            federated: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            ram: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            service: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param federated: 
            :param ram: 
            :param service: 
            """
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
            """
            :Property: federated: undefined
            """
            result = self._values.get("federated")
            return result

        @builtins.property
        def ram(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: ram: undefined
            """
            result = self._values.get("ram")
            return result

        @builtins.property
        def service(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: service: undefined
            """
            result = self._values.get("service")
            return result

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
            "resource": "resource",
        },
    )
    class StatementProperty:
        def __init__(
            self,
            *,
            action: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[builtins.str] = None,
            resource: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            """
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
            """
            :Property: action: What actions you will allow.
            """
            result = self._values.get("action")
            return result

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: condition: What conditions should be satisfied.
            """
            result = self._values.get("condition")
            return result

        @builtins.property
        def effect(self) -> typing.Optional[builtins.str]:
            """
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            """
            result = self._values.get("effect")
            return result

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: resource: Which resources you allow the action on.
            """
            result = self._values.get("resource")
            return result

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
        "description": "description",
        "max_session_duration": "maxSessionDuration",
        "policies": "policies",
    },
)
class RosRoleProps:
    def __init__(
        self,
        *,
        assume_role_policy_document: typing.Union[RosRole.AssumeRolePolicyDocumentProperty, ros_cdk_core.IResolvable],
        role_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        max_session_duration: typing.Optional[jsii.Number] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRole.PoliciesProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::Role``.

        :param assume_role_policy_document: 
        :param role_name: 
        :param description: 
        :param max_session_duration: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "assume_role_policy_document": assume_role_policy_document,
            "role_name": role_name,
        }
        if description is not None:
            self._values["description"] = description
        if max_session_duration is not None:
            self._values["max_session_duration"] = max_session_duration
        if policies is not None:
            self._values["policies"] = policies

    @builtins.property
    def assume_role_policy_document(
        self,
    ) -> typing.Union[RosRole.AssumeRolePolicyDocumentProperty, ros_cdk_core.IResolvable]:
        """
        :Property: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        """
        result = self._values.get("assume_role_policy_document")
        assert result is not None, "Required property 'assume_role_policy_document' is missing"
        return result

    @builtins.property
    def role_name(self) -> builtins.str:
        """
        :Property: roleName: Specifies the role name, containing up to 64 characters.
        """
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Remark information, up to 1024 characters or Chinese characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def max_session_duration(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        maxSessionDuration: The maximum session duration of the RAM role.
        Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        The default value is used if the parameter is not specified.
        """
        result = self._values.get("max_session_duration")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRole.PoliciesProperty]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::SAMLProvider``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSAMLProviderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::SAMLProvider``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSAMLProvider, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: Arn: ARN.
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> typing.Any:
        """
        :Attribute: SAMLProviderName: IdP Name.
        """
        return jsii.get(self, "attrSamlProviderName")

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
    @jsii.member(jsii_name="samlProviderName")
    def saml_provider_name(self) -> builtins.str:
        """
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        """
        return jsii.get(self, "samlProviderName")

    @saml_provider_name.setter # type: ignore
    def saml_provider_name(self, value: builtins.str) -> None:
        jsii.set(self, "samlProviderName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description can contain a maximum of 256 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="samlMetadataDocument")
    def saml_metadata_document(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        """
        return jsii.get(self, "samlMetadataDocument")

    @saml_metadata_document.setter # type: ignore
    def saml_metadata_document(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "samlMetadataDocument", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="samlMetadataDocumentUrl")
    def saml_metadata_document_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        """
        return jsii.get(self, "samlMetadataDocumentUrl")

    @saml_metadata_document_url.setter # type: ignore
    def saml_metadata_document_url(self, value: typing.Optional[builtins.str]) -> None:
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
        saml_provider_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        saml_metadata_document: typing.Optional[builtins.str] = None,
        saml_metadata_document_url: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: 
        :param description: 
        :param saml_metadata_document: 
        :param saml_metadata_document_url: 
        """
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
    def saml_provider_name(self) -> builtins.str:
        """
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        """
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description can contain a maximum of 256 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def saml_metadata_document(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        """
        result = self._values.get("saml_metadata_document")
        return result

    @builtins.property
    def saml_metadata_document_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        """
        result = self._values.get("saml_metadata_document_url")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosUser(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.RosUser",
):
    """A ROS template type:  ``ALIYUN::RAM::User``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUser, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> typing.Any:
        """
        :Attribute: CreateDate: Create date of ram user.
        """
        return jsii.get(self, "attrCreateDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> typing.Any:
        """
        :Attribute: LastLoginDate: Last login date of ram user.
        """
        return jsii.get(self, "attrLastLoginDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> typing.Any:
        """
        :Attribute: UserId: Id of ram user.
        """
        return jsii.get(self, "attrUserId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> typing.Any:
        """
        :Attribute: UserName: Name of ram user.
        """
        return jsii.get(self, "attrUserName")

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
    @jsii.member(jsii_name="userName")
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        return jsii.get(self, "userName")

    @user_name.setter # type: ignore
    def user_name(self, value: builtins.str) -> None:
        jsii.set(self, "userName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="comments")
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Comments of ram user.
        """
        return jsii.get(self, "comments")

    @comments.setter # type: ignore
    def comments(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "comments", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        """
        return jsii.get(self, "displayName")

    @display_name.setter # type: ignore
    def display_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "displayName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="email")
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: Email of ram user.
        """
        return jsii.get(self, "email")

    @email.setter # type: ignore
    def email(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "email", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groups")
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: A name of a group to which you want to add the user.
        """
        return jsii.get(self, "groups")

    @groups.setter # type: ignore
    def groups(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "groups", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loginProfile")
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.LoginProfileProperty"]]:
        """
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        """
        return jsii.get(self, "loginProfile")

    @login_profile.setter # type: ignore
    def login_profile(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosUser.LoginProfileProperty"]],
    ) -> None:
        jsii.set(self, "loginProfile", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mobilePhone")
    def mobile_phone(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobilePhone: Phone number of ram user.
        """
        return jsii.get(self, "mobilePhone")

    @mobile_phone.setter # type: ignore
    def mobile_phone(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mobilePhone", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="policies")
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.PoliciesProperty"]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        return jsii.get(self, "policies")

    @policies.setter # type: ignore
    def policies(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.PoliciesProperty"]]]],
    ) -> None:
        jsii.set(self, "policies", value)

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
            password: typing.Optional[builtins.str] = None,
            password_reset_required: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param mfa_bind_required: 
            :param password: 
            :param password_reset_required: 
            """
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
            """
            :Property: mfaBindRequired: Specifies whether the user must bind a multi factor authentication device at the next logon.
            """
            result = self._values.get("mfa_bind_required")
            return result

        @builtins.property
        def password(self) -> typing.Optional[builtins.str]:
            """
            :Property: password: The password for the user.
            """
            result = self._values.get("password")
            return result

        @builtins.property
        def password_reset_required(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            """
            :Property: passwordResetRequired: Specifies whether the user is required to set a new password the next time the user logs in to the AliCloud Management Console.
            """
            result = self._values.get("password_reset_required")
            return result

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
            policy_name: builtins.str,
            description: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param policy_document: 
            :param policy_name: 
            :param description: 
            """
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
            """
            :Property: policyDocument: A policy document that describes what actions are allowed on which resources.
            """
            result = self._values.get("policy_document")
            assert result is not None, "Required property 'policy_document' is missing"
            return result

        @builtins.property
        def policy_name(self) -> builtins.str:
            """
            :Property: policyName: Specifies the authorization policy name, containing up to 128 characters.
            """
            result = self._values.get("policy_name")
            assert result is not None, "Required property 'policy_name' is missing"
            return result

        @builtins.property
        def description(self) -> typing.Optional[builtins.str]:
            """
            :Property: description: Specifies the authorization policy description, containing up to 1024 characters.
            """
            result = self._values.get("description")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PoliciesProperty(%s)" % ", ".join(
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
            statement: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.StatementProperty"]]]] = None,
            version: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param statement: 
            :param version: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if statement is not None:
                self._values["statement"] = statement
            if version is not None:
                self._values["version"] = version

        @builtins.property
        def statement(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosUser.StatementProperty"]]]]:
            """
            :Property: statement: A policy consists of one or more statements.
            """
            result = self._values.get("statement")
            return result

        @builtins.property
        def version(self) -> typing.Optional[builtins.str]:
            """
            :Property: version: You can use versions to track changes to a managed policy.
            """
            result = self._values.get("version")
            return result

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
            action: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
            condition: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            effect: typing.Optional[builtins.str] = None,
            resource: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        ) -> None:
            """
            :param action: 
            :param condition: 
            :param effect: 
            :param resource: 
            """
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
            """
            :Property: action: What actions you will allow.
            """
            result = self._values.get("action")
            return result

        @builtins.property
        def condition(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            """
            :Property: condition: What conditions should be satisfied.
            """
            result = self._values.get("condition")
            return result

        @builtins.property
        def effect(self) -> typing.Optional[builtins.str]:
            """
            :Property: effect: What the effect will be when the user requests access-either allow or deny.
            """
            result = self._values.get("effect")
            return result

        @builtins.property
        def resource(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
            """
            :Property: resource: Which resources you allow the action on.
            """
            result = self._values.get("resource")
            return result

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
        "display_name": "displayName",
        "email": "email",
        "groups": "groups",
        "login_profile": "loginProfile",
        "mobile_phone": "mobilePhone",
        "policies": "policies",
    },
)
class RosUserProps:
    def __init__(
        self,
        *,
        user_name: builtins.str,
        comments: typing.Optional[builtins.str] = None,
        display_name: typing.Optional[builtins.str] = None,
        email: typing.Optional[builtins.str] = None,
        groups: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]] = None,
        mobile_phone: typing.Optional[builtins.str] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::User``.

        :param user_name: 
        :param comments: 
        :param display_name: 
        :param email: 
        :param groups: 
        :param login_profile: 
        :param mobile_phone: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }
        if comments is not None:
            self._values["comments"] = comments
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

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

    @builtins.property
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Comments of ram user.
        """
        result = self._values.get("comments")
        return result

    @builtins.property
    def display_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        """
        result = self._values.get("display_name")
        return result

    @builtins.property
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: Email of ram user.
        """
        result = self._values.get("email")
        return result

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: A name of a group to which you want to add the user.
        """
        result = self._values.get("groups")
        return result

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]]:
        """
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        """
        result = self._values.get("login_profile")
        return result

    @builtins.property
    def mobile_phone(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobilePhone: Phone number of ram user.
        """
        result = self._values.get("mobile_phone")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS template type:  ``ALIYUN::RAM::UserToGroupAddition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserToGroupAdditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::RAM::UserToGroupAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosUserToGroupAddition, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        return jsii.get(self, "groupName")

    @group_name.setter # type: ignore
    def group_name(self, value: builtins.str) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="users")
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: users: list name of a users to which you want to add the group.
        """
        return jsii.get(self, "users")

    @users.setter # type: ignore
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
        group_name: builtins.str,
        users: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: 
        :param users: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: users: list name of a users to which you want to add the group.
        """
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::SAMLProvider``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SAMLProviderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::SAMLProvider``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(SAMLProvider, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: Arn: ARN.
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSamlProviderName")
    def attr_saml_provider_name(self) -> typing.Any:
        """
        :Attribute: SAMLProviderName: IdP Name.
        """
        return jsii.get(self, "attrSamlProviderName")


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
        saml_provider_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        saml_metadata_document: typing.Optional[builtins.str] = None,
        saml_metadata_document_url: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::SAMLProvider``.

        :param saml_provider_name: 
        :param description: 
        :param saml_metadata_document: 
        :param saml_metadata_document_url: 
        """
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
    def saml_provider_name(self) -> builtins.str:
        """
        :Property: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        """
        result = self._values.get("saml_provider_name")
        assert result is not None, "Required property 'saml_provider_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description can contain a maximum of 256 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def saml_metadata_document(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        """
        result = self._values.get("saml_metadata_document")
        return result

    @builtins.property
    def saml_metadata_document_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        """
        result = self._values.get("saml_metadata_document_url")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SAMLProviderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class User(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ram.User",
):
    """A ROS resource type:  ``ALIYUN::RAM::User``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::User``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(User, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCreateDate")
    def attr_create_date(self) -> typing.Any:
        """
        :Attribute: CreateDate: Create date of ram user.
        """
        return jsii.get(self, "attrCreateDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLastLoginDate")
    def attr_last_login_date(self) -> typing.Any:
        """
        :Attribute: LastLoginDate: Last login date of ram user.
        """
        return jsii.get(self, "attrLastLoginDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> typing.Any:
        """
        :Attribute: UserId: Id of ram user.
        """
        return jsii.get(self, "attrUserId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserName")
    def attr_user_name(self) -> typing.Any:
        """
        :Attribute: UserName: Name of ram user.
        """
        return jsii.get(self, "attrUserName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.UserProps",
    jsii_struct_bases=[],
    name_mapping={
        "user_name": "userName",
        "comments": "comments",
        "display_name": "displayName",
        "email": "email",
        "groups": "groups",
        "login_profile": "loginProfile",
        "mobile_phone": "mobilePhone",
        "policies": "policies",
    },
)
class UserProps:
    def __init__(
        self,
        *,
        user_name: builtins.str,
        comments: typing.Optional[builtins.str] = None,
        display_name: typing.Optional[builtins.str] = None,
        email: typing.Optional[builtins.str] = None,
        groups: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]] = None,
        login_profile: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]] = None,
        mobile_phone: typing.Optional[builtins.str] = None,
        policies: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::User``.

        :param user_name: 
        :param comments: 
        :param display_name: 
        :param email: 
        :param groups: 
        :param login_profile: 
        :param mobile_phone: 
        :param policies: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "user_name": user_name,
        }
        if comments is not None:
            self._values["comments"] = comments
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

    @builtins.property
    def user_name(self) -> builtins.str:
        """
        :Property: userName: Specifies the user name, containing up to 64 characters.
        """
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return result

    @builtins.property
    def comments(self) -> typing.Optional[builtins.str]:
        """
        :Property: comments: Comments of ram user.
        """
        result = self._values.get("comments")
        return result

    @builtins.property
    def display_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: displayName: Display name, up to 128 characters or Chinese characters.
        """
        result = self._values.get("display_name")
        return result

    @builtins.property
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: Email of ram user.
        """
        result = self._values.get("email")
        return result

    @builtins.property
    def groups(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: groups: A name of a group to which you want to add the user.
        """
        result = self._values.get("groups")
        return result

    @builtins.property
    def login_profile(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosUser.LoginProfileProperty]]:
        """
        :Property: loginProfile: Creates a login profile for users so that they can access the AliCloud Management Console.
        """
        result = self._values.get("login_profile")
        return result

    @builtins.property
    def mobile_phone(self) -> typing.Optional[builtins.str]:
        """
        :Property: mobilePhone: Phone number of ram user.
        """
        result = self._values.get("mobile_phone")
        return result

    @builtins.property
    def policies(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosUser.PoliciesProperty]]]]:
        """
        :Property: policies: Describes what actions are allowed on what resources.
        """
        result = self._values.get("policies")
        return result

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
    """A ROS resource type:  ``ALIYUN::RAM::UserToGroupAddition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserToGroupAdditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::RAM::UserToGroupAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(UserToGroupAddition, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ram.UserToGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={"group_name": "groupName", "users": "users"},
)
class UserToGroupAdditionProps:
    def __init__(
        self,
        *,
        group_name: builtins.str,
        users: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        """Properties for defining a ``ALIYUN::RAM::UserToGroupAddition``.

        :param group_name: 
        :param users: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "group_name": group_name,
            "users": users,
        }

    @builtins.property
    def group_name(self) -> builtins.str:
        """
        :Property: groupName: Specifies the group name, containing up to 64 characters.
        """
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return result

    @builtins.property
    def users(self) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: users: list name of a users to which you want to add the group.
        """
        result = self._values.get("users")
        assert result is not None, "Required property 'users' is missing"
        return result

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
    "RosRole",
    "RosRoleProps",
    "RosSAMLProvider",
    "RosSAMLProviderProps",
    "RosUser",
    "RosUserProps",
    "RosUserToGroupAddition",
    "RosUserToGroupAdditionProps",
    "SAMLProvider",
    "SAMLProviderProps",
    "User",
    "UserProps",
    "UserToGroupAddition",
    "UserToGroupAdditionProps",
]

publication.publish()
