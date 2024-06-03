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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Alias(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Alias",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KMS::Alias``, which is used to create an alias for a Customer Master Key (CMK).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAlias``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AliasProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d84b55de613bdcf76b748f0287cf92a7777fa6cdc025c0be9895ed15affd346)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff6b6dab73b821aa5164da8e9cebb8a5a110ebfbdf74afd86c36f6faf7e976cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbb40cabf6ec100e612e7c6e5b5ef4d791747a98725e8889e06d0e990d6255ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AliasProps":
        return typing.cast("AliasProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AliasProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bea75ad11078e02400815d87b4b62b7cc51b736ba7545606993df9274440e2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e23fc6758295d3084ce879882e3a9037e9861914a2bed99d4556dad7d8292af)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.AliasProps",
    jsii_struct_bases=[],
    name_mapping={"alias_name": "aliasName", "key_id": "keyId"},
)
class AliasProps:
    def __init__(
        self,
        *,
        alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``Alias``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias

        :param alias_name: Property aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        :param key_id: Property keyId: Globally unique identifier of the CMK.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f889d0cb8aa4e3402d3225e419e6628ef6c5aa948f4b5a44d8d29108e001e232)
            check_type(argname="argument alias_name", value=alias_name, expected_type=type_hints["alias_name"])
            check_type(argname="argument key_id", value=key_id, expected_type=type_hints["key_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aliasName: - The display name of the key.

        You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property keyId: Globally unique identifier of the CMK.'''
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KMS::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5be47603a708349673ddd311c254622f5ed4df7706671e91021385eb3281bfd7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5c59bc744bfd3a88c1ccc09da7f2403e8c2db19c66ae614c6cfe92658312a27)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a6e6ba14e5db40cb3cfd88bdf808289c6ba2a59ee7a90c1ef5f4530961e7d72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ebac81317c2b68b793aa4a6cdcdb49ce0121248e8106a5490d64e6c1fc5a702)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8dee011145b4df4e6c57705ebe9ef6ba3382023982c83cc5591aa11f22ab6676)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_version": "productVersion",
        "connection": "connection",
        "instance_charge_type": "instanceChargeType",
        "key_num": "keyNum",
        "log": "log",
        "log_storage": "logStorage",
        "period": "period",
        "period_unit": "periodUnit",
        "renew_period": "renewPeriod",
        "renew_status": "renewStatus",
        "secret_num": "secretNum",
        "spec": "spec",
        "vpc_num": "vpcNum",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        product_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.ConnectionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance

        :param product_version: Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).
        :param connection: Property connection:.
        :param instance_charge_type: Property instanceChargeType: Billing method of the KMS instance, default to Subscription.
        :param key_num: Property keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
        :param log: Property log: Whether to enable log.
        :param log_storage: Property logStorage: Log storage.
        :param period: Property period: The subscription duration of the KMS instance. If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36 If PeriodUnit is Year, the valid range is 1, 2, 3
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param renew_period: Property renewPeriod: Automatic renewal period, in months.
        :param renew_status: Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
        :param secret_num: Property secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
        :param spec: Property spec: The computation performance level of the KMS instance.
        :param vpc_num: Property vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb9152c4b0e96a7f64ffa9387baf32ea845f1262f0483a395c13be747e8e5f26)
            check_type(argname="argument product_version", value=product_version, expected_type=type_hints["product_version"])
            check_type(argname="argument connection", value=connection, expected_type=type_hints["connection"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument key_num", value=key_num, expected_type=type_hints["key_num"])
            check_type(argname="argument log", value=log, expected_type=type_hints["log"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument renew_status", value=renew_status, expected_type=type_hints["renew_status"])
            check_type(argname="argument secret_num", value=secret_num, expected_type=type_hints["secret_num"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_num", value=vpc_num, expected_type=type_hints["vpc_num"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_version": product_version,
        }
        if connection is not None:
            self._values["connection"] = connection
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if key_num is not None:
            self._values["key_num"] = key_num
        if log is not None:
            self._values["log"] = log
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if renew_status is not None:
            self._values["renew_status"] = renew_status
        if secret_num is not None:
            self._values["secret_num"] = secret_num
        if spec is not None:
            self._values["spec"] = spec
        if vpc_num is not None:
            self._values["vpc_num"] = vpc_num

    @builtins.property
    def product_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).'''
        result = self._values.get("product_version")
        assert result is not None, "Required property 'product_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionProperty"]]:
        '''Property connection:.'''
        result = self._values.get("connection")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionProperty"]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: Billing method of the KMS instance, default to Subscription.'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyNum: Maximum number of stored keys.

        It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("key_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property log: Whether to enable log.'''
        result = self._values.get("log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logStorage: Log storage.'''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription duration of the KMS instance.

        If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
        If PeriodUnit is Year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewPeriod: Automatic renewal period, in months.'''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).'''
        result = self._values.get("renew_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secretNum: Maximum number of secrets.

        It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("secret_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spec: The computation performance level of the KMS instance.'''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcNum: The number of managed accesses.

        The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("vpc_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Key(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Key",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KMS::Key``, which is used to create a customer master key (CMK).

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosKey``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["KeyProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43ec175dd3033fca91582b45c33da55f637eff186c676a14e5bad3cac7b6816a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyId: The globally unique identifier for the CMK.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cae35e8230f74e36ec54450276752b9984d535704c48c6e1ac7f177f14033aa1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc3dbe53936b65bec7e2c7f0e491650b894a9ac687a2dafa949a92d43fc68b88)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "KeyProps":
        return typing.cast("KeyProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "KeyProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3dae2a3baca874754023d7b619f46d6c5e7547df4927ee20b8a2884c9e95ab2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fb944f3adac47ae0c87c3bed17c7ce39613e5bbd13f6166b7b3f5f3f4b5bb5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.KeyProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "dkms_instance_id": "dkmsInstanceId",
        "enable": "enable",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "key_spec": "keySpec",
        "key_usage": "keyUsage",
        "pending_window_in_days": "pendingWindowInDays",
        "policy": "policy",
        "protection_level": "protectionLevel",
        "rotation_interval": "rotationInterval",
    },
)
class KeyProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pending_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Key``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key

        :param description: Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        :param dkms_instance_id: Property dkmsInstanceId: The ID of the dedicated KMS instance.
        :param enable: Property enable: Specifies whether the key is enabled. Defaults to true.
        :param enable_automatic_rotation: Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        :param key_spec: Property keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        :param key_usage: Property keyUsage: The usage of the CMK. Valid values: ENCRYPT/DECRYPT: encrypts or decrypts data. SIGN/VERIFY: generates or verifies a digital signature. If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
        :param pending_window_in_days: Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        :param policy: Property policy: The policy of key.
        :param protection_level: Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM: If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM. If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        :param rotation_interval: Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46d9a9efb2e8afe83cf572cd8a027ba567e0f1734b5dbbb6d462d22b88711c5d)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dkms_instance_id", value=dkms_instance_id, expected_type=type_hints["dkms_instance_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument enable_automatic_rotation", value=enable_automatic_rotation, expected_type=type_hints["enable_automatic_rotation"])
            check_type(argname="argument key_spec", value=key_spec, expected_type=type_hints["key_spec"])
            check_type(argname="argument key_usage", value=key_usage, expected_type=type_hints["key_usage"])
            check_type(argname="argument pending_window_in_days", value=pending_window_in_days, expected_type=type_hints["pending_window_in_days"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument protection_level", value=protection_level, expected_type=type_hints["protection_level"])
            check_type(argname="argument rotation_interval", value=rotation_interval, expected_type=type_hints["rotation_interval"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if dkms_instance_id is not None:
            self._values["dkms_instance_id"] = dkms_instance_id
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
        if policy is not None:
            self._values["policy"] = policy
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the CMK.

        Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dkmsInstanceId: The ID of the dedicated KMS instance.'''
        result = self._values.get("dkms_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enable: Specifies whether the key is enabled.

        Defaults to true.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutomaticRotation: Whether to enable automatic key rotation.

        Valid value: true/false (default)
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keySpec: Key type.

        Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        result = self._values.get("key_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyUsage: The usage of the CMK.

        Valid values:
        ENCRYPT/DECRYPT: encrypts or decrypts data.
        SIGN/VERIFY: generates or verifies a digital signature.
        If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
        '''
        result = self._values.get("key_usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pendingWindowInDays: The waiting period, specified in number of days.

        During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        '''
        result = self._values.get("pending_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property policy: The policy of key.'''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property protectionLevel: The protection level of the CMK to create.

        Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rotationInterval: The time period for automatic rotation.

        The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "KeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlias(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosAlias",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KMS::Alias``, which is used to create an alias for a Customer Master Key (CMK).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Alias`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAliasProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__58ae2b2ab6cdf6c54fb0e37c0774cc63f395eea609ba3da41129828a48b7257a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c7eaa5bae0816bcf2b2723748af01a54e03f60a6c8f1916eb920e7cdef77e32c)
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
    @jsii.member(jsii_name="aliasName")
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aliasName"))

    @alias_name.setter
    def alias_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b20ffbbca84f490bd06e47e714c9ac73149297bbc454a3cdf8640bdd70e28b3d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliasName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a0aff505d1fcb79e4b680b1d68789117f0752cf950a7731989a040a15f61e17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="keyId")
    def key_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyId: Globally unique identifier of the CMK.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "keyId"))

    @key_id.setter
    def key_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4c2bd31c15e61742d8e2c02643b0d230d57130ca216980a06ac13ba2943e59b4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosAlias``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-alias

        :param alias_name: 
        :param key_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__883b1f45a3bc36d63bcb4dc59937e8d0a3fee32b273870433b7176fb904e0412)
            check_type(argname="argument alias_name", value=alias_name, expected_type=type_hints["alias_name"])
            check_type(argname="argument key_id", value=key_id, expected_type=type_hints["key_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "alias_name": alias_name,
            "key_id": key_id,
        }

    @builtins.property
    def alias_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aliasName: - The display name of the key. You can use the alias to call APIs such as Encrypt, GenerateDataKey, and DescribeKey. - Not including the prefix, the minimum length of an alias is 1 and the maximum length is 255. - The prefix alias/ must be included.
        '''
        result = self._values.get("alias_name")
        assert result is not None, "Required property 'alias_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def key_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: keyId: Globally unique identifier of the CMK.
        '''
        result = self._values.get("key_id")
        assert result is not None, "Required property 'key_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAliasProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KMS::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7aa507f4b88b71cc63b3432146b5a3ed4ea487eeda2fc3b16ea6f61c999cd74)
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
            type_hints = typing.get_type_hints(_typecheckingstub__34ad6b643a596a82c1f4631417b20e756e40cec8b5df5ac4de69930a1ddfef27)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__4f79b8649ff3304ab7a94fb31870db38b962e14315abf3fb95d1da12732e4e63)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="productVersion")
    def product_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "productVersion"))

    @product_version.setter
    def product_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47532b154608e2fccf7f7c2d1724069eece3992b75f9f7f93582095ece2b9825)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "productVersion", value)

    @builtins.property
    @jsii.member(jsii_name="connection")
    def connection(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionProperty"]]:
        '''
        :Property: connection:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionProperty"]], jsii.get(self, "connection"))

    @connection.setter
    def connection(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.ConnectionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55782b64eadd58b80585cfb5767455661d51ffb27e47a814d987f1998604ca85)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connection", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Billing method of the KMS instance, default to Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb232af86196366cb9b450b226f3d78ef1962a3746e1886bed81f5814acea906)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="keyNum")
    def key_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyNum"))

    @key_num.setter
    def key_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__134cb44236e3412b5ad791092e0bfb72594dfd228d324593ee8df3571be3a720)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyNum", value)

    @builtins.property
    @jsii.member(jsii_name="log")
    def log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: log: Whether to enable log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "log"))

    @log.setter
    def log(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b6da23690ed14f4d03e4558d475aef4f03d21f211a2eba3a87c3ec5be097e4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "log", value)

    @builtins.property
    @jsii.member(jsii_name="logStorage")
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Log storage.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logStorage"))

    @log_storage.setter
    def log_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__753344dc90bba19bae341f29067662ecf3e2bb984cc6a7a92fa4ef76f7b9f9b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStorage", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration of the KMS instance.
        If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
        If PeriodUnit is Year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8c00e7d4e460e194d7a288ffb0b5984020217c77b06b0349adc39f8541dc71c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0cb0f0e728c582089d1ed32631bda9a0fcac76ea80ffbfba1b1a14b18dff77d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewPeriod: Automatic renewal period, in months.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4aafb23d8d2b51d86d4234b17e34d87d3897dbb2aaa170069ab6204f5a0801bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="renewStatus")
    def renew_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewStatus"))

    @renew_status.setter
    def renew_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6369fdafec430f02570793a8ecdf6174b58bfec80ec8172488268faef99cb1e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewStatus", value)

    @builtins.property
    @jsii.member(jsii_name="secretNum")
    def secret_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secretNum"))

    @secret_num.setter
    def secret_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9201acceb4ddd2e37d83367ddc8df6f4319dca851c590b639c2fdcfd227f56d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretNum", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: The computation performance level of the KMS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c9f043bdf1d308ce5fffd7501eb40122b988ff59b55dd15515b57212ff3c349)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @builtins.property
    @jsii.member(jsii_name="vpcNum")
    def vpc_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcNum"))

    @vpc_num.setter
    def vpc_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39d9569123e4037415e21ed20cf917ab24d2f5b0c330e82031237fe94f6b89ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcNum", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kms.RosInstance.ConnectionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "vpc_id": "vpcId",
            "v_switch_ids": "vSwitchIds",
            "zone_ids": "zoneIds",
        },
    )
    class ConnectionProperty:
        def __init__(
            self,
            *,
            vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
            zone_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        ) -> None:
            '''
            :param vpc_id: 
            :param v_switch_ids: 
            :param zone_ids: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__677ffbba46e142a97ae249f70fc992fda98db6fd14cb049c07cd2a35c88de872)
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
                check_type(argname="argument zone_ids", value=zone_ids, expected_type=type_hints["zone_ids"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "vpc_id": vpc_id,
                "v_switch_ids": v_switch_ids,
                "zone_ids": zone_ids,
            }

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vpcId: Set the private network VPC ID for the KMS instance.
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: vSwitchIds: Set up a switch under dual availability zones, and the switch has at least 1 available IP.
            '''
            result = self._values.get("v_switch_ids")
            assert result is not None, "Required property 'v_switch_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        @builtins.property
        def zone_ids(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
            '''
            :Property: zoneIds: Set up two Availability Zones for the KMS instance. Improve service availability and disaster recovery capabilities through dual availability zone load balancing.
            '''
            result = self._values.get("zone_ids")
            assert result is not None, "Required property 'zone_ids' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConnectionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "product_version": "productVersion",
        "connection": "connection",
        "instance_charge_type": "instanceChargeType",
        "key_num": "keyNum",
        "log": "log",
        "log_storage": "logStorage",
        "period": "period",
        "period_unit": "periodUnit",
        "renew_period": "renewPeriod",
        "renew_status": "renewStatus",
        "secret_num": "secretNum",
        "spec": "spec",
        "vpc_num": "vpcNum",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        product_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-instance

        :param product_version: 
        :param connection: 
        :param instance_charge_type: 
        :param key_num: 
        :param log: 
        :param log_storage: 
        :param period: 
        :param period_unit: 
        :param renew_period: 
        :param renew_status: 
        :param secret_num: 
        :param spec: 
        :param vpc_num: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b481ce53e06a18edaf5c06473f13bf4055e285a44e3bc5fbc6a3af9d0443acb4)
            check_type(argname="argument product_version", value=product_version, expected_type=type_hints["product_version"])
            check_type(argname="argument connection", value=connection, expected_type=type_hints["connection"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument key_num", value=key_num, expected_type=type_hints["key_num"])
            check_type(argname="argument log", value=log, expected_type=type_hints["log"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
            check_type(argname="argument renew_status", value=renew_status, expected_type=type_hints["renew_status"])
            check_type(argname="argument secret_num", value=secret_num, expected_type=type_hints["secret_num"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_num", value=vpc_num, expected_type=type_hints["vpc_num"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "product_version": product_version,
        }
        if connection is not None:
            self._values["connection"] = connection
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if key_num is not None:
            self._values["key_num"] = key_num
        if log is not None:
            self._values["log"] = log
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if renew_period is not None:
            self._values["renew_period"] = renew_period
        if renew_status is not None:
            self._values["renew_status"] = renew_status
        if secret_num is not None:
            self._values["secret_num"] = secret_num
        if spec is not None:
            self._values["spec"] = spec
        if vpc_num is not None:
            self._values["vpc_num"] = vpc_num

    @builtins.property
    def product_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: productVersion: KMS Instance commodity type (software/software-small/hardware/hardware-small).
        '''
        result = self._values.get("product_version")
        assert result is not None, "Required property 'product_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def connection(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionProperty]]:
        '''
        :Property: connection:
        '''
        result = self._values.get("connection")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionProperty]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceChargeType: Billing method of the KMS instance, default to Subscription.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyNum: Maximum number of stored keys. It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("key_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: log: Whether to enable log.
        '''
        result = self._values.get("log")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Log storage.
        '''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription duration of the KMS instance.
        If PeriodUnit is Month, the valid range is 1, 2, 3, 6, 12, 24, 36
        If PeriodUnit is Year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewPeriod: Automatic renewal period, in months.
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewStatus: Renewal options (manual renewal, automatic renewal, no renewal).
        '''
        result = self._values.get("renew_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: secretNum: Maximum number of secrets. It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("secret_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: The computation performance level of the KMS instance.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcNum: The number of managed accesses. The maximum number of VPCs that can access this KMS instance. It is required when the InstanceCharge is Subscription.
        '''
        result = self._values.get("vpc_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosKey(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosKey",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KMS::Key``, which is used to create a customer master key (CMK).

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Key`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosKeyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28dd1fc1704c23bfb17c18b3e03ed5157b821276907a684ed5d60829c191ac7c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7e61cb3c251854069fcbf77c5bc7e6963a0bde8c8012b35b79d78af2d0463d5d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyId")
    def attr_key_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyId: The globally unique identifier for the CMK.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__d31e59b3ed53a78c9421ce07e15473c2a79d40ac0591fe737294b14ee292df3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36a182a13fa1f0d5bc5717ba6ff7c4cc51041ba7fe11f79e657c273893458bb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dkmsInstanceId")
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dkmsInstanceId: The ID of the dedicated KMS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dkmsInstanceId"))

    @dkms_instance_id.setter
    def dkms_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc1281479c4004281d8d23b0d8c2863ea5ed1e5d154c236c08d90e65a5fef543)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dkmsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42022b89ff4eab02d371f5a96e8d40b52ebb0c7a3fe88d160638dc2796e36a1e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutomaticRotation")
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutomaticRotation"))

    @enable_automatic_rotation.setter
    def enable_automatic_rotation(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__766425b4ed72a9f7392891d89bc3e16ef9e03f0c1758870514f89e7924b4fc00)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutomaticRotation", value)

    @builtins.property
    @jsii.member(jsii_name="keySpec")
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keySpec"))

    @key_spec.setter
    def key_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__628647a3b81c9e938cb382743e20554a9428650359f767cd1afb401f7dada288)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keySpec", value)

    @builtins.property
    @jsii.member(jsii_name="keyUsage")
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyUsage: The usage of the CMK. Valid values:
        ENCRYPT/DECRYPT: encrypts or decrypts data.
        SIGN/VERIFY: generates or verifies a digital signature.
        If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyUsage"))

    @key_usage.setter
    def key_usage(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0130ffa22ecece206cd498917b5890c195261c7e45e4532b62759fb742d6709)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyUsage", value)

    @builtins.property
    @jsii.member(jsii_name="pendingWindowInDays")
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pendingWindowInDays"))

    @pending_window_in_days.setter
    def pending_window_in_days(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__781c18250da0a30c26157cb65f9af850defd7205556d3956e12ef75ae9a2d876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pendingWindowInDays", value)

    @builtins.property
    @jsii.member(jsii_name="policy")
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: The policy of key.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "policy"))

    @policy.setter
    def policy(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74fa52f37d0827fcd3ee4e9ab89495faba36bd5f7186d49bc97f547d19a13f5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policy", value)

    @builtins.property
    @jsii.member(jsii_name="protectionLevel")
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "protectionLevel"))

    @protection_level.setter
    def protection_level(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__37a33bda5bd597749acb91ea5b89bce164a6fc7c82fe12772030635be5d63de0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protectionLevel", value)

    @builtins.property
    @jsii.member(jsii_name="rotationInterval")
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rotationInterval"))

    @rotation_interval.setter
    def rotation_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__623040d58497cb35ae08e3ebab8b107624675590e71b906b3b817202c4019bde)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rotationInterval", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosKeyProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "dkms_instance_id": "dkmsInstanceId",
        "enable": "enable",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "key_spec": "keySpec",
        "key_usage": "keyUsage",
        "pending_window_in_days": "pendingWindowInDays",
        "policy": "policy",
        "protection_level": "protectionLevel",
        "rotation_interval": "rotationInterval",
    },
)
class RosKeyProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pending_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosKey``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key

        :param description: 
        :param dkms_instance_id: 
        :param enable: 
        :param enable_automatic_rotation: 
        :param key_spec: 
        :param key_usage: 
        :param pending_window_in_days: 
        :param policy: 
        :param protection_level: 
        :param rotation_interval: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bca81428725d92140b30bca0cde5fe7eff1fb7a179a783874638e54d197a2513)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dkms_instance_id", value=dkms_instance_id, expected_type=type_hints["dkms_instance_id"])
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument enable_automatic_rotation", value=enable_automatic_rotation, expected_type=type_hints["enable_automatic_rotation"])
            check_type(argname="argument key_spec", value=key_spec, expected_type=type_hints["key_spec"])
            check_type(argname="argument key_usage", value=key_usage, expected_type=type_hints["key_usage"])
            check_type(argname="argument pending_window_in_days", value=pending_window_in_days, expected_type=type_hints["pending_window_in_days"])
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
            check_type(argname="argument protection_level", value=protection_level, expected_type=type_hints["protection_level"])
            check_type(argname="argument rotation_interval", value=rotation_interval, expected_type=type_hints["rotation_interval"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if dkms_instance_id is not None:
            self._values["dkms_instance_id"] = dkms_instance_id
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
        if policy is not None:
            self._values["policy"] = policy
        if protection_level is not None:
            self._values["protection_level"] = protection_level
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dkmsInstanceId: The ID of the dedicated KMS instance.
        '''
        result = self._values.get("dkms_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enable: Specifies whether the key is enabled. Defaults to true.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        '''
        result = self._values.get("key_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_usage(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        keyUsage: The usage of the CMK. Valid values:
        ENCRYPT/DECRYPT: encrypts or decrypts data.
        SIGN/VERIFY: generates or verifies a digital signature.
        If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
        '''
        result = self._values.get("key_usage")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pending_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        '''
        result = self._values.get("pending_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def policy(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: policy: The policy of key.
        '''
        result = self._values.get("policy")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def protection_level(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        '''
        result = self._values.get("protection_level")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosKeyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSecret(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.RosSecret",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::KMS::Secret``, which is used to create a secret and store the initial version of the secret.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Secret`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSecretProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b5741850c81a916c5989f99983673f36656796a788dd2452c0129890cca34b6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__82342dcb733ac8f12ae557eec20e74bf96fab9bfe0ada4d96a171f07304ddfda)
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
        :Attribute: Arn: The Alibaba Cloud Resource Name (ARN).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecretName: The name of the secret.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5001f4e03d1fbf3010ba019dc79dafc2d7e67a944779bff473be408d339e3709)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="secretData")
    def secret_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secretData"))

    @secret_data.setter
    def secret_data(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e592678bac7b2e44a8e1faa56adc582b883e5cc627359bc3a572c7dd9077acb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretData", value)

    @builtins.property
    @jsii.member(jsii_name="secretName")
    def secret_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretName: The name of the secret.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "secretName"))

    @secret_name.setter
    def secret_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44f64c594383423fa8217bbe455c42334979fe7599a1e2be155e8433c24302d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretName", value)

    @builtins.property
    @jsii.member(jsii_name="versionId")
    def version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "versionId"))

    @version_id.setter
    def version_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__368499400378014795e926d0c21628cc96fcfe68a2f12d6d1cc85083c2eab863)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the secret.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd81ed7e4da6707b77c2a6c44590e77038568c23bb5fc64f0687e73e9b4a360c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="dkmsInstanceId")
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dkmsInstanceId: The ID of the dedicated KMS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dkmsInstanceId"))

    @dkms_instance_id.setter
    def dkms_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a443461ffa3d2965967b9e3f4fd1727f94df2f368653f0c40b266b24dc68fcc4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dkmsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableAutomaticRotation")
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
        true: specifies to enable automatic rotation.
        false: specifies to disable automatic rotation. This is the default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableAutomaticRotation"))

    @enable_automatic_rotation.setter
    def enable_automatic_rotation(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e28b945206719717bd068a5ab46a0a94f8b57c88367dbeba9ded4912c417daa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableAutomaticRotation", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKeyId")
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKeyId"))

    @encryption_key_id.setter
    def encryption_key_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5e805cbeabc12ed1f3fe2064cc47697c5f3a7f1ef3f97bd32051682d1f7b12f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKeyId", value)

    @builtins.property
    @jsii.member(jsii_name="extendedConfig")
    def extended_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "extendedConfig"))

    @extended_config.setter
    def extended_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__665295dced0f788c88dee7b072597085400890af7b839e9b4d4f1ad43ef0760d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extendedConfig", value)

    @builtins.property
    @jsii.member(jsii_name="forceDeleteWithoutRecovery")
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "forceDeleteWithoutRecovery"))

    @force_delete_without_recovery.setter
    def force_delete_without_recovery(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__795033bd5b14a25538ec652e70d4d75f08d62415172a80681e45b9e3132a99ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "forceDeleteWithoutRecovery", value)

    @builtins.property
    @jsii.member(jsii_name="recoveryWindowInDays")
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "recoveryWindowInDays"))

    @recovery_window_in_days.setter
    def recovery_window_in_days(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4741b8cfd5f57336e3648d331400d3faf7ac4a7a6ade01b7636919b8bfd534ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "recoveryWindowInDays", value)

    @builtins.property
    @jsii.member(jsii_name="rotationInterval")
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
        The value is in the integer[unit] format.
        The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rotationInterval"))

    @rotation_interval.setter
    def rotation_interval(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70e2c3e453870e9d9a91da230df7cdfc886d1bb569d5115856119a4ef13a07bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rotationInterval", value)

    @builtins.property
    @jsii.member(jsii_name="secretDataType")
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secretDataType"))

    @secret_data_type.setter
    def secret_data_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e5778fa12bdf5b2866701d0276fb95491b924155e2d5b609c7b78028d356f66)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretDataType", value)

    @builtins.property
    @jsii.member(jsii_name="secretType")
    def secret_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secretType: The type of the secret. Valid values:
        Generic: specifies a generic secret.
        Rds: specifies a managed ApsaraDB RDS secret.
        RAMCredentials: specifies a managed RAM secret.
        ECS: specifies a managed ECS secret.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "secretType"))

    @secret_type.setter
    def secret_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c583c4ecf1182cb5d94cbaf0233b3f9220393d289e2bbd0597f596bf44d5f129)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "secretType", value)

    @builtins.property
    @jsii.member(jsii_name="versionStages")
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "versionStages"))

    @version_stages.setter
    def version_stages(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e061489cfbc1b62d514a9dd61320690c12dc1867e894c55fa050f95752ffcb7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "versionStages", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.RosSecretProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_data": "secretData",
        "secret_name": "secretName",
        "version_id": "versionId",
        "description": "description",
        "dkms_instance_id": "dkmsInstanceId",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "encryption_key_id": "encryptionKeyId",
        "extended_config": "extendedConfig",
        "force_delete_without_recovery": "forceDeleteWithoutRecovery",
        "recovery_window_in_days": "recoveryWindowInDays",
        "rotation_interval": "rotationInterval",
        "secret_data_type": "secretDataType",
        "secret_type": "secretType",
        "version_stages": "versionStages",
    },
)
class RosSecretProps:
    def __init__(
        self,
        *,
        secret_data: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secret_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extended_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_stages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosSecret``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret

        :param secret_data: 
        :param secret_name: 
        :param version_id: 
        :param description: 
        :param dkms_instance_id: 
        :param enable_automatic_rotation: 
        :param encryption_key_id: 
        :param extended_config: 
        :param force_delete_without_recovery: 
        :param recovery_window_in_days: 
        :param rotation_interval: 
        :param secret_data_type: 
        :param secret_type: 
        :param version_stages: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c88ab19e625b93cc2d4808001c6ce0b82cc5b624a5edc61c91c78eb34dc557)
            check_type(argname="argument secret_data", value=secret_data, expected_type=type_hints["secret_data"])
            check_type(argname="argument secret_name", value=secret_name, expected_type=type_hints["secret_name"])
            check_type(argname="argument version_id", value=version_id, expected_type=type_hints["version_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dkms_instance_id", value=dkms_instance_id, expected_type=type_hints["dkms_instance_id"])
            check_type(argname="argument enable_automatic_rotation", value=enable_automatic_rotation, expected_type=type_hints["enable_automatic_rotation"])
            check_type(argname="argument encryption_key_id", value=encryption_key_id, expected_type=type_hints["encryption_key_id"])
            check_type(argname="argument extended_config", value=extended_config, expected_type=type_hints["extended_config"])
            check_type(argname="argument force_delete_without_recovery", value=force_delete_without_recovery, expected_type=type_hints["force_delete_without_recovery"])
            check_type(argname="argument recovery_window_in_days", value=recovery_window_in_days, expected_type=type_hints["recovery_window_in_days"])
            check_type(argname="argument rotation_interval", value=rotation_interval, expected_type=type_hints["rotation_interval"])
            check_type(argname="argument secret_data_type", value=secret_data_type, expected_type=type_hints["secret_data_type"])
            check_type(argname="argument secret_type", value=secret_type, expected_type=type_hints["secret_type"])
            check_type(argname="argument version_stages", value=version_stages, expected_type=type_hints["version_stages"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_data": secret_data,
            "secret_name": secret_name,
            "version_id": version_id,
        }
        if description is not None:
            self._values["description"] = description
        if dkms_instance_id is not None:
            self._values["dkms_instance_id"] = dkms_instance_id
        if enable_automatic_rotation is not None:
            self._values["enable_automatic_rotation"] = enable_automatic_rotation
        if encryption_key_id is not None:
            self._values["encryption_key_id"] = encryption_key_id
        if extended_config is not None:
            self._values["extended_config"] = extended_config
        if force_delete_without_recovery is not None:
            self._values["force_delete_without_recovery"] = force_delete_without_recovery
        if recovery_window_in_days is not None:
            self._values["recovery_window_in_days"] = recovery_window_in_days
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval
        if secret_data_type is not None:
            self._values["secret_data_type"] = secret_data_type
        if secret_type is not None:
            self._values["secret_type"] = secret_type
        if version_stages is not None:
            self._values["version_stages"] = version_stages

    @builtins.property
    def secret_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secret_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: secretName: The name of the secret.
        '''
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        versionId: The version number of the initial version. Version numbers are unique in each secret
        object.
        '''
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the secret.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dkmsInstanceId: The ID of the dedicated KMS instance.
        '''
        result = self._values.get("dkms_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
        true: specifies to enable automatic rotation.
        false: specifies to disable automatic rotation. This is the default value.
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        result = self._values.get("encryption_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extended_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
        '''
        result = self._values.get("extended_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        result = self._values.get("force_delete_without_recovery")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        '''
        result = self._values.get("recovery_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
        The value is in the integer[unit] format.
        The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secretDataType: The type of the secret value. Valid values:
        text (default value)
        binary
        '''
        result = self._values.get("secret_data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        secretType: The type of the secret. Valid values:
        Generic: specifies a generic secret.
        Rds: specifies a managed ApsaraDB RDS secret.
        RAMCredentials: specifies a managed RAM secret.
        ECS: specifies a managed ECS secret.
        '''
        result = self._values.get("secret_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        result = self._values.get("version_stages")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSecretProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Secret(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kms.Secret",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::KMS::Secret``, which is used to create a secret and store the initial version of the secret.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSecret``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SecretProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c01a9d2663b330d122a181ceae20fbf4a11ccbd73df0bbe5fa56d30a214b1c2a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrArn")
    def attr_arn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Arn: The Alibaba Cloud Resource Name (ARN).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrArn"))

    @builtins.property
    @jsii.member(jsii_name="attrSecretName")
    def attr_secret_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecretName: The name of the secret.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecretName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b56aabcede32074a59e68305a1d6492df9977cdfc0be745c6ee872b2717f78c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4cda74d4c644131b562330d024c6247437bea057b3cc54b8edfcae129089b93)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "SecretProps":
        return typing.cast("SecretProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "SecretProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4ee0ac33804576ccf694153c96d6f2034f3eb83600d336a6b58c33200b1bd51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cafaa91bc97a845b17ed7a8e26d4a8dbc2ba131c886716f8474b0d4452188ec8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kms.SecretProps",
    jsii_struct_bases=[],
    name_mapping={
        "secret_data": "secretData",
        "secret_name": "secretName",
        "version_id": "versionId",
        "description": "description",
        "dkms_instance_id": "dkmsInstanceId",
        "enable_automatic_rotation": "enableAutomaticRotation",
        "encryption_key_id": "encryptionKeyId",
        "extended_config": "extendedConfig",
        "force_delete_without_recovery": "forceDeleteWithoutRecovery",
        "recovery_window_in_days": "recoveryWindowInDays",
        "rotation_interval": "rotationInterval",
        "secret_data_type": "secretDataType",
        "secret_type": "secretType",
        "version_stages": "versionStages",
    },
)
class SecretProps:
    def __init__(
        self,
        *,
        secret_data: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        secret_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        version_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        extended_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        secret_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        version_stages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``Secret``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret

        :param secret_data: Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret value and stores it in the initial version.
        :param secret_name: Property secretName: The name of the secret.
        :param version_id: Property versionId: The version number of the initial version. Version numbers are unique in each secret object.
        :param description: Property description: The description of the secret.
        :param dkms_instance_id: Property dkmsInstanceId: The ID of the dedicated KMS instance.
        :param enable_automatic_rotation: Property enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values: true: specifies to enable automatic rotation. false: specifies to disable automatic rotation. This is the default value.
        :param encryption_key_id: Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value. If you do not specify this parameter, Secrets Manager automatically creates an encryption key to encrypt the secret. Note The KMS CMK must be a symmetric key.
        :param extended_config: Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
        :param force_delete_without_recovery: Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values: true false (default value)
        :param recovery_window_in_days: Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        :param rotation_interval: Property rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days). The value is in the integer[unit] format. The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
        :param secret_data_type: Property secretDataType: The type of the secret value. Valid values: text (default value) binary
        :param secret_type: Property secretType: The type of the secret. Valid values: Generic: specifies a generic secret. Rds: specifies a managed ApsaraDB RDS secret. RAMCredentials: specifies a managed RAM secret. ECS: specifies a managed ECS secret.
        :param version_stages: Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9760dfd361f32811b8303ce1e3434e76c146ed527c99e26d52593df25360ed54)
            check_type(argname="argument secret_data", value=secret_data, expected_type=type_hints["secret_data"])
            check_type(argname="argument secret_name", value=secret_name, expected_type=type_hints["secret_name"])
            check_type(argname="argument version_id", value=version_id, expected_type=type_hints["version_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument dkms_instance_id", value=dkms_instance_id, expected_type=type_hints["dkms_instance_id"])
            check_type(argname="argument enable_automatic_rotation", value=enable_automatic_rotation, expected_type=type_hints["enable_automatic_rotation"])
            check_type(argname="argument encryption_key_id", value=encryption_key_id, expected_type=type_hints["encryption_key_id"])
            check_type(argname="argument extended_config", value=extended_config, expected_type=type_hints["extended_config"])
            check_type(argname="argument force_delete_without_recovery", value=force_delete_without_recovery, expected_type=type_hints["force_delete_without_recovery"])
            check_type(argname="argument recovery_window_in_days", value=recovery_window_in_days, expected_type=type_hints["recovery_window_in_days"])
            check_type(argname="argument rotation_interval", value=rotation_interval, expected_type=type_hints["rotation_interval"])
            check_type(argname="argument secret_data_type", value=secret_data_type, expected_type=type_hints["secret_data_type"])
            check_type(argname="argument secret_type", value=secret_type, expected_type=type_hints["secret_type"])
            check_type(argname="argument version_stages", value=version_stages, expected_type=type_hints["version_stages"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "secret_data": secret_data,
            "secret_name": secret_name,
            "version_id": version_id,
        }
        if description is not None:
            self._values["description"] = description
        if dkms_instance_id is not None:
            self._values["dkms_instance_id"] = dkms_instance_id
        if enable_automatic_rotation is not None:
            self._values["enable_automatic_rotation"] = enable_automatic_rotation
        if encryption_key_id is not None:
            self._values["encryption_key_id"] = encryption_key_id
        if extended_config is not None:
            self._values["extended_config"] = extended_config
        if force_delete_without_recovery is not None:
            self._values["force_delete_without_recovery"] = force_delete_without_recovery
        if recovery_window_in_days is not None:
            self._values["recovery_window_in_days"] = recovery_window_in_days
        if rotation_interval is not None:
            self._values["rotation_interval"] = rotation_interval
        if secret_data_type is not None:
            self._values["secret_data_type"] = secret_data_type
        if secret_type is not None:
            self._values["secret_type"] = secret_type
        if version_stages is not None:
            self._values["version_stages"] = version_stages

    @builtins.property
    def secret_data(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secretData: The value of the secret that you want to create.

        Secrets Manager encrypts the secret
        value and stores it in the initial version.
        '''
        result = self._values.get("secret_data")
        assert result is not None, "Required property 'secret_data' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def secret_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property secretName: The name of the secret.'''
        result = self._values.get("secret_name")
        assert result is not None, "Required property 'secret_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def version_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property versionId: The version number of the initial version.

        Version numbers are unique in each secret
        object.
        '''
        result = self._values.get("version_id")
        assert result is not None, "Required property 'version_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the secret.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dkms_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dkmsInstanceId: The ID of the dedicated KMS instance.'''
        result = self._values.get("dkms_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_automatic_rotation(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableAutomaticRotation: Specifies whether to enable automatic rotation.

        Valid values:
        true: specifies to enable automatic rotation.
        false: specifies to disable automatic rotation. This is the default value.
        '''
        result = self._values.get("enable_automatic_rotation")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.

        If you do not specify this parameter, Secrets Manager automatically creates an encryption
        key to encrypt the secret.
        Note The KMS CMK must be a symmetric key.
        '''
        result = self._values.get("encryption_key_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def extended_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property extendedConfig: The extended configuration of the secret.

        This parameter specifies the properties of the secret of the specific type.
        '''
        result = self._values.get("extended_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def force_delete_without_recovery(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.

        If this parameter is set to true, the secret cannot be recovered. Valid values:
        true
        false (default value)
        '''
        result = self._values.get("force_delete_without_recovery")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def recovery_window_in_days(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.

        Default value: 30
        '''
        result = self._values.get("recovery_window_in_days")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rotation_interval(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rotationInterval: The interval for automatic rotation.

        Valid values: 6 hours to 8,760 hours (365 days).
        The value is in the integer[unit] format.
        The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
        '''
        result = self._values.get("rotation_interval")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_data_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secretDataType: The type of the secret value.

        Valid values:
        text (default value)
        binary
        '''
        result = self._values.get("secret_data_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def secret_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property secretType: The type of the secret.

        Valid values:
        Generic: specifies a generic secret.
        Rds: specifies a managed ApsaraDB RDS secret.
        RAMCredentials: specifies a managed RAM secret.
        ECS: specifies a managed ECS secret.
        '''
        result = self._values.get("secret_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def version_stages(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property versionStages: The stage labels that mark the secret version.

        ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        '''
        result = self._values.get("version_stages")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    "Instance",
    "InstanceProps",
    "Key",
    "KeyProps",
    "RosAlias",
    "RosAliasProps",
    "RosInstance",
    "RosInstanceProps",
    "RosKey",
    "RosKeyProps",
    "RosSecret",
    "RosSecretProps",
    "Secret",
    "SecretProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__2d84b55de613bdcf76b748f0287cf92a7777fa6cdc025c0be9895ed15affd346(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff6b6dab73b821aa5164da8e9cebb8a5a110ebfbdf74afd86c36f6faf7e976cd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbb40cabf6ec100e612e7c6e5b5ef4d791747a98725e8889e06d0e990d6255ca(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bea75ad11078e02400815d87b4b62b7cc51b736ba7545606993df9274440e2e(
    value: AliasProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e23fc6758295d3084ce879882e3a9037e9861914a2bed99d4556dad7d8292af(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f889d0cb8aa4e3402d3225e419e6628ef6c5aa948f4b5a44d8d29108e001e232(
    *,
    alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5be47603a708349673ddd311c254622f5ed4df7706671e91021385eb3281bfd7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5c59bc744bfd3a88c1ccc09da7f2403e8c2db19c66ae614c6cfe92658312a27(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a6e6ba14e5db40cb3cfd88bdf808289c6ba2a59ee7a90c1ef5f4530961e7d72(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ebac81317c2b68b793aa4a6cdcdb49ce0121248e8106a5490d64e6c1fc5a702(
    value: InstanceProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dee011145b4df4e6c57705ebe9ef6ba3382023982c83cc5591aa11f22ab6676(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb9152c4b0e96a7f64ffa9387baf32ea845f1262f0483a395c13be747e8e5f26(
    *,
    product_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43ec175dd3033fca91582b45c33da55f637eff186c676a14e5bad3cac7b6816a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[KeyProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cae35e8230f74e36ec54450276752b9984d535704c48c6e1ac7f177f14033aa1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc3dbe53936b65bec7e2c7f0e491650b894a9ac687a2dafa949a92d43fc68b88(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3dae2a3baca874754023d7b619f46d6c5e7547df4927ee20b8a2884c9e95ab2(
    value: KeyProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fb944f3adac47ae0c87c3bed17c7ce39613e5bbd13f6166b7b3f5f3f4b5bb5f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46d9a9efb2e8afe83cf572cd8a027ba567e0f1734b5dbbb6d462d22b88711c5d(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pending_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__58ae2b2ab6cdf6c54fb0e37c0774cc63f395eea609ba3da41129828a48b7257a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAliasProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7eaa5bae0816bcf2b2723748af01a54e03f60a6c8f1916eb920e7cdef77e32c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b20ffbbca84f490bd06e47e714c9ac73149297bbc454a3cdf8640bdd70e28b3d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a0aff505d1fcb79e4b680b1d68789117f0752cf950a7731989a040a15f61e17(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4c2bd31c15e61742d8e2c02643b0d230d57130ca216980a06ac13ba2943e59b4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__883b1f45a3bc36d63bcb4dc59937e8d0a3fee32b273870433b7176fb904e0412(
    *,
    alias_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    key_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7aa507f4b88b71cc63b3432146b5a3ed4ea487eeda2fc3b16ea6f61c999cd74(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34ad6b643a596a82c1f4631417b20e756e40cec8b5df5ac4de69930a1ddfef27(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4f79b8649ff3304ab7a94fb31870db38b962e14315abf3fb95d1da12732e4e63(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47532b154608e2fccf7f7c2d1724069eece3992b75f9f7f93582095ece2b9825(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55782b64eadd58b80585cfb5767455661d51ffb27e47a814d987f1998604ca85(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.ConnectionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb232af86196366cb9b450b226f3d78ef1962a3746e1886bed81f5814acea906(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__134cb44236e3412b5ad791092e0bfb72594dfd228d324593ee8df3571be3a720(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b6da23690ed14f4d03e4558d475aef4f03d21f211a2eba3a87c3ec5be097e4d(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__753344dc90bba19bae341f29067662ecf3e2bb984cc6a7a92fa4ef76f7b9f9b9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8c00e7d4e460e194d7a288ffb0b5984020217c77b06b0349adc39f8541dc71c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0cb0f0e728c582089d1ed32631bda9a0fcac76ea80ffbfba1b1a14b18dff77d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4aafb23d8d2b51d86d4234b17e34d87d3897dbb2aaa170069ab6204f5a0801bf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6369fdafec430f02570793a8ecdf6174b58bfec80ec8172488268faef99cb1e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9201acceb4ddd2e37d83367ddc8df6f4319dca851c590b639c2fdcfd227f56d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c9f043bdf1d308ce5fffd7501eb40122b988ff59b55dd15515b57212ff3c349(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39d9569123e4037415e21ed20cf917ab24d2f5b0c330e82031237fe94f6b89ed(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__677ffbba46e142a97ae249f70fc992fda98db6fd14cb049c07cd2a35c88de872(
    *,
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    zone_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b481ce53e06a18edaf5c06473f13bf4055e285a44e3bc5fbc6a3af9d0443acb4(
    *,
    product_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    connection: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.ConnectionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28dd1fc1704c23bfb17c18b3e03ed5157b821276907a684ed5d60829c191ac7c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosKeyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e61cb3c251854069fcbf77c5bc7e6963a0bde8c8012b35b79d78af2d0463d5d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d31e59b3ed53a78c9421ce07e15473c2a79d40ac0591fe737294b14ee292df3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36a182a13fa1f0d5bc5717ba6ff7c4cc51041ba7fe11f79e657c273893458bb7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc1281479c4004281d8d23b0d8c2863ea5ed1e5d154c236c08d90e65a5fef543(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42022b89ff4eab02d371f5a96e8d40b52ebb0c7a3fe88d160638dc2796e36a1e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__766425b4ed72a9f7392891d89bc3e16ef9e03f0c1758870514f89e7924b4fc00(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__628647a3b81c9e938cb382743e20554a9428650359f767cd1afb401f7dada288(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0130ffa22ecece206cd498917b5890c195261c7e45e4532b62759fb742d6709(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__781c18250da0a30c26157cb65f9af850defd7205556d3956e12ef75ae9a2d876(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74fa52f37d0827fcd3ee4e9ab89495faba36bd5f7186d49bc97f547d19a13f5c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__37a33bda5bd597749acb91ea5b89bce164a6fc7c82fe12772030635be5d63de0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__623040d58497cb35ae08e3ebab8b107624675590e71b906b3b817202c4019bde(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bca81428725d92140b30bca0cde5fe7eff1fb7a179a783874638e54d197a2513(
    *,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_usage: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pending_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    policy: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    protection_level: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b5741850c81a916c5989f99983673f36656796a788dd2452c0129890cca34b6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSecretProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82342dcb733ac8f12ae557eec20e74bf96fab9bfe0ada4d96a171f07304ddfda(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5001f4e03d1fbf3010ba019dc79dafc2d7e67a944779bff473be408d339e3709(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e592678bac7b2e44a8e1faa56adc582b883e5cc627359bc3a572c7dd9077acb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44f64c594383423fa8217bbe455c42334979fe7599a1e2be155e8433c24302d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__368499400378014795e926d0c21628cc96fcfe68a2f12d6d1cc85083c2eab863(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd81ed7e4da6707b77c2a6c44590e77038568c23bb5fc64f0687e73e9b4a360c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a443461ffa3d2965967b9e3f4fd1727f94df2f368653f0c40b266b24dc68fcc4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1e28b945206719717bd068a5ab46a0a94f8b57c88367dbeba9ded4912c417daa(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5e805cbeabc12ed1f3fe2064cc47697c5f3a7f1ef3f97bd32051682d1f7b12f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__665295dced0f788c88dee7b072597085400890af7b839e9b4d4f1ad43ef0760d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__795033bd5b14a25538ec652e70d4d75f08d62415172a80681e45b9e3132a99ae(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4741b8cfd5f57336e3648d331400d3faf7ac4a7a6ade01b7636919b8bfd534ff(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70e2c3e453870e9d9a91da230df7cdfc886d1bb569d5115856119a4ef13a07bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e5778fa12bdf5b2866701d0276fb95491b924155e2d5b609c7b78028d356f66(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c583c4ecf1182cb5d94cbaf0233b3f9220393d289e2bbd0597f596bf44d5f129(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e061489cfbc1b62d514a9dd61320690c12dc1867e894c55fa050f95752ffcb7d(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c88ab19e625b93cc2d4808001c6ce0b82cc5b624a5edc61c91c78eb34dc557(
    *,
    secret_data: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secret_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extended_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_stages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c01a9d2663b330d122a181ceae20fbf4a11ccbd73df0bbe5fa56d30a214b1c2a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SecretProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b56aabcede32074a59e68305a1d6492df9977cdfc0be745c6ee872b2717f78c1(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4cda74d4c644131b562330d024c6247437bea057b3cc54b8edfcae129089b93(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4ee0ac33804576ccf694153c96d6f2034f3eb83600d336a6b58c33200b1bd51(
    value: SecretProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cafaa91bc97a845b17ed7a8e26d4a8dbc2ba131c886716f8474b0d4452188ec8(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9760dfd361f32811b8303ce1e3434e76c146ed527c99e26d52593df25360ed54(
    *,
    secret_data: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    secret_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    version_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dkms_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_automatic_rotation: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    extended_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    force_delete_without_recovery: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    recovery_window_in_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rotation_interval: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_data_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    secret_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    version_stages: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
