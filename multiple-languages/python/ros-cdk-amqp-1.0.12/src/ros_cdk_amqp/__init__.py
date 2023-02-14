'''
## Aliyun ROS AMQP Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as AMQP from '@alicloud/ros-cdk-amqp';
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


class Binding(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Binding",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Binding``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Binding``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f96cf7feb719b7dcc39c3887d52562dc4b869b04056e71ea317c8eaca2aaf16)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.BindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "argument": "argument",
        "binding_key": "bindingKey",
        "binding_type": "bindingType",
        "destination_name": "destinationName",
        "instance_id": "instanceId",
        "source_exchange": "sourceExchange",
        "virtual_host": "virtualHost",
    },
)
class BindingProps:
    def __init__(
        self,
        *,
        argument: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        binding_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        binding_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_exchange: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Binding``.

        :param argument: Property argument: X-match Attributes. Valid Values: "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match. "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        :param binding_key: Property bindingKey: The Binding Key.
        :param binding_type: Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        :param destination_name: Property destinationName: The Target Queue Or Exchange of the Name.
        :param instance_id: Property instanceId: InstanceId.
        :param source_exchange: Property sourceExchange: The Source Exchange Name.
        :param virtual_host: Property virtualHost: The name of the virtual host.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ec832c41eef681036d776a88f7dc25ff8e59e26e8c2c36265909f992b0d36ab)
            check_type(argname="argument argument", value=argument, expected_type=type_hints["argument"])
            check_type(argname="argument binding_key", value=binding_key, expected_type=type_hints["binding_key"])
            check_type(argname="argument binding_type", value=binding_type, expected_type=type_hints["binding_type"])
            check_type(argname="argument destination_name", value=destination_name, expected_type=type_hints["destination_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_exchange", value=source_exchange, expected_type=type_hints["source_exchange"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "argument": argument,
            "binding_key": binding_key,
            "binding_type": binding_type,
            "destination_name": destination_name,
            "instance_id": instance_id,
            "source_exchange": source_exchange,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def argument(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property argument: X-match Attributes.

        Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        result = self._values.get("argument")
        assert result is not None, "Required property 'argument' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def binding_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bindingKey: The Binding Key.'''
        result = self._values.get("binding_key")
        assert result is not None, "Required property 'binding_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def binding_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bindingType: The Target Binding Types.

        Valid values: EXCHANGE, QUEUE.
        '''
        result = self._values.get("binding_type")
        assert result is not None, "Required property 'binding_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationName: The Target Queue Or Exchange of the Name.'''
        result = self._values.get("destination_name")
        assert result is not None, "Required property 'destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_exchange(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceExchange: The Source Exchange Name.'''
        result = self._values.get("source_exchange")
        assert result is not None, "Required property 'source_exchange' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Exchange(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Exchange",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Exchange``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ExchangeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Exchange``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8c6e87cf9126804e85d1ecfaa618cb1b498fe41673b7dd64c457d90433cc6dd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrExchangeName")
    def attr_exchange_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ExchangeName: The name of the exchange.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExchangeName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.ExchangeProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_delete_state": "autoDeleteState",
        "exchange_name": "exchangeName",
        "exchange_type": "exchangeType",
        "instance_id": "instanceId",
        "internal": "internal",
        "virtual_host": "virtualHost",
        "alternate_exchange": "alternateExchange",
    },
)
class ExchangeProps:
    def __init__(
        self,
        *,
        auto_delete_state: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        exchange_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exchange_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        internal: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alternate_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Exchange``.

        :param auto_delete_state: Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values: true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted. false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        :param exchange_name: Property exchangeName: The name of the exchange.
        :param exchange_type: Property exchangeType: The type of the exchange. Valid values: FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages. DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message. TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange. HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        :param instance_id: Property instanceId: InstanceId.
        :param internal: Property internal: Specifies whether an exchange is an internal exchange. Valid values: false: The exchange is not an internal exchange. true: The exchange is an internal exchange.
        :param virtual_host: Property virtualHost: The name of the virtual host.
        :param alternate_exchange: Property alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66b29f6f99deeea992894b8b19f481b61c01856e82c8638f15d1793fb5d0b5cb)
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument exchange_name", value=exchange_name, expected_type=type_hints["exchange_name"])
            check_type(argname="argument exchange_type", value=exchange_type, expected_type=type_hints["exchange_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument internal", value=internal, expected_type=type_hints["internal"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument alternate_exchange", value=alternate_exchange, expected_type=type_hints["alternate_exchange"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto_delete_state": auto_delete_state,
            "exchange_name": exchange_name,
            "exchange_type": exchange_type,
            "instance_id": instance_id,
            "internal": internal,
            "virtual_host": virtual_host,
        }
        if alternate_exchange is not None:
            self._values["alternate_exchange"] = alternate_exchange

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.

        Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        result = self._values.get("auto_delete_state")
        assert result is not None, "Required property 'auto_delete_state' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exchange_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property exchangeName: The name of the exchange.'''
        result = self._values.get("exchange_name")
        assert result is not None, "Required property 'exchange_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exchange_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property exchangeType: The type of the exchange.

        Valid values:
        FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        '''
        result = self._values.get("exchange_type")
        assert result is not None, "Required property 'exchange_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def internal(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property internal: Specifies whether an exchange is an internal exchange.

        Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        result = self._values.get("internal")
        assert result is not None, "Required property 'internal' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property alternateExchange: The alternate exchange.

        An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        result = self._values.get("alternate_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExchangeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Instance",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a32dc2c966a2a552cdf163bdce55a85ff7666fa905e7370ecc125ec13bf0aa87)
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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_type": "instanceType",
        "max_tps": "maxTps",
        "queue_capacity": "queueCapacity",
        "storage_size": "storageSize",
        "instance_name": "instanceName",
        "max_eip_tps": "maxEipTps",
        "order_num": "orderNum",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "support_eip": "supportEip",
        "support_tracing": "supportTracing",
        "tracing_storage_time": "tracingStorageTime",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        max_tps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        queue_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_eip_tps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        support_eip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        support_tracing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing_storage_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Instance``.

        :param instance_type: Property instanceType: The Instance Type. Valid values: professional, enterprise, vip.
        :param max_tps: Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000]. If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000]. If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        :param queue_capacity: Property queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5. If instance type is enterprise, the valid value is [200, 6000] with the step size 100 If instance type is vip, the valid value is [200, 80000] with the step size 100
        :param storage_size: Property storageSize: The storage size. It is valid when instance_type is vip. If instance type is professional or enterprise, the valid value is 200. If instance type is vip, the valid value is [700, 2800] with the step size 100
        :param instance_name: Property instanceName: The instance name.
        :param max_eip_tps: Property maxEipTps: The max eip tps. It is valid when support_eip is true. The minimum value is 128, with the step size 128.
        :param order_num: Property orderNum: Set the number of instances to be created.
        :param pay_type: Property payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values: PrePaid: subscription
        :param period: Property period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param support_eip: Property supportEip: Whether to support EIP. Valid values: true, false.
        :param support_tracing: Property supportTracing: Whether to support tracing. Valid values: true, false.
        :param tracing_storage_time: Property tracingStorageTime: It is valid when support_tracing == tracing_true. The retention period of message traces was set. Valid values: 3, 7, 15. If instance_type=vip, the valid values is 15. If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfa0d0cf813d8350bb8c8ba9c9cdb1de65d694c183a32ea439e1e7e39cf5263c)
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument max_tps", value=max_tps, expected_type=type_hints["max_tps"])
            check_type(argname="argument queue_capacity", value=queue_capacity, expected_type=type_hints["queue_capacity"])
            check_type(argname="argument storage_size", value=storage_size, expected_type=type_hints["storage_size"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument max_eip_tps", value=max_eip_tps, expected_type=type_hints["max_eip_tps"])
            check_type(argname="argument order_num", value=order_num, expected_type=type_hints["order_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument support_eip", value=support_eip, expected_type=type_hints["support_eip"])
            check_type(argname="argument support_tracing", value=support_tracing, expected_type=type_hints["support_tracing"])
            check_type(argname="argument tracing_storage_time", value=tracing_storage_time, expected_type=type_hints["tracing_storage_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_type": instance_type,
            "max_tps": max_tps,
            "queue_capacity": queue_capacity,
            "storage_size": storage_size,
        }
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if max_eip_tps is not None:
            self._values["max_eip_tps"] = max_eip_tps
        if order_num is not None:
            self._values["order_num"] = order_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if support_eip is not None:
            self._values["support_eip"] = support_eip
        if support_tracing is not None:
            self._values["support_tracing"] = support_tracing
        if tracing_storage_time is not None:
            self._values["tracing_storage_time"] = tracing_storage_time

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: The Instance Type.

        Valid values: professional, enterprise, vip.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def max_tps(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].

        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        result = self._values.get("max_tps")
        assert result is not None, "Required property 'max_tps' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def queue_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property queueCapacity: The queue capacity.

        If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        result = self._values.get("queue_capacity")
        assert result is not None, "Required property 'queue_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property storageSize: The storage size.

        It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: The instance name.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxEipTps: The max eip tps.

        It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        result = self._values.get("max_eip_tps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orderNum: Set the number of instances to be created.'''
        result = self._values.get("order_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: The billing method of the instance.

        The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The period.

        Valid values: 1, 2, 3, 6, 12, 24, 36.
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
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property supportEip: Whether to support EIP.

        Valid values: true, false.
        '''
        result = self._values.get("support_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property supportTracing: Whether to support tracing.

        Valid values: true, false.
        '''
        result = self._values.get("support_tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tracingStorageTime: It is valid when support_tracing == tracing_true.

        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        result = self._values.get("tracing_storage_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Queue(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Queue",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Queue``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["QueueProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Queue``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae7cdfc0213132c213a6e1fb9057e398631f350d9405ffd584b7164eb8df15ac)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute QueueName: The name of the queue.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.QueueProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "queue_name": "queueName",
        "virtual_host": "virtualHost",
        "auto_delete_state": "autoDeleteState",
        "auto_expire_state": "autoExpireState",
        "dead_letter_exchange": "deadLetterExchange",
        "dead_letter_routing_key": "deadLetterRoutingKey",
        "exclusive_state": "exclusiveState",
        "maximum_priority": "maximumPriority",
        "max_length": "maxLength",
        "message_ttl": "messageTtl",
    },
)
class QueueProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_delete_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_expire_state: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dead_letter_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_length: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        message_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Queue``.

        :param instance_id: Property instanceId: InstanceId.
        :param queue_name: Property queueName: The name of the queue.
        :param virtual_host: Property virtualHost: The name of the virtual host.
        :param auto_delete_state: Property autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values: true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled. false: The Auto Delete attribute is not configured.
        :param auto_expire_state: Property autoExpireState: The validity period after which the queue is automatically deleted. If the queue is not accessed within a specified period of time, it is automatically deleted.
        :param dead_letter_exchange: Property deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages. If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange. Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        :param dead_letter_routing_key: Property deadLetterRoutingKey: The dead letter routing key.
        :param exclusive_state: Property exclusiveState: Specifies whether the queue is an exclusive queue. Valid values: true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted. false: The Auto Delete attribute is not configured.
        :param maximum_priority: Property maximumPriority: The priority function is not supported.
        :param max_length: Property maxLength: The maximum number of messages that can be stored in the queue. If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        :param message_ttl: Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires. The value of message lifetime must be a non-negative integer, up to 1 day. The unit is milliseconds
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__473e552812e7548c2c24ddb5c55032eea64ec9ea594f6b63bbb998132838df17)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument auto_expire_state", value=auto_expire_state, expected_type=type_hints["auto_expire_state"])
            check_type(argname="argument dead_letter_exchange", value=dead_letter_exchange, expected_type=type_hints["dead_letter_exchange"])
            check_type(argname="argument dead_letter_routing_key", value=dead_letter_routing_key, expected_type=type_hints["dead_letter_routing_key"])
            check_type(argname="argument exclusive_state", value=exclusive_state, expected_type=type_hints["exclusive_state"])
            check_type(argname="argument maximum_priority", value=maximum_priority, expected_type=type_hints["maximum_priority"])
            check_type(argname="argument max_length", value=max_length, expected_type=type_hints["max_length"])
            check_type(argname="argument message_ttl", value=message_ttl, expected_type=type_hints["message_ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "queue_name": queue_name,
            "virtual_host": virtual_host,
        }
        if auto_delete_state is not None:
            self._values["auto_delete_state"] = auto_delete_state
        if auto_expire_state is not None:
            self._values["auto_expire_state"] = auto_expire_state
        if dead_letter_exchange is not None:
            self._values["dead_letter_exchange"] = dead_letter_exchange
        if dead_letter_routing_key is not None:
            self._values["dead_letter_routing_key"] = dead_letter_routing_key
        if exclusive_state is not None:
            self._values["exclusive_state"] = exclusive_state
        if maximum_priority is not None:
            self._values["maximum_priority"] = maximum_priority
        if max_length is not None:
            self._values["max_length"] = max_length
        if message_ttl is not None:
            self._values["message_ttl"] = message_ttl

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property queueName: The name of the queue.'''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.

        Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("auto_delete_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoExpireState: The validity period after which the queue is automatically deleted.

        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        result = self._values.get("auto_expire_state")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deadLetterExchange: The dead-letter exchange.

        A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        result = self._values.get("dead_letter_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deadLetterRoutingKey: The dead letter routing key.'''
        result = self._values.get("dead_letter_routing_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property exclusiveState: Specifies whether the queue is an exclusive queue.

        Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("exclusive_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maximumPriority: The priority function is not supported.'''
        result = self._values.get("maximum_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property maxLength: The maximum number of messages that can be stored in the queue.

        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.

        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        result = self._values.get("message_ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBinding(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosBinding",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Binding``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBindingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Binding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__515c5b6329890a64fb11d4788b0d43ba2001d77fb9e91692bcb62338a8c27b2e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fef49eea9d4f92b3baeccd94ecee0594508ce5d15832d144beb42b5736eddded)
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
    @jsii.member(jsii_name="argument")
    def argument(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        argument: X-match Attributes. Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "argument"))

    @argument.setter
    def argument(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9586a9cdc077a7037874628147e28d6dd3356d3286406b1bc717ffa116e0a429)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "argument", value)

    @builtins.property
    @jsii.member(jsii_name="bindingKey")
    def binding_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindingKey: The Binding Key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bindingKey"))

    @binding_key.setter
    def binding_key(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0e50b149819d2af2d391f360bcfc444d3a9b7b5b163fe6c8a9607367e092227)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bindingKey", value)

    @builtins.property
    @jsii.member(jsii_name="bindingType")
    def binding_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bindingType"))

    @binding_type.setter
    def binding_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__172222ffdbb780b3710a6acde31a02193abcfe543bb326310e2780f4175e0829)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bindingType", value)

    @builtins.property
    @jsii.member(jsii_name="destinationName")
    def destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationName: The Target Queue Or Exchange of the Name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationName"))

    @destination_name.setter
    def destination_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff257a88b733625ebb317b10692b64b2596f3dc3bccb8ae3cb97534230843cd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd5ddad755a0ddacd7a1f8d9ea7653a2f20767a7508339231210c8b93dcc0999)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c23700fd901d460cd630f7099998b5699146c5a437ea3b1cdba82b74aa211618)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceExchange")
    def source_exchange(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceExchange: The Source Exchange Name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceExchange"))

    @source_exchange.setter
    def source_exchange(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__465c988968222ecf1713471206eb5a14ac16c57659daab29f8322468de9458ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceExchange", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86452d7ab94c0e89a75b623690c04ae8247c925cba134d31eedfa3e5a73e5f12)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "virtualHost", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.RosBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "argument": "argument",
        "binding_key": "bindingKey",
        "binding_type": "bindingType",
        "destination_name": "destinationName",
        "instance_id": "instanceId",
        "source_exchange": "sourceExchange",
        "virtual_host": "virtualHost",
    },
)
class RosBindingProps:
    def __init__(
        self,
        *,
        argument: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        binding_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        binding_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_exchange: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Binding``.

        :param argument: 
        :param binding_key: 
        :param binding_type: 
        :param destination_name: 
        :param instance_id: 
        :param source_exchange: 
        :param virtual_host: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__857cb08d8bfeb4526bd1ea7f809e9ad66355021cb13ce6b693292c5b1ff83414)
            check_type(argname="argument argument", value=argument, expected_type=type_hints["argument"])
            check_type(argname="argument binding_key", value=binding_key, expected_type=type_hints["binding_key"])
            check_type(argname="argument binding_type", value=binding_type, expected_type=type_hints["binding_type"])
            check_type(argname="argument destination_name", value=destination_name, expected_type=type_hints["destination_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_exchange", value=source_exchange, expected_type=type_hints["source_exchange"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "argument": argument,
            "binding_key": binding_key,
            "binding_type": binding_type,
            "destination_name": destination_name,
            "instance_id": instance_id,
            "source_exchange": source_exchange,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def argument(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        argument: X-match Attributes. Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        result = self._values.get("argument")
        assert result is not None, "Required property 'argument' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def binding_key(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindingKey: The Binding Key.
        '''
        result = self._values.get("binding_key")
        assert result is not None, "Required property 'binding_key' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def binding_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        '''
        result = self._values.get("binding_type")
        assert result is not None, "Required property 'binding_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: destinationName: The Target Queue Or Exchange of the Name.
        '''
        result = self._values.get("destination_name")
        assert result is not None, "Required property 'destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_exchange(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceExchange: The Source Exchange Name.
        '''
        result = self._values.get("source_exchange")
        assert result is not None, "Required property 'source_exchange' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExchange(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosExchange",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Exchange``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosExchangeProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Exchange``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20e15c172754b83d46e6db382896643b2f28d7d8324134f24b3c13f6c621c929)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d1783351c01422d922d0d9df4304c04732a0f1377a160c22c270bff30ca5fd12)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrExchangeName")
    def attr_exchange_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ExchangeName: The name of the exchange.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrExchangeName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="autoDeleteState")
    def auto_delete_state(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "autoDeleteState"))

    @auto_delete_state.setter
    def auto_delete_state(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f6edc27baf249c0af28827f1ba1922dfb68d04b2d3c9749b8ce3ee8589af23c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoDeleteState", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b4b0f8779336c9d717cc4828bc208a803eaf14615274a0113884d737502e8e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="exchangeName")
    def exchange_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exchangeName: The name of the exchange.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "exchangeName"))

    @exchange_name.setter
    def exchange_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2396a63bc058b60b4ce6cd9434dda404375d2bb6ddd3d1c6459db2e66ffb5d44)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exchangeName", value)

    @builtins.property
    @jsii.member(jsii_name="exchangeType")
    def exchange_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        exchangeType: The type of the exchange. Valid values:
        FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "exchangeType"))

    @exchange_type.setter
    def exchange_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fcad664791f566a8c708d7b3a5218d3bd8a9392c06abcb4153bb55fc76f09ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exchangeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68efe9b2f00c196cedd797834468e3b201d90da884d4557c8fbad4c857671eb4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="internal")
    def internal(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        internal: Specifies whether an exchange is an internal exchange. Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "internal"))

    @internal.setter
    def internal(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c0f77a658bfd752d4eb7e46a97333ccb0d9e8b07a74657e92d519c607e3846a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internal", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f977d577a90a666f554f873bb46c2fbf54fa28e56d57c80469465fd7bfcfb2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "virtualHost", value)

    @builtins.property
    @jsii.member(jsii_name="alternateExchange")
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "alternateExchange"))

    @alternate_exchange.setter
    def alternate_exchange(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb4a4ba6ccae100174cec0a12aee54faf9223bf82c0f0f460e05da1dab0097a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "alternateExchange", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.RosExchangeProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_delete_state": "autoDeleteState",
        "exchange_name": "exchangeName",
        "exchange_type": "exchangeType",
        "instance_id": "instanceId",
        "internal": "internal",
        "virtual_host": "virtualHost",
        "alternate_exchange": "alternateExchange",
    },
)
class RosExchangeProps:
    def __init__(
        self,
        *,
        auto_delete_state: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        exchange_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exchange_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        internal: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        alternate_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Exchange``.

        :param auto_delete_state: 
        :param exchange_name: 
        :param exchange_type: 
        :param instance_id: 
        :param internal: 
        :param virtual_host: 
        :param alternate_exchange: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e600aaa137316039c38ea4e70ee37098da16bbfa856bf837cef59e7bf8470653)
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument exchange_name", value=exchange_name, expected_type=type_hints["exchange_name"])
            check_type(argname="argument exchange_type", value=exchange_type, expected_type=type_hints["exchange_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument internal", value=internal, expected_type=type_hints["internal"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument alternate_exchange", value=alternate_exchange, expected_type=type_hints["alternate_exchange"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "auto_delete_state": auto_delete_state,
            "exchange_name": exchange_name,
            "exchange_type": exchange_type,
            "instance_id": instance_id,
            "internal": internal,
            "virtual_host": virtual_host,
        }
        if alternate_exchange is not None:
            self._values["alternate_exchange"] = alternate_exchange

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        result = self._values.get("auto_delete_state")
        assert result is not None, "Required property 'auto_delete_state' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exchange_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exchangeName: The name of the exchange.
        '''
        result = self._values.get("exchange_name")
        assert result is not None, "Required property 'exchange_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exchange_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        exchangeType: The type of the exchange. Valid values:
        FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        '''
        result = self._values.get("exchange_type")
        assert result is not None, "Required property 'exchange_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def internal(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        internal: Specifies whether an exchange is an internal exchange. Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        result = self._values.get("internal")
        assert result is not None, "Required property 'internal' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        result = self._values.get("alternate_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExchangeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59d13a86673b81488d47380fcd1fab8edb09621d7a95599156c28229028a841c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__e7945edad00144d1523fe8daec5fe5405b3a76b8cb3ec926ed8afdea07649586)
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
            type_hints = typing.get_type_hints(_typecheckingstub__56194be6e45a9ae9e82c382ff2c688215deae47ab32085931a81c7e71515d7c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: The Instance Type. Valid values: professional, enterprise, vip.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c7401755ce8e56c793434d45f952048693ccef6e52c10110906eb072c896ec9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="maxTps")
    def max_tps(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "maxTps"))

    @max_tps.setter
    def max_tps(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__34a479c1bdd31f845ec49743bc9b7154ac5c3b1257ad80ebb2a79610583f1f71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxTps", value)

    @builtins.property
    @jsii.member(jsii_name="queueCapacity")
    def queue_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "queueCapacity"))

    @queue_capacity.setter
    def queue_capacity(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e72f5e8c8f97fca312ad601c646dbf9ec20847447c06d8367a84e50088190622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queueCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="storageSize")
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageSize: The storage size. It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "storageSize"))

    @storage_size.setter
    def storage_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9c5678fe3bb89e4f422338260ea6b64d0ef0f810b39c8ee944722021ea415c6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSize", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2bf1affffd2fc99de631273cced45ddd64911750a6f35b25232c2526fd7aa26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="maxEipTps")
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxEipTps: The max eip tps. It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxEipTps"))

    @max_eip_tps.setter
    def max_eip_tps(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d018f46762415090436c86a8cc404f4a3a7b6eeebb1861ef6da2696eda2ae8b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxEipTps", value)

    @builtins.property
    @jsii.member(jsii_name="orderNum")
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderNum: Set the number of instances to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orderNum"))

    @order_num.setter
    def order_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aef7a837201f190227aeb669b16260175a77846e7546137b85581a3036c7622)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orderNum", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71da045386111a12bb6eede9693245073c94016df837f962130e55dd6e2903cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb817fef1daf4fade64abf22eaedd0321274b60e062dfeea5aec8501921f9b5a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ca40cb78e928e925193cd2a9423a350270a9912b6df51f7ef291d75b3c0dcf1d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="supportEip")
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportEip: Whether to support EIP. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "supportEip"))

    @support_eip.setter
    def support_eip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25fa3f677db9f265fcc51893fd3c99d8e1be2e28a54df34c56ca1ca3a51c675d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "supportEip", value)

    @builtins.property
    @jsii.member(jsii_name="supportTracing")
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportTracing: Whether to support tracing. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "supportTracing"))

    @support_tracing.setter
    def support_tracing(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82f98cd9e6844333ad5727dfb3685165b1141032f56cad7ea24e86982838872a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "supportTracing", value)

    @builtins.property
    @jsii.member(jsii_name="tracingStorageTime")
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tracingStorageTime: It is valid when support_tracing == tracing_true.
        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tracingStorageTime"))

    @tracing_storage_time.setter
    def tracing_storage_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94f0e15c7d2d13f833b8dc5b3beb7e74696fc3fa5ef58e4dd4b3c69f83f3e7c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tracingStorageTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_type": "instanceType",
        "max_tps": "maxTps",
        "queue_capacity": "queueCapacity",
        "storage_size": "storageSize",
        "instance_name": "instanceName",
        "max_eip_tps": "maxEipTps",
        "order_num": "orderNum",
        "pay_type": "payType",
        "period": "period",
        "period_unit": "periodUnit",
        "support_eip": "supportEip",
        "support_tracing": "supportTracing",
        "tracing_storage_time": "tracingStorageTime",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        max_tps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        queue_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_eip_tps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        order_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        support_eip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        support_tracing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tracing_storage_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Instance``.

        :param instance_type: 
        :param max_tps: 
        :param queue_capacity: 
        :param storage_size: 
        :param instance_name: 
        :param max_eip_tps: 
        :param order_num: 
        :param pay_type: 
        :param period: 
        :param period_unit: 
        :param support_eip: 
        :param support_tracing: 
        :param tracing_storage_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40cf30f8d3a546ede6c2fcaaa08669ee185021db0e49209a7bcef741dff23e81)
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument max_tps", value=max_tps, expected_type=type_hints["max_tps"])
            check_type(argname="argument queue_capacity", value=queue_capacity, expected_type=type_hints["queue_capacity"])
            check_type(argname="argument storage_size", value=storage_size, expected_type=type_hints["storage_size"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument max_eip_tps", value=max_eip_tps, expected_type=type_hints["max_eip_tps"])
            check_type(argname="argument order_num", value=order_num, expected_type=type_hints["order_num"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument support_eip", value=support_eip, expected_type=type_hints["support_eip"])
            check_type(argname="argument support_tracing", value=support_tracing, expected_type=type_hints["support_tracing"])
            check_type(argname="argument tracing_storage_time", value=tracing_storage_time, expected_type=type_hints["tracing_storage_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_type": instance_type,
            "max_tps": max_tps,
            "queue_capacity": queue_capacity,
            "storage_size": storage_size,
        }
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if max_eip_tps is not None:
            self._values["max_eip_tps"] = max_eip_tps
        if order_num is not None:
            self._values["order_num"] = order_num
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if support_eip is not None:
            self._values["support_eip"] = support_eip
        if support_tracing is not None:
            self._values["support_tracing"] = support_tracing
        if tracing_storage_time is not None:
            self._values["tracing_storage_time"] = tracing_storage_time

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: The Instance Type. Valid values: professional, enterprise, vip.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def max_tps(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        result = self._values.get("max_tps")
        assert result is not None, "Required property 'max_tps' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def queue_capacity(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        result = self._values.get("queue_capacity")
        assert result is not None, "Required property 'queue_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def storage_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        storageSize: The storage size. It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxEipTps: The max eip tps. It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        result = self._values.get("max_eip_tps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orderNum: Set the number of instances to be created.
        '''
        result = self._values.get("order_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
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
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportEip: Whether to support EIP. Valid values: true, false.
        '''
        result = self._values.get("support_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: supportTracing: Whether to support tracing. Valid values: true, false.
        '''
        result = self._values.get("support_tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tracingStorageTime: It is valid when support_tracing == tracing_true.
        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        result = self._values.get("tracing_storage_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQueue(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosQueue",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Queue``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosQueueProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Queue``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a64fad0d5dcb9992f0ca1bdc5a9055d5533e357133e731d60a4960fca863b11)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bd735fa7d22736762c4cdefa4ee5c9b7cbce2255b94857d405a1213a5e83c798)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: QueueName: The name of the queue.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQueueName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2df32e0c8229b5c87d308d7cf0689134fbd749997f13e6ca434aad9854f92a6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d11b56151c3b299dc025f86a6e9eced65dfe275d3307ed7d702868566b4d8fe8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="queueName")
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queueName: The name of the queue.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "queueName"))

    @queue_name.setter
    def queue_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d239cf4493e7f768d1b348f7f53bac05cf71515c7a9cff431b72beb13b36eb16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queueName", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2380205b4b87e1858f9b88781971e09d99125395a987a5b96b52aef4ebb87b0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "virtualHost", value)

    @builtins.property
    @jsii.member(jsii_name="autoDeleteState")
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoDeleteState"))

    @auto_delete_state.setter
    def auto_delete_state(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ae908c2bdd28599ba60810597f5202fe76f56f461d036c1f2a09577dcc3c68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoDeleteState", value)

    @builtins.property
    @jsii.member(jsii_name="autoExpireState")
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoExpireState: The validity period after which the queue is automatically deleted.
        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoExpireState"))

    @auto_expire_state.setter
    def auto_expire_state(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e04172e6d0db58a74c5b9fd5861bbc7c8a34bb21dc7b1c153ce6d00d1092812)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoExpireState", value)

    @builtins.property
    @jsii.member(jsii_name="deadLetterExchange")
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deadLetterExchange"))

    @dead_letter_exchange.setter
    def dead_letter_exchange(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__66fa18b4c3417ff802ad6adbca859a9765fdbc9a38cc35f8726b947e842b1040)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deadLetterExchange", value)

    @builtins.property
    @jsii.member(jsii_name="deadLetterRoutingKey")
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deadLetterRoutingKey: The dead letter routing key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deadLetterRoutingKey"))

    @dead_letter_routing_key.setter
    def dead_letter_routing_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ed3f29dd5ee2b181d5ba3416e246fd6358d279c25b1de075b6b97c26ac9f4e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deadLetterRoutingKey", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveState")
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "exclusiveState"))

    @exclusive_state.setter
    def exclusive_state(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beec4d76a6655e2cb0890323950028ea9bda0984b57b873f93b1d1192bcbefaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveState", value)

    @builtins.property
    @jsii.member(jsii_name="maximumPriority")
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maximumPriority: The priority function is not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maximumPriority"))

    @maximum_priority.setter
    def maximum_priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__827489977470af48a099dcf6cff77f8154be0435e6724ed3038af64403af3a22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maximumPriority", value)

    @builtins.property
    @jsii.member(jsii_name="maxLength")
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxLength: The maximum number of messages that can be stored in the queue.
        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "maxLength"))

    @max_length.setter
    def max_length(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a546eb1415e347792d0982998f3841f042de58e85d7e180164a0bb44c7889cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxLength", value)

    @builtins.property
    @jsii.member(jsii_name="messageTtl")
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        messageTtl: The message TTL of the queue
        If a message is retained in the Queue longer than the configured message lifetime, the message expires.
        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "messageTtl"))

    @message_ttl.setter
    def message_ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81ed71a7724f3d196eb2b8fd3127a712b00663a8466b55a72b94f5c63887c277)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "messageTtl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.RosQueueProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "queue_name": "queueName",
        "virtual_host": "virtualHost",
        "auto_delete_state": "autoDeleteState",
        "auto_expire_state": "autoExpireState",
        "dead_letter_exchange": "deadLetterExchange",
        "dead_letter_routing_key": "deadLetterRoutingKey",
        "exclusive_state": "exclusiveState",
        "maximum_priority": "maximumPriority",
        "max_length": "maxLength",
        "message_ttl": "messageTtl",
    },
)
class RosQueueProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_delete_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_expire_state: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dead_letter_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        exclusive_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        maximum_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        max_length: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        message_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::Queue``.

        :param instance_id: 
        :param queue_name: 
        :param virtual_host: 
        :param auto_delete_state: 
        :param auto_expire_state: 
        :param dead_letter_exchange: 
        :param dead_letter_routing_key: 
        :param exclusive_state: 
        :param maximum_priority: 
        :param max_length: 
        :param message_ttl: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3270f4c2f520cce986bf1f2855f65915ad576e606a720ea3c88d084ced4e49f5)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument queue_name", value=queue_name, expected_type=type_hints["queue_name"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument auto_expire_state", value=auto_expire_state, expected_type=type_hints["auto_expire_state"])
            check_type(argname="argument dead_letter_exchange", value=dead_letter_exchange, expected_type=type_hints["dead_letter_exchange"])
            check_type(argname="argument dead_letter_routing_key", value=dead_letter_routing_key, expected_type=type_hints["dead_letter_routing_key"])
            check_type(argname="argument exclusive_state", value=exclusive_state, expected_type=type_hints["exclusive_state"])
            check_type(argname="argument maximum_priority", value=maximum_priority, expected_type=type_hints["maximum_priority"])
            check_type(argname="argument max_length", value=max_length, expected_type=type_hints["max_length"])
            check_type(argname="argument message_ttl", value=message_ttl, expected_type=type_hints["message_ttl"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "queue_name": queue_name,
            "virtual_host": virtual_host,
        }
        if auto_delete_state is not None:
            self._values["auto_delete_state"] = auto_delete_state
        if auto_expire_state is not None:
            self._values["auto_expire_state"] = auto_expire_state
        if dead_letter_exchange is not None:
            self._values["dead_letter_exchange"] = dead_letter_exchange
        if dead_letter_routing_key is not None:
            self._values["dead_letter_routing_key"] = dead_letter_routing_key
        if exclusive_state is not None:
            self._values["exclusive_state"] = exclusive_state
        if maximum_priority is not None:
            self._values["maximum_priority"] = maximum_priority
        if max_length is not None:
            self._values["max_length"] = max_length
        if message_ttl is not None:
            self._values["message_ttl"] = message_ttl

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def queue_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: queueName: The name of the queue.
        '''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("auto_delete_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoExpireState: The validity period after which the queue is automatically deleted.
        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        result = self._values.get("auto_expire_state")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        result = self._values.get("dead_letter_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deadLetterRoutingKey: The dead letter routing key.
        '''
        result = self._values.get("dead_letter_routing_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("exclusive_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: maximumPriority: The priority function is not supported.
        '''
        result = self._values.get("maximum_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        maxLength: The maximum number of messages that can be stored in the queue.
        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        messageTtl: The message TTL of the queue
        If a message is retained in the Queue longer than the configured message lifetime, the message expires.
        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        result = self._values.get("message_ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVirtualHost(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosVirtualHost",
):
    '''A ROS template type:  ``ALIYUN::AMQP::VirtualHost``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVirtualHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::VirtualHost``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ce76417b6966890d92e73e35cbc32181fc61d852e394bff74a3c2e0110568e9)
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
            type_hints = typing.get_type_hints(_typecheckingstub__fbfafd12aee372823335d9255af68466b5a5f9fa6277a8148f864412b0988357)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVirtualHost")
    def attr_virtual_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VirtualHost: The name of the virtual host.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVirtualHost"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__7e394c127731aaeb76d81b14daebfee45f12784240a2592f588f491d0c419780)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d681877fcbaee1cee00cbfefe5bda7f63f33be2e4557c01abc8be9647e59a6c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a958ede83e909b3134628fde50791d33394b1942a93311ce74d1d673fe211f54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "virtualHost", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.RosVirtualHostProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "virtual_host": "virtualHost"},
)
class RosVirtualHostProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::VirtualHost``.

        :param instance_id: 
        :param virtual_host: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ce0e00abe0c0314a7d0dd3d3f32cc1300b03add30daba1a7e6a3ec855d17288)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVirtualHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VirtualHost(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.VirtualHost",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::VirtualHost``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VirtualHostProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::VirtualHost``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__845049ec643884c9d780ffea18df1424b85642a4d6d59ee856d8c1cdc98000dc)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVirtualHost")
    def attr_virtual_host(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VirtualHost: The name of the virtual host.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVirtualHost"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.VirtualHostProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "virtual_host": "virtualHost"},
)
class VirtualHostProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::VirtualHost``.

        :param instance_id: Property instanceId: InstanceId.
        :param virtual_host: Property virtualHost: The name of the virtual host.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38d2e68d9fe7589d24f70a039243e955029118303e5930f13a6a94f4373c08f4)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_id": instance_id,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def virtual_host(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VirtualHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Binding",
    "BindingProps",
    "Exchange",
    "ExchangeProps",
    "Instance",
    "InstanceProps",
    "Queue",
    "QueueProps",
    "RosBinding",
    "RosBindingProps",
    "RosExchange",
    "RosExchangeProps",
    "RosInstance",
    "RosInstanceProps",
    "RosQueue",
    "RosQueueProps",
    "RosVirtualHost",
    "RosVirtualHostProps",
    "VirtualHost",
    "VirtualHostProps",
]

publication.publish()

def _typecheckingstub__1f96cf7feb719b7dcc39c3887d52562dc4b869b04056e71ea317c8eaca2aaf16(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ec832c41eef681036d776a88f7dc25ff8e59e26e8c2c36265909f992b0d36ab(
    *,
    argument: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    binding_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    binding_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_exchange: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8c6e87cf9126804e85d1ecfaa618cb1b498fe41673b7dd64c457d90433cc6dd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ExchangeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66b29f6f99deeea992894b8b19f481b61c01856e82c8638f15d1793fb5d0b5cb(
    *,
    auto_delete_state: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    exchange_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exchange_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    internal: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alternate_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a32dc2c966a2a552cdf163bdce55a85ff7666fa905e7370ecc125ec13bf0aa87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfa0d0cf813d8350bb8c8ba9c9cdb1de65d694c183a32ea439e1e7e39cf5263c(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_tps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    queue_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_eip_tps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    support_eip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    support_tracing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_storage_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae7cdfc0213132c213a6e1fb9057e398631f350d9405ffd584b7164eb8df15ac(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[QueueProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__473e552812e7548c2c24ddb5c55032eea64ec9ea594f6b63bbb998132838df17(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_delete_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_expire_state: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dead_letter_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_length: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    message_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__515c5b6329890a64fb11d4788b0d43ba2001d77fb9e91692bcb62338a8c27b2e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBindingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fef49eea9d4f92b3baeccd94ecee0594508ce5d15832d144beb42b5736eddded(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9586a9cdc077a7037874628147e28d6dd3356d3286406b1bc717ffa116e0a429(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0e50b149819d2af2d391f360bcfc444d3a9b7b5b163fe6c8a9607367e092227(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__172222ffdbb780b3710a6acde31a02193abcfe543bb326310e2780f4175e0829(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff257a88b733625ebb317b10692b64b2596f3dc3bccb8ae3cb97534230843cd8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd5ddad755a0ddacd7a1f8d9ea7653a2f20767a7508339231210c8b93dcc0999(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c23700fd901d460cd630f7099998b5699146c5a437ea3b1cdba82b74aa211618(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__465c988968222ecf1713471206eb5a14ac16c57659daab29f8322468de9458ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86452d7ab94c0e89a75b623690c04ae8247c925cba134d31eedfa3e5a73e5f12(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__857cb08d8bfeb4526bd1ea7f809e9ad66355021cb13ce6b693292c5b1ff83414(
    *,
    argument: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    binding_key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    binding_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_exchange: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20e15c172754b83d46e6db382896643b2f28d7d8324134f24b3c13f6c621c929(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosExchangeProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1783351c01422d922d0d9df4304c04732a0f1377a160c22c270bff30ca5fd12(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f6edc27baf249c0af28827f1ba1922dfb68d04b2d3c9749b8ce3ee8589af23c(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b4b0f8779336c9d717cc4828bc208a803eaf14615274a0113884d737502e8e9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2396a63bc058b60b4ce6cd9434dda404375d2bb6ddd3d1c6459db2e66ffb5d44(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fcad664791f566a8c708d7b3a5218d3bd8a9392c06abcb4153bb55fc76f09ce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68efe9b2f00c196cedd797834468e3b201d90da884d4557c8fbad4c857671eb4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c0f77a658bfd752d4eb7e46a97333ccb0d9e8b07a74657e92d519c607e3846a5(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f977d577a90a666f554f873bb46c2fbf54fa28e56d57c80469465fd7bfcfb2c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb4a4ba6ccae100174cec0a12aee54faf9223bf82c0f0f460e05da1dab0097a7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e600aaa137316039c38ea4e70ee37098da16bbfa856bf837cef59e7bf8470653(
    *,
    auto_delete_state: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    exchange_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exchange_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    internal: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    alternate_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59d13a86673b81488d47380fcd1fab8edb09621d7a95599156c28229028a841c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7945edad00144d1523fe8daec5fe5405b3a76b8cb3ec926ed8afdea07649586(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56194be6e45a9ae9e82c382ff2c688215deae47ab32085931a81c7e71515d7c5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c7401755ce8e56c793434d45f952048693ccef6e52c10110906eb072c896ec9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__34a479c1bdd31f845ec49743bc9b7154ac5c3b1257ad80ebb2a79610583f1f71(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e72f5e8c8f97fca312ad601c646dbf9ec20847447c06d8367a84e50088190622(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9c5678fe3bb89e4f422338260ea6b64d0ef0f810b39c8ee944722021ea415c6(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2bf1affffd2fc99de631273cced45ddd64911750a6f35b25232c2526fd7aa26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d018f46762415090436c86a8cc404f4a3a7b6eeebb1861ef6da2696eda2ae8b7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aef7a837201f190227aeb669b16260175a77846e7546137b85581a3036c7622(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71da045386111a12bb6eede9693245073c94016df837f962130e55dd6e2903cf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb817fef1daf4fade64abf22eaedd0321274b60e062dfeea5aec8501921f9b5a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca40cb78e928e925193cd2a9423a350270a9912b6df51f7ef291d75b3c0dcf1d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25fa3f677db9f265fcc51893fd3c99d8e1be2e28a54df34c56ca1ca3a51c675d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82f98cd9e6844333ad5727dfb3685165b1141032f56cad7ea24e86982838872a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94f0e15c7d2d13f833b8dc5b3beb7e74696fc3fa5ef58e4dd4b3c69f83f3e7c4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40cf30f8d3a546ede6c2fcaaa08669ee185021db0e49209a7bcef741dff23e81(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    max_tps: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    queue_capacity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    storage_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_eip_tps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    order_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    support_eip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    support_tracing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tracing_storage_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a64fad0d5dcb9992f0ca1bdc5a9055d5533e357133e731d60a4960fca863b11(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosQueueProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd735fa7d22736762c4cdefa4ee5c9b7cbce2255b94857d405a1213a5e83c798(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2df32e0c8229b5c87d308d7cf0689134fbd749997f13e6ca434aad9854f92a6c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d11b56151c3b299dc025f86a6e9eced65dfe275d3307ed7d702868566b4d8fe8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d239cf4493e7f768d1b348f7f53bac05cf71515c7a9cff431b72beb13b36eb16(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2380205b4b87e1858f9b88781971e09d99125395a987a5b96b52aef4ebb87b0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ae908c2bdd28599ba60810597f5202fe76f56f461d036c1f2a09577dcc3c68(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e04172e6d0db58a74c5b9fd5861bbc7c8a34bb21dc7b1c153ce6d00d1092812(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__66fa18b4c3417ff802ad6adbca859a9765fdbc9a38cc35f8726b947e842b1040(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ed3f29dd5ee2b181d5ba3416e246fd6358d279c25b1de075b6b97c26ac9f4e0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beec4d76a6655e2cb0890323950028ea9bda0984b57b873f93b1d1192bcbefaa(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__827489977470af48a099dcf6cff77f8154be0435e6724ed3038af64403af3a22(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a546eb1415e347792d0982998f3841f042de58e85d7e180164a0bb44c7889cf9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81ed71a7724f3d196eb2b8fd3127a712b00663a8466b55a72b94f5c63887c277(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3270f4c2f520cce986bf1f2855f65915ad576e606a720ea3c88d084ced4e49f5(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    queue_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_delete_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_expire_state: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dead_letter_exchange: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    exclusive_state: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    maximum_priority: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    max_length: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    message_ttl: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ce76417b6966890d92e73e35cbc32181fc61d852e394bff74a3c2e0110568e9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVirtualHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fbfafd12aee372823335d9255af68466b5a5f9fa6277a8148f864412b0988357(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e394c127731aaeb76d81b14daebfee45f12784240a2592f588f491d0c419780(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d681877fcbaee1cee00cbfefe5bda7f63f33be2e4557c01abc8be9647e59a6c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a958ede83e909b3134628fde50791d33394b1942a93311ce74d1d673fe211f54(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ce0e00abe0c0314a7d0dd3d3f32cc1300b03add30daba1a7e6a3ec855d17288(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__845049ec643884c9d780ffea18df1424b85642a4d6d59ee856d8c1cdc98000dc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VirtualHostProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38d2e68d9fe7589d24f70a039243e955029118303e5930f13a6a94f4373c08f4(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    virtual_host: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
