'''
## Aliyun ROS FLINK Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as FLINK from '@alicloud/ros-cdk-flink';
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

import ros_cdk_core


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-flink.Instance",
):
    '''A ROS resource type:  ``ALIYUN::Flink::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Flink::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[InstanceProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order information.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-flink.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "charge_type": "chargeType",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "promotion_code": "promotionCode",
        "resource_spec": "resourceSpec",
        "use_promotion_code": "usePromotionCode",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        promotion_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosInstance.ResourceSpecProperty", typing.Dict[str, typing.Any]]]] = None,
        use_promotion_code: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Flink::Instance``.

        :param bucket: Property bucket: OSS bucket name.
        :param charge_type: Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go. PRE: subscription.
        :param instance_name: Property instanceName: The name of instance.
        :param vpc_id: Property vpcId: VPC ID.
        :param v_switch_ids: Property vSwitchIds: Virtual switch ID.
        :param zone_id: Property zoneId: The available area ID of the instance.
        :param auto_renew: Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal. false: Manual renewal.
        :param duration: Property duration: Number of order cycle. When ChargeType is configured as PRE, the duration parameter must be filled. If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36 If PricingCycle is year, the valid range is 1 to 3
        :param pricing_cycle: Property pricingCycle: The ordering cycle only supports ordering in the year and month.
        :param promotion_code: Property promotionCode: Promo Code.
        :param resource_spec: Property resourceSpec: Resource specifications. When ChargeType is configured as PRE, the resource specification parameters must be filled.
        :param use_promotion_code: Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.
        '''
        if __debug__:
            def stub(
                *,
                bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                promotion_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosInstance.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
                use_promotion_code: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument promotion_code", value=promotion_code, expected_type=type_hints["promotion_code"])
            check_type(argname="argument resource_spec", value=resource_spec, expected_type=type_hints["resource_spec"])
            check_type(argname="argument use_promotion_code", value=use_promotion_code, expected_type=type_hints["use_promotion_code"])
        self._values: typing.Dict[str, typing.Any] = {
            "bucket": bucket,
            "charge_type": charge_type,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if promotion_code is not None:
            self._values["promotion_code"] = promotion_code
        if resource_spec is not None:
            self._values["resource_spec"] = resource_spec
        if use_promotion_code is not None:
            self._values["use_promotion_code"] = use_promotion_code

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bucket: OSS bucket name.'''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property chargeType: The payment type, the value of the value is as follows: POST: pay as you go.

        PRE: subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceName: The name of instance.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VPC ID.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''Property vSwitchIds: Virtual switch ID.'''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: The available area ID of the instance.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: When the payment type is the monthly package, the value of the value is as follows: true: Automatic renewal.

        false: Manual renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: Number of order cycle.

        When ChargeType is configured as PRE, the duration parameter must be filled.
        If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
        If PricingCycle is year, the valid range is 1 to 3
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: The ordering cycle only supports ordering in the year and month.'''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property promotionCode: Promo Code.'''
        result = self._values.get("promotion_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ResourceSpecProperty"]]:
        '''Property resourceSpec: Resource specifications.

        When ChargeType is configured as PRE, the resource specification parameters must be filled.
        '''
        result = self._values.get("resource_spec")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ResourceSpecProperty"]], result)

    @builtins.property
    def use_promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property usePromotionCode: Whether to use coupons.The value is as follows: true: Use. false: Not in use.'''
        result = self._values.get("use_promotion_code")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Namespace(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-flink.Namespace",
):
    '''A ROS resource type:  ``ALIYUN::Flink::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["NamespaceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Flink::Namespace``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[NamespaceProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> ros_cdk_core.IResolvable:
        '''Attribute Namespace: Project space name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespace"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-flink.NamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "namespace": "namespace",
        "resource_spec": "resourceSpec",
    },
)
class NamespaceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union["RosNamespace.ResourceSpecProperty", typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Flink::Namespace``.

        :param instance_id: Property instanceId: Instance ID.
        :param namespace: Property namespace: Project space name.
        :param resource_spec: Property resourceSpec: Resource specifications.
        '''
        if __debug__:
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosNamespace.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument resource_spec", value=resource_spec, expected_type=type_hints["resource_spec"])
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "namespace": namespace,
        }
        if resource_spec is not None:
            self._values["resource_spec"] = resource_spec

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: Instance ID.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property namespace: Project space name.'''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosNamespace.ResourceSpecProperty"]]:
        '''Property resourceSpec: Resource specifications.'''
        result = self._values.get("resource_spec")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosNamespace.ResourceSpecProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-flink.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::Flink::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Flink::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosInstanceProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order information.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bucket")
    def bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bucket: OSS bucket name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bucket"))

    @bucket.setter
    def bucket(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bucket", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The payment type, the value of the value is as follows:
        POST: pay as you go.
        PRE: subscription.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchIds")
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchIds: Virtual switch ID.
        '''
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], jsii.get(self, "vSwitchIds"))

    @v_switch_ids.setter
    def v_switch_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchIds", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The available area ID of the instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: When the payment type is the monthly package, the value of the value is as follows:
        true: Automatic renewal.
        false: Manual renewal.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duration: Number of order cycle.
        When ChargeType is configured as PRE, the duration parameter must be filled.
        If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
        If PricingCycle is year, the valid range is 1 to 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The ordering cycle only supports ordering in the year and month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="promotionCode")
    def promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: promotionCode: Promo Code.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "promotionCode"))

    @promotion_code.setter
    def promotion_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "promotionCode", value)

    @builtins.property
    @jsii.member(jsii_name="resourceSpec")
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ResourceSpecProperty"]]:
        '''
        :Property:

        resourceSpec: Resource specifications.
        When ChargeType is configured as PRE, the resource specification parameters must be filled.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ResourceSpecProperty"]], jsii.get(self, "resourceSpec"))

    @resource_spec.setter
    def resource_spec(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.ResourceSpecProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ResourceSpecProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceSpec", value)

    @builtins.property
    @jsii.member(jsii_name="usePromotionCode")
    def use_promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        usePromotionCode: Whether to use coupons.The value is as follows:
        true: Use.
        false: Not in use.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "usePromotionCode"))

    @use_promotion_code.setter
    def use_promotion_code(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usePromotionCode", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-flink.RosInstance.ResourceSpecProperty",
        jsii_struct_bases=[],
        name_mapping={"cpu": "cpu", "memory_gb": "memoryGb"},
    )
    class ResourceSpecProperty:
        def __init__(
            self,
            *,
            cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            memory_gb: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param cpu: 
            :param memory_gb: 
            '''
            if __debug__:
                def stub(
                    *,
                    cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    memory_gb: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
                check_type(argname="argument memory_gb", value=memory_gb, expected_type=type_hints["memory_gb"])
            self._values: typing.Dict[str, typing.Any] = {}
            if cpu is not None:
                self._values["cpu"] = cpu
            if memory_gb is not None:
                self._values["memory_gb"] = memory_gb

        @builtins.property
        def cpu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: cpu: CPU number.
            '''
            result = self._values.get("cpu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def memory_gb(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            memoryGb: memory size.The unit is GB.
            It shows that the amount of memory must be 4 times the number of CPUs.
            '''
            result = self._values.get("memory_gb")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceSpecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-flink.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "bucket": "bucket",
        "charge_type": "chargeType",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "v_switch_ids": "vSwitchIds",
        "zone_id": "zoneId",
        "auto_renew": "autoRenew",
        "duration": "duration",
        "pricing_cycle": "pricingCycle",
        "promotion_code": "promotionCode",
        "resource_spec": "resourceSpec",
        "use_promotion_code": "usePromotionCode",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        promotion_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosInstance.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
        use_promotion_code: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Flink::Instance``.

        :param bucket: 
        :param charge_type: 
        :param instance_name: 
        :param vpc_id: 
        :param v_switch_ids: 
        :param zone_id: 
        :param auto_renew: 
        :param duration: 
        :param pricing_cycle: 
        :param promotion_code: 
        :param resource_spec: 
        :param use_promotion_code: 
        '''
        if __debug__:
            def stub(
                *,
                bucket: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                v_switch_ids: typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable],
                zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                promotion_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosInstance.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
                use_promotion_code: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument bucket", value=bucket, expected_type=type_hints["bucket"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_ids", value=v_switch_ids, expected_type=type_hints["v_switch_ids"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument promotion_code", value=promotion_code, expected_type=type_hints["promotion_code"])
            check_type(argname="argument resource_spec", value=resource_spec, expected_type=type_hints["resource_spec"])
            check_type(argname="argument use_promotion_code", value=use_promotion_code, expected_type=type_hints["use_promotion_code"])
        self._values: typing.Dict[str, typing.Any] = {
            "bucket": bucket,
            "charge_type": charge_type,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
            "v_switch_ids": v_switch_ids,
            "zone_id": zone_id,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if duration is not None:
            self._values["duration"] = duration
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if promotion_code is not None:
            self._values["promotion_code"] = promotion_code
        if resource_spec is not None:
            self._values["resource_spec"] = resource_spec
        if use_promotion_code is not None:
            self._values["use_promotion_code"] = use_promotion_code

    @builtins.property
    def bucket(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bucket: OSS bucket name.
        '''
        result = self._values.get("bucket")
        assert result is not None, "Required property 'bucket' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The payment type, the value of the value is as follows:
        POST: pay as you go.
        PRE: subscription.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceName: The name of instance.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchIds: Virtual switch ID.
        '''
        result = self._values.get("v_switch_ids")
        assert result is not None, "Required property 'v_switch_ids' is missing"
        return typing.cast(typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: The available area ID of the instance.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenew: When the payment type is the monthly package, the value of the value is as follows:
        true: Automatic renewal.
        false: Manual renewal.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duration: Number of order cycle.
        When ChargeType is configured as PRE, the duration parameter must be filled.
        If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
        If PricingCycle is year, the valid range is 1 to 3
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: The ordering cycle only supports ordering in the year and month.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: promotionCode: Promo Code.
        '''
        result = self._values.get("promotion_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ResourceSpecProperty]]:
        '''
        :Property:

        resourceSpec: Resource specifications.
        When ChargeType is configured as PRE, the resource specification parameters must be filled.
        '''
        result = self._values.get("resource_spec")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.ResourceSpecProperty]], result)

    @builtins.property
    def use_promotion_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        usePromotionCode: Whether to use coupons.The value is as follows:
        true: Use.
        false: Not in use.
        '''
        result = self._values.get("use_promotion_code")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNamespace(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-flink.RosNamespace",
):
    '''A ROS template type:  ``ALIYUN::Flink::Namespace``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosNamespaceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Flink::Namespace``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosNamespaceProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: builtins.bool,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
            def stub(props: typing.Mapping[builtins.str, typing.Any]) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrNamespace")
    def attr_namespace(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Namespace: Project space name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNamespace"))

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
            def stub(value: builtins.bool) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="namespace")
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespace: Project space name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "namespace"))

    @namespace.setter
    def namespace(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "namespace", value)

    @builtins.property
    @jsii.member(jsii_name="resourceSpec")
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosNamespace.ResourceSpecProperty"]]:
        '''
        :Property: resourceSpec: Resource specifications.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosNamespace.ResourceSpecProperty"]], jsii.get(self, "resourceSpec"))

    @resource_spec.setter
    def resource_spec(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosNamespace.ResourceSpecProperty"]],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosNamespace.ResourceSpecProperty]],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceSpec", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-flink.RosNamespace.ResourceSpecProperty",
        jsii_struct_bases=[],
        name_mapping={"cpu": "cpu", "memory_gb": "memoryGb"},
    )
    class ResourceSpecProperty:
        def __init__(
            self,
            *,
            cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            memory_gb: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param cpu: 
            :param memory_gb: 
            '''
            if __debug__:
                def stub(
                    *,
                    cpu: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                    memory_gb: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                ) -> None:
                    ...
                type_hints = typing.get_type_hints(stub)
                check_type(argname="argument cpu", value=cpu, expected_type=type_hints["cpu"])
                check_type(argname="argument memory_gb", value=memory_gb, expected_type=type_hints["memory_gb"])
            self._values: typing.Dict[str, typing.Any] = {}
            if cpu is not None:
                self._values["cpu"] = cpu
            if memory_gb is not None:
                self._values["memory_gb"] = memory_gb

        @builtins.property
        def cpu(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            cpu: CPU number.
            In the working space of the annual package, the number of CPUs must be filled.Under the working space of paying in volume, you can not fill in the number of CPUs.
            The number of CPUs created by the target project space is less than the number of CPU remaining in the working space (the total number of CPU purchased by the work space minus the number of other project spaces that has been assigned the number of CPUs), otherwise an error will be reported.
            '''
            result = self._values.get("cpu")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def memory_gb(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            memoryGb: Memory.
            In the working space of the annual package, the amount of memory must be filled, and the amount of memory must be 4 times.Under the working space of paying in volume, you can fill in the amount of memory without filling in the amount of memory.
            The amount of memory in the target project space is less than the remaining memory of the working space (the total amount of memory purchased by the work space minus the number of other project spaces that have been assigned the amount of memory), otherwise an error will be reported.
            '''
            result = self._values.get("memory_gb")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourceSpecProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-flink.RosNamespaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "namespace": "namespace",
        "resource_spec": "resourceSpec",
    },
)
class RosNamespaceProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosNamespace.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Flink::Namespace``.

        :param instance_id: 
        :param namespace: 
        :param resource_spec: 
        '''
        if __debug__:
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                namespace: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                resource_spec: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Union[RosNamespace.ResourceSpecProperty, typing.Dict[str, typing.Any]]]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument namespace", value=namespace, expected_type=type_hints["namespace"])
            check_type(argname="argument resource_spec", value=resource_spec, expected_type=type_hints["resource_spec"])
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "namespace": namespace,
        }
        if resource_spec is not None:
            self._values["resource_spec"] = resource_spec

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance ID.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def namespace(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: namespace: Project space name.
        '''
        result = self._values.get("namespace")
        assert result is not None, "Required property 'namespace' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_spec(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosNamespace.ResourceSpecProperty]]:
        '''
        :Property: resourceSpec: Resource specifications.
        '''
        result = self._values.get("resource_spec")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosNamespace.ResourceSpecProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNamespaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "Namespace",
    "NamespaceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosNamespace",
    "RosNamespaceProps",
]

publication.publish()
