'''
## Aliyun ROS KMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as KMS from '@alicloud/ros-cdk-kms';
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


class Alias(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Alias",
):
    '''A ROS resource type:  ``ALIYUN::KMS::Alias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AliasProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Alias``.

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
    jsii_type="@alicloud/ros-cdk-kms.AliasProps",
    jsii_struct_bases=[],
    name_mapping={"alias_name": "aliasName", "key_id": "keyId"},
)
class AliasProps:
    def __init__(
        self,
        *,
        alias_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Alias``.

        :param alias_name: Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        :param key_id: Property keyId: Globally unique identifier of the CMK.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aliasName: - The display name of the key.

        You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property keyId: Globally unique identifier of the CMK.'''
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS resource type:  ``ALIYUN::KMS::Key``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["KeyProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Key``.

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
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute KeyId: The globally unique identifier for the CMK.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKeyId"))


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
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_usage: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pending_window_in_days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Key``.

        :param description: Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        :param enable: Property enable: Specifies whether the key is enabled. Defaults to true.
        :param enable_automatic_rotation: Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        :param key_spec: Property keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        :param key_usage: Property keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        :param pending_window_in_days: Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        :param protection_level: Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM: If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM. If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        :param rotation_interval: Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
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
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the CMK.

        Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enable: Specifies whether the key is enabled.

        Defaults to true.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableAutomaticRotation: Whether to enable automatic key rotation.

        Valid value: true/false (default)
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keySpec: Key type.

        Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        result = self._values.get("key_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property keyUsage: The intended use of the CMK.

        Default value: ENCRYPT/DECRYPT.
        '''
        result = self._values.get("key_usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property pendingWindowInDays: The waiting period, specified in number of days.

        During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        '''
        result = self._values.get("pending_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property protectionLevel: The protection level of the CMK to create.

        Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property rotationInterval: The time period for automatic rotation.

        The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::KMS::Alias``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAliasProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Alias``.

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
    @jsii.member(jsii_name="aliasName")
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aliasName"))

    @alias_name.setter
    def alias_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aliasName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyId")
    def key_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: keyId: Globally unique identifier of the CMK.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "keyId"))

    @key_id.setter
    def key_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "keyId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosAliasProps",
    jsii_struct_bases=[],
    name_mapping={"alias_name": "aliasName", "key_id": "keyId"},
)
class RosAliasProps:
    def __init__(
        self,
        *,
        alias_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        key_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Alias``.

        :param alias_name: 
        :param key_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def key_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: keyId: Globally unique identifier of the CMK.
        '''
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    '''A ROS template type:  ``ALIYUN::KMS::Key``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosKeyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Key``.

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
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: KeyId: The globally unique identifier for the CMK.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrKeyId"))

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
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableAutomaticRotation")
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableAutomaticRotation"))

    @enable_automatic_rotation.setter
    def enable_automatic_rotation(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableAutomaticRotation", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keySpec")
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keySpec"))

    @key_spec.setter
    def key_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keySpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="keyUsage")
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "keyUsage"))

    @key_usage.setter
    def key_usage(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "keyUsage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pendingWindowInDays")
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "pendingWindowInDays"))

    @pending_window_in_days.setter
    def pending_window_in_days(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pendingWindowInDays", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protectionLevel")
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "protectionLevel"))

    @protection_level.setter
    def protection_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "protectionLevel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rotationInterval")
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "rotationInterval"))

    @rotation_interval.setter
    def rotation_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        key_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        key_usage: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pending_window_in_days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Key``.

        :param description: 
        :param enable: 
        :param enable_automatic_rotation: 
        :param key_spec: 
        :param key_usage: 
        :param pending_window_in_days: 
        :param protection_level: 
        :param rotation_interval: 
        '''
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
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        result = self._values.get("key_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        '''
        result = self._values.get("key_usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        '''
        result = self._values.get("pending_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::KMS::Secret``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSecretProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Secret``.

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
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SecretName: The name of the secret.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecretName"))

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
    @jsii.member(jsii_name="secretData")
    def secret_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "secretData"))

    @secret_data.setter
    def secret_data(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "secretData", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="secretName")
    def secret_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: secretName: The name of the secret.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "secretName"))

    @secret_name.setter
    def secret_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "secretName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="versionId")
    def version_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "versionId"))

    @version_id.setter
    def version_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "versionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the secret.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="encryptionKeyId")
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "encryptionKeyId"))

    @encryption_key_id.setter
    def encryption_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "encryptionKeyId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="forceDeleteWithoutRecovery")
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "forceDeleteWithoutRecovery"))

    @force_delete_without_recovery.setter
    def force_delete_without_recovery(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "forceDeleteWithoutRecovery", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="recoveryWindowInDays")
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "recoveryWindowInDays"))

    @recovery_window_in_days.setter
    def recovery_window_in_days(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "recoveryWindowInDays", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="secretDataType")
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "secretDataType"))

    @secret_data_type.setter
    def secret_data_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "secretDataType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="versionStages")
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "versionStages"))

    @version_stages.setter
    def version_stages(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
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
        secret_data: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        secret_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        version_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        secret_data_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        version_stages: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Secret``.

        :param secret_data: 
        :param secret_name: 
        :param version_id: 
        :param description: 
        :param encryption_key_id: 
        :param force_delete_without_recovery: 
        :param recovery_window_in_days: 
        :param secret_data_type: 
        :param version_stages: 
        '''
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
    def secret_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def secret_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: secretName: The name of the secret.
        '''
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def version_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        '''
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the secret.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        result = self._values.get("encryption_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        result = self._values.get("force_delete_without_recovery")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        '''
        result = self._values.get("recovery_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        '''
        result = self._values.get("secret_data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        result = self._values.get("version_stages")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
    '''A ROS resource type:  ``ALIYUN::KMS::Secret``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SecretProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::KMS::Secret``.

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
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute SecretName: The name of the secret.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSecretName"))


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
        secret_data: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        secret_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        version_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        encryption_key_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        secret_data_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        version_stages: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KMS::Secret``.

        :param secret_data: Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret value and stores it in the initial version.
        :param secret_name: Property secretName: The name of the secret.
        :param version_id: Property versionId: The version number of the initial version. Version numbers are unique in each secret object.
        :param description: Property description: The description of the secret.
        :param encryption_key_id: Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value. If you do not specify this parameter, Secrets Manager automatically creates an encryption key to encrypt the secret. Note The KMS CMK must be a symmetric key.
        :param force_delete_without_recovery: Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values: true false (default value)
        :param recovery_window_in_days: Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        :param secret_data_type: Property secretDataType: The type of the secret value. Valid values: text (default value) binary
        :param version_stages: Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
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
    def secret_data(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property secretData: The value of the secret that you want to create.

        Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def secret_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property secretName: The name of the secret.'''
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def version_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property versionId: The version number of the initial version.

        Version numbers are unique in each secret
        object.
        '''
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the secret.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.

        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        result = self._values.get("encryption_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.

        If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        result = self._values.get("force_delete_without_recovery")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.

        Default value: 30
        '''
        result = self._values.get("recovery_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property secretDataType: The type of the secret value.

        Valid values:
        text (default value)
        binary
        '''
        result = self._values.get("secret_data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property versionStages: The stage labels that mark the secret version.

        ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        result = self._values.get("version_stages")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

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
