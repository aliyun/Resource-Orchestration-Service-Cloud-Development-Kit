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

import ros_cdk_core


class Binding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Binding",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Binding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["BindingProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[BindingProps, typing.Dict[str, typing.Any]],
                enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        argument: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        binding_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        binding_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_exchange: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
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
            def stub(
                *,
                argument: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                binding_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                binding_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                destination_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                source_exchange: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument argument", value=argument, expected_type=type_hints["argument"])
            check_type(argname="argument binding_key", value=binding_key, expected_type=type_hints["binding_key"])
            check_type(argname="argument binding_type", value=binding_type, expected_type=type_hints["binding_type"])
            check_type(argname="argument destination_name", value=destination_name, expected_type=type_hints["destination_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_exchange", value=source_exchange, expected_type=type_hints["source_exchange"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[str, typing.Any] = {
            "argument": argument,
            "binding_key": binding_key,
            "binding_type": binding_type,
            "destination_name": destination_name,
            "instance_id": instance_id,
            "source_exchange": source_exchange,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def argument(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property argument: X-match Attributes.

        Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        result = self._values.get("argument")
        assert result is not None, "Required property 'argument' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def binding_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bindingKey: The Binding Key.'''
        result = self._values.get("binding_key")
        assert result is not None, "Required property 'binding_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def binding_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bindingType: The Target Binding Types.

        Valid values: EXCHANGE, QUEUE.
        '''
        result = self._values.get("binding_type")
        assert result is not None, "Required property 'binding_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destinationName: The Target Queue Or Exchange of the Name.'''
        result = self._values.get("destination_name")
        assert result is not None, "Required property 'destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_exchange(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceExchange: The Source Exchange Name.'''
        result = self._values.get("source_exchange")
        assert result is not None, "Required property 'source_exchange' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Exchange(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Exchange",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Exchange``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["ExchangeProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[ExchangeProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrExchangeName")
    def attr_exchange_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ExchangeName: The name of the exchange.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExchangeName"))


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
        auto_delete_state: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        exchange_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        exchange_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        internal: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        alternate_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                auto_delete_state: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                exchange_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                exchange_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                internal: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                alternate_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument exchange_name", value=exchange_name, expected_type=type_hints["exchange_name"])
            check_type(argname="argument exchange_type", value=exchange_type, expected_type=type_hints["exchange_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument internal", value=internal, expected_type=type_hints["internal"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument alternate_exchange", value=alternate_exchange, expected_type=type_hints["alternate_exchange"])
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.

        Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        result = self._values.get("auto_delete_state")
        assert result is not None, "Required property 'auto_delete_state' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exchange_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property exchangeName: The name of the exchange.'''
        result = self._values.get("exchange_name")
        assert result is not None, "Required property 'exchange_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exchange_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property exchangeType: The type of the exchange.

        Valid values:
        FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        '''
        result = self._values.get("exchange_type")
        assert result is not None, "Required property 'exchange_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def internal(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property internal: Specifies whether an exchange is an internal exchange.

        Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        result = self._values.get("internal")
        assert result is not None, "Required property 'internal' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property alternateExchange: The alternate exchange.

        An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        result = self._values.get("alternate_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ExchangeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Instance",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[str, typing.Any]],
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
        '''Attribute InstanceId: The ID of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


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
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        max_tps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        queue_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_eip_tps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        order_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        support_eip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        support_tracing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tracing_storage_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                max_tps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                queue_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                max_eip_tps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                order_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                support_eip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                support_tracing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tracing_storage_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceType: The Instance Type.

        Valid values: professional, enterprise, vip.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def max_tps(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].

        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        result = self._values.get("max_tps")
        assert result is not None, "Required property 'max_tps' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def queue_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property queueCapacity: The queue capacity.

        If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        result = self._values.get("queue_capacity")
        assert result is not None, "Required property 'queue_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property storageSize: The storage size.

        It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceName: The instance name.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxEipTps: The max eip tps.

        It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        result = self._values.get("max_eip_tps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property orderNum: Set the number of instances to be created.'''
        result = self._values.get("order_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: The billing method of the instance.

        The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: The period.

        Valid values: 1, 2, 3, 6, 12, 24, 36.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property supportEip: Whether to support EIP.

        Valid values: true, false.
        '''
        result = self._values.get("support_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property supportTracing: Whether to support tracing.

        Valid values: true, false.
        '''
        result = self._values.get("support_tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property tracingStorageTime: It is valid when support_tracing == tracing_true.

        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        result = self._values.get("tracing_storage_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Queue(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.Queue",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::Queue``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["QueueProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[QueueProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute QueueName: The name of the queue.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueName"))


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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_delete_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_expire_state: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        dead_letter_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        exclusive_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        message_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                auto_delete_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_expire_state: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                dead_letter_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                exclusive_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                maximum_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                max_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                message_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property queueName: The name of the queue.'''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoDeleteState: Specifies whether the Auto Delete attribute is configured.

        Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("auto_delete_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoExpireState: The validity period after which the queue is automatically deleted.

        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        result = self._values.get("auto_expire_state")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deadLetterExchange: The dead-letter exchange.

        A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        result = self._values.get("dead_letter_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property deadLetterRoutingKey: The dead letter routing key.'''
        result = self._values.get("dead_letter_routing_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property exclusiveState: Specifies whether the queue is an exclusive queue.

        Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("exclusive_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maximumPriority: The priority function is not supported.'''
        result = self._values.get("maximum_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property maxLength: The maximum number of messages that can be stored in the queue.

        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property messageTtl: The message TTL of the queue If a message is retained in the Queue longer than the configured message lifetime, the message expires.

        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        result = self._values.get("message_ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "QueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosBinding",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Binding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosBindingProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Binding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosBindingProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="argument")
    def argument(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        argument: X-match Attributes. Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "argument"))

    @argument.setter
    def argument(
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
        jsii.set(self, "argument", value)

    @builtins.property
    @jsii.member(jsii_name="bindingKey")
    def binding_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindingKey: The Binding Key.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bindingKey"))

    @binding_key.setter
    def binding_key(
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
        jsii.set(self, "bindingKey", value)

    @builtins.property
    @jsii.member(jsii_name="bindingType")
    def binding_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bindingType"))

    @binding_type.setter
    def binding_type(
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
        jsii.set(self, "bindingType", value)

    @builtins.property
    @jsii.member(jsii_name="destinationName")
    def destination_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destinationName: The Target Queue Or Exchange of the Name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destinationName"))

    @destination_name.setter
    def destination_name(
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
        jsii.set(self, "destinationName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
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
        :Property: instanceId: InstanceId
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
    @jsii.member(jsii_name="sourceExchange")
    def source_exchange(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceExchange: The Source Exchange Name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceExchange"))

    @source_exchange.setter
    def source_exchange(
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
        jsii.set(self, "sourceExchange", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
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
        argument: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        binding_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        binding_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_exchange: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
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
            def stub(
                *,
                argument: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                binding_key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                binding_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                destination_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                source_exchange: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument argument", value=argument, expected_type=type_hints["argument"])
            check_type(argname="argument binding_key", value=binding_key, expected_type=type_hints["binding_key"])
            check_type(argname="argument binding_type", value=binding_type, expected_type=type_hints["binding_type"])
            check_type(argname="argument destination_name", value=destination_name, expected_type=type_hints["destination_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument source_exchange", value=source_exchange, expected_type=type_hints["source_exchange"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[str, typing.Any] = {
            "argument": argument,
            "binding_key": binding_key,
            "binding_type": binding_type,
            "destination_name": destination_name,
            "instance_id": instance_id,
            "source_exchange": source_exchange,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def argument(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        argument: X-match Attributes. Valid Values:
        "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        '''
        result = self._values.get("argument")
        assert result is not None, "Required property 'argument' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def binding_key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindingKey: The Binding Key.
        '''
        result = self._values.get("binding_key")
        assert result is not None, "Required property 'binding_key' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def binding_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        '''
        result = self._values.get("binding_type")
        assert result is not None, "Required property 'binding_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: destinationName: The Target Queue Or Exchange of the Name.
        '''
        result = self._values.get("destination_name")
        assert result is not None, "Required property 'destination_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_exchange(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceExchange: The Source Exchange Name.
        '''
        result = self._values.get("source_exchange")
        assert result is not None, "Required property 'source_exchange' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosExchange(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosExchange",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Exchange``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosExchangeProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Exchange``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosExchangeProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrExchangeName")
    def attr_exchange_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ExchangeName: The name of the exchange.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrExchangeName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="autoDeleteState")
    def auto_delete_state(
        self,
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "autoDeleteState"))

    @auto_delete_state.setter
    def auto_delete_state(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoDeleteState", value)

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
    @jsii.member(jsii_name="exchangeName")
    def exchange_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: exchangeName: The name of the exchange.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "exchangeName"))

    @exchange_name.setter
    def exchange_name(
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
        jsii.set(self, "exchangeName", value)

    @builtins.property
    @jsii.member(jsii_name="exchangeType")
    def exchange_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        exchangeType: The type of the exchange. Valid values:
        FANOUT: An exchange of this type routes all the received messages to all the queues bound to this exchange. You can use a fanout exchange to broadcast messages.
        DIRECT: An exchange of this type routes a message to the queue whose binding key is exactly the same as the routing key of the message.
        TOPIC: This type is similar to the direct exchange type. An exchange of this type routes a message to one or more queues based on the fuzzy match or multi-condition match result between the routing key of the message and the binding keys of the current exchange.
        HEADERS: Headers Exchange uses the Headers property instead of Routing Key for routing matching. When binding Headers Exchange and Queue, set the key-value pair of the binding property; when sending a message to the Headers Exchange, set the message's Headers property key-value pair and use the message Headers The message is routed to the bound Queue by comparing the attribute key-value pair and the bound attribute key-value pair.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "exchangeType"))

    @exchange_type.setter
    def exchange_type(
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
        jsii.set(self, "exchangeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: InstanceId
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
    @jsii.member(jsii_name="internal")
    def internal(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        internal: Specifies whether an exchange is an internal exchange. Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "internal"))

    @internal.setter
    def internal(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internal", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
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
        jsii.set(self, "virtualHost", value)

    @builtins.property
    @jsii.member(jsii_name="alternateExchange")
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "alternateExchange"))

    @alternate_exchange.setter
    def alternate_exchange(
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
        auto_delete_state: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        exchange_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        exchange_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        internal: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        alternate_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                auto_delete_state: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                exchange_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                exchange_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                internal: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                alternate_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument auto_delete_state", value=auto_delete_state, expected_type=type_hints["auto_delete_state"])
            check_type(argname="argument exchange_name", value=exchange_name, expected_type=type_hints["exchange_name"])
            check_type(argname="argument exchange_type", value=exchange_type, expected_type=type_hints["exchange_type"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument internal", value=internal, expected_type=type_hints["internal"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
            check_type(argname="argument alternate_exchange", value=alternate_exchange, expected_type=type_hints["alternate_exchange"])
        self._values: typing.Dict[str, typing.Any] = {
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
    ) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. If the last queue that is bound to an exchange is unbound, the exchange is automatically deleted.
        false: The Auto Delete attribute is not configured. If the last queue that is bound to an exchange is unbound, the exchange is not automatically deleted.
        '''
        result = self._values.get("auto_delete_state")
        assert result is not None, "Required property 'auto_delete_state' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exchange_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: exchangeName: The name of the exchange.
        '''
        result = self._values.get("exchange_name")
        assert result is not None, "Required property 'exchange_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exchange_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def internal(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        internal: Specifies whether an exchange is an internal exchange. Valid values:
        false: The exchange is not an internal exchange.
        true: The exchange is an internal exchange.
        '''
        result = self._values.get("internal")
        assert result is not None, "Required property 'internal' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def alternate_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: alternateExchange: The alternate exchange. An alternate exchange is configured for an existing exchange. It is used to receive messages that fail to be routed to queues from the existing exchange.
        '''
        result = self._values.get("alternate_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosExchangeProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Instance``.

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
        :Attribute: InstanceId: The ID of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

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
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: The Instance Type. Valid values: professional, enterprise, vip.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
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
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="maxTps")
    def max_tps(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "maxTps"))

    @max_tps.setter
    def max_tps(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "maxTps", value)

    @builtins.property
    @jsii.member(jsii_name="queueCapacity")
    def queue_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "queueCapacity"))

    @queue_capacity.setter
    def queue_capacity(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "queueCapacity", value)

    @builtins.property
    @jsii.member(jsii_name="storageSize")
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        storageSize: The storage size. It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "storageSize"))

    @storage_size.setter
    def storage_size(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        if __debug__:
            def stub(
                value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "storageSize", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
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
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="maxEipTps")
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxEipTps: The max eip tps. It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxEipTps"))

    @max_eip_tps.setter
    def max_eip_tps(
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
        jsii.set(self, "maxEipTps", value)

    @builtins.property
    @jsii.member(jsii_name="orderNum")
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: orderNum: Set the number of instances to be created.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "orderNum"))

    @order_num.setter
    def order_num(
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
        jsii.set(self, "orderNum", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
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
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
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
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
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
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="supportEip")
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: supportEip: Whether to support EIP. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "supportEip"))

    @support_eip.setter
    def support_eip(
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
        jsii.set(self, "supportEip", value)

    @builtins.property
    @jsii.member(jsii_name="supportTracing")
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: supportTracing: Whether to support tracing. Valid values: true, false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "supportTracing"))

    @support_tracing.setter
    def support_tracing(
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
        jsii.set(self, "supportTracing", value)

    @builtins.property
    @jsii.member(jsii_name="tracingStorageTime")
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tracingStorageTime: It is valid when support_tracing == tracing_true.
        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "tracingStorageTime"))

    @tracing_storage_time.setter
    def tracing_storage_time(
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
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        max_tps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        queue_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        max_eip_tps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        order_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        support_eip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        support_tracing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tracing_storage_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                max_tps: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                queue_capacity: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                storage_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
                instance_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                max_eip_tps: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                order_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                period_unit: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                support_eip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                support_tracing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                tracing_storage_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceType: The Instance Type. Valid values: professional, enterprise, vip.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def max_tps(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
        If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
        If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
        '''
        result = self._values.get("max_tps")
        assert result is not None, "Required property 'max_tps' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def queue_capacity(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        queueCapacity: The queue capacity. If instance type is professional, the valid value is [50, 1000] with the step size 5.
        If instance type is enterprise, the valid value is [200, 6000] with the step size 100
        If instance type is vip, the valid value is [200, 80000] with the step size 100
        '''
        result = self._values.get("queue_capacity")
        assert result is not None, "Required property 'queue_capacity' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def storage_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        storageSize: The storage size. It is valid when instance_type is vip.
        If instance type is professional or enterprise, the valid value is 200.
        If instance type is vip, the valid value is [700, 2800] with the step size 100
        '''
        result = self._values.get("storage_size")
        assert result is not None, "Required property 'storage_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceName: The instance name.
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_eip_tps(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxEipTps: The max eip tps. It is valid when support_eip is true.
        The minimum value is 128, with the step size 128.
        '''
        result = self._values.get("max_eip_tps")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def order_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: orderNum: Set the number of instances to be created.
        '''
        result = self._values.get("order_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: The billing method of the instance. The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
        PrePaid: subscription
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: The period. Valid values: 1, 2, 3, 6, 12, 24, 36.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def support_eip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: supportEip: Whether to support EIP. Valid values: true, false.
        '''
        result = self._values.get("support_eip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def support_tracing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: supportTracing: Whether to support tracing. Valid values: true, false.
        '''
        result = self._values.get("support_tracing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tracing_storage_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tracingStorageTime: It is valid when support_tracing == tracing_true.
        The retention period of message traces was set. Valid values: 3, 7, 15.
        If instance_type=vip, the valid values is 15.
        If instance_type!=vip, the valid values is 3, 7, 15.
        '''
        result = self._values.get("tracing_storage_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosQueue(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosQueue",
):
    '''A ROS template type:  ``ALIYUN::AMQP::Queue``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosQueueProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::Queue``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosQueueProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrQueueName")
    def attr_queue_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: QueueName: The name of the queue.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrQueueName"))

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
        :Property: instanceId: InstanceId
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
    @jsii.member(jsii_name="queueName")
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: queueName: The name of the queue.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "queueName"))

    @queue_name.setter
    def queue_name(
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
        jsii.set(self, "queueName", value)

    @builtins.property
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
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
        jsii.set(self, "virtualHost", value)

    @builtins.property
    @jsii.member(jsii_name="autoDeleteState")
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoDeleteState"))

    @auto_delete_state.setter
    def auto_delete_state(
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
        jsii.set(self, "autoDeleteState", value)

    @builtins.property
    @jsii.member(jsii_name="autoExpireState")
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoExpireState: The validity period after which the queue is automatically deleted.
        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoExpireState"))

    @auto_expire_state.setter
    def auto_expire_state(
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
        jsii.set(self, "autoExpireState", value)

    @builtins.property
    @jsii.member(jsii_name="deadLetterExchange")
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deadLetterExchange"))

    @dead_letter_exchange.setter
    def dead_letter_exchange(
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
        jsii.set(self, "deadLetterExchange", value)

    @builtins.property
    @jsii.member(jsii_name="deadLetterRoutingKey")
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: deadLetterRoutingKey: The dead letter routing key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "deadLetterRoutingKey"))

    @dead_letter_routing_key.setter
    def dead_letter_routing_key(
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
        jsii.set(self, "deadLetterRoutingKey", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveState")
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "exclusiveState"))

    @exclusive_state.setter
    def exclusive_state(
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
        jsii.set(self, "exclusiveState", value)

    @builtins.property
    @jsii.member(jsii_name="maximumPriority")
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maximumPriority: The priority function is not supported.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maximumPriority"))

    @maximum_priority.setter
    def maximum_priority(
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
        jsii.set(self, "maximumPriority", value)

    @builtins.property
    @jsii.member(jsii_name="maxLength")
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxLength: The maximum number of messages that can be stored in the queue.
        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "maxLength"))

    @max_length.setter
    def max_length(
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
        jsii.set(self, "maxLength", value)

    @builtins.property
    @jsii.member(jsii_name="messageTtl")
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        messageTtl: The message TTL of the queue
        If a message is retained in the Queue longer than the configured message lifetime, the message expires.
        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "messageTtl"))

    @message_ttl.setter
    def message_ttl(
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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_delete_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_expire_state: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        dead_letter_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        exclusive_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        maximum_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        max_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        message_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                queue_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                auto_delete_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                auto_expire_state: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                dead_letter_exchange: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                dead_letter_routing_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
                exclusive_state: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
                maximum_priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                max_length: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
                message_ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def queue_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: queueName: The name of the queue.
        '''
        result = self._values.get("queue_name")
        assert result is not None, "Required property 'queue_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_delete_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoDeleteState: Specifies whether the Auto Delete attribute is configured. Valid values:
        true: The Auto Delete attribute is configured. The queue is automatically deleted after the last subscription from consumers to this queue is canceled.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("auto_delete_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_expire_state(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoExpireState: The validity period after which the queue is automatically deleted.
        If the queue is not accessed within a specified period of time, it is automatically deleted.
        '''
        result = self._values.get("auto_expire_state")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dead_letter_exchange(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deadLetterExchange: The dead-letter exchange. A dead-letter exchange is used to receive rejected messages.
        If a consumer rejects a message that cannot be retried, this message is routed to a specified dead-letter exchange.
        Then, the dead-letter exchange routes the message to the queue that is bound to the dead-letter exchange.
        '''
        result = self._values.get("dead_letter_exchange")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dead_letter_routing_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: deadLetterRoutingKey: The dead letter routing key.
        '''
        result = self._values.get("dead_letter_routing_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def exclusive_state(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        exclusiveState: Specifies whether the queue is an exclusive queue. Valid values:
        true: The queue is an exclusive queue. It can be used only for the connection that declares the exclusive queue. After the connection is closed, the exclusive queue is automatically deleted.
        false: The Auto Delete attribute is not configured.
        '''
        result = self._values.get("exclusive_state")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def maximum_priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: maximumPriority: The priority function is not supported.
        '''
        result = self._values.get("maximum_priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def max_length(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        maxLength: The maximum number of messages that can be stored in the queue.
        If this threshold is exceeded, the earliest messages that are routed to the queue are discarded.
        '''
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def message_ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        messageTtl: The message TTL of the queue
        If a message is retained in the Queue longer than the configured message lifetime, the message expires.
        The value of message lifetime must be a non-negative integer, up to 1 day.
        The unit is milliseconds
        '''
        result = self._values.get("message_ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosQueueProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVirtualHost(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.RosVirtualHost",
):
    '''A ROS template type:  ``ALIYUN::AMQP::VirtualHost``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["RosVirtualHostProps", typing.Dict[str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::AMQP::VirtualHost``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[RosVirtualHostProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrVirtualHost")
    def attr_virtual_host(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VirtualHost: The name of the virtual host.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVirtualHost"))

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
        :Property: instanceId: InstanceId
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
    @jsii.member(jsii_name="virtualHost")
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "virtualHost"))

    @virtual_host.setter
    def virtual_host(
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
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::VirtualHost``.

        :param instance_id: 
        :param virtual_host: 
        '''
        if __debug__:
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: InstanceId
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: virtualHost: The name of the virtual host.
        '''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVirtualHostProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VirtualHost(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-amqp.VirtualHost",
):
    '''A ROS resource type:  ``ALIYUN::AMQP::VirtualHost``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Union["VirtualHostProps", typing.Dict[str, typing.Any]],
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
            def stub(
                scope: ros_cdk_core.Construct,
                id: builtins.str,
                props: typing.Union[VirtualHostProps, typing.Dict[str, typing.Any]],
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
    @jsii.member(jsii_name="attrVirtualHost")
    def attr_virtual_host(self) -> ros_cdk_core.IResolvable:
        '''Attribute VirtualHost: The name of the virtual host.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVirtualHost"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-amqp.VirtualHostProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId", "virtual_host": "virtualHost"},
)
class VirtualHostProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::AMQP::VirtualHost``.

        :param instance_id: Property instanceId: InstanceId.
        :param virtual_host: Property virtualHost: The name of the virtual host.
        '''
        if __debug__:
            def stub(
                *,
                instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
                virtual_host: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            ) -> None:
                ...
            type_hints = typing.get_type_hints(stub)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument virtual_host", value=virtual_host, expected_type=type_hints["virtual_host"])
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "virtual_host": virtual_host,
        }

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: InstanceId.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def virtual_host(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property virtualHost: The name of the virtual host.'''
        result = self._values.get("virtual_host")
        assert result is not None, "Required property 'virtual_host' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
