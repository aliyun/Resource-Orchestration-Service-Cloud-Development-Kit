"""
## Aliyun ROS KMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_kms as KMS
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


class Alias(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Alias",
):
    """A ROS resource type:  ``ALIYUN::KMS::Alias``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AliasProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Alias, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.AliasProps",
    jsii_struct_bases=[],
    name_mapping={"alias_name": "aliasName", "key_id": "keyId"},
)
class AliasProps:
    def __init__(self, *, alias_name: builtins.str, key_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::KMS::Alias``.

        :param alias_name: 
        :param key_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        """
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return result

    @builtins.property
    def key_id(self) -> builtins.str:
        """
        :Property: keyId: Globally unique identifier of the CMK.
        """
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Key(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Key",
):
    """A ROS resource type:  ``ALIYUN::KMS::Key``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["KeyProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Key``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Key, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> typing.Any:
        """
        :Attribute: KeyId: The globally unique identifier for the CMK.
        """
        return jsii.get(self, "attrKeyId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.KeyProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "enable": "enable",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "key_spec": "keySpec",
        "key_usage": "keyUsage",
        "pending_window_in_days": "pendingWindowInDays",
        "protection_level": "protectionLevel",
        "rotation_interval": "rotationInterval",
    },
)
class KeyProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_spec: typing.Optional[builtins.str] = None,
        key_usage: typing.Optional[builtins.str] = None,
        pending_window_in_days: typing.Optional[jsii.Number] = None,
        protection_level: typing.Optional[builtins.str] = None,
        rotation_interval: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KMS::Key``.

        :param description: 
        :param enable: 
        :param enable_automatic_rotation: 
        :param key_spec: 
        :param key_usage: 
        :param pending_window_in_days: 
        :param protection_level: 
        :param rotation_interval: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if enable is not None:
            self._values["enable"] = enable
        if enable_automatic_rotation is not None:
            self._values["enable_automatic_rotation"] = enable_automatic_rotation
        if key_spec is not None:
            self._values["key_spec"] = key_spec
        if key_usage is not None:
            self._values["key_usage"] = key_usage
        if pending_window_in_days is not None:
            self._values["pending_window_in_days"] = pending_window_in_days
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        """
        result = self._values.get("enable")
        return result

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        """
        result = self._values.get("enable_automatic_rotation")
        return result

    @builtins.property
    def key_spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        """
        result = self._values.get("key_spec")
        return result

    @builtins.property
    def key_usage(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        """
        result = self._values.get("key_usage")
        return result

    @builtins.property
    def pending_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        """
        result = self._values.get("pending_window_in_days")
        return result

    @builtins.property
    def protection_level(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        """
        result = self._values.get("protection_level")
        return result

    @builtins.property
    def rotation_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        """
        result = self._values.get("rotation_interval")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlias(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosAlias",
):
    """A ROS template type:  ``ALIYUN::KMS::Alias``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAliasProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Alias``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlias, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="aliasName")
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        """
        return jsii.get(self, "aliasName")

    @alias_name.setter # type: ignore
    def alias_name(self, value: builtins.str) -> None:
        jsii.set(self, "aliasName", value)

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
    @jsii.member(jsii_name="keyId")
    def key_id(self) -> builtins.str:
        """
        :Property: keyId: Globally unique identifier of the CMK.
        """
        return jsii.get(self, "keyId")

    @key_id.setter # type: ignore
    def key_id(self, value: builtins.str) -> None:
        jsii.set(self, "keyId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosAliasProps",
    jsii_struct_bases=[],
    name_mapping={"alias_name": "aliasName", "key_id": "keyId"},
)
class RosAliasProps:
    def __init__(self, *, alias_name: builtins.str, key_id: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::KMS::Alias``.

        :param alias_name: 
        :param key_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(self) -> builtins.str:
        """
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        """
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return result

    @builtins.property
    def key_id(self) -> builtins.str:
        """
        :Property: keyId: Globally unique identifier of the CMK.
        """
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKey(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosKey",
):
    """A ROS template type:  ``ALIYUN::KMS::Key``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosKeyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Key``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosKey, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> typing.Any:
        """
        :Attribute: KeyId: The globally unique identifier for the CMK.
        """
        return jsii.get(self, "attrKeyId")

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
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        """
        return jsii.get(self, "enable")

    @enable.setter # type: ignore
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableAutomaticRotation")
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        """
        return jsii.get(self, "enableAutomaticRotation")

    @enable_automatic_rotation.setter # type: ignore
    def enable_automatic_rotation(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableAutomaticRotation", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keySpec")
    def key_spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        """
        return jsii.get(self, "keySpec")

    @key_spec.setter # type: ignore
    def key_spec(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keySpec", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyUsage")
    def key_usage(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        """
        return jsii.get(self, "keyUsage")

    @key_usage.setter # type: ignore
    def key_usage(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyUsage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="pendingWindowInDays")
    def pending_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        """
        return jsii.get(self, "pendingWindowInDays")

    @pending_window_in_days.setter # type: ignore
    def pending_window_in_days(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "pendingWindowInDays", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protectionLevel")
    def protection_level(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        """
        return jsii.get(self, "protectionLevel")

    @protection_level.setter # type: ignore
    def protection_level(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "protectionLevel", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rotationInterval")
    def rotation_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        """
        return jsii.get(self, "rotationInterval")

    @rotation_interval.setter # type: ignore
    def rotation_interval(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "rotationInterval", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosKeyProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "enable": "enable",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "key_spec": "keySpec",
        "key_usage": "keyUsage",
        "pending_window_in_days": "pendingWindowInDays",
        "protection_level": "protectionLevel",
        "rotation_interval": "rotationInterval",
    },
)
class RosKeyProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_spec: typing.Optional[builtins.str] = None,
        key_usage: typing.Optional[builtins.str] = None,
        pending_window_in_days: typing.Optional[jsii.Number] = None,
        protection_level: typing.Optional[builtins.str] = None,
        rotation_interval: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KMS::Key``.

        :param description: 
        :param enable: 
        :param enable_automatic_rotation: 
        :param key_spec: 
        :param key_usage: 
        :param pending_window_in_days: 
        :param protection_level: 
        :param rotation_interval: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if enable is not None:
            self._values["enable"] = enable
        if enable_automatic_rotation is not None:
            self._values["enable_automatic_rotation"] = enable_automatic_rotation
        if key_spec is not None:
            self._values["key_spec"] = key_spec
        if key_usage is not None:
            self._values["key_usage"] = key_usage
        if pending_window_in_days is not None:
            self._values["pending_window_in_days"] = pending_window_in_days
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        """
        result = self._values.get("enable")
        return result

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        """
        result = self._values.get("enable_automatic_rotation")
        return result

    @builtins.property
    def key_spec(self) -> typing.Optional[builtins.str]:
        """
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        """
        result = self._values.get("key_spec")
        return result

    @builtins.property
    def key_usage(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        """
        result = self._values.get("key_usage")
        return result

    @builtins.property
    def pending_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        """
        result = self._values.get("pending_window_in_days")
        return result

    @builtins.property
    def protection_level(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        """
        result = self._values.get("protection_level")
        return result

    @builtins.property
    def rotation_interval(self) -> typing.Optional[builtins.str]:
        """
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        """
        result = self._values.get("rotation_interval")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecret(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosSecret",
):
    """A ROS template type:  ``ALIYUN::KMS::Secret``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSecretProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Secret``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSecret, self, [scope, id, props, enable_resource_property_constraint])

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
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> typing.Any:
        """
        :Attribute: SecretName: The name of the secret.
        """
        return jsii.get(self, "attrSecretName")

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
    @jsii.member(jsii_name="secretData")
    def secret_data(self) -> builtins.str:
        """
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        """
        return jsii.get(self, "secretData")

    @secret_data.setter # type: ignore
    def secret_data(self, value: builtins.str) -> None:
        jsii.set(self, "secretData", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="secretName")
    def secret_name(self) -> builtins.str:
        """
        :Property: secretName: The name of the secret.
        """
        return jsii.get(self, "secretName")

    @secret_name.setter # type: ignore
    def secret_name(self, value: builtins.str) -> None:
        jsii.set(self, "secretName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="versionId")
    def version_id(self) -> builtins.str:
        """
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        """
        return jsii.get(self, "versionId")

    @version_id.setter # type: ignore
    def version_id(self, value: builtins.str) -> None:
        jsii.set(self, "versionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the secret.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="encryptionKeyId")
    def encryption_key_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        """
        return jsii.get(self, "encryptionKeyId")

    @encryption_key_id.setter # type: ignore
    def encryption_key_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "encryptionKeyId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="forceDeleteWithoutRecovery")
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        """
        return jsii.get(self, "forceDeleteWithoutRecovery")

    @force_delete_without_recovery.setter # type: ignore
    def force_delete_without_recovery(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "forceDeleteWithoutRecovery", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="recoveryWindowInDays")
    def recovery_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        """
        return jsii.get(self, "recoveryWindowInDays")

    @recovery_window_in_days.setter # type: ignore
    def recovery_window_in_days(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "recoveryWindowInDays", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="secretDataType")
    def secret_data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        """
        return jsii.get(self, "secretDataType")

    @secret_data_type.setter # type: ignore
    def secret_data_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "secretDataType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="versionStages")
    def version_stages(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        """
        return jsii.get(self, "versionStages")

    @version_stages.setter # type: ignore
    def version_stages(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "versionStages", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosSecretProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_data": "secretData",
        "secret_name": "secretName",
        "version_id": "versionId",
        "description": "description",
        "encryption_key_id": "encryptionKeyId",
        "force_delete_without_recovery": "forceDeleteWithoutRecovery",
        "recovery_window_in_days": "recoveryWindowInDays",
        "secret_data_type": "secretDataType",
        "version_stages": "versionStages",
    },
)
class RosSecretProps:
    def __init__(
        self,
        *,
        secret_data: builtins.str,
        secret_name: builtins.str,
        version_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        encryption_key_id: typing.Optional[builtins.str] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[jsii.Number] = None,
        secret_data_type: typing.Optional[builtins.str] = None,
        version_stages: typing.Optional[typing.List[builtins.str]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KMS::Secret``.

        :param secret_data: 
        :param secret_name: 
        :param version_id: 
        :param description: 
        :param encryption_key_id: 
        :param force_delete_without_recovery: 
        :param recovery_window_in_days: 
        :param secret_data_type: 
        :param version_stages: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "secret_data": secret_data,
            "secret_name": secret_name,
            "version_id": version_id,
        }
        if description is not None:
            self._values["description"] = description
        if encryption_key_id is not None:
            self._values["encryption_key_id"] = encryption_key_id
        if force_delete_without_recovery is not None:
            self._values["force_delete_without_recovery"] = force_delete_without_recovery
        if recovery_window_in_days is not None:
            self._values["recovery_window_in_days"] = recovery_window_in_days
        if secret_data_type is not None:
            self._values["secret_data_type"] = secret_data_type
        if version_stages is not None:
            self._values["version_stages"] = version_stages

    @builtins.property
    def secret_data(self) -> builtins.str:
        """
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        """
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return result

    @builtins.property
    def secret_name(self) -> builtins.str:
        """
        :Property: secretName: The name of the secret.
        """
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return result

    @builtins.property
    def version_id(self) -> builtins.str:
        """
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        """
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the secret.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def encryption_key_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        """
        result = self._values.get("encryption_key_id")
        return result

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        """
        result = self._values.get("force_delete_without_recovery")
        return result

    @builtins.property
    def recovery_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        """
        result = self._values.get("recovery_window_in_days")
        return result

    @builtins.property
    def secret_data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        """
        result = self._values.get("secret_data_type")
        return result

    @builtins.property
    def version_stages(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        """
        result = self._values.get("version_stages")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Secret(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Secret",
):
    """A ROS resource type:  ``ALIYUN::KMS::Secret``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SecretProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::KMS::Secret``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Secret, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> typing.Any:
        """
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        """
        return jsii.get(self, "attrArn")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> typing.Any:
        """
        :Attribute: SecretName: The name of the secret.
        """
        return jsii.get(self, "attrSecretName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.SecretProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_data": "secretData",
        "secret_name": "secretName",
        "version_id": "versionId",
        "description": "description",
        "encryption_key_id": "encryptionKeyId",
        "force_delete_without_recovery": "forceDeleteWithoutRecovery",
        "recovery_window_in_days": "recoveryWindowInDays",
        "secret_data_type": "secretDataType",
        "version_stages": "versionStages",
    },
)
class SecretProps:
    def __init__(
        self,
        *,
        secret_data: builtins.str,
        secret_name: builtins.str,
        version_id: builtins.str,
        description: typing.Optional[builtins.str] = None,
        encryption_key_id: typing.Optional[builtins.str] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[jsii.Number] = None,
        secret_data_type: typing.Optional[builtins.str] = None,
        version_stages: typing.Optional[typing.List[builtins.str]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::KMS::Secret``.

        :param secret_data: 
        :param secret_name: 
        :param version_id: 
        :param description: 
        :param encryption_key_id: 
        :param force_delete_without_recovery: 
        :param recovery_window_in_days: 
        :param secret_data_type: 
        :param version_stages: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "secret_data": secret_data,
            "secret_name": secret_name,
            "version_id": version_id,
        }
        if description is not None:
            self._values["description"] = description
        if encryption_key_id is not None:
            self._values["encryption_key_id"] = encryption_key_id
        if force_delete_without_recovery is not None:
            self._values["force_delete_without_recovery"] = force_delete_without_recovery
        if recovery_window_in_days is not None:
            self._values["recovery_window_in_days"] = recovery_window_in_days
        if secret_data_type is not None:
            self._values["secret_data_type"] = secret_data_type
        if version_stages is not None:
            self._values["version_stages"] = version_stages

    @builtins.property
    def secret_data(self) -> builtins.str:
        """
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        """
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return result

    @builtins.property
    def secret_name(self) -> builtins.str:
        """
        :Property: secretName: The name of the secret.
        """
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return result

    @builtins.property
    def version_id(self) -> builtins.str:
        """
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        """
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: The description of the secret.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def encryption_key_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        """
        result = self._values.get("encryption_key_id")
        return result

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        """
        result = self._values.get("force_delete_without_recovery")
        return result

    @builtins.property
    def recovery_window_in_days(self) -> typing.Optional[jsii.Number]:
        """
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        """
        result = self._values.get("recovery_window_in_days")
        return result

    @builtins.property
    def secret_data_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        """
        result = self._values.get("secret_data_type")
        return result

    @builtins.property
    def version_stages(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        """
        result = self._values.get("version_stages")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SecretProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Alias",
    "AliasProps",
    "Key",
    "KeyProps",
    "RosAlias",
    "RosAliasProps",
    "RosKey",
    "RosKeyProps",
    "RosSecret",
    "RosSecretProps",
    "Secret",
    "SecretProps",
]

publication.publish()
